import React, { useState } from 'react';
import { Sparkles, Flower2, HeartPulse } from 'lucide-react';

const ASEXUAL_CARDS = [
  { key: 'fission', en: 'Fission (`Amoeba, Leishmania, Plasmodium`)', hi: 'विखंडन (`अमीबा, लेस्मानिया, प्लैज्मोडियम`)', desc: { en: 'Amoeba: binary fission in ANY plane; Leishmania (`Kala-azar`): definite orientation via whip-like flagellum; Plasmodium (`Malaria`): MULTIPLE fission into many daughter cells simultaneously.', hi: 'अमीबा किसी भी तल से दो भागों में; कालाजार का लेस्मानिया चाबुक संरचना के सापेक्ष निश्चित तल में; मलेरिया परजीवी प्लैज्मोडियम एकसाथ अनेक कोशिकाओं में बहुखंडन!' } },
  { key: 'frag', en: 'Fragmentation (`Spirogyra`)', hi: 'खंडन (`स्पाइरोगाइरा`)', desc: { en: 'Simple multicellular filamentous green algae breaks into smaller pieces upon maturation -> each grows into new organism. Complex tissue/organ organisms CANNOT divide cell-by-cell.', hi: 'केवल सरल बहुकोशिकीय संगठन वाले जीवों (स्पाइरोगाइरा) में खंड विकसित होकर पूर्ण जीव बनते हैं; ऊतक-अंग वाले जटिल जीवों में असंभव।' } },
  { key: 'regen', en: 'Regeneration (`Planaria, Hydra`)', hi: 'पुनरुद्भवन (`प्लेनेरिया, हाइड्रा`)', desc: { en: 'Cut pieces use specialist regenerative cells to proliferate & differentiate into whole new individuals (`Development`). NOTE: NOT the same as normal reproduction (`most organisms depend on being cut!`).', hi: 'विशिष्ट कोशिकाएँ तेजी से विभाजित हो ऊतक व अंग विकसित करती हैं (`परिवर्धन`)। सावधानी: पुनरुद्भवन सामान्य जनन के समान नहीं है क्योंकि जीव कटने का इंतजार नहीं करते!' } },
  { key: 'bud', en: 'Budding (`Hydra & Yeast Act 7.1`)', hi: 'मुकुलन (`हाइड्रा व यीस्ट`)', desc: { en: 'Hydra uses regenerative cells at a specific site undergoing repeated division -> bud outgrowth detaches once mature! Yeast (`fungi`) also forms small buds in sugar culture (`Act 7.1`).', hi: 'हाइड्रा पुनर्जनन कोशिकाओं से एक स्थान पर बार-बार विभाजन कर उभार (मुकुल) बनाता है जो विकसित होकर अलग हो जाता है। यीस्ट में भी मुकुलन होता है।' } },
  { key: 'veg', en: 'Vegetative & Tissue Culture (`Bryophyllum, Potato`)', hi: 'कायिक प्रवर्धन व ऊतक संवर्धन (`ब्रायोफिलम, आलू`)', desc: { en: 'Leaf-margin notch buds in Bryophyllum; stem-eye buds in Potato (`Act 7.5`); Money-plant nodes (`Act 7.6`); seedless banana/rose/orange; early flowers/fruits. Tissue Culture: shoot-tip -> Callus -> hormone -> soil.', hi: 'ब्रायोफिलम पत्ती के खाँचों में कलियाँ; आलू की आँख (क्र. 7.5); बीज रहित केला/गुलाब/अंगूर; कम समय में फल-फूल। ऊतक संवर्धन में शीर्ष कोशिकाओं से कैलस बनता है।' } },
  { key: 'spore', en: 'Spore Formation (`Rhizopus`)', hi: 'बीजाणु समासंघ (`राइजोपस ब्रेड मोल्ड`)', desc: { en: 'Thread hyphae (`non-reproductive`) lift blob-on-a-stick Sporangia filled with microscopic spores protected by thick walls until landing on cool moist surfaces (`Act 7.2`).', hi: 'ब्रेड मोल्ड के ऊर्ध्व कवक तंतु जनन भाग नहीं हैं, उनके ऊपर गुच्छ बीजाणुधानी (Sporangia) में मोटी भित्ति वाले बीजाणु रहते हैं जो नम सतह पर उगते हैं।' } },
];

const FLOWER_PARTS = [
  { k: 'stamen', en: 'Stamen (`Anther + Filament` — MALE)', hi: 'पुंकेसर (`परागकोश + तंतु` — नर भाग)', fn: { en: 'Produces yellow pollen grains carrying male gametes inside anthers (`NCERT Ex Q3: Anther contains pollen grains!`).', hi: 'परागकोश में पीले परागकण बनते हैं जो नर युग्मक उत्पादित करते हैं (`अभ्यास Q3`)।' } },
  { k: 'pistil', en: 'Pistil / Carpel (`Stigma + Style + Ovary` — FEMALE)', hi: 'स्त्रीकेसर (`वर्तिकाग्र + वर्तिका + अंडाशय` — मादा)', fn: { en: 'Central organ: sticky Stigma traps pollen; Pollen tube grows down Style; swollen Ovary holds Ovules (`each with egg cell`).', hi: 'पुष्प के केंद्र में स्थित: चिपचिपा वर्तिकाग्र, मध्य लंबी वर्तिका (पराग नली मार्ग), आधार उभरा अंडाशय जिसमें बीजांड व अंड-कोशिका है।' } },
  { k: 'fate', en: 'Post-Fertilisation Transformation (`Ovule → Seed`, `Ovary → Fruit`)', hi: 'निषेचन पश्चात रूपांतरण (`बीजांड → बीज`, `अंडाशय → फल`)', fn: { en: 'Zygote divides -> Embryo inside Ovule -> tough coat -> SEED; Ovary grows rapidly -> FRUIT; sepals/petals/stamens usually fall.', hi: 'बीजांड कठोर आवरण पाकर बीज बनता है व भीतर भ्रूण रहता है; अंडाशय तीव्र वृद्धि कर फल बनता है!' } },
  { k: 'seed', en: 'Dicot Seed (`Act 7.7`: Cotyledons, Plumule, Radicle)', hi: 'चने के बीज के 3 भाग (`चित्र 7.9` — क्र. 7.7)', fn: { en: 'Cotyledons store food; Plumule develops into future SHOOT; Radicle develops into future ROOT (`NCERT Fig 7.9`)!', hi: 'बीजपत्र = खाद्य संग्रह; प्रांकुर (`Plumule`) = भावी प्ररोह/तना; मूलांकुर (`Radicle`) = भावी जड़!' } },
];

const HUMAN_CHECK = [
  { k: 'male', en: 'Male: Scrotum, Prostate/Seminal & Urethra', hi: 'नर: वृषण कोष, शुक्राशय-प्रोस्टेट व उभय मूत्रमार्ग', note: { en: 'Testes sit outside abdomen in Scrotum (`lower temp for sperm + Testosterone`); Seminal vesicles & Prostate add fluid medium + nutrients; Urethra = common urine + sperm tube.', hi: 'वृषण उदर गुहा के बाहर वृषण कोष में (`शुक्राणु निर्माण हेतु शरीर से कम ताप!`) व टेस्टोस्टेरॉन बनाते हैं; प्रोस्टेट/शुक्राशय तरल+पोषण दें; मूत्रमार्ग दोनों का उभय मार्ग!' } },
  { k: 'female', en: 'Female: Oviduct Fertilisation, Placenta & Period', hi: 'मादा: अंडवाहिका निषेचन, प्लेसेंटा व ऋतुस्राव', note: { en: 'Ovaries hold immature eggs at birth -> 1/mo enters Oviduct/Fallopian tube (`FERTILISATION SITE!`); embryo implants in Uterus nourished via disc Placenta (`~9 mo`); unfertilised sheds in 2–8 days.', hi: 'अंडाशय से हर माह 1 अंड अंडवाहिका में जाता है (`निषेचन यहीं!`); गर्भाशय में रोपण व प्लेसेंटा से ग्लूकोज/O₂ पोषण (`9 मास`); बिना निषेचन 2–8 दिन ऋतुस्राव।' } },
  { k: 'std_ctrl', en: 'Contraception & Bacterial vs Viral STDs (`Q5 Trap!`)', hi: 'गर्भनिरोधन बनाम जीवाणु/वायरल STD (`पृ. 138 Q5`)', note: { en: 'Condoms = ONLY method blocking STDs partially (`Copper-T, Oral Pills & Surgery do NOT block STDs!`). Bacterial STDs = Gonorrhoea & Syphilis; Viral STDs = Warts & HIV-AIDS.', hi: 'केवल कंडोम कुछ STD संक्रमण रोकता है (`कॉपर-T, गोलियाँ व नसबंदी STD नहीं रोकतीं!`)। जीवाणु STD = गोनोरिया, सिफिलिस; वायरल = मस्सा (Warts), HIV-AIDS!' } },
];

export function ReproductionModesAnatomyLabSVG({ lang = 'hi' }) {
  const hi = lang !== 'en';
  const [tab, setTab] = useState('asexual');
  const [asIdx, setAsIdx] = useState(0);
  const [flIdx, setFlIdx] = useState(2);
  const [huIdx, setHuIdx] = useState(2);

  return (
    <div className="rounded-3xl bg-[#070E1D] border border-emerald-500/35 p-4 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm sm:text-base font-black text-emerald-300 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{hi ? 'इंटरैक्टिव प्रजनन प्रयोगशाला: अलैंगिक 6 विधियाँ, पुष्प-बीज व मानव स्वास्थ्य' : 'Interactive Reproduction Lab: 6 Asexual Modes, Flower/Seed & Human Health'}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'asexual', en: '6 Asexual Modes', hi: '6 अलैंगिक विधियाँ', icon: Sparkles },
            { id: 'flower', en: 'Flower & Seed', hi: 'पुष्प व बीज अंकुरण', icon: Flower2 },
            { id: 'human', en: 'Human + Contraception', hi: 'मानव व गर्भनिरोधन', icon: HeartPulse },
          ].map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setTab(b.id)}
              className={`px-3 py-1 rounded-xl text-xs font-black border cursor-pointer transition-all ${
                tab === b.id ? 'bg-emerald-400 text-slate-950 border-emerald-200' : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-emerald-500/50'
              }`}
            >
              {hi ? b.hi : b.en}
            </button>
          ))}
        </div>
      </div>

      {tab === 'asexual' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {ASEXUAL_CARDS.map((c, i) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setAsIdx(i)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                  i === asIdx ? 'bg-cyan-400 text-slate-950 border-cyan-200' : 'bg-slate-900 text-slate-200 border-slate-700'
                }`}
              >
                {hi ? c.hi : c.en}
              </button>
            ))}
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/85 border border-cyan-500/35 space-y-1.5">
            <div className="text-xs sm:text-sm font-black text-cyan-300">{hi ? ASEXUAL_CARDS[asIdx].hi : ASEXUAL_CARDS[asIdx].en}</div>
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">{ASEXUAL_CARDS[asIdx].desc[hi ? 'hi' : 'en']}</p>
          </div>
        </div>
      )}

      {tab === 'flower' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {FLOWER_PARTS.map((c, i) => (
              <button
                key={c.k}
                type="button"
                onClick={() => setFlIdx(i)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                  i === flIdx ? 'bg-amber-400 text-slate-950 border-amber-200' : 'bg-slate-900 text-slate-200 border-slate-700'
                }`}
              >
                {hi ? c.hi : c.en}
              </button>
            ))}
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/85 border border-amber-500/35 space-y-1.5">
            <div className="text-xs sm:text-sm font-black text-amber-300">{hi ? FLOWER_PARTS[flIdx].hi : FLOWER_PARTS[flIdx].en}</div>
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">{FLOWER_PARTS[flIdx].fn[hi ? 'hi' : 'en']}</p>
          </div>
        </div>
      )}

      {tab === 'human' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {HUMAN_CHECK.map((c, i) => (
              <button
                key={c.k}
                type="button"
                onClick={() => setHuIdx(i)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black border cursor-pointer ${
                  i === huIdx ? 'bg-rose-400 text-slate-950 border-rose-200' : 'bg-slate-900 text-slate-200 border-slate-700'
                }`}
              >
                {hi ? c.hi : c.en}
              </button>
            ))}
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/85 border border-rose-500/35 space-y-1.5">
            <div className="text-xs sm:text-sm font-black text-rose-300">{hi ? HUMAN_CHECK[huIdx].hi : HUMAN_CHECK[huIdx].en}</div>
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">{HUMAN_CHECK[huIdx].note[hi ? 'hi' : 'en']}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default ReproductionModesAnatomyLabSVG;
