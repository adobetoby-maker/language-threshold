export interface MedTerm {
  id: string
  term: string
  category: 'prefix' | 'suffix' | 'root' | 'body-system' | 'disease' | 'procedure' | 'pregnancy' | 'mental-health' | 'pharmacology' | 'oncology' | 'legal-ethical'
  definition: string
  etymology: string
  example: string
  module: 2 | 3 | 4
  objective?: string
}

export const MED_TERMS: MedTerm[] = [
  {
    "id": "pfx-a",
    "term": "a- / an-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Without; not; absence of",
    "etymology": "Greek: a- (before consonants) / an- (before vowels) — privative prefix",
    "example": "Apnea = without breathing; anemia = without sufficient blood cells"
  },
  {
    "id": "pfx-anti",
    "term": "anti-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Against; opposing",
    "etymology": "Greek: anti — against, opposite",
    "example": "Antibiotic = against bacterial life; antihypertensive = against high blood pressure"
  },
  {
    "id": "pfx-brady",
    "term": "brady-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Slow",
    "etymology": "Greek: bradys — slow",
    "example": "Bradycardia = abnormally slow heart rate (<60 bpm)"
  },
  {
    "id": "pfx-dys",
    "term": "dys-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Difficult; painful; abnormal; bad",
    "etymology": "Greek: dys — bad, hard, unlucky",
    "example": "Dyspnea = difficult breathing; dysuria = painful urination; dyslexia = difficulty reading"
  },
  {
    "id": "pfx-endo",
    "term": "endo-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Within; inside",
    "etymology": "Greek: endon — within",
    "example": "Endoscopy = visual examination inside the body; endocardium = inner lining of the heart"
  },
  {
    "id": "pfx-epi",
    "term": "epi-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Upon; above; outer",
    "etymology": "Greek: epi — upon, at, near",
    "example": "Epidermis = outermost layer of skin; epicardium = outer layer of the heart"
  },
  {
    "id": "pfx-hemi",
    "term": "hemi-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Half",
    "etymology": "Greek: hemi — half",
    "example": "Hemiplegia = paralysis of one side of the body; hemicolectomy = removal of half the colon"
  },
  {
    "id": "pfx-hyper",
    "term": "hyper-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Excessive; above normal; too much",
    "etymology": "Greek: hyper — over, beyond, above",
    "example": "Hypertension = excessive blood pressure; hyperglycemia = high blood sugar"
  },
  {
    "id": "pfx-hypo",
    "term": "hypo-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Below normal; deficient; under",
    "etymology": "Greek: hypo — under, beneath",
    "example": "Hypoglycemia = low blood sugar; hypothyroidism = underactive thyroid"
  },
  {
    "id": "pfx-intra",
    "term": "intra-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Within; inside",
    "etymology": "Latin: intra — within",
    "example": "Intravenous (IV) = within a vein; intramuscular (IM) = within a muscle"
  },
  {
    "id": "pfx-macro",
    "term": "macro-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Large; long",
    "etymology": "Greek: makros — long, large",
    "example": "Macrocyte = abnormally large red blood cell; macroscopic = visible to the naked eye"
  },
  {
    "id": "pfx-micro",
    "term": "micro-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Small; microscopic",
    "etymology": "Greek: mikros — small",
    "example": "Microorganism = tiny organism; microcephaly = abnormally small head"
  },
  {
    "id": "pfx-neo",
    "term": "neo-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "New",
    "etymology": "Greek: neos — new, young",
    "example": "Neonatal = pertaining to the first 28 days of life; neoplasm = new abnormal growth (tumor)"
  },
  {
    "id": "pfx-peri",
    "term": "peri-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Around; surrounding",
    "etymology": "Greek: peri — around, about",
    "example": "Pericardium = sac surrounding the heart; periosteum = membrane surrounding bone"
  },
  {
    "id": "pfx-poly",
    "term": "poly-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Many; much; excessive",
    "etymology": "Greek: polys — many, much",
    "example": "Polyuria = excessive urination; polyarthritis = inflammation of many joints"
  },
  {
    "id": "pfx-post",
    "term": "post-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "After; behind",
    "etymology": "Latin: post — after, behind",
    "example": "Postoperative = after surgery; postpartum = after childbirth"
  },
  {
    "id": "pfx-pre",
    "term": "pre-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Before; in front of",
    "etymology": "Latin: prae — before, in front of",
    "example": "Prenatal = before birth; preoperative = before surgery"
  },
  {
    "id": "pfx-sub",
    "term": "sub-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Under; below; less than normal",
    "etymology": "Latin: sub — under, below",
    "example": "Sublingual = under the tongue; subcutaneous = under the skin"
  },
  {
    "id": "pfx-tachy",
    "term": "tachy-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Fast; rapid",
    "etymology": "Greek: tachys — swift, rapid",
    "example": "Tachycardia = abnormally fast heart rate (>100 bpm); tachypnea = rapid breathing"
  },
  {
    "id": "pfx-trans",
    "term": "trans-",
    "module": 2,
    "category": "prefix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Across; through; beyond",
    "etymology": "Latin: trans — across, through",
    "example": "Transdermal = through the skin (patch); transplant = organ moved across to another site"
  },
  {
    "id": "sfx-algia",
    "term": "-algia",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Pain; painful condition",
    "etymology": "Greek: algos — pain",
    "example": "Myalgia = muscle pain; neuralgia = nerve pain; arthralgia = joint pain"
  },
  {
    "id": "sfx-ectomy",
    "term": "-ectomy",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Surgical removal; excision",
    "etymology": "Greek: ektome — excision (ek = out + temnein = to cut)",
    "example": "Appendectomy = removal of appendix; tonsillectomy = removal of tonsils; gastrectomy = removal of stomach"
  },
  {
    "id": "sfx-emia",
    "term": "-emia",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Blood condition",
    "etymology": "Greek: haima — blood",
    "example": "Anemia = deficiency of red blood cells; leukemia = cancer of white blood cells; bacteremia = bacteria in blood"
  },
  {
    "id": "sfx-gram",
    "term": "-gram",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Record; tracing; image",
    "etymology": "Greek: gramma — written character, record",
    "example": "Electrocardiogram (ECG) = tracing of heart electrical activity; mammogram = X-ray image of breast"
  },
  {
    "id": "sfx-graphy",
    "term": "-graphy",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Process of recording; imaging",
    "etymology": "Greek: graphia — writing, recording",
    "example": "Radiography = X-ray imaging; echocardiography = ultrasound imaging of the heart"
  },
  {
    "id": "sfx-itis",
    "term": "-itis",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Inflammation",
    "etymology": "Greek: -itis — inflammation suffix",
    "example": "Appendicitis = inflammation of appendix; arthritis = inflammation of joints; meningitis = inflammation of meninges"
  },
  {
    "id": "sfx-logy",
    "term": "-logy",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Study of; branch of knowledge",
    "etymology": "Greek: logos — word, reason, study",
    "example": "Cardiology = study of the heart; neurology = study of the nervous system; oncology = study of cancer"
  },
  {
    "id": "sfx-lysis",
    "term": "-lysis",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Destruction; breakdown; separation",
    "etymology": "Greek: lysis — loosening, breaking down",
    "example": "Hemolysis = destruction of red blood cells; thrombolysis = breakdown of a blood clot"
  },
  {
    "id": "sfx-megaly",
    "term": "-megaly",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Enlargement",
    "etymology": "Greek: megas — large",
    "example": "Cardiomegaly = enlarged heart; splenomegaly = enlarged spleen; hepatomegaly = enlarged liver"
  },
  {
    "id": "sfx-oma",
    "term": "-oma",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Tumor; mass; swelling",
    "etymology": "Greek: -oma — swelling, tumor",
    "example": "Carcinoma = malignant epithelial tumor; hematoma = collection of blood; lipoma = benign fat tumor"
  },
  {
    "id": "sfx-oscopy",
    "term": "-oscopy / -scopy",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Visual examination using a scope",
    "etymology": "Greek: skopein — to look, examine",
    "example": "Colonoscopy = visual exam of the colon; bronchoscopy = exam of airways; cystoscopy = exam of bladder"
  },
  {
    "id": "sfx-ostomy",
    "term": "-ostomy",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Surgical creation of an opening",
    "etymology": "Greek: stoma — mouth, opening",
    "example": "Colostomy = opening of colon to abdominal wall; tracheostomy = opening in trachea"
  },
  {
    "id": "sfx-otomy",
    "term": "-otomy / -tomy",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Surgical incision; cutting into",
    "etymology": "Greek: tome — a cutting (temnein = to cut)",
    "example": "Laparotomy = incision into the abdomen; craniotomy = incision into the skull"
  },
  {
    "id": "sfx-pathy",
    "term": "-pathy",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Disease; abnormal condition; suffering",
    "etymology": "Greek: pathos — feeling, suffering, disease",
    "example": "Neuropathy = disease of nerves; cardiomyopathy = disease of heart muscle; nephropathy = kidney disease"
  },
  {
    "id": "sfx-penia",
    "term": "-penia",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Deficiency; abnormal decrease",
    "etymology": "Greek: penia — poverty, lack",
    "example": "Leukopenia = low white blood cell count; thrombocytopenia = low platelet count"
  },
  {
    "id": "sfx-plasty",
    "term": "-plasty",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Surgical repair; reconstruction",
    "etymology": "Greek: plassein — to mold, form",
    "example": "Angioplasty = repair of a blood vessel; rhinoplasty = surgical reshaping of the nose"
  },
  {
    "id": "sfx-plegia",
    "term": "-plegia",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Paralysis",
    "etymology": "Greek: plege — stroke, blow",
    "example": "Hemiplegia = paralysis of one side; quadriplegia = paralysis of all four limbs; paraplegia = lower body paralysis"
  },
  {
    "id": "sfx-pnea",
    "term": "-pnea",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Breathing; respiratory condition",
    "etymology": "Greek: pnoia — breath (pnein = to breathe)",
    "example": "Apnea = no breathing; dyspnea = difficult breathing; tachypnea = rapid breathing"
  },
  {
    "id": "sfx-stenosis",
    "term": "-stenosis",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Narrowing; stricture",
    "etymology": "Greek: stenosis — narrowing (stenos = narrow)",
    "example": "Aortic stenosis = narrowing of the aortic valve; urethral stenosis = narrowing of the urethra"
  },
  {
    "id": "sfx-uria",
    "term": "-uria",
    "module": 2,
    "category": "suffix",
    "objective": "Classify medical words into roots, prefixes, and suffixes",
    "definition": "Urine condition; urine",
    "etymology": "Greek: ouron — urine",
    "example": "Hematuria = blood in urine; proteinuria = protein in urine; polyuria = excessive urination"
  },
  {
    "id": "rt-cardio",
    "term": "cardi(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Heart",
    "etymology": "Greek: kardia — heart",
    "example": "Cardiology = study of the heart; cardiomegaly = enlarged heart; myocardial = pertaining to heart muscle"
  },
  {
    "id": "rt-dermato",
    "term": "derm(at)(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Skin",
    "etymology": "Greek: derma — skin",
    "example": "Dermatology = study of skin; dermatitis = skin inflammation; epidermis = outermost skin layer"
  },
  {
    "id": "rt-gastro",
    "term": "gastr(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Stomach",
    "etymology": "Greek: gaster — stomach, belly",
    "example": "Gastroenterology = study of GI tract; gastritis = stomach inflammation; gastrectomy = stomach removal"
  },
  {
    "id": "rt-hepato",
    "term": "hepat(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Liver",
    "etymology": "Greek: hepar/hepatos — liver",
    "example": "Hepatitis = liver inflammation; hepatomegaly = enlarged liver; hepatocyte = liver cell"
  },
  {
    "id": "rt-nephro",
    "term": "nephr(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Kidney",
    "etymology": "Greek: nephros — kidney",
    "example": "Nephrology = study of kidneys; nephritis = kidney inflammation; nephrectomy = kidney removal"
  },
  {
    "id": "rt-neuro",
    "term": "neur(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Nerve; nervous system",
    "etymology": "Greek: neuron — nerve, sinew",
    "example": "Neurology = study of nerves; neuralgia = nerve pain; neuropathy = nerve disease"
  },
  {
    "id": "rt-osteo",
    "term": "oste(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Bone",
    "etymology": "Greek: osteon — bone",
    "example": "Osteoporosis = porous bones; osteomyelitis = bone infection; osteoplasty = bone repair"
  },
  {
    "id": "rt-myo",
    "term": "my(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Muscle",
    "etymology": "Greek: mys/myos — muscle",
    "example": "Myalgia = muscle pain; myocardium = heart muscle; myositis = muscle inflammation"
  },
  {
    "id": "rt-arthro",
    "term": "arthr(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Joint",
    "etymology": "Greek: arthron — joint",
    "example": "Arthritis = joint inflammation; arthroscopy = visual exam of a joint; arthroplasty = joint repair"
  },
  {
    "id": "rt-hemato",
    "term": "hem(at)(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Blood",
    "etymology": "Greek: haima/haimatos — blood",
    "example": "Hematology = study of blood; hematoma = blood clot; hematuria = blood in urine"
  },
  {
    "id": "rt-pulmo",
    "term": "pulm(on)(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Lung",
    "etymology": "Latin: pulmo/pulmonis — lung",
    "example": "Pulmonology = study of lungs; pulmonary = pertaining to the lungs; pulmonary embolism = blood clot in lung"
  },
  {
    "id": "rt-rhino",
    "term": "rhin(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Nose",
    "etymology": "Greek: rhis/rhinos — nose",
    "example": "Rhinitis = nasal inflammation; rhinoplasty = nose surgery; rhinorrhea = nasal discharge (runny nose)"
  },
  {
    "id": "rt-ophthalmo",
    "term": "ophthalm(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Eye",
    "etymology": "Greek: ophthalmos — eye",
    "example": "Ophthalmology = study of eyes; ophthalmoscopy = exam of the eye interior"
  },
  {
    "id": "rt-oto",
    "term": "ot(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Ear",
    "etymology": "Greek: ous/otos — ear",
    "example": "Otitis = ear inflammation; otoscopy = visual exam of the ear; otolaryngology = ENT specialty"
  },
  {
    "id": "rt-hystero",
    "term": "hyster(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Uterus (womb)",
    "etymology": "Greek: hystera — uterus, womb",
    "example": "Hysterectomy = surgical removal of the uterus; hysteroscopy = visual exam of the uterus"
  },
  {
    "id": "rt-cysto",
    "term": "cyst(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Bladder; sac; cyst",
    "etymology": "Greek: kystis — bladder, pouch",
    "example": "Cystoscopy = visual exam of the bladder; cystitis = bladder inflammation; cystectomy = bladder removal"
  },
  {
    "id": "rt-litho",
    "term": "lith(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Stone; calculus",
    "etymology": "Greek: lithos — stone",
    "example": "Nephrolithiasis = kidney stones; lithotripsy = crushing of stones; cholelithiasis = gallstones"
  },
  {
    "id": "rt-cephalo",
    "term": "cephal(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Head",
    "etymology": "Greek: kephale — head",
    "example": "Cephalic = pertaining to the head; microcephaly = small head; hydrocephalus = fluid on the brain"
  },
  {
    "id": "rt-thoraco",
    "term": "thorac(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Chest; thorax",
    "etymology": "Greek: thorax — chest, breastplate",
    "example": "Thoracotomy = incision into the chest; thoracentesis = needle aspiration of chest fluid"
  },
  {
    "id": "rt-gyneco",
    "term": "gynec(o)-",
    "module": 2,
    "category": "root",
    "objective": "Show common word roots, combining forms, suffixes, and prefixes",
    "definition": "Woman; female",
    "etymology": "Greek: gyne/gynaikos — woman",
    "example": "Gynecology = study of female reproductive system; gynecologist = female health specialist"
  },
  {
    "id": "bs-cardio",
    "term": "Cardiovascular System",
    "module": 2,
    "category": "body-system",
    "objective": "Examine common medical vocabulary related to the basic human body systems",
    "definition": "The organ system consisting of the heart, blood vessels (arteries, veins, capillaries), and blood — responsible for circulating oxygen, nutrients, and hormones throughout the body",
    "etymology": "Latin: cardio (heart) + vasculare (vessel) — the heart-and-vessel system",
    "example": "A cardiologist manages cardiovascular diseases such as hypertension, arrhythmia, and coronary artery disease"
  },
  {
    "id": "bs-respiratory",
    "term": "Respiratory System",
    "module": 2,
    "category": "body-system",
    "objective": "Examine common medical vocabulary related to the basic human body systems",
    "definition": "The organ system responsible for gas exchange: taking in oxygen and expelling carbon dioxide via the lungs, bronchi, trachea, and diaphragm",
    "etymology": "Latin: respirare — to breathe (re = again + spirare = to breathe)",
    "example": "Pulmonology is the specialty that treats respiratory system conditions like COPD, asthma, and pneumonia"
  },
  {
    "id": "bs-digestive",
    "term": "Digestive System",
    "module": 2,
    "category": "body-system",
    "objective": "Examine common medical vocabulary related to the basic human body systems",
    "definition": "The organ system that breaks down food into nutrients for absorption: mouth, esophagus, stomach, small intestine, large intestine, liver, pancreas, gallbladder",
    "etymology": "Latin: digestus — dissolved, separated (dis = apart + gerere = to carry)",
    "example": "Gastroenterologists treat digestive system disorders including Crohn's disease, cirrhosis, and peptic ulcers"
  },
  {
    "id": "bs-nervous",
    "term": "Nervous System",
    "module": 2,
    "category": "body-system",
    "objective": "Examine common medical vocabulary related to the basic human body systems",
    "definition": "The organ system that coordinates body activities via electrical and chemical signals: brain, spinal cord (CNS), and peripheral nerves (PNS)",
    "etymology": "Latin: nervus — nerve, sinew",
    "example": "Neurologists manage nervous system conditions such as epilepsy, multiple sclerosis, and Parkinson's disease"
  },
  {
    "id": "bs-musculo",
    "term": "Musculoskeletal System",
    "module": 2,
    "category": "body-system",
    "objective": "Examine common medical vocabulary related to the basic human body systems",
    "definition": "The combined system of bones (skeletal) and muscles (muscular) that provides structure, support, and movement",
    "etymology": "Latin: musculus (muscle) + Greek: skeletos (dried up body — skeleton)",
    "example": "Orthopedic surgeons treat musculoskeletal conditions including fractures, arthritis, and tendon tears"
  },
  {
    "id": "bs-urinary",
    "term": "Urinary System",
    "module": 2,
    "category": "body-system",
    "objective": "Examine common medical vocabulary related to the basic human body systems",
    "definition": "The organ system that filters blood and excretes waste via urine: kidneys, ureters, urinary bladder, and urethra",
    "etymology": "Latin: urina — urine (from Greek: ouron)",
    "example": "Urologists treat urinary system conditions such as kidney stones, UTIs, and renal failure"
  },
  {
    "id": "bs-integument",
    "term": "Integumentary System",
    "module": 2,
    "category": "body-system",
    "objective": "Examine common medical vocabulary related to the basic human body systems",
    "definition": "The organ system that forms the external covering of the body: skin, hair, nails, and sweat/sebaceous glands",
    "etymology": "Latin: integumentum — covering (integere = to cover)",
    "example": "Dermatologists treat integumentary conditions including eczema, psoriasis, melanoma, and acne"
  },
  {
    "id": "bs-endocrine",
    "term": "Endocrine System",
    "module": 2,
    "category": "body-system",
    "objective": "Examine common medical vocabulary related to the basic human body systems",
    "definition": "The gland system that produces and secretes hormones into the bloodstream to regulate metabolism, growth, and reproduction: pituitary, thyroid, adrenal, pancreas, gonads",
    "etymology": "Greek: endon (within) + krinein (to separate, secrete)",
    "example": "Endocrinologists treat hormonal disorders including diabetes mellitus, thyroid disease, and Cushing syndrome"
  },
  {
    "id": "dis-mi",
    "term": "Myocardial Infarction (MI)",
    "module": 2,
    "category": "disease",
    "objective": "Describe common diseases, disorders, and procedures related to body systems",
    "definition": "Death of heart muscle tissue due to blocked coronary artery blood flow; commonly called a 'heart attack'",
    "etymology": "Greek: mys (muscle) + kardia (heart) + Latin: infarcire (to cram/stuff) — referring to blocked/stuffed vessel",
    "example": "ST-elevation myocardial infarction (STEMI) requires emergency percutaneous coronary intervention (PCI)"
  },
  {
    "id": "dis-htn",
    "term": "Hypertension",
    "module": 2,
    "category": "disease",
    "objective": "Describe common diseases, disorders, and procedures related to body systems",
    "definition": "Persistently elevated blood pressure (≥130/80 mmHg), a major risk factor for stroke, MI, and kidney disease",
    "etymology": "Greek: hyper (above/excessive) + Latin: tensio (tension, stretching)",
    "example": "Primary hypertension has no known cause; secondary hypertension may result from renal artery stenosis"
  },
  {
    "id": "dis-copd",
    "term": "COPD",
    "module": 2,
    "category": "disease",
    "objective": "Describe common diseases, disorders, and procedures related to body systems",
    "definition": "Chronic Obstructive Pulmonary Disease — progressive lung disease causing airflow limitation; includes chronic bronchitis and emphysema",
    "etymology": "Latin: pulmo (lung) + Greek: obstruere (to block)",
    "example": "COPD is primarily caused by long-term tobacco exposure; spirometry confirms diagnosis with FEV1/FVC <0.70"
  },
  {
    "id": "dis-dm",
    "term": "Diabetes Mellitus",
    "module": 2,
    "category": "disease",
    "objective": "Describe common diseases, disorders, and procedures related to body systems",
    "definition": "Metabolic disease of impaired insulin production (Type 1) or insulin resistance (Type 2) causing chronic hyperglycemia",
    "etymology": "Greek: diabetes (siphon — excessive urination) + Latin: mellitus (honey-sweet — referring to glucose in urine)",
    "example": "HbA1c >6.5% on two separate tests confirms diabetes mellitus diagnosis"
  },
  {
    "id": "dis-osteo",
    "term": "Osteoporosis",
    "module": 2,
    "category": "disease",
    "objective": "Describe common diseases, disorders, and procedures related to body systems",
    "definition": "Progressive bone disease with decreased bone density and increased fracture risk, most common in postmenopausal women",
    "etymology": "Greek: osteon (bone) + poros (passage, pore) + -osis (condition) — literally 'porous bone condition'",
    "example": "DEXA scan measures bone mineral density; bisphosphonates (e.g., alendronate) are first-line treatment"
  },
  {
    "id": "dis-arthritis",
    "term": "Arthritis",
    "module": 2,
    "category": "disease",
    "objective": "Describe common diseases, disorders, and procedures related to body systems",
    "definition": "Inflammation of one or more joints causing pain, swelling, and stiffness; includes osteoarthritis (degenerative) and rheumatoid arthritis (autoimmune)",
    "etymology": "Greek: arthron (joint) + -itis (inflammation)",
    "example": "Rheumatoid arthritis is a systemic autoimmune disease treated with DMARDs including methotrexate"
  },
  {
    "id": "dis-pneumonia",
    "term": "Pneumonia",
    "module": 2,
    "category": "disease",
    "objective": "Describe common diseases, disorders, and procedures related to body systems",
    "definition": "Infection/inflammation of one or both lungs with consolidation of alveoli — caused by bacteria, viruses, or fungi",
    "etymology": "Greek: pneumon (lung) + -ia (condition)",
    "example": "Community-acquired pneumonia (CAP) most commonly caused by Streptococcus pneumoniae; treated with antibiotics"
  },
  {
    "id": "dis-hepatitis",
    "term": "Hepatitis",
    "module": 2,
    "category": "disease",
    "objective": "Describe common diseases, disorders, and procedures related to body systems",
    "definition": "Inflammation of the liver, most often caused by viral infection (A, B, C, D, E), alcohol abuse, or autoimmune disease",
    "etymology": "Greek: hepar (liver) + -itis (inflammation)",
    "example": "Hepatitis C is transmitted via blood contact; it can be cured with direct-acting antiviral (DAA) therapy"
  },
  {
    "id": "dis-uti",
    "term": "Urinary Tract Infection (UTI)",
    "module": 2,
    "category": "disease",
    "objective": "Describe common diseases, disorders, and procedures related to body systems",
    "definition": "Bacterial infection anywhere in the urinary system: bladder (cystitis), urethra (urethritis), or kidneys (pyelonephritis)",
    "etymology": "Latin: urinarius (of urine) + tractus (tract, course) + infectio (infection)",
    "example": "UTIs are more common in women due to shorter urethra; most commonly caused by E. coli; treated with antibiotics"
  },
  {
    "id": "proc-ecg",
    "term": "Electrocardiogram (ECG/EKG)",
    "module": 2,
    "category": "procedure",
    "objective": "Describe common diseases, disorders, and procedures related to body systems",
    "definition": "Non-invasive test that records the electrical activity of the heart to detect arrhythmias, MI, and other cardiac conditions",
    "etymology": "Greek: elektron (amber/electricity) + kardia (heart) + gramma (record)",
    "example": "A 12-lead ECG is ordered to evaluate chest pain; ST elevation in leads II, III, aVF indicates inferior STEMI"
  },
  {
    "id": "proc-colonoscopy",
    "term": "Colonoscopy",
    "module": 2,
    "category": "procedure",
    "objective": "Describe common diseases, disorders, and procedures related to body systems",
    "definition": "Endoscopic visual examination of the entire colon and rectum using a flexible lighted scope; used for cancer screening and biopsy",
    "etymology": "Greek: kolon (large intestine) + skopein (to look/examine)",
    "example": "Colonoscopy is recommended starting at age 45 for colorectal cancer screening; polyps can be removed during the procedure"
  },
  {
    "id": "proc-MRI",
    "term": "MRI (Magnetic Resonance Imaging)",
    "module": 2,
    "category": "procedure",
    "objective": "Describe common diseases, disorders, and procedures related to body systems",
    "definition": "Imaging technique using magnetic fields and radio waves to create detailed soft-tissue images without radiation",
    "etymology": "Magnetic (magnetism) + resonance (resonance) + imaging — describes the physics of the technology",
    "example": "Brain MRI is used to diagnose multiple sclerosis, stroke, and brain tumors; contrast agents (gadolinium) improve visualization"
  },
  {
    "id": "proc-biopsy",
    "term": "Biopsy",
    "module": 2,
    "category": "procedure",
    "objective": "Describe common diseases, disorders, and procedures related to body systems",
    "definition": "Removal of a small sample of living tissue for microscopic examination to diagnose disease, especially cancer",
    "etymology": "Greek: bios (life) + opsis (sight) — 'look at living tissue'",
    "example": "Core needle biopsy of a suspicious breast lump is examined by a pathologist to confirm or exclude malignancy"
  },
  {
    "id": "preg-ob",
    "term": "Obstetrics (OB)",
    "module": 2,
    "category": "pregnancy",
    "objective": "Articulate pregnancy-related diseases, disorders, procedures, and medical specialties",
    "definition": "The branch of medicine that manages pregnancy, labor, and the postpartum period",
    "etymology": "Latin: obstetrix — midwife (obstare = to stand before)",
    "example": "An OB/GYN specialist provides prenatal care, delivers babies, and manages postpartum complications"
  },
  {
    "id": "preg-gravida",
    "term": "Gravida / Para",
    "module": 2,
    "category": "pregnancy",
    "objective": "Articulate pregnancy-related diseases, disorders, procedures, and medical specialties",
    "definition": "Gravida = number of pregnancies; Para = number of viable births (>20 weeks). G3P2 = 3 pregnancies, 2 deliveries",
    "etymology": "Latin: gravidus (heavy, pregnant) / pario (to give birth)",
    "example": "A woman who has been pregnant 4 times, delivered 3 viable infants, and had 1 abortion is documented as G4P3A1"
  },
  {
    "id": "preg-trimester",
    "term": "Trimester",
    "module": 2,
    "category": "pregnancy",
    "objective": "Articulate pregnancy-related diseases, disorders, procedures, and medical specialties",
    "definition": "One of three 3-month divisions of pregnancy: 1st (weeks 1–12), 2nd (13–26), 3rd (27–40)",
    "etymology": "Latin: trimestris — of three months (tri = three + mensis = month)",
    "example": "Nausea is most common in the first trimester; fetal movement is first felt around weeks 16–20 (second trimester)"
  },
  {
    "id": "preg-preeclampsia",
    "term": "Preeclampsia",
    "module": 2,
    "category": "pregnancy",
    "objective": "Articulate pregnancy-related diseases, disorders, procedures, and medical specialties",
    "definition": "Pregnancy complication characterized by new-onset hypertension (>140/90) after 20 weeks with proteinuria or organ dysfunction",
    "etymology": "Greek: pre (before) + eklampsis (sudden development — eclampsia) — the stage before eclampsia with seizures",
    "example": "Preeclampsia management includes antihypertensives and magnesium sulfate; delivery is the definitive treatment"
  },
  {
    "id": "preg-csec",
    "term": "Cesarean Section (C-section)",
    "module": 2,
    "category": "pregnancy",
    "objective": "Articulate pregnancy-related diseases, disorders, procedures, and medical specialties",
    "definition": "Surgical delivery of a baby through incisions in the abdominal wall and uterus",
    "etymology": "Traditionally attributed to Julius Caesar — though this etymology is disputed; from Latin: caedere (to cut)",
    "example": "Emergency C-section is indicated for fetal distress, placenta previa, or failed trial of labor"
  },
  {
    "id": "preg-amnio",
    "term": "Amniocentesis",
    "module": 2,
    "category": "pregnancy",
    "objective": "Articulate pregnancy-related diseases, disorders, procedures, and medical specialties",
    "definition": "Prenatal diagnostic procedure: needle insertion through the abdomen into the amniotic sac to extract fluid for genetic testing",
    "etymology": "Greek: amnion (inner fetal membrane) + kentesis (puncture)",
    "example": "Amniocentesis at 15–20 weeks can detect chromosomal abnormalities like Down syndrome (trisomy 21)"
  },
  {
    "id": "preg-apgar",
    "term": "APGAR Score",
    "module": 2,
    "category": "pregnancy",
    "objective": "Articulate pregnancy-related diseases, disorders, procedures, and medical specialties",
    "definition": "Newborn assessment tool at 1 and 5 minutes after birth: Appearance (color), Pulse, Grimace, Activity, Respiration — scored 0–10",
    "etymology": "Acronym named after Dr. Virginia Apgar (1953); each letter = one assessment criterion",
    "example": "APGAR 7–10 = normal; 4–6 = needs assistance; 0–3 = requires immediate resuscitation"
  },
  {
    "id": "mh-mdd",
    "term": "Major Depressive Disorder (MDD)",
    "module": 3,
    "category": "mental-health",
    "objective": "Describe standard medical terms related to mental and behavioral health",
    "definition": "Mental health condition characterized by persistent low mood, anhedonia (loss of pleasure), fatigue, and cognitive impairment for ≥2 weeks",
    "etymology": "Latin: depressus — pressed down (de = down + premere = to press)",
    "example": "MDD affects ~17% of Americans; first-line treatment is SSRIs (e.g., sertraline) plus psychotherapy (CBT)"
  },
  {
    "id": "mh-anxiety",
    "term": "Generalized Anxiety Disorder (GAD)",
    "module": 3,
    "category": "mental-health",
    "objective": "Describe standard medical terms related to mental and behavioral health",
    "definition": "Excessive, uncontrollable worry about multiple areas of life for ≥6 months, accompanied by physical symptoms like muscle tension and insomnia",
    "etymology": "Latin: anxietas — anxiety (angere = to choke, distress)",
    "example": "GAD treatment combines SSRIs/SNRIs, buspirone, and cognitive behavioral therapy (CBT)"
  },
  {
    "id": "mh-bipolar",
    "term": "Bipolar Disorder",
    "module": 3,
    "category": "mental-health",
    "objective": "Explain mental health disorders and therapeutic interventions",
    "definition": "Mood disorder with episodes of mania/hypomania (elevated, expansive, or irritable mood) alternating with depressive episodes",
    "etymology": "Latin: bi (two) + polus (pole) — swinging between two extreme poles of mood",
    "example": "Bipolar I: full manic episodes; Bipolar II: hypomanic episodes; mood stabilizers (lithium, valproate) are first-line"
  },
  {
    "id": "mh-schizo",
    "term": "Schizophrenia",
    "module": 3,
    "category": "mental-health",
    "objective": "Explain mental health disorders and therapeutic interventions",
    "definition": "Chronic psychotic disorder characterized by positive symptoms (hallucinations, delusions, disorganized thinking) and negative symptoms (flat affect, avolition)",
    "etymology": "Greek: schizein (to split) + phren (mind) — coined by Bleuler 1911 (not 'split personality')",
    "example": "Antipsychotics (e.g., haloperidol, risperidone, clozapine) are the cornerstone of schizophrenia treatment"
  },
  {
    "id": "mh-ptsd",
    "term": "PTSD",
    "module": 3,
    "category": "mental-health",
    "objective": "Explain mental health disorders and therapeutic interventions",
    "definition": "Post-Traumatic Stress Disorder — anxiety disorder following traumatic event with re-experiencing, avoidance, negative cognitions, and hyperarousal",
    "etymology": "Post (after) + Trauma (Greek: wound) + Stress + Disorder — the condition after experiencing a psychological wound",
    "example": "Prolonged Exposure (PE) therapy and EMDR are evidence-based PTSD treatments; SSRIs are first-line pharmacotherapy"
  },
  {
    "id": "mh-ocd",
    "term": "OCD",
    "module": 3,
    "category": "mental-health",
    "objective": "Explain mental health disorders and therapeutic interventions",
    "definition": "Obsessive-Compulsive Disorder — anxiety disorder with recurrent intrusive obsessions (thoughts) and compulsions (behaviors) that cause significant distress",
    "etymology": "Latin: obsidere (to besiege) + compellere (to drive forward) + disorder",
    "example": "Exposure and Response Prevention (ERP) therapy is the gold standard for OCD; SSRIs (high doses) are first-line medication"
  },
  {
    "id": "mh-halluc",
    "term": "Hallucination",
    "module": 3,
    "category": "mental-health",
    "objective": "Describe standard medical terms related to mental and behavioral health",
    "definition": "Perception of something that does not exist in external reality — can be auditory (most common in schizophrenia), visual, tactile, or olfactory",
    "etymology": "Latin: hallucinari — to wander in mind, to dream",
    "example": "Auditory hallucinations (hearing voices) are a positive symptom of schizophrenia; command hallucinations can be dangerous"
  },
  {
    "id": "mh-delusion",
    "term": "Delusion",
    "module": 3,
    "category": "mental-health",
    "objective": "Describe standard medical terms related to mental and behavioral health",
    "definition": "Fixed false belief held despite contradictory evidence; includes persecutory (being watched/harmed), grandiose, or referential subtypes",
    "etymology": "Latin: deludere — to mock, play false (de = from + ludere = to play)",
    "example": "Persecutory delusions (belief that others want to harm you) are common in schizophrenia and delusional disorder"
  },
  {
    "id": "mh-cbt",
    "term": "Cognitive Behavioral Therapy (CBT)",
    "module": 3,
    "category": "mental-health",
    "objective": "Explain mental health disorders and therapeutic interventions",
    "definition": "Evidence-based psychotherapy that identifies and modifies negative thought patterns and maladaptive behaviors to improve emotional regulation",
    "etymology": "Latin: cognitio (perception, knowing) + behavioral (behavior) + Greek: therapeia (healing service)",
    "example": "CBT is first-line for depression, anxiety, OCD, PTSD, and eating disorders; typically 12–20 structured sessions"
  },
  {
    "id": "mh-dsm",
    "term": "DSM-5",
    "module": 3,
    "category": "mental-health",
    "objective": "Describe standard medical terms related to mental and behavioral health",
    "definition": "Diagnostic and Statistical Manual of Mental Disorders, 5th Edition — the standard classification system for mental health diagnoses in the US",
    "etymology": "Acronym: Diagnostic and Statistical Manual — published by the American Psychiatric Association (APA)",
    "example": "DSM-5 uses categorical diagnoses with specific symptom criteria; ICD-10 codes are cross-referenced for insurance billing"
  },
  {
    "id": "mh-dbt",
    "term": "Dialectical Behavior Therapy (DBT)",
    "module": 3,
    "category": "mental-health",
    "objective": "Explain mental health disorders and therapeutic interventions",
    "definition": "Structured psychotherapy combining CBT with mindfulness and distress tolerance skills; developed for borderline personality disorder",
    "etymology": "Dialectical (synthesis of opposites) + Behavioral (behavior change) + Therapy — balancing acceptance and change",
    "example": "DBT has four core skill modules: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness"
  },
  {
    "id": "mh-psychosis",
    "term": "Psychosis",
    "module": 3,
    "category": "mental-health",
    "objective": "Describe standard medical terms related to mental and behavioral health",
    "definition": "Loss of contact with reality — characterized by hallucinations, delusions, and disorganized thinking; can be a symptom of schizophrenia, mania, or substance use",
    "etymology": "Greek: psyche (mind, soul) + -osis (abnormal condition)",
    "example": "First episode psychosis (FEP) requires urgent psychiatric evaluation; antipsychotics are the primary treatment"
  },
  {
    "id": "pharma-def",
    "term": "Pharmacology",
    "module": 4,
    "category": "pharmacology",
    "objective": "Define pharmacology",
    "definition": "The branch of biomedical science studying how drugs interact with living organisms — including mechanisms, therapeutic effects, adverse effects, and dosing",
    "etymology": "Greek: pharmakon (drug, medicine, poison) + logos (study)",
    "example": "Clinical pharmacology applies pharmacological principles to drug therapy in patient care"
  },
  {
    "id": "pharma-pk",
    "term": "Pharmacokinetics",
    "module": 4,
    "category": "pharmacology",
    "objective": "Classify drugs and related pharmaceutical terminology",
    "definition": "What the BODY does to a DRUG: Absorption, Distribution, Metabolism, Excretion (ADME)",
    "etymology": "Greek: pharmakon (drug) + kinesis (movement) — movement of the drug through the body",
    "example": "A drug with poor oral bioavailability (low absorption) may require IV administration for therapeutic effect"
  },
  {
    "id": "pharma-pd",
    "term": "Pharmacodynamics",
    "module": 4,
    "category": "pharmacology",
    "objective": "Classify drugs and related pharmaceutical terminology",
    "definition": "What the DRUG does to the BODY: mechanism of action, receptor binding, dose-response relationships, and therapeutic effects",
    "etymology": "Greek: pharmakon (drug) + dynamis (power/force) — the power/effect of the drug",
    "example": "Beta-blockers pharmacodynamics: bind β1-adrenergic receptors → reduce heart rate and blood pressure"
  },
  {
    "id": "pharma-analgesic",
    "term": "Analgesics",
    "module": 4,
    "category": "pharmacology",
    "objective": "Classify drugs and related pharmaceutical terminology",
    "definition": "Drug class that relieves pain without loss of consciousness — includes NSAIDs (ibuprofen), acetaminophen, and opioids (morphine, oxycodone)",
    "etymology": "Greek: an- (without) + algos (pain) — literally 'without pain'",
    "example": "Acetaminophen is a non-opioid analgesic; hydrocodone is a Schedule II opioid analgesic requiring DEA-registered prescription"
  },
  {
    "id": "pharma-antibiotic",
    "term": "Antibiotics",
    "module": 4,
    "category": "pharmacology",
    "objective": "Classify drugs and related pharmaceutical terminology",
    "definition": "Drugs that kill or inhibit bacteria — classified by mechanism: cell wall synthesis inhibitors (penicillin), protein synthesis inhibitors (tetracycline), DNA synthesis inhibitors (fluoroquinolones)",
    "etymology": "Greek: anti (against) + bios (life) — against bacterial life",
    "example": "Antibiotic resistance develops when bacteria evolve mechanisms to survive antibiotic exposure; culture and sensitivity guides selection"
  },
  {
    "id": "pharma-route",
    "term": "Routes of Administration",
    "module": 4,
    "category": "pharmacology",
    "objective": "Recognize dosage, administration, and medication-related terminologies",
    "definition": "The pathway by which a drug is delivered: oral (PO), intravenous (IV), intramuscular (IM), subcutaneous (SC), sublingual (SL), topical, transdermal, inhalation, rectal",
    "etymology": "Latin: via (way/path) + administrare (to manage, serve)",
    "example": "IV medications have 100% bioavailability (immediate); oral drugs undergo first-pass metabolism in the liver"
  },
  {
    "id": "pharma-bid",
    "term": "BID / TID / QID / QD",
    "module": 4,
    "category": "pharmacology",
    "objective": "Describe pharmacological interactions and abbreviations",
    "definition": "Dosing frequency abbreviations: BID = bis in die (twice daily); TID = ter in die (3x daily); QID = quater in die (4x daily); QD = quaque die (once daily)",
    "etymology": "Latin: bis (twice) / ter (three times) / quater (four times) + in die (in a day)",
    "example": "Amoxicillin 500mg PO TID = by mouth three times per day; Metformin 500mg BID = twice daily"
  },
  {
    "id": "pharma-prn",
    "term": "PRN / STAT / NPO",
    "module": 4,
    "category": "pharmacology",
    "objective": "Describe pharmacological interactions and abbreviations",
    "definition": "PRN = pro re nata (as needed); STAT = statim (immediately); NPO = nil per os (nothing by mouth)",
    "etymology": "Latin: pro re nata (for the thing born/needed) / statim (immediately) / nil per os (nothing by mouth)",
    "example": "Morphine 4mg IV PRN q4h for pain; STAT ECG ordered after patient reports chest pain; NPO after midnight before surgery"
  },
  {
    "id": "pharma-schedule",
    "term": "DEA Drug Schedules",
    "module": 4,
    "category": "pharmacology",
    "objective": "Classify drugs and related pharmaceutical terminology",
    "definition": "US Drug Enforcement Administration (DEA) classification of controlled substances I–V based on abuse potential and medical use: Schedule I (no medical use, highest abuse) → Schedule V (lowest abuse)",
    "etymology": "From the Controlled Substances Act (1970) — DEA = Drug Enforcement Administration",
    "example": "Heroin = Schedule I; oxycodone = Schedule II; anabolic steroids = Schedule III; tramadol = Schedule IV; cough preparations with codeine = Schedule V"
  },
  {
    "id": "pharma-interaction",
    "term": "Drug Interaction",
    "module": 4,
    "category": "pharmacology",
    "objective": "Describe pharmacological interactions and abbreviations",
    "definition": "Altered pharmacological effect when two or more drugs are combined: synergism (enhanced effect), antagonism (reduced effect), or potentiation (one drug amplifies another)",
    "etymology": "Latin: inter (between) + actio (action) — between the actions of multiple drugs",
    "example": "Warfarin + NSAIDs = increased bleeding risk (synergism); alcohol + opioids = CNS depression potentiation"
  },
  {
    "id": "pharma-adr",
    "term": "Adverse Drug Reaction (ADR)",
    "module": 4,
    "category": "pharmacology",
    "objective": "Describe pharmacological interactions and abbreviations",
    "definition": "Harmful, unintended response to a drug at normal therapeutic doses — distinct from overdose or medication errors",
    "etymology": "Latin: adversus (turned against) + drug reaction — a turning-against-the-body effect",
    "example": "Stevens-Johnson Syndrome (SJS) is a severe ADR to sulfonamides; anaphylaxis is a life-threatening ADR to penicillin"
  },
  {
    "id": "pharma-bioavail",
    "term": "Bioavailability",
    "module": 4,
    "category": "pharmacology",
    "objective": "Classify drugs and related pharmaceutical terminology",
    "definition": "The fraction of an administered drug that reaches systemic circulation in active form; IV = 100%; oral bioavailability is reduced by first-pass metabolism",
    "etymology": "Greek: bios (life) + Latin: availare (to be worth) — the living availability of the drug",
    "example": "Nitroglycerin has very low oral bioavailability due to first-pass effect; it is given sublingually (SL) for rapid absorption"
  },
  {
    "id": "onco-carcinoma",
    "term": "Carcinoma",
    "module": 4,
    "category": "oncology",
    "objective": "List types of cancer",
    "definition": "Malignant tumor arising from epithelial cells (skin, glands, and lining of organs) — the most common cancer type (~80% of all cancers)",
    "etymology": "Greek: karkinos (crab/cancer) + -oma (tumor) — Hippocrates named tumors after crabs due to claw-like projections",
    "example": "Adenocarcinoma (glandular epithelial); squamous cell carcinoma (skin/lung); basal cell carcinoma (most common skin cancer)"
  },
  {
    "id": "onco-sarcoma",
    "term": "Sarcoma",
    "module": 4,
    "category": "oncology",
    "objective": "List types of cancer",
    "definition": "Malignant tumor arising from connective tissue: bone (osteosarcoma), cartilage (chondrosarcoma), muscle (rhabdomyosarcoma), fat (liposarcoma)",
    "etymology": "Greek: sarx/sarkos (flesh) + -oma (tumor)",
    "example": "Osteosarcoma is the most common bone cancer, most frequent in adolescents; treated with limb-sparing surgery + chemotherapy"
  },
  {
    "id": "onco-lymphoma",
    "term": "Lymphoma",
    "module": 4,
    "category": "oncology",
    "objective": "List types of cancer",
    "definition": "Cancer of the lymphatic system (lymph nodes, spleen, lymphatic tissue) — classified as Hodgkin lymphoma (Reed-Sternberg cells) or Non-Hodgkin lymphoma",
    "etymology": "Latin: lympha (water, clear fluid) + Greek: -oma (tumor)",
    "example": "Non-Hodgkin lymphoma (NHL) is more common; diffuse large B-cell lymphoma (DLBCL) is the most common NHL subtype"
  },
  {
    "id": "onco-leukemia",
    "term": "Leukemia",
    "module": 4,
    "category": "oncology",
    "objective": "List types of cancer",
    "definition": "Cancer of blood-forming tissues (bone marrow) characterized by excessive production of abnormal white blood cells; classified by cell type and course (acute/chronic)",
    "etymology": "Greek: leukos (white) + haima (blood) — 'white blood' due to high WBC count",
    "example": "Acute Myeloid Leukemia (AML): rapid onset, requires immediate chemotherapy; CML treated with imatinib (Gleevec)"
  },
  {
    "id": "onco-melanoma",
    "term": "Melanoma",
    "module": 4,
    "category": "oncology",
    "objective": "List types of cancer",
    "definition": "Malignant tumor of melanocytes (pigment-producing cells); most dangerous form of skin cancer due to high metastatic potential",
    "etymology": "Greek: melas (black/dark) + -oma (tumor) — named for dark pigmentation",
    "example": "ABCDE criteria for melanoma: Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolution; treated with excision ± immunotherapy"
  },
  {
    "id": "onco-metastasis",
    "term": "Metastasis",
    "module": 4,
    "category": "oncology",
    "objective": "Recognize terms related to oncological diagnosis and prognosis",
    "definition": "Spread of cancer from the primary site to distant organs via blood vessels, lymphatics, or direct extension; indicates Stage IV disease",
    "etymology": "Greek: metastasis — removal, change of place (meta = beyond + stasis = standing)",
    "example": "Breast cancer commonly metastasizes to bone, lung, liver, and brain; bone metastases cause hypercalcemia and pathological fractures"
  },
  {
    "id": "onco-tnm",
    "term": "TNM Staging",
    "module": 4,
    "category": "oncology",
    "objective": "Recognize terms related to oncological diagnosis and prognosis",
    "definition": "International cancer staging system: T = tumor size/extent (T0–T4), N = lymph node involvement (N0–N3), M = distant metastasis (M0/M1)",
    "etymology": "Acronym: Tumor + Nodes + Metastasis — developed by Pierre Denoix, formalized by AJCC",
    "example": "T2N1M0 breast cancer = tumor 2–5cm + 1–3 axillary nodes positive + no metastasis = Stage IIB; guides prognosis and treatment"
  },
  {
    "id": "onco-chemo",
    "term": "Chemotherapy",
    "module": 4,
    "category": "oncology",
    "objective": "Recognize terms related to oncological diagnosis and prognosis",
    "definition": "Systemic cancer treatment using cytotoxic drugs that kill rapidly dividing cells — can be curative, adjuvant (after surgery), neoadjuvant (before surgery), or palliative",
    "etymology": "Greek: chemo (chemical) + therapeia (healing service)",
    "example": "FOLFOX regimen (fluorouracil + leucovorin + oxaliplatin) is standard first-line chemotherapy for metastatic colorectal cancer"
  },
  {
    "id": "onco-benign",
    "term": "Benign vs. Malignant",
    "module": 4,
    "category": "oncology",
    "objective": "Recognize terms related to oncological diagnosis and prognosis",
    "definition": "Benign tumors: non-cancerous, slow-growing, encapsulated, do not invade or metastasize. Malignant tumors: cancerous, invasive, poorly differentiated, capable of metastasis",
    "etymology": "Latin: benignus (kind/gentle) vs. malignus (evil-born) — good-natured vs. evil-natured",
    "example": "Lipoma (benign fat tumor) vs. liposarcoma (malignant fat tumor); fibroadenoma (benign breast) vs. invasive ductal carcinoma (malignant)"
  },
  {
    "id": "onco-remission",
    "term": "Remission / Relapse",
    "module": 4,
    "category": "oncology",
    "objective": "Recognize terms related to oncological diagnosis and prognosis",
    "definition": "Remission: decrease/disappearance of cancer signs and symptoms (complete remission = no detectable disease; partial = 50% reduction). Relapse/Recurrence: return of cancer after remission",
    "etymology": "Latin: remissio (sending back, slackening) + relabi (to slip back) — cancer retreating then returning",
    "example": "5-year survival rate measures the proportion of patients in remission at 5 years; relapse after BMT has a poor prognosis"
  },
  {
    "id": "le-hipaa",
    "term": "HIPAA",
    "module": 4,
    "category": "legal-ethical",
    "objective": "Identify medical terminologies related to legal/ethical aspects",
    "definition": "Health Insurance Portability and Accountability Act (1996) — federal law establishing national standards for protecting patient health information and ensuring insurance portability",
    "etymology": "Acronym: Health Insurance Portability and Accountability Act — enacted August 21, 1996 by Congress",
    "example": "HIPAA requires healthcare entities to provide patients a Notice of Privacy Practices and obtain authorization before releasing PHI"
  },
  {
    "id": "le-phi",
    "term": "PHI — Protected Health Information",
    "module": 4,
    "category": "legal-ethical",
    "objective": "Describe health information management laws and regulations",
    "definition": "Any individually identifiable health information created, received, or maintained by covered entities — includes 18 identifiers such as name, DOB, SSN, diagnoses, and treatment records",
    "etymology": "Protected (shielded from disclosure) + Health Information — health data that must be protected by HIPAA",
    "example": "Texting a patient's diagnosis to an unauthorized person is a HIPAA PHI breach; de-identified data (all 18 identifiers removed) is not PHI"
  },
  {
    "id": "le-privacy",
    "term": "HIPAA Privacy Rule",
    "module": 4,
    "category": "legal-ethical",
    "objective": "Describe health information management laws and regulations",
    "definition": "HIPAA rule establishing patients' rights to control their PHI: right to access records, request amendments, receive an accounting of disclosures, and restrict certain uses",
    "etymology": "Privacy (Latin: privatus — personal, private) + Rule — the regulation governing private health data",
    "example": "A patient requests their medical records under the Privacy Rule; the covered entity must provide them within 30 days"
  },
  {
    "id": "le-security",
    "term": "HIPAA Security Rule",
    "module": 4,
    "category": "legal-ethical",
    "objective": "Describe health information management laws and regulations",
    "definition": "HIPAA rule requiring covered entities to implement administrative, physical, and technical safeguards to protect electronic PHI (ePHI) from unauthorized access",
    "etymology": "Security (Latin: securitas — freedom from danger) + Rule — safeguards for electronic records",
    "example": "Technical safeguards include access controls (unique user IDs), encryption, and audit logs; physical safeguards include locked workstations"
  },
  {
    "id": "le-breach",
    "term": "Breach Notification Rule",
    "module": 4,
    "category": "legal-ethical",
    "objective": "Describe health information management laws and regulations",
    "definition": "HIPAA requirement to notify patients, HHS, and (for large breaches) media within specified timeframes after a PHI breach — unauthorized acquisition, access, use, or disclosure",
    "etymology": "Breach (Old French: breche — gap, break) — a break in the security/privacy of PHI",
    "example": "A breach affecting 500+ patients must be reported to HHS within 60 days and to the affected patients without unreasonable delay"
  },
  {
    "id": "le-icd10",
    "term": "ICD-10",
    "module": 4,
    "category": "legal-ethical",
    "objective": "Recognize ethical and privacy protocols of medical coding",
    "definition": "International Classification of Diseases, 10th Revision — standardized diagnostic coding system used globally for health records, insurance billing, and epidemiology",
    "etymology": "International Classification of Diseases — maintained by WHO; 10th revision implemented in US in 2015",
    "example": "ICD-10-CM code E11.65 = Type 2 diabetes mellitus with hyperglycemia; required for insurance reimbursement"
  },
  {
    "id": "le-cpt",
    "term": "CPT Codes",
    "module": 4,
    "category": "legal-ethical",
    "objective": "Recognize ethical and privacy protocols of medical coding",
    "definition": "Current Procedural Terminology — AMA-maintained 5-digit codes for medical procedures and services used in billing; different from ICD-10 diagnostic codes",
    "etymology": "Current Procedural Terminology — published by the American Medical Association (AMA) since 1966",
    "example": "CPT 99213 = established patient office visit, low complexity; CPT 93000 = 12-lead ECG with interpretation"
  },
  {
    "id": "le-ehr",
    "term": "EHR / EMR",
    "module": 4,
    "category": "legal-ethical",
    "objective": "Describe health information management laws and regulations",
    "definition": "Electronic Health Record (EHR) / Electronic Medical Record (EMR) — digital patient records; EHR is shareable across providers, EMR is a single practice's records",
    "etymology": "Electronic (Greek: elektron) + Health/Medical + Record (Latin: recordari — to call to mind)",
    "example": "EHR systems (Epic, Cerner) must meet HIPAA security requirements; meaningful use incentives promoted EHR adoption"
  },
  {
    "id": "le-covered",
    "term": "Covered Entity",
    "module": 4,
    "category": "legal-ethical",
    "objective": "Describe health information management laws and regulations",
    "definition": "HIPAA-defined organizations subject to HIPAA rules: healthcare providers (hospitals, clinics, physicians), health plans (insurance), and healthcare clearinghouses",
    "etymology": "Covered (shielded, bound by) + Entity (Latin: entitas — being) — organizations covered/bound by HIPAA",
    "example": "A physician's office is a covered entity; their billing company (business associate) also has HIPAA obligations under a BAA"
  },
  {
    "id": "le-minreq",
    "term": "Minimum Necessary Standard",
    "module": 4,
    "category": "legal-ethical",
    "objective": "Recognize ethical and privacy protocols of medical coding",
    "definition": "HIPAA Privacy Rule requirement to use, disclose, or request only the minimum amount of PHI necessary to accomplish the intended purpose",
    "etymology": "Minimum (Latin: smallest) + Necessary — only what is strictly required",
    "example": "A medical coder should access only the patient records needed to code the specific claim, not full charts for all patients"
  },
  {
    "id": "le-him",
    "term": "Health Information Management (HIM)",
    "module": 4,
    "category": "legal-ethical",
    "objective": "Describe health information management laws and regulations",
    "definition": "The practice of acquiring, analyzing, and protecting digital and traditional medical information to ensure data quality and legal compliance",
    "etymology": "Health + Information (Latin: informare — to give form to) + Management",
    "example": "AHIMA (American Health Information Management Association) is the professional body for HIM; RHIA = Registered Health Information Administrator credential"
  }
]

export const MED_TERM_CATEGORIES = [
  { id: 'prefix',        label: 'Prefixes',           emoji: '⬅️',  desc: 'Word beginnings that modify meaning' },
  { id: 'suffix',        label: 'Suffixes',           emoji: '➡️',  desc: 'Word endings that define type or condition' },
  { id: 'root',          label: 'Root Words',         emoji: '🌱',  desc: 'Core meaning — usually the body part or action' },
  { id: 'body-system',   label: 'Body Systems',       emoji: '🫀',  desc: 'Organ systems and anatomical terms' },
  { id: 'disease',       label: 'Diseases',           emoji: '🦠',  desc: 'Pathological conditions and disorders' },
  { id: 'procedure',     label: 'Procedures',         emoji: '🔬',  desc: 'Diagnostic and treatment procedures' },
  { id: 'pregnancy',     label: 'Pregnancy & OB',     emoji: '🤰',  desc: 'Obstetrics and reproductive terminology' },
  { id: 'mental-health', label: 'Mental Health',      emoji: '🧠',  desc: 'Psychiatry and behavioral health terms' },
  { id: 'pharmacology',  label: 'Pharmacology',       emoji: '💊',  desc: 'Drug terminology, classes, and actions' },
  { id: 'oncology',      label: 'Oncology',           emoji: '🎗️',  desc: 'Cancer terminology and staging' },
  { id: 'legal-ethical', label: 'Legal & Ethical',   emoji: '⚖️',  desc: 'Healthcare law, ethics, and compliance' },
] as const
