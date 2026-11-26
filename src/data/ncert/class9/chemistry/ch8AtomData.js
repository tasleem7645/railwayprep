/**
 * Class 9 NCERT (2026-27 New Edition — ihsc108.pdf, Pages 140–161) + Railway CBT Deep-Dive Edition
 * Chapter 8: A Journey — Inside the Atom (एक यात्रा — परमाणु के भीतर) — Gold Standard v3
 * Complete 2026-27 NCERT Syllabus: Kanad/Democritus/Dalton -> Thomson Cathode Tube & Plum Pudding ->
 * Rutherford Gold Foil Nucleus & Proton -> Bohr Orbits & Quantum Cloud -> Chadwick Neutron & BARC Dhruva ->
 * Berzelius/IUPAC Symbols (Table 8.2) -> Bohr-Bury 2n² (Z=1..18 Table 8.4 + Valency) ->
 * Isotopes (H, C, Cl 35.5 u, U-235/Co-60/I-131/C-14) & Isobars (Ar-40, K-40, Ca-40).
 * Zero 3rd-party mentions, double-escaped KaTeX, all 18 Think Qs & 15 Exercises solved + 24 Verbatim RRB PYQs.
 */

export const CH8_ATOM_DATA = {
  id: 'c9-chem-ch8',
  classId: 'class9',
  subjectId: 'chemistry',
  subjectLabel: { en: 'Chemistry', hi: 'रसायन विज्ञान (Chemistry)' },
  chapterNumber: 8,
  sourceCode: 'Class 9 NCERT (2026–27) • Ch 8: Inside the Atom (CBT Edition)',
  blueprintSvgKey: 'ch8-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Atomic Number (Z), Mass Number (A) & Isotopes/Isobars', hi: 'परमाणु क्रमांक (Z), द्रव्यमान संख्या (A), समस्थानिक व समभारिक' }, pct: 34 },
    { label: { en: 'Bohr–Bury Rules (2n²), K-L-M-N & Valency (Z = 1–18)', hi: 'बोर–बरी नियम (2n²), इलेक्ट्रॉनिक विन्यास व संयोजकता' }, pct: 30 },
    { label: { en: 'Rutherford Gold Foil, Nucleus Scale & Discoverers', hi: 'रदरफोर्ड स्वर्ण-पर्णिका, नाभिक माप व खोजकर्ता वैज्ञानिक' }, pct: 22 },
    { label: { en: 'IUPAC Latin Symbols (Fe, Hg, W, K, Na) & Weighted Mass', hi: 'IUPAC लैटिन प्रतीक (Fe, Hg, W, K, Na) व औसत द्रव्यमान (35.5 u)' }, pct: 14 },
  ],
  title: {
    en: 'Chapter 8: A Journey — Inside the Atom',
    hi: 'अध्याय 8: एक यात्रा — परमाणु के भीतर',
  },
  subtitle: {
    en: 'Complete 2026-27 NCERT Deep-Dive • Atomic Models, Z=1–18 Valency, Chlorine 35.5 u, Isotope Uses, Interactive Bohr Lab & 24 Verified RRB PYQs',
    hi: 'नया 2026-27 NCERT पाठ्यक्रम संपूर्ण गहराई • परमाणु मॉडल, बोर–बरी 2n², Z=1–18 संयोजकता, समस्थानिक-समभारिक, बोर प्रयोगशाला व 24 रेलवे PYQ',
  },
  metrics: {
    pages: 22,
    activities: 3,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 5,
    exercisesSolved: 15,
    pyqsMatched: 24,
  },

  hero: {
    imageUrl: '/ncert-notes/class9-chem-ch8/hero-inside-atom.webp',
    caption: {
      en: 'Thomson watermelon positive sphere, Rutherford alpha-scattering nucleus discovery, discrete Bohr energy shells (K, L, M, N), and medical/archaeological isotopes.',
      hi: 'टॉमसन का प्लम-पुडिंग तरबूज मॉडल, रदरफोर्ड स्वर्ण-पर्णिका नाभिक खोज, बोर के ऊर्जा स्तर (K, L, M, N) व प्रमुख समस्थानिकों का वैज्ञानिक दृश्य।',
    },
  },

  quickRevision60Sec: [
    {
      en: '**Three Subatomic Particles (`Table 8.1`)**: **Electron ($e^-$)** `-1` (`-1.602×10⁻¹⁹ C`), discovered by **J. J. Thomson (`1897` Cathode Tube)**. **Proton ($p^+$)** `+1` (`mass ~2000× e⁻`), discovered/named by **Ernest Rutherford** (*Goldstein observed Canal Rays earlier*). **Neutron ($n^0$)** `0 charge`, mass $\\approx p^+$, discovered by **James Chadwick (`1932`)** — missing ONLY in Protium Hydrogen (`¹₁H`)!',
      hi: '**तीन अवपरमाणुक कण (`तालिका 8.1`):** **इलेक्ट्रॉन ($e^-$)**: आवेश `-1` (`-1.602×10⁻¹⁹ C`), खोज **जे. जे. टॉमसन (`1897` कैथोड किरण नलिका)**। **प्रोटॉन ($p^+$)**: आवेश `+1`, द्रव्यमान इलेक्ट्रॉन का **लगभग 2000 गुना**, नामकरण **अर्नेस्ट रदरफोर्ड**। **न्यूट्रॉन ($n^0$)**: अनावेशित (`0`), खोज **जेम्स चैडविक (`1932`)** — केवल साधारण हाइड्रोजन (`¹₁H`) में अनुपस्थित!',
    },
    {
      en: '**Rutherford Gold Foil (`1911`, Geiger–Marsden)**: Bombarded ultra-thin gold leaf with **$\\alpha$-particles ($^4_2\\text{He}^{2+}$)**. Most passed straight (**atom mostly empty space**); small fraction deflected sharply (**tiny, dense +ve central Nucleus**). **Diameter Ratio**: Atom `$10^{-10}\\text{ m}$` vs Nucleus `$10^{-15}\\text{ m}$` (`10⁵` / `1 lakh` times smaller!). **Failed to explain atomic stability** (`spiral collapse`, Fig 8.6).',
      hi: '**रदरफोर्ड स्वर्ण-पर्णिका प्रयोग (`1911`)**: अल्फा कण (`He²⁺ = 2p⁺+2n⁰`) की बौछार में अधिकांश कण सीधे निकले (**अधिकांश भाग रिक्त**), कुछ बड़े कोण पर मुड़े/लौटे (**केंद्र में सघन धनावेशित नाभिक**)। आकार अंतर **$10^5$ गुना (`1 लाख गुना`)** (`परमाणु 10⁻¹⁰ m` बनाम `नाभिक 10⁻¹⁵ m`)! **सीमा:** परमाणु के स्थायित्व की व्याख्या करने में असफल।',
    },
    {
      en: '**Niels Bohr (`1913`) & Bohr–Bury Rules**: Electrons revolve without losing energy only in fixed **Shells (`K, L, M, N` for `n = 1, 2, 3, 4`)**. Max capacity = **$2n^2$** (`K=2, L=8, M=18, N=32`), **outermost shell max 8 (`Octet`)**. **Valency** = electrons lost (`≤3`), shared (`4`), or gained (`8 − valence e⁻`, `5..7`) to complete octet (`He, Ne, Ar = 0`).',
      hi: '**नील्स बोर मॉडल (`1913`) एवं बोर–बरी नियम**: इलेक्ट्रॉन केवल निश्चित ऊर्जा स्तरों (**`K, L, M, N`** या `n=1,2,3,4`) में बिना ऊर्जा क्षय घूर्णन करते हैं। अधिकतम इलेक्ट्रॉन = **$2n^2$** (`K=2, L=8, M=18, N=32`); **सबसे बाह्यतम कोश में अधिकतम 8 इलेक्ट्रॉन**! **संयोजकता** = अष्टक पूर्ण करने हेतु त्यागे, ग्रहण या साझा किए गए इलेक्ट्रॉन (`He, Ne, Ar = 0`)।',
    },
    {
      en: '**$Z$, $A$ & Nucleons (`Table 8.3–8.5`)**: **Atomic Number ($Z$)** $= p^+$ (`identity of element!`). **Mass Number ($A$)** $= p^+ + n^0$ (`total Nucleons`). **Notation:** $^A_Z X$ (`¹²₆C`). Weighted Atomic Mass of **Chlorine** (`³⁵Cl 75% + ³⁷Cl 25%`, ratio `3:1`) = **$35.5\\text{ u}$** (`NOT average 36 u!`).',
      hi: '**परमाणु क्रमांक ($Z$) व द्रव्यमान संख्या ($A$)**: **$Z = \\text{प्रोटॉन संख्या}$** (तत्व की विशिष्ट पहचान!), **$A = p^+ + n^0$ (`न्यूक्लिऑन योग`)**; संकेत $^A_Z X$ (`¹²₆C`)। **क्लोरीन** के दो समस्थानिक (`³⁵Cl 75%` व `³⁷Cl 25%`, `3:1` अनुपात) का भारित औसत परमाणु द्रव्यमान = **$35.5\\text{ u}$**!',
    },
    {
      en: '**Isotopes vs Isobars + Society Uses (`p.155`)**: **Isotopes (`समस्थानिक`)**: Same $Z$, diff $n^0/A$ -> **Same Chemical Properties**, diff Physical (`Protium ¹₁H, Deuterium ²₁H, Tritium ³₁H`; `C-12/13/14`). **Uses**: **U-235** (`Nuclear fuel`), **Co-60** (`Cancer`), **I-131** (`Goitre/Thyroid`), **C-14** (`Fossil dating`). **Isobars (`समभारिक`)**: Diff $Z$, SAME $A$ (**`⁴⁰₁₈Ar, ⁴⁰₁₉K, ⁴⁰₂₀Ca`**)!',
      hi: '**समस्थानिक बनाम समभारिक**: **समस्थानिक** (`समान Z, भिन्न A`) — रासायनिक गुण समान (इलेक्ट्रॉन समान!), भौतिक गुण भिन्न; उपयोग — **U-235** (`परमाणु ईंधन`), **Co-60** (`कैंसर रेडियोथेरेपी`), **I-131** (`घेंघा/थायरॉइड`), **C-14** (`जीवाश्म आयु`)। **समभारिक** (`भिन्न Z, समान A`): **`⁴⁰₁₈Ar, ⁴⁰₁₉K, ⁴⁰₂₀Ca`**!',
    },
  ],

  sections: [
    {
      id: 'discovery-models-rutherford',
      number: '8.1–8.2.2',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'From Kanad & Dalton to Cathode Tube (Thomson) and Rutherford’s Gold Foil Nucleus',
        hi: 'कणाद व डाल्टन से कैथोड किरण नलिका (टॉमसन) तथा रदरफोर्ड के स्वर्ण-पर्णिका नाभिक मॉडल तक की यात्रा',
      },
      summaryTag: { en: 'NCERT Pages 140–145 + Kanad/Dalton + Thomson CRT + Geiger–Marsden + Proton', hi: 'NCERT पृष्ठ 140–145 + कणाद-डाल्टन + टॉमसन CRT + रदरफोर्ड प्रयोग व प्रोटॉन' },
      blocks: [
        {
          heading: {
            en: '1. Ancient Thought (Kanad & Democritus), Dalton’s 1808 Theory & Discovery of the Electron (1897)',
            hi: '1. प्राचीन परमाणु विचार (आचार्य कणाद व डेमोक्रिटस), डाल्टन (1808) और इलेक्ट्रॉन की खोज (टॉमसन, 1897)',
          },
          conceptStory: {
            en: 'Around `2,000 years ago`, ancient Indian sage **Acharya Kanad** (`वैशेषिक सूत्र / Vaisheshika Sutra`) reasoned that dividing matter repeatedly reaches an indivisible ultimate particle—**Parmanu (`परमाणु`)**—which combines in pairs (`Dvya / द्वय`) and triplets (`Trya / त्रय`) to build everything in the universe. Independently in ancient Greece, **Leucippus and Democritus** coined ***atomos*** (meaning *"uncuttable / indivisible"*). Yet these early ideas were philosophical, not experimental.\nCenturies later in **`1808`**, **John Dalton** proposed the first science-based **Atomic Theory**, treating atoms as tiny, indivisible building blocks. However, late 19th-century discoveries shattered "indivisibility": first **Radioactivity** (`elements emitting invisible radiation and sub-particles`), and then in **`1897`**, **J. J. Thomson** passed high voltage through low-pressure gas inside a glass **Cathode Ray Discharge Tube (`Fig 8.1`)**! Rays travelled straight from negative **Cathode `(−)`** toward positive **Anode `(+)`** regardless of which gas filled the tube or what metal formed the cathode! Electric and magnetic deflection proved these rays were streams of ultra-light negatively charged particles—later named **Electrons ($e^-$)**, each carrying exact charge **`-1.602 × 10⁻¹⁹ C`** (taken as relative **`-1`**) and proving electrons reside universally inside EVERY element’s atoms!',
            hi: 'लगभग `2,000 वर्ष पूर्व` प्राचीन भारतीय दार्शनिक **आचार्य कणाद** ने अपने संस्कृत ग्रंथ ***वैशेषिक सूत्र*** में बताया कि किसी भी द्रव्य को निरंतर विभाजित करने पर अंततः जो सूक्ष्मतम अविभाज्य कण प्राप्त होता है, वह **परमाणु** है (जो जुड़कर **द्वय** व **त्रय** बनाता है)। ठीक इसी प्रकार ग्रीस के **लियुसीपस और डेमोक्रिटस** ने इसे ***एटोमॉस (Atomos = अविभाज्य)*** कहा। तथापि ये दोनों केवल काल्पनिक विचार थे।\nसन् **`1808`** में **जॉन डाल्टन** ने वैज्ञानिक प्रयोगों पर आधारित प्रथम **परमाणु सिद्धांत** दिया जिसमें परमाणु को अविभाज्य इकाई माना। किंतु 19वीं सदी के अंत में **रेडियोधर्मिता (`Radioactivity`)** की खोज ने सिद्ध किया कि परमाणु के अंदर भी और छोटे कण छिपे हैं। सन् **`1897`** में **जे. जे. टॉमसन** ने काँच की निर्वात नलिका में अति निम्न दाब पर गैस लेकर उच्च वोल्टता प्रवाहित की (**कैथोड किरण नलिका**, चित्र 8.1): किरणें ऋणावेशित **कैथोड `(−)`** से धनावेशित **ऐनोड `(+)`** की ओर चलती दिखीं। चूँकि कैथोड धातु या भरी हुई गैस बदलने पर भी इनकी प्रकृति नहीं बदली, टॉमसन ने सिद्ध किया कि ये ऋणावेशित कण — **इलेक्ट्रॉन ($e^-$)** (वास्तविक आवेश **`-1.602 × 10⁻¹⁹ C`**, सापेक्ष आवेश **`-1`**) — सभी तत्वों के परमाणुओं में मौजूद मौलिक अवयव हैं! *(इसी के लिए टॉमसन को 1906 में भौतिकी का नोबेल पुरस्कार मिला)*।',
          },
          bullets: [
            {
              en: '**==Dalton vs Thomson Landmark:==** **1808 Dalton** launched experimental atomic chemistry (`indivisible sphere`); **1897 Thomson** broke divisibility open by discovering the **Electron** (first subatomic particle known).',
              hi: '**==डाल्टन बनाम टॉमसन परीक्षा बिंदु:==** डाल्टन (`1808`) ने आधुनिक परमाणु सिद्धांत की नींव रखी; टॉमसन (`1897`) ने **इलेक्ट्रॉन** खोजकर सिद्ध किया कि परमाणु विभाज्य है।',
            },
            {
              en: '**NCERT Margin Fact:** Atoms themselves have NO colour—diagram colours (`orange/blue/purple`) are purely illustrative.',
              hi: '**NCERT टिप्पणी:** वास्तविक परमाणुओं का कोई रंग नहीं होता; रेखाचित्रों के रंग केवल समझने की सुविधा के लिए होते हैं।',
            },
          ],
          realImage: {
            url: '/ncert-notes/class9-chem-ch8/real/crookes-cathode-tube.webp',
            title: {
              en: 'Glass Cathode Ray Discharge Tube Apparatus (`NCERT Fig 8.1 Reference`)',
              hi: 'कैथोड किरण विसर्जन नलिका (`NCERT चित्र 8.1 वास्तविक संदर्भ`)',
            },
            caption: {
              en: 'Low-pressure evacuated glass tube where cathode rays emerge from the negative electrode toward the anode regardless of filled gas.',
              hi: 'अति निम्न दाब की काँच नलिका जिसमें उच्च वोल्टता से कैथोड `(−)` से ऐनोड `(+)` की ओर इलेक्ट्रॉन किरणपुंज उत्पन्न होते हैं।',
            },
          },
          inlinePyqIds: [17],
        },
        {
          heading: {
            en: '2. Thomson’s Plum Pudding / Watermelon Model (Fig 8.2–8.3) & Critical Fruit Test',
            hi: '2. टॉमसन का ‘प्लम पुडिंग / तरबूज मॉडल’ (चित्र 8.2–8.3) व वैज्ञानिक परीक्षण',
          },
          conceptStory: {
            en: 'Once negatively charged electrons were proven, Thomson had to answer why ordinary matter stays **electrically neutral**. He proposed his **`Plum Pudding Model`**: the atom is a **uniform positively charged sphere** with negatively charged electrons embedded uniformly throughout (`total + charge = total − charge`). In India, NCERT uses a **Watermelon (`Fig 8.3`)**: red edible pulp represents diffuse positive charge, while black seeds embedded across it resemble electrons!\nNotice NCERT **Think Q1 & Q2**: If you build a clay-and-bead model, it remains neutral ONLY if clay is positively charged and equals the beads’ total negative charge (if clay has lower positive charge or even a tiny negative taint, neutrality breaks!). Comparing to a **sliced watermelon** works neatly because seeds sit scattered throughout pulp; whereas an **orange or lemon (`Think Q2`)** has seeds clustered in wet central segments inside an outer rind—matching Thomson poorly!',
            hi: 'जब इलेक्ट्रॉन पर ऋणावेश सिद्ध हुआ, तो प्रश्न उठा कि समग्र परमाणु **विद्युत उदासीन** कैसे रहता है? इसके उत्तर में **जे. जे. टॉमसन** ने पहला परमाणु संरचना मॉडल — **प्लम पुडिंग मॉडल (`चित्र 8.2`)** प्रस्तुत किया: परमाणु एक एकसमान **धनावेशित गोला** है जिसमें इलेक्ट्रॉन उसी प्रकार धँसे हैं जैसे पुडिंग में सूखे मेवे (प्लम्स) या **तरबूज (`चित्र 8.3`) के लाल खाने योग्य गूदे में काले बीज**! यहाँ गोले का कुल धनावेश इलेक्ट्रॉनों के कुल ऋणावेश के ठीक बराबर होने से परमाणु उदासीन रहता है।\n• **सोचिए 1 व 2 विश्लेषण:** मिट्टी व मोतियों से बनाया मॉडल तभी उदासीन रहेगा जब मिट्टी पर धनावेश मोतियों के कुल ऋणावेश के बराबर हो। इसकी तुलना **संतरे या नींबू** से करना कम सटीक है क्योंकि उनके बीज पूरे गोले में समान रूप से बिखरे होने के बजाय केंद्र के पास गुच्छों में सीमित रहते हैं!',
          },
          realImage: {
            url: '/ncert-notes/class9-chem-ch8/real/jj-thomson.webp',
            title: {
              en: 'Sir J. J. Thomson (`1856–1940`, Physics Nobel Laureate `1906`) — Cavendish Laboratory',
              hi: 'सर जे. जे. टॉमसन (`1856–1940`, भौतिकी नोबेल `1906`) — इलेक्ट्रॉन के खोजकर्ता',
            },
            caption: {
              en: 'Thomson’s cathode ray experiments established that electrons are universal constituents of every atom across all elements.',
              hi: 'कैम्ब्रिज की कैवेंडिश प्रयोगशाला में गैसों की विद्युत चालकता पर शोध से प्रथम अवपरमाणुक कण इलेक्ट्रॉन की खोज।',
            },
          },
          inlinePyqIds: [8, 24],
        },
        {
          heading: {
            en: '3. Rutherford’s 1911 Gold Foil Experiment (Geiger–Marsden), Nucleus Scale, Proton & Stability Failure',
            hi: '3. रदरफोर्ड का स्वर्ण-पर्णिका प्रयोग (1911), नाभिक माप (10⁻⁵ गुना), प्रोटॉन एवं मॉडल की विफलता',
          },
          conceptStory: {
            en: 'In **`1911`**, **Hans Geiger and Ernest Marsden**, guided by **Ernest Rutherford**, fired a narrow beam of fast positively charged **$\\alpha$-particles** (double-charged Helium nuclei **`⁴₂He²⁺`**, containing **`2 protons + 2 neutrons`**!) onto an ultra-thin **Gold Foil (`स्वर्ण पर्णिका`, Fig 8.4)** — gold was chosen because its supreme malleability yields ultra-thin sheets just hundreds of atoms thick! Expecting minimal deflection through Thomson’s diffuse positive sphere, they observed a shock:\n1. **Most $\\alpha$-particles passed straight through** undeflected -> **Most of the atom is EMPTY SPACE!**\n2. **Few particles deflected through small/large angles**, and **a tiny fraction (`~1 in 12,000`) bounced straight back (`180°`)** -> **All positive charge and virtually all atomic mass are concentrated in an extremely tiny, dense central core called the NUCLEUS (`नाभिक`)!**\n**Mind-Bending Scales (`NCERT p.144`):** Atom diameter $\\approx \\mathbf{10^{-10}\\text{ m}}$ vs Nucleus diameter $\\approx \\mathbf{10^{-15}\\text{ m}}$ -> Nucleus is **`10⁵` (`1,00,000` / 1 lakh times) smaller** than the atom (like a tiny black peppercorn inside a **`100 m` cricket stadium**)! Even a thin `0.1 mm` (`10⁻⁴ m`) textbook page stacks **`10⁶` (`10 lakh`) atoms** top-to-bottom!\n**Proton (`p⁺`) Discovery:** Rutherford proved positively charged particles inside the nucleus—named **Protons**—carry charge `+1` (equal & opposite to electron) and mass roughly **`~2000×` (`~1836×`) electron mass**; in neutral atoms `$p^+ = e^-$` (e.g., `He: 2p⁺, 2e⁻`; `Na: 11p⁺, 11e⁻`). *(RRB CBT Extra Note: **E. Goldstein `1886`** earlier noticed positively charged **Canal/Anode rays** in discharge tubes!)*\n**Fatal Flaw (`Fig 8.6`):** Electrons revolving in circular orbits experience continuous **centripetal acceleration (`Ch 4 link`)**. By electromagnetic theory, accelerating charges radiate energy continuously—causing electrons to lose energy and **spiral into the nucleus**, destroying the atom instantly! Yet atoms remain stable!',
            hi: 'सन् **`1911`** में **अर्नेस्ट रदरफोर्ड** के निर्देशन में **गाइगर एवं मार्सडेन** ने टॉमसन मॉडल की जाँच हेतु अत्यंत पतली **सोने की पन्नी (Gold Foil, `चित्र 8.4`)** पर तीव्रगामी धनावेशित **अल्फा ($\\alpha$) कणों** (अर्थात हीलियम नाभिक **`⁴₂He²⁺ = 2p⁺ + 2n⁰`**) की बौछार की! सोने की सर्वाधिक आघातवर्धनीयता से अत्यंत पतली पन्नी बनती है। टॉमसन मॉडल के विपरीत आश्चर्यजनक परिणाम मिले:\n1. **अधिकांश $\\alpha$-कण बिना विक्षेपित सीधे निकल गए** $\\implies$ **परमाणु का अधिकांश भाग रिक्त स्थान (Empty space) है!**\n2. **कुछ कण बड़े कोणों से विक्षेपित हुए** और **अत्यंत विरले कण सीधे टकराकर पुन: लौट आए (`180°` प्रकीर्णन)** $\\implies$ **परमाणु का संपूर्ण धनावेश और अधिकांश द्रव्यमान केंद्र में अत्यंत सूक्ष्म व सघन क्षेत्र — नाभिक (Nucleus) में केंद्रित है!**\n• **अभूतपूर्व आकार तुलना (`पृष्ठ 144`):** परमाणु का व्यास `$10^{-10}\\text{ m}$` जबकि नाभिक का व्यास मात्र `$10^{-15}\\text{ m}$` होता है — अर्थात नाभिक परमाणु से लगभग **`10⁵` (1 लाख गुना) छोटा** है (मानो **`100 m` के क्रिकेट मैदान के बीच एक काली मिर्च का दाना!**)। कागज का `0.1 mm` (`10⁻⁴ m`) पतला पृष्ठ लगभग **$10^{-4}/10^{-10} = 10^6$ (`10 लाख`) परमाणुओं** की परत से बनता है!\n• **प्रोटॉन की खोज व नामकरण:** रदरफोर्ड ने नाभिक स्थित धनावेशित कणों को **प्रोटॉन (`p⁺`)** नाम दिया (आवेश `+1`, द्रव्यमान इलेक्ट्रॉन का **लगभग 2000 गुना**)। उदासीन परमाणु में $p^+ = e^-$! *(CBT नोट: सन् 1886 में ई. गोल्डस्टीन ने सर्वप्रथम विसर्जन नलिका में धनावेशित **कैनाल किरणें** देखी थीं)*।\n• **रदरफोर्ड मॉडल की सीमा (`चित्र 8.6`):** वृत्ताकार कक्षा में घूमता इलेक्ट्रॉन निरंतर **त्वरित** होता है (`अध्याय 4` से जोड़ें!), जिससे उसे लगातार ऊर्जा विकिरित कर **सर्पिलाकार पथ पर घूमते हुए नाभिक में गिर जाना चाहिए** और परमाणु नष्ट हो जाता — पर वास्तविक द्रव्य पूर्णतया स्थायी है!',
          },
          diagramKey: 'atomic-models-timeline',
          realImage: {
            url: '/ncert-notes/class9-chem-ch8/real/ernest-rutherford.webp',
            title: {
              en: 'Ernest Rutherford (`1871–1937`, Father of Nuclear Physics • Chemistry Nobel `1908` • 100 NZD Banknote)',
              hi: 'अर्नेस्ट रदरफोर्ड (`1871–1937`, नाभिकीय भौतिकी के जनक • रसायन नोबेल `1908` • NZ 100 डॉलर नोट)',
            },
            caption: {
              en: 'Discovered the dense atomic nucleus via gold-foil α-scattering and named the Proton.',
              hi: 'स्वर्ण-पर्णिका प्रकीर्णन प्रयोग द्वारा नाभिक की खोज व परमाणु का ग्रहीय मॉडल प्रस्तुत किया।',
            },
          },
          viralTrick: {
            en: '**Scale Memory Lock:** **Atom = `10⁻¹⁰ m`**, **Nucleus = `10⁻¹⁵ m`** -> difference = **`10⁵` (`1 lakh`×)**; whereas `0.1 mm` paper = **`10⁶` (`10 lakh`) atoms thick**!',
            hi: '**घातांक पक्का ट्रिक:** **परमाणु = `$10^{-10}\\text{ m}$`** (10 की घात −10), **नाभिक = `$10^{-15}\\text{ m}$`** (फर्मी) → दोनों का अंतर **`10⁵` (1 लाख गुना छोटा नाभिक)**!',
          },
          inlinePyqIds: [1, 3, 9, 15, 20, 23],
        },
      ],
    },

    {
      id: 'bohr-shells-valency',
      number: '8.2.3 & 8.7–8.8',
      flowDiagramKey: null,
      svgLab: 'atom-builder-lab',
      title: {
        en: 'Niels Bohr Orbits, K–L–M–N (`2n²`), First 18 Elements & Valency Mastery',
        hi: 'नील्स बोर के ऊर्जा स्तर (K–L–M–N), बोर–बरी नियम (2n²), प्रथम 18 तत्व व संयोजकता',
      },
      summaryTag: { en: 'NCERT Pages 146, 151–153 + Barkla X-ray Box + Table 8.4 + Interactive Z=1–18 Lab', hi: 'NCERT पृष्ठ 146, 151–153 + चार्ल्स बर्क्ला बॉक्स + तालिका 8.4 + इंटरैक्टिव प्रयोगशाला' },
      blocks: [
        {
          heading: {
            en: '1. Niels Bohr’s Stationary Energy Levels (`K, L, M, N`) & Why Electrons Don’t Fall In (`1913`)',
            hi: '1. बोर का परमाणु मॉडल (1913) — स्थायी कक्षाएँ (K, L, M, N) व परमाणु स्थायित्व का रहस्य',
          },
          conceptStory: {
            en: 'To rescue physics from Rutherford’s collapsing atom, Danish physicist **Niels Bohr** (**`1913`**, Chemistry professor at Copenhagen; Physics Nobel **`1922`**) proposed discrete **Stationary States / Orbits / Energy Levels (`स्थायी कक्षाएँ / कोश`, Fig 8.7)**:\n1. Electrons revolve ONLY in permitted circular shells labeled **`K, L, M, N...`** (corresponding to **`n = 1, 2, 3, 4...`**) — **NEVER in spaces between shells**!\n2. **ZERO Radiation in Stationary Orbit:** While moving along a fixed shell, an electron keeps **fixed quantized energy** and does NOT lose energy.\n3. **Energy Rises Outward:** **`K-shell (n=1)`** is closest to the nucleus with **LOWEST energy**; **`E_K < E_L < E_M < E_N`**.\n4. **Quantum Jumps:** Electrons leap between levels ONLY by absorbing or emitting exact energy difference **`ΔE`**!\n**NCERT Curiosity Box (`p.146`):** *Why name shells K, L, M, N instead of A, B, C, D?* Physicist **Charles Barkla** named the first observed X-ray series **K** intentionally leaving **A–J** vacant in case higher-energy deeper X-rays were found later (none were, yet Bohr kept `K, L, M, N`!). Later science refined orbits into **Quantum Mechanical Electron Clouds (`Fig 8.15–8.16`)**, imaged directly today at atomic resolution by **STM (`Scanning Tunneling Microscope`) & TEM**!',
            hi: 'रदरफोर्ड मॉडल के अस्थायित्व को हल करने हेतु डेनमार्क के वैज्ञानिक **नील्स बोर** ने सन् **`1913`** में (**1922 नोबेल पुरस्कार**) क्रांतिकारी अभिगृहीत प्रस्तुत किया (`चित्र 8.7`):\n1. इलेक्ट्रॉन नाभिक के चारों ओर कहीं भी नहीं, बल्कि केवल कुछ निश्चित अनुमत वृत्ताकार पथों में चक्कर लगाते हैं जिन्हें **स्थायी कक्षाएँ, कोश (Shells) या ऊर्जा स्तर** कहते हैं (**`K, L, M, N...`** अथवा **`n = 1, 2, 3, 4...`**)।\n2. **बिना ऊर्जा ह्रास परिक्रमा:** अपनी निश्चित कक्षा में घूमते समय इलेक्ट्रॉन **ऊर्जा का क्षय नहीं करते** और न नाभिक में गिरते हैं!\n3. **ऊर्जा क्रम (`K < L < M < N`):** नाभिक के सबसे निकट **K-कोश (`n=1`)** की ऊर्जा **सबसे कम** होती है; जैसे-जैसे नाभिक से दूर जाते हैं, ऊर्जा स्तर बढ़ता जाता है।\n4. इलेक्ट्रॉन केवल दो कोशों के ऊर्जा अंतर के बराबर निश्चित ऊर्जा अवशोषित या उत्सर्जित कर एक कोश से दूसरे कोश में कूद सकते हैं।\n• **जिज्ञासा-सूत्र (`चार्ल्स बर्क्ला बॉक्स`, पृष्ठ 146):** प्रारंभिक X-किरण प्रयोगों में **चार्ल्स बर्क्ला** ने K से नामकरण इसलिए शुरू किया ताकि यदि उससे पहले की कोई श्रृंखला मिले तो A–J अक्षर सुरक्षित रहें (`हालांकि ऐसी श्रृंखला नहीं मिली`)। बाद में बोर मॉडल के स्थान पर **आधुनिक क्वांटम यांत्रिकीय इलेक्ट्रॉन अभ्र मॉडल (`चित्र 8.16`)** विकसित हुआ एवं आज **STM (`क्रमवीक्षण सुरंगन सूक्ष्मदर्शी`, चित्र 8.15)** से सतह के एकल परमाणु भी देखे जाते हैं!',
          },
          realImage: {
            url: '/ncert-notes/class9-chem-ch8/real/niels-bohr.webp',
            title: {
              en: 'Niels Bohr (`1885–1962`, Physics Nobel Laureate `1922`) — Quantized Atomic Energy Levels',
              hi: 'नील्स बोर (`1885–1962`, भौतिकी नोबेल `1922`) — क्वांटाइज्ड ऊर्जा स्तर मॉडल',
            },
            caption: {
              en: 'Introduced discrete K, L, M, N stationary shells explaining atomic stability and line spectra.',
              hi: 'कोपेनहेगेन में निश्चित ऊर्जा कोश (K, L, M, N) प्रस्तुत कर परमाणु के स्थायित्व की सटीक व्याख्या की।',
            },
          },
          inlinePyqIds: [16],
        },
        {
          heading: {
            en: '2. Bohr–Bury Rules (`2n²` & Max 8 Octet) + Electronic Configuration (`Z = 1–18`) & Valency (`Table 8.4`)',
            hi: '2. बोर–बरी नियम (`2n²` व अष्टक नियम), Z = 1 से 18 का विन्यास एवं संयोजकता (तालिका 8.4)',
          },
          conceptStory: {
            en: '**Bohr and Bury** laid down the three golden rules governing electron filling across shells (`p.151`):\n• **Rule 1 (`Max Capacity = 2n²`):** Shell `n` holds at most **`2n²`** electrons: **K (`n=1`) = `2×1² = 2`**, **L (`n=2`) = `2×2² = 8`**, **M (`n=3`) = `2×3² = 18`**, **N (`n=4`) = `2×4² = 32`**!\n• **Rule 2 (`Outermost Octet Limit = 8`):** Regardless of formula capacity (`18` or `32`), the **outermost orbit NEVER accommodates more than 8 electrons** (and `2` max in single-shell atoms like `H/He`)!\n• **Rule 3 (`Stepwise Inner-First`):** Inner shells (`K` -> `L` -> `M`) fill completely before moving outward (`Table 8.4`: `Na` `Z=11` is **`2, 8, 1`**; NOT `2, 9`!).\n**Valence Electrons & Valency (`Sec 8.8`):** The outermost occupied orbit is the **Valence Shell**, and electrons inside it are **Valence Electrons**. Atoms with a filled **Octet (`8 e⁻`, or Duplet `2 e⁻` for Helium)** (`He=2`, `Ne=2,8`, `Ar=2,8,8`) are unreactive with **Valency = 0**! Incomplete shells strive to reach stability (`8 e⁻`) by **Losing (`1–3` e⁻, e.g., Na=`1`, Mg=`2`, Al=`3`)**, **Sharing (`4` e⁻, e.g., Carbon `2,4` = `4`)**, or **Gaining (`8 − valence e⁻`, e.g., Oxygen `2,6 -> 8−6 = 2`, Fluorine `2,7 -> 8−7 = 1`)**! Observe how valency also shows via combining count with H or Cl (`valency 1`): **`H₂O` (`O = 2`)**, **`NH₃` (`N = 3`)**, **`MgCl₂` (`Mg = 2`)**!',
            hi: '**बोर एवं बरी** द्वारा प्रतिपादित **तीन इलेक्ट्रॉन वितरण नियम (`पृष्ठ 151`):**\n1. **अधिकतम संख्या सूत्र = `$2n^2$`:** K (`n=1`) $\\to \\mathbf{2}$, L (`n=2`) $\\to \\mathbf{8}$, M (`n=3`) $\\to \\mathbf{18}$, N (`n=4`) $\\to \\mathbf{32}$ इलेक्ट्रॉन।\n2. **बाह्यतम कोश सीमा (`अष्टक नियम`):** भले ही भीतर की क्षमता अधिक हो, परंतु **सबसे बाह्यतम कोश में अधिकतम `8` इलेक्ट्रॉन** (`केवल 1 कोश हो तो अधिकतम 2`) ही रह सकते हैं।\n3. **क्रमबद्ध भराव (`K → L → M → N`):** पहले K भरता है, फिर L, फिर M (जैसे सोडियम `Z=11` का विन्यास **`2, 8, 1`** होता है, `2, 9` कभी नहीं — `Group D 2025 PYQ`)!\n• **संयोजकता कोश व संयोजकता (`Sec 8.8`):** सबसे बाहरी कोश को **संयोजकता कोश (Valence Shell)** व उसके इलेक्ट्रॉनों को **संयोजकता इलेक्ट्रॉन** कहते हैं। किसी तत्व के परमाणु की अन्य परमाणुओं से जुड़कर **अष्टक (`8 e⁻`, या He हेतु `2 e⁻`)** पूर्ण करने के लिए इलेक्ट्रॉन **त्यागने, ग्रहण करने या साझा करने की क्षमता** उसकी **संयोजकता (`Valency`)** कहलाती है:\n  – **1, 2, 3 बाहरी इलेक्ट्रॉन:** त्याग कर अष्टक → संयोजकता = `1, 2, 3` (`Na=1, Mg=2, Al=3`)।\n  – **4 बाहरी इलेक्ट्रॉन:** न त्याग न ग्रहण, साझा करते हैं → संयोजकता = `4` (`C=4, Si=4`)।\n  – **5, 6, 7 बाहरी इलेक्ट्रॉन:** ग्रहण करके अष्टक → संयोजकता = **`8 − संयोजकता इलेक्ट्रॉन`** (`N: 8−5=3`, `O: 8−6=2`, `F/Cl: 8−7=1`)।\n  – **पूर्ण अष्टक (`8`) / He (`2`):** निष्क्रिय (अक्रिय गैसें) → **संयोजकता = `0`** (`He, Ne, Ar`)!',
          },
          diagramKey: 'bohr-bury-shells-valency',
          viralTrick: {
            en: '**Zero-Mistake Valency Split:** Count outermost electrons `V` — if **`V ≤ 4 -> Valency = V`** (`2,8,2 -> 2`; `2,4 -> 4`); if **`V > 4 -> Valency = 8 − V`** (`2,6 -> 8−6 = 2`; `2,8,8 -> 0`)! *(Only **Helium** with single shell `K=2` has `Valency = 0`!)*',
            hi: '**5-सेकंड संयोजकता मंत्र:** बाह्यतम इलेक्ट्रॉन **`V ≤ 4` हो तो संयोजकता `= V`**; और **`V > 4` हो तो संयोजकता `= 8 − V`**! (*अकेला **हीलियम (`K=2`)** इसका पूर्ण द्विक अपवाद है — उसकी संयोजकता **`0`** होती है!*)',
          },
          inlinePyqIds: [2, 5, 10, 19, 22],
        },
      ],
    },

    {
      id: 'neutron-symbols-atomic-mass-number',
      number: '8.3–8.6',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Chadwick’s Neutron (1932), Nuclear Force, BARC Dhruva, IUPAC Symbols & Mass Notation ($^A_Z X$)',
        hi: 'जेम्स चैडविक का न्यूट्रॉन (1932), नाभिकीय बल, BARC ध्रुव, IUPAC लैटिन प्रतीक व $^A_Z X$ संकेतन',
      },
      summaryTag: { en: 'NCERT Pages 147–150 + Table 8.1–8.3 + Homi J. Bhabha + Solved Ex 3, 8, 11–15', hi: 'NCERT पृष्ठ 147–150 + तालिका 8.1–8.3 + होमी भाभा + संख्यात्मक हल' },
      blocks: [
        {
          heading: {
            en: '1. Neutron Discovery (Chadwick 1932), Why Heavy Nuclei Need Extra Neutrons & BARC Dhruva',
            hi: '1. न्यूट्रॉन की खोज (1932), भारी नाभिक का स्थायित्व एवं BARC का ‘ध्रुव’ रिएक्टर',
          },
          conceptStory: {
            en: 'A glaring puzzle lingered after Rutherford found protons: Hydrogen had `1 p⁺` and Helium had `2 p⁺`, yet Helium weighed **`4 times` Hydrogen — not `2 times`**! In **`1932`**, Rutherford’s student **James Chadwick** (Cavendish Laboratory; Physics Nobel **`1935`**) solved the puzzle by discovering a third subatomic particle with **mass nearly equal to a Proton yet ZERO electric charge** — the **Neutron ($n^0$)**!\nNeutrons inhabit nuclei of ALL elements **EXCEPT ordinary Hydrogen (Protium $^1_1\\text{H}$, zero neutrons)**! Why are extra neutrons crucial in heavier elements (`NCERT Curiosity Box p.147`)? Because all protons inside the tiny nucleus carry `+` charge and repel each other violently! Neutral **Neutrons increase spacing between protons and strengthen the Short-Range Strong Nuclear Force (`नाभिकीय बल`)** holding the nucleus intact (`C: 6p+6n`, `O: 8p+8n`, **`Iron: 26p+30n`**, **`Uranium: 92p+146n`**)! Since neutrons carry zero charge, they penetrate target nuclei cleanly, enabling **nuclear fission** and artificial radioisotopes.\n**Indian Contribution (`NCERT p.148 & 155`):** **Homi Jehangir Bhabha**—Father of the Indian Nuclear Programme—founded **TIFR** and **BARC (`Bhabha Atomic Research Centre`, Mumbai)**, where advanced research reactors like **Dhruva (`ध्रुव`)** run **neutron-scattering** experiments to design indigenous superconductors, battery electrodes, pharmaceuticals, and high-strength alloys!',
            hi: 'रदरफोर्ड के बाद वैज्ञानिकों के सामने एक बड़ी पहेली थी: हाइड्रोजन में `1 p⁺` व हीलियम में `2 p⁺` होने पर भी हीलियम का द्रव्यमान हाइड्रोजन का **`4 गुना`** क्यों है (`2 गुना` क्यों नहीं)? सन् **`1932`** में रदरफोर्ड के शिष्य **जेम्स चैडविक** (`नोबेल 1935`) ने इस पहेली को सुलझाते हुए नाभिक के भीतर **न्यूट्रॉन (`n⁰`)** की खोज की — इस पर **कोई आवेश (`0`) नहीं** है, किंतु इसका द्रव्यमान लगभग **प्रोटॉन के बराबर** है! यह **प्रोटियम हाइड्रोजन (`¹₁H`, 0 न्यूट्रॉन) को छोड़कर सभी तत्वों** में मिलता है।\n• **नाभिकीय बल व भारी तत्वों में अधिक न्यूट्रॉन (`जिज्ञासा-सूत्र`):** एक ही सूक्ष्म नाभिक में सभी धनावेशित प्रोटॉन एक-दूसरे को प्रतिकर्षित करते हैं। उदासीन **न्यूट्रॉन प्रोटॉनों के बीच दूरी बढ़ाकर प्रतिकर्षण घटाते हैं व प्रबल नाभिकीय बल (`Nuclear Force`) को मजबूत रखते हैं** — इसी कारण हल्के तत्वों में `p⁺ ≈ n⁰` (`C: 6p+6n, O: 8p+8n`), पर भारी नाभिकों में न्यूट्रॉन अधिक होते हैं (`लोहा Fe: 26p+30n`, `यूरेनियम U: 92p+146n`)!\n• **भारत का वैज्ञानिक योगदान (`पृष्ठ 148 & 155`):** भारतीय परमाणु कार्यक्रम के जनक **डॉ. होमी जहाँगीर भाभा** ने **TIFR** व **BARC (`भाभा परमाणु अनुसंधान केंद्र`, मुंबई)** की स्थापना की। BARC स्थित स्वदेशी अनुसंधान रिएक्टर **‘ध्रुव’ (`Dhruva`)** के उन्नत **न्यूट्रॉन-प्रकीर्णन प्रयोगों** से भारत में ही अतिचालक, बैटरी इलेक्ट्रोड, आधुनिक औषधियाँ व सुदृढ़ मिश्रधातुएँ विकसित हुई हैं!',
          },
          bullets: [
            {
              en: '**==118 Elements Milestone (`NCERT p.148`):==** By `1869`, only **69 elements** were known; today **118 distinct chemical elements** are catalogued (`both natural and lab-synthesized`)!',
              hi: '**==तत्व संख्या तथ्य (`पृष्ठ 148`):==** वर्ष `1869` तक वैज्ञानिक **69 तत्व** जानते थे; वर्तमान में कुल **118 तत्व** ज्ञात हैं (`प्राकृतिक + कृत्रिम`)।',
            },
          ],
          inlinePyqIds: [11, 14, 18, 21],
        },
        {
          heading: {
            en: '2. Dalton & Berzelius/IUPAC Symbols (Table 8.2), Atomic Number ($Z$), Mass Number ($A$) & Unified Unit (`u`)',
            hi: '2. IUPAC प्रतीक नियम (तालिका 8.2 — लैटिन/ग्रीक/जर्मन नाम), परमाणु क्रमांक ($Z$), द्रव्यमान संख्या ($A$) व $^A_Z X$',
          },
          conceptStory: {
            en: 'In **`1803`**, **John Dalton** drew circle/dot pictorial element symbols (`Fig 8.9`), but in **`1813`**, Swedish chemist **Jöns Jacob Berzelius** introduced universal letter-based chemical symbols derived from Latin names—standardized today by **IUPAC (`International Union of Pure and Applied Chemistry`)**:\n1. Use 1st letter (`CAPITAL`) or 1st + 2nd (`lowercase`, e.g., Aluminium is **`Al`** NOT `AL`; Cobalt is **`Co`** NOT `CO` Carbon Monoxide!).\n2. Non-first-letter picks: Chlorine **`Cl`**, Zinc **`Zn`**.\n3. **RRB High-Frequency Latin/Greek/German Symbols (`Table 8.2`):** Iron **`Fe` (`Ferrum`)**, Copper **`Cu` (`Cuprum`)**, Gold **`Au` (`Aurum`)**, Silver **`Ag` (`Argentum`)**, Lead **`Pb` (`Plumbum`)**, Sodium **`Na` (`Natrium`)**, Potassium **`K` (`Kalium`)**, Mercury **`Hg` (`Hydrargyros`, Greek)**, Tungsten **`W` (`Wolfram`, German)**!\n**Atomic & Mass Numbers (`Sec 8.5–8.6`):**\n• **Atomic Number ($Z$)** = **Number of Protons in nucleus** (fixes element identity; equals electrons ONLY in neutral atom!).\n• **Mass Number ($A$)** = **Total Nucleons = $p^+ + n^0$** (electron mass is negligible!). Expressed in **Unified Atomic Mass Unit (`u`)** (replacing older `amu`). Written symbolically as **$^A_Z X$**, e.g., **$^{12}_6\\text{C}$** ($Z=6, A=12, n^0=12-6=6$)! Example numeric (`PYQ #6`): Phosphorus (`Z=15, A=31`) -> Neutrons $= 31 - 15 = \\mathbf{16}$!',
            hi: '**तत्वों के रासायनिक प्रतीक:** `1803` में **डाल्टन** ने चित्रात्मक प्रतीक बनाए (`चित्र 8.9`), पर **`1813`** में **बर्जेलियस** ने अक्षर-आधारित प्रतीक सुझाए। वर्तमान में **IUPAC** नियमों द्वारा प्रतीक स्वीकृत होते हैं: पहला अक्षर सदैव **बड़ा (Capital)** व दूसरा **छोटा (Small)** (`Al` न कि `AL`; कोबाल्ट **`Co`** न कि `CO`)। प्रमुख गैर-अंग्रेजी नाम (`तालिका 8.2`, परीक्षा में अत्यंत उपयोगी): लोहा **`Fe` (`Ferrum`)**, पारा **`Hg` (`Hydrargyros`, ग्रीक)**, टंगस्टन **`W` (`Wolfram`, जर्मन)**, सोडियम **`Na` (`Natrium`)**, पोटैशियम **`K` (`Kalium`)**, ताँबा **`Cu` (`Cuprum`)**, चाँदी **`Ag` (`Argentum`)**, सोना **`Au` (`Aurum`)**, सीसा **`Pb` (`Plumbum`)**!\n• **परमाणु क्रमांक ($Z$) व द्रव्यमान संख्या ($A$):**\n  – **$Z = \\text{नाभिक में प्रोटॉनों की संख्या}$** (`तत्व की मूल पहचान`; उदासीन परमाणु में $p^+ = e^-$)।\n  – **$A = \\text{न्यूक्लिऑन योग} = p^+ + n^0$** (`इलेक्ट्रॉन द्रव्यमान नगण्य`!), जिसे **`एकीकृत परमाणु द्रव्यमान इकाई (u)`** में मापा जाता है (`पूर्व नाम amu`)। मानक रूप: **$^A_Z X$**, जैसे **$^{12}_6\\text{C}$** $\\implies$ न्यूट्रॉन $n^0 = A - Z$ (उदाहरण: `Z=15, A=31` में $n^0 = 31 - 15 = \\mathbf{16}$!)।',
          },
          viralTrick: {
            en: '**Golden Latin & Formula Mnemonic:** **Na**trium(`Na`), **Ka**lium(`K`), **Fe**rrum(`Fe`), **Wo**lfram(`W`), **Hy**drargyros(`Hg`), **Plu**mbum(`Pb`), **Cu**prum(`Cu`), **Au**rum(`Au`), **Ag**entum(`Ag`)! Formula Triangle: **`A = Z + N`**, **`N = A − Z`**!',
            hi: '**त्वरित सूत्र त्रिकोण:** **`A = Z + N`** (अर्थात न्यूट्रॉन **`N = A − Z`**) तथा **`Co` = कोबाल्ट (तत्व)** जबकि **`CO` = कार्बन मोनोऑक्साइड (यौगिक)**!',
          },
          inlinePyqIds: [6, 18, 21],
        },
      ],
    },

    {
      id: 'isotopes-weighted-mass-isobars',
      number: '8.9',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Isotopes (Chemical Twin, Different Mass), Cl Weighted Mass (`35.5 u`) & Isobars (`40` Trio)',
        hi: 'समस्थानिक (Isotopes — उपयोग व क्लोरीन 35.5 u औसत) एवं समभारिक (Isobars — Ar/K/Ca 40)',
      },
      summaryTag: { en: 'NCERT Pages 153–157 + H & C Isotopes + U/Co/I/C Uses + Weighted Br/Cl Mass + Isobars', hi: 'NCERT पृष्ठ 153–157 + H/C समस्थानिक + 4 प्रमुख उपयोग + औसत द्रव्यमान + समभारिक' },
      blocks: [
        {
          heading: {
            en: '1. Isotopes (`Same Z, Different A`): Why Chemical Properties Match + Real-World Uses + `35.5 u` Math',
            hi: '1. समस्थानिक (`समान Z, भिन्न A`): रासायनिक गुण समान क्यों? + 4 प्रमुख उपयोग + `35.5 u` भारित औसत',
          },
          conceptStory: {
            en: 'Dalton assumed ALL atoms of an element share identical mass—later experiments proved atoms of the SAME element (`same Proton count Z`) can pack DIFFERENT numbers of neutrons (`different Mass Number A`)! These are **Isotopes (`समस्थानिक`):**\n• **Hydrogen (`3` isotopes, `Fig 8.12`):** Protium **`¹₁H`** (`~99.98%, 0 n⁰`), Deuterium **`²₁H`** (`~0.015%, 1 n⁰`), Tritium **`³₁H`** (`trace, 2 n⁰`) — all share `1 proton & 1 electron`!\n• **Carbon (`3` isotopes, `Fig 8.13`):** **`¹²₆C`** (`most abundant, 6 n⁰`), **`¹³₆C`** (`7 n⁰`), **`¹⁴₆C`** (`8 n⁰`) — all have `6 electrons (2,4)`!\n**RRB Top Question (`Group D Shift 1`):** *Why do isotopes show IDENTICAL **Chemical Properties** (`valency`) yet DIFFERENT **Physical Properties** (`boiling point, melting point, density`)?* Because chemical behaviour depends strictly on **valence electron count ($Z$)**—identical across isotopes—while physical mass/density shifts with neutron count!\n**4 Must-Memorize Uses (`Science & Society p.155`):** **`²³⁵₉₂U`** (`nuclear power reactor fuel`), **`⁶⁰₂₇Co`** (`cancer radiotherapy`), **`¹³¹₅₃I`** (`goitre & thyroid cancer therapy`), **`¹⁴₆C`** (`archaeological radiocarbon fossil dating`)!\n**Chlorine Weighted Average Mass (`p.155`):** Natural Chlorine blends **`³⁵₁₇Cl` (`75%`)** & **`³⁷₁₇Cl` (`25%`)** in **`3:1` ratio**. Simple mean (`36 u`) ignores abundance; true **Weighted Average** $= 35\\left(\\frac{75}{100}\\right) + 37\\left(\\frac{25}{100}\\right) = \\frac{105 + 37}{4} = \\frac{142}{4} = \\mathbf{35.5\\text{ u}}$! No single Cl atom weighs `35.5 u`—every `10 lakh` Cl atoms hold `7.5 lakh` `³⁵Cl` and `2.5 lakh` `³⁷Cl`!',
            hi: 'डाल्टन के विपरीत, एक ही तत्व के ऐसे परमाणु जिनमें **परमाणु क्रमांक ($Z$ = प्रोटॉन) समान**, परंतु **न्यूट्रॉन भिन्न होने से द्रव्यमान संख्या ($A$) अलग** होती है, **समस्थानिक (`Isotopes`)** कहलाते हैं:\n• **हाइड्रोजन के 3 समस्थानिक (`चित्र 8.12`):** **प्रोटियम (`¹₁H`, ~99.98%, 0 n)**, **ड्यूटीरियम (`²₁H`, ~0.015%, 1 n)**, **ट्राइटियम (`³₁H`, अल्प मात्रा, 2 n)** — तीनों में `1 e⁻` व `1 p⁺` समान है!\n• **कार्बन (`चित्र 8.13`):** **¹²₆C** (सर्वाधिक, `6 n`), **¹³₆C** (`7 n`), **¹⁴₆C** (`8 n`)।\n• **परीक्षा-मर्म (`Group D 2025`):** समस्थानिकों के **रासायनिक गुण सदैव समान** होते हैं (क्योंकि इलेक्ट्रॉनिक विन्यास व संयोजकता समान हैं!), जबकि **भौतिक गुण** (क्वथनांक, गलनांक, घनत्व) न्यूट्रॉन अंतर से **भिन्न** होते हैं!\n• **दैनिक जीवन व चिकित्सा के 4 प्रमुख उपयोग (`पृष्ठ 155`):** (1) **यूरेनियम-235 (`²³⁵₉₂U`)** $\\to$ परमाणु विद्युत संयंत्र ईंधन; (2) **कोबाल्ट-60 (`⁶⁰₂₇Co`)** $\\to$ **कैंसर रेडियोथेरेपी**; (3) **आयोडीन-131 (`¹³¹₅₃I`)** $\\to$ **घेंघा रोग व थायरॉइड कैंसर उपचार**; (4) **कार्बन-14 (`¹⁴₆C`)** $\\to$ प्राचीन जीवाश्मों व पुरातत्व वस्तुओं की **आयु निर्धारण (`Carbon dating`)**।\n• **क्लोरीन का भारित औसत द्रव्यमान = `35.5 u`:** प्रकृति में **`³⁵Cl` (`75%`)** व **`³⁷Cl` (`25%`)** **`3:1`** में मिलते हैं। साधारण माध्य (`36 u`) गलत है; सटीक भारित औसत $= 35 \\times \\frac{75}{100} + 37 \\times \\frac{25}{100} = \\frac{142}{4} = \\mathbf{35.5\\text{ u}}$ (अर्थात 10 लाख परमाणुओं में 7.5 लाख ³⁵Cl व 2.5 लाख ³⁷Cl होते हैं)!',
          },
          diagramKey: 'isotopes-vs-isobars-chart',
          inlinePyqIds: [4, 12, 13],
        },
        {
          heading: {
            en: '2. Isobars (`Same A, Different Z`): Argon-40, Potassium-40 & Calcium-40 Trio',
            hi: '2. समभारिक (`Isobars — समान A, भिन्न Z`): आर्गन-40, पोटैशियम-40 व कैल्शियम-40 त्रिक',
          },
          conceptStory: {
            en: 'Flip the rule of isotopes! When atoms of **DIFFERENT elements** (`different proton count Z` -> different chemical properties!) possess **IDENTICAL Total Nucleon Count (`same Mass Number A`)**, they are called **Isobars (`समभारिक`)** (`Sec 8.9.2`)! Memorize the classic NCERT triad (`Mass Number A = 40`): **Argon $^{40}_{18}\\text{Ar}$** (`18p, 22n`), **Potassium $^{40}_{19}\\text{K}$** (`19p, 21n`), and **Calcium $^{40}_{20}\\text{Ca}$** (`20p, 20n`) — every single one totals **`40 nucleons`**, yet each belongs to a totally distinct element with different electrons & valency (`0, 1, 2`)! *(Also in Exercise Q3: nuclei **X (`18p, 19n -> A=37`)** and **Z (`17p, 20n -> A=37`)** are **Isobars**, while **Y (`17p, 18n -> A=35`)** and **Z (`17p, 20n -> A=37`)** are **Isotopes**!)*',
            hi: '**समस्थानिक का ठीक उल्टा!** जब **भिन्न-भिन्न तत्वों** के परमाणु (`परमाणु क्रमांक Z अलग-अलग`) समान कुल न्यूक्लिऑन संख्या अर्थात **समान द्रव्यमान संख्या ($A$)** रखते हैं, तो वे **समभारिक (`Isobars`)** कहलाते हैं! यहाँ इलेक्ट्रॉन भिन्न होने से इनके **रासायनिक गुण भी भिन्न** होते हैं।\n• **NCERT मानक त्रिक (`A = 40`):** **आर्गन (`⁴⁰₁₈Ar`: 18p + 22n)**, **पोटैशियम (`⁴⁰₁₉K`: 19p + 21n)**, तथा **कैल्शियम (`⁴⁰₂₀Ca`: 20p + 20n)** — तीनों की द्रव्यमान संख्या **`40`** समान है, पर परमाणु क्रमांक (`18, 19, 20`) व संयोजकता (`0, 1, 2`) अलग-अलग हैं! *(अभ्यास प्रश्न 3 देखें: Y `17p,18n=35` और Z `17p,20n=37` **समस्थानिक** हैं, जबकि X `18p,19n=37` और Z `17p,20n=37` **समभारिक** हैं!)*',
          },
          viralTrick: {
            en: '**Zero-Confusion P/N Letter Hack:** **IsoToPes** = same **P**rotons (`Z` — same **P**lace in table!); **IsoBArs** = same **`A`** / Bary-mass (`Mass Number A`, diff `Z` like `Ar-40, K-40, Ca-40`)!',
            hi: '**P vs B(A) वायरल ट्रिक:** **समस्था-नि-क (Iso-to-P-es)** में **समान P (प्रोटॉन / स्थान `Z`)** होता है; **सम-भा-रिक (`Iso-bA-rs`)** में **समान भार (`A` = द्रव्यमान संख्या)** होता है!',
          },
          inlinePyqIds: [7],
        },
      ],
    },
  ],

  confusionBreakers: [
    {
      pair: { en: 'Dalton Year (1808 Theory vs 1803 Symbols) vs Atomic Model Origin', hi: 'डाल्टन सिद्धांत (1808) बनाम चित्र प्रतीक (1803) व कणाद' },
      trap: { en: 'Saying Acharya Kanad / Democritus proved atoms experimentally or mixing 1803/1808.', hi: 'आचार्य कणाद / डेमोक्रिटस के विचार को प्रायोगिक मान लेना या डाल्टन के वर्ष भ्रमित करना।' },
      truth: { en: 'Kanad & Democritus (*atomos*) were purely **philosophical ideas** (`NCERT p.141`); **Dalton (`1803` symbols, `1808` scientific theory)** was first experiment-backed model!', hi: 'कणाद व डेमोक्रिटस **दार्शनिक विचार** थे (`पृष्ठ 141`); **डाल्टन** (`1803` चित्र प्रतीक, `1808` परमाणु सिद्धांत) प्रथम वैज्ञानिक विवरण था!' },
    },
    {
      pair: { en: 'Most α-Particles Passing Straight vs Very Few Bouncing Back', hi: 'अधिकांश α-कण सीधे निकलना बनाम बहुत कम का वापस लौटना' },
      trap: { en: 'Saying straight passage proves positive nucleus, OR bounce-back proves empty space.', hi: 'सीधे गुजरने से नाभिक का या लौट आने से रिक्त स्थान का निष्कर्ष मान लेना।' },
      truth: { en: '**Most passing straight -> atom is mostly EMPTY SPACE**; **Few sharp deflections / `180°` bounce-back -> tiny DENSE +ve NUCLEUS**!', hi: '**अधिकांश का सीधे जाना → रिक्त स्थान** सिद्ध करता है; **कुछ का वापस लौटना → केंद्र में सघन धनावेशित नाभिक** सिद्ध करता है!' },
    },
    {
      pair: { en: 'Atomic Mass Number (p⁺ + n⁰) vs Protons + Electrons', hi: 'द्रव्यमान संख्या (`p⁺ + n⁰`) बनाम `प्रोटॉन + इलेक्ट्रॉन`' },
      trap: { en: 'Adding electrons into Mass Number `A` (`PYQ #14` option B trap!).', hi: 'द्रव्यमान संख्या $A$ में इलेक्ट्रॉन जोड़ बैठना (`PYQ #14` विकल्प B जाल)!' },
      truth: { en: 'Electron mass is ~`1/1836–1/2000`th of proton (`negligible`)! **Mass Number $A = \\text{Protons} + \\text{Neutrons}$ (Nucleons ONLY)**!', hi: 'इलेक्ट्रॉन का द्रव्यमान नगण्य है; **द्रव्यमान संख्या $A = \\text{प्रोटॉन} + \\text{न्यूट्रॉन}$ (केवल नाभिकीय न्यूक्लिऑन)** होती है!' },
    },
    {
      pair: { en: '2n² Shell Max Capacity vs Outermost Shell Octet Limit (8)', hi: 'M-कोश की `2n² = 18` क्षमता बनाम बाह्यतम अष्टक नियम (`8`)' },
      trap: { en: 'Writing Potassium (`Z=19`) or Calcium (`Z=20`) as `2, 8, 9` or `2, 8, 10`, or Sodium as `2, 9`!', hi: 'सोडियम (`11`) को `2, 9` या कैल्शियम (`20`) को `2, 8, 10` लिख देना!' },
      truth: { en: '**L max = 8**, and **OUTERMOST shell CANNOT hold >8 e⁻** even if `M` holds `18` (`Bohr–Bury Rule 2`): `Na(11) = 2, 8, 1`; `Ca(20) = 2, 8, 8, 2`!', hi: '**सबसे बाह्यतम कोश में 8 से अधिक इलेक्ट्रॉन कभी नहीं रह सकते!** अतः `Na(11) = 2, 8, 1` और `Ca(20) = 2, 8, 8, 2` लिखा जाता है।' },
    },
    {
      pair: { en: 'Isotopes: Chemical Properties vs Physical Properties', hi: 'समस्थानिक: रासायनिक गुणधर्म बनाम भौतिक गुणधर्म' },
      trap: { en: 'Thinking isotopes of the same element behave differently chemically, OR share same density/boiling point.', hi: 'समस्थानिकों के रासायनिक गुण भिन्न या भौतिक गुण (क्वथनांक/गलनांक) समान मान लेना!' },
      truth: { en: 'Isotopes share **IDENTICAL protons & electrons -> SAME Chemical Properties**, while different neutrons cause **DIFFERENT Physical Properties**!', hi: 'समस्थानिकों में इलेक्ट्रॉन समान होने से **रासायनिक गुण समान** रहते हैं, परंतु न्यूट्रॉन अंतर से **भौतिक गुण भिन्न** होते हैं!' },
    },
    {
      pair: { en: 'Cobalt Co vs Carbon Monoxide CO + Chlorine 35.5 u Individual Mass', hi: 'कोबाल्ट `Co` vs `CO`, एवं क्या एक Cl परमाणु `35.5 u` का होता है?' },
      trap: { en: 'Writing `CO` for Cobalt OR thinking an individual Chlorine atom literally weighs `35.5 u`.', hi: 'कोबाल्ट को `CO` लिखना या यह सोचना कि किसी एकल क्लोरीन परमाणु में आधा न्यूट्रॉन (`35.5`) है!' },
      truth: { en: 'Cobalt = **`Co`** (`2nd lowercase`). And NO atom weighs `35.5 u`: natural Chlorine mixes `75%` **`³⁵Cl`** & `25%` **`³⁷Cl`**, averaging `35.5 u` (`NCERT p.155`)!', hi: 'कोबाल्ट का सही प्रतीक **`Co`** है (`CO` गैस है)। कोई एकल Cl परमाणु `35.5 u` का नहीं होता — यह `75% (³⁵Cl)` व `25% (³⁷Cl)` का **भारित औसत** है!' },
    },
  ],

  pioneers: [
    {
      name: { en: 'Sir J. J. Thomson (1856–1940)', hi: 'सर जे. जे. टॉमसन (1856–1940)' },
      country: { en: 'British Physicist • Physics Nobel 1906 • Cavendish Lab', hi: 'ब्रिटिश भौतिक विज्ञानी • भौतिकी नोबेल 1906' },
      badge: { en: 'Electron Discovery (1897) • Plum Pudding', hi: 'इलेक्ट्रॉन की खोज (1897) व प्रथम मॉडल' },
      fact: {
        en: 'Cathode-ray discharge tube studies (`1897`) uncovered the **Electron (`-1.602×10⁻¹⁹ C`)** as the first universal subatomic particle present in every atom; guided Rutherford at Cambridge.',
        hi: 'NCERT पृ. 142: कैथोड किरण नलिका प्रयोगों से सभी परमाणुओं के प्रथम मूल घटक **इलेक्ट्रॉन (`1897`)** की खोज की और कैम्ब्रिज की कैवेंडिश प्रयोगशाला में रदरफोर्ड का मार्गदर्शन किया।',
      },
    },
    {
      name: { en: 'Ernest Rutherford (1871–1937)', hi: 'अर्नेस्ट रदरफोर्ड (1871–1937)' },
      country: { en: 'New Zealand–British • Chemistry Nobel 1908 • 100 NZD Note', hi: 'न्यूजीलैंड–ब्रिटिश • रसायन नोबेल 1908 • NZ 100 डॉलर नोट' },
      badge: { en: 'Father of Nuclear Physics • Nucleus (1911) & Proton', hi: 'नाभिकीय भौतिकी के जनक • नाभिक व प्रोटॉन' },
      fact: {
        en: 'Featured on New Zealand’s `100-Dollar` banknote! Gold foil experiment (`1911`, with Geiger & Marsden) uncovered the tiny dense **Nucleus (`10⁻¹⁵ m`)** and **Protons**, plus natural radioactive decay.',
        hi: 'NCERT पृ. 145: स्वर्ण-पर्णिका प्रयोग से **नाभिक** खोजा व **प्रोटॉन** नाम दिया; रेडियोधर्मी विघटन हेतु `1908` रसायन नोबेल प्राप्त हुआ तथा इनका चित्र न्यूजीलैंड के `100 डॉलर` नोट पर अंकित है।',
      },
    },
    {
      name: { en: 'Niels Bohr (1885–1962) & James Chadwick (1891–1974)', hi: 'नील्स बोर (1922 नोबेल) एवं जेम्स चैडविक (1935 नोबेल)' },
      country: { en: 'Danish & British Physicists • Nobels 1922 & 1935', hi: 'भौतिक नोबेल: बोर (1922) एवं चैडविक (1935)' },
      badge: { en: 'Stationary Energy Shells (`K–N`) & Neutron (`1932`)', hi: 'ऊर्जा स्तर (`K–N`) एवं न्यूट्रॉन की खोज (`1932`)' },
      fact: {
        en: '**Bohr (`1913`)** rescued nuclear atoms with fixed non-radiating shells `K, L, M, N`; **Chadwick (`1932`)**, Rutherford’s student, discovered zero-charge **Neutrons**, completing atomic mass & nuclear fission!',
        hi: '**नील्स बोर (`1913`)** ने कोपेनहेगेन में निश्चित ऊर्जा कोश (`K, L, M, N`) द्वारा परमाणु का स्थायित्व सिद्ध किया; रदरफोर्ड के छात्र **जेम्स चैडविक (`1932`)** ने अनावेशित **न्यूट्रॉन** खोजकर ‘परमाणु युग’ की शुरुआत की!',
      },
    },
    {
      name: { en: 'Homi Jehangir Bhabha (1909–1966)', hi: 'डॉ. होमी जहाँगीर भाभा (1909–1966)' },
      country: { en: 'Father of Indian Nuclear Programme • TIFR & BARC Founder', hi: 'भारतीय परमाणु कार्यक्रम के जनक • TIFR व BARC संस्थापक' },
      badge: { en: 'Peaceful Nuclear Energy & Neutron Science (`p.155`)', hi: 'शांतिपूर्ण परमाणु ऊर्जा, कृषि व चिकित्सा उपयोग' },
      fact: {
        en: 'Featured in NCERT Box (`p.155`): Pioneered India’s nuclear power, medical isotope therapy & agriculture research by founding **TIFR** and **BARC** (`home to Dhruva neutron reactor`)!',
        hi: 'NCERT पृ. 155 के अनुसार भारत में विद्युत उत्पादन, कृषि एवं कैंसर चिकित्सा हेतु परमाणु ऊर्जा के शांतिपूर्ण उपयोग का नेतृत्व किया तथा **TIFR** व **BARC (ध्रुव रिएक्टर केंद्र)** की स्थापना की।',
      },
    },
  ],

  visualGallery: [
    {
      id: 'vis-cathode-tube',
      figRef: { en: 'Figure 8.1 (Cathode Ray Discharge Apparatus)', hi: 'चित्र 8.1 संदर्भ (कैथोड किरण विसर्जन नलिका)' },
      title: { en: 'Low-Pressure Gas Discharge Tube — Birthplace of the Electron (`1897`)', hi: 'उच्च वोल्टता व निम्न दाब विसर्जन नलिका — इलेक्ट्रॉन की खोज (`1897`)' },
      imageUrl: '/ncert-notes/class9-chem-ch8/real/crookes-cathode-tube.webp',
      hotspots: [
        { en: 'Rays emitted from negative cathode `(−)` toward positive anode `(+)` stayed identical for ALL gases — proving electrons exist in every atom!', hi: 'कैथोड `(−)` से ऐनोड `(+)` की ओर निकलने वाली किरणें सभी गैसों के लिए एकसमान थीं — अतः इलेक्ट्रॉन सभी तत्वों में उपस्थित हैं।' },
      ],
    },
    {
      id: 'vis-jj-thomson',
      figRef: { en: 'NCERT Bio Box p.142 (J. J. Thomson)', hi: 'वैज्ञानिक परिचय पृ. 142 (जे. जे. टॉमसन)' },
      title: { en: 'Sir J. J. Thomson — First Subatomic Particle & Plum Pudding Model', hi: 'सर जे. जे. टॉमसन — प्रथम अवपरमाणुक कण व प्लम-पुडिंग मॉडल' },
      imageUrl: '/ncert-notes/class9-chem-ch8/real/jj-thomson.webp',
      hotspots: [
        { en: 'Awarded 1906 Physics Nobel Prize; pictured charge-to-mass ratio of cathode rays.', hi: 'गैसों में विद्युत चालकता के अध्ययन पर वर्ष `1906` का भौतिकी नोबेल पुरस्कार मिला।' },
      ],
    },
    {
      id: 'vis-rutherford',
      figRef: { en: 'NCERT Bio Box p.145 (Ernest Rutherford)', hi: 'वैज्ञानिक परिचय पृ. 145 (अर्नेस्ट रदरफोर्ड)' },
      title: { en: 'Ernest Rutherford — Nuclear Planetary Atom & Proton Discovery', hi: 'अर्नेस्ट रदरफोर्ड — ग्रहीय नाभिकीय मॉडल एवं प्रोटॉन नामकरण' },
      imageUrl: '/ncert-notes/class9-chem-ch8/real/ernest-rutherford.webp',
      hotspots: [
        { en: 'Showed atom diameter `~10⁻¹⁰ m` surrounds a `10⁵×` tinier dense positive core `~10⁻¹⁵ m`.', hi: 'सिद्ध किया कि परमाणु के `10⁻¹⁰ m` विस्तार के केंद्र में `10⁻¹⁵ m` का अत्यंत सूक्ष्म धनावेशित नाभिक है।' },
      ],
    },
    {
      id: 'vis-niels-bohr',
      figRef: { en: 'NCERT Bio Box p.146 (Niels Bohr)', hi: 'वैज्ञानिक परिचय पृ. 146 (नील्स बोर)' },
      title: { en: 'Niels Bohr — Discrete Stationary Orbits `K, L, M, N` (`1913`)', hi: 'नील्स बोर — निश्चित ऊर्जा स्तर (K, L, M, N) एवं परमाणु स्थायित्व' },
      imageUrl: '/ncert-notes/class9-chem-ch8/real/niels-bohr.webp',
      hotspots: [
        { en: 'Won 1922 Physics Nobel for solving why revolving electrons do not spiral into the nucleus.', hi: 'निश्चित स्थायी कक्षा में गति करने से ऊर्जा क्षय न होने के अभिगृहीत पर `1922` में नोबेल पुरस्कार।' },
      ],
    },
  ],

  activities: [
    {
      num: 'Lab 8.1',
      title: { en: 'Clay-and-Bead Neutrality Lab (`NCERT Think Q1 & Fig 8.2 Thomson Check`)', hi: 'मिट्टी व मोतियों से टॉमसन परमाणु मॉडल व आवेश-संतुलन जाँच (`सोचिए 1`)', },
      materials: { en: 'Modelling clay sphere (`+ve diffuse charge`) + embedded plastic beads (`−1` each)', hi: 'गूँथी हुई मिट्टी का गोला (`धनावेशित माध्यम`) + छोटे मोती (`−1 इलेक्ट्रॉन प्रत्येक`)' },
      steps: {
        en: '1. Press `6` negative beads uniformly inside `+6` positive clay sphere -> test overall net charge.\n2. Reduce clay positive charge to `+4` keeping `6` beads; then test negative clay contamination.',
        hi: '1. `+6` धनावेशी मिट्टी में समान रूप से `6` मोती (`−1` प्रत्येक) धँसाकर कुल आवेश जांचें।\n2. अब मिट्टी का धनावेश घटाकर `+4` करें या मिट्टी में थोड़ा ऋणावेश मिलाएँ।',
      },
      examTakeaway: { en: 'A neutral Thomson atom demands **Total Sphere Positive Charge = Exact Sum of Embedded Electron Charges**; any shortfall makes the model net negative!', hi: 'उदासीन परमाणु के लिए धनावेशित गोले का आवेश उसमें वितरित कुल ऋणावेश के **ठीक बराबर** होना अनिवार्य है!' },
      predictQuestion: {
        prompt: { en: 'In clay-bead Thomson model, if clay holds `+4` charge and has `6` beads (`−1` each), what is the net charge?', hi: 'यदि मिट्टी के गोले पर धनावेश `+4` हो और उसमें `6` मोती (`−1` प्रत्येक) धँसे हों, तो परिणामी आवेश क्या होगा?' },
        options: { en: ['Neutral (`0`)', 'Net Negative (`−2`)', 'Net Positive (`+2`)'], hi: ['उदासीन (`0`)', 'कुल ऋणात्मक (`−2`)', 'कुल धनात्मक (`+2`)'] },
        correctIndex: 1,
        reason: { en: '`+4 + 6×(−1) = −2` -> fewer positive charges than negative electrons yields a negative ion, NOT neutral atom (`Think Q1 i`)!', hi: '`+4 − 6 = −2` (धनावेश कम पड़ने पर मॉडल उदासीन न रहकर ऋणावेशित हो जाता है — `सोचिए 1`)!' },
      },
    },
    {
      num: 'Lab 8.2',
      title: { en: 'Think Like a Scientist: Thin vs Thick Gold Foil α-Scattering (`NCERT p.144`)', hi: 'पतली बनाम मोटी स्वर्ण-पर्णिका में अल्फा (α) कण प्रकीर्णन पूर्वानुमान (`पृष्ठ 144`)', },
      materials: { en: 'Alpha source (`He²⁺` beam), ultra-thin gold foil vs thick gold slab, ZnS circular detector screen', hi: 'अल्फा (`He²⁺`) स्रोत, अति पतली स्वर्ण पन्नी बनाम मोटी पन्नी व संसूचक पर्दा' },
      steps: {
        en: '1. Fire α-beam at single thin foil -> note >99.9% pass straight through.\n2. Replace with thick gold foil stacking many layers of nuclei -> predict scattered vs undeflected fractions!',
        hi: '1. पतली पन्नी से `α`-पुंज गुजारें — अधिकांश सीधे निकलते हैं।\n2. अब **अधिक मोटी स्वर्ण-पर्णिका** रखें जहाँ परमाणुओं व नाभिकों की अनेक परतें एक के पीछे एक हों — विक्षेपण व वापसी अनुपात जांचें।',
      },
      examTakeaway: { en: 'Thicker gold foil packs far more atomic layers along each path -> **sharp increase in nucleus collisions (wide-angle scattering & back-bouncing)**, while straight-through count drops!', hi: 'मोटी पन्नी में रास्ते में नाभिकों की परतें बढ़ने से **α-कणों के टकराने व बड़े कोण पर विक्षेपित होने की संभावना काफी बढ़** जाती है और सीधे निकलने वाले कण घटते हैं!' },
      predictQuestion: {
        prompt: { en: 'What happens if negatively charged electrons/particles replace positive α-particles in Rutherford’s gold foil beam?', hi: 'यदि रदरफोर्ड के स्वर्ण-पर्णिका प्रयोग में धनावेशित अल्फा कणों के स्थान पर **ऋणावेशित कण** उपयोग किए जाएँ तो क्या होगा (`सोचिए 4`)?' },
        options: { en: ['Repelled away backward identically', 'Attracted INWARD toward positive nucleus (curved toward it / captured, fewer bounce back!)', 'Completely unaffected'], hi: ['समान रूप से प्रतिकर्षित होकर लौटेंगे', 'धनावेशित नाभिक की ओर आकर्षित होकर अंदर मुड़ेंगे (`प्रतिकर्षण नहीं`)', 'बिल्कुल नहीं मुड़ेंगे'] },
        correctIndex: 1,
        reason: { en: 'Unlike charges attract (`NCERT Think Q4`)! Negative beam bends TOWARD the positive nucleus instead of bouncing back via repulsion.', hi: 'विपरीत आवेश एक-दूसरे को **आकर्षित** करते हैं (`सोचिए 4`): नाभिक से प्रतिकर्षण वापसी के बजाय ऋणावेशित कण नाभिक की ओर खिंचकर मुड़ेंगे!' },
      },
    },
    {
      num: 'Lab 8.3',
      title: { en: 'Bohr–Bury 2D Shell Constructor & Chlorine Weighted Isotope Balance', hi: 'बोर–बरी इलेक्ट्रॉन विन्यास (`2n²`) एवं क्लोरीन भारित द्रव्यमान संतुलन प्रयोग', },
      materials: { en: 'Concentric K, L, M rings (`n = 1, 2, 3`), electron counters (`Z = 1–18`), ³⁵Cl (75%) & ³⁷Cl (25%) counters', hi: 'K, L, M संकेंद्रित वृत्त, इलेक्ट्रॉन टोकन (`Z = 1–18`) व `³⁵Cl (75%) / ³⁷Cl (25%)` तराजू' },
      steps: {
        en: '1. Load `Z = 11 (Na)`, `Z = 12 (Mg)`, `Z = 17 (Cl)` obeying max `2, 8, 8` outermost limit.\n2. Mix `3` atoms of `³⁵Cl` per `1` atom of `³⁷Cl` -> compute weighted mean vs simple mean.',
        hi: '1. `Na (11), Mg (12), Cl (17)` के इलेक्ट्रॉन क्रम से K, L, M में भरकर संयोजकता जांचें।\n2. `3:1` अनुपात में `³⁵Cl` व `³⁷Cl` लेकर भारित औसत निकालें।',
      },
      examTakeaway: { en: 'Outermost valence electrons (`≤ 8`) dictate valency (`Na=1, Mg=2, Cl=1`); weighted abundance of `3:1` Cl yields **`35.5 u`**!', hi: 'अंतिम कोश के इलेक्ट्रॉन (`Na=2,8,1 → 1`, `Cl=2,8,7 → 1`) संयोजकता तय करते हैं; `3:1` मिश्रण का भारित औसत = **`35.5 u`**!' },
      predictQuestion: {
        prompt: { en: 'An element atom has mass number 37 and 20 neutrons (`RRB Group D 2025`). What are its Atomic Number, Configuration & Valency?', hi: 'एक तत्व X की द्रव्यमान संख्या 37 और न्यूट्रॉन 20 हैं (`Group D 2025`): परमाणु क्रमांक, विन्यास व संयोजकता बताएं!' },
        options: { en: ['19, (2,8,8,1), Valency 1 (K)', '17, (2,8,7), Valency 1 (Cl)', '18, (2,8,8), Valency 0 (Ar)'], hi: ['19, (2,8,8,1), सं. 1 (K)', '17, (2,8,7), सं. 1 (Cl)', '18, (2,8,8), सं. 0 (Ar)'] },
        correctIndex: 1,
        reason: { en: '$Z = A - n^0 = 37 - 20 = 17$ (**Chlorine**); shells **`2, 8, 7`** -> needs 1 electron for octet -> **Valency = 1**!', hi: '$Z = 37 - 20 = 17$ (**क्लोरीन `³⁷₁₇Cl`**); विन्यास **`2, 8, 7`**, अतः संयोजकता = `8 - 7 = 1`!' },
      },
    },
  ],

  tables: [
    {
      id: 'table-8-1-subatomic',
      title: { en: 'NCERT Table 8.1 Expanded — Three Subatomic Particles: Symbol, Charge, Mass & Discoverer', hi: 'NCERT तालिका 8.1 विस्तृत — तीनों अवपरमाणुक कणों का संपूर्ण तुलनात्मक चार्ट' },
      headers: {
        en: ['Subatomic Particle', 'Symbol (`NCERT Table 8.1`)', 'Relative Charge', 'Location & Key Mass Fact', 'Discoverer & Year'],
        hi: ['अवपरमाणुक कण', 'प्रतीक (`तालिका 8.1`)', 'आपेक्षिक आवेश', 'स्थिति व द्रव्यमान तथ्य', 'खोजकर्ता व वर्ष'],
      },
      rows: [
        [{ en: 'Electron', hi: 'इलेक्ट्रॉन' }, { en: '**$e^-$**', hi: '**$e^-$**' }, { en: '**`−1`** (`-1.602×10⁻¹⁹ C`)', hi: '**`−1`** (`-1.602×10⁻¹⁹ C`)' }, { en: 'Shells outside nucleus; **mass negligible** (`~1/2000` p⁺)', hi: 'नाभिक के बाहर कक्षाओं में; **द्रव्यमान नगण्य**' }, { en: '**J. J. Thomson (`1897`)**', hi: '**जे. जे. टॉमसन (`1897`)**' }],
        [{ en: 'Proton', hi: 'प्रोटॉन' }, { en: '**$p^+$**', hi: '**$p^+$**' }, { en: '**`+1`** (`+1.602×10⁻¹⁹ C`)', hi: '**`+1`** (`equal & opposite`)' }, { en: 'Nucleus (`Nucleon`); **~2000× heavier than $e^-$**', hi: 'नाभिक के भीतर; **इलेक्ट्रॉन का ~2000 गुना भारी**' }, { en: '**Ernest Rutherford** (`Goldstein Canal Rays 1886`)', hi: '**अर्नेस्ट रदरफोर्ड** (कैनाल किरण: गोल्डस्टीन)' }],
        [{ en: 'Neutron', hi: 'न्यूट्रॉन' }, { en: '**$n^0$**', hi: '**$n^0$**' }, { en: '**`0`** (`Neutral`)', hi: '**`0`** (`विद्युत उदासीन`)' }, { en: 'Nucleus (`Nucleon`); mass ≈ $p^+$ (**absent in Protium `¹₁H`**)', hi: 'नाभिक (`प्रोटॉन जितना भार`; **¹₁H में शून्य**)' }, { en: '**James Chadwick (`1932`)**', hi: '**जेम्स चैडविक (`1932`)**' }],
      ],
    },
    {
      id: 'table-8-2-symbols',
      title: { en: 'NCERT Table 8.2 High-Yield — Elements With Non-English (Latin/Greek/German) IUPAC Symbols', hi: 'NCERT तालिका 8.2 विशेष — लैटिन, ग्रीक व जर्मन मूल वाले प्रमुख IUPAC प्रतीक' },
      headers: {
        en: ['Element Name', 'IUPAC Symbol', 'Latin / Greek / German Root (`NCERT p.149`)', 'Rule / Exam Trap Check'],
        hi: ['तत्व का नाम', 'IUPAC प्रतीक', 'लैटिन / ग्रीक / जर्मन मूल नाम', 'परीक्षा सावधानी बिंदु'],
      },
      rows: [
        [{ en: 'Iron / Copper / Gold / Silver', hi: 'आयरन (लोहा) / कॉपर / सोना / चाँदी' }, { en: '**`Fe` / `Cu` / `Au` / `Ag`**', hi: '**`Fe` / `Cu` / `Au` / `Ag`**' }, { en: '*Ferrum*, *Cuprum*, *Aurum*, *Argentum* (`Latin`)', hi: 'फेरम (`Fe`), क्यूप्रम (`Cu`), ऑरम (`Au`), आर्जेंटम (`Ag`)' }, { en: 'First letter CAPITAL, second lowercase!', hi: 'पहला बड़ा अक्षर, दूसरा छोटा (`Fe`, न कि `FE`)' }],
        [{ en: 'Sodium / Potassium / Lead', hi: 'सोडियम / पोटैशियम / लेड (सीसा)' }, { en: '**`Na` / `K` / `Pb`**', hi: '**`Na` / `K` / `Pb`**' }, { en: '*Natrium*, *Kalium*, *Plumbum* (`Latin`)', hi: 'नैट्रियम (`Na`), कैलियम (`K`), प्लंबम (`Pb`)' }, { en: 'Most confused by beginners (`So/Po -> WRONG!`)', hi: 'शुरुआती भ्रम: सोडियम `S` नहीं, **`Na`** है!' }],
        [{ en: 'Mercury / Tungsten', hi: 'मर्करी (पारा) / टंगस्टन' }, { en: '**`Hg` / `W`**', hi: '**`Hg` / `W`**' }, { en: '*Hydrargyros* (`Greek`), *Wolfram* (`German`)', hi: 'हाइड्रेगेईरोस (`Hg`, ग्रीक), वोल्फ्रॉम (`W`, जर्मन)' }, { en: 'Featured directly in NCERT Sec 8.4 text (`p.149`)!', hi: 'पृष्ठ 149 मुख्य पाठ से सीधे पूछी जाने वाली जोड़ी!' }],
        [{ en: 'Chlorine / Zinc / Aluminium / Cobalt', hi: 'क्लोरीन / जिंक / ऐलुमिनियम / कोबाल्ट' }, { en: '**`Cl` / `Zn` / `Al` / `Co`**', hi: '**`Cl` / `Zn` / `Al` / `Co`**' }, { en: 'English IUPAC (`1st + key 2nd` / `1st + 2nd`)', hi: 'अंग्रेजी नाम व्युत्पत्ति (`Al`, `Co`, `Cl`, `Zn`)' }, { en: '**`Co`** = Cobalt atom; **`CO`** = Carbon monoxide compound!', hi: '**`Co`** = कोबाल्ट; **`CO`** = कार्बन मोनोऑक्साइड!' }],
      ],
    },
    {
      id: 'table-8-3-models',
      title: { en: 'Evolution of Atomic Models Comparison (`NCERT Sec 8.1–8.9 + Fig 8.16 Timeline`)', hi: 'परमाणु मॉडलों का क्रमिक विकास (`डाल्टन से आधुनिक क्वांटम मॉडल तक`, चित्र 8.16)' },
      headers: {
        en: ['Model & Scientist (`Year`)', 'Core Structural Picture', 'Major Discovery / Achievement', 'Limitation (`Why Replaced`)'],
        hi: ['मॉडल व वैज्ञानिक (`वर्ष`)', 'प्रमुख संरचनात्मक स्वरूप', 'मुख्य उपलब्धि / योगदान', 'प्रमुख सीमा (कमी)'],
      },
      rows: [
        [{ en: '**Dalton (`1808`)**', hi: '**डाल्टन (`1808`)**' }, { en: 'Hard indivisible billiard sphere', hi: 'अविभाज्य सूक्ष्मतम कण' }, { en: 'First science-backed chemical atom concept', hi: 'द्रव्य संरचना का प्रथम वैज्ञानिक आधार' }, { en: 'Failed against Radioactivity & e⁻/p⁺/n⁰ divisibility', hi: 'परमाणु विभाज्य सिद्ध हुआ (e⁻, p⁺, n⁰ मिले)' }],
        [{ en: '**J. J. Thomson (`1897–1904`)**', hi: '**जे. जे. टॉमसन**' }, { en: 'Plum Pudding / Watermelon (`+ve sphere + e⁻`)', hi: 'तरबूज / प्लम-पुडिंग मॉडल' }, { en: 'Explained overall electrical neutrality & e⁻ presence', hi: 'परमाणु उदासीनता व इलेक्ट्रॉन उपस्थिति बताई' }, { en: 'Failed to explain Gold Foil α-scattering bounce-back!', hi: 'रदरफोर्ड के स्वर्ण-पर्णिका विक्षेपण को न समझा सका' }],
        [{ en: '**Rutherford (`1911`)**', hi: '**रदरफोर्ड (`1911`)**' }, { en: 'Tiny `+ve` Nucleus (`10⁻¹⁵ m`) + planetary orbiting `e⁻`', hi: 'केंद्र में नाभिक + ग्रहीय इलेक्ट्रॉन गति' }, { en: 'Proved mostly empty space & central dense Nucleus + Proton', hi: 'रिक्त स्थान, नाभिक (`10⁵×` छोटा) व प्रोटॉन खोजा' }, { en: 'Could NOT explain stability (`spiral collapse`, Fig 8.6)', hi: 'त्वरित इलेक्ट्रॉन के नाभिक में न गिरने का कारण न बता सका' }],
        [{ en: '**Niels Bohr (`1913`)**', hi: '**नील्स बोर (`1913`)**' }, { en: 'Fixed energy shells `K, L, M, N` (`2n²`)', hi: 'निश्चित ऊर्जा स्तर `K, L, M, N`' }, { en: 'Solved atomic stability & quantized jumps', hi: 'स्थायी कक्षाओं द्वारा स्थायित्व व ऊर्जा क्वांटम सिद्ध' }, { en: 'Refined later to Quantum Electron-Cloud probabilities', hi: 'इलेक्ट्रॉन निश्चित पथ नहीं, `इलेक्ट्रॉन अभ्र` (`Fig 8.16`) में रहते हैं' }],
      ],
    },
    {
      id: 'table-8-4-elements-1to18',
      title: { en: 'NCERT Table 8.4 COMPLETE + Valency Column (`Sec 8.8`): First 18 Elements (`Z = 1` to `18`)', hi: 'NCERT तालिका 8.4 संपूर्ण (+ संयोजकता कॉलम): प्रथम 18 तत्व (`Z = 1` से `18` तक संपूर्ण)' },
      headers: {
        en: ['Element (`Sym`)', 'Z / p⁺ / e⁻', 'n⁰ (`N`)', 'Shells (`K-L-M`)', 'Valency'],
        hi: ['तत्व (`प्रतीक`)', 'Z / p⁺ / e⁻', 'न्यूट्रॉन (n⁰)', 'वितरण (`K-L-M`)', 'संयोजकता'],
      },
      rows: [
        [{ en: 'Hydrogen (`H`)', hi: 'हाइड्रोजन (`H`)' }, { en: '1', hi: '1' }, { en: '**0 (`—`)**', hi: '**0 (`—`)**' }, { en: '1', hi: '1' }, { en: '**1**', hi: '**1**' }],
        [{ en: 'Helium (`He`)', hi: 'हीलियम (`He`)' }, { en: '2', hi: '2' }, { en: '2', hi: '2' }, { en: '2 (`K full!`)', hi: '2 (`K पूर्ण`)' }, { en: '**0 (`Inert`)**', hi: '**0 (`अक्रिय`)**' }],
        [{ en: 'Lithium (`Li`) / Beryllium (`Be`) / Boron (`B`)', hi: 'लीथियम (`Li`) / बेरिलियम (`Be`) / बोरॉन (`B`)' }, { en: '3 / 4 / 5', hi: '3 / 4 / 5' }, { en: '4 / 5 / 6', hi: '4 / 5 / 6' }, { en: '`2,1` / `2,2` / `2,3`', hi: '`2,1` / `2,2` / `2,3`' }, { en: '**1 / 2 / 3**', hi: '**1 / 2 / 3**' }],
        [{ en: 'Carbon (`C`) / Nitrogen (`N`) / Oxygen (`O`) / Fluorine (`F`)', hi: 'कार्बन (`C`) / नाइट्रोजन (`N`) / ऑक्सीजन (`O`) / फ्लुओरीन (`F`)' }, { en: '6 / 7 / 8 / 9', hi: '6 / 7 / 8 / 9' }, { en: '6 / 7 / 8 / 10', hi: '6 / 7 / 8 / 10' }, { en: '`2,4` / `2,5` / `2,6` / `2,7`', hi: '`2,4` / `2,5` / `2,6` / `2,7`' }, { en: '**4 / 3 / 2 / 1**', hi: '**4 / 3 / 2 / 1**' }],
        [{ en: 'Neon (`Ne`) / Sodium (`Na`) / Magnesium (`Mg`) / Aluminium (`Al`)', hi: 'निऑन (`Ne`) / सोडियम (`Na`) / मैग्नीशियम (`Mg`) / ऐलुमिनियम (`Al`)' }, { en: '10 / 11 / 12 / 13', hi: '10 / 11 / 12 / 13' }, { en: '10 / 12 / 12 / 14', hi: '10 / 12 / 12 / 14' }, { en: '`2,8` / `2,8,1` / `2,8,2` / `2,8,3`', hi: '`2,8` / `2,8,1` / `2,8,2` / `2,8,3`' }, { en: '**0 / 1 / 2 / 3**', hi: '**0 / 1 / 2 / 3**' }],
        [{ en: 'Silicon (`Si`) / Phosphorus (`P`) / Sulphur (`S`) / Chlorine (`Cl`)', hi: 'सिलिकॉन (`Si`) / फॉस्फोरस (`P`) / सल्फर (`S`) / क्लोरीन (`Cl`)' }, { en: '14 / 15 / 16 / 17', hi: '14 / 15 / 16 / 17' }, { en: '14 / 16 / 16 / 18', hi: '14 / 16 / 16 / 18' }, { en: '`2,8,4` / `2,8,5` / `2,8,6` / `2,8,7`', hi: '`2,8,4` / `2,8,5` / `2,8,6` / `2,8,7`' }, { en: '**4 / 3 / 2 / 1**', hi: '**4 / 3 / 2 / 1**' }],
        [{ en: 'Argon (`Ar`)', hi: 'आर्गन (`Ar`)' }, { en: '18', hi: '18' }, { en: '**22**', hi: '**22**' }, { en: '**`2, 8, 8` (`Octet!`)**', hi: '**`2, 8, 8` (`अष्टक!`)**' }, { en: '**0 (`Inert`)**', hi: '**0 (`अक्रिय`)**' }],
      ],
    },
    {
      id: 'table-8-5-isotopes-isobars',
      title: { en: 'Isotopes vs Isobars Master Chart + 4 Medical/Nuclear Applications (`NCERT p.154–156`)', hi: 'समस्थानिक बनाम समभारिक संपूर्ण चार्ट एवं समस्थानिकों के 4 मुख्य अनुप्रयोग' },
      headers: {
        en: ['Category / Isotope', 'Key Specification (`Z, A, Neutrons`)', 'Properties & Exam Takeaway'],
        hi: ['श्रेणी / विशिष्ट समस्थानिक', 'प्रमुख आँकड़े (`Z, A, न्यूट्रॉन`)', 'विशेष गुण एवं परीक्षा अनुप्रयोग'],
      },
      rows: [
        [{ en: 'Isotopes (`समस्थानिक`)', hi: 'समस्थानिक (`H & C` उदाहरण)' }, { en: 'Same $Z$, diff $n^0/A$: **`¹₁H, ²₁H, ³₁H`** & **`¹²₆C, ¹³₆C, ¹⁴₆C`**', hi: 'समान `Z`, भिन्न `A`: **`¹H, ²H, ³H`** तथा **`¹²C, ¹³C, ¹⁴C`**' }, { en: '**SAME chemical properties** (`same e⁻`), **diff physical BP/MP**', hi: '**रासायनिक गुण समान** (संयोजकता एक), **भौतिक गुण भिन्न**!' }],
        [{ en: 'Uranium-235 (`²³⁵₉₂U`) & Cobalt-60 (`⁶⁰₂₇Co`)', hi: 'यूरेनियम-235 (`²³⁵₉₂U`) व कोबाल्ट-60 (`⁶⁰₂₇Co`)' }, { en: 'Natural/Radioactive Medical & Power isotopes', hi: 'ऊर्जा व चिकित्सा के रेडियोधर्मी समस्थानिक' }, { en: '**U-235**: Nuclear power fuel (`electricity`) | **Co-60**: **Cancer radiotherapy**', hi: '**U-235**: नाभिकीय विद्युत ईंधन | **Co-60**: **कैंसर उपचार**!' }],
        [{ en: 'Iodine-131 (`¹³¹₅₃I`) & Carbon-14 (`¹⁴₆C`)', hi: 'आयोडीन-131 (`¹³¹₅₃I`) व कार्बन-14 (`¹⁴₆C`)' }, { en: 'Medical Thyroid & Archaeology Dating isotopes', hi: 'थायरॉइड चिकित्सा एवं कार्बन-डेटिंग समस्थानिक' }, { en: '**I-131**: **Goitre & Thyroid cancer** | **C-14**: **Ancient fossil/artefact age**', hi: '**I-131**: **घेंघा रोग / थायरॉइड कैंसर** | **C-14**: **जीवाश्म आयु ज्ञात करना**!' }],
        [{ en: 'Chlorine Weighted Mean (`p.155`)', hi: 'क्लोरीन भारित औसत (`35.5 u`)' }, { en: '`³⁵₁₇Cl` (`75%`) + `³⁷₁₇Cl` (`25%`) -> **`3:1` ratio**', hi: '`³⁵Cl (75%) + ³⁷Cl (25%)` -> **`3:1` अनुपात**' }, { en: '$\\frac{35\\times 75 + 37\\times 25}{100} = \\mathbf{35.5\\text{ u}}$ (`NOT 36 u`!)', hi: '$35\\times 0.75 + 37\\times 0.25 = \\mathbf{35.5\\text{ u}}$ (एक परमाणु `35.5` नहीं होता)!' }],
        [{ en: 'Isobars (`समभारिक`, `p.156`)', hi: 'समभारिक (`Isobars` त्रिक)' }, { en: 'Diff $Z$, SAME $A$: **`⁴⁰₁₈Ar`, `⁴⁰₁₉K`, `⁴⁰₂₀Ca`** (`40 nucleons!`)', hi: 'भिन्न `Z`, समान `A=40`: **`⁴⁰₁₈Ar, ⁴⁰₁₉K, ⁴⁰₂₀Ca`**' }, { en: '**Different elements**, different `p⁺, n⁰, e⁻`, **diff chemical properties**', hi: 'अलग तत्व व अलग इलेक्ट्रॉन होने से **रासायनिक गुण भी भिन्न**!' }],
      ],
    },
  ],

  inTextQuestions: [
    { num: 'Think Q1', q: { en: 'Think Q1 (`p.143`): Clay (`+ve`) & bead (`e⁻`) model of Thomson atom: What if (i) clay positive charge < total bead charge, OR (ii) clay accidentally carries slight negative charge?', hi: 'सोचिए 1 (`पृ.143`): मिट्टी (`+ve`) व मोतियों (`e⁻`) से बने टॉमसन मॉडल में क्या होगा यदि (i) मिट्टी पर धनावेश मोतियों के कुल ऋणावेश से कम हो, या (ii) मिट्टी में थोड़ा ऋणावेश हो?' }, a: { en: '**(i)** Total negative > positive -> atom fails neutrality and turns **net negatively charged (anion)**. **(ii)** Adding negative charge onto clay creates doubly negative net charge—**definitely NOT a neutral atom**!', hi: '**(i)** धनावेश कम होने पर मॉडल उदासीन नहीं रहेगा बल्कि **ऋणावेशित** हो जाएगा। **(ii)** मिट्टी में भी ऋणावेश होने पर आवेश संतुलन बिगड़ेगा और **उदासीन परमाणु प्रदर्शित नहीं होगा**!' } },
    { num: 'Think Q2', q: { en: 'Think Q2 (`p.143`): Is comparing Thomson’s atom to an orange or lemon justified? Where does it match and where does it fall short?', hi: 'सोचिए 2 (`पृ.143`): क्या टॉमसन मॉडल की तुलना संतरे अथवा नींबू से करना उचित है? कहाँ मेल खाता है और कहाँ कमी है?' }, a: { en: '**Matches slightly:** juicy edible sphere represents positive matrix enclosing small seeds. **Falls short:** Orange/lemon seeds cluster neatly inside central juicy segments surrounded by thick inedible rind, rather than distributed **uniformly throughout** the sphere like watermelon seeds!', hi: '**सीमित मेल:** नरम गूदा धनावेश व बीज इलेक्ट्रॉनों जैसे दिखते हैं। **कमी:** संतरे/नींबू के बीज बाहरी छिलके के अंदर केंद्रीय भाग/फाँकों में सिमटे रहते हैं, जबकि टॉमसन मॉडल में इलेक्ट्रॉन पूरे गोले में एकसमान वितरित रहते हैं (तरबूज अधिक सटीक है)!' } },
    { num: 'Think Q3', q: { en: 'Think Q3 (`p.143`): Why did J. J. Thomson conclude that electrons exist universally in ALL atoms?', hi: 'सोचिए 3 (`पृ.143`): टॉमसन ने यह निष्कर्ष क्यों निकाला कि इलेक्ट्रॉन सभी परमाणुओं में उपस्थित होते हैं?' }, a: { en: 'Changing the **cathode metal** OR the **gas inside the discharge tube** produced identical cathode-ray particles (`same e/m ratio`), proving electrons are fundamental building blocks of **every element**!', hi: 'कैथोड का पदार्थ अथवा विसर्जन नलिका में भरी गैस बदलने पर भी कैथोड किरण कणों की प्रकृति व आवेश-द्रव्यमान अनुपात अपरिवर्तित रहे — जिससे सिद्ध हुआ कि इलेक्ट्रॉन **प्रत्येक तत्व के परमाणुओं में** मौजूद हैं।' } },
    { num: 'Think Q4', q: { en: 'Think Q4 (`p.144`): What would have happened if Rutherford used NEGATIVELY charged particles instead of positive α-particles in gold foil?', hi: 'सोचिए 4 (`पृ.144`): यदि रदरफोर्ड के स्वर्ण-पर्णिका प्रयोग में अल्फा (`α`) कणों के स्थान पर ऋणावेशित कणों का उपयोग किया जाता तो क्या होता?' }, a: { en: 'Instead of repelling & bouncing backward near the positive nucleus, negative particles would get **attracted TOWARD the nucleus**, curving inward or getting absorbed—changing deflections completely!', hi: 'प्रतिकर्षण से वापस लौटने के बजाय, ऋणावेशित कण **धनावेशित नाभिक द्वारा आकर्षित होकर उसकी ओर मुड़ जाते या अवशोषित हो जाते** (180° प्रतिकर्षण वापसी नहीं दिखती)!' } },
    { num: 'Think Q5', q: { en: 'Think Q5 (`p.144`): How did JUST one result—some α-particles bouncing straight back—completely disprove Thomson’s plum pudding model?', hi: 'सोचिए 5 (`पृ.144`): कुछ α-कणों के तीव्र गति से पुन: लौट आने मात्र से टॉमसन का प्लम-पुडिंग मॉडल पूर्णतः गलत कैसे सिद्ध हुआ?' }, a: { en: 'In Thomson’s model, positive charge is thinly spread over the whole sphere (`too weak locally` to push back a fast heavy `He²⁺` projectile!). Only a **concentrated, super-dense tiny positive nucleus** exerts huge electrostatic repulsion capable of reversing an α-particle (`180°`)!', hi: 'टॉमसन मॉडल में धनावेश पूरे परमाणु में फैला (क्षीण) था जो भारी व तेज α-कणों को वापस नहीं मोड़ सकता था। कणों का टकराकर लौटना तभी संभव है जब **संपूर्ण धनावेश व द्रव्यमान अत्यंत छोटे सघन केंद्र (नाभिक)** में केंद्रित हो!' } },
    { num: 'Think Q6', q: { en: 'Think Q6 (`p.144`): Formulate one thoughtful scientific question you would ask Rutherford about his experiment.', hi: 'सोचिए 6 (`पृ.144`): यदि आप रदरफोर्ड से उनके कार्य के संबंध में एक प्रश्न पूछ सकते तो वह क्या होता?' }, a: { en: '*"If fast-moving negatively charged electrons keep orbiting outside this tiny positive nucleus, why don’t electric attraction and radiation loss pull them crashing directly into the nucleus?"* (The very question Bohr later answered in 1913!)', hi: '*"यदि धनावेशित नाभिक इलेक्ट्रॉनों को अपनी ओर खींचता है और वे वृत्ताकार पथ में त्वरित हो रहे हैं, तो वे ऊर्जा खोकर नाभिक में गिरते क्यों नहीं हैं?"* (यही प्रश्न आगे नील्स बोर के 1913 मॉडल का आधार बना!)' } },
    { num: 'Think Q7', q: { en: 'Think Q7 (`p.145` A/R): Assertion: Rutherford concluded mass centres in tiny Nucleus. Reason: Thomson said electrons embed in uniform +ve sphere. Pick option `(i)–(iv)`.', hi: 'सोचिए 7 (`पृ.145` कथन-कारण): कथन — रदरफोर्ड ने नाभिक केंद्रित द्रव्यमान निष्कर्ष दिया। कारण — टॉमसन मॉडल में e⁻ समान धनावेशित गोले में धँसे रहते हैं। विकल्प चुनें।' }, a: { en: '**Option `(ii)`**: Both Assertion & Reason are independently **TRUE**, yet **Thomson’s plum-pudding description does NOT explain Rutherford’s nuclear discovery** (`in fact Rutherford disproved it`)!', hi: '**विकल्प `(ii)`:** कथन और कारण दोनों अपने-अपने संदर्भ में **सत्य** हैं, परंतु कारण (टॉमसन मॉडल) रदरफोर्ड के नाभिकीय निष्कर्ष की **सही व्याख्या नहीं** करता!' } },
    { num: 'Think Q8', q: { en: 'Think Q8 (`p.149`): Imagine discovering a new element named after you (`e.g., Bhargavium / Ananyum`). Propose an IUPAC-compliant symbol.', hi: 'सोचिए 8 (`पृ.149`): कल्पना करें आपने अपने नाम पर नया तत्व खोजा है। सिद्ध करें कि आपका चुना प्रतीक IUPAC नियमों का पालन करता है।' }, a: { en: 'Example: *Aaravium* -> Symbol **`Aa`** (`or Arv` — wait `Ar` is Argon!). **Rules met:** starts with **one Capital letter (`A`)** + **one lowercase second letter (`a`)** avoiding conflict with existing 118 IUPAC symbols!', hi: 'उदाहरण: यदि नाम *आरवियम* रखा जाए, तो प्रतीक **`Av`** (`Ar` आर्गन पहले से है) — **पहला अक्षर बड़ा (`Capital`)** व **दूसरा छोटा (`Small`)** होने से यह पूर्णतः IUPAC नियम के अनुरूप होगा!' } },
    { num: 'Think Q9', q: { en: 'Think Q9 (`p.149`): What problems would arise if every scientist used different personal symbols for the same element?', hi: 'सोचिए 9 (`पृ.149`): यदि सभी वैज्ञानिक एक तत्व के लिए भिन्न-भिन्न प्रतीकों का उपयोग करते तो क्या समस्याएँ उत्पन्न होतीं?' }, a: { en: 'Global scientific communication would break down cleanly: chemical formulas (`H₂O`, equations), medicine dosages, & international papers across languages would cause fatal misinterpretations!', hi: 'अंतर्राष्ट्रीय वैज्ञानिक संवाद व शोध असंभव हो जाते; रासायनिक समीकरणों, औषधि निर्माण और वैश्विक विज्ञान साहित्य में भारी भ्रम व त्रुटियाँ उत्पन्न होतीं।' } },
    { num: 'Think Q10', q: { en: 'Think Q10 (`p.150`): An atom of Atomic Number `Z = 26` (`Iron`) has `56` Nucleons (`A = 56`). Find its electrons, protons & neutrons.', hi: 'सोचिए 10 (`पृ.150`): परमाणु क्रमांक `26` के किसी परमाणु में `56` न्यूक्लिऑन हैं। इसके इलेक्ट्रॉन, प्रोटॉन व न्यूट्रॉन ज्ञात करें।' }, a: { en: 'Protons $= Z = \\mathbf{26}$; neutral Electrons $= p^+ = \\mathbf{26}$; Neutrons $= A - Z = 56 - 26 = \\mathbf{30}$ (`Iron ⁵⁶₂₆Fe` — matches Sec 8.3 box!).', hi: 'प्रोटॉन $= Z = \\mathbf{26}$; उदासीन इलेक्ट्रॉन $= \\mathbf{26}$; न्यूट्रॉन $= 56 - 26 = \\mathbf{30}$ (यह आयरन `⁵⁶₂₆Fe` है)!' } },
    { num: 'Think Q11', q: { en: 'Think Q11 (`p.150`): An atom’s nucleus holds `20 protons` (`Z = 20`) and Mass Number `A = 41`. Find its neutrons.', hi: 'सोचिए 11 (`पृ.150`): एक परमाणु के नाभिक में `20` प्रोटॉन व द्रव्यमान संख्या `41` है। इसमें न्यूट्रॉनों की संख्या ज्ञात करें।' }, a: { en: 'Neutrons $n^0 = A - p^+ = 41 - 20 = \\mathbf{21}$ (`Calcium-41 isotope`).', hi: 'न्यूट्रॉन संख्या $= A - Z = 41 - 20 = \\mathbf{21}$ (`कैल्शियम-41 समस्थानिक`)।' } },
    { num: 'Think Q12', q: { en: 'Think Q12 (`p.150`): An atom contains `18 neutrons` and Atomic Number `Z = 17`. Find its Mass Number ($A$).', hi: 'सोचिए 12 (`पृ.150`): एक परमाणु में `18` न्यूट्रॉन व परमाणु क्रमांक `17` है। इसकी द्रव्यमान संख्या क्या होगी?' }, a: { en: 'Mass Number $A = Z + n^0 = 17 + 18 = \\mathbf{35}$ (`Chlorine-35`).', hi: 'द्रव्यमान संख्या $A = 17 + 18 = \\mathbf{35\\text{ u}}$ (`क्लोरीन-35`)!' } },
    { num: 'Think Q13', q: { en: 'Think Q13 (`p.150`): Wait—an atom has `11 electrons` (`Na`). Can you find its exact number of NEUTRONS using JUST electron count?', hi: 'सोचिए 13 (`पृ.150`): एक परमाणु में `11` इलेक्ट्रॉन हैं। क्या केवल इससे न्यूट्रॉन की संख्या ज्ञात की जा सकती है (`सोचिए सावधानी से!`)?' }, a: { en: '**Need Mass Number `A` first!** `11 e⁻` confirms `Z = 11` (`11 protons, Sodium`), NOT `A`; for standard Sodium (`²³₁₁Na`), $n^0 = 23 - 11 = \\mathbf{12}$ (as in `Table 8.4` & `Think Q16`). Isotopes can alter $n^0$!', hi: 'केवल `11 e⁻` से $Z = 11$ (`प्रोटॉन 11, सोडियम`) मिलता है; न्यूट्रॉन के लिए द्रव्यमान संख्या $A$ (`मानक सोडियम के लिए A=23`) आवश्यक है — तब $n^0 = 23 - 11 = \\mathbf{12}$ (`तालिका 8.4`)!' } },
    { num: 'Think Q14', q: { en: 'Think Q14 (`p.152`): Identify Valence Shell Electrons in (i) `¹²₆C`, (ii) `¹⁹₉F`, (iii) `²⁸₁₄Si`.', hi: 'सोचिए 14 (`पृ.152`): बाह्यतम कोश में इलेक्ट्रॉनों की संख्या पहचानें: (i) `¹²₆C`, (ii) `¹⁹₉F`, (iii) `²⁸₁₄Si`।' }, a: { en: '**(i) Carbon (`Z=6`):** `2, 4` -> **`4`** valence e⁻; **(ii) Fluorine (`Z=9`):** `2, 7` -> **`7`** valence e⁻; **(iii) Silicon (`Z=14`):** `2, 8, 4` -> **`4`** valence e⁻!', hi: '**(i) कार्बन (`Z=6`):** `2, 4` $\\to$ **`4`**; **(ii) फ्लुओरीन (`Z=9`):** `2, 7` $\\to$ **`7`**; **(iii) सिलिकॉन (`Z=14`):** `2, 8, 4` $\\to$ **`4`**!' } },
    { num: 'Think Q15', q: { en: 'Think Q15 (`p.152`): Write electronic configurations of elements with Atomic Numbers `12`, `16`, and `18`.', hi: 'सोचिए 15 (`पृ.152`): परमाणु क्रमांक `12`, `16` व `18` वाले तत्वों का इलेक्ट्रॉनिक विन्यास लिखें।' }, a: { en: '`Z = 12 (Mg)` -> **`2, 8, 2`**; `Z = 16 (S)` -> **`2, 8, 6`**; `Z = 18 (Ar)` -> **`2, 8, 8`**.', hi: '`Z=12 (Mg)`: **`2, 8, 2`**; `Z=16 (S)`: **`2, 8, 6`**; `Z=18 (Ar)`: **`2, 8, 8`**!' } },
    { num: 'Think Q16', q: { en: 'Think Q16 Riddle (`p.152`): *"My Mass Number is 23 and Protons = 11. I am a soft metal reacting vigorously with water. Who am I & how many neutrons?"*', hi: 'सोचिए 16 पहेली (`पृ.152`): *"द्रव्यमान संख्या 23, प्रोटॉन 11; मैं जल से तीव्र अभिक्रिया करने वाली नरम धातु हूँ — मैं कौन हूँ व कितने न्यूट्रॉन हैं?"*' }, a: { en: 'Element $Z = 11$ -> **Sodium (`Na`, Natrium)**! Neutrons $= 23 - 11 = \\mathbf{12\\text{ neutrons}}$!', hi: '$Z=11$ $\\implies$ **सोडियम (`Na`)**! न्यूट्रॉन संख्या $= 23 - 11 = \\mathbf{12}$!' } },
    { num: 'Think Q17', q: { en: 'Think Q17 (`p.155`): Compare two atoms both with `11 protons`, one with `12 neutrons` and the other with `13 neutrons`. Same or different element?', hi: 'सोचिए 17 (`पृ.155`): दो परमाणु दोनों में `11` प्रोटॉन हैं, एक में `12` व दूसरे में `13` न्यूट्रॉन हैं — `Z` व `A` की तुलना करें; क्या वे एक ही तत्व हैं?' }, a: { en: 'Both have **`Z = 11`** -> **SAME element (`Sodium` isotopes)**: **`²³₁₁Na`** (`11+12=23 u`) and **`²⁴₁₁Na`** (`11+13=24 u`) — equal atomic numbers, different mass numbers!', hi: 'दोनों का परमाणु क्रमांक **$Z = 11$** समान होने से ये **एक ही तत्व (सोडियम) के दो समस्थानिक** (`²³₁₁Na` व `²⁴₁₁Na`) हैं!' } },
    { num: 'Think Q18', q: { en: 'Think Q18 (`p.155`): Calculate Bromine’s weighted average atomic mass from **`⁷⁹₃₅Br` (`49.7%`)** & **`⁸¹₃₅Br` (`50.3%`)**.', hi: 'सोचिए 18 (`पृ.155`): यदि ब्रोमीन **`⁷⁹₃₅Br` (`49.7%`)** व **`⁸¹₃₅Br` (`50.3%`)** के रूप में उपलब्ध हो, तो भारित औसत द्रव्यमान निकालें।' }, a: { en: '$\\text{Weighted Mass} = 79 \\times \\frac{49.7}{100} + 81 \\times \\frac{50.3}{100} = 39.263 + 40.743 = \\mathbf{80.006\\text{ u}}$ (`≈ 80 u`)!', hi: '$\\text{औसत द्रव्यमान} = (79 \\times 0.497) + (81 \\times 0.503) = 39.263 + 40.743 = \\mathbf{80.006\\text{ u}}$ (`≈ 80 u`)!' } },
  ],

  exercises: [
    { num: 1, q: { en: 'Ex Q1: Choose correct option(s) for Rutherford’s gold foil experiment and justify True/False: (i) Explicitly showed neutrons in nucleus. (ii) Disproved Plum Pudding & birthed central Nucleus. (iii) Sharp deflections show concentrated mass & +ve charge in tiny core. (iv) Way α bounced showed electrons orbit nucleus.', hi: 'अभ्यास 1: रदरफोर्ड के स्वर्ण-पर्णिका प्रयोग हेतु सही विकल्प चुनें व कारण दें — (i) नाभिक में न्यूट्रॉन दिखाया, (ii) प्लम-पुडिंग गलत कर नाभिक सिद्ध किया, (iii) अधिक विक्षेपण से सघन सूक्ष्म धनावेशित केंद्र सिद्ध हुआ, (iv) विक्षेपण से इलेक्ट्रॉन की परिक्रमा दिखी।' }, a: { en: '**(ii) & (iii) are CORRECT!** Why others fail: **(i)** is False—neutrons were discovered `21 years later` by Chadwick (`1932`); **(iv)** is False—α-scattering tested nucleus mass/charge, NOT electron orbital paths (`electrons were too light to deflect α-particles`).', hi: '**(ii) व (iii) सत्य हैं!** जबकि **(i) असत्य** (न्यूट्रॉन `1932` में चैडविक ने खोजा) और **(iv) असत्य** (हल्के इलेक्ट्रॉन भारी α-कणों को विक्षेपित नहीं करते, अतः इस प्रयोग से इलेक्ट्रॉन की कक्षा सिद्ध नहीं हुई)!' } },
    { num: 2, q: { en: 'Ex Q2: For Bohr’s model, mark True/False with reason: (i) Electrons radiate energy in fixed orbits & spiral in. (ii) Electrons exist anywhere with unfixed energy. (iii) Electrons orbit fixed energy shells WITHOUT losing energy. (iv) Orbiting electrons can reside between energy levels too.', hi: 'अभ्यास 2 (बोर मॉडल — सत्य/असत्य कारण सहित): (i) निश्चित कक्षा में ऊर्जा खोकर गिरते हैं, (ii) कहीं भी अनिश्चित ऊर्जा संग रह सकते हैं, (iii) निश्चित ऊर्जा कक्षाओं में बिना ऊर्जा ह्रास घूमते हैं, (iv) ऊर्जा स्तरों के मध्य भी पाए जा सकते हैं।' }, a: { en: '**ONLY (iii) is TRUE!** **(i)** False (`stationary orbits do NOT lose energy`), **(ii)** False (`only specific permitted orbits exist with fixed quantized energy`), **(iv)** False (`spaces BETWEEN levels are strictly forbidden!`).', hi: '**केवल (iii) सत्य है!** **(i)** असत्य (`स्थायी कक्षा में ऊर्जा क्षय नहीं होता`), **(ii)** असत्य (`ऊर्जा निश्चित व पथ अनुमत हैं`), **(iv)** असत्य (`दो कोशों के मध्य इलेक्ट्रॉन नहीं रह सकते`)!' } },
    { num: 3, q: { en: 'Ex Q3: Three nuclei X (`18p, 19n`), Y (`17p, 18n`), Z (`17p, 20n`). State relationship between (i) Y & Z, and (ii) Z & X.', hi: 'अभ्यास 3: तीन परमाणु नाभिक X (`18p, 19n`), Y (`17p, 18n`), Z (`17p, 20n`) हैं। संबंध स्पष्ट करें — (i) Y एवं Z, (ii) Z एवं X।' }, a: { en: '**(i) Y & Z** both have **`17 protons (Z=17)`** yet different masses (`35 u vs 37 u`) -> **ISOTOPES (`समस्थानिक` — Chlorine ³⁵Cl & ³⁷Cl)**! **(ii) Z (`17+20=37`) & X (`18+19=37`)** have DIFFERENT `Z` (`17 vs 18`) yet EQUAL Mass Number **`37`** -> **ISOBARS (`समभारिक`)**!', hi: '**(i) Y व Z** में प्रोटॉन संख्या **`17`** समान व द्रव्यमान (`35` व `37`) भिन्न → **समस्थानिक (`Isotopes`, ³⁵Cl व ³⁷Cl)**! **(ii) Z (`17+20=37`) व X (`18+19=37`)** में प्रोटॉन भिन्न व द्रव्यमान संख्या **`37`** समान → **समभारिक (`Isobars`)**!' } },
    { num: 4, q: { en: 'Ex Q4: What did Rutherford conclude about the LOCATION and PROPERTIES of the positive charge from backward-bouncing & wide-angle α-particles?', hi: 'अभ्यास 4: रदरफोर्ड ने वापस लौटे व बड़े कोण पर विक्षेपित α-कणों से धनावेशित भाग की स्थिति व अभिलक्षणों पर क्या निष्कर्ष निकाला?' }, a: { en: '**Location:** Concentrated strictly at the **very centre** (`Nucleus`, diameter `~10⁻¹⁵ m` vs atom `~10⁻¹⁰ m`). **Properties:** Positively charged, enormously dense (`holds nearly 100% atomic mass`), and occupies negligible volume compared to mostly empty surrounding space!', hi: '**अवस्थिति:** परमाणु के **ठीक केंद्र (`नाभिक`)** में। **अभिलक्षण:** यह भाग अत्यंत सूक्ष्म (`परमाणु से 10⁵ गुना छोटा`), अत्यंत **सघन (dense)** और परमाणु के संपूर्ण धनावेश तथा लगभग पूर्ण द्रव्यमान को समेटे हुए है!' } },
    { num: 5, q: { en: 'Ex Q5: Explain & arrange in CORRECT chronological historical order: (i) Bohr fixed energy orbits, (ii) Thomson plum pudding, (iii) Rutherford dense central nucleus, (iv) Dalton indivisible particle.', hi: 'अभ्यास 5: परमाणु मॉडलों के सही ऐतिहासिक कालक्रम में व्यवस्थित कर व्याख्या करें: (i) बोर ऊर्जा स्तर, (ii) टॉमसन प्लम पुडिंग, (iii) रदरफोर्ड नाभिक, (iv) डाल्टन अविभाज्य कण।' }, a: { en: 'Chronological Order: **`(iv) Dalton (1808)` -> `(ii) Thomson (1897–1904)` -> `(iii) Rutherford (1911)` -> `(i) Bohr (1913)`**! *(Indivisible sphere -> diffuse +ve with e⁻ -> dense central +ve nucleus -> quantized non-radiating shells)*', hi: 'सही कालक्रम: **`(iv) डाल्टन (1808)` $\\to$ `(ii) टॉमसन (1897–1904)` $\\to$ `(iii) रदरफोर्ड (1911)` $\\to$ `(i) बोर (1913)`**!' } },
    { num: 6, q: { en: 'Ex Q6: Why don’t electrons fly out away from atoms while revolving? Which force keeps them bound toward the nucleus?', hi: 'अभ्यास 6: नाभिक के चारों ओर घूमते इलेक्ट्रॉन परमाणु से बाहर क्यों नहीं निकल जाते? उन्हें कौन-सा बल बाँधे रखता है?' }, a: { en: 'Strong **Electrostatic Force of Attraction (`स्थिरवैद्युत आकर्षण बल`)** between the **positively charged Nucleus (`+`)** and **negatively charged Electrons (`−`)** acts continuously inward (`centripetal pull`), holding electrons in orbit!', hi: 'धनावेशित नाभिक (`+`) और ऋणावेशित इलेक्ट्रॉनों (`−`) के बीच लगने वाला प्रबल **स्थिरवैद्युत आकर्षण बल (`Electrostatic Force`)** अभिकेंद्रीय आकर्षण प्रदान कर उन्हें कक्षा में बाँधे रखता है!' } },
    { num: 7, q: { en: 'Ex Q7 (A/R): Assertion: Subatomic particles helped understand atomic structure. Reason: Number of electrons equals number of protons in an atom. Select `(i)–(iv)`.', hi: 'अभ्यास 7 (कथन-कारण): कथन — अवपरमाणुक कणों की खोज से परमाणु संरचना समझने में सहायता मिली। कारण — किसी परमाणु में इलेक्ट्रॉनों की संख्या प्रोटॉनों के समान होती है।' }, a: { en: '**Option `(ii)`**: Assertion is **TRUE** (`e⁻, p⁺, n⁰ explained stability/isotopes`), and Reason is **TRUE** (`explains neutrality`), yet equal $e^- = p^+$ alone is **NOT the complete explanation** of why discovering subatomic particles unveiled shell structure!', hi: '**विकल्प `(ii)`:** कथन और कारण दोनों **सत्य** हैं, परंतु केवल $e^- = p^+$ होना अवपरमाणुक कणों से संपूर्ण संरचना (`कोश, नाभिक, समस्थानिक`) समझ पाने का पूर्ण कारण नहीं है।' } },
    { num: 8, q: { en: 'Ex Q8: Magnesium (`critical for muscle contraction`) has Mass Number `24` and Atomic Number `12`. Find its `(i) protons`, `(ii) neutrons`, `(iii) electrons`, & electron distribution.', hi: 'अभ्यास 8: मैग्नीशियम (`मांसपेशी संकुचन हेतु आवश्यक`) की द्रव्यमान संख्या `24` व परमाणु क्रमांक `12` है: `(i) प्रोटॉन`, `(ii) न्यूट्रॉन`, `(iii) इलेक्ट्रॉन` व कोश वितरण बताएं।' }, a: { en: '**(i) Protons** $= Z = \\mathbf{12}$; **(ii) Neutrons** $= A - Z = 24 - 12 = \\mathbf{12}$; **(iii) Electrons** $= \\mathbf{12}$. **Shell distribution (`Bohr 2D rings`):** **`K = 2, L = 8, M = 2`** (`2, 8, 2`, Valency = `2`).', hi: '**(i) प्रोटॉन** $= \\mathbf{12}$; **(ii) न्यूट्रॉन** $= 24 - 12 = \\mathbf{12}$; **(iii) इलेक्ट्रॉन** $= \\mathbf{12}$; **इलेक्ट्रॉनिक वितरण:** **`K=2, L=8, M=2`** (`2, 8, 2`)!' } },
    { num: 9, q: { en: 'Ex Q9 (`Fig 8.17` 4 Shell Diagrams): Identify `(क)`, `(ख)`, `(ग)`, `(घ)` — state Name, Symbol, Total e⁻, Valence e⁻, Valency, Protons & Atomic Number.', hi: 'अभ्यास 9 (`चित्र 8.17`): चार कक्ष-चित्रों (क) `(2,4)`, (ख) `(2,6)`, (ग) `(2,8,2)`, (घ) `(2,7)` के नाम, प्रतीक, कुल e⁻, संयोजकता e⁻, संयोजकता, प्रोटॉन व Z बताएं।' }, a: { en: '**(क) Carbon (`C`, `2,4`)**: `e⁻=6, valence=4, Valency=4, p⁺=6, Z=6`.\n**(ख) Oxygen (`O`, `2,6`)**: `e⁻=8, valence=6, Valency=2, p⁺=8, Z=8`.\n**(ग) Magnesium (`Mg`, `2,8,2`)**: `e⁻=12, valence=2, Valency=2, p⁺=12, Z=12`.\n**(घ) Fluorine (`F`, `2,7`)**: `e⁻=9, valence=7, Valency=1, p⁺=9, Z=9`!', hi: '**(क) कार्बन (`C`, `2,4`)**: `कुल e⁻=6, सं. e⁻=4, संयोजकता=4, p⁺=6, Z=6`।\n**(ख) ऑक्सीजन (`O`, `2,6`)**: `कुल e⁻=8, सं. e⁻=6, संयोजकता=2, p⁺=8, Z=8`।\n**(ग) मैग्नीशियम (`Mg`, `2,8,2`)**: `कुल e⁻=12, सं. e⁻=2, संयोजकता=2, p⁺=12, Z=12`।\n**(घ) फ्लुओरीन (`F`, `2,7`)**: `कुल e⁻=9, सं. e⁻=7, संयोजकता=1, p⁺=9, Z=9`!' } },
    { num: 10, q: { en: 'Ex Q10: Both Rutherford & Bohr placed electrons in circular motion around the nucleus—why did Rutherford fail to explain stability while Bohr succeeded?', hi: 'अभ्यास 10: रदरफोर्ड और बोर दोनों में इलेक्ट्रॉन परिक्रमा करते हैं, फिर भी रदरफोर्ड मॉडल स्थायित्व समझाने में असफल और बोर सफल क्यों रहा?' }, a: { en: 'Rutherford allowed orbits of **any continuous radius**, where accelerating electrons continuously lose electromagnetic energy and spiral into the nucleus (`collapse`). **Bohr postulated quantized stationary energy levels (`K, L, M, N`)** where revolving electrons **cannot radiate energy**, preventing collapse!', hi: 'रदरफोर्ड में इलेक्ट्रॉन अनियमित कक्षाओं में त्वरित गति से लगातार ऊर्जा क्षय कर नाभिक में गिर जाते; जबकि **बोर** ने अभिगृहीत दिया कि इलेक्ट्रॉन केवल निश्चित **स्थायी ऊर्जा स्तरों (`K, L, M, N`)** में घूमते हैं जहाँ **ऊर्जा ह्रास नहीं होता** — अतः परमाणु स्थायी रहता है!' } },
    { num: 11, q: { en: 'Ex Q11: An atom **`⁷⁰X`** contains **`31 electrons`**. Find the number of **Neutrons** in its nucleus.', hi: 'अभ्यास 11: एक परमाणु **`⁷⁰X`** में **`31` इलेक्ट्रॉन** हैं। इसके नाभिक में कितने न्यूट्रॉन हैं?' }, a: { en: 'Neutral atom `31 e⁻` -> Atomic Number $Z = p^+ = 31$ (`Gallium`). Mass $A = 70 \\implies n^0 = 70 - 31 = \\mathbf{39\\text{ neutrons}}$!', hi: 'उदासीन परमाणु में $Z = p^+ = e^- = 31$ (`गैलियम`); अतः न्यूट्रॉन $n^0 = 70 - 31 = \\mathbf{39}$!' } },
    { num: 12, q: { en: 'Ex Q12: An atom holds **`79 protons`** and Mass Number **`197`**. Find `(i) neutrons` & `(ii) electrons`.', hi: 'अभ्यास 12: एक परमाणु में `79` प्रोटॉन और द्रव्यमान संख्या `197` है। इसमें `(i) न्यूट्रॉन` व `(ii) इलेक्ट्रॉन` बताएं।' }, a: { en: '**(i) Neutrons** $= 197 - 79 = \\mathbf{118}$; **(ii) Electrons** $= p^+ = \\mathbf{79}$ (`Gold ¹⁹⁷₇₉Au`!).', hi: '**(i) न्यूट्रॉन** $= 197 - 79 = \\mathbf{118}$; **(ii) इलेक्ट्रॉन** $= \\mathbf{79}$ (`स्वर्ण ¹⁹⁷₇₉Au`)!' } },
    { num: 13, q: { en: 'Ex Q13 (`Complete NCERT Table 8.5`): 5 incomplete rows spanning `(Z=5, n=6)`, `(A=14, e=7, Nitrogen)`, `(A=24, p=12)`, `(Z=15, n=16)`, `(A=1, n=0)`.', hi: 'अभ्यास 13 (`NCERT तालिका 8.5 पूर्ति`): पाँच अधूरी पंक्तियों के रिक्त मान एवं तत्व नाम लिखें।' }, a: { en: '1. **`Z=5, A=11, n=6, p=5, e=5` -> Boron (`B`)**\n2. **`Z=7, A=14, n=7, p=7, e=7` -> Nitrogen (`N`)**\n3. **`Z=12, A=24, n=12, p=12, e=12` -> Magnesium (`Mg`)**\n4. **`Z=15, A=31, n=16, p=15, e=15` -> Phosphorus (`P`)**\n5. **`Z=1, A=1, n=0, p=1, e=1` -> Hydrogen / Protium (`H`)**!', hi: '1. `Z=5, A=11, n=6, p=5, e=5` $\\to$ **बोरॉन (`B`)**\n2. `Z=7, A=14, n=7, p=7, e=7` $\\to$ **नाइट्रोजन (`N`)**\n3. `Z=12, A=24, n=12, p=12, e=12` $\\to$ **मैग्नीशियम (`Mg`)**\n4. `Z=15, A=31, n=16, p=15, e=15` $\\to$ **फॉस्फोरस (`P`)**\n5. `Z=1, A=1, n=0, p=1, e=1` $\\to$ **हाइड्रोजन (`H`, 0 न्यूट्रॉन)**!' } },
    { num: 14, q: { en: 'Ex Q14: Element X has Mass Number `35` & `18 neutrons`. Find `(i) e⁻ & p⁺`, `(ii) Z`, `(iii) identity`, `(iv) configuration`, `(v) valence e⁻`, `(vi) new Mass Number after adding 2 neutrons`, `(vii) relation between original X & new atom`.', hi: 'अभ्यास 14: तत्व X की द्रव्यमान संख्या `35` व न्यूट्रॉन `18` हैं: `(i) e⁻ व p⁺`, `(ii) Z`, `(iii) पहचान`, `(iv) विन्यास`, `(v) सं. e⁻`, `(vi) 2 न्यूट्रॉन जोड़ने पर नया A`, व `(vii) दोनों में संबंध` बताएं।' }, a: { en: '(i) $p^+ = 35 - 18 = \\mathbf{17}$, $e^- = \\mathbf{17}$; (ii) $Z = \\mathbf{17}$; (iii) **Chlorine (`Cl`)**; (iv) **`2, 8, 7`**; (v) **`7`** valence e⁻ (`valency 1`); (vi) Adding `2 n⁰` gives $A = 35 + 2 = \\mathbf{37}$; (vii) **`³⁵₁₇Cl` & `³⁷₁₇Cl` are ISOTOPES (`समस्थानिक`)**!', hi: '(i) $p^+ = 35 - 18 = \\mathbf{17}, e^- = \\mathbf{17}$; (ii) **$Z = 17$**; (iii) **क्लोरीन (`Cl`)**; (iv) **`2, 8, 7`**; (v) **`7` सं. e⁻**; (vi) नया $A = 35 + 2 = \\mathbf{37}$; (vii) नया व पुराना परमाणु परस्पर **समस्थानिक (`Isotopes`: `³⁵Cl` व `³⁷Cl`)** हैं!' } },
    { num: 15, q: { en: 'Ex Q15 (`HOTS Thought Experiment`): An atom has `12p⁺` & `12n⁰`. Replace all `12` electrons with hypothetical particles of EQUAL charge (`−1`) yet **`500×` heavier** than electrons! Effect on `(i) Atomic Number`, `(ii) Atomic Mass`, `(iii) Mass Number`, `(iv) Net Charge`?', hi: 'अभ्यास 15 (`उच्च स्तरीय चिंतन`): `12p⁺, 12n⁰` वाले परमाणु के सभी `12` इलेक्ट्रॉनों को समान आवेश (`−1`) किंतु **`500 गुना` भारी काल्पनिक कणों** से बदल देने पर `(i) परमाणु क्रमांक`, `(ii) परमाणु द्रव्यमान`, `(iii) द्रव्यमान संख्या`, `(iv) समग्र आवेश` पर क्या प्रभाव पड़ेगा?' }, a: { en: '**(i) Atomic Number (`Z=12`)**: **Unchanged** (depends strictly on protons!).\n**(ii) Actual Atomic Mass**: **INCREASES significantly!** (`12` particles × `500×` ≈ mass of `~3.27 protons`, adding ~`+3.27 u` -> ~`27.27 u`!).\n**(iii) Mass Number (`A = p⁺ + n⁰ = 24`)**: **Unchanged** by definition (counts ONLY nuclear protons + neutrons!).\n**(iv) Overall Net Charge (`0`)**: **Unchanged (`Neutral`)**, since charge of new particles remains identical (`−1`)!', hi: '**(i) परमाणु क्रमांक:** **अपरिवर्तित** (`12` प्रोटॉन समान हैं)।\n**(ii) वास्तविक परमाणु द्रव्यमान:** **बढ़ जाएगा** (500× भारी बाहरी कण अब नगण्य नहीं रहे; कुल द्रव्यमान ~`3.27 u` बढ़ेगा)! *(note: यदि पाठ्यपुस्तक परिभाषा `p+n` देखें तो केवल **द्रव्यमान संख्या A = 24** अपरिवर्तित रहती है)*।\n**(iii) द्रव्यमान संख्या (`A = 24`):** **अपरिवर्तित** (क्योंकि $A$ केवल नाभिकीय `p⁺ + n⁰` का योग है)।\n**(iv) समग्र आवेश (`0`):** **अपरिवर्तित (`उदासीन`)**, क्योंकि प्रतिस्थापित कणों का आवेश इलेक्ट्रॉन के बिल्कुल बराबर (`−1`) है!' } },
  ],

  flashcards: [
    { front: { en: 'Ratio of Atom Diameter to Nucleus Diameter (`NCERT p.144`)?', hi: 'परमाणु व्यास बनाम नाभिक व्यास का आकार अनुपात?' }, back: { en: '10⁻¹⁰ m vs 10⁻¹⁵ m -> Atom is 10⁵ (1 Lakh×) larger than Nucleus!', hi: '10⁻¹⁰ m बनाम 10⁻¹⁵ m → नाभिक 10⁵ (1 लाख गुना) छोटा!' } },
    { front: { en: 'Charge on 1 Electron in Coulombs & discoverer?', hi: '1 इलेक्ट्रॉन पर कूलॉम आवेश एवं खोजकर्ता?' }, back: { en: '−1.602 × 10⁻¹⁹ C • J. J. Thomson (1897 Cathode Tube)', hi: '−1.602 × 10⁻¹⁹ C • जे. जे. टॉमसन (1897)' } },
    { front: { en: 'What IS an α-particle (`Gold Foil beam`)?', hi: 'स्वर्ण-पर्णिका प्रयोग में α-कण वास्तव में क्या होता है?' }, back: { en: 'Doubly charged Helium Nucleus (⁴₂He²⁺ = 2 protons + 2 neutrons)', hi: 'हीलियम परमाणु का नाभिक (⁴₂He²⁺ = 2 प्रोटॉन + 2 न्यूट्रॉन)' } },
    { front: { en: 'Discoverer of Neutron (1932) & element WITHOUT neutrons?', hi: 'न्यूट्रॉन के खोजकर्ता (1932) व बिना न्यूट्रॉन वाला तत्व?' }, back: { en: 'James Chadwick (1932) • Absent ONLY in Protium Hydrogen (¹₁H)!', hi: 'जेम्स चैडविक (1932) • केवल प्रोटियम हाइड्रोजन (¹₁H) में 0 न्यूट्रॉन!' } },
    { front: { en: 'IUPAC Symbols of Tungsten, Mercury, Iron, Potassium?', hi: 'टंगस्टन, पारा, लोहा व पोटैशियम के IUPAC प्रतीक?' }, back: { en: 'W (Wolfram), Hg (Hydrargyros), Fe (Ferrum), K (Kalium)!', hi: 'W (टंगस्टन), Hg (मर्करी), Fe (आयरन), K (पोटैशियम)!' } },
    { front: { en: 'Bohr–Bury Max Electrons in K, L, M, N & Outermost Limit?', hi: 'K, L, M, N कोश में अधिकतम इलेक्ट्रॉन (2n²) व बाह्यतम सीमा?' }, back: { en: 'K=2, L=8, M=18, N=32 • Outermost Shell NEVER exceeds 8!', hi: 'K=2, L=8, M=18, N=32 • बाह्यतम कोश में अधिकतम 8!' } },
    { front: { en: 'Weighted Atomic Mass of Chlorine (`³⁵Cl 75%` + `³⁷Cl 25%`)?', hi: 'क्लोरीन (³⁵Cl 75% + ³⁷Cl 25%) का भारित औसत द्रव्यमान?' }, back: { en: '35.5 u (3:1 natural abundance ratio — NOT 36 u!)', hi: '35.5 u (3:1 प्राकृतिक प्रचुरता के कारण — 36 u नहीं!)' } },
    { front: { en: 'Isotopes for Cancer, Goitre, Nuclear Fuel & Fossils?', hi: 'कैंसर, घेंघा रोग, परमाणु ईंधन व जीवाश्म आयु समस्थानिक?' }, back: { en: 'Co-60 (Cancer) | I-131 (Goitre) | U-235 (Fuel) | C-14 (Fossils)!', hi: 'Co-60 (कैंसर) | I-131 (घेंघा) | U-235 (ईंधन) | C-14 (जीवाश्म)!' } },
    { front: { en: 'Classic Isobars Triad (`NCERT Sec 8.9.2`)?', hi: 'समभारिक (Isobars) का मानक NCERT उदाहरण त्रिक?' }, back: { en: '⁴⁰₁₈Ar, ⁴⁰₁₉K, ⁴⁰₂₀Ca (Different Z = 18, 19, 20; SAME A = 40!)', hi: '⁴⁰₁₈Ar, ⁴⁰₁₉K, ⁴⁰₂₀Ca (भिन्न Z, किंतु द्रव्यमान संख्या A = 40 समान!)' } },
    { front: { en: 'Do Isotopes share Chemical or Physical Properties?', hi: 'समस्थानिकों के रासायनिक गुण समान रहते हैं या भौतिक?' }, back: { en: 'SAME Chemical properties (same Z & e⁻); DIFFERENT Physical (BP/MP)!', hi: 'रासायनिक गुण समान (Z व e⁻ समान), भौतिक गुण (क्वथनांक/घनत्व) भिन्न!' } },
  ],

  pyqBank: [
    {
      id: 1,
      examTag: 'RRB ALP 2025 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Subatomic Particles',
      question: {
        en: 'Which of the following correctly describes the properties of a proton?',
        hi: 'निम्नलिखित में से कौन-सा, प्रोटॉन के गुणों का सही वर्णन करता है?',
      },
      options: {
        en: [
          'It has a positive charge and a mass equal to an electron.',
          'It has no charge and is present in the nucleus.',
          'It is positively charged and has a mass approximately 2000 times that of an electron.',
          'It is negatively charged and located inside the nucleus.',
        ],
        hi: [
          'इसका धनात्मक आवेश होता है और इसका द्रव्यमान, इलेक्ट्रॉन के बराबर होता है।',
          'इसका कोई आवेश नहीं होता है और यह नाभिक में उपस्थित होता है।',
          'यह धनात्मक रूप से आवेशित होता है और इसका द्रव्यमान, इलेक्ट्रॉन के द्रव्यमान का लगभग 2000 गुना होता है।',
          'यह ऋणात्मक रूप से आवेशित होता है और नाभिक के अंदर स्थित होता है।',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Protons inside the nucleus hold `+1` positive charge and ~`1836–2000×` the mass of an electron (NCERT Sec 8.2.2c).',
        hi: 'प्रोटॉन नाभिक में स्थित धनावेशित कण (`+1`) हैं जिनका द्रव्यमान इलेक्ट्रॉन की तुलना में लगभग 2000 गुना होता है।',
      },
    },
    {
      id: 2,
      examTag: 'RRB ALP 2025 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Valency',
      question: {
        en: 'Which statement best describes the valency of an element?',
        hi: 'निम्नलिखित में से कौन-सा कथन किसी तत्व की संयोजकता का सर्वोत्तम वर्णन करता है?',
      },
      options: {
        en: [
          'It is the total number of nucleons in the nucleus',
          'It is the total number of protons in the nucleus of an atom',
          'It is the difference between the number of neutrons and protons in an atom',
          'It is the combining capacity based on electrons lost, gained, or shared',
        ],
        hi: [
          'यह नाभिक में न्यूक्लिऑन की कु ल संख्या होती है',
          'यह परमाणु के नाभिक में प्रोटॉन की कु ल संख्या होती है',
          'यह परमाणु में न्यूट्रॉन और प्रोटॉन की संख्या के बीच का अंतर होता है',
          'यह त्यागे गए, ग्रहण किए गए या साझा किए गए इलेक्ट्रॉनों पर आधारित संयोजन क्षमता होती है',
        ],
      },
      correctIndex: 3,
      solution: {
        en: 'Direct NCERT Sec 8.8 definition: Valency equals combining capacity based on electrons lost, gained, or shared to reach an octet.',
        hi: 'NCERT Sec 8.8 परिभाषा: अष्टक पूर्ण करने हेतु त्यागे, ग्रहण या साझा किए गए इलेक्ट्रॉनों पर आधारित संयोजन क्षमता संयोजकता है।',
      },
    },
    {
      id: 3,
      examTag: 'RRB ALP 2025 Shift 7',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Rutherford Model',
      question: {
        en: 'Which observation from Rutherford’s experiment led to the conclusion that the atom is mostly empty space?',
        hi: 'रदरफोर्ड के प्रयोग के किस प्रेक्षण से यह निष्कर्ष प्राप्त हुआ कि परमाणु में अधिकांशतः रिक्त स्थान होता है?',
      },
      options: {
        en: [
          'Electrons emitted light while rotating',
          'A few alpha particles bounced back from the foil',
          'Most alpha particles passed straight through the foil',
          'Alpha particles were absorbed completely by the gold foil',
        ],
        hi: [
          'इलेक्ट्रॉनों ने घूर्णन करते हुए प्रकाश उत्सर्जित किया',
          'कु छ अल्फा कण पर्णिका से टकराकर पुन: लौट आए',
          'अधिकांश अल्फा कण पर्णिका से सीधे निकल गए',
          'अल्फा कणों को स्वर्ण पर्णिका ने पूर्णतः अवशोषित कर लिया',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Since most α-particles passed through undeflected, Rutherford concluded most space inside the atom is empty (NCERT Sec 8.2.2a).',
        hi: 'अधिकांश अल्फा कण बिना विक्षेपित हुए सीधे आर-पार निकल गए — जिससे सिद्ध हुआ कि परमाणु का अधिकांश भाग रिक्त है।',
      },
    },
    {
      id: 4,
      examTag: 'RRB Group D 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Isotopes',
      question: {
        en: 'Which property of isotopes remains unchanged?',
        hi: 'समस्थानिकों का कौन - सा गुणधर्म अपरिवर्तित रहता है ?',
      },
      options: {
        en: ['Atomic mass', 'Nuclear stability', 'Physical properties', 'Chemical properties'],
        hi: ['परमाणु द्रव्यमान', 'नाभिकीय स्थायित्व', 'भौतिक गुणधर्म', 'रासायनिक गुणधर्म'],
      },
      correctIndex: 3,
      solution: {
        en: 'Isotopes share identical atomic number (same electrons & valency), so Chemical Properties stay unchanged (NCERT p.154)!',
        hi: 'इलेक्ट्रॉनों व संयोजकता के समान होने से समस्थानिकों के रासायनिक गुणधर्म अपरिवर्तित रहते हैं (पृष्ठ 154)।',
      },
    },
    {
      id: 5,
      examTag: 'RRB Group D 2025 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Bohr–Bury Rules',
      question: {
        en: 'According to the Bohr–Bury rules, what is the maximum number of electrons that can be accommodated in the L shell of an atom?',
        hi: 'बोर – बरी नियमों के अनुसार , किसी परमाणु के L कोश में अधिकतम कितने इलेक्ट्रॉनों को समायोजित किया जा सकता है ?',
      },
      options: {
        en: ['Two electrons only', 'Four electrons only', 'Eight electrons only', 'Sixteen electrons only'],
        hi: ['केवल दो इलेक्ट्रॉन', 'केवल चार इलेक्ट्रॉन', 'केवल आठ इलेक्ट्रॉन', 'केवल सोलह इलेक्ट्रॉन'],
      },
      correctIndex: 2,
      solution: {
        en: 'For L shell (`n = 2`), $2n^2 = 2 \\times 2^2 = 8$ electrons maximum (NCERT Sec 8.7).',
        hi: 'L कोश (`n = 2`) हेतु $2n^2 = 2 \\times 2^2 = 8$ इलेक्ट्रॉन अधिकतम समायोजित होते हैं।',
      },
    },
    {
      id: 6,
      examTag: 'RRB Group D 2025 Shift 15',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Mass Number',
      question: {
        en: "If an atom has an atomic number of 15 and a mass number of 31 according to Bohr's model, what is the number of neutrons present?",
        hi: 'यदि बोहर के मॉडल के अनुसार किसी परमाणु की परमाणु संख्या 15 और द्रव्यमान संख्या 31 है , तो उसमें उपस्थित न्यूट्रॉनों की संख्या कितनी है ?',
      },
      options: {
        en: ['The number of neutrons is 30.', 'The number of neutrons is 16.', 'The number of neutrons is 31.', 'The number of neutrons is 15.'],
        hi: ['न्यूट्रॉनों की संख्या 30 है', 'न्यूट्रॉनों की संख्या 16 है', 'न्यूट्रॉनों की संख्या 31 है', 'न्यूट्रॉनों की संख्या 15 है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Neutrons $n^0 = A - Z = 31 - 15 = 16$ (Phosphorus `³¹₁₅P`, NCERT Table 8.4).',
        hi: 'न्यूट्रॉन संख्या $= A - Z = 31 - 15 = 16$ (`फॉस्फोरस`, तालिका 8.4)।',
      },
    },
    {
      id: 7,
      examTag: 'RRB Group D 2025 Shift 17',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Isobars',
      question: {
        en: 'Which of the following properties do isobars have in common?',
        hi: 'निम्नलिखित में से कौन - सा गुणधर्म समभारिकों में समान होता है ?',
      },
      options: {
        en: ['Number of protons', 'Mass number', 'Atomic number', 'Physical nature'],
        hi: ['प्रोटॉनों की संख्या', 'द्रव्यमान संख्या', 'परमाणु संख्या', 'भौतिक प्रकृ ति'],
      },
      correctIndex: 1,
      solution: {
        en: 'Isobars belong to different elements (`different Z`), sharing ONLY the same Mass Number $A$ (e.g., `⁴⁰Ar, ⁴⁰K, ⁴⁰Ca`).',
        hi: 'समभारिक भिन्न तत्वों के परमाणु होते हैं जिनमें केवल द्रव्यमान संख्या ($A$) समान होती है (जैसे `⁴⁰Ar, ⁴⁰K, ⁴⁰Ca`)।',
      },
    },
    {
      id: 8,
      examTag: 'RRB Group D 2025 Shift 17',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Thomson Model',
      question: {
        en: 'Which of the following best describes Thomson’s model of an atom?',
        hi: 'निम्नलिखित में से कौन - सा कथन थॉमसन के परमाणु मॉडल का सबसे सटीक वर्णन करता है ?',
      },
      options: {
        en: [
          'An atom consists of a positively charged sphere with electrons embedded in it.',
          'Electrons revolve around the nucleus in fixed orbits.',
          'Electrons are randomly placed outside the atom.',
          'An atom is a dense positively charged nucleus with electrons outside.',
        ],
        hi: [
          'परमाणु एक धनावेशित गोले से बना होता है जिसमें इलेक्ट्रॉन अंतर्निहित होते हैं।',
          'इलेक्ट्रॉन नाभिक के चारों ओर निश्चित कक्षाओं में घूमते हैं।',
          'इलेक्ट्रॉन परमाणु के बाहर अनियमित रूप में पाये जाते हैं।',
          'परमाणु एक सघन धनावेशित नाभिक है जिसके बाहर इलेक्ट्रॉन होते हैं।',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Thomson Plum Pudding model describes an atom as a uniformly positively charged sphere with embedded negative electrons.',
        hi: 'टॉमसन के प्लम पुडिंग मॉडल अनुसार परमाणु एक धनावेशित गोला है जिसमें इलेक्ट्रॉन तरबूज के बीज जैसे धँसे रहते हैं।',
      },
    },
    {
      id: 9,
      examTag: 'RRB Group D 2025 Shift 19',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Rutherford Model',
      question: {
        en: 'According to Rutherford’s model, positive charge is:',
        hi: 'रदरफोर्ड के मॉडल के अनुसार , धनात्मक आवेश __________ ।',
      },
      options: {
        en: ['Found in outer shells', 'Spread uniformly in the atom', 'Present with electrons', 'Concentrated at the centre'],
        hi: ['बाह्य कोशों में पाया जाता है', 'परमाणु में एकसमान रूप से फै ला होता है', 'इलेक्ट्रॉनों के साथ उपस्थित होता है', 'केंद्र में संके द्रित होता है'],
      },
      correctIndex: 3,
      solution: {
        en: 'Rutherford disproved uniform spreading, locating all positive charge in the tiny central Nucleus (NCERT Sec 8.2.2a).',
        hi: 'रदरफोर्ड ने सिद्ध किया कि धनावेश पूरे परमाणु में न फैलकर अति सूक्ष्म केंद्रीय नाभिक में संकेंद्रित होता है।',
      },
    },
    {
      id: 10,
      examTag: 'RRB Group D 2025 Shift 19',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Bohr–Bury Formula',
      question: {
        en: 'The maximum number of electrons present in a shell is given by the formula: (here, ‘n’ is the orbit number)',
        hi: 'किसी कोश में उपस्थित इलेक्ट्रॉनों की अधिकतम संख्या किस सूत्र द्वारा दी जाती है ? ( यहाँ , ‘n’ कक्षक संख्या है )',
      },
      options: {
        en: ['2n2', '2n-2', '2n', '2n3'],
        hi: ['2n2', '2n-2', '2n', '2n3'],
      },
      correctIndex: 0,
      solution: {
        en: 'Bohr–Bury maximum shell capacity formula is `$2n^2$` (`written 2n2 in CBT paper`, giving `2, 8, 18, 32`).',
        hi: 'बोर–बरी नियम का मानक सूत्र `$2n^2$` (`2, 8, 18, 32`) है।',
      },
    },
    {
      id: 11,
      examTag: 'RRB Group D 2025 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Atomic Number & Neutrality',
      question: {
        en: 'An element has an atomic number of 17. Based on the arrangement of charged particles in its atom, which statement best explains the number of electrons in its neutral state?',
        hi: 'एक तत्व की परमाणु संख्या 17 है। इसके परमाणु में आवेशित कणों के विन्यास के आधार पर , कौन - सा कथन उसकी उदासीन अवस्था में इलेक्ट्रॉनों की संख्या को सर्वोत्तम रूप से स्पष्ट करता है ?',
      },
      options: {
        en: [
          'It contains 8 electrons in the innermost shell alone.',
          'It has more electrons than protons due to its atomic mass.',
          'It contains 17 electrons to match the 17 neutrons present.',
          'It has 17 electrons to balance the 17 protons present.',
        ],
        hi: [
          'इसमें अके ले अंतरतम कोश में 8 इलेक्ट्रॉन होते हैं।',
          'इसके परमाणु द्रव्यमान के कारण इसमें प्रोटॉनों की तुलना में अधिक इलेक्ट्रॉन होते हैं।',
          'इसमें उपस्थित 17 न्यूट्रॉनों से सुमेल के लिए 17 इलेक्ट्रॉन होते हैं।',
          'इसमें उपस्थित 17 प्रोटॉनों को संतुलित करने के लिए 17 इलेक्ट्रॉन होते हैं।',
        ],
      },
      correctIndex: 3,
      solution: {
        en: 'Atomic number `17` means `17 protons` (`+17`); electrical neutrality requires `17 electrons` (`−17`) balancing them (`NCERT Sec 8.5`).',
        hi: 'परमाणु उदासीन होने से `17` प्रोटॉनों के धनावेश को संतुलित करने हेतु ठीक `17` इलेक्ट्रॉन होते हैं (न्यूट्रॉन `18` होते हैं)।',
      },
    },
    {
      id: 12,
      examTag: 'RRB Group D 2025 Shift 22',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Isotopes',
      question: {
        en: 'Which of the following statements is true about isotopes?',
        hi: 'समस्थानिकों के संबंध में निम्नलिखित में से कौन - सा कथन सत्य है ?',
      },
      options: {
        en: [
          'Isotopes have the same number of neutrons',
          'Isotopes have different atomic numbers but same mass number',
          'Isotopes have the same number of protons but different number of neutrons',
          'Isotopes are different elements with same atomic number',
        ],
        hi: [
          'समस्थानिकों में न्यूट्रॉनों की संख्या समान होती है।',
          'समस्थानिकों के परमाणु क्रमांक भिन्न - भिन्न होते हैं , लेकिन द्रव्यमान संख्या समान होती है।',
          'समस्थानिकों में प्रोटॉनों की संख्या समान होती है लेकिन न्यूट्रॉनों की संख्या भिन्न - भिन्न होती है।',
          'समस्थानिकों में समान परमाणु क्रमांक वाले भिन्न - भिन्न तत्व होते हैं',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Isotopes belong to the same element (`same Z = protons`), differing solely in Neutron counts and thus Mass Numbers (`NCERT Sec 8.9.1`).',
        hi: 'समस्थानिक एक ही तत्व के परमाणु हैं जिनमें प्रोटॉन संख्या (`Z`) समान परंतु न्यूट्रॉन संख्याएँ (`n⁰`) भिन्न होती हैं।',
      },
    },
    {
      id: 13,
      examTag: 'RRB Group D 2025 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Hydrogen Isotopes',
      question: {
        en: 'Which of the following statements is CORRECT?',
        hi: 'निम्नलिखित में से कौन - सा कथन सही है ?',
      },
      options: {
        en: [
          'Atomic number is equal to number of nucleons.',
          'The two isotopes of carbon have same mass number.',
          'For an element, mass number is double of atomic number.',
          'The three isotopes of hydrogen namely protium, deuterium and tritium have same number of protons.',
        ],
        hi: [
          'परमाणु संख्या, न्यूक्लिऑन की संख्या के बराबर होती है।',
          'कार्बन के दो समस्थानिकों की द्रव्यमान संख्या समान होती है।',
          'किसी तत्व के लिए, द्रव्यमान संख्या, परमाणु संख्या की दुगुनी होती है।',
          'हाइड्रोजन के तीनों समस्थानिकों - प्रोटियम, ड्यूटेरियम और ट्राइटियम में प्रोटॉनों की संख्या समान होती है।',
        ],
      },
      correctIndex: 3,
      solution: {
        en: 'Protium (`¹₁H`), Deuterium (`²₁H`), and Tritium (`³₁H`) all have `Z = 1` proton, differing solely in neutrons (`0, 1, 2`).',
        hi: 'हाइड्रोजन के तीनों समस्थानिकों (`¹₁H, ²₁H, ³₁H`) में प्रोटॉनों की संख्या (`1`) समान रहती है, केवल न्यूट्रॉन (`0, 1, 2`) बदलते हैं।',
      },
    },
    {
      id: 14,
      examTag: 'RRB Group D 2025 Shift 27',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Mass Number',
      question: {
        en: 'The mass number of an atom represents the total count of which particles present within its nucleus?',
        hi: 'किसी परमाणु की द्रव्यमान संख्या उसके नाभिक में उपस्थित किन कणों की कु ल संख्या को दर्शाती है ?',
      },
      options: {
        en: ['electrons and neutrons', 'protons and electrons', 'protons only', 'protons and neutrons'],
        hi: ['इलेक्ट्रॉन और न्यूट्रॉन', 'प्रोटॉन और इलेक्ट्रॉन', 'केवल प्रोटॉन', 'प्रोटॉन और न्यूट्रॉन'],
      },
      correctIndex: 3,
      solution: {
        en: 'Mass Number $A = \\text{Protons} + \\text{Neutrons}$ (collectively termed Nucleons inside the nucleus, NCERT Sec 8.6).',
        hi: 'नाभिक के भीतर स्थित प्रोटॉन और न्यूट्रॉन (न्यूक्लिऑन) की कुल संख्या द्रव्यमान संख्या कहलाती है।',
      },
    },
    {
      id: 15,
      examTag: 'RRB Group D 2025 Shift 29',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Rutherford Model',
      question: {
        en: 'In Rutherford’s α-particle scattering experiment, the conclusion that most of the atom is empty space was drawn because:',
        hi: 'रदरफोर्ड के α- कण प्रकीर्णन प्रयोग में , यह निष्कर्ष निकाला गया कि परमाणु का अधिकांश भाग रिक्त अंतराल है , क्योंकि _________ ।',
      },
      options: {
        en: [
          'Electrons in atoms were electrically neutral',
          'Gold atoms were chemically unstable',
          'Only a few α-particles showed deflection',
          'Most α-particles were absorbed by the foil',
        ],
        hi: [
          'परमाणुओं में इलेक्ट्रॉन विद्युत रूप से उदासीन थे',
          'सोने के परमाणु रासायनिक रूप से अस्थिर थे',
          'केवल कु छ ही α- कणों में विक्षेपण देखा गया था',
          'अधिकांश α- कण पन्नी द्वारा अवशोषित कर लिए गए थे',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Only very few α-particles deflected while almost all zipped cleanly straight through -> proof of vast empty atomic space.',
        hi: 'केवल कुछ ही α-कणों में विक्षेपण हुआ तथा अधिकांश सीधे निकल गए — अर्थात अंदर अधिकांश भाग रिक्त है।',
      },
    },
    {
      id: 16,
      examTag: 'RRB Group D 2025 Shift 36',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Bohr Orbits',
      question: {
        en: 'According to Bohr’s Atomic Model, the orbit closest to the nucleus is called:',
        hi: 'बोहर के परमाणु मॉडल (Bohr’s Atomic Model) के अनुसार , नाभिक के सबसे निकट की कक्षा को क्या कहा जाता है ?',
      },
      options: {
        en: ['K-shell', 'L-shell', 'N-shell', 'M-shell'],
        hi: ['K- कोश', 'L- कोश', 'N- कोश', 'M- कोश'],
      },
      correctIndex: 0,
      solution: {
        en: 'Nearest orbit (`n = 1`, lowest energy level) is the `K-shell`, followed outward by `L, M, N` (`NCERT Fig 8.7`).',
        hi: 'नाभिक के सबसे निकटतम व न्यूनतम ऊर्जा स्तर वाली कक्षा **`K-कोश` (`n=1`)** कहलाती है।',
      },
    },
    {
      id: 17,
      examTag: 'RRB Group D 2025 Shift 42',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Subatomic Discoverers',
      question: {
        en: 'The electron was discovered by:',
        hi: 'इलेक्ट्रॉन की खोज किसने की थी ?',
      },
      options: {
        en: ['Rutherford', 'Dalton', 'J. J. Thomson', 'Neils Bohr'],
        hi: ['रदरफोर्ड (Rutherford)', 'डाल्टन (Dalton)', 'जे . जे . थॉमसन (J. J. Thomson)', 'नील्स बोर (Neils Bohr)'],
      },
      correctIndex: 2,
      solution: {
        en: 'Sir J. J. Thomson discovered the electron in `1897` via cathode-ray discharge tube studies (`NCERT Sec 8.2`).',
        hi: 'सन् 1897 में कैथोड किरण नलिका प्रयोगों द्वारा **जे. जे. थॉमसन** ने इलेक्ट्रॉन की खोज की थी।',
      },
    },
    {
      id: 18,
      examTag: 'RRB Group D 2025 Shift 42',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Z & A Numerals',
      question: {
        en: 'An atom of element X has a mass number of 37 and contains 20 neutrons. What is the atomic number of X, and which element does it represent?',
        hi: 'तत्व X के एक परमाणु की द्रव्यमान संख्या 37 है और उसमें 20 न्यूट्रॉन हैं। X की परमाणु संख्या क्या है और यह किस तत्व को निरूपित करता है ?',
      },
      options: {
        en: ['19, Potassium', '17, Chlorine', '20, Calcium', '18, Argon'],
        hi: ['19, पोटैशियम', '17, क्लोरीन', '20, कै ल्शियम', '18, आर्गन'],
      },
      correctIndex: 1,
      solution: {
        en: 'Atomic number $Z = A - n^0 = 37 - 20 = 17$ -> **Chlorine (`³⁷₁₇Cl` isotope, NCERT Ex Q14 vii)**!',
        hi: '$Z = 37 - 20 = 17$ $\\implies$ तत्व X **क्लोरीन (`³⁷₁₇Cl` समस्थानिक)** है!',
      },
    },
    {
      id: 19,
      examTag: 'RRB Group D 2025 Shift 45',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Electronic Configuration',
      question: {
        en: 'Which arrangement correctly shows the distribution of electrons in the orbits of the element sodium (atomic number 11)?',
        hi: 'निम्नलिखित में से कौन - सा विन्यास (arrangement), सोडियम ( परमाणु क्रमांक 11) तत्व की कक्षाओं में इलेक्ट्रॉनों के वितरण को सर्वोत्तम रूप से दर्शाता है ?',
      },
      options: {
        en: ['1,8,2', '2,8,1', '2,9', '3,9'],
        hi: ['1,8,2', '2,8,1', '2,9', '3,9'],
      },
      correctIndex: 1,
      solution: {
        en: 'Sodium (`Z=11`) fills `K=2, L=8, M=1` (`2, 8, 1`, NEVER `2, 9` because `L` capacity maxes at `8` — NCERT Table 8.4).',
        hi: 'L कोश में अधिकतम `8` ही आ सकते हैं, अतः सोडियम (`11`) का सही विन्यास **`2, 8, 1`** है (तालिका 8.4)।',
      },
    },
    {
      id: 20,
      examTag: 'RRB NTPC UG 2025 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Rutherford Nucleus',
      question: {
        en: 'Who is credited with the discovery of the nucleus through the gold foil experiment?',
        hi: 'स्वर्ण पत्रक प्रयोग के माध्यम से, नाभिक की खोज करने का श्रेय किसे दिया जाता है?',
      },
      options: {
        en: ['Bohr', 'Ernest Rutherford', 'John Dalton', 'Lavoisier'],
        hi: ['बोहर (Bohr)', 'अर्नेस्ट रदरफोर्ड (Ernest Rutherford)', 'जॉन डाल्टन (John Dalton)', 'लेवोजियर (Lavoisier)'],
      },
      correctIndex: 1,
      solution: {
        en: 'Ernest Rutherford (`1911` gold foil α-scattering experiment directed with Geiger & Marsden) discovered the atomic nucleus.',
        hi: 'अर्नेस्ट रदरफोर्ड (`1911` स्वर्ण-पर्णिका प्रयोग) को नाभिक की खोज का श्रेय प्राप्त है।',
      },
    },
    {
      id: 21,
      examTag: 'RRB Tech Gr-III 2024 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Mass Number',
      question: {
        en: 'What is the mass number of an atom having 13 protons and 14 neutrons?',
        hi: '13 प्रोटॉन और 14 न्यूट्रॉन वाले किसी परमाणु की द्रव्यमान संख्या क्या है?',
      },
      options: {
        en: ['27 u', '14 u', '13 u', '1 u'],
        hi: ['27 u', '14 u', '13 u', '1 u'],
      },
      correctIndex: 0,
      solution: {
        en: 'Mass Number $A = p^+ + n^0 = 13 + 14 = 27\\text{ u}$ (`Aluminium ²⁷₁₃Al`, NCERT Table 8.4).',
        hi: 'द्रव्यमान संख्या $A = 13 + 14 = 27\\text{ u}$ (`ऐलुमिनियम`)।',
      },
    },
    {
      id: 22,
      examTag: 'RRB Tech Gr-III 2024 Shift 4',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Bohr Orbits',
      question: {
        en: "According to the Bohr's model, what is the maximum number of electrons for the second energy level?",
        hi: 'बोर मॉडल के अनुसार, द्वितीय ऊर्जा स्तर के लिए इलेक्ट्रॉनों की अधिकतम संख्या कितनी होती है?',
      },
      options: {
        en: ['6', '4', '8', '2'],
        hi: ['6', '4', '8', '2'],
      },
      correctIndex: 2,
      solution: {
        en: 'Second energy level (`L shell, n = 2`) holds maximum $2n^2 = 2 \\times 2^2 = 8$ electrons (`NCERT Sec 8.7`).',
        hi: 'द्वितीय ऊर्जा स्तर (`L-कोश, n=2`) में अधिकतम $2 \\times 2^2 = 8$ इलेक्ट्रॉन होते हैं।',
      },
    },
    {
      id: 23,
      examTag: 'RRB Tech Gr-III 2024 Shift 8',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Rutherford Experiment',
      question: {
        en: "In order to put up Rutherford's model, what type of metal foil did the scientist use?",
        hi: 'रदरफोर्ड का मॉडल स्थापित करने के लिए वैज्ञानिक ने किस प्रकार की धातु की पन्नी का उपयोग किया था?',
      },
      options: {
        en: ['Palladium', 'Silver', 'Gold', 'Platinum'],
        hi: ['पैलेडियम (Palladium)', 'रजत (Silver)', 'सोना (Gold)', 'प्लैटिनम (Platinum)'],
      },
      correctIndex: 2,
      solution: {
        en: 'Gold (`Au`) is the most malleable metal, letting Geiger & Marsden prepare an ultra-thin leaf (`NCERT Sec 8.2.2`).',
        hi: 'सोना (Gold) सर्वाधिक आघातवर्धनीय होने के कारण अति सूक्ष्म पन्नी बनाने हेतु उपयुक्त था।',
      },
    },
    {
      id: 24,
      examTag: 'RRB Tech Gr-III 2024 Shift 8',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Chem Ch 8: Thomson Model',
      question: {
        en: "According to Thomson's model of an atom, an atom is compared to which of the following fruits?",
        hi: 'थॉमसन के परमाणु मॉडल के अनुसार, एक परमाणु की तुलना निम्नलिखित में से किस फल से की जाती है?',
      },
      options: {
        en: ['Watermelon', 'Apple', 'Banana', 'Mango'],
        hi: ['तरबूज', 'सेब', 'केला', 'आम'],
      },
      correctIndex: 0,
      solution: {
        en: 'Watermelon (`NCERT Fig 8.3`): red edible pulp represents positive sphere while scattered black seeds mimic embedded electrons.',
        hi: 'तरबूज (`NCERT चित्र 8.3`): लाल गूदा धनावेशित गोले तथा काले बीज इलेक्ट्रॉनों को निरूपित करते हैं।',
      },
    },
  ],
};
