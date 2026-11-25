/**
 * Lazy loader for CBT exam question banks.
 * Splits ~15.5 MB of shift JSONs into individual on-demand chunks so the
 * initial portal bundle loads in ~300 KB instead of 16 MB.
 */

const questionModules = import.meta.glob([
  './alp*.json',
  './groupd/*.json',
  './ntpcug/*.json',
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

export async function loadTestQuestions(test) {
  if (!test) return [];
  if (Array.isArray(test.questions)) {
    return test.questions;
  }
  if (testQuestionsCache.has(test.id)) {
    return testQuestionsCache.get(test.id);
  }

  const source = test.questionSource;
  if (!source?.file) {
    throw new Error(`No questionSource configured for test: ${test.id}`);
  }

  const raw = await loadRawShiftFile(source.file);
  let derived = raw;

  if (source.sectionFilter) {
    derived = raw.filter((q) => q.section === source.sectionFilter);
  } else if (Array.isArray(source.slice)) {
    derived = raw.slice(source.slice[0], source.slice[1]);
  }

  if (source.reindex) {
    derived = derived.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }));
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
