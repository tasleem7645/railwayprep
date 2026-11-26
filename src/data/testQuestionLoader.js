/**
 * Lazy loader for CBT exam question banks.
 * Splits ~15.5 MB of shift JSONs into individual on-demand chunks so the
 * initial portal bundle loads in ~300 KB instead of 16 MB.
 */

const questionModules = import.meta.glob([
  './alp*.json',
  './groupd/*.json',
  './ntpcug/*.json',
  './tech3/*.json',
  './trades/*.json',
]);

const rawShiftCache = new Map();
const rawInFlight = new Map();
const testQuestionsCache = new Map();

async function loadRawShiftFile(file) {
  if (rawShiftCache.has(file)) {
    return rawShiftCache.get(file);
  }
  if (rawInFlight.has(file)) {
    return rawInFlight.get(file);
  }
  const loader = questionModules[file];
  if (!loader) {
    throw new Error(`Question bank file not found: ${file}`);
  }
  const promise = loader()
    .then((mod) => {
      const data = mod?.default || mod;
      rawShiftCache.set(file, data);
      rawInFlight.delete(file);
      return data;
    })
    .catch((err) => {
      rawInFlight.delete(file);
      throw err;
    });
  rawInFlight.set(file, promise);
  return promise;
}

function applySourceFilters(raw, spec, rootOverrideSection = null) {
  let derived = Array.isArray(raw) ? raw : (raw?.questions || []);
  if (spec.sectionFilter) {
    derived = derived.filter((q) => q.section === spec.sectionFilter);
  }
  if (spec.subSectionFilter) {
    derived = derived.filter((q) => q.subSection === spec.subSectionFilter);
  }
  if (Array.isArray(spec.slice)) {
    derived = derived.slice(spec.slice[0], spec.slice[1]);
  }
  const secOverride = spec.overrideSection || rootOverrideSection;
  if (secOverride) {
    derived = derived.map((q) => ({ ...q, section: secOverride }));
  }
  return derived;
}

export async function loadTestQuestions(test) {
  if (!test) return [];
  if (Array.isArray(test.questions)) {
    return test.questions;
  }
  if (testQuestionsCache.has(test.id)) {
    return testQuestionsCache.get(test.id);
  }

  const source = test.questionSource;
  if (!source?.file && !Array.isArray(source?.files)) {
    throw new Error(`No questionSource configured for test: ${test.id}`);
  }

  let derived;
  if (Array.isArray(source.files)) {
    const chunks = await Promise.all(
      source.files.map(async (part) => {
        const raw = await loadRawShiftFile(part.file);
        return applySourceFilters(raw, part, source.overrideSection || null);
      })
    );
    derived = chunks.flat();
    if (Array.isArray(source.slice)) {
      derived = derived.slice(source.slice[0], source.slice[1]);
    }
  } else {
    const raw = await loadRawShiftFile(source.file);
    derived = applySourceFilters(raw, source, source.overrideSection || null);
  }

  if (source.reindex || Array.isArray(source.files)) {
    derived = derived.map((q, idx) => ({ ...q, id: idx + 1, shiftQuestionNo: idx + 1, originalId: q.id }));
  }

  testQuestionsCache.set(test.id, derived);
  return derived;
}

export async function hydrateTest(test) {
  if (!test) return null;
  if (Array.isArray(test.questions)) {
    return test;
  }
  const questions = await loadTestQuestions(test);
  return { ...test, questions };
}
