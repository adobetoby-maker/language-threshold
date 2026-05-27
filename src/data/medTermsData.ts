export interface MedTerm {
  id: string
  term: string
  category: string
  definition: string
  etymology: string
  example: string
  module: number
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
  },
  {
    "id": "bp-blood-pressure",
    "term": "BP",
    "category": "abbreviation",
    "definition": "Blood pressure; the force of blood against arterial walls, measured in mmHg with systolic/diastolic readings",
    "etymology": "Abbreviation from English: Blood Pressure",
    "example": "BP 120/80 mmHg indicates normal blood pressure in adults",
    "module": 5
  },
  {
    "id": "hr-heart-rate",
    "term": "HR",
    "category": "abbreviation",
    "definition": "Heart rate; the number of heartbeats per minute, normal range 60-100 bpm at rest",
    "etymology": "Abbreviation from English: Heart Rate",
    "example": "HR 72 bpm indicates normal resting heart rate",
    "module": 5
  },
  {
    "id": "rr-respiratory-rate",
    "term": "RR",
    "category": "abbreviation",
    "definition": "Respiratory rate; the number of breaths per minute, normal range 12-20 breaths/min in adults",
    "etymology": "Abbreviation from English: Respiratory Rate",
    "example": "RR 16 breaths/min documented on vital signs",
    "module": 5
  },
  {
    "id": "spo2-oxygen-saturation",
    "term": "SpO2",
    "category": "abbreviation",
    "definition": "Oxygen saturation; the percentage of hemoglobin saturated with oxygen, normal range 95-100%",
    "etymology": "From Latin 'saturatio' (saturation) and oxygen",
    "example": "SpO2 98% on room air indicates adequate oxygenation",
    "module": 5
  },
  {
    "id": "temp-temperature",
    "term": "Temp",
    "category": "abbreviation",
    "definition": "Temperature; body core temperature measured in Celsius or Fahrenheit, normal 37°C or 98.6°F",
    "etymology": "Abbreviation from Latin 'temperatura'",
    "example": "Temp 98.8°F taken orally",
    "module": 5
  },
  {
    "id": "prn-as-needed",
    "term": "PRN",
    "category": "abbreviation",
    "definition": "As needed; medication or treatment administered when patient requires it rather than on a fixed schedule",
    "etymology": "From Latin 'pro re nata' (according to the thing needed)",
    "example": "Ibuprofen 400 mg PRN for headache",
    "module": 5
  },
  {
    "id": "bid-twice-daily",
    "term": "BID",
    "category": "abbreviation",
    "definition": "Twice daily; medication or treatment administered two times per day",
    "etymology": "From Latin 'bis in die' (twice in a day)",
    "example": "Amoxicillin 500 mg BID for 10 days",
    "module": 5
  },
  {
    "id": "tid-three-times-daily",
    "term": "TID",
    "category": "abbreviation",
    "definition": "Three times daily; medication or treatment administered three times per day",
    "etymology": "From Latin 'ter in die' (three times in a day)",
    "example": "Metformin 500 mg TID with meals",
    "module": 5
  },
  {
    "id": "qid-four-times-daily",
    "term": "QID",
    "category": "abbreviation",
    "definition": "Four times daily; medication or treatment administered four times per day",
    "etymology": "From Latin 'quater in die' (four times in a day)",
    "example": "Acetaminophen 650 mg QID for pain management",
    "module": 5
  },
  {
    "id": "qd-once-daily",
    "term": "QD",
    "category": "abbreviation",
    "definition": "Once daily; medication or treatment administered one time per day (often written as 'daily' to avoid confusion)",
    "etymology": "From Latin 'quaque die' (every day)",
    "example": "Lisinopril 10 mg QD in the morning",
    "module": 5
  },
  {
    "id": "qh-every-hour",
    "term": "QH",
    "category": "abbreviation",
    "definition": "Every hour; medication or treatment administered hourly",
    "etymology": "From Latin 'quaque hora' (every hour)",
    "example": "Vital signs monitored QH after surgery",
    "module": 5
  },
  {
    "id": "npo-nothing-by-mouth",
    "term": "NPO",
    "category": "abbreviation",
    "definition": "Nothing by mouth; patient instructed to consume no food, fluids, or medications orally, typically before procedures",
    "etymology": "From Latin 'nil per os' (nothing by mouth)",
    "example": "NPO after midnight prior to surgery",
    "module": 5
  },
  {
    "id": "pc-after-meals",
    "term": "PC",
    "category": "abbreviation",
    "definition": "After meals; medication or treatment administered following food consumption",
    "etymology": "From Latin 'post cibum' (after food)",
    "example": "Metformin 500 mg PC with breakfast, lunch, and dinner",
    "module": 5
  },
  {
    "id": "ac-before-meals",
    "term": "AC",
    "category": "abbreviation",
    "definition": "Before meals; medication or treatment administered prior to food consumption",
    "etymology": "From Latin 'ante cibum' (before food)",
    "example": "Check blood glucose AC breakfast",
    "module": 5
  },
  {
    "id": "hs-bedtime",
    "term": "HS",
    "category": "abbreviation",
    "definition": "At bedtime; medication or treatment administered at night before sleep",
    "etymology": "From Latin 'hora somni' (at the hour of sleep)",
    "example": "Loratadine 10 mg HS for allergies",
    "module": 5
  },
  {
    "id": "stat-immediately",
    "term": "STAT",
    "category": "abbreviation",
    "definition": "Immediately; medication or treatment administered with highest priority without delay",
    "etymology": "From Latin 'statim' (immediately)",
    "example": "Epinephrine 0.3 mg IM STAT for anaphylaxis",
    "module": 5
  },
  {
    "id": "mi-myocardial-infarction",
    "term": "MI",
    "category": "abbreviation",
    "definition": "Myocardial infarction; acute necrosis of heart muscle due to coronary artery occlusion, commonly known as a heart attack",
    "etymology": "From Latin 'myocardium' (heart muscle) and 'infarctus' (stuffed in)",
    "example": "Patient presented with acute anterior wall MI",
    "module": 5
  },
  {
    "id": "cva-cerebrovascular-accident",
    "term": "CVA",
    "category": "abbreviation",
    "definition": "Cerebrovascular accident; acute interruption of cerebral blood flow resulting in neurological deficit, commonly called a stroke",
    "etymology": "From Latin 'cerebrum' (brain) and 'vascular' (blood vessels)",
    "example": "Right sided CVA with speech difficulties",
    "module": 5
  },
  {
    "id": "dm-diabetes-mellitus",
    "term": "DM",
    "category": "abbreviation",
    "definition": "Diabetes mellitus; chronic metabolic disorder characterized by elevated blood glucose due to insufficient insulin production or utilization",
    "etymology": "From Greek 'diabetes' (passing through) and Latin 'mellitus' (sweet)",
    "example": "Type 2 DM managed with metformin",
    "module": 5
  },
  {
    "id": "htn-hypertension",
    "term": "HTN",
    "category": "abbreviation",
    "definition": "Hypertension; persistently elevated blood pressure, typically defined as systolic ≥140 mmHg or diastolic ≥90 mmHg",
    "etymology": "From Greek 'hyper' (above) and Latin 'tensio' (tension)",
    "example": "Essential HTN treated with lisinopril",
    "module": 5
  },
  {
    "id": "copd-chronic-obstructive-pulmonary-disease",
    "term": "COPD",
    "category": "abbreviation",
    "definition": "Chronic obstructive pulmonary disease; progressive lung disease characterized by persistent airflow limitation and inflammation",
    "etymology": "From Greek 'chronos' (time) and Latin components",
    "example": "COPD exacerbation treated with corticosteroids and bronchodilators",
    "module": 5
  },
  {
    "id": "cbc-complete-blood-count",
    "term": "CBC",
    "category": "abbreviation",
    "definition": "Complete blood count; laboratory test measuring red blood cells, white blood cells, hemoglobin, hematocrit, and platelets",
    "etymology": "From English component words",
    "example": "CBC shows WBC 7.2 K/uL, indicating normal white blood cell count",
    "module": 5
  },
  {
    "id": "bmp-basic-metabolic-panel",
    "term": "BMP",
    "category": "abbreviation",
    "definition": "Basic metabolic panel; laboratory test measuring electrolytes, kidney function, glucose, and acid-base status",
    "etymology": "From English component words",
    "example": "BMP reveals potassium 3.8 mEq/L and creatinine 1.2 mg/dL",
    "module": 5
  },
  {
    "id": "lfts-liver-function-tests",
    "term": "LFTs",
    "category": "abbreviation",
    "definition": "Liver function tests; laboratory tests measuring hepatic enzymes and markers including ALT, AST, ALP, and bilirubin",
    "etymology": "From English component words",
    "example": "LFTs normal with ALT 28 U/L and AST 32 U/L",
    "module": 5
  },
  {
    "id": "hpi-history-present-illness",
    "term": "HPI",
    "category": "abbreviation",
    "definition": "History of present illness; documentation of patient's current symptoms, onset, duration, severity, and associated findings",
    "etymology": "From English component words",
    "example": "HPI documents patient presenting with chest pain for 3 hours",
    "module": 5
  },
  {
    "id": "pmh-past-medical-history",
    "term": "PMH",
    "category": "abbreviation",
    "definition": "Past Medical History; a record of all significant illnesses, surgeries, and medical conditions a patient has experienced prior to the current visit",
    "etymology": "P (Past) + M (Medical) + H (History)",
    "example": "The PMH included diabetes, hypertension, and a cholecystectomy in 2015.",
    "module": 5
  },
  {
    "id": "ros-review-of-systems",
    "term": "ROS",
    "category": "abbreviation",
    "definition": "Review of Systems; a systematic, comprehensive evaluation of symptoms related to each organ system during patient assessment",
    "etymology": "R (Review) + O (Of) + S (Systems)",
    "example": "ROS was significant for cough and shortness of breath; negative for chest pain.",
    "module": 5
  },
  {
    "id": "meds-medications",
    "term": "Meds",
    "category": "abbreviation",
    "definition": "Medications; pharmacological agents prescribed or taken by a patient for therapeutic purposes",
    "etymology": "Med (Medication) + s (plural)",
    "example": "Current meds include lisinopril 10 mg daily and metformin 1000 mg BID.",
    "module": 5
  },
  {
    "id": "a-a-or-assessment-and-plan",
    "term": "A/P",
    "category": "abbreviation",
    "definition": "Assessment and Plan; the clinical impression and treatment strategy documented after patient evaluation",
    "etymology": "A (Assessment) + P (Plan)",
    "example": "A/P: 45-year-old with hypertension, plan to initiate antihypertensive therapy.",
    "module": 5
  },
  {
    "id": "sob-shortness-of-breath",
    "term": "SOB",
    "category": "abbreviation",
    "definition": "Shortness of Breath; a subjective feeling of difficulty breathing or dyspnea",
    "etymology": "S (Shortness) + O (Of) + B (Breath)",
    "example": "Patient presents with SOB x 3 days with exertion.",
    "module": 5
  },
  {
    "id": "cp-chest-pain",
    "term": "CP",
    "category": "abbreviation",
    "definition": "Chest Pain; discomfort or pain in the thoracic region that may indicate various cardiac or pulmonary conditions",
    "etymology": "C (Chest) + P (Pain)",
    "example": "CP began acutely this morning; EKG ordered to rule out MI.",
    "module": 5
  },
  {
    "id": "abd-abdomen",
    "term": "Abd",
    "category": "abbreviation",
    "definition": "Abdomen; the region of the body between the thorax and pelvis containing digestive and other organs",
    "etymology": "Abd (Abdomen) - Latin root",
    "example": "Abd exam: soft, non-tender, no guarding or rebound.",
    "module": 5
  },
  {
    "id": "hx-history",
    "term": "Hx",
    "category": "abbreviation",
    "definition": "History; a record of a patient's past medical events, symptoms, or conditions",
    "etymology": "H (History) + x (Latin symbol for history)",
    "example": "Significant Hx of smoking and COPD.",
    "module": 5
  },
  {
    "id": "sx-symptoms",
    "term": "Sx",
    "category": "abbreviation",
    "definition": "Symptoms; subjective experiences or complaints reported by a patient indicating disease or illness",
    "etymology": "S (Symptoms) + x (symbol)",
    "example": "Sx include fever, cough, and malaise for one week.",
    "module": 5
  },
  {
    "id": "signs-objective-findings",
    "term": "Signs",
    "category": "abbreviation",
    "definition": "Clinical signs; objective physical findings detected during examination that indicate disease",
    "etymology": "Sign (Latin signum) - observable manifestation",
    "example": "Signs include elevated BP 160/95, tachycardia at 110, and crackles on lung auscultation.",
    "module": 5
  },
  {
    "id": "hct-hematocrit",
    "term": "HCT",
    "category": "abbreviation",
    "definition": "Hematocrit; the percentage of red blood cells in total blood volume, measured to assess for anemia or polycythemia",
    "etymology": "Hemat (blood) + crit (centrifuge)",
    "example": "HCT is 35%, indicating mild anemia.",
    "module": 5
  },
  {
    "id": "hgb-hemoglobin",
    "term": "Hgb",
    "category": "abbreviation",
    "definition": "Hemoglobin; the iron-containing protein in red blood cells that carries oxygen throughout the body",
    "etymology": "Hemat (blood) + globin (protein)",
    "example": "Hgb level is 10.2 g/dL, consistent with mild anemia.",
    "module": 5
  },
  {
    "id": "wbc-white-blood-cells",
    "term": "WBC",
    "category": "abbreviation",
    "definition": "White Blood Cells; immune cells that protect the body from infection; elevated levels may indicate infection or disease",
    "etymology": "W (White) + B (Blood) + C (Cells)",
    "example": "WBC count is 12,500, slightly elevated, suggesting possible infection.",
    "module": 5
  },
  {
    "id": "plt-platelets",
    "term": "Plt",
    "category": "abbreviation",
    "definition": "Platelets; cell fragments involved in blood clotting; measured to assess coagulation risk",
    "etymology": "Plat (plate-like) + let (small)",
    "example": "Plt count is 450,000, within normal limits.",
    "module": 5
  },
  {
    "id": "inr-international-normalized-ratio",
    "term": "INR",
    "category": "abbreviation",
    "definition": "International Normalized Ratio; standardized measurement of blood clotting time used to monitor warfarin therapy",
    "etymology": "I (International) + N (Normalized) + R (Ratio)",
    "example": "INR is 2.5, indicating appropriate anticoagulation on warfarin.",
    "module": 5
  },
  {
    "id": "ptt-partial-thromboplastin-time",
    "term": "PTT",
    "category": "abbreviation",
    "definition": "Partial Thromboplastin Time; a blood test measuring how long it takes blood to clot; used to monitor heparin therapy",
    "etymology": "P (Partial) + T (Thromboplastin) + T (Time)",
    "example": "PTT is prolonged at 42 seconds, consistent with heparin administration.",
    "module": 5
  },
  {
    "id": "bun-blood-urea-nitrogen",
    "term": "BUN",
    "category": "abbreviation",
    "definition": "Blood Urea Nitrogen; a measure of kidney function and protein metabolism; elevated levels may indicate renal dysfunction",
    "etymology": "B (Blood) + U (Urea) + N (Nitrogen)",
    "example": "BUN is 28 mg/dL with creatinine of 1.8, indicating acute kidney injury.",
    "module": 5
  },
  {
    "id": "cr-creatinine",
    "term": "Cr",
    "category": "abbreviation",
    "definition": "Creatinine; a waste product filtered by kidneys; used to assess renal function and estimate glomerular filtration rate",
    "etymology": "Cr (Creatinine) - chemical symbol",
    "example": "Cr is elevated at 2.2 mg/dL, suggesting worsening kidney function.",
    "module": 5
  },
  {
    "id": "gfr-glomerular-filtration-rate",
    "term": "GFR",
    "category": "abbreviation",
    "definition": "Glomerular Filtration Rate; a measure of kidney function indicating how much blood the kidneys filter per minute",
    "etymology": "G (Glomerular) + F (Filtration) + R (Rate)",
    "example": "GFR is 35 mL/min/1.73m², indicating Stage 3B chronic kidney disease.",
    "module": 5
  },
  {
    "id": "ast-aspartate-aminotransferase",
    "term": "AST",
    "category": "abbreviation",
    "definition": "Aspartate Aminotransferase; a liver enzyme used to assess liver function and detect hepatocellular damage",
    "etymology": "Aspartate + Amino + Transferase (enzyme)",
    "example": "AST is 85 U/L, elevated, consistent with hepatitis.",
    "module": 5
  },
  {
    "id": "alt-alanine-aminotransferase",
    "term": "ALT",
    "category": "abbreviation",
    "definition": "Alanine Aminotransferase; a liver enzyme more specific to liver damage than AST; used in LFTs",
    "etymology": "Alanine + Amino + Transferase (enzyme)",
    "example": "ALT is 120 U/L, indicating acute liver injury.",
    "module": 5
  },
  {
    "id": "alp-alkaline-phosphatase",
    "term": "ALP",
    "category": "abbreviation",
    "definition": "Alkaline Phosphatase; an enzyme found in liver and bones; elevated in biliary obstruction or bone disease",
    "etymology": "Alkaline (basic pH) + Phosphatase (enzyme)",
    "example": "ALP is 320 U/L, suggesting possible biliary obstruction.",
    "module": 5
  },
  {
    "id": "tb-total-bilirubin",
    "term": "T.Bili or TB",
    "category": "abbreviation",
    "definition": "Total Bilirubin; a measure of total bilirubin in blood; elevated levels may indicate jaundice or liver disease",
    "etymology": "T (Total) + Bili (Bilirubin)",
    "example": "T.Bili is 3.2 mg/dL with direct bili of 2.1, indicating obstructive jaundice.",
    "module": 5
  },
  {
    "id": "alb-albumin",
    "term": "Alb",
    "category": "abbreviation",
    "definition": "Albumin; the primary protein synthesized by the liver; used to assess liver function and nutritional status",
    "etymology": "Alb (Albumin) - protein name",
    "example": "Alb is 3.0 g/dL, indicating malnutrition or liver disease.",
    "module": 5
  },
  {
    "id": "na-sodium",
    "term": "Na",
    "category": "abbreviation",
    "definition": "Sodium; an electrolyte essential for fluid balance and nerve function; measured in electrolyte panels",
    "etymology": "Na (Natrium) - Latin chemical symbol",
    "example": "Na is 138 mEq/L, within normal limits.",
    "module": 5
  },
  {
    "id": "k-potassium",
    "term": "K",
    "category": "abbreviation",
    "definition": "Potassium; an electrolyte critical for cardiac function and muscle contraction; abnormalities can cause arrhythmias",
    "etymology": "K (Kalium) - Latin chemical symbol",
    "example": "K is 5.8 mEq/L, elevated, requiring intervention to prevent arrhythmias.",
    "module": 5
  },
  {
    "id": "cl-chloride",
    "term": "Cl",
    "category": "abbreviation",
    "definition": "Chloride; an electrolyte measured in blood and urine to assess fluid balance and kidney function",
    "etymology": "From Greek 'chloros' meaning green, named for the color of chlorine gas",
    "example": "The patient's Cl level was 102 mEq/L, within normal range",
    "module": 5
  },
  {
    "id": "co2-carbon-dioxide",
    "term": "CO2",
    "category": "abbreviation",
    "definition": "Carbon dioxide; measured as bicarbonate in serum to assess acid-base balance and respiratory function",
    "etymology": "Chemical formula for carbon dioxide molecule",
    "example": "Arterial blood gas showed CO2 of 35 mmHg indicating respiratory acidosis",
    "module": 5
  },
  {
    "id": "mg-magnesium",
    "term": "Mg",
    "category": "abbreviation",
    "definition": "Magnesium; an electrolyte important for muscle and nerve function",
    "etymology": "From Magnesia, a region in Greece",
    "example": "The patient's Mg level was low at 1.8 mg/dL, requiring supplementation",
    "module": 5
  },
  {
    "id": "ca-calcium",
    "term": "Ca",
    "category": "abbreviation",
    "definition": "Calcium; measured in blood to assess bone health, nerve function, and muscle contraction",
    "etymology": "From Latin 'calx' meaning limestone",
    "example": "Serum calcium was 8.5 mg/dL, below normal range",
    "module": 5
  },
  {
    "id": "phos-phosphate",
    "term": "Phos",
    "category": "abbreviation",
    "definition": "Phosphate; an electrolyte that works with calcium for bone health",
    "etymology": "From Greek 'phosphoros' meaning light-bearing",
    "example": "Phosphate level was elevated at 4.8 mg/dL in the patient with renal failure",
    "module": 5
  },
  {
    "id": "glucose-blood-sugar",
    "term": "Glucose",
    "category": "abbreviation",
    "definition": "Blood sugar level; primary measure of carbohydrate metabolism and diabetes monitoring",
    "etymology": "From Greek 'glukus' meaning sweet",
    "example": "Fasting glucose was 126 mg/dL, diagnostic for diabetes mellitus",
    "module": 5
  },
  {
    "id": "a1c-hemoglobin-a1c",
    "term": "A1C",
    "category": "abbreviation",
    "definition": "Hemoglobin A1C; glycated hemoglobin reflecting average blood glucose over 2-3 months",
    "etymology": "Refers to the A1C form of hemoglobin with attached glucose",
    "example": "Patient's A1C was 8.2%, indicating suboptimal diabetes control",
    "module": 5
  },
  {
    "id": "lipid-panel",
    "term": "Lipid Panel",
    "category": "abbreviation",
    "definition": "Laboratory test measuring cholesterol, triglycerides, HDL, and LDL for cardiovascular risk assessment",
    "etymology": "Lipid from Greek 'lipos' meaning fat",
    "example": "Lipid panel showed total cholesterol 240 mg/dL with elevated LDL",
    "module": 5
  },
  {
    "id": "tsh-thyroid-stimulating-hormone",
    "term": "TSH",
    "category": "abbreviation",
    "definition": "Thyroid-stimulating hormone; primary screening test for thyroid dysfunction",
    "etymology": "Stimulating hormone produced by anterior pituitary gland",
    "example": "TSH was elevated at 8.5 mIU/L, suggesting hypothyroidism",
    "module": 5
  },
  {
    "id": "t4-thyroxine",
    "term": "T4",
    "category": "abbreviation",
    "definition": "Thyroxine; thyroid hormone with four iodine atoms, used to assess thyroid function",
    "etymology": "Named for chemical structure containing four iodine atoms",
    "example": "Free T4 was low at 0.6 ng/dL in hypothyroid patient",
    "module": 5
  },
  {
    "id": "pt-prothrombin-time",
    "term": "PT",
    "category": "abbreviation",
    "definition": "Prothrombin time; coagulation test measuring extrinsic pathway and warfarin therapy monitoring",
    "etymology": "Prothrombin is clotting factor II",
    "example": "PT was prolonged at 18 seconds in patient on warfarin",
    "module": 5
  },
  {
    "id": "aptt-activated-partial-thromboplastin-time",
    "term": "aPTT",
    "category": "abbreviation",
    "definition": "Activated partial thromboplastin time; coagulation test monitoring heparin therapy",
    "etymology": "Partial thromboplastin is reagent used in test",
    "example": "aPTT was 65 seconds, therapeutic for heparin infusion",
    "module": 5
  },
  {
    "id": "ekg-electrocardiogram",
    "term": "EKG",
    "category": "abbreviation",
    "definition": "Electrocardiogram; electrical recording of heart activity to diagnose cardiac arrhythmias and ischemia",
    "etymology": "From German 'elektrokardiogram'",
    "example": "EKG showed ST segment elevation indicating acute myocardial infarction",
    "module": 5
  },
  {
    "id": "echo-echocardiogram",
    "term": "Echo",
    "category": "abbreviation",
    "definition": "Echocardiogram; ultrasound of heart assessing structure, function, and valves",
    "etymology": "From 'echo' (sound waves) and 'cardia' (heart)",
    "example": "Transthoracic echo showed ejection fraction of 35% consistent with heart failure",
    "module": 5
  },
  {
    "id": "chest-x-ray",
    "term": "CXR",
    "category": "abbreviation",
    "definition": "Chest X-ray; radiographic imaging of thorax for pulmonary and cardiac pathology",
    "etymology": "Abbreviation for chest radiograph or roentgenogram",
    "example": "CXR revealed infiltrates in left lower lobe consistent with pneumonia",
    "module": 5
  },
  {
    "id": "ct-computed-tomography",
    "term": "CT",
    "category": "abbreviation",
    "definition": "Computed tomography; cross-sectional imaging using X-rays to create detailed body images",
    "etymology": "From Latin 'computus' (calculation) and Greek 'tomos' (slice)",
    "example": "CT abdomen/pelvis was ordered to evaluate acute abdominal pain",
    "module": 5
  },
  {
    "id": "mri-magnetic-resonance-imaging",
    "term": "MRI",
    "category": "abbreviation",
    "definition": "Magnetic resonance imaging; imaging using magnetic fields and radio waves without radiation",
    "etymology": "From magnetic resonance principle and imaging technique",
    "example": "Brain MRI with contrast showed no acute findings for stroke",
    "module": 5
  },
  {
    "id": "us-ultrasound",
    "term": "US",
    "category": "abbreviation",
    "definition": "Ultrasound; imaging using sound waves to visualize soft tissues and organs",
    "etymology": "From 'ultra' (beyond) and sound frequency above human hearing",
    "example": "Pelvic ultrasound confirmed intrauterine pregnancy at 8 weeks",
    "module": 5
  },
  {
    "id": "ua-urinalysis",
    "term": "UA",
    "category": "abbreviation",
    "definition": "Urinalysis; examination of urine for cells, bacteria, glucose, and protein",
    "etymology": "From urine and analysis",
    "example": "UA showed 2+ proteinuria and WBCs suspicious for urinary tract infection",
    "module": 5
  },
  {
    "id": "uti-urinary-tract-infection",
    "term": "UTI",
    "category": "abbreviation",
    "definition": "Urinary tract infection; bacterial infection of bladder, urethra, or kidneys",
    "etymology": "From urinary tract and infection",
    "example": "Patient presented with dysuria and was diagnosed with uncomplicated UTI",
    "module": 5
  },
  {
    "id": "vre-vancomycin-resistant-enterococcus",
    "term": "VRE",
    "category": "abbreviation",
    "definition": "Vancomycin-resistant enterococcus; antibiotic-resistant bacterium requiring contact precautions",
    "etymology": "Named for resistance pattern and bacterial genus",
    "example": "Patient was isolated due to positive VRE colonization",
    "module": 5
  },
  {
    "id": "mrsa-methicillin-resistant-staph-aureus",
    "term": "MRSA",
    "category": "abbreviation",
    "definition": "Methicillin-resistant Staphylococcus aureus; antibiotic-resistant skin and soft tissue pathogen",
    "etymology": "Named for resistance to methicillin antibiotic",
    "example": "Wound culture grew MRSA requiring doxycycline or vancomycin therapy",
    "module": 5
  },
  {
    "id": "c-diff-clostridium-difficile",
    "term": "C. diff",
    "category": "abbreviation",
    "definition": "Clostridium difficile; toxin-producing bacterium causing antibiotic-associated diarrhea",
    "etymology": "From bacterial species name",
    "example": "Patient developed C. difficile colitis after prolonged antibiotic therapy",
    "module": 5
  },
  {
    "id": "hiv-human-immunodeficiency-virus",
    "term": "HIV",
    "category": "abbreviation",
    "definition": "Human immunodeficiency virus; retrovirus causing AIDS and immunosuppression",
    "etymology": "Named for virus structure and target of immune cells",
    "example": "HIV antibody test was positive, requiring initiation of antiretroviral therapy",
    "module": 5
  },
  {
    "id": "aids-acquired-immunodeficiency-syndrome",
    "term": "AIDS",
    "category": "abbreviation",
    "definition": "Acquired immunodeficiency syndrome; advanced stage of HIV with CD4 count <200 cells/mm3",
    "etymology": "From acquired nature and immunological deficiency",
    "example": "Patient presented with AIDS-defining illness of Pneumocystis pneumonia",
    "module": 5
  },
  {
    "id": "hiv-med-antiretroviral-therapy",
    "term": "ART",
    "category": "abbreviation",
    "definition": "Antiretroviral therapy; combination drug regimen treating HIV infection",
    "etymology": "From antiretroviral (against retrovirus) and therapy",
    "example": "Patient was started on triple ART with excellent CD4 recovery",
    "module": 5
  },
  {
    "id": "hbsag-hepatitis-b-surface-antigen",
    "term": "HBsAg",
    "category": "abbreviation",
    "definition": "Hepatitis B surface antigen; a protein on the surface of hepatitis B virus used to detect current or past HBV infection",
    "etymology": "Hepatitis B surface antigen",
    "example": "Patient's HBsAg came back positive, indicating active hepatitis B infection",
    "module": 5
  },
  {
    "id": "vdrl-venereal-disease-research-laboratory",
    "term": "VDRL",
    "category": "abbreviation",
    "definition": "Venereal Disease Research Laboratory; a nontreponemal screening test for syphilis",
    "etymology": "Venereal Disease Research Laboratory",
    "example": "The patient's VDRL was reactive, so an FTA-ABS was ordered for confirmation",
    "module": 5
  },
  {
    "id": "hba1c-glycated-hemoglobin",
    "term": "HbA1c",
    "category": "abbreviation",
    "definition": "Glycated hemoglobin; indicates average blood glucose levels over 2-3 months; target <7% for most diabetics",
    "etymology": "Hemoglobin A1c",
    "example": "Patient's HbA1c improved to 6.8% after medication adjustment",
    "module": 5
  },
  {
    "id": "bps-beats-per-second",
    "term": "bpm",
    "category": "abbreviation",
    "definition": "Beats per minute; unit of measurement for heart rate; normal resting range 60-100 bpm",
    "etymology": "Beats per minute",
    "example": "Patient's heart rate was 88 bpm and regular",
    "module": 5
  },
  {
    "id": "mmhg-millimeters-mercury",
    "term": "mmHg",
    "category": "abbreviation",
    "definition": "Millimeters of mercury; unit of measurement for blood pressure and other pressures in the body",
    "etymology": "Millimeters of mercury",
    "example": "Blood pressure reading was 138/86 mmHg",
    "module": 5
  },
  {
    "id": "anterior-direction",
    "term": "Anterior",
    "category": "anatomy",
    "definition": "Toward the front or ventral surface of the body; in front of another structure",
    "etymology": "Latin 'anterior' meaning 'before' or 'in front'",
    "example": "The sternum is anterior to the heart.",
    "module": 6
  },
  {
    "id": "posterior-direction",
    "term": "Posterior",
    "category": "anatomy",
    "definition": "Toward the back or dorsal surface of the body; behind another structure",
    "etymology": "Latin 'posterior' meaning 'behind' or 'at the back'",
    "example": "The spinal cord is posterior to the vertebral body.",
    "module": 6
  },
  {
    "id": "superior-direction",
    "term": "Superior",
    "category": "anatomy",
    "definition": "Toward the head or upper end of the body; above another structure",
    "etymology": "Latin 'superior' meaning 'higher' or 'upper'",
    "example": "The pituitary gland is superior to the sella turcica.",
    "module": 6
  },
  {
    "id": "inferior-direction",
    "term": "Inferior",
    "category": "anatomy",
    "definition": "Toward the feet or lower end of the body; below another structure",
    "etymology": "Latin 'inferior' meaning 'lower' or 'beneath'",
    "example": "The stomach is inferior to the diaphragm.",
    "module": 6
  },
  {
    "id": "medial-direction",
    "term": "Medial",
    "category": "anatomy",
    "definition": "Toward the midline of the body; closer to the median plane",
    "etymology": "Latin 'medialis' meaning 'middle' or 'toward the middle'",
    "example": "The great toe is medial to the little toe.",
    "module": 6
  },
  {
    "id": "lateral-direction",
    "term": "Lateral",
    "category": "anatomy",
    "definition": "Away from the midline of the body; toward the side",
    "etymology": "Latin 'lateralis' meaning 'to the side'",
    "example": "The ears are lateral to the nose.",
    "module": 6
  },
  {
    "id": "proximal-direction",
    "term": "Proximal",
    "category": "anatomy",
    "definition": "Closer to the point of origin or attachment; closer to the trunk",
    "etymology": "Latin 'proximalis' meaning 'nearest'",
    "example": "The elbow is proximal to the wrist.",
    "module": 6
  },
  {
    "id": "distal-direction",
    "term": "Distal",
    "category": "anatomy",
    "definition": "Farther from the point of origin or attachment; away from the trunk",
    "etymology": "Latin 'distalis' meaning 'distant' or 'far'",
    "example": "The fingers are distal to the elbow.",
    "module": 6
  },
  {
    "id": "superficial-direction",
    "term": "Superficial",
    "category": "anatomy",
    "definition": "Toward the body surface; more external or closer to the skin",
    "etymology": "Latin 'superficialis' meaning 'of the surface'",
    "example": "Skin is superficial to muscle tissue.",
    "module": 6
  },
  {
    "id": "deep-direction",
    "term": "Deep",
    "category": "anatomy",
    "definition": "Away from the body surface; more internal or toward the interior",
    "etymology": "Old English 'deop' meaning 'extending far down'",
    "example": "Bone is deep to muscle.",
    "module": 6
  },
  {
    "id": "sagittal-plane",
    "term": "Sagittal Plane",
    "category": "anatomy",
    "definition": "A vertical plane dividing the body into right and left portions; the midsagittal plane divides into equal halves",
    "etymology": "Latin 'sagittalis' from 'sagitta' meaning 'arrow', describing a vertical line",
    "example": "A sagittal CT scan shows anterior-posterior body structures.",
    "module": 6
  },
  {
    "id": "coronal-plane",
    "term": "Coronal Plane (Frontal Plane)",
    "category": "anatomy",
    "definition": "A vertical plane dividing the body into anterior and posterior portions; perpendicular to the sagittal plane",
    "etymology": "Latin 'coronalis' from 'corona' meaning 'crown', as it runs across the crown of the head",
    "example": "Coronal MRI images show left-right body anatomy.",
    "module": 6
  },
  {
    "id": "transverse-plane",
    "term": "Transverse Plane (Horizontal Plane)",
    "category": "anatomy",
    "definition": "A horizontal plane dividing the body into superior and inferior portions; perpendicular to both sagittal and coronal planes",
    "etymology": "Latin 'transversus' meaning 'lying across'",
    "example": "Transverse ultrasound images show horizontal cross-sections of organs.",
    "module": 6
  },
  {
    "id": "frontal-plane",
    "term": "Frontal Plane",
    "category": "anatomy",
    "definition": "Another term for coronal plane; divides the body into anterior and posterior sections",
    "etymology": "Latin 'frontalis' from 'frons' meaning 'forehead' or 'front'",
    "example": "Frontal X-rays show anterior-posterior chest anatomy.",
    "module": 6
  },
  {
    "id": "horizontal-plane",
    "term": "Horizontal Plane",
    "category": "anatomy",
    "definition": "Another term for transverse plane; runs parallel to the ground when body is upright",
    "etymology": "Latin 'horizontalis' from 'horizont' meaning 'bounding circle'",
    "example": "Horizontal sections of the brain are viewed on axial CT scans.",
    "module": 6
  },
  {
    "id": "prone-position",
    "term": "Prone Position",
    "category": "anatomy",
    "definition": "Body position lying face-down with anterior surface downward; palms facing down",
    "etymology": "Latin 'pronus' meaning 'bending forward' or 'lying face-down'",
    "example": "The patient was positioned prone for a lumbar puncture.",
    "module": 6
  },
  {
    "id": "supine-position",
    "term": "Supine Position",
    "category": "anatomy",
    "definition": "Body position lying face-up with posterior surface downward; palms facing up",
    "etymology": "Latin 'supinus' meaning 'lying on the back'",
    "example": "The patient was placed supine for abdominal examination.",
    "module": 6
  },
  {
    "id": "fowlers-position",
    "term": "Fowler's Position",
    "category": "anatomy",
    "definition": "Semi-upright position with head of bed elevated 45-60 degrees; used for comfort and respiratory ease",
    "etymology": "Named after George Ryerson Fowler, surgeon who described this position in the 1890s",
    "example": "The patient was placed in Fowler's position to ease breathing.",
    "module": 6
  },
  {
    "id": "trendelenburg-position",
    "term": "Trendelenburg Position",
    "category": "anatomy",
    "definition": "Position with head lower than feet; pelvis elevated; used to improve venous return",
    "etymology": "Named after Friedrich Trendelenburg, German surgeon who described this position",
    "example": "Trendelenburg position was used during pelvic surgery.",
    "module": 6
  },
  {
    "id": "lithotomy-position",
    "term": "Lithotomy Position",
    "category": "anatomy",
    "definition": "Position with patient supine, hips and knees flexed, feet elevated in stirrups; used for gynecological and urological exams",
    "etymology": "Greek 'lithos' meaning 'stone' and 'tomos' meaning 'cutting', referring to surgical removal of bladder stones",
    "example": "The patient was placed in lithotomy position for a pap smear.",
    "module": 6
  },
  {
    "id": "cranial-cavity",
    "term": "Cranial Cavity",
    "category": "anatomy",
    "definition": "Body cavity containing the brain; formed by the skull bones",
    "etymology": "Latin 'cranialis' from Greek 'kranion' meaning 'skull'",
    "example": "The cranial cavity houses and protects the brain.",
    "module": 6
  },
  {
    "id": "thoracic-cavity",
    "term": "Thoracic Cavity",
    "category": "anatomy",
    "definition": "Body cavity containing the heart, lungs, and esophagus; bounded by ribs and thoracic vertebrae",
    "etymology": "Greek 'thorax' meaning 'chest' or 'breastplate'",
    "example": "The thoracic cavity is separated from the abdominal cavity by the diaphragm.",
    "module": 6
  },
  {
    "id": "abdominal-cavity",
    "term": "Abdominal Cavity",
    "category": "anatomy",
    "definition": "Body cavity containing digestive organs, liver, kidneys, and spleen; bounded by abdominal muscles and vertebral column",
    "etymology": "Latin 'abdomen' possibly from 'abdere' meaning 'to hide' or 'conceal'",
    "example": "The abdominal cavity houses most of the gastrointestinal organs.",
    "module": 6
  },
  {
    "id": "pelvic-cavity",
    "term": "Pelvic Cavity",
    "category": "anatomy",
    "definition": "Body cavity containing reproductive and urinary organs; bounded by pelvic bones",
    "etymology": "Latin 'pelvis' meaning 'basin' or 'cauldron'",
    "example": "The pelvic cavity contains the bladder and reproductive organs.",
    "module": 6
  },
  {
    "id": "right-upper-quadrant",
    "term": "Right Upper Quadrant (RUQ)",
    "category": "anatomy",
    "definition": "Upper right abdominal region containing the right lobe of liver, right kidney, and gallbladder",
    "etymology": "Quadrant from Latin 'quadrans' meaning 'one quarter'",
    "example": "RUQ pain may indicate gallbladder pathology.",
    "module": 6
  },
  {
    "id": "left-lower-quadrant",
    "term": "Left Lower Quadrant (LLQ)",
    "category": "anatomy",
    "definition": "Lower left abdominal region containing descending colon, left kidney, and left reproductive organs",
    "etymology": "Quadrant from Latin 'quadrans' meaning 'one quarter'",
    "example": "LLQ tenderness may suggest diverticulitis or ovarian pathology.",
    "module": 6
  },
  {
    "id": "epigastric-region",
    "term": "Epigastric Region",
    "category": "anatomy",
    "definition": "The upper central region of the abdomen located above the umbilicus and between the costal margins, containing the stomach, liver, and pancreas.",
    "etymology": "From Greek 'epi' (upon) + 'gaster' (stomach)",
    "example": "The patient reported epigastric pain after eating fatty foods, suggesting possible gastritis.",
    "module": 6
  },
  {
    "id": "umbilical-region",
    "term": "Umbilical Region",
    "category": "anatomy",
    "definition": "The central region of the abdomen surrounding the umbilicus, containing portions of the small intestine and abdominal aorta.",
    "etymology": "From Latin 'umbilicus' (navel)",
    "example": "The umbilical region tenderness on palpation may indicate periumbilical pain from appendicitis.",
    "module": 6
  },
  {
    "id": "hypogastric-region",
    "term": "Hypogastric Region",
    "category": "anatomy",
    "definition": "The lower central region of the abdomen below the umbilicus, containing the bladder, lower intestines, and reproductive organs.",
    "etymology": "From Greek 'hypo' (below) + 'gaster' (stomach)",
    "example": "Hypogastric pain in females may indicate gynecological pathology such as endometriosis.",
    "module": 6
  },
  {
    "id": "right-upper-quadrant-rug",
    "term": "Right Upper Quadrant (RUQ)",
    "category": "anatomy",
    "definition": "The upper right section of the abdomen containing the right lobe of the liver, gallbladder, right kidney, and right portion of the colon.",
    "etymology": "From Latin 'quadrans' (quarter)",
    "example": "RUQ pain and jaundice suggest cholelithiasis or biliary obstruction.",
    "module": 6
  },
  {
    "id": "right-lower-quadrant-rlq",
    "term": "Right Lower Quadrant (RLQ)",
    "category": "anatomy",
    "definition": "The lower right section of the abdomen containing the appendix, right ovary in females, and right ureter.",
    "etymology": "From Latin 'quadrans' (quarter)",
    "example": "McBurney's point tenderness in the RLQ is a classic sign of acute appendicitis.",
    "module": 6
  },
  {
    "id": "left-upper-quadrant-luq",
    "term": "Left Upper Quadrant (LUQ)",
    "category": "anatomy",
    "definition": "The upper left section of the abdomen containing the left lobe of the liver, spleen, left kidney, stomach, and left portion of the colon.",
    "etymology": "From Latin 'quadrans' (quarter)",
    "example": "LUQ pain with splenic enlargement may indicate splenomegaly from infectious mononucleosis.",
    "module": 6
  },
  {
    "id": "left-lower-quadrant-llq",
    "term": "Left Lower Quadrant (LLQ)",
    "category": "anatomy",
    "definition": "The lower left section of the abdomen containing the left ovary in females, left ureter, and descending colon.",
    "etymology": "From Latin 'quadrans' (quarter)",
    "example": "LLQ pain in females may indicate ovarian cyst rupture or diverticulitis.",
    "module": 6
  },
  {
    "id": "right-iliac-region",
    "term": "Right Iliac Region",
    "category": "anatomy",
    "definition": "The lower right lateral region of the abdomen corresponding to the area over the right ilium and containing the cecum and appendix.",
    "etymology": "From Latin 'ilium' (hip bone)",
    "example": "Rebound tenderness in the right iliac region is a peritoneal sign in appendicitis.",
    "module": 6
  },
  {
    "id": "left-iliac-region",
    "term": "Left Iliac Region",
    "category": "anatomy",
    "definition": "The lower left lateral region of the abdomen corresponding to the area over the left ilium and containing the descending and sigmoid colon.",
    "etymology": "From Latin 'ilium' (hip bone)",
    "example": "Left iliac pain with constipation suggests sigmoid colon pathology.",
    "module": 6
  },
  {
    "id": "right-lumbar-region",
    "term": "Right Lumbar Region",
    "category": "anatomy",
    "definition": "The middle right lateral region of the abdomen at the level of the lumbar spine, containing the right kidney and right colic flexure.",
    "etymology": "From Latin 'lumbus' (loin)",
    "example": "Right lumbar pain with hematuria suggests right kidney stone.",
    "module": 6
  },
  {
    "id": "left-lumbar-region",
    "term": "Left Lumbar Region",
    "category": "anatomy",
    "definition": "The middle left lateral region of the abdomen at the level of the lumbar spine, containing the left kidney and left colic flexure.",
    "etymology": "From Latin 'lumbus' (loin)",
    "example": "Left lumbar costovertebral angle tenderness indicates left pyelonephritis.",
    "module": 6
  },
  {
    "id": "ventral-cavity",
    "term": "Ventral Cavity",
    "category": "anatomy",
    "definition": "The anterior body cavity containing thoracic, abdominal, and pelvic cavities, housing vital organs and their supporting structures.",
    "etymology": "From Latin 'venter' (belly)",
    "example": "The ventral cavity is protected by the rib cage, sternum, and abdominal muscles.",
    "module": 6
  },
  {
    "id": "dorsal-cavity",
    "term": "Dorsal Cavity",
    "category": "anatomy",
    "definition": "The posterior body cavity containing the cranial and spinal cavities, housing the brain and spinal cord.",
    "etymology": "From Latin 'dorsum' (back)",
    "example": "The dorsal cavity is protected by the skull and vertebral column.",
    "module": 6
  },
  {
    "id": "mediastinum",
    "term": "Mediastinum",
    "category": "anatomy",
    "definition": "The central compartment of the thoracic cavity between the lungs, containing the heart, esophagus, trachea, and major blood vessels.",
    "etymology": "From Latin 'mediastinus' (middle)",
    "example": "Mediastinitis is a life-threatening infection of the mediastinal space.",
    "module": 6
  },
  {
    "id": "peritoneal-cavity",
    "term": "Peritoneal Cavity",
    "category": "anatomy",
    "definition": "The potential space within the abdominal cavity lined by peritoneum, containing abdominal organs and allowing visceral movement.",
    "etymology": "From Greek 'peritonaeus' (stretched around)",
    "example": "Peritonitis results from inflammation or infection of the peritoneal cavity.",
    "module": 6
  },
  {
    "id": "integumentary-epidermis-001",
    "term": "Epidermis",
    "category": "integumentary",
    "definition": "The outermost layer of skin composed of stratified squamous epithelium; contains no blood vessels and is responsible for barrier function and melanin production.",
    "etymology": "From Greek 'epi' (upon) + 'derma' (skin)",
    "example": "The epidermis is shed and replaced approximately every 2-4 weeks.",
    "module": 7
  },
  {
    "id": "integumentary-dermis-002",
    "term": "Dermis",
    "category": "integumentary",
    "definition": "The layer of skin beneath the epidermis containing connective tissue, blood vessels, nerve endings, hair follicles, and sweat glands.",
    "etymology": "From Greek 'derma' (skin)",
    "example": "The dermis provides structural support and contains collagen fibers that give skin elasticity.",
    "module": 7
  },
  {
    "id": "integumentary-subcutaneous-003",
    "term": "Subcutaneous tissue (Hypodermis)",
    "category": "integumentary",
    "definition": "The innermost layer of skin composed of loose connective tissue and adipose tissue; provides insulation and cushioning.",
    "etymology": "From Latin 'sub' (under) + 'cutaneus' (of the skin)",
    "example": "The subcutaneous layer contains fat deposits that help maintain body temperature.",
    "module": 7
  },
  {
    "id": "integumentary-sebaceous-004",
    "term": "Sebaceous gland",
    "category": "integumentary",
    "definition": "A skin gland that produces sebum (oil); usually associated with hair follicles and located throughout the dermis.",
    "etymology": "From Latin 'sebum' (tallow, grease)",
    "example": "Sebaceous glands are particularly active during puberty, contributing to acne formation.",
    "module": 7
  },
  {
    "id": "integumentary-sudoriferous-005",
    "term": "Sudoriferous gland (Sweat gland)",
    "category": "integumentary",
    "definition": "A gland that produces sweat; distributed throughout the skin and involved in thermoregulation and excretion.",
    "etymology": "From Latin 'sudor' (sweat) + 'ferre' (to bear)",
    "example": "Eccrine sudoriferous glands cover the entire body and produce watery sweat for cooling.",
    "module": 7
  },
  {
    "id": "integumentary-hair-follicle-006",
    "term": "Hair follicle",
    "category": "integumentary",
    "definition": "A tubular structure in the dermis from which hair grows; includes the hair root, bulb, and surrounding epithelial sheath.",
    "etymology": "From Latin 'folliculus' (small bag)",
    "example": "Hair follicles are connected to sebaceous glands that lubricate the hair shaft.",
    "module": 7
  },
  {
    "id": "integumentary-dermatitis-007",
    "term": "Dermatitis",
    "category": "integumentary",
    "definition": "Inflammation of the skin characterized by itching, redness, and sometimes blistering or oozing.",
    "etymology": "From Greek 'derma' (skin) + 'itis' (inflammation)",
    "example": "Contact dermatitis occurs when skin reacts to irritants such as poison ivy or latex.",
    "module": 7
  },
  {
    "id": "integumentary-eczema-008",
    "term": "Eczema",
    "category": "integumentary",
    "definition": "A chronic inflammatory skin condition characterized by intense itching, redness, cracking, and sometimes blistering.",
    "etymology": "From Greek 'ekzema' (eruption)",
    "example": "Atopic eczema is commonly seen in children and often improves with age.",
    "module": 7
  },
  {
    "id": "integumentary-psoriasis-009",
    "term": "Psoriasis",
    "category": "integumentary",
    "definition": "A chronic autoimmune skin condition characterized by thick, scaly plaques, usually silvery-white in color.",
    "etymology": "From Greek 'psora' (itch, scab)",
    "example": "Psoriasis commonly affects the elbows, knees, and scalp.",
    "module": 7
  },
  {
    "id": "integumentary-melanoma-010",
    "term": "Melanoma",
    "category": "integumentary",
    "definition": "A malignant tumor of melanocytes; the most dangerous form of skin cancer with high metastatic potential.",
    "etymology": "From Greek 'melan' (black) + 'oma' (tumor)",
    "example": "Melanoma lesions often display asymmetry, irregular borders, and multiple colors (ABCDE rule).",
    "module": 7
  },
  {
    "id": "integumentary-basal-cell-carcinoma-011",
    "term": "Basal cell carcinoma (BCC)",
    "category": "integumentary",
    "definition": "The most common type of skin cancer; arises from basal cells and has a low metastatic rate.",
    "etymology": "From Latin 'basalis' (base) + Greek 'karkinos' (crab) + 'oma' (tumor)",
    "example": "BCC often presents as a pearly nodule with central ulceration on sun-exposed areas.",
    "module": 7
  },
  {
    "id": "integumentary-squamous-cell-carcinoma-012",
    "term": "Squamous cell carcinoma (SCC)",
    "category": "integumentary",
    "definition": "The second most common skin cancer; arises from squamous epithelial cells and has moderate metastatic potential.",
    "etymology": "From Latin 'squamosus' (scaly) + Greek 'karkinos' (crab) + 'oma' (tumor)",
    "example": "SCC often develops on sun-exposed areas and may appear as a scaly, infiltrated plaque.",
    "module": 7
  },
  {
    "id": "integumentary-laceration-013",
    "term": "Laceration",
    "category": "integumentary",
    "definition": "A torn or jagged wound in the skin and underlying tissue; often caused by blunt trauma.",
    "etymology": "From Latin 'lacerare' (to tear)",
    "example": "A laceration from a fall may require sutures and careful wound cleaning.",
    "module": 7
  },
  {
    "id": "integumentary-abrasion-014",
    "term": "Abrasion",
    "category": "integumentary",
    "definition": "A wound caused by scraping or rubbing away of the skin surface; also called a scrape.",
    "etymology": "From Latin 'abradere' (to scrape off)",
    "example": "Road rash is an abrasion injury commonly seen in motorcycle accidents.",
    "module": 7
  },
  {
    "id": "integumentary-contusion-015",
    "term": "Contusion",
    "category": "integumentary",
    "definition": "A bruise; an injury to soft tissue without breaking the skin, causing bleeding into tissues.",
    "etymology": "From Latin 'contundere' (to bruise)",
    "example": "A contusion typically presents with localized swelling and discoloration.",
    "module": 7
  },
  {
    "id": "integumentary-ecchymosis-016",
    "term": "Ecchymosis",
    "category": "integumentary",
    "definition": "Discoloration of the skin resulting from bleeding underneath, due to bruising; larger than petechiae.",
    "etymology": "From Greek 'ekchymosis' (bruise)",
    "example": "Ecchymosis around the eyes after head trauma is called 'raccoon eyes.'",
    "module": 7
  },
  {
    "id": "integumentary-petechia-017",
    "term": "Petechia",
    "category": "integumentary",
    "definition": "A small, round, flat red or purple spot on the skin caused by minor bleeding; smaller than ecchymosis.",
    "etymology": "From Italian 'petecchia' (fleabite)",
    "example": "Petechiae may indicate thrombocytopenia or infectious disease such as meningitis.",
    "module": 7
  },
  {
    "id": "integumentary-purpura-018",
    "term": "Purpura",
    "category": "integumentary",
    "definition": "Purple-colored patches on the skin caused by bleeding underneath the skin; larger than petechiae.",
    "etymology": "From Latin 'purpura' (purple)",
    "example": "Palpable purpura may indicate vasculitis or immune thrombocytopenia.",
    "module": 7
  },
  {
    "id": "integumentary-macule-019",
    "term": "Macule",
    "category": "integumentary",
    "definition": "A flat, discolored spot on the skin; less than 1 cm in diameter; does not blanch on pressure.",
    "etymology": "From Latin 'macula' (spot, stain)",
    "example": "Freckles are examples of macules.",
    "module": 7
  },
  {
    "id": "integumentary-papule-020",
    "term": "Papule",
    "category": "integumentary",
    "definition": "A small, raised, solid bump on the skin; less than 1 cm in diameter.",
    "etymology": "From Latin 'papula' (pimple)",
    "example": "Papules are characteristic of early chickenpox lesions.",
    "module": 7
  },
  {
    "id": "integumentary-vesicle-021",
    "term": "Vesicle",
    "category": "integumentary",
    "definition": "A small, fluid-filled blister on the skin; less than 1 cm in diameter.",
    "etymology": "From Latin 'vesicula' (small bladder)",
    "example": "Vesicles are seen in chickenpox, herpes simplex, and shingles.",
    "module": 7
  },
  {
    "id": "integumentary-pustule-022",
    "term": "Pustule",
    "category": "integumentary",
    "definition": "A small, pus-filled bump on the skin; may be sterile or infected.",
    "etymology": "From Latin 'pustula' (blister, pimple)",
    "example": "Pustules are hallmark lesions of acne vulgaris.",
    "module": 7
  },
  {
    "id": "integumentary-bulla-023",
    "term": "Bulla",
    "category": "integumentary",
    "definition": "A large, fluid-filled blister on the skin; greater than 1 cm in diameter.",
    "etymology": "From Latin 'bulla' (bubble, blister)",
    "example": "Bullae are seen in bullous pemphigoid and second-degree burns.",
    "module": 7
  },
  {
    "id": "integumentary-wheal-024",
    "term": "Wheal",
    "category": "integumentary",
    "definition": "A raised, itchy bump on the skin, usually transient; caused by localized edema.",
    "etymology": "From Old English 'hwæl' (ridge, weal)",
    "example": "Wheals are characteristic of urticaria (hives) and allergic reactions.",
    "module": 7
  },
  {
    "id": "integumentary-ulcer-025",
    "term": "Ulcer",
    "category": "integumentary",
    "definition": "A break in the skin or mucous membrane that exposes underlying tissue; may be painful or painless.",
    "etymology": "From Latin 'ulcus' (sore)",
    "example": "Pressure ulcers develop over bony prominences in immobile patients.",
    "module": 7
  },
  {
    "id": "integumentary-burn-first-degree-026",
    "term": "First-Degree Burn",
    "category": "integumentary",
    "definition": "Superficial burn affecting only the epidermis, characterized by erythema, pain, and no blistering; heals without scarring.",
    "etymology": "First (Latin primus) + Degree (Latin gradus) indicating severity level",
    "example": "Sunburn is a common first-degree burn affecting exposed skin areas.",
    "module": 7
  },
  {
    "id": "integumentary-burn-second-degree-027",
    "term": "Second-Degree Burn",
    "category": "integumentary",
    "definition": "Partial-thickness burn extending through epidermis into dermis, causing blistering, severe pain, and potential scarring.",
    "etymology": "Second (Latin secundus) + Degree indicating intermediate severity",
    "example": "A child touching a hot stove may sustain a second-degree burn with blistering.",
    "module": 7
  },
  {
    "id": "integumentary-burn-third-degree-028",
    "term": "Third-Degree Burn",
    "category": "integumentary",
    "definition": "Full-thickness burn destroying epidermis, dermis, and extending into subcutaneous tissue; appears charred, painless due to nerve destruction.",
    "etymology": "Third (Latin tertius) + Degree indicating most severe classification",
    "example": "Third-degree burns from fire require immediate hospitalization and grafting.",
    "module": 7
  },
  {
    "id": "integumentary-derm-combining-029",
    "term": "Derm/o (Combining Form)",
    "category": "integumentary",
    "definition": "Combining form meaning skin, used in medical terminology to denote skin-related conditions and procedures.",
    "etymology": "Greek derma (δέρμα) meaning skin",
    "example": "Dermatitis (inflammation of skin), dermaplasty (skin repair surgery).",
    "module": 7
  },
  {
    "id": "integumentary-cutane-combining-030",
    "term": "Cutane/o (Combining Form)",
    "category": "integumentary",
    "definition": "Combining form meaning skin, derived from Latin; used interchangeably with derm/o in medical terminology.",
    "etymology": "Latin cutis meaning skin",
    "example": "Subcutaneous (beneath the skin), cutaneous reaction (skin reaction).",
    "module": 7
  },
  {
    "id": "integumentary-kerat-combining-031",
    "term": "Kerat/o (Combining Form)",
    "category": "integumentary",
    "definition": "Combining form meaning keratin or horn-like material; refers to cornified epithelial cells forming protective outer layer.",
    "etymology": "Greek keras (κέρας) meaning horn",
    "example": "Keratin (protein in skin), keratosis (buildup of keratin), keratoplasty (cornea repair).",
    "module": 7
  },
  {
    "id": "integumentary-melan-combining-032",
    "term": "Melan/o (Combining Form)",
    "category": "integumentary",
    "definition": "Combining form meaning dark or black, referring to melanin pigment in skin; used in pigmentation-related conditions.",
    "etymology": "Greek melanos (μέλας) meaning black or dark",
    "example": "Melanoma (dark skin cancer), melasma (dark skin patches), hypomelanosis (decreased pigmentation).",
    "module": 7
  },
  {
    "id": "integumentary-xer-combining-033",
    "term": "Xer/o (Combining Form)",
    "category": "integumentary",
    "definition": "Combining form meaning dry, used to describe dry skin conditions and desiccated tissues.",
    "etymology": "Greek xeros (ξηρός) meaning dry",
    "example": "Xerosis (abnormally dry skin), xeroderma (chronically dry skin condition).",
    "module": 7
  },
  {
    "id": "integumentary-hidr-combining-034",
    "term": "Hidr/o (Combining Form)",
    "category": "integumentary",
    "definition": "Combining form meaning sweat or relating to sweat glands; used in conditions affecting perspiration.",
    "etymology": "Greek hidros (ἱδρώς) meaning sweat",
    "example": "Hyperhidrosis (excessive sweating), anhidrosis (decreased sweating).",
    "module": 7
  },
  {
    "id": "integumentary-acne-vulgaris-035",
    "term": "Acne Vulgaris",
    "category": "integumentary",
    "definition": "Common chronic inflammatory condition of pilosebaceous units, characterized by comedones, papules, pustules, and potential scarring.",
    "etymology": "Latin acne (uncertain origin) + vulgaris (common)",
    "example": "Acne vulgaris typically affects adolescents and is treated with retinoids and antibiotics.",
    "module": 7
  },
  {
    "id": "integumentary-rosacea-036",
    "term": "Rosacea",
    "category": "integumentary",
    "definition": "Chronic inflammatory skin condition causing facial erythema, telangiectasia, papules, and pustules, often triggered by vasodilation.",
    "etymology": "Latin rosaceus meaning rosy or rose-colored",
    "example": "Rosacea causes flushing and persistent redness on the face, worsened by spicy foods and stress.",
    "module": 7
  },
  {
    "id": "integumentary-urticaria-037",
    "term": "Urticaria",
    "category": "integumentary",
    "definition": "Acute hypersensitivity reaction characterized by transient wheals and pruritus, caused by mast cell degranulation.",
    "etymology": "Latin urtica meaning nettle plant (due to nettle-like appearance)",
    "example": "Food allergy may cause acute urticaria with hives appearing within minutes of exposure.",
    "module": 7
  },
  {
    "id": "integumentary-impetigo-038",
    "term": "Impetigo",
    "category": "integumentary",
    "definition": "Highly contagious superficial bacterial infection, typically caused by Staphylococcus aureus or Streptococcus pyogenes, with honey-crusted lesions.",
    "etymology": "Latin impetere meaning to attack or assail",
    "example": "Impetigo commonly affects children and presents with honey-colored crusts on exposed areas.",
    "module": 7
  },
  {
    "id": "integumentary-cellulitis-039",
    "term": "Cellulitis",
    "category": "integumentary",
    "definition": "Acute bacterial infection of dermis and subcutaneous tissue causing spreading erythema, edema, and systemic symptoms.",
    "etymology": "Latin cellula meaning small cell + -itis (inflammation)",
    "example": "Cellulitis following a puncture wound requires systemic antibiotic therapy.",
    "module": 7
  },
  {
    "id": "integumentary-tinea-pedis-040",
    "term": "Tinea Pedis",
    "category": "integumentary",
    "definition": "Fungal infection of foot, commonly caused by Trichophyton species, characterized by maceration, scaling, and itching between toes.",
    "etymology": "Latin tinea (ringworm) + pedis (of the foot)",
    "example": "Tinea pedis (athlete's foot) spreads in warm, moist environments like locker rooms.",
    "module": 7
  },
  {
    "id": "integumentary-vitiligo-041",
    "term": "Vitiligo",
    "category": "integumentary",
    "definition": "Acquired depigmentation disorder resulting from loss of melanocytes, causing white patches on skin with sharp demarcation.",
    "etymology": "Latin vitiligo, possibly from vitium meaning blemish",
    "example": "Vitiligo causes symmetrical depigmented patches on face and extremities.",
    "module": 7
  },
  {
    "id": "integumentary-alopecia-042",
    "term": "Alopecia",
    "category": "integumentary",
    "definition": "Hair loss condition caused by various etiologies including genetics, autoimmunity, infection, or nutritional deficiency.",
    "etymology": "Greek alopecia, from alopex (fox) due to mangy appearance of foxes",
    "example": "Androgenetic alopecia is the most common cause of hair loss in men and women.",
    "module": 7
  },
  {
    "id": "integumentary-hirsutism-043",
    "term": "Hirsutism",
    "category": "integumentary",
    "definition": "Excessive male-pattern hair growth in women, often androgen-related, appearing on face, chest, and abdomen.",
    "etymology": "Latin hirsutus meaning hairy or shaggy",
    "example": "Hirsutism may indicate polycystic ovary syndrome or other endocrine disorders.",
    "module": 7
  },
  {
    "id": "integumentary-scar-keloid-044",
    "term": "Keloid",
    "category": "integumentary",
    "definition": "Excessive fibrous tissue formation extending beyond original wound boundaries, resulting from aberrant healing response.",
    "etymology": "Greek chele (claw) + eidos (form), referring to claw-like appearance",
    "example": "Keloids form excessively after surgery or injury, particularly in darker skin types.",
    "module": 7
  },
  {
    "id": "integumentary-callus-045",
    "term": "Callus",
    "category": "integumentary",
    "definition": "Thickened, hardened area of skin resulting from repeated friction or pressure; protective response of epidermis.",
    "etymology": "Latin callus meaning hard or thick skin",
    "example": "Calluses form on hands of manual workers or feet from poorly fitting shoes.",
    "module": 7
  },
  {
    "id": "integumentary-comedone-046",
    "term": "Comedone",
    "category": "integumentary",
    "definition": "Blocked hair follicle and sebaceous duct; appears as blackhead (open comedone) or whitehead (closed comedone).",
    "etymology": "Latin comedere meaning to eat up (due to appearance as if eaten into skin)",
    "example": "Comedones are the hallmark lesion of acne vulgaris.",
    "module": 7
  },
  {
    "id": "integumentary-desquamation-047",
    "term": "Desquamation",
    "category": "integumentary",
    "definition": "Shedding or peeling of outer layers of epidermis, occurring naturally or following inflammation or trauma.",
    "etymology": "Latin desquamare: de (off) + squama (scale)",
    "example": "Desquamation occurs one week after sunburn as skin heals.",
    "module": 7
  },
  {
    "id": "integumentary-pruritus-048",
    "term": "Pruritus",
    "category": "integumentary",
    "definition": "Subjective sensation of itching causing desire to scratch; symptom of various skin conditions and systemic diseases.",
    "etymology": "Latin pruritus meaning itching, from prurire (to itch)",
    "example": "Pruritus accompanies eczema, urticaria, and allergic contact dermatitis.",
    "module": 7
  },
  {
    "id": "integumentary-cicatrix-049",
    "term": "Cicatrix",
    "category": "integumentary",
    "definition": "Scar tissue formed during wound healing, consisting of collagen fibrils; permanent mark of skin injury.",
    "etymology": "Latin cicatrix meaning scar",
    "example": "A wide cicatrix may form after surgical closure of a large laceration.",
    "module": 7
  },
  {
    "id": "integumentary-purulent-drainage-050",
    "term": "Purulent Drainage",
    "category": "integumentary",
    "definition": "Drainage containing pus (dead white blood cells, bacteria, and tissue debris), indicating bacterial infection of wound.",
    "etymology": "Latin pus (matter) + -ulent (full of)",
    "example": "Purulent drainage from an infected laceration requires wound culture and antibiotic therapy.",
    "module": 7
  },
  {
    "id": "skel-001-cortical-bone",
    "term": "Cortical Bone",
    "category": "skeletal",
    "definition": "Dense, compact bone tissue forming the hard outer layer of bones; provides strength and rigidity",
    "etymology": "cortical from Latin cortex (bark, rind)",
    "example": "The cortical bone of the femoral shaft bears most of the weight-bearing stress in the leg",
    "module": 8
  },
  {
    "id": "skel-002-cancellous-bone",
    "term": "Cancellous Bone",
    "category": "skeletal",
    "definition": "Spongy, porous bone tissue with a network of trabeculae; lighter and more flexible than cortical bone",
    "etymology": "cancellous from Latin cancelli (lattice, grating)",
    "example": "Cancellous bone in vertebral bodies is susceptible to compression fractures in osteoporosis",
    "module": 8
  },
  {
    "id": "skel-003-periosteum",
    "term": "Periosteum",
    "category": "skeletal",
    "definition": "Fibrous connective tissue membrane covering the outer surface of bones; contains blood vessels and osteoblasts",
    "etymology": "peri- (around) + osteum (bone)",
    "example": "The periosteum is stripped during surgical bone exposure and must be carefully handled to preserve healing",
    "module": 8
  },
  {
    "id": "skel-004-endosteum",
    "term": "Endosteum",
    "category": "skeletal",
    "definition": "Thin membrane lining the inner surface of compact bone and surrounding the medullary cavity",
    "etymology": "endo- (within) + osteum (bone)",
    "example": "The endosteum contains osteoblasts that contribute to bone remodeling and internal healing",
    "module": 8
  },
  {
    "id": "skel-005-diaphysis",
    "term": "Diaphysis",
    "category": "skeletal",
    "definition": "The shaft or middle portion of a long bone between the epiphyses",
    "etymology": "dia- (through) + -physis (growth)",
    "example": "The diaphysis of the femur is primarily cortical bone designed for weight-bearing",
    "module": 8
  },
  {
    "id": "skel-006-epiphysis",
    "term": "Epiphysis",
    "category": "skeletal",
    "definition": "The end portion of a long bone, typically broader than the shaft; site of articulation",
    "etymology": "epi- (upon) + -physis (growth)",
    "example": "The distal epiphysis of the femur forms the condyles that articulate with the tibia",
    "module": 8
  },
  {
    "id": "skel-007-metaphysis",
    "term": "Metaphysis",
    "category": "skeletal",
    "definition": "The region between the diaphysis and epiphysis; contains the growth plate in children",
    "etymology": "meta- (between) + -physis (growth)",
    "example": "Metaphyseal fractures in children must be carefully managed to avoid growth disturbances",
    "module": 8
  },
  {
    "id": "skel-008-cranium",
    "term": "Cranium",
    "category": "skeletal",
    "definition": "The bony skull structure that encloses and protects the brain",
    "etymology": "from Latin cranium (skull)",
    "example": "A cranial computed tomography scan was ordered after the patient's head injury",
    "module": 8
  },
  {
    "id": "skel-009-clavicle",
    "term": "Clavicle",
    "category": "skeletal",
    "definition": "The collarbone; a slender S-shaped bone connecting the sternum to the scapula",
    "etymology": "from Latin clavicula (small key)",
    "example": "Clavicle fractures are common sports injuries requiring immobilization",
    "module": 8
  },
  {
    "id": "skel-010-scapula",
    "term": "Scapula",
    "category": "skeletal",
    "definition": "The shoulder blade; a triangular bone on the posterior thorax that articulates with the humerus",
    "etymology": "from Latin scapula (shoulder blade)",
    "example": "Scapular winging may indicate serratus anterior muscle weakness or nerve injury",
    "module": 8
  },
  {
    "id": "skel-011-humerus",
    "term": "Humerus",
    "category": "skeletal",
    "definition": "The bone of the upper arm between the shoulder and elbow",
    "etymology": "from Latin humerus (shoulder, upper arm)",
    "example": "A proximal humerus fracture may require surgical repair with plates and screws",
    "module": 8
  },
  {
    "id": "skel-012-radius",
    "term": "Radius",
    "category": "skeletal",
    "definition": "The lateral bone of the forearm; articulates with the humerus and carpals, allows forearm rotation",
    "etymology": "from Latin radius (rod, ray)",
    "example": "A Colles fracture involves the distal radius and is commonly seen in fall injuries",
    "module": 8
  },
  {
    "id": "skel-013-ulna",
    "term": "Ulna",
    "category": "skeletal",
    "definition": "The medial bone of the forearm; forms the olecranon process at the elbow",
    "etymology": "from Latin ulna (elbow bone)",
    "example": "The ulna articulates with the humerus at the elbow joint forming the hinge-like humeroulnar joint",
    "module": 8
  },
  {
    "id": "skel-014-carpals",
    "term": "Carpals",
    "category": "skeletal",
    "definition": "Eight small carpal bones arranged in two rows in the wrist; allow complex wrist movements",
    "etymology": "from Greek karpos (wrist)",
    "example": "A scaphoid carpal fracture may not be visible on initial X-rays and requires follow-up imaging",
    "module": 8
  },
  {
    "id": "skel-015-femur",
    "term": "Femur",
    "category": "skeletal",
    "definition": "The thighbone; the longest and strongest bone in the body, bears significant weight",
    "etymology": "from Latin femur (thigh)",
    "example": "A femoral fracture requires careful reduction and often surgical fixation with intramedullary nailing",
    "module": 8
  },
  {
    "id": "skel-016-tibia",
    "term": "Tibia",
    "category": "skeletal",
    "definition": "The shinbone; the medial and larger bone of the lower leg, bears weight and articulates with the femur",
    "etymology": "from Latin tibia (flute, pipe, shinbone)",
    "example": "The tibial plateau must be properly aligned in fractures to prevent knee instability",
    "module": 8
  },
  {
    "id": "skel-017-fibula",
    "term": "Fibula",
    "category": "skeletal",
    "definition": "The lateral and smaller bone of the lower leg; does not bear weight but provides muscle attachments",
    "etymology": "from Latin fibula (pin, clasp)",
    "example": "The fibular head serves as an attachment point for the biceps femoris and lateral collateral ligament",
    "module": 8
  },
  {
    "id": "skel-018-tarsals",
    "term": "Tarsals",
    "category": "skeletal",
    "definition": "Seven tarsal bones in the foot arranged to form the ankle and midfoot; include the calcaneus and talus",
    "etymology": "from Greek tarsos (flat of foot, heel)",
    "example": "A talus fracture is a serious ankle injury requiring careful reduction to prevent arthritis",
    "module": 8
  },
  {
    "id": "skel-019-vertebrae",
    "term": "Vertebrae",
    "category": "skeletal",
    "definition": "Individual bones of the spine; stacked to form the vertebral column protecting the spinal cord",
    "etymology": "from Latin vertebra (joint of the spine)",
    "example": "Lumbar vertebral compression fractures may cause severe back pain in osteoporotic patients",
    "module": 8
  },
  {
    "id": "skel-020-ilium",
    "term": "Ilium",
    "category": "skeletal",
    "definition": "The largest and most superior bone of the pelvis; forms the prominent hip bone",
    "etymology": "from Latin ilium (groin)",
    "example": "The iliac crest is a common site for bone marrow biopsy",
    "module": 8
  },
  {
    "id": "skel-021-ischium",
    "term": "Ischium",
    "category": "skeletal",
    "definition": "The inferior and posterior bone of the pelvis; forms the tuberosity on which one sits",
    "etymology": "from Greek ischion (hip joint)",
    "example": "Ischial tuberosity bursitis causes pain when sitting and is sometimes called 'weaver's bottom'",
    "module": 8
  },
  {
    "id": "skel-022-pubis",
    "term": "Pubis",
    "category": "skeletal",
    "definition": "The anteromedial bone of the pelvis; fuses with ilium and ischium to form the innominate bone",
    "etymology": "from Latin pubis (adult, mature)",
    "example": "The pubic symphysis is a cartilaginous joint between the two pubic bones",
    "module": 8
  },
  {
    "id": "skel-023-synovial-joint",
    "term": "Synovial Joint",
    "category": "skeletal",
    "definition": "A freely movable joint with a synovial cavity containing synovial fluid; allows various types of movement",
    "etymology": "syn- (with) + -ovial (egg-like), referring to the egg-white-like synovial fluid",
    "example": "The knee is a synovial joint with multiple types of movement including flexion, extension, and rotation",
    "module": 8
  },
  {
    "id": "skel-024-cartilaginous-joint",
    "term": "Cartilaginous Joint",
    "category": "skeletal",
    "definition": "A joint where bones are connected by cartilage with little to no movement; includes symphyses and synchondroses",
    "etymology": "cartilagin- (cartilage) + -ous (full of)",
    "example": "The intervertebral discs are cartilaginous joints that allow limited movement and absorb shock",
    "module": 8
  },
  {
    "id": "skel-025-fibrous-joint",
    "term": "Fibrous Joint",
    "category": "skeletal",
    "definition": "An immovable joint where bones are connected by dense fibrous connective tissue; no joint cavity",
    "etymology": "fibr- (fiber) + -ous (full of)",
    "example": "The sutures of the skull are fibrous joints that remain immobile throughout life",
    "module": 8
  },
  {
    "id": "skel-026-bursa",
    "term": "Bursa",
    "category": "skeletal",
    "definition": "A small, fluid-filled sac lined with synovial membrane that reduces friction between bones, tendons, and muscles at joints.",
    "etymology": "Latin 'bursa' meaning 'purse' or 'pouch'",
    "example": "Bursitis of the subacromial bursa causes shoulder pain and inflammation.",
    "module": 8
  },
  {
    "id": "skel-027-meniscus",
    "term": "Meniscus",
    "category": "skeletal",
    "definition": "A crescent-shaped piece of fibrocartilage in the knee joint that acts as a shock absorber and stabilizer.",
    "etymology": "Greek 'meniskos' meaning 'crescent'",
    "example": "A torn medial meniscus is a common knee injury in athletes.",
    "module": 8
  },
  {
    "id": "skel-028-ligament",
    "term": "Ligament",
    "category": "skeletal",
    "definition": "A fibrous connective tissue that connects bone to bone and stabilizes joints.",
    "etymology": "Latin 'ligamentum' meaning 'bandage' or 'bond'",
    "example": "The anterior cruciate ligament (ACL) is commonly injured in contact sports.",
    "module": 8
  },
  {
    "id": "skel-029-tendon",
    "term": "Tendon",
    "category": "skeletal",
    "definition": "A fibrous cord of connective tissue that attaches muscle to bone and transmits muscle force.",
    "etymology": "Latin 'tendere' meaning 'to stretch'",
    "example": "The Achilles tendon connects the calf muscle to the heel bone.",
    "module": 8
  },
  {
    "id": "skel-030-cartilage",
    "term": "Cartilage",
    "category": "skeletal",
    "definition": "A firm, elastic connective tissue that covers bone surfaces in joints, providing smooth movement and shock absorption.",
    "etymology": "Latin 'cartilago' meaning 'gristle'",
    "example": "Hyaline cartilage covers the ends of long bones in synovial joints.",
    "module": 8
  },
  {
    "id": "skel-031-osteoporosis",
    "term": "Osteoporosis",
    "category": "skeletal",
    "definition": "A metabolic bone disease characterized by decreased bone mineral density and increased fragility, leading to increased fracture risk.",
    "etymology": "Greek 'osteon' (bone) + 'poros' (pore, passage)",
    "example": "Postmenopausal women are at high risk for developing osteoporosis due to declining estrogen levels.",
    "module": 8
  },
  {
    "id": "skel-032-osteoarthritis",
    "term": "Osteoarthritis",
    "category": "skeletal",
    "definition": "A degenerative joint disease characterized by progressive loss of articular cartilage and underlying bone changes.",
    "etymology": "Greek 'osteon' (bone) + 'arthron' (joint) + '-itis' (inflammation)",
    "example": "Osteoarthritis of the knee commonly affects older adults and causes joint pain and stiffness.",
    "module": 8
  },
  {
    "id": "skel-033-rheumatoid-arthritis",
    "term": "Rheumatoid Arthritis",
    "category": "skeletal",
    "definition": "An autoimmune inflammatory disease that affects multiple joints, causing pain, swelling, and progressive joint damage.",
    "etymology": "Greek 'rheuma' (flow) + 'arthron' (joint) + '-itis' (inflammation)",
    "example": "Rheumatoid arthritis typically affects the small joints of the hands and feet symmetrically.",
    "module": 8
  },
  {
    "id": "skel-034-greenstick-fracture",
    "term": "Greenstick Fracture",
    "category": "skeletal",
    "definition": "An incomplete fracture where the bone bends and partially breaks on one side, similar to a green tree branch.",
    "etymology": "Descriptive term from green wood fracture pattern",
    "example": "Greenstick fractures are common in children due to their more flexible bones.",
    "module": 8
  },
  {
    "id": "skel-035-comminuted-fracture",
    "term": "Comminuted Fracture",
    "category": "skeletal",
    "definition": "A fracture in which the bone is broken into three or more fragments.",
    "etymology": "Latin 'comminuere' meaning 'to break into small pieces'",
    "example": "A comminuted fracture of the tibia resulting from a motor vehicle accident requires surgical fixation.",
    "module": 8
  },
  {
    "id": "skel-036-compound-fracture",
    "term": "Compound Fracture",
    "category": "skeletal",
    "definition": "A fracture in which bone fragments pierce the overlying skin, creating an open wound and risk of infection.",
    "etymology": "Latin 'componere' meaning 'to put together'; also called open fracture",
    "example": "A compound fracture of the femur requires immediate surgical intervention to prevent infection.",
    "module": 8
  },
  {
    "id": "skel-037-stress-fracture",
    "term": "Stress Fracture",
    "category": "skeletal",
    "definition": "A small crack in the bone resulting from repetitive stress and overuse, often without a single traumatic event.",
    "etymology": "Latin 'stress' + 'fractura' (break)",
    "example": "Stress fractures of the metatarsals are common in distance runners.",
    "module": 8
  },
  {
    "id": "skel-038-arthroplasty",
    "term": "Arthroplasty",
    "category": "skeletal",
    "definition": "A surgical procedure to reconstruct or replace a joint, often involving insertion of a prosthetic implant.",
    "etymology": "Greek 'arthron' (joint) + 'plassein' (to form)",
    "example": "Total knee arthroplasty is a common procedure for severe osteoarthritis.",
    "module": 8
  },
  {
    "id": "skel-039-osteotomy",
    "term": "Osteotomy",
    "category": "skeletal",
    "definition": "A surgical procedure in which a bone is cut and repositioned to correct deformity or improve joint mechanics.",
    "etymology": "Greek 'osteon' (bone) + 'tomos' (cut)",
    "example": "A tibial osteotomy may be performed to correct knee valgus deformity.",
    "module": 8
  },
  {
    "id": "skel-040-arthroscopy",
    "term": "Arthroscopy",
    "category": "skeletal",
    "definition": "A minimally invasive surgical procedure using an arthroscope to visualize, diagnose, and treat joint disorders.",
    "etymology": "Greek 'arthron' (joint) + 'skopein' (to examine)",
    "example": "Arthroscopic repair of a torn meniscus reduces recovery time compared to open surgery.",
    "module": 8
  },
  {
    "id": "skel-041-orif",
    "term": "ORIF (Open Reduction Internal Fixation)",
    "category": "skeletal",
    "definition": "A surgical procedure where fractured bone fragments are realigned (reduced) and held in place with internal hardware.",
    "etymology": "Acronym: Open Reduction + Internal Fixation",
    "example": "ORIF of a displaced tibial plateau fracture uses plates and screws for anatomic restoration.",
    "module": 8
  },
  {
    "id": "skel-042-osteochondr",
    "term": "Osteochondr- (Combining Form)",
    "category": "skeletal",
    "definition": "A combining form meaning bone and cartilage, used in medical terms relating to bone and cartilage conditions.",
    "etymology": "Greek 'osteon' (bone) + 'chondros' (cartilage)",
    "example": "Osteochondritis dissecans involves separation of cartilage and underlying bone in a joint.",
    "module": 8
  },
  {
    "id": "skel-043-myelo",
    "term": "Myelo- (Combining Form)",
    "category": "skeletal",
    "definition": "A combining form meaning bone marrow or spinal cord, used in terms describing marrow-related or spinal conditions.",
    "etymology": "Greek 'myelos' meaning 'marrow'",
    "example": "Myelodysplasia refers to abnormal bone marrow development.",
    "module": 8
  },
  {
    "id": "skel-044-chondro",
    "term": "Chondro- (Combining Form)",
    "category": "skeletal",
    "definition": "A combining form meaning cartilage, used in medical terms relating to cartilage conditions and structures.",
    "etymology": "Greek 'chondros' meaning 'cartilage'",
    "example": "Chondromalacia patellae refers to softening of the cartilage under the kneecap.",
    "module": 8
  },
  {
    "id": "skel-045-arthro",
    "term": "Arthro- (Combining Form)",
    "category": "skeletal",
    "definition": "A combining form meaning joint, used in medical terms describing joint-related conditions and procedures.",
    "etymology": "Greek 'arthron' meaning 'joint'",
    "example": "Arthrocentesis is the aspiration of fluid from a joint for diagnostic or therapeutic purposes.",
    "module": 8
  },
  {
    "id": "skel-046-osteo",
    "term": "Osteo- (Combining Form)",
    "category": "skeletal",
    "definition": "A combining form meaning bone, used in medical terms relating to bone conditions, structure, and diseases.",
    "etymology": "Greek 'osteon' meaning 'bone'",
    "example": "Osteogenesis imperfecta is a genetic disorder characterized by abnormally fragile bones.",
    "module": 8
  },
  {
    "id": "skel-047-spondylo",
    "term": "Spondylo- (Combining Form)",
    "category": "skeletal",
    "definition": "A combining form meaning vertebra or spine, used in terms describing vertebral and spinal conditions.",
    "etymology": "Greek 'spondylos' meaning 'vertebra'",
    "example": "Spondylolisthesis is a condition where one vertebra slides forward over another.",
    "module": 8
  },
  {
    "id": "skel-048-phalanges",
    "term": "Phalanges",
    "category": "skeletal",
    "definition": "The small bones of the fingers and toes; singular 'phalanx'; includes proximal, middle, and distal phalanges.",
    "etymology": "Greek 'phalanx' meaning 'battle line' or 'row'",
    "example": "A fracture of the distal phalanx of the thumb may require splinting.",
    "module": 8
  },
  {
    "id": "skel-049-metacarpals",
    "term": "Metacarpals",
    "category": "skeletal",
    "definition": "Five long bones of the hand that form the palm, extending from the carpals to the phalanges.",
    "etymology": "Greek 'meta' (beyond) + 'carpus' (wrist)",
    "example": "Metacarpal fractures are common injuries in boxers and athletes.",
    "module": 8
  },
  {
    "id": "skel-050-metatarsals",
    "term": "Metatarsals",
    "category": "skeletal",
    "definition": "Five long bones of the foot that form the arch, extending from the tarsals to the phalanges.",
    "etymology": "Greek 'meta' (beyond) + 'tarsus' (ankle)",
    "example": "A metatarsal stress fracture is a common overuse injury in runners.",
    "module": 8
  },
  {
    "id": "skel-051-greenstick-fracture",
    "term": "Greenstick Fracture",
    "category": "skeletal",
    "definition": "An incomplete fracture where the bone bends and partially breaks, typically occurring in children whose bones are more flexible; the bone does not break completely across its width.",
    "etymology": "Named for resemblance to a break in a green (fresh) tree branch that bends but does not snap completely.",
    "example": "A 6-year-old fell from monkey bars and sustained a greenstick fracture of the radius; the bone was immobilized without requiring reduction.",
    "module": 8
  },
  {
    "id": "skel-052-comminuted-fracture",
    "term": "Comminuted Fracture",
    "category": "skeletal",
    "definition": "A fracture in which the bone is broken into three or more fragments; often results from high-energy trauma and may require surgical intervention.",
    "etymology": "Latin 'comminutus' meaning 'broken into pieces'; from 'comminuere' to break small.",
    "example": "The patient's femur sustained a comminuted fracture from a motor vehicle accident, necessitating open reduction and internal fixation.",
    "module": 8
  },
  {
    "id": "skel-053-compound-fracture",
    "term": "Compound Fracture",
    "category": "skeletal",
    "definition": "A fracture in which the broken bone penetrates the skin, creating an open wound; also called an open fracture, with increased risk of infection.",
    "etymology": "Latin 'compositus' meaning 'put together'; refers to bone fragments exposed through the skin.",
    "example": "The tibia compound fracture required immediate surgical cleaning, antibiotics, and careful soft tissue management to prevent osteomyelitis.",
    "module": 8
  },
  {
    "id": "skel-054-stress-fracture",
    "term": "Stress Fracture",
    "category": "skeletal",
    "definition": "A small crack in the bone caused by repetitive stress or overuse rather than acute trauma; common in athletes and military personnel.",
    "etymology": "Descriptive term indicating fracture from accumulated stress forces rather than single traumatic event.",
    "example": "The marathon runner developed a stress fracture in the metatarsal after increasing mileage too quickly without adequate rest.",
    "module": 8
  },
  {
    "id": "skel-055-arthroplasty",
    "term": "Arthroplasty",
    "category": "skeletal",
    "definition": "Surgical procedure to repair, reconstruct, or replace a joint, often used to treat severe arthritis or joint damage; may involve prosthetic implants.",
    "etymology": "Greek 'arthron' (joint) + 'plassein' (to form/shape); surgical joint reconstruction.",
    "example": "The 72-year-old patient underwent total knee arthroplasty due to end-stage osteoarthritis, receiving a prosthetic joint implant.",
    "module": 8
  },
  {
    "id": "skel-056-osteotomy",
    "term": "Osteotomy",
    "category": "skeletal",
    "definition": "Surgical procedure in which a bone is cut and realigned to correct deformity, improve function, or relieve pain; commonly performed on femur or tibia.",
    "etymology": "Greek 'osteon' (bone) + 'tome' (cut); surgical cutting of bone.",
    "example": "A tibial osteotomy was performed to realign the knee joint and reduce pain from degenerative changes affecting one compartment.",
    "module": 8
  },
  {
    "id": "skel-057-arthroscopy",
    "term": "Arthroscopy",
    "category": "skeletal",
    "definition": "Minimally invasive surgical procedure using a small camera (arthroscope) to visualize and treat joint problems; allows direct visualization of joint structures.",
    "etymology": "Greek 'arthron' (joint) + 'skopein' (to view); visualization of joint interior.",
    "example": "The orthopedic surgeon performed shoulder arthroscopy to repair a rotator cuff tear and remove inflamed tissue.",
    "module": 8
  },
  {
    "id": "skel-058-orif",
    "term": "ORIF (Open Reduction Internal Fixation)",
    "category": "skeletal",
    "definition": "Surgical procedure to align fractured bone fragments and secure them with plates, screws, or other hardware; allows early mobilization and healing.",
    "etymology": "Acronym: Open Reduction (surgical alignment) + Internal Fixation (hardware stabilization).",
    "example": "The patient's comminuted femur fracture required ORIF with a compression plate and multiple screws to restore anatomical alignment.",
    "module": 8
  },
  {
    "id": "skel-059-chondro",
    "term": "Chondro- (Combining Form)",
    "category": "skeletal",
    "definition": "Combining form meaning cartilage; used in medical terms related to cartilage conditions, structures, or procedures.",
    "etymology": "Greek 'chondros' meaning cartilage.",
    "example": "Chondromalacia patellae refers to softening and degeneration of the cartilage on the underside of the kneecap.",
    "module": 8
  },
  {
    "id": "skel-060-myelo",
    "term": "Myelo- (Combining Form)",
    "category": "skeletal",
    "definition": "Combining form meaning bone marrow or spinal cord; used in terms describing marrow-related conditions or spinal cord involvement.",
    "etymology": "Greek 'myelos' meaning marrow or spinal cord.",
    "example": "Osteomyelitis involves infection of bone and bone marrow, while myelopathy refers to spinal cord disease or dysfunction.",
    "module": 8
  },
  {
    "id": "skeletal-muscle-definition",
    "term": "Skeletal Muscle",
    "category": "muscular",
    "definition": "Striated muscle tissue attached to bones via tendons; responsible for voluntary movement and controlled by somatic nervous system.",
    "etymology": "Skeletal (from Greek 'skeletos' = dried up/skeleton) + muscle (from Latin 'musculus' = little mouse)",
    "example": "The biceps brachii is a skeletal muscle that flexes the forearm at the elbow joint.",
    "module": 9
  },
  {
    "id": "smooth-muscle-definition",
    "term": "Smooth Muscle",
    "category": "muscular",
    "definition": "Non-striated muscle tissue found in walls of visceral organs and blood vessels; involuntary and controlled by autonomic nervous system.",
    "etymology": "Smooth (descriptive of appearance under microscope) + muscle (Latin 'musculus')",
    "example": "Smooth muscle in the esophagus contracts in peristaltic waves to move food toward the stomach.",
    "module": 9
  },
  {
    "id": "cardiac-muscle-definition",
    "term": "Cardiac Muscle",
    "category": "muscular",
    "definition": "Striated muscle tissue found exclusively in the heart wall; involuntary, self-contracting tissue with intercalated discs connecting cells.",
    "etymology": "Cardiac (from Greek 'kardia' = heart) + muscle (Latin 'musculus')",
    "example": "Cardiac muscle tissue contains specialized gap junctions that allow rapid electrical conduction between cardiomyocytes.",
    "module": 9
  },
  {
    "id": "muscle-origin-definition",
    "term": "Muscle Origin",
    "category": "muscular",
    "definition": "The attachment point of a muscle to the more stationary or proximal bone; the end that does not typically move during muscle contraction.",
    "etymology": "Origin (from Latin 'origo' = beginning/source)",
    "example": "The origin of the biceps brachii is the scapula, while its insertion is the radius.",
    "module": 9
  },
  {
    "id": "muscle-insertion-definition",
    "term": "Muscle Insertion",
    "category": "muscular",
    "definition": "The attachment point of a muscle to the more mobile or distal bone; the end that typically moves during muscle contraction.",
    "etymology": "Insertion (from Latin 'insertio' = grafting in)",
    "example": "The insertion of the triceps brachii muscle is on the olecranon process of the ulna.",
    "module": 9
  },
  {
    "id": "fascia-definition",
    "term": "Fascia",
    "category": "muscular",
    "definition": "Connective tissue layer that surrounds and separates muscles; organized into superficial, deep, and visceral layers.",
    "etymology": "Fascia (from Latin 'fascia' = band/strip of cloth)",
    "example": "The deep fascia of the leg is divided into anterior, lateral, and posterior compartments by intermuscular septa.",
    "module": 9
  },
  {
    "id": "myofibril-definition",
    "term": "Myofibril",
    "category": "muscular",
    "definition": "Contractile protein filament within muscle fibers composed of repeating sarcomeres; contains myosin and actin filaments.",
    "etymology": "Myo- (Greek 'mys' = muscle) + fibril (from Latin 'fibrilla' = small fiber)",
    "example": "Myofibrils are arranged in parallel within muscle fibers to generate coordinated contraction.",
    "module": 9
  },
  {
    "id": "sarcomere-definition",
    "term": "Sarcomere",
    "category": "muscular",
    "definition": "Functional contractile unit of muscle extending from Z-disc to Z-disc; contains thick and thin filaments responsible for muscle contraction.",
    "etymology": "Sarco- (Greek 'sarx' = flesh) + -mere (Greek 'meros' = part)",
    "example": "During contraction, the sarcomere shortens as thick and thin filaments slide past each other in the sliding filament mechanism.",
    "module": 9
  },
  {
    "id": "quadriceps-definition",
    "term": "Quadriceps",
    "category": "muscular",
    "definition": "Four-headed muscle on the anterior thigh; primary extensor of the knee joint and flexor of the hip.",
    "etymology": "Quad- (Latin 'quattuor' = four) + -ceps (Latin 'caput' = head)",
    "example": "The quadriceps femoris is composed of rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius.",
    "module": 9
  },
  {
    "id": "hamstrings-definition",
    "term": "Hamstrings",
    "category": "muscular",
    "definition": "Three-muscle group on posterior thigh; primary flexors of knee and extensors of hip; includes biceps femoris, semitendinosus, and semimembranosus.",
    "etymology": "Hamstring (from Old English 'ham' = back of thigh + 'string')",
    "example": "Hamstring strain is a common sports injury caused by rapid knee flexion or hip extension.",
    "module": 9
  },
  {
    "id": "gastrocnemius-definition",
    "term": "Gastrocnemius",
    "category": "muscular",
    "definition": "Two-headed muscle of the calf; primary plantar flexor of ankle and secondary flexor of knee; originates from femoral condyles.",
    "etymology": "Gastro- (Greek 'gaster' = belly/stomach) + -cnemius (Greek 'kneme' = leg)",
    "example": "The gastrocnemius muscle forms the visible bulge of the calf and is innervated by the tibial nerve.",
    "module": 9
  },
  {
    "id": "deltoid-definition",
    "term": "Deltoid",
    "category": "muscular",
    "definition": "Large triangular muscle of shoulder with three heads (anterior, middle, posterior); primary abductor of arm and assists in flexion/extension.",
    "etymology": "Deltoid (from Greek 'delta' = triangle + -oid = resembling)",
    "example": "The deltoid muscle is commonly used for intramuscular injections in the upper arm.",
    "module": 9
  },
  {
    "id": "trapezius-definition",
    "term": "Trapezius",
    "category": "muscular",
    "definition": "Large trapezoid-shaped muscle of upper back; elevates, retracts, and rotates scapula; extends neck.",
    "etymology": "Trapezius (from Greek 'trapeza' = table + -ius = like)",
    "example": "The trapezius is divided into upper, middle, and lower fibers with distinct functions in scapular motion.",
    "module": 9
  },
  {
    "id": "pectoralis-definition",
    "term": "Pectoralis",
    "category": "muscular",
    "definition": "Chest muscle; pectoralis major is primary flexor and adductor of arm; pectoralis minor depresses and retracts scapula.",
    "etymology": "Pectoralis (from Latin 'pectoralis' = relating to the breast)",
    "example": "The pectoralis major originates from the sternum and clavicle and inserts on the humerus.",
    "module": 9
  },
  {
    "id": "rectus-abdominis-definition",
    "term": "Rectus Abdominis",
    "category": "muscular",
    "definition": "Long vertical abdominal muscle; flexes trunk, compresses abdominal contents, and stabilizes pelvis.",
    "etymology": "Rectus (Latin = straight) + abdominis (Latin = of the abdomen)",
    "example": "The rectus abdominis is separated into segments by tendinous inscriptions creating the 'six-pack' appearance.",
    "module": 9
  },
  {
    "id": "diaphragm-definition",
    "term": "Diaphragm",
    "category": "muscular",
    "definition": "Primary muscle of respiration; dome-shaped muscle that separates thoracic and abdominal cavities; contracts to increase thoracic volume.",
    "etymology": "Diaphragm (from Greek 'diaphragma' = partition/dividing wall)",
    "example": "The diaphragm is innervated by the phrenic nerve and contracts during inspiration to draw air into the lungs.",
    "module": 9
  },
  {
    "id": "intercostal-muscles-definition",
    "term": "Intercostal Muscles",
    "category": "muscular",
    "definition": "Muscles between ribs; external intercostals elevate ribs during inspiration; internal intercostals depress ribs during expiration.",
    "etymology": "Inter- (Latin = between) + costal (Latin 'costalis' = of the ribs)",
    "example": "The intercostal muscles work with the diaphragm to regulate breathing and maintain rib cage stability.",
    "module": 9
  },
  {
    "id": "flexion-definition",
    "term": "Flexion",
    "category": "muscular",
    "definition": "Movement that decreases the angle between two bones at a joint; brings body parts closer together.",
    "etymology": "Flexion (from Latin 'flexio' = bending)",
    "example": "Flexion of the knee joint brings the heel closer to the buttocks.",
    "module": 9
  },
  {
    "id": "extension-definition",
    "term": "Extension",
    "category": "muscular",
    "definition": "Movement that increases the angle between two bones at a joint; straightens or moves body parts apart.",
    "etymology": "Extension (from Latin 'extensio' = stretching out)",
    "example": "Extension of the elbow joint straightens the arm by increasing the angle at the joint.",
    "module": 9
  },
  {
    "id": "abduction-definition",
    "term": "Abduction",
    "category": "muscular",
    "definition": "Movement that moves a body part away from the midline of the body.",
    "etymology": "Abduction (from Latin 'abductio' = leading away)",
    "example": "Abduction of the arm at the shoulder joint raises the arm out to the side away from the body.",
    "module": 9
  },
  {
    "id": "adduction-definition",
    "term": "Adduction",
    "category": "muscular",
    "definition": "Movement that moves a body part toward the midline of the body.",
    "etymology": "Adduction (from Latin 'adductio' = leading toward)",
    "example": "Adduction of the thigh brings the leg back toward the midline of the body.",
    "module": 9
  },
  {
    "id": "rotation-definition",
    "term": "Rotation",
    "category": "muscular",
    "definition": "Circular movement of a bone around its longitudinal axis; medial (internal) or lateral (external).",
    "etymology": "Rotation (from Latin 'rotatio' = turning)",
    "example": "Rotation of the shoulder joint allows the arm to turn in a circular motion around the humerus.",
    "module": 9
  },
  {
    "id": "supination-definition",
    "term": "Supination",
    "category": "muscular",
    "definition": "Rotational movement of the forearm that turns the palm upward; palm faces anterior/superior direction.",
    "etymology": "Supination (from Latin 'supinus' = lying on back)",
    "example": "Supination of the forearm requires contraction of the supinator muscle and biceps brachii.",
    "module": 9
  },
  {
    "id": "pronation-definition",
    "term": "Pronation",
    "category": "muscular",
    "definition": "Rotational movement of the forearm that turns the palm downward; palm faces posterior/inferior direction.",
    "etymology": "Pronation (from Latin 'pronus' = lying face down)",
    "example": "Pronation of the forearm is performed by the pronator teres and pronator quadratus muscles.",
    "module": 9
  },
  {
    "id": "dorsiflexion-definition",
    "term": "Dorsiflexion",
    "category": "muscular",
    "definition": "Upward bending of the foot at the ankle joint; toes point upward toward the shin.",
    "etymology": "Dorsi- (Latin 'dorsum' = back) + flexion (Latin 'flexio' = bending)",
    "example": "Dorsiflexion of the ankle is performed by the tibialis anterior muscle.",
    "module": 9
  },
  {
    "id": "plantar-flexion-definition",
    "term": "Plantar Flexion",
    "category": "muscular",
    "definition": "Movement of the foot downward, pointing the toes away from the body, decreasing the angle between the foot and leg.",
    "etymology": "Plantar (sole of foot) + flexion (bending movement)",
    "example": "Standing on tiptoes demonstrates plantar flexion of the ankle.",
    "module": 9
  },
  {
    "id": "myalgia-definition",
    "term": "Myalgia",
    "category": "muscular",
    "definition": "Muscle pain or aching, often diffuse and associated with viral infections, fibromyalgia, or overuse injuries.",
    "etymology": "my/o (muscle) + -algia (pain)",
    "example": "The patient reported myalgia in the upper back and shoulders after the flu.",
    "module": 9
  },
  {
    "id": "myopathy-definition",
    "term": "Myopathy",
    "category": "muscular",
    "definition": "Any disease or dysfunction of the skeletal muscles, resulting in weakness or breakdown of muscle tissue.",
    "etymology": "my/o (muscle) + -pathy (disease condition)",
    "example": "Diabetic myopathy causes progressive weakness in the legs and feet.",
    "module": 9
  },
  {
    "id": "muscular-dystrophy-definition",
    "term": "Muscular Dystrophy",
    "category": "muscular",
    "definition": "Group of progressive genetic disorders characterized by muscle weakness and degeneration due to defective proteins.",
    "etymology": "Muscular (relating to muscle) + dystrophy (abnormal development/degeneration)",
    "example": "Duchenne muscular dystrophy typically manifests in male children before age 5.",
    "module": 9
  },
  {
    "id": "fibromyalgia-definition",
    "term": "Fibromyalgia",
    "category": "muscular",
    "definition": "Chronic condition characterized by widespread musculoskeletal pain, tender points, fatigue, and sleep disturbances.",
    "etymology": "fibr/o (fiber) + my/o (muscle) + -algia (pain)",
    "example": "Fibromyalgia patients often experience morning stiffness and cognitive difficulties.",
    "module": 9
  },
  {
    "id": "myositis-definition",
    "term": "Myositis",
    "category": "muscular",
    "definition": "Inflammation of muscle tissue, causing pain, swelling, and weakness; may result from infection, autoimmune disease, or injury.",
    "etymology": "my/o (muscle) + -itis (inflammation)",
    "example": "Viral myositis can follow upper respiratory infections and cause temporary muscle soreness.",
    "module": 9
  },
  {
    "id": "rhabdomyolysis-definition",
    "term": "Rhabdomyolysis",
    "category": "muscular",
    "definition": "Rapid breakdown of muscle tissue releasing myoglobin into the bloodstream, potentially causing acute kidney injury.",
    "etymology": "rhabdo (rod-shaped/striated) + my/o (muscle) + -lysis (breakdown)",
    "example": "Rhabdomyolysis can result from crush injuries, extreme exertion, or certain medications.",
    "module": 9
  },
  {
    "id": "muscle-strain-definition",
    "term": "Muscle Strain",
    "category": "muscular",
    "definition": "Injury involving overstretching or tearing of muscle fibers or tendons; classified as Grade I, II, or III based on severity.",
    "etymology": "Strain (to pull or stretch beyond normal limits)",
    "example": "A hamstring strain commonly occurs in athletes during sprinting activities.",
    "module": 9
  },
  {
    "id": "muscle-sprain-definition",
    "term": "Muscle Sprain",
    "category": "muscular",
    "definition": "Injury to ligaments (connective tissue connecting bones) rather than muscle fibers, resulting from joint trauma.",
    "etymology": "Sprain (sudden wrenching injury to joint ligaments)",
    "example": "An ankle sprain occurs when ligaments are stretched or torn during inversion injury.",
    "module": 9
  },
  {
    "id": "myofascial-release-definition",
    "term": "Myofascial Release",
    "category": "muscular",
    "definition": "Therapeutic technique applying sustained pressure to fascial restrictions to reduce pain and improve mobility.",
    "etymology": "my/o (muscle) + fascial (relating to fascia/connective tissue)",
    "example": "Myofascial release therapy helps alleviate tension headaches originating from neck muscle tightness.",
    "module": 9
  },
  {
    "id": "hypertrophy-muscle-definition",
    "term": "Muscle Hypertrophy",
    "category": "muscular",
    "definition": "Enlargement of muscle tissue resulting from increased protein synthesis, typically from resistance training.",
    "etymology": "hyper- (excessive) + -trophy (growth/development)",
    "example": "Bicep hypertrophy develops in weight trainers who perform regular resistance exercises.",
    "module": 9
  },
  {
    "id": "atrophy-muscle-definition",
    "term": "Muscle Atrophy",
    "category": "muscular",
    "definition": "Decrease in muscle mass and strength due to disuse, aging, neurological disease, or malnutrition.",
    "etymology": "a- (without) + -trophy (growth)",
    "example": "Prolonged immobilization in a cast leads to quadriceps atrophy.",
    "module": 9
  },
  {
    "id": "tendon-definition",
    "term": "Tendon",
    "category": "muscular",
    "definition": "Dense fibrous connective tissue that attaches muscle to bone, transmitting muscle contractions to produce movement.",
    "etymology": "From Latin 'tendere' (to stretch)",
    "example": "The Achilles tendon connects the calf muscles to the heel bone.",
    "module": 9
  },
  {
    "id": "ligament-definition",
    "term": "Ligament",
    "category": "muscular",
    "definition": "Fibrous connective tissue joining bones to bones or supporting organs, providing stability to joints.",
    "etymology": "From Latin 'ligare' (to bind)",
    "example": "The anterior cruciate ligament (ACL) provides knee stability and is frequently injured in sports.",
    "module": 9
  },
  {
    "id": "kinesiotherapy-definition",
    "term": "Kinesiotherapy",
    "category": "muscular",
    "definition": "Therapeutic movement and exercise treatment used to rehabilitate injured muscles and improve physical function.",
    "etymology": "kinesi/o (movement) + therapy (treatment)",
    "example": "Kinesiotherapy following knee surgery helps restore range of motion and strength.",
    "module": 9
  },
  {
    "id": "akinesia-definition",
    "term": "Akinesia",
    "category": "muscular",
    "definition": "Loss or absence of muscle movement or voluntary motion, often associated with neurological disorders.",
    "etymology": "a- (without) + kinesi/o (movement) + -a (condition)",
    "example": "Akinesia is a primary symptom of Parkinson's disease affecting voluntary movement initiation.",
    "module": 9
  },
  {
    "id": "myoneural-junction-definition",
    "term": "Myoneural Junction",
    "category": "muscular",
    "definition": "Synapse between motor neuron and skeletal muscle fiber where neurotransmitter acetylcholine transmits signals.",
    "etymology": "my/o (muscle) + neuro (nerve) + junction (connection)",
    "example": "Myasthenia gravis affects the myoneural junction, preventing proper muscle contraction.",
    "module": 9
  },
  {
    "id": "myokinetic-definition",
    "term": "Myokinetic",
    "category": "muscular",
    "definition": "Relating to muscle movement or the mechanics of muscle contraction and locomotion.",
    "etymology": "my/o (muscle) + kinetic (relating to motion)",
    "example": "Myokinetic analysis helps athletes optimize movement patterns to prevent injury.",
    "module": 9
  },
  {
    "id": "fibrosis-muscle-definition",
    "term": "Muscle Fibrosis",
    "category": "muscular",
    "definition": "Excessive formation of fibrous tissue in muscles, replacing healthy muscle with scar tissue and reducing function.",
    "etymology": "fibr/o (fiber/fibrous tissue) + -osis (abnormal condition)",
    "example": "Post-injury muscle fibrosis can limit range of motion and strength if not properly rehabilitated.",
    "module": 9
  },
  {
    "id": "contraction-muscle-definition",
    "term": "Muscle Contraction",
    "category": "muscular",
    "definition": "Shortening of muscle fibers in response to neural stimulation, generating force and producing movement or maintaining posture.",
    "etymology": "Contraction (drawing together/shortening)",
    "example": "Isotonic muscle contractions produce movement, while isometric contractions generate force without movement.",
    "module": 9
  },
  {
    "id": "neur-001-neuron",
    "term": "Neuron",
    "category": "neurology",
    "definition": "Basic functional unit of the nervous system consisting of a cell body, dendrites, and an axon that transmits electrical and chemical signals",
    "etymology": "From Greek 'neuron' meaning nerve or sinew",
    "example": "Motor neurons in the spinal cord transmit signals to muscles causing contraction.",
    "module": 10
  },
  {
    "id": "neur-002-dendrite",
    "term": "Dendrite",
    "category": "neurology",
    "definition": "Branch-like extensions of the neuron cell body that receive signals from other neurons",
    "etymology": "From Greek 'dendron' meaning tree, due to its branching appearance",
    "example": "Dendrites on pyramidal neurons in the cerebral cortex receive input from thousands of synapses.",
    "module": 10
  },
  {
    "id": "neur-003-axon",
    "term": "Axon",
    "category": "neurology",
    "definition": "Long, thin projection of a neuron that transmits action potentials away from the cell body to other neurons or effector cells",
    "etymology": "From Greek 'axon' meaning axis",
    "example": "The axon of a motor neuron extends from the spinal cord to a skeletal muscle.",
    "module": 10
  },
  {
    "id": "neur-004-myelin-sheath",
    "term": "Myelin Sheath",
    "category": "neurology",
    "definition": "Insulating layer of lipid and protein that wraps around axons, increasing the speed of action potential conduction",
    "etymology": "From Greek 'myelos' meaning marrow",
    "example": "In multiple sclerosis, the myelin sheath is damaged, slowing nerve impulse transmission.",
    "module": 10
  },
  {
    "id": "neur-005-synapse",
    "term": "Synapse",
    "category": "neurology",
    "definition": "Junction between two neurons or between a neuron and an effector cell where neurotransmitters are released",
    "etymology": "From Greek 'syn' meaning together and 'haptein' meaning to clasp",
    "example": "At the neuromuscular synapse, acetylcholine transmits signals from motor neurons to muscle fibers.",
    "module": 10
  },
  {
    "id": "neur-006-neurotransmitter",
    "term": "Neurotransmitter",
    "category": "neurology",
    "definition": "Chemical messenger released at synapses that transmits signals between neurons or from neurons to effector organs",
    "etymology": "From 'neuro-' (nerve) and Latin 'transmittere' (to send across)",
    "example": "Dopamine is a neurotransmitter involved in movement control and reward processing.",
    "module": 10
  },
  {
    "id": "neur-007-cerebrum",
    "term": "Cerebrum",
    "category": "neurology",
    "definition": "Largest part of the brain consisting of two hemispheres, responsible for conscious thought, memory, and voluntary movement",
    "etymology": "From Latin 'cerebrum' meaning brain",
    "example": "The cerebrum contains the motor and sensory cortices that control body functions.",
    "module": 10
  },
  {
    "id": "neur-008-cerebellum",
    "term": "Cerebellum",
    "category": "neurology",
    "definition": "Region of the brain posterior to the brainstem that coordinates movement, balance, and proprioception",
    "etymology": "From Latin 'cerebellum' meaning little brain",
    "example": "Damage to the cerebellum results in loss of coordination and balance (ataxia).",
    "module": 10
  },
  {
    "id": "neur-009-brainstem",
    "term": "Brainstem",
    "category": "neurology",
    "definition": "Region connecting the brain to the spinal cord, comprising the midbrain, pons, and medulla oblongata, controlling vital functions",
    "etymology": "From English 'brain' and 'stem'",
    "example": "The brainstem controls heart rate, respiration, and blood pressure.",
    "module": 10
  },
  {
    "id": "neur-010-medulla-oblongata",
    "term": "Medulla Oblongata",
    "category": "neurology",
    "definition": "Lowest part of the brainstem that controls involuntary functions including breathing, heart rate, and swallowing",
    "etymology": "From Latin 'medulla' meaning marrow and 'oblongata' meaning elongated",
    "example": "Damage to the medulla oblongata can be fatal due to loss of respiratory control.",
    "module": 10
  },
  {
    "id": "neur-011-pons",
    "term": "Pons",
    "category": "neurology",
    "definition": "Part of the brainstem that acts as a bridge connecting the medulla to the midbrain and relays signals between cerebrum and cerebellum",
    "etymology": "From Latin 'pons' meaning bridge",
    "example": "The pons contains nuclei that regulate sleep-wake cycles and breathing patterns.",
    "module": 10
  },
  {
    "id": "neur-012-thalamus",
    "term": "Thalamus",
    "category": "neurology",
    "definition": "Paired structure in the diencephalon that relays sensory information to the cerebral cortex and regulates sleep and consciousness",
    "etymology": "From Greek 'thalamos' meaning chamber",
    "example": "Sensory signals from the spinal cord are processed and relayed by the thalamus to appropriate cortical areas.",
    "module": 10
  },
  {
    "id": "neur-013-hypothalamus",
    "term": "Hypothalamus",
    "category": "neurology",
    "definition": "Small region of the diencephalon below the thalamus that regulates hormone secretion, temperature, hunger, and homeostasis",
    "etymology": "From Greek 'hypo' (below) and 'thalamos' (chamber)",
    "example": "The hypothalamus produces antidiuretic hormone (ADH) to regulate water balance.",
    "module": 10
  },
  {
    "id": "neur-014-corpus-callosum",
    "term": "Corpus Callosum",
    "category": "neurology",
    "definition": "Largest white matter structure in the brain consisting of approximately 200 million axons connecting the two cerebral hemispheres",
    "etymology": "From Latin 'corpus' (body) and 'callosus' (hard)",
    "example": "Severing the corpus callosum limits interhemispheric communication, studied in split-brain research.",
    "module": 10
  },
  {
    "id": "neur-015-basal-ganglia",
    "term": "Basal Ganglia",
    "category": "neurology",
    "definition": "Group of subcortical nuclei involved in motor control, habit formation, and movement regulation",
    "etymology": "From Greek 'basis' (base) and Latin 'ganglia' (knots)",
    "example": "Degeneration of basal ganglia in Parkinson's disease causes tremor and rigidity.",
    "module": 10
  },
  {
    "id": "neur-016-dura-mater",
    "term": "Dura Mater",
    "category": "neurology",
    "definition": "Outermost and toughest of the three meninges that surround the brain and spinal cord",
    "etymology": "From Latin 'dura' (hard) and 'mater' (mother)",
    "example": "Epidural hematoma occurs between the dura mater and the skull.",
    "module": 10
  },
  {
    "id": "neur-017-arachnoid",
    "term": "Arachnoid",
    "category": "neurology",
    "definition": "Middle membrane of the three meninges, containing cerebrospinal fluid and having a web-like appearance",
    "etymology": "From Greek 'arachnē' meaning spider web",
    "example": "Subarachnoid hemorrhage occurs when bleeding occurs between the arachnoid and pia mater.",
    "module": 10
  },
  {
    "id": "neur-018-pia-mater",
    "term": "Pia Mater",
    "category": "neurology",
    "definition": "Innermost membrane of the three meninges that adheres directly to the brain and spinal cord surface",
    "etymology": "From Latin 'pia' (tender) and 'mater' (mother)",
    "example": "The pia mater is highly vascularized and provides nutrients to neural tissue.",
    "module": 10
  },
  {
    "id": "neur-019-cerebrospinal-fluid",
    "term": "Cerebrospinal Fluid (CSF)",
    "category": "neurology",
    "definition": "Clear fluid surrounding the brain and spinal cord that provides cushioning, nutrient delivery, and waste removal",
    "etymology": "From 'cerebro-' (brain), 'spinal' (of the spine), and Latin 'fluidus' (flowing)",
    "example": "CSF analysis via lumbar puncture helps diagnose meningitis and other neurological conditions.",
    "module": 10
  },
  {
    "id": "neur-020-ventricles",
    "term": "Ventricles",
    "category": "neurology",
    "definition": "Four fluid-filled cavities within the brain that produce and circulate cerebrospinal fluid",
    "etymology": "From Latin 'ventriculus' meaning little belly",
    "example": "Hydrocephalus occurs when CSF accumulates in the ventricles due to impaired drainage.",
    "module": 10
  },
  {
    "id": "neur-021-cranial-nerves",
    "term": "Cranial Nerves",
    "category": "neurology",
    "definition": "Twelve pairs of nerves that emerge from the brain and brainstem, transmitting sensory and motor information to the head and neck",
    "etymology": "From Latin 'cranium' (skull) and 'nervus' (nerve)",
    "example": "The optic nerve (CN II) transmits visual information from the eyes to the brain.",
    "module": 10
  },
  {
    "id": "neur-022-spinal-nerves",
    "term": "Spinal Nerves",
    "category": "neurology",
    "definition": "Thirty-one pairs of nerves arising from the spinal cord that transmit sensory and motor signals to the trunk and limbs",
    "etymology": "From Latin 'spinalis' (relating to the spine) and 'nervus' (nerve)",
    "example": "Sciatic nerve is the largest spinal nerve, providing innervation to the lower limbs.",
    "module": 10
  },
  {
    "id": "neur-023-autonomic-nervous-system",
    "term": "Autonomic Nervous System",
    "category": "neurology",
    "definition": "Division of the peripheral nervous system that controls involuntary functions including heart rate, digestion, and gland secretion",
    "etymology": "From Greek 'autos' (self) and 'nomos' (law)",
    "example": "The autonomic nervous system maintains homeostasis without conscious effort.",
    "module": 10
  },
  {
    "id": "neur-024-sympathetic-nervous-system",
    "term": "Sympathetic Nervous System",
    "category": "neurology",
    "definition": "Division of the autonomic nervous system responsible for 'fight or flight' responses that increase heart rate and blood pressure",
    "etymology": "From Greek 'sympatheia' meaning fellow feeling or affection",
    "example": "During stress, sympathetic activation increases adrenaline release and heart rate.",
    "module": 10
  },
  {
    "id": "neur-025-parasympathetic-nervous-system",
    "term": "Parasympathetic Nervous System",
    "category": "neurology",
    "definition": "Division of the autonomic nervous system responsible for 'rest and digest' responses that lower heart rate and promote digestion",
    "etymology": "From Greek 'para' (beside) and 'sympatheia' (fellow feeling)",
    "example": "Parasympathetic activation via the vagus nerve promotes gastric secretion and intestinal motility.",
    "module": 10
  },
  {
    "id": "neur-026-stroke-cva",
    "term": "Stroke (Cerebrovascular Accident)",
    "category": "neurology",
    "definition": "Sudden loss of brain function caused by interruption of blood flow to the brain, either by blockage (ischemic) or rupture (hemorrhagic) of a cerebral blood vessel.",
    "etymology": "Stroke: from Old English; CVA: cerebro- (brain) + vascular (blood vessel) + accident (sudden event)",
    "example": "A 68-year-old patient presented with sudden weakness on the left side and slurred speech, diagnosed with an acute ischemic stroke requiring immediate thrombolytic therapy.",
    "module": 10
  },
  {
    "id": "neur-027-transient-ischemic-attack",
    "term": "Transient Ischemic Attack (TIA)",
    "category": "neurology",
    "definition": "A temporary episode of neurological dysfunction caused by inadequate blood flow to the brain that resolves completely within 24 hours, often serving as a warning sign of impending stroke.",
    "etymology": "Transient (temporary) + ischemic (lack of blood flow) + attack (sudden occurrence)",
    "example": "The patient experienced sudden dizziness and vision loss lasting 30 minutes that completely resolved, consistent with a TIA, warranting further cardiovascular workup.",
    "module": 10
  },
  {
    "id": "neur-028-seizure",
    "term": "Seizure",
    "category": "neurology",
    "definition": "Sudden, uncontrolled electrical activity in the brain resulting in altered consciousness, involuntary movements, sensory disturbances, or behavioral changes.",
    "etymology": "From Old French 'seizir' meaning to take or grasp",
    "example": "The child experienced a generalized tonic-clonic seizure characterized by loss of consciousness and sustained muscle contractions lasting two minutes.",
    "module": 10
  },
  {
    "id": "neur-029-epilepsy",
    "term": "Epilepsy",
    "category": "neurology",
    "definition": "Chronic neurological disorder characterized by recurrent, unprovoked seizures lasting more than 24 hours or a predisposition to generate seizures.",
    "etymology": "From Greek 'epilepsia' meaning seizure or seizure disorder",
    "example": "The 14-year-old was diagnosed with temporal lobe epilepsy after experiencing three unprovoked seizures over six months.",
    "module": 10
  },
  {
    "id": "neur-030-parkinson-disease",
    "term": "Parkinson's Disease",
    "category": "neurology",
    "definition": "Progressive neurodegenerative disorder characterized by loss of dopamine-producing neurons in the substantia nigra, resulting in tremor, rigidity, bradykinesia, and postural instability.",
    "etymology": "Named after James Parkinson, English physician who described the condition in 1817",
    "example": "A 72-year-old male presented with resting tremor, muscle rigidity, and slow movement consistent with idiopathic Parkinson's disease.",
    "module": 10
  },
  {
    "id": "neur-031-alzheimer-disease",
    "term": "Alzheimer's Disease",
    "category": "neurology",
    "definition": "Progressive neurodegenerative disorder characterized by accumulation of amyloid-beta plaques and tau tangles in the brain, causing progressive cognitive decline, memory loss, and dementia.",
    "etymology": "Named after Alois Alzheimer, German psychiatrist who first identified the disease pathology in 1906",
    "example": "The 68-year-old patient with progressive memory loss, disorientation, and behavioral changes was diagnosed with Alzheimer's disease after excluding other causes of dementia.",
    "module": 10
  },
  {
    "id": "neur-032-multiple-sclerosis",
    "term": "Multiple Sclerosis (MS)",
    "category": "neurology",
    "definition": "Autoimmune inflammatory disease in which the immune system attacks the myelin sheath covering nerve fibers, causing demyelination, neurological symptoms, and progressive disability.",
    "etymology": "Multiple (many) + sclerosis (hardening); referring to multiple areas of hardened, scarred tissue in the nervous system",
    "example": "A 35-year-old woman with relapsing-remitting MS presented with optic neuritis causing vision loss in one eye.",
    "module": 10
  },
  {
    "id": "neur-033-als",
    "term": "Amyotrophic Lateral Sclerosis (ALS)",
    "category": "neurology",
    "definition": "Progressive neurodegenerative disease affecting motor neurons in the brain and spinal cord, resulting in muscle weakness, atrophy, and eventual paralysis and respiratory failure.",
    "etymology": "Amyo- (muscle) + -trophic (nourishment); lateral (side) + sclerosis (hardening)",
    "example": "A 55-year-old male with progressive muscle weakness and fasciculations was diagnosed with ALS affecting lower motor neurons.",
    "module": 10
  },
  {
    "id": "neur-034-meningitis",
    "term": "Meningitis",
    "category": "neurology",
    "definition": "Acute inflammation of the meninges (membranes surrounding the brain and spinal cord) caused by viral, bacterial, or fungal infection, characterized by fever, headache, and neck stiffness.",
    "etymology": "Meninges (membranes) + -itis (inflammation)",
    "example": "A 22-year-old college student with fever, severe headache, and neck rigidity was diagnosed with bacterial meningitis requiring immediate antibiotic therapy.",
    "module": 10
  },
  {
    "id": "neur-035-encephalitis",
    "term": "Encephalitis",
    "category": "neurology",
    "definition": "Inflammation of the brain tissue, usually caused by viral infection, characterized by fever, headache, altered consciousness, seizures, and neurological dysfunction.",
    "etymology": "Encephal/o (brain) + -itis (inflammation)",
    "example": "The patient with West Nile virus infection developed encephalitis with confusion, fever, and focal neurological deficits.",
    "module": 10
  },
  {
    "id": "neur-036-peripheral-neuropathy",
    "term": "Peripheral Neuropathy",
    "category": "neurology",
    "definition": "Disease affecting the peripheral nerves causing weakness, numbness, or pain, most commonly in the hands and feet; often associated with diabetes, infections, or toxic exposures.",
    "etymology": "Peripher/al (outer) + neuro- (nerve) + -pathy (disease)",
    "example": "A diabetic patient developed distal peripheral neuropathy with sensory loss and pain in both feet.",
    "module": 10
  },
  {
    "id": "neur-037-sciatica",
    "term": "Sciatica",
    "category": "neurology",
    "definition": "Pain, weakness, or numbness along the sciatic nerve pathway, typically radiating from the lower back through the buttock and down one leg, caused by nerve compression or irritation.",
    "etymology": "From Latin 'sciatic' relating to the hip or ischium bone where the sciatic nerve originates",
    "example": "A 45-year-old with a herniated lumbar disc developed acute sciatica with radiating pain down the right leg to the foot.",
    "module": 10
  },
  {
    "id": "neur-038-concussion",
    "term": "Concussion",
    "category": "neurology",
    "definition": "Type of traumatic brain injury caused by a blow or jolt to the head that changes how the brain normally works, resulting in temporary loss of consciousness and various neurological symptoms.",
    "etymology": "From Latin 'concussus' meaning shaken together",
    "example": "An athlete with a concussion from a fall presented with confusion, dizziness, and headache requiring neurological evaluation and activity restrictions.",
    "module": 10
  },
  {
    "id": "neur-039-eeg",
    "term": "Electroencephalography (EEG)",
    "category": "neurology",
    "definition": "Diagnostic procedure that records electrical activity of the brain using electrodes placed on the scalp, used to detect seizures, sleep disorders, and other neurological conditions.",
    "etymology": "Electro- (electric) + encephal/o (brain) + -graphy (recording)",
    "example": "The EEG showed spike-and-wave discharges characteristic of absence seizures, confirming the diagnosis of childhood absence epilepsy.",
    "module": 10
  },
  {
    "id": "neur-040-lumbar-puncture",
    "term": "Lumbar Puncture (Spinal Tap)",
    "category": "neurology",
    "definition": "Diagnostic and therapeutic procedure in which a needle is inserted into the subarachnoid space of the lumbar spine to obtain cerebrospinal fluid for analysis or to administer medications.",
    "etymology": "Lumbar (lower back) + puncture (perforation with a pointed instrument)",
    "example": "A lumbar puncture was performed to obtain CSF for analysis in a patient with suspected meningitis.",
    "module": 10
  },
  {
    "id": "neur-041-mri-brain",
    "term": "Magnetic Resonance Imaging (MRI)",
    "category": "neurology",
    "definition": "Advanced imaging technique using magnetic fields and radio waves to create detailed cross-sectional images of the brain and spinal cord without radiation exposure.",
    "etymology": "Magnetic (force field) + resonance (vibration) + imaging (creating visual representation)",
    "example": "Brain MRI with contrast was ordered to rule out intracranial masses in a patient with persistent headaches.",
    "module": 10
  },
  {
    "id": "neur-042-ct-scan",
    "term": "Computed Tomography (CT) Scan",
    "category": "neurology",
    "definition": "Rapid imaging technique using X-rays and computer processing to create detailed cross-sectional images of the brain, useful for detecting hemorrhage, bone involvement, and acute changes.",
    "etymology": "Computed (calculated by computer) + tomography (imaging of sections or slices)",
    "example": "Stat head CT revealed acute subdural hematoma requiring emergency neurosurgical intervention.",
    "module": 10
  },
  {
    "id": "neur-043-neur-combining-form",
    "term": "Neur- (Combining Form)",
    "category": "neurology",
    "definition": "Combining form meaning nerve or nervous system; used as a prefix in medical terminology to create terms related to nerves and neurological conditions.",
    "etymology": "From Greek 'neuron' meaning nerve",
    "example": "Terms such as neurology, neuropathy, neurogenic, and neurosurgery all incorporate the neur- combining form.",
    "module": 10
  },
  {
    "id": "neur-044-encephal-combining-form",
    "term": "Encephal- (Combining Form)",
    "category": "neurology",
    "definition": "Combining form meaning brain; used to create medical terms related to the brain and brain disorders.",
    "etymology": "From Greek 'enkephalos' meaning within the head or brain",
    "example": "Terms such as encephalitis, encephalopathy, and electroencephalography use the encephal- combining form.",
    "module": 10
  },
  {
    "id": "neur-045-myel-combining-form",
    "term": "Myel- (Combining Form)",
    "category": "neurology",
    "definition": "Combining form meaning spinal cord or bone marrow; used in medical terminology for conditions affecting the spinal cord.",
    "etymology": "From Greek 'myelos' meaning marrow or pith",
    "example": "Terms such as myelitis, myelopathy, and myelography relate to disorders of the spinal cord.",
    "module": 10
  },
  {
    "id": "neur-046-cerebell-combining-form",
    "term": "Cerebell- (Combining Form)",
    "category": "neurology",
    "definition": "Combining form meaning little brain; refers to the cerebellum, the brain region responsible for coordination and balance.",
    "etymology": "From Latin 'cerebellum' diminutive of 'cerebrum' meaning small brain",
    "example": "Terms such as cerebellar ataxia and cerebellitis involve the cerebell- combining form.",
    "module": 10
  },
  {
    "id": "neur-047-pathy-combining-form",
    "term": "-pathy (Combining Form/Suffix)",
    "category": "neurology",
    "definition": "Combining form meaning disease or disorder; commonly used as a suffix to describe pathological conditions of organs or systems.",
    "etymology": "From Greek 'pathos' meaning suffering, disease, or feeling",
    "example": "Medical terms such as neuropathy, encephalopathy, and myelopathy use the -pathy combining form.",
    "module": 10
  },
  {
    "id": "neur-048-algia-combining-form",
    "term": "-algia (Combining Form/Suffix)",
    "category": "neurology",
    "definition": "Combining form meaning pain; used as a suffix to create terms describing painful conditions.",
    "etymology": "From Greek 'algos' meaning pain",
    "example": "Terms such as neuralgia, sciatica (related to leg pain), and migraine describe various painful neurological conditions.",
    "module": 10
  },
  {
    "id": "neur-049-itis-combining-form",
    "term": "-itis (Combining Form/Suffix)",
    "category": "neurology",
    "definition": "Combining form meaning inflammation; used as a suffix to indicate inflammatory conditions of various body structures.",
    "etymology": "From Greek '-itis' meaning inflammation",
    "example": "Terms such as meningitis, encephalitis, neuritis, and myelitis describe inflammatory neurological conditions.",
    "module": 10
  },
  {
    "id": "neur-050-osis-combining-form",
    "term": "-osis (Combining Form/Suffix)",
    "category": "neurology",
    "definition": "Combining form meaning abnormal condition, disease process, or increase; commonly used in medical terminology to describe pathological states.",
    "etymology": "From Greek '-osis' meaning condition or state",
    "example": "Terms such as sclerosis, necrosis, and neurosis use the -osis combining form to indicate disease conditions.",
    "module": 10
  },
  {
    "id": "neur-051-plexus",
    "term": "Plexus",
    "category": "neurology",
    "definition": "A network of nerves or blood vessels formed by the intertwining of branches, particularly referring to nerve networks like the brachial plexus or lumbar plexus",
    "etymology": "Latin plexus, meaning 'braided' or 'interwoven'",
    "example": "The brachial plexus is a network of nerves that supplies the arm and hand with motor and sensory innervation",
    "module": 10
  },
  {
    "id": "neur-052-ganglion",
    "term": "Ganglion",
    "category": "neurology",
    "definition": "A cluster of nerve cell bodies located outside the central nervous system; serves as a relay station for nerve impulses",
    "etymology": "Greek ganglion, meaning 'tumor' or 'knot'",
    "example": "The dorsal root ganglia contain the cell bodies of sensory neurons in spinal nerves",
    "module": 10
  },
  {
    "id": "neur-053-reflex-arc",
    "term": "Reflex Arc",
    "category": "neurology",
    "definition": "The neural pathway that controls a reflex; consists of a sensory receptor, sensory neuron, interneuron, motor neuron, and effector muscle",
    "etymology": "Latin reflex meaning 'bent back' and arcus meaning 'bow'",
    "example": "The patellar reflex arc allows the leg to kick when the tendon is tapped without conscious control",
    "module": 10
  },
  {
    "id": "neur-054-demyelination",
    "term": "Demyelination",
    "category": "neurology",
    "definition": "Loss or destruction of the myelin sheath surrounding nerve fibers, resulting in slowed or blocked nerve impulse conduction",
    "etymology": "de- (removal) + myelin + -ation (process)",
    "example": "Multiple sclerosis causes demyelination of nerve fibers in the brain and spinal cord",
    "module": 10
  },
  {
    "id": "neur-055-neuropathic-pain",
    "term": "Neuropathic Pain",
    "category": "neurology",
    "definition": "Pain caused by damage or disease affecting the somatosensory nervous system, characterized by burning, tingling, or shooting sensations",
    "etymology": "neuro- (nerve) + path (disease) + -ic (relating to)",
    "example": "A patient with diabetic neuropathy experiences neuropathic pain in the feet and lower legs",
    "module": 10
  },
  {
    "id": "neur-056-aphasia",
    "term": "Aphasia",
    "category": "neurology",
    "definition": "Loss of ability to understand or express speech, typically resulting from damage to language centers in the brain such as Broca's or Wernicke's area",
    "etymology": "Greek a- (without) + phasis (speech)",
    "example": "A stroke affecting Broca's area may result in expressive aphasia, making it difficult to produce speech",
    "module": 10
  },
  {
    "id": "neur-057-ataxia",
    "term": "Ataxia",
    "category": "neurology",
    "definition": "Lack of muscle coordination and control, resulting in unsteady movements; often caused by cerebellar dysfunction",
    "etymology": "Greek a- (without) + taxis (order or arrangement)",
    "example": "A patient with cerebellar ataxia exhibits difficulty with balance and purposeful movements",
    "module": 10
  },
  {
    "id": "neur-058-spasticity",
    "term": "Spasticity",
    "category": "neurology",
    "definition": "Involuntary muscle stiffness and increased tone, often accompanied by exaggerated reflexes; commonly occurs after stroke or spinal cord injury",
    "etymology": "Greek spastikos, meaning 'drawing or pulling'",
    "example": "A patient with cerebral palsy may develop spasticity in the lower limbs due to upper motor neuron damage",
    "module": 10
  },
  {
    "id": "neur-059-tremor",
    "term": "Tremor",
    "category": "neurology",
    "definition": "Involuntary, rhythmic oscillation of a body part; can be resting, postural, or intention tremor depending on onset and type",
    "etymology": "Latin tremor, meaning 'shaking' or 'trembling'",
    "example": "Parkinson's disease characteristically presents with a resting tremor that decreases with purposeful movement",
    "module": 10
  },
  {
    "id": "neur-060-syncope",
    "term": "Syncope",
    "category": "neurology",
    "definition": "Brief loss of consciousness due to sudden decrease in cerebral blood flow; commonly known as fainting",
    "etymology": "Greek sunkope, meaning 'a cutting short' or 'fainting'",
    "example": "Vasovagal syncope may occur in response to emotional stress, prolonged standing, or blood draw",
    "module": 10
  },
  {
    "id": "eye-cornea-001",
    "term": "Cornea",
    "category": "special-senses",
    "definition": "The transparent, dome-shaped front surface of the eye that covers the iris, pupil, and anterior chamber; primary refractive structure of the eye.",
    "etymology": "Latin 'cornea' (horny); from 'cornu' meaning horn, referring to its horn-like transparency.",
    "example": "The patient's cornea was scratched during eye trauma, causing temporary vision loss.",
    "module": 11
  },
  {
    "id": "eye-lens-002",
    "term": "Lens",
    "category": "special-senses",
    "definition": "A biconvex, transparent structure behind the iris that changes shape to focus light on the retina for clear vision at various distances.",
    "etymology": "Latin 'lens' meaning lentil, due to its lentil-shaped appearance.",
    "example": "The lens becomes cloudy in cataracts, reducing visual clarity.",
    "module": 11
  },
  {
    "id": "eye-iris-003",
    "term": "Iris",
    "category": "special-senses",
    "definition": "The colored, muscular diaphragm of the eye that surrounds the pupil and controls the amount of light entering the eye.",
    "etymology": "Greek 'iris' meaning rainbow, named for its varied coloration.",
    "example": "The patient's iris appeared pale blue during the ophthalmologic examination.",
    "module": 11
  },
  {
    "id": "eye-pupil-004",
    "term": "Pupil",
    "category": "special-senses",
    "definition": "The dark, circular opening in the center of the iris that dilates and constricts to regulate light entry into the eye.",
    "etymology": "Latin 'pupilla' meaning little doll, from the tiny reflected image seen in the pupil.",
    "example": "The patient's pupils were equal and reactive to light during the neurological examination.",
    "module": 11
  },
  {
    "id": "eye-retina-005",
    "term": "Retina",
    "category": "special-senses",
    "definition": "The light-sensitive neurosensory tissue lining the posterior interior of the eye that converts light into electrical signals for vision.",
    "etymology": "Latin 'rete' meaning net, referring to its network-like structure of photoreceptor cells.",
    "example": "Retinal detachment is a surgical emergency requiring prompt intervention.",
    "module": 11
  },
  {
    "id": "eye-macula-006",
    "term": "Macula",
    "category": "special-senses",
    "definition": "The small, highly sensitive central area of the retina responsible for detailed, color, and central vision.",
    "etymology": "Latin 'macula' meaning spot or stain.",
    "example": "Age-related macular degeneration causes progressive vision loss in elderly patients.",
    "module": 11
  },
  {
    "id": "eye-optic-nerve-007",
    "term": "Optic Nerve",
    "category": "special-senses",
    "definition": "The second cranial nerve that transmits visual information from the retina to the brain via electrical impulses.",
    "etymology": "Greek 'optikos' meaning of sight, and Latin 'nervus' meaning nerve.",
    "example": "The optic nerve head is visible during ophthalmoscopy as the optic disc.",
    "module": 11
  },
  {
    "id": "eye-sclera-008",
    "term": "Sclera",
    "category": "special-senses",
    "definition": "The tough, opaque, fibrous outer layer of the eye that provides structural support and serves as the attachment for extraocular muscles.",
    "etymology": "Greek 'skleros' meaning hard or rigid.",
    "example": "The sclera appears white in healthy eyes due to its collagen composition.",
    "module": 11
  },
  {
    "id": "eye-conjunctiva-009",
    "term": "Conjunctiva",
    "category": "special-senses",
    "definition": "A thin, transparent mucous membrane that lines the inner eyelids and covers the white portion of the eye, providing protection and lubrication.",
    "etymology": "Latin 'conjunctivus' meaning joined together.",
    "example": "Viral conjunctivitis causes redness and discharge affecting the conjunctiva.",
    "module": 11
  },
  {
    "id": "eye-lacrimal-gland-010",
    "term": "Lacrimal Gland",
    "category": "special-senses",
    "definition": "The gland located above the lateral aspect of the eye that produces tears for lubrication, protection, and antimicrobial defense.",
    "etymology": "Latin 'lacrimalis' from 'lacrima' meaning tear.",
    "example": "Lacrimal gland dysfunction leads to dry eye syndrome and discomfort.",
    "module": 11
  },
  {
    "id": "eye-vitreous-humor-011",
    "term": "Vitreous Humor",
    "category": "special-senses",
    "definition": "A clear, gel-like substance that fills the large cavity between the lens and retina, maintaining eye shape and allowing light transmission.",
    "etymology": "Latin 'vitreus' meaning glassy, and 'humor' meaning fluid.",
    "example": "Vitreous hemorrhage from diabetic retinopathy obscures vision.",
    "module": 11
  },
  {
    "id": "eye-aqueous-humor-012",
    "term": "Aqueous Humor",
    "category": "special-senses",
    "definition": "A clear fluid produced by the ciliary body that fills the anterior chamber, maintains intraocular pressure, and nourishes the lens and cornea.",
    "etymology": "Latin 'aquosus' meaning watery, and 'humor' meaning fluid.",
    "example": "Elevated aqueous humor production or decreased drainage increases intraocular pressure in glaucoma.",
    "module": 11
  },
  {
    "id": "eye-cataracts-013",
    "term": "Cataracts",
    "category": "special-senses",
    "definition": "A clouding of the lens that develops gradually, reducing light transmission and causing blurred or dim vision.",
    "etymology": "Greek 'katarrhaktēs' meaning waterfall, referring to appearance of vision loss.",
    "example": "Cataracts are common in elderly patients and require surgical extraction when vision is significantly impaired.",
    "module": 11
  },
  {
    "id": "eye-glaucoma-014",
    "term": "Glaucoma",
    "category": "special-senses",
    "definition": "A disease characterized by elevated intraocular pressure that damages the optic nerve, potentially leading to irreversible blindness if untreated.",
    "etymology": "Greek 'glaucos' meaning gray-green, referring to the grayish appearance of the eye.",
    "example": "Open-angle glaucoma is often asymptomatic until significant optic nerve damage occurs.",
    "module": 11
  },
  {
    "id": "eye-macular-degeneration-015",
    "term": "Macular Degeneration",
    "category": "special-senses",
    "definition": "Progressive deterioration of the macula, typically age-related, causing central vision loss while peripheral vision is preserved.",
    "etymology": "From 'macula' and Latin 'degenerare' meaning to decline in quality.",
    "example": "Age-related macular degeneration (AMD) is the leading cause of vision loss in seniors.",
    "module": 11
  },
  {
    "id": "eye-retinal-detachment-016",
    "term": "Retinal Detachment",
    "category": "special-senses",
    "definition": "Separation of the neurosensory retina from the underlying retinal pigment epithelium, resulting in vision loss and potential blindness if untreated.",
    "etymology": "From 'retina' and Latin 'detachare' meaning to separate or unfasten.",
    "example": "Retinal detachment presents with sudden flashing lights, floaters, and a shadow in the visual field.",
    "module": 11
  },
  {
    "id": "eye-conjunctivitis-017",
    "term": "Conjunctivitis",
    "category": "special-senses",
    "definition": "Inflammation of the conjunctiva caused by allergic, viral, bacterial, or irritant factors, presenting with redness, tearing, and discharge.",
    "etymology": "From 'conjunctiva' and Latin '-itis' meaning inflammation.",
    "example": "Bacterial conjunctivitis often requires antibiotic drops or ointment for treatment.",
    "module": 11
  },
  {
    "id": "eye-strabismus-018",
    "term": "Strabismus",
    "category": "special-senses",
    "definition": "A condition in which the eyes are not properly aligned, with one eye deviating inward, outward, upward, or downward relative to the other.",
    "etymology": "Greek 'strabismos' from 'strabos' meaning squinting or turned.",
    "example": "Esotropia is a form of strabismus where one eye deviates inward.",
    "module": 11
  },
  {
    "id": "eye-amblyopia-019",
    "term": "Amblyopia",
    "category": "special-senses",
    "definition": "Reduced vision in one or both eyes without apparent structural abnormality, often caused by strabismus or refractive errors in childhood.",
    "etymology": "Greek 'amblyos' meaning dull, and 'opia' meaning vision.",
    "example": "Amblyopia must be treated during childhood before neural pathways are fully developed.",
    "module": 11
  },
  {
    "id": "eye-myopia-020",
    "term": "Myopia",
    "category": "special-senses",
    "definition": "Nearsightedness in which the eye focuses light in front of the retina, causing blurred distance vision while near vision remains clear.",
    "etymology": "Greek 'myops' from 'myein' meaning to close, and 'opia' meaning vision.",
    "example": "Myopia is corrected with concave lenses or refractive surgery like LASIK.",
    "module": 11
  },
  {
    "id": "eye-hyperopia-021",
    "term": "Hyperopia",
    "category": "special-senses",
    "definition": "Farsightedness in which the eye focuses light behind the retina, causing blurred near vision while distance vision is typically clear.",
    "etymology": "Greek 'hyper' meaning excessive, and 'opia' meaning vision.",
    "example": "Hyperopia is corrected with convex lenses or refractive procedures.",
    "module": 11
  },
  {
    "id": "eye-astigmatism-022",
    "term": "Astigmatism",
    "category": "special-senses",
    "definition": "A refractive error caused by irregular corneal or lenticular curvature, resulting in blurred vision at all distances.",
    "etymology": "Greek 'a-' meaning without, and 'stigma' meaning focus point.",
    "example": "Astigmatism can be corrected with cylindrical lenses or toric contact lenses.",
    "module": 11
  },
  {
    "id": "eye-diabetic-retinopathy-023",
    "term": "Diabetic Retinopathy",
    "category": "special-senses",
    "definition": "Progressive retinal damage caused by diabetes, characterized by microaneurysms, hemorrhages, and neovascularization, leading to vision loss.",
    "etymology": "From 'diabetes,' 'retina,' and Greek '-pathy' meaning disease.",
    "example": "Proliferative diabetic retinopathy requires laser photocoagulation or anti-VEGF injections.",
    "module": 11
  },
  {
    "id": "eye-lasik-024",
    "term": "LASIK",
    "category": "special-senses",
    "definition": "Laser-assisted in situ keratomileusis; a refractive surgery procedure using a laser to reshape the cornea for correction of myopia, hyperopia, and astigmatism.",
    "etymology": "Acronym: Laser-Assisted In Situ Keratomileusis.",
    "example": "LASIK is a popular outpatient procedure for correcting refractive errors.",
    "module": 11
  },
  {
    "id": "eye-cataract-extraction-025",
    "term": "Cataract Extraction",
    "category": "special-senses",
    "definition": "Surgical removal of a clouded lens, typically followed by implantation of an intraocular lens to restore clear vision.",
    "etymology": "From 'cataract' and Latin 'extractio' meaning to draw out.",
    "example": "Phacoemulsification is a modern cataract extraction technique using ultrasonic aspiration.",
    "module": 11
  },
  {
    "id": "eye-ophthalmoscopy-026",
    "term": "Ophthalmoscopy",
    "category": "special-senses",
    "definition": "Diagnostic procedure using an ophthalmoscope to examine the interior structures of the eye, including the retina, optic disc, and blood vessels.",
    "etymology": "From Greek 'ophthalmos' (eye) + 'skopein' (to examine)",
    "example": "The physician performed ophthalmoscopy to evaluate the patient's retina for signs of diabetic retinopathy.",
    "module": 11
  },
  {
    "id": "eye-tonometry-027",
    "term": "Tonometry",
    "category": "special-senses",
    "definition": "Diagnostic test that measures intraocular pressure (IOP) to screen for and monitor glaucoma.",
    "etymology": "From Greek 'tonos' (tension) + 'metron' (measure)",
    "example": "Tonometry revealed elevated intraocular pressure of 28 mmHg, warranting further glaucoma evaluation.",
    "module": 11
  },
  {
    "id": "eye-ophthalm-combining-028",
    "term": "Ophthalm/o",
    "category": "special-senses",
    "definition": "Combining form meaning 'eye,' used in medical terms related to ophthalmology and eye conditions.",
    "etymology": "From Greek 'ophthalmos' (eye)",
    "example": "Terms such as ophthalmologist, ophthalmic, and ophthalmoscope all use this combining form.",
    "module": 11
  },
  {
    "id": "eye-ocul-combining-029",
    "term": "Ocul/o",
    "category": "special-senses",
    "definition": "Combining form meaning 'eye,' commonly used in medical terminology for ocular structures and conditions.",
    "etymology": "From Latin 'oculus' (eye)",
    "example": "Binocular vision and intraocular lens are examples of terms using the ocul/o combining form.",
    "module": 11
  },
  {
    "id": "eye-opt-combining-030",
    "term": "Opt/o",
    "category": "special-senses",
    "definition": "Combining form meaning 'vision' or 'sight,' used in terms related to vision and optics.",
    "etymology": "From Greek 'optikos' (of sight)",
    "example": "Optometrist, myopia, and hyperopia incorporate the opt/o combining form.",
    "module": 11
  },
  {
    "id": "eye-retin-combining-031",
    "term": "Retin/o",
    "category": "special-senses",
    "definition": "Combining form meaning 'retina,' the light-sensitive tissue at the back of the eye.",
    "etymology": "From Latin 'retina' (net)",
    "example": "Retinopathy, retinal detachment, and retinotomy use the retin/o combining form.",
    "module": 11
  },
  {
    "id": "eye-kerat-combining-032",
    "term": "Kerat/o",
    "category": "special-senses",
    "definition": "Combining form meaning 'cornea' or 'horny tissue,' used in terms related to corneal procedures and conditions.",
    "etymology": "From Greek 'keras' (horn)",
    "example": "Keratoplasty, keratitis, and keratometry all use the kerat/o combining form.",
    "module": 11
  },
  {
    "id": "eye-ir-combining-033",
    "term": "Ir/o or Irid/o",
    "category": "special-senses",
    "definition": "Combining form meaning 'iris,' the colored muscle surrounding the pupil.",
    "etymology": "From Greek 'iris' (rainbow)",
    "example": "Iridotomy, iridectomy, and iridodonesis utilize the ir/o or irid/o combining form.",
    "module": 11
  },
  {
    "id": "ear-auricle-034",
    "term": "Auricle",
    "category": "special-senses",
    "definition": "The external part of the ear consisting of cartilage and skin; also called the pinna, which collects sound waves.",
    "etymology": "From Latin 'auricula' (little ear)",
    "example": "The patient had inflammation of the auricle following trauma from eyeglass pressure.",
    "module": 11
  },
  {
    "id": "ear-tympanic-membrane-035",
    "term": "Tympanic Membrane",
    "category": "special-senses",
    "definition": "A thin, semitransparent tissue that separates the external ear canal from the middle ear; vibrates in response to sound waves.",
    "etymology": "From Greek 'tympanon' (drum) + Latin 'membrana' (membrane)",
    "example": "Otoscopic examination revealed a perforated tympanic membrane with fluid drainage.",
    "module": 11
  },
  {
    "id": "ear-ossicles-036",
    "term": "Ossicles",
    "category": "special-senses",
    "definition": "Three tiny bones of the middle ear (malleus, incus, stapes) that transmit vibrations from the tympanic membrane to the inner ear.",
    "etymology": "From Latin 'ossiculum' (little bone)",
    "example": "Conductive hearing loss may result from ossicle damage or fixation.",
    "module": 11
  },
  {
    "id": "ear-malleus-037",
    "term": "Malleus",
    "category": "special-senses",
    "definition": "The largest of the three ossicles, shaped like a hammer, attached to the tympanic membrane to transmit vibrations to the incus.",
    "etymology": "From Latin 'malleus' (hammer)",
    "example": "The malleus vibrates when sound waves strike the tympanic membrane.",
    "module": 11
  },
  {
    "id": "ear-incus-038",
    "term": "Incus",
    "category": "special-senses",
    "definition": "The middle ossicle, shaped like an anvil, that connects the malleus to the stapes in the transmission of sound vibrations.",
    "etymology": "From Latin 'incus' (anvil)",
    "example": "The incus articulates with both the malleus and stapes to amplify sound vibrations.",
    "module": 11
  },
  {
    "id": "ear-stapes-039",
    "term": "Stapes",
    "category": "special-senses",
    "definition": "The smallest bone in the human body, shaped like a stirrup, that transmits vibrations to the inner ear via the oval window.",
    "etymology": "From Latin 'stapes' (stirrup)",
    "example": "Otosclerosis causes abnormal bone growth around the stapes, leading to conductive hearing loss.",
    "module": 11
  },
  {
    "id": "ear-cochlea-040",
    "term": "Cochlea",
    "category": "special-senses",
    "definition": "A spiral, fluid-filled structure of the inner ear containing the organ of Corti, responsible for converting sound vibrations into neural signals.",
    "etymology": "From Greek 'kokhlas' (snail)",
    "example": "Damage to the cochlea results in sensorineural hearing loss.",
    "module": 11
  },
  {
    "id": "ear-semicircular-canals-041",
    "term": "Semicircular Canals",
    "category": "special-senses",
    "definition": "Three fluid-filled structures of the inner ear arranged at right angles that detect head movement and maintain balance and equilibrium.",
    "etymology": "From Latin 'semicirculus' (half-circle) + 'canalis' (channel)",
    "example": "Infection of the semicircular canals can cause vertigo and balance disturbances.",
    "module": 11
  },
  {
    "id": "ear-eustachian-tube-042",
    "term": "Eustachian Tube",
    "category": "special-senses",
    "definition": "A tube connecting the middle ear to the nasopharynx that equalizes pressure in the middle ear and drains fluid.",
    "etymology": "Named after anatomist Bartolomeo Eustachi",
    "example": "Eustachian tube dysfunction leads to fluid accumulation and conductive hearing loss.",
    "module": 11
  },
  {
    "id": "ear-organ-of-corti-043",
    "term": "Organ of Corti",
    "category": "special-senses",
    "definition": "The sensory structure within the cochlea containing hair cells that convert mechanical vibrations into electrical impulses for hearing.",
    "etymology": "Named after anatomist Alfonso Corti",
    "example": "Damage to hair cells in the organ of Corti causes permanent sensorineural hearing loss.",
    "module": 11
  },
  {
    "id": "ear-otitis-media-044",
    "term": "Otitis Media",
    "category": "special-senses",
    "definition": "Inflammation or infection of the middle ear, commonly occurring in children and causing conductive hearing loss and ear pain.",
    "etymology": "From Greek 'ot/o' (ear) + Latin 'itis' (inflammation) + 'media' (middle)",
    "example": "The child presented with otitis media complicated by perforation of the tympanic membrane.",
    "module": 11
  },
  {
    "id": "ear-otitis-externa-045",
    "term": "Otitis Externa",
    "category": "special-senses",
    "definition": "Inflammation of the external ear canal, often caused by bacterial or fungal infection; also called swimmer's ear.",
    "etymology": "From Greek 'ot/o' (ear) + Latin 'itis' (inflammation) + 'externa' (outer)",
    "example": "Otitis externa caused severe pain and drainage from the ear canal.",
    "module": 11
  },
  {
    "id": "ear-tinnitus-046",
    "term": "Tinnitus",
    "category": "special-senses",
    "definition": "Perception of ringing, buzzing, or hissing sounds in the ears not caused by external sound; often associated with hearing loss.",
    "etymology": "From Latin 'tinnire' (to ring)",
    "example": "The patient reported chronic tinnitus that worsened with exposure to loud noise.",
    "module": 11
  },
  {
    "id": "ear-meniere-disease-047",
    "term": "Menière's Disease",
    "category": "special-senses",
    "definition": "Inner ear disorder causing vertigo, fluctuating sensorineural hearing loss, tinnitus, and aural fullness due to endolymphatic fluid accumulation.",
    "etymology": "Named after physician Prosper Menière",
    "example": "Menière's disease caused recurrent episodes of severe vertigo and progressive hearing loss.",
    "module": 11
  },
  {
    "id": "ear-presbycusis-048",
    "term": "Presbycusis",
    "category": "special-senses",
    "definition": "Age-related sensorineural hearing loss, typically bilateral and high-frequency, occurring gradually with aging.",
    "etymology": "From Greek 'presbys' (old) + 'akousis' (hearing)",
    "example": "Presbycusis is a common cause of hearing loss in elderly patients.",
    "module": 11
  },
  {
    "id": "ear-audiometry-049",
    "term": "Audiometry",
    "category": "special-senses",
    "definition": "Hearing test that measures the degree and type of hearing loss across different sound frequencies using an audiometer.",
    "etymology": "From Latin 'audire' (to hear) + Greek 'metron' (measure)",
    "example": "Audiometry revealed bilateral sensorineural hearing loss in the high frequencies.",
    "module": 11
  },
  {
    "id": "ear-tympanoplasty-050",
    "term": "Tympanoplasty",
    "category": "special-senses",
    "definition": "Surgical procedure to repair a perforated tympanic membrane or reconstruct middle ear bones to improve hearing.",
    "etymology": "From Greek 'tympanon' (drum) + 'plasty' (surgical repair)",
    "example": "Tympanoplasty was performed to repair the perforation and restore conductive hearing.",
    "module": 11
  },
  {
    "id": "pituitary-gland",
    "term": "Pituitary Gland",
    "category": "endocrine",
    "definition": "Small endocrine gland at the base of the brain consisting of anterior and posterior lobes; secretes hormones regulating growth, metabolism, and reproduction.",
    "etymology": "From Latin 'pituita' meaning phlegm, due to belief it secreted mucus.",
    "example": "The pituitary gland releases growth hormone to stimulate linear growth in children.",
    "module": 12
  },
  {
    "id": "growth-hormone",
    "term": "Growth Hormone (GH)",
    "category": "endocrine",
    "definition": "Anterior pituitary hormone that stimulates growth, metabolism, and protein synthesis; also called somatotropin.",
    "etymology": "From Greek 'soma' meaning body and 'tropein' meaning to turn toward.",
    "example": "Deficiency of growth hormone in children results in short stature or dwarfism.",
    "module": 12
  },
  {
    "id": "antidiuretic-hormone",
    "term": "Antidiuretic Hormone (ADH)",
    "category": "endocrine",
    "definition": "Posterior pituitary hormone that promotes water reabsorption in kidney collecting ducts and increases blood pressure; also called vasopressin.",
    "etymology": "From Latin 'anti' meaning against, 'dia' meaning through, and 'ourein' meaning to urinate.",
    "example": "Excessive ADH secretion causes SIADH, leading to water retention and hyponatremia.",
    "module": 12
  },
  {
    "id": "thyroid-stimulating-hormone",
    "term": "Thyroid Stimulating Hormone (TSH)",
    "category": "endocrine",
    "definition": "Anterior pituitary hormone that stimulates thyroid gland to produce and release T3 and T4 hormones.",
    "etymology": "From Greek 'thyreos' meaning shield and 'stimulare' meaning to incite.",
    "example": "Elevated TSH levels indicate primary hypothyroidism where the thyroid is not responding to stimulation.",
    "module": 12
  },
  {
    "id": "adrenocorticotropic-hormone",
    "term": "Adrenocorticotropic Hormone (ACTH)",
    "category": "endocrine",
    "definition": "Anterior pituitary hormone that stimulates the adrenal cortex to produce cortisol and other glucocorticoids.",
    "etymology": "From Latin 'ad' meaning to, 'renal' relating to kidneys, 'cortex' meaning bark, and 'tropic' meaning turning toward.",
    "example": "ACTH levels are elevated in Addison's disease as the pituitary attempts to stimulate inadequate cortisol production.",
    "module": 12
  },
  {
    "id": "follicle-stimulating-hormone",
    "term": "Follicle Stimulating Hormone (FSH)",
    "category": "endocrine",
    "definition": "Anterior pituitary gonadotropin that stimulates ovarian follicle development in females and spermatogenesis in males.",
    "etymology": "From Latin 'folliculus' meaning small bag and 'stimulare' meaning to incite.",
    "example": "FSH levels are monitored during fertility testing to assess ovarian reserve and reproductive function.",
    "module": 12
  },
  {
    "id": "luteinizing-hormone",
    "term": "Luteinizing Hormone (LH)",
    "category": "endocrine",
    "definition": "Anterior pituitary gonadotropin that triggers ovulation in females and testosterone production in males.",
    "etymology": "From Latin 'luteus' meaning yellow, referring to the corpus luteum.",
    "example": "LH surge initiates ovulation, causing the release of a mature ovum from the follicle.",
    "module": 12
  },
  {
    "id": "prolactin",
    "term": "Prolactin",
    "category": "endocrine",
    "definition": "Anterior pituitary hormone that stimulates milk production and maintains lactation in females.",
    "etymology": "From Latin 'pro' meaning forward and 'lac' meaning milk.",
    "example": "Elevated prolactin levels (hyperprolactinemia) can cause galactorrhea and menstrual irregularities.",
    "module": 12
  },
  {
    "id": "oxytocin",
    "term": "Oxytocin",
    "category": "endocrine",
    "definition": "Posterior pituitary hormone that stimulates uterine contractions during labor and milk letdown during nursing; also promotes bonding.",
    "etymology": "From Greek 'oxys' meaning sharp and 'tokos' meaning birth.",
    "example": "Oxytocin is administered to induce or augment labor contractions during childbirth.",
    "module": 12
  },
  {
    "id": "thyroid-gland",
    "term": "Thyroid Gland",
    "category": "endocrine",
    "definition": "Butterfly-shaped endocrine gland in the neck that produces thyroid hormones (T3 and T4) regulating metabolism and calcitonin regulating calcium.",
    "etymology": "From Greek 'thyreos' meaning shield, referring to its shape.",
    "example": "The thyroid gland weighs approximately 20 grams in adults and is located below the larynx.",
    "module": 12
  },
  {
    "id": "triiodothyronine",
    "term": "Triiodothyronine (T3)",
    "category": "endocrine",
    "definition": "Thyroid hormone containing three iodine atoms; more metabolically active form than T4; increases metabolic rate and heat production.",
    "etymology": "From 'tri' meaning three and Greek 'iodos' meaning violet, 'thyron' meaning gland.",
    "example": "Free T3 levels increase in hyperthyroidism, causing tachycardia and heat intolerance.",
    "module": 12
  },
  {
    "id": "thyroxine",
    "term": "Thyroxine (T4)",
    "category": "endocrine",
    "definition": "Thyroid hormone containing four iodine atoms; primary thyroid hormone secretion that converts to T3 in peripheral tissues.",
    "etymology": "From 'tetra' meaning four and Greek 'iodos' meaning violet, 'thyron' meaning gland.",
    "example": "Free T4 is measured to assess thyroid function; normal range is approximately 0.8-1.8 ng/dL.",
    "module": 12
  },
  {
    "id": "calcitonin",
    "term": "Calcitonin",
    "category": "endocrine",
    "definition": "Thyroid hormone secreted by parafollicular cells that lowers blood calcium by inhibiting osteoclast activity and promoting renal calcium excretion.",
    "etymology": "From Latin 'calcis' meaning lime and 'tonos' meaning tension.",
    "example": "Calcitonin is used therapeutically to treat hypercalcemia and osteoporosis by slowing bone resorption.",
    "module": 12
  },
  {
    "id": "parathyroid-gland",
    "term": "Parathyroid Gland",
    "category": "endocrine",
    "definition": "Four small endocrine glands embedded in the posterior thyroid that produce parathyroid hormone (PTH) regulating calcium and phosphate metabolism.",
    "etymology": "From Greek 'para' meaning beside and 'thyreos' meaning shield.",
    "example": "The parathyroid glands are often difficult to locate during thyroid surgery, increasing risk of iatrogenic hypoparathyroidism.",
    "module": 12
  },
  {
    "id": "parathyroid-hormone",
    "term": "Parathyroid Hormone (PTH)",
    "category": "endocrine",
    "definition": "Hormone secreted by parathyroid glands that increases blood calcium by stimulating bone resorption, renal calcium reabsorption, and vitamin D activation.",
    "etymology": "From Greek 'para' meaning beside, 'thyreos' meaning shield, and Latin 'hormon' meaning to excite.",
    "example": "PTH levels are elevated in primary hyperparathyroidism, causing hypercalcemia and increased bone turnover.",
    "module": 12
  },
  {
    "id": "adrenal-gland",
    "term": "Adrenal Gland",
    "category": "endocrine",
    "definition": "Paired endocrine gland located above each kidney consisting of cortex (glucocorticoids, mineralocorticoids, androgens) and medulla (catecholamines).",
    "etymology": "From Latin 'ad' meaning to and 'renal' relating to kidneys.",
    "example": "The adrenal glands secrete more than 50 different hormones essential for stress response and metabolism.",
    "module": 12
  },
  {
    "id": "cortisol",
    "term": "Cortisol",
    "category": "endocrine",
    "definition": "Primary glucocorticoid hormone secreted by adrenal cortex; increases blood glucose, suppresses immunity, and mediates stress response.",
    "etymology": "From Latin 'cortex' meaning bark and 'ol' indicating alcohol.",
    "example": "Cortisol levels follow a circadian rhythm, peaking in early morning and declining toward evening.",
    "module": 12
  },
  {
    "id": "aldosterone",
    "term": "Aldosterone",
    "category": "endocrine",
    "definition": "Mineralocorticoid hormone from adrenal cortex that promotes sodium reabsorption and potassium excretion in kidney, regulating fluid and electrolyte balance.",
    "etymology": "From 'aldehyde' and 'sterol' indicating a steroid compound.",
    "example": "Aldosterone antagonists like spironolactone are used to treat hypertension and heart failure.",
    "module": 12
  },
  {
    "id": "epinephrine",
    "term": "Epinephrine",
    "category": "endocrine",
    "definition": "Catecholamine hormone secreted by adrenal medulla in response to sympathetic stimulation; increases heart rate, blood pressure, and glucose mobilization.",
    "etymology": "From Greek 'epi' meaning upon and 'nephros' meaning kidney.",
    "example": "Epinephrine is administered intramuscularly in anaphylaxis to reverse allergic reaction symptoms.",
    "module": 12
  },
  {
    "id": "norepinephrine",
    "term": "Norepinephrine",
    "category": "endocrine",
    "definition": "Catecholamine hormone and neurotransmitter secreted by adrenal medulla; increases heart rate, blood pressure, and peripheral vasoconstriction during stress.",
    "etymology": "From 'nor' meaning without and 'epinephrine'.",
    "example": "Norepinephrine is released in the 'fight-or-flight' response, preparing the body for physical activity.",
    "module": 12
  },
  {
    "id": "androgens",
    "term": "Androgens",
    "category": "endocrine",
    "definition": "Male sex hormones produced by adrenal cortex and gonads; include testosterone and androstenedione; promote male sexual characteristics and muscle development.",
    "etymology": "From Greek 'andro' meaning male and 'genes' meaning producing.",
    "example": "Excessive androgen production in females causes virilization with deepened voice and increased facial hair.",
    "module": 12
  },
  {
    "id": "pancreas-endocrine",
    "term": "Pancreas (Endocrine)",
    "category": "endocrine",
    "definition": "Mixed gland with endocrine portion (islets of Langerhans) containing beta cells producing insulin and alpha cells producing glucagon.",
    "etymology": "From Greek 'pan' meaning all and 'kreas' meaning flesh.",
    "example": "The pancreas is both an endocrine gland secreting hormones and an exocrine gland producing digestive enzymes.",
    "module": 12
  },
  {
    "id": "insulin",
    "term": "Insulin",
    "category": "endocrine",
    "definition": "Hormone secreted by pancreatic beta cells that lowers blood glucose by promoting cellular uptake and storage of glucose as glycogen.",
    "etymology": "From Latin 'insula' meaning island, referring to islets of Langerhans.",
    "example": "Type 1 diabetes results from autoimmune destruction of pancreatic beta cells, eliminating insulin production.",
    "module": 12
  },
  {
    "id": "glucagon",
    "term": "Glucagon",
    "category": "endocrine",
    "definition": "Hormone secreted by pancreatic alpha cells that raises blood glucose by stimulating glycogenolysis and gluconeogenesis in the liver.",
    "etymology": "From Greek 'glukos' meaning sweet and 'agon' meaning action.",
    "example": "Glucagon is administered as an emergency treatment for severe hypoglycemia in diabetic patients.",
    "module": 12
  },
  {
    "id": "gonads-testes-ovaries",
    "term": "Gonads",
    "category": "endocrine",
    "definition": "Paired reproductive glands that produce sex hormones and gametes; testes in males and ovaries in females.",
    "etymology": "Greek 'gone' meaning seed or generation",
    "example": "The gonads secrete testosterone in males and estrogen/progesterone in females.",
    "module": 12
  },
  {
    "id": "estrogen",
    "term": "Estrogen",
    "category": "endocrine",
    "definition": "Primary female sex hormone produced by ovaries that regulates secondary sexual characteristics, menstrual cycle, and bone density.",
    "etymology": "Greek 'oistros' (frenzy) + 'gen' (producing)",
    "example": "Estrogen replacement therapy is used to manage menopausal symptoms.",
    "module": 12
  },
  {
    "id": "progesterone",
    "term": "Progesterone",
    "category": "endocrine",
    "definition": "Female sex hormone produced by corpus luteum and placenta that prepares and maintains the uterus for pregnancy.",
    "etymology": "Latin 'pro' (for) + 'gestare' (to carry)",
    "example": "Progesterone levels rise during the luteal phase of the menstrual cycle.",
    "module": 12
  },
  {
    "id": "testosterone",
    "term": "Testosterone",
    "category": "endocrine",
    "definition": "Primary male sex hormone produced by testes that regulates secondary sexual characteristics, muscle mass, and bone density.",
    "etymology": "Greek 'testis' (testicle) + 'sterol' (solid alcohol)",
    "example": "Testosterone replacement therapy is used to treat hypogonadism in males.",
    "module": 12
  },
  {
    "id": "pineal-gland",
    "term": "Pineal Gland",
    "category": "endocrine",
    "definition": "Small endocrine gland in the brain that produces melatonin and regulates circadian rhythms and sleep-wake cycles.",
    "etymology": "Latin 'pinea' meaning pine cone, due to its shape",
    "example": "The pineal gland secretes melatonin in response to darkness.",
    "module": 12
  },
  {
    "id": "melatonin",
    "term": "Melatonin",
    "category": "endocrine",
    "definition": "Hormone produced by the pineal gland that regulates sleep-wake cycles and circadian rhythms.",
    "etymology": "Greek 'melas' (black) + 'tonin' (relating to tone)",
    "example": "Melatonin supplements are used to treat insomnia and jet lag.",
    "module": 12
  },
  {
    "id": "thymus-gland",
    "term": "Thymus Gland",
    "category": "endocrine",
    "definition": "Lymphoid organ in the chest that produces thymosin and is essential for T-lymphocyte maturation and immune development.",
    "etymology": "Greek 'thymos' meaning soul or mind",
    "example": "The thymus gland involutes with age, contributing to decreased immune function in elderly patients.",
    "module": 12
  },
  {
    "id": "thymosin",
    "term": "Thymosin",
    "category": "endocrine",
    "definition": "Hormone produced by the thymus gland that stimulates the maturation and differentiation of T-lymphocytes.",
    "etymology": "Greek 'thymos' (thymus) + 'in' (chemical compound suffix)",
    "example": "Thymosin deficiency occurs as the thymus involutes during aging.",
    "module": 12
  },
  {
    "id": "diabetes-mellitus-type-1",
    "term": "Diabetes Mellitus Type 1",
    "category": "endocrine",
    "definition": "Autoimmune condition in which pancreatic beta cells are destroyed, resulting in insulin deficiency and hyperglycemia.",
    "etymology": "Greek 'diabetes' (siphon) + Latin 'mellitus' (honey-sweet)",
    "example": "A 12-year-old child presents with polydipsia and polyuria; diagnosis: Type 1 diabetes mellitus.",
    "module": 12
  },
  {
    "id": "diabetes-mellitus-type-2",
    "term": "Diabetes Mellitus Type 2",
    "category": "endocrine",
    "definition": "Metabolic disorder characterized by insulin resistance and relative insulin deficiency, often associated with obesity.",
    "etymology": "Greek 'diabetes' (siphon) + Latin 'mellitus' (honey-sweet)",
    "example": "A 55-year-old obese patient with Type 2 diabetes is managed with metformin and lifestyle modifications.",
    "module": 12
  },
  {
    "id": "hypothyroidism",
    "term": "Hypothyroidism",
    "category": "endocrine",
    "definition": "Condition of decreased thyroid function resulting in reduced T3/T4 production and decreased metabolic rate.",
    "etymology": "Greek 'hypo' (under) + 'thyroid' + 'ism' (condition)",
    "example": "Hypothyroidism causes fatigue, weight gain, and cold intolerance; treated with levothyroxine.",
    "module": 12
  },
  {
    "id": "hyperthyroidism",
    "term": "Hyperthyroidism",
    "category": "endocrine",
    "definition": "Condition of excessive thyroid function resulting in elevated T3/T4 production and increased metabolic rate.",
    "etymology": "Greek 'hyper' (over) + 'thyroid' + 'ism' (condition)",
    "example": "Hyperthyroidism presents with tachycardia, tremor, and weight loss despite increased appetite.",
    "module": 12
  },
  {
    "id": "graves-disease",
    "term": "Graves' Disease",
    "category": "endocrine",
    "definition": "Autoimmune disorder causing hyperthyroidism through thyroid-stimulating immunoglobulin (TSI) antibodies that stimulate thyroid hormone release.",
    "etymology": "Named after Dr. Robert Graves who first described it in 1835",
    "example": "A 35-year-old woman with Graves' disease presents with exophthalmos, goiter, and hyperthyroidism.",
    "module": 12
  },
  {
    "id": "hashimoto-thyroiditis",
    "term": "Hashimoto's Thyroiditis",
    "category": "endocrine",
    "definition": "Autoimmune condition causing chronic inflammation and gradual destruction of thyroid tissue, leading to hypothyroidism.",
    "etymology": "Named after Dr. Hakaru Hashimoto who described it in 1912",
    "example": "Hashimoto's thyroiditis is detected through elevated TPO and thyroglobulin antibodies.",
    "module": 12
  },
  {
    "id": "addison-disease",
    "term": "Addison's Disease",
    "category": "endocrine",
    "definition": "Primary adrenal insufficiency caused by autoimmune destruction of adrenal cortex, resulting in deficiency of cortisol and aldosterone.",
    "etymology": "Named after Dr. Thomas Addison who first described it in 1855",
    "example": "Addison's disease presents with hypotension, hypoglycemia, and hyperpigmentation.",
    "module": 12
  },
  {
    "id": "cushings-syndrome",
    "term": "Cushing's Syndrome",
    "category": "endocrine",
    "definition": "Disorder of excessive cortisol production caused by pituitary adenoma, ectopic ACTH, or primary adrenal tumor.",
    "etymology": "Named after Dr. Harvey Cushing, a pioneering neurosurgeon",
    "example": "Cushing's syndrome presents with central obesity, purple striae, and hypertension.",
    "module": 12
  },
  {
    "id": "acromegaly",
    "term": "Acromegaly",
    "category": "endocrine",
    "definition": "Disorder of excessive growth hormone secretion, usually from pituitary adenoma, causing abnormal growth of extremities and facial features.",
    "etymology": "Greek 'akron' (extremity) + 'megas' (large)",
    "example": "Acromegaly results in enlargement of hands, feet, jaw, and increased risk of type 2 diabetes.",
    "module": 12
  },
  {
    "id": "diabetes-insipidus",
    "term": "Diabetes Insipidus",
    "category": "endocrine",
    "definition": "Condition of ADH deficiency (central) or renal insensitivity to ADH (nephrogenic) causing excessive urination and thirst.",
    "etymology": "Greek 'diabetes' (siphon) + Latin 'insipidus' (tasteless)",
    "example": "Central diabetes insipidus is treated with desmopressin (synthetic ADH) replacement.",
    "module": 12
  },
  {
    "id": "siadh-syndrome",
    "term": "SIADH (Syndrome of Inappropriate Antidiuretic Hormone)",
    "category": "endocrine",
    "definition": "Condition of excessive ADH secretion causing water retention, hyponatremia, and concentrated urine despite low serum osmolality.",
    "etymology": "Acronym: Syndrome of Inappropriate ADH secretion",
    "example": "SIADH is associated with small cell lung cancer and presents with hyponatremia and seizures.",
    "module": 12
  },
  {
    "id": "combining-form-aden-o",
    "term": "Combining Form: Aden/o",
    "category": "endocrine",
    "definition": "Greek combining form meaning gland; used in medical terminology to denote structures or conditions related to glands.",
    "etymology": "Greek 'aden' meaning gland",
    "example": "Adenoma (aden/o + oma) = benign tumor of glandular tissue; adenectomy = surgical removal of a gland.",
    "module": 12
  },
  {
    "id": "cv-001-atrium",
    "term": "Atrium",
    "category": "cardiovascular",
    "definition": "One of two upper chambers of the heart that receive blood; plural is atria",
    "etymology": "Latin 'atrium' meaning entrance hall",
    "example": "The right atrium receives deoxygenated blood from the vena cava.",
    "module": 13
  },
  {
    "id": "cv-002-ventricle",
    "term": "Ventricle",
    "category": "cardiovascular",
    "definition": "One of two lower chambers of the heart that pump blood out of the heart",
    "etymology": "Latin 'ventriculus' meaning small belly",
    "example": "The left ventricle pumps oxygenated blood to the systemic circulation.",
    "module": 13
  },
  {
    "id": "cv-003-mitral-valve",
    "term": "Mitral Valve",
    "category": "cardiovascular",
    "definition": "The valve between the left atrium and left ventricle; also called bicuspid valve",
    "etymology": "Latin 'mitra' meaning mitre or bishop's hat, from its two-cusped shape",
    "example": "Mitral valve regurgitation causes backflow of blood into the left atrium.",
    "module": 13
  },
  {
    "id": "cv-004-tricuspid-valve",
    "term": "Tricuspid Valve",
    "category": "cardiovascular",
    "definition": "The valve between the right atrium and right ventricle with three cusps",
    "etymology": "Latin 'tri' meaning three, 'cuspid' meaning pointed",
    "example": "The tricuspid valve prevents backflow during right ventricular contraction.",
    "module": 13
  },
  {
    "id": "cv-005-aortic-valve",
    "term": "Aortic Valve",
    "category": "cardiovascular",
    "definition": "The valve between the left ventricle and aorta with three cusps (semilunar valve)",
    "etymology": "Greek 'aorta' meaning great artery",
    "example": "Aortic stenosis narrows the aortic valve opening, reducing blood flow.",
    "module": 13
  },
  {
    "id": "cv-006-pulmonic-valve",
    "term": "Pulmonic Valve",
    "category": "cardiovascular",
    "definition": "The valve between the right ventricle and pulmonary artery; also called pulmonary valve",
    "etymology": "Latin 'pulmo' meaning lung",
    "example": "The pulmonic valve prevents blood from flowing back into the right ventricle.",
    "module": 13
  },
  {
    "id": "cv-007-cardiac-septum",
    "term": "Cardiac Septum",
    "category": "cardiovascular",
    "definition": "The wall of muscle separating the right and left sides of the heart",
    "etymology": "Latin 'septum' meaning wall or partition",
    "example": "A ventricular septal defect is a hole in the cardiac septum.",
    "module": 13
  },
  {
    "id": "cv-008-chordae-tendineae",
    "term": "Chordae Tendineae",
    "category": "cardiovascular",
    "definition": "Fibrous strings connecting the valve cusps to the papillary muscles; prevent valve inversion",
    "etymology": "Latin 'chorda' meaning string, 'tendineae' meaning tendinous",
    "example": "Rupture of chordae tendineae can cause acute mitral regurgitation.",
    "module": 13
  },
  {
    "id": "cv-009-papillary-muscles",
    "term": "Papillary Muscles",
    "category": "cardiovascular",
    "definition": "Muscular projections from the ventricular wall that contract and tighten the chordae tendineae",
    "etymology": "Latin 'papilla' meaning nipple, 'musculus' meaning muscle",
    "example": "Papillary muscle dysfunction can result from myocardial infarction.",
    "module": 13
  },
  {
    "id": "cv-010-sinoatrial-node",
    "term": "Sinoatrial Node (SA Node)",
    "category": "cardiovascular",
    "definition": "The heart's natural pacemaker located in the right atrial wall; initiates heartbeat",
    "etymology": "Latin 'sinus' meaning cavity, 'atrium' meaning entrance hall, 'nodus' meaning knot",
    "example": "The SA node fires at 60-100 beats per minute in healthy resting adults.",
    "module": 13
  },
  {
    "id": "cv-011-atrioventricular-node",
    "term": "Atrioventricular Node (AV Node)",
    "category": "cardiovascular",
    "definition": "Specialized cardiac tissue that delays electrical impulses before ventricles contract",
    "etymology": "Latin 'atrium' and 'ventriculus' meaning upper and lower chambers",
    "example": "AV nodal block can cause heart rate slowing or complete heart block.",
    "module": 13
  },
  {
    "id": "cv-012-bundle-of-his",
    "term": "Bundle of His",
    "category": "cardiovascular",
    "definition": "Electrical conduction pathway that carries impulses from AV node to ventricular walls",
    "etymology": "Named after German cardiologist Wilhelm His Jr.",
    "example": "Bundle branch block delays electrical conduction through the ventricles.",
    "module": 13
  },
  {
    "id": "cv-013-purkinje-fibers",
    "term": "Purkinje Fibers",
    "category": "cardiovascular",
    "definition": "Specialized conduction fibers in ventricular walls that rapidly transmit electrical impulses",
    "etymology": "Named after Czech physiologist Jan Purkinje",
    "example": "Purkinje fibers contract last, ensuring efficient ventricular contraction.",
    "module": 13
  },
  {
    "id": "cv-014-endocardium",
    "term": "Endocardium",
    "category": "cardiovascular",
    "definition": "The innermost layer of the heart lining the chambers and covering the valves",
    "etymology": "Greek 'endo' meaning within, 'kardia' meaning heart",
    "example": "Endocarditis is inflammation of the endocardium often caused by infection.",
    "module": 13
  },
  {
    "id": "cv-015-myocardium",
    "term": "Myocardium",
    "category": "cardiovascular",
    "definition": "The thick muscular middle layer of the heart responsible for contractions",
    "etymology": "Greek 'myo' meaning muscle, 'kardia' meaning heart",
    "example": "Myocardial infarction occurs when blood supply to the myocardium is blocked.",
    "module": 13
  },
  {
    "id": "cv-016-pericardium",
    "term": "Pericardium",
    "category": "cardiovascular",
    "definition": "The double-walled membranous sac surrounding and protecting the heart",
    "etymology": "Greek 'peri' meaning around, 'kardia' meaning heart",
    "example": "Pericarditis causes inflammation and chest pain worsened by breathing.",
    "module": 13
  },
  {
    "id": "cv-017-artery",
    "term": "Artery",
    "category": "cardiovascular",
    "definition": "Blood vessel that carries blood away from the heart, typically under high pressure",
    "etymology": "Greek 'arteria' meaning windpipe or artery",
    "example": "The coronary arteries supply oxygen-rich blood to the heart muscle.",
    "module": 13
  },
  {
    "id": "cv-018-vein",
    "term": "Vein",
    "category": "cardiovascular",
    "definition": "Blood vessel that carries blood back to the heart, typically under low pressure",
    "etymology": "Latin 'vena' meaning blood vessel",
    "example": "The pulmonary veins return oxygenated blood from the lungs to the heart.",
    "module": 13
  },
  {
    "id": "cv-019-capillary",
    "term": "Capillary",
    "category": "cardiovascular",
    "definition": "Microscopic blood vessel where gas and nutrient exchange occurs between blood and tissues",
    "etymology": "Latin 'capillaris' meaning hair-like",
    "example": "Capillaries form networks throughout tissues for oxygen and carbon dioxide exchange.",
    "module": 13
  },
  {
    "id": "cv-020-arteriole",
    "term": "Arteriole",
    "category": "cardiovascular",
    "definition": "Small artery that branches into capillaries; helps regulate blood pressure",
    "etymology": "Latin 'arteria' meaning artery, '-ole' meaning small",
    "example": "Arterioles constrict during cold exposure to conserve body heat.",
    "module": 13
  },
  {
    "id": "cv-021-venule",
    "term": "Venule",
    "category": "cardiovascular",
    "definition": "Small vein that collects blood from capillaries and merges into larger veins",
    "etymology": "Latin 'vena' meaning vein, '-ule' meaning small",
    "example": "Venules drain deoxygenated blood from tissue capillary beds.",
    "module": 13
  },
  {
    "id": "cv-022-aorta",
    "term": "Aorta",
    "category": "cardiovascular",
    "definition": "The largest artery in the body; carries oxygenated blood from the left ventricle",
    "etymology": "Greek 'aorta' meaning to lift or suspend",
    "example": "The aorta divides into the ascending, arch, and descending portions.",
    "module": 13
  },
  {
    "id": "cv-023-vena-cava",
    "term": "Vena Cava",
    "category": "cardiovascular",
    "definition": "Either of two large veins returning deoxygenated blood to the right atrium",
    "etymology": "Latin 'vena' meaning vein, 'cava' meaning hollow",
    "example": "The superior vena cava returns blood from the upper body.",
    "module": 13
  },
  {
    "id": "cv-024-pulmonary-circuit",
    "term": "Pulmonary Circuit",
    "category": "cardiovascular",
    "definition": "Circulation pathway from right ventricle to lungs and back to left atrium",
    "etymology": "Latin 'pulmo' meaning lung, 'circuitus' meaning circle",
    "example": "The pulmonary circuit carries deoxygenated blood to the lungs for oxygenation.",
    "module": 13
  },
  {
    "id": "cv-025-systemic-circuit",
    "term": "Systemic Circuit",
    "category": "cardiovascular",
    "definition": "Circulation pathway from left ventricle through body tissues and back to right atrium",
    "etymology": "Greek 'systema' meaning organized whole, 'circuitus' meaning circle",
    "example": "The systemic circuit delivers oxygenated blood to all body tissues.",
    "module": 13
  },
  {
    "id": "cv-026-myocardial-infarction",
    "term": "Myocardial Infarction (MI)",
    "category": "cardiovascular",
    "definition": "Death of heart muscle tissue due to inadequate blood supply, commonly called a heart attack; occurs when a coronary artery is blocked by a blood clot or plaque.",
    "etymology": "myo- (muscle) + cardial (heart) + infarction (tissue death)",
    "example": "The patient presented to the ER with chest pain and was diagnosed with an acute anterior wall MI after troponin levels were elevated.",
    "module": 13
  },
  {
    "id": "cv-027-angina-pectoris",
    "term": "Angina Pectoris",
    "category": "cardiovascular",
    "definition": "Chest pain or discomfort caused by reduced blood flow to the heart muscle; often precedes a myocardial infarction and is relieved by rest or nitroglycerin.",
    "etymology": "angina (choking/strangling) + pectoris (of the chest)",
    "example": "The 62-year-old male experiences stable angina when climbing stairs, requiring him to rest and take sublingual nitroglycerin.",
    "module": 13
  },
  {
    "id": "cv-028-congestive-heart-failure",
    "term": "Congestive Heart Failure (CHF)",
    "category": "cardiovascular",
    "definition": "A chronic condition where the heart cannot pump enough blood to meet the body's needs, leading to fluid accumulation in the lungs and tissues; may involve systolic or diastolic dysfunction.",
    "etymology": "congestive (accumulation) + heart + failure (inability to function)",
    "example": "The patient with CHF presented with dyspnea, orthopnea, and peripheral edema requiring diuretic therapy and ACE inhibitor medications.",
    "module": 13
  },
  {
    "id": "cv-029-atrial-fibrillation",
    "term": "Atrial Fibrillation (AFib)",
    "category": "cardiovascular",
    "definition": "An irregular heart rhythm originating in the atria, characterized by rapid, disorganized atrial contractions that impair ventricular filling and increase stroke risk.",
    "etymology": "atrial (of the atrium) + fibrillation (fine, uncoordinated contractions)",
    "example": "The patient presented with palpitations and an irregularly irregular rhythm on examination; EKG confirmed AFib with a rapid ventricular response.",
    "module": 13
  },
  {
    "id": "cv-030-ventricular-fibrillation",
    "term": "Ventricular Fibrillation (VFib)",
    "category": "cardiovascular",
    "definition": "A life-threatening cardiac arrhythmia in which the ventricles contract chaotically without coordinated pumping action, resulting in no effective cardiac output and requiring immediate defibrillation.",
    "etymology": "ventricular (of the ventricle) + fibrillation (fine, uncoordinated contractions)",
    "example": "The patient collapsed with VFib and required immediate CPR and defibrillation to restore a perfusing rhythm.",
    "module": 13
  },
  {
    "id": "cv-031-cardiac-arrhythmia",
    "term": "Cardiac Arrhythmia",
    "category": "cardiovascular",
    "definition": "An abnormal heart rate or rhythm caused by disruption in the electrical conduction system; includes tachycardia, bradycardia, and irregular rhythms.",
    "etymology": "a- (without) + rhythmia (rhythm)",
    "example": "The EKG revealed multiple premature ventricular contractions consistent with a cardiac arrhythmia.",
    "module": 13
  },
  {
    "id": "cv-032-hypertension",
    "term": "Hypertension",
    "category": "cardiovascular",
    "definition": "Persistently elevated blood pressure (≥130/80 mmHg), a major risk factor for MI, stroke, and kidney disease; classified as primary or secondary.",
    "etymology": "hyper- (excessive) + tension (pressure)",
    "example": "The patient was diagnosed with Stage 2 hypertension and started on lisinopril and amlodipine for blood pressure control.",
    "module": 13
  },
  {
    "id": "cv-033-hypotension",
    "term": "Hypotension",
    "category": "cardiovascular",
    "definition": "Abnormally low blood pressure (typically <90/60 mmHg) that may result in inadequate tissue perfusion and shock.",
    "etymology": "hypo- (below) + tension (pressure)",
    "example": "The septic patient developed hypotension requiring fluid resuscitation and vasopressor support in the ICU.",
    "module": 13
  },
  {
    "id": "cv-034-cardiomyopathy",
    "term": "Cardiomyopathy",
    "category": "cardiovascular",
    "definition": "A disease of the heart muscle that impairs ventricular function; types include dilated, hypertrophic, and restrictive cardiomyopathy.",
    "etymology": "cardi/o (heart) + my/o (muscle) + pathy (disease)",
    "example": "The patient with dilated cardiomyopathy presented with signs of CHF and a markedly reduced ejection fraction on echocardiogram.",
    "module": 13
  },
  {
    "id": "cv-035-endocarditis",
    "term": "Endocarditis",
    "category": "cardiovascular",
    "definition": "Inflammation or infection of the endocardium (innermost heart layer), often involving the heart valves; serious condition requiring antibiotic therapy.",
    "etymology": "endo- (within) + carditis (inflammation of the heart)",
    "example": "The IV drug user developed bacterial endocarditis with vegetations on the mitral valve confirmed by echocardiography.",
    "module": 13
  },
  {
    "id": "cv-036-pericarditis",
    "term": "Pericarditis",
    "category": "cardiovascular",
    "definition": "Inflammation of the pericardium (heart sac), causing chest pain that worsens with breathing or lying supine; may lead to pericardial effusion.",
    "etymology": "peri- (around) + carditis (inflammation of the heart)",
    "example": "The post-MI patient developed acute pericarditis with pleuritic chest pain and a pericardial friction rub.",
    "module": 13
  },
  {
    "id": "cv-037-valvular-disease",
    "term": "Valvular Disease",
    "category": "cardiovascular",
    "definition": "Pathology of one or more heart valves affecting blood flow; includes stenosis (narrowing) and regurgitation (leaking).",
    "etymology": "valvular (relating to a valve) + disease (pathological condition)",
    "example": "The patient with rheumatic fever history developed aortic stenosis and mitral regurgitation requiring surgical valve replacement.",
    "module": 13
  },
  {
    "id": "cv-038-deep-vein-thrombosis",
    "term": "Deep Vein Thrombosis (DVT)",
    "category": "cardiovascular",
    "definition": "Blood clot formation in deep veins, usually in the lower extremities; risk factor for pulmonary embolism if clot dislodges.",
    "etymology": "deep (anatomical location) + vein + thrombosis (clot formation)",
    "example": "The post-operative patient developed a DVT in the left leg and was started on enoxaparin anticoagulation.",
    "module": 13
  },
  {
    "id": "cv-039-pulmonary-embolism",
    "term": "Pulmonary Embolism (PE)",
    "category": "cardiovascular",
    "definition": "Blockage of a pulmonary artery by a blood clot (usually from DVT), fat, air, or other material; life-threatening emergency causing impaired gas exchange.",
    "etymology": "pulmonary (lung) + embolism (obstruction by traveling material)",
    "example": "The patient with untreated DVT developed a PE presenting with acute dyspnea and hypoxia requiring anticoagulation and possible thrombolysis.",
    "module": 13
  },
  {
    "id": "cv-040-aortic-aneurysm",
    "term": "Aortic Aneurysm",
    "category": "cardiovascular",
    "definition": "Abnormal dilation or bulging of the aorta, creating risk for rupture; abdominal aortic aneurysm (AAA) and thoracic aortic aneurysm (TAA) are major types.",
    "etymology": "aort/o (aorta) + aneurysm (weakened outpouching)",
    "example": "The 78-year-old male smoker was found to have a 5.5 cm abdominal aortic aneurysm on imaging, requiring surgical repair.",
    "module": 13
  },
  {
    "id": "cv-041-atherosclerosis",
    "term": "Atherosclerosis",
    "category": "cardiovascular",
    "definition": "Progressive disease involving plaque accumulation in artery walls, narrowing the lumen and reducing blood flow; primary cause of coronary artery disease.",
    "etymology": "ather/o (fatty deposits) + sclerosis (hardening)",
    "example": "The patient with atherosclerosis of the coronary arteries experienced angina and required cardiac catheterization and angioplasty.",
    "module": 13
  },
  {
    "id": "cv-042-arteriosclerosis",
    "term": "Arteriosclerosis",
    "category": "cardiovascular",
    "definition": "General hardening and loss of elasticity of arteries, including atherosclerotic and medial calcific changes; increases with age and hypertension.",
    "etymology": "arteri/o (artery) + sclerosis (hardening)",
    "example": "The elderly patient with long-standing hypertension developed widespread arteriosclerosis affecting coronary and cerebral circulation.",
    "module": 13
  },
  {
    "id": "cv-043-peripheral-artery-disease",
    "term": "Peripheral Artery Disease (PAD)",
    "category": "cardiovascular",
    "definition": "Narrowing of arteries supplying the limbs, typically due to atherosclerosis; presents with claudication pain, especially with exertion.",
    "etymology": "peripheral (away from center) + artery + disease (pathological condition)",
    "example": "The patient with PAD experienced left calf claudication when walking and had an ankle-brachial index of 0.65.",
    "module": 13
  },
  {
    "id": "cv-044-electrocardiogram",
    "term": "Electrocardiogram (EKG/ECG)",
    "category": "cardiovascular",
    "definition": "Non-invasive diagnostic test recording the electrical activity of the heart via surface electrodes; identifies arrhythmias, ischemia, and structural abnormalities.",
    "etymology": "electro- (electrical) + cardio (heart) + gram (recording)",
    "example": "The EKG showed ST-segment elevation in leads II, III, and aVF, consistent with acute inferior wall MI.",
    "module": 13
  },
  {
    "id": "cv-045-echocardiogram",
    "term": "Echocardiogram",
    "category": "cardiovascular",
    "definition": "Ultrasound imaging of the heart to visualize cardiac chambers, valves, and wall motion; assesses ejection fraction and detects abnormalities.",
    "etymology": "echo- (sound wave reflection) + cardio (heart) + gram (image)",
    "example": "The transthoracic echocardiogram revealed left ventricular hypertrophy and an ejection fraction of 35%.",
    "module": 13
  },
  {
    "id": "cv-046-cardiac-catheterization",
    "term": "Cardiac Catheterization",
    "category": "cardiovascular",
    "definition": "Invasive diagnostic procedure where a catheter is threaded through vessels to the heart for coronary angiography, pressure measurements, and tissue sampling.",
    "etymology": "cardiac (heart) + catheterization (insertion of a tube)",
    "example": "The patient underwent cardiac catheterization which revealed 90% stenosis of the left anterior descending coronary artery.",
    "module": 13
  },
  {
    "id": "cv-047-cardiac-troponin",
    "term": "Cardiac Troponin",
    "category": "cardiovascular",
    "definition": "Cardiac muscle protein released into blood during MI; highly sensitive and specific cardiac biomarker used to diagnose acute coronary syndrome.",
    "etymology": "troponin (regulatory muscle protein) + cardiac (relating to heart)",
    "example": "Serial troponin levels were elevated at 4.2 ng/mL and 5.8 ng/mL, confirming acute myocardial infarction.",
    "module": 13
  },
  {
    "id": "cv-048-b-type-natriuretic-peptide",
    "term": "B-Type Natriuretic Peptide (BNP)",
    "category": "cardiovascular",
    "definition": "Hormone released by ventricular myocytes in response to wall stretch; elevated levels indicate heart failure and correlate with severity.",
    "etymology": "B-type (second discovered type) + natriuretic (salt-excreting) + peptide (protein)",
    "example": "The BNP level was 850 pg/mL in the CHF patient, supporting the diagnosis of decompensated heart failure.",
    "module": 13
  },
  {
    "id": "cv-049-lipid-panel",
    "term": "Lipid Panel",
    "category": "cardiovascular",
    "definition": "Blood test measuring total cholesterol, LDL, HDL, and triglycerides; essential for cardiovascular risk assessment and atherosclerosis prevention.",
    "etymology": "lipid (fat) + panel (group of tests)",
    "example": "The lipid panel showed total cholesterol 245 mg/dL, LDL 180 mg/dL, requiring statin therapy initiation.",
    "module": 13
  },
  {
    "id": "cv-050-coronary-artery-bypass-graft",
    "term": "Coronary Artery Bypass Graft (CABG)",
    "category": "cardiovascular",
    "definition": "Surgical procedure bypassing coronary artery stenosis using grafted vessels (saphenous vein or internal mammary artery) to restore blood flow.",
    "etymology": "coronary (of the heart arteries) + bypass (alternate route) + graft (transplanted tissue)",
    "example": "The patient underwent triple-vessel CABG using saphenous vein grafts to the LAD, RCA, and LCx arteries.",
    "module": 13
  },
  {
    "id": "cv-051-percutaneous-coronary-intervention",
    "term": "Percutaneous Coronary Intervention (PCI)",
    "category": "cardiovascular",
    "definition": "Minimally invasive procedure to open blocked coronary arteries using a catheter with an inflatable balloon (angioplasty) and/or stent placement to restore blood flow.",
    "etymology": "Latin: percutaneous (through the skin), coronary (relating to the heart), intervention (medical action)",
    "example": "The cardiologist performed PCI with stent placement to treat the patient's acute MI.",
    "module": 13
  },
  {
    "id": "cv-052-artificial-pacemaker",
    "term": "Artificial Pacemaker",
    "category": "cardiovascular",
    "definition": "Electronic device implanted subcutaneously to generate electrical impulses that regulate abnormal heart rhythms and ensure adequate heart rate.",
    "etymology": "Pace (rate) + maker (device that produces); from Latin pacis (step, rate)",
    "example": "The patient received a dual-chamber pacemaker to treat symptomatic bradycardia.",
    "module": 13
  },
  {
    "id": "cv-053-cardioversion",
    "term": "Cardioversion",
    "category": "cardiovascular",
    "definition": "Procedure using electrical shock to restore normal heart rhythm in patients with atrial fibrillation or other tachyarrhythmias.",
    "etymology": "Cardio (heart) + version (turning, changing); from Latin vertere (to turn)",
    "example": "Synchronized cardioversion was performed to convert the patient's atrial flutter to normal sinus rhythm.",
    "module": 13
  },
  {
    "id": "cv-054-cardiopulmonary-resuscitation",
    "term": "Cardiopulmonary Resuscitation (CPR)",
    "category": "cardiovascular",
    "definition": "Emergency procedure combining chest compressions and rescue breathing to restore circulation and oxygenation in cardiac arrest patients.",
    "etymology": "Cardio (heart) + pulmonary (lungs) + resuscitation (Latin resuscitare: to revive)",
    "example": "CPR was initiated immediately when the patient went into cardiac arrest.",
    "module": 13
  },
  {
    "id": "cv-055-cardiologia",
    "term": "Cardia/Cardio- (Combining Form)",
    "category": "cardiovascular",
    "definition": "Combining form meaning 'heart,' used in medical terminology to create terms related to cardiac structure and function.",
    "etymology": "Greek kardia (heart)",
    "example": "Cardiologist, cardiology, cardiomegaly, cardiac, cardiovascular",
    "module": 13
  },
  {
    "id": "cv-056-angiography",
    "term": "Angio- (Combining Form)",
    "category": "cardiovascular",
    "definition": "Combining form meaning 'vessel' (blood vessel or lymphatic vessel), used in terms describing vascular imaging and disease.",
    "etymology": "Greek angeion (vessel)",
    "example": "Angiogram, angiography, angioplasty, angiogenesis",
    "module": 13
  },
  {
    "id": "cv-057-vasoconstriction",
    "term": "Vas/Vaso- (Combining Form)",
    "category": "cardiovascular",
    "definition": "Combining form meaning 'vessel,' particularly blood vessels; used to describe vascular diameter changes and blood vessel-related conditions.",
    "etymology": "Latin vas (vessel, duct)",
    "example": "Vasoconstriction, vasodilation, vasoactive, vasopressor",
    "module": 13
  },
  {
    "id": "cv-058-aortitis",
    "term": "Aort/Aorto- (Combining Form)",
    "category": "cardiovascular",
    "definition": "Combining form meaning 'aorta,' the largest artery in the body; used in terms describing aortic pathology and imaging.",
    "etymology": "Greek aorte (aorta, from aeirein: to lift/suspend)",
    "example": "Aortic stenosis, aortitis, aortic aneurysm, aortography",
    "module": 13
  },
  {
    "id": "cv-059-phlebotomy",
    "term": "Phleb/Phlebo- (Combining Form)",
    "category": "cardiovascular",
    "definition": "Combining form meaning 'vein'; used in terms related to venous structure, disease, and procedures involving veins.",
    "etymology": "Greek phleps (vein)",
    "example": "Phlebotomy, phlebitis, thrombophlebitis, phlebectomy",
    "module": 13
  },
  {
    "id": "cv-060-thrombosis",
    "term": "Thromb/Thrombo- (Combining Form)",
    "category": "cardiovascular",
    "definition": "Combining form meaning 'blood clot'; used in terms describing clot formation, clot-related disease, and anticoagulation therapy.",
    "etymology": "Greek thrombos (clot)",
    "example": "Thrombosis, thrombophlebitis, thromboemboli, thrombolytic",
    "module": 13
  },
  {
    "id": "cv-061-atherosclerotic-plaque",
    "term": "Ather/Athero- (Combining Form)",
    "category": "cardiovascular",
    "definition": "Combining form meaning 'fatty deposit' or 'porridge-like substance'; used in terms describing arterial lipid deposition and atherosclerosis.",
    "etymology": "Greek athere (porridge, gruel) + skleros (hard)",
    "example": "Atherosclerosis, atherosclerotic disease, atheroma",
    "module": 13
  },
  {
    "id": "cv-062-coronary-artery-disease",
    "term": "Coronary Artery Disease (CAD)",
    "category": "cardiovascular",
    "definition": "Condition characterized by blockage of coronary arteries due to atherosclerotic plaque accumulation, reducing blood flow to the myocardium.",
    "etymology": "Corona (crown, from Latin) + artery (Greek arteria)",
    "example": "The patient has significant CAD with triple-vessel disease requiring bypass surgery.",
    "module": 13
  },
  {
    "id": "cv-063-acute-coronary-syndrome",
    "term": "Acute Coronary Syndrome (ACS)",
    "category": "cardiovascular",
    "definition": "Spectrum of acute cardiac events including unstable angina and myocardial infarction caused by sudden reduction in coronary blood flow.",
    "etymology": "Latin acutus (sharp) + coronary (heart) + syndrome (occurring together)",
    "example": "The patient presented to the ED with ACS and elevated troponin levels.",
    "module": 13
  },
  {
    "id": "cv-064-heart-murmur",
    "term": "Heart Murmur",
    "category": "cardiovascular",
    "definition": "Abnormal sound heard on cardiac auscultation caused by turbulent blood flow through the heart, often due to valvular disease or structural defects.",
    "etymology": "Murmur (Latin murmurare: to hum, buzz)",
    "example": "A systolic murmur was auscultated at the apex, consistent with mitral regurgitation.",
    "module": 13
  },
  {
    "id": "cv-065-ejection-fraction",
    "term": "Ejection Fraction (EF)",
    "category": "cardiovascular",
    "definition": "Percentage of blood volume ejected from the left ventricle with each heartbeat; key measure of systolic heart function (normal: 50-70%).",
    "etymology": "Ejection (from Latin eicere: to throw out) + fraction (part of whole)",
    "example": "The patient's ejection fraction of 35% indicates reduced systolic function consistent with HFrEF.",
    "module": 13
  },
  {
    "id": "cv-066-arrhythmia-management",
    "term": "Antiarrhythmic Drugs",
    "category": "cardiovascular",
    "definition": "Medications that suppress abnormal heart rhythms by altering conduction velocity and refractory period; classified into four Vaughan-Williams classes.",
    "etymology": "Anti- (against) + arrhythmia (absence of rhythm)",
    "example": "Amiodarone is a Class III antiarrhythmic agent used to treat atrial fibrillation.",
    "module": 13
  },
  {
    "id": "cv-067-anticoagulation-therapy",
    "term": "Anticoagulation Therapy",
    "category": "cardiovascular",
    "definition": "Medical treatment using anticoagulant drugs (warfarin, DOACs, heparin) to prevent blood clot formation in patients with atrial fibrillation, DVT, or PE.",
    "etymology": "Anti- (against) + coagulation (clotting)",
    "example": "The patient was started on apixaban for stroke prevention in atrial fibrillation.",
    "module": 13
  },
  {
    "id": "cv-068-cardiac-output",
    "term": "Cardiac Output (CO)",
    "category": "cardiovascular",
    "definition": "Volume of blood pumped by the left ventricle per minute; calculated as stroke volume × heart rate (normal: 4-8 L/min).",
    "etymology": "Cardiac (heart) + output (amount produced)",
    "example": "Low cardiac output due to reduced ejection fraction contributes to the patient's heart failure symptoms.",
    "module": 13
  },
  {
    "id": "cv-069-stenosis-vs-regurgitation",
    "term": "Stenosis vs. Regurgitation",
    "category": "cardiovascular",
    "definition": "Stenosis: narrowing of a valve opening restricting forward blood flow; Regurgitation (insufficiency): incomplete valve closure allowing backward blood flow.",
    "etymology": "Stenosis (Greek stenosis: narrowing); Regurgitation (Latin regurgitare: to overflow)",
    "example": "Aortic stenosis causes increased LV afterload; aortic regurgitation causes diastolic murmur.",
    "module": 13
  },
  {
    "id": "cv-070-coronary-perfusion-pressure",
    "term": "Coronary Perfusion Pressure (CPP)",
    "category": "cardiovascular",
    "definition": "Difference between aortic diastolic pressure and right atrial pressure; determines blood flow to coronary arteries during diastole.",
    "etymology": "Coronary (heart) + perfusion (Latin perfundere: to pour through) + pressure (force)",
    "example": "Maintaining adequate CPP during CPR is critical for myocardial perfusion and neurological recovery.",
    "module": 13
  },
  {
    "id": "lymph-node-anatomy",
    "term": "Lymph Node",
    "category": "lymphatic",
    "definition": "Small, bean-shaped organ that filters lymph fluid and contains lymphocytes and macrophages for immune response",
    "etymology": "lymph (clear fluid) + node (knot)",
    "example": "Enlarged cervical lymph nodes may indicate infection or malignancy",
    "module": 14
  },
  {
    "id": "lymphatic-vessel-anatomy",
    "term": "Lymphatic Vessel",
    "category": "lymphatic",
    "definition": "Thin-walled tube that transports lymph fluid throughout the body toward the heart",
    "etymology": "lymphatic (relating to lymph) + vessel (container)",
    "example": "Lymphatic vessels branch extensively through tissue spaces to collect interstitial fluid",
    "module": 14
  },
  {
    "id": "lymph-fluid",
    "term": "Lymph Fluid",
    "category": "lymphatic",
    "definition": "Clear, colorless fluid containing white blood cells, proteins, and fats that bathes tissues and drains into lymphatic vessels",
    "etymology": "lympha (Latin: clear water)",
    "example": "Lymph fluid returns approximately 3 liters daily to the bloodstream",
    "module": 14
  },
  {
    "id": "spleen-anatomy",
    "term": "Spleen",
    "category": "lymphatic",
    "definition": "Large lymphoid organ in the left upper abdomen that filters blood, removes old RBCs, and produces lymphocytes",
    "etymology": "splen (Greek: spleen)",
    "example": "The spleen may enlarge during infectious mononucleosis",
    "module": 14
  },
  {
    "id": "thymus-gland-anatomy",
    "term": "Thymus Gland",
    "category": "lymphatic",
    "definition": "Lymphoid organ in the anterior chest that produces and matures T cells, especially important in childhood",
    "etymology": "thymos (Greek: spirit, courage)",
    "example": "The thymus gland atrophies with age, diminishing T cell production",
    "module": 14
  },
  {
    "id": "tonsils-anatomy",
    "term": "Tonsils",
    "category": "lymphatic",
    "definition": "Ring of lymphoid tissue in the pharynx that filters pathogens and produces antibodies for respiratory defense",
    "etymology": "tonsilla (Latin: stake, pillar)",
    "example": "Recurring strep throat may lead to tonsillectomy to remove inflamed palatine tonsils",
    "module": 14
  },
  {
    "id": "peyers-patches-anatomy",
    "term": "Peyer's Patches",
    "category": "lymphatic",
    "definition": "Clusters of lymphoid tissue in the small intestine wall that monitor and respond to intestinal pathogens",
    "etymology": "Named after Johann Peyer + patch (area)",
    "example": "Peyer's patches activate mucosal immunity against gastrointestinal infections",
    "module": 14
  },
  {
    "id": "thoracic-duct-anatomy",
    "term": "Thoracic Duct",
    "category": "lymphatic",
    "definition": "Largest lymphatic vessel that collects lymph from the lower body and left upper body and empties into the left subclavian vein",
    "etymology": "thoracic (relating to chest) + duct (tube)",
    "example": "Thoracic duct obstruction may cause chylothorax with fluid accumulation in the pleural space",
    "module": 14
  },
  {
    "id": "b-cell-immune",
    "term": "B Cell (B Lymphocyte)",
    "category": "immune",
    "definition": "White blood cell that produces antibodies and mediates humoral immunity; develops in bone marrow",
    "etymology": "B (bursa or bone marrow-derived)",
    "example": "B cells develop into plasma cells that secrete antibodies against invading pathogens",
    "module": 14
  },
  {
    "id": "t-cell-immune",
    "term": "T Cell (T Lymphocyte)",
    "category": "immune",
    "definition": "White blood cell that mediates cell-mediated immunity; develops in thymus and includes cytotoxic and helper subtypes",
    "etymology": "T (thymus-derived)",
    "example": "CD8+ cytotoxic T cells recognize and destroy virus-infected cells",
    "module": 14
  },
  {
    "id": "natural-killer-cell-immune",
    "term": "Natural Killer Cell (NK Cell)",
    "category": "immune",
    "definition": "Lymphocyte that destroys virus-infected cells and tumor cells without prior antigen sensitization",
    "etymology": "natural (innate) + killer (destroys cells)",
    "example": "NK cells release perforin to lyse malignant cells in immunosurveillance",
    "module": 14
  },
  {
    "id": "macrophage-immune",
    "term": "Macrophage",
    "category": "immune",
    "definition": "Large phagocytic cell that engulfs pathogens, cell debris, and presents antigens to T cells",
    "etymology": "macro (large) + phage (eater)",
    "example": "Macrophages in lung tissue engulf inhaled particles and bacteria",
    "module": 14
  },
  {
    "id": "neutrophil-immune",
    "term": "Neutrophil",
    "category": "immune",
    "definition": "Most abundant white blood cell; granulocyte that engulfs bacteria and releases antimicrobial compounds",
    "etymology": "neutro (neutral staining) + phil (loving)",
    "example": "Elevated neutrophil count indicates acute bacterial infection or inflammation",
    "module": 14
  },
  {
    "id": "eosinophil-immune",
    "term": "Eosinophil",
    "category": "immune",
    "definition": "Granulocyte that targets parasitic infections and participates in allergic responses",
    "etymology": "eos (dawn, red) + phil (loving)",
    "example": "Eosinophilia (elevated eosinophil count) occurs in parasitic infections and asthma",
    "module": 14
  },
  {
    "id": "basophil-immune",
    "term": "Basophil",
    "category": "immune",
    "definition": "Granulocyte that releases histamine during allergic reactions and parasitic infections",
    "etymology": "bas (base, basic staining) + phil (loving)",
    "example": "Basophil degranulation releases histamine during anaphylactic shock",
    "module": 14
  },
  {
    "id": "mast-cell-immune",
    "term": "Mast Cell",
    "category": "immune",
    "definition": "Tissue-resident cell containing granules of histamine and heparin; triggers immediate hypersensitivity reactions",
    "etymology": "mast (from German Mastzellenmastzellen, well-fed cells)",
    "example": "Mast cell degranulation causes urticaria and angioedema in acute allergies",
    "module": 14
  },
  {
    "id": "antibody-immunoglobulin-immune",
    "term": "Antibody (Immunoglobulin)",
    "category": "immune",
    "definition": "Protein produced by B cells that binds to specific antigens and facilitates their elimination",
    "etymology": "anti (against) + body (substance)",
    "example": "Antibodies label pathogens for destruction by complement and phagocytes",
    "module": 14
  },
  {
    "id": "igg-immunoglobulin-immune",
    "term": "IgG (Immunoglobulin G)",
    "category": "immune",
    "definition": "Most abundant antibody in blood; provides long-term immunity and crosses the placenta for fetal protection",
    "etymology": "Immunoglobulin + G (gamma, third letter)",
    "example": "Elevated IgG indicates past or chronic infection; IgG antibodies provide vaccine-induced immunity",
    "module": 14
  },
  {
    "id": "iga-immunoglobulin-immune",
    "term": "IgA (Immunoglobulin A)",
    "category": "immune",
    "definition": "Antibody found in mucous secretions (saliva, tears, respiratory fluids) providing mucosal immunity",
    "etymology": "Immunoglobulin + A (alpha, first letter)",
    "example": "Secretory IgA prevents pathogen adhesion to mucous membranes",
    "module": 14
  },
  {
    "id": "igm-immunoglobulin-immune",
    "term": "IgM (Immunoglobulin M)",
    "category": "immune",
    "definition": "First antibody produced during primary immune response; large pentameric structure activates complement efficiently",
    "etymology": "Immunoglobulin + M (mu, Greek letter)",
    "example": "Elevated IgM indicates acute or recent infection, useful in serological diagnosis",
    "module": 14
  },
  {
    "id": "ige-immunoglobulin-immune",
    "term": "IgE (Immunoglobulin E)",
    "category": "immune",
    "definition": "Antibody bound to mast cells and basophils; mediates allergic reactions and parasitic immunity",
    "etymology": "Immunoglobulin + E (epsilon, fifth letter)",
    "example": "Elevated IgE levels cause mast cell degranulation triggering anaphylaxis",
    "module": 14
  },
  {
    "id": "igd-immunoglobulin-immune",
    "term": "IgD (Immunoglobulin D)",
    "category": "immune",
    "definition": "Antibody found on B cell surfaces; functions as antigen receptor for B cell activation",
    "etymology": "Immunoglobulin + D (delta, fourth letter)",
    "example": "IgD on naïve B cells signals antigen recognition and triggers B cell proliferation",
    "module": 14
  },
  {
    "id": "complement-system-immune",
    "term": "Complement System",
    "category": "immune",
    "definition": "Cascade of plasma proteins that enhance inflammation, opsonize pathogens, and lyse cell membranes",
    "etymology": "complement (completes antibody function)",
    "example": "Complement activation via antibody-antigen complexes results in C3a and C5a generation",
    "module": 14
  },
  {
    "id": "antigen-immune",
    "term": "Antigen",
    "category": "immune",
    "definition": "Foreign substance (protein, polysaccharide, lipid) that triggers immune response and binds to antibodies",
    "etymology": "anti (against) + gen (generator, producer)",
    "example": "Bacterial antigens on cell surfaces are recognized by T cell receptors and antibodies",
    "module": 14
  },
  {
    "id": "epitope-immune",
    "term": "Epitope",
    "category": "immune",
    "definition": "Specific region on an antigen recognized and bound by an antibody or T cell receptor",
    "etymology": "epi (upon) + tope (place)",
    "example": "A single antigen may contain multiple epitopes recognized by different antibodies",
    "module": 14
  },
  {
    "id": "cytokine-immune",
    "term": "Cytokine",
    "category": "immune",
    "definition": "Small signaling proteins secreted by immune cells that regulate immune responses, inflammation, and intercellular communication; include interleukins, interferons, and tumor necrosis factors.",
    "etymology": "cyto- (cell) + -kine (movement/action)",
    "example": "IL-6 is a cytokine elevated in severe COVID-19 infections, contributing to cytokine storm.",
    "module": 14
  },
  {
    "id": "interleukin-immune",
    "term": "Interleukin (IL)",
    "category": "immune",
    "definition": "A type of cytokine produced primarily by lymphocytes that mediates communication between white blood cells; examples include IL-2, IL-4, and IL-10 with distinct immunoregulatory functions.",
    "etymology": "inter- (between) + leuko- (white blood cell)",
    "example": "IL-2 is used therapeutically to enhance T cell proliferation in cancer immunotherapy.",
    "module": 14
  },
  {
    "id": "hiv-aids-condition",
    "term": "HIV/AIDS (Human Immunodeficiency Virus/Acquired Immunodeficiency Syndrome)",
    "category": "immune_condition",
    "definition": "Viral infection that destroys CD4+ T cells and progressively weakens the immune system; AIDS is the advanced stage defined by CD4 count <200 cells/μL or opportunistic infections.",
    "etymology": "HIV: human + immuno- (immune) + deficiency; AIDS: acquired + immuno- + deficiency + syndrome",
    "example": "A patient with HIV progressing to AIDS presents with Pneumocystis pneumonia (PCP) and oral candidiasis.",
    "module": 14
  },
  {
    "id": "lupus-sle-condition",
    "term": "Lupus (Systemic Lupus Erythematosus, SLE)",
    "category": "immune_condition",
    "definition": "Autoimmune disease characterized by production of autoantibodies (including anti-DNA and anti-nuclear antibodies) causing inflammation in multiple organ systems including skin, joints, kidneys, and heart.",
    "etymology": "lupus (Latin: wolf, referring to malar rash appearance) + systemic + erythematosus (red)",
    "example": "A female patient with SLE presents with malar rash, photosensitivity, arthralgia, and positive ANA and anti-dsDNA antibodies.",
    "module": 14
  },
  {
    "id": "rheumatoid-arthritis-condition",
    "term": "Rheumatoid Arthritis (RA)",
    "category": "immune_condition",
    "definition": "Autoimmune inflammatory disease targeting synovial joints, mediated by rheumatoid factor (RF) and anti-CCP antibodies, causing joint destruction, deformity, and systemic complications.",
    "etymology": "rheumat- (flow/discharge) + -oid (resembling) + arthritis (joint inflammation)",
    "example": "RA patient presents with symmetric polyarthritis of hands and wrists, morning stiffness >1 hour, and elevated ESR/CRP.",
    "module": 14
  },
  {
    "id": "anaphylaxis-condition",
    "term": "Anaphylaxis",
    "category": "immune_condition",
    "definition": "Severe, life-threatening systemic hypersensitivity reaction occurring within minutes of allergen exposure, characterized by cardiovascular collapse, bronchospasm, laryngeal edema, and urticaria.",
    "etymology": "ana- (against) + phylaxis (protection)",
    "example": "Patient develops anaphylaxis 15 minutes after penicillin injection with hypotension, stridor, and angioedema requiring immediate epinephrine IM.",
    "module": 14
  },
  {
    "id": "allergy-condition",
    "term": "Allergy",
    "category": "immune_condition",
    "definition": "Abnormal immune response to a normally harmless substance (allergen), mediated by IgE antibodies and mast cell/basophil degranulation, causing symptoms ranging from mild (rhinitis) to severe (anaphylaxis).",
    "etymology": "allo- (other) + -ergy (reaction/work)",
    "example": "Seasonal allergic rhinitis occurs when inhaled pollen triggers IgE-mediated mast cell degranulation in nasal mucosa.",
    "module": 14
  },
  {
    "id": "asthma-condition",
    "term": "Asthma",
    "category": "immune_condition",
    "definition": "Chronic inflammatory airway disease characterized by reversible airflow obstruction, bronchial hyperresponsiveness, and airway remodeling; often triggered by allergens, exercise, or infections.",
    "etymology": "asthma (Greek: panting/shortness of breath)",
    "example": "Allergic asthma exacerbation presents with wheezing, dyspnea, and chest tightness triggered by cat dander exposure.",
    "module": 14
  },
  {
    "id": "sjogrens-syndrome-condition",
    "term": "Sjögren's Syndrome",
    "category": "immune_condition",
    "definition": "Autoimmune disorder targeting exocrine glands (salivary and lacrimal) with production of anti-SSA/Ro and anti-SSB/La antibodies, causing xerophthalmia (dry eyes) and xerostomia (dry mouth).",
    "etymology": "Named after Swedish ophthalmologist Henrik Sjögren",
    "example": "Patient with Sjögren's presents with severe dry mouth, dry eyes, and positive anti-SSB antibodies on serologic testing.",
    "module": 14
  },
  {
    "id": "immunodeficiency-condition",
    "term": "Immunodeficiency",
    "category": "immune_condition",
    "definition": "Condition of impaired or absent immune function resulting from primary (genetic) or secondary (acquired) causes, increasing susceptibility to infections, malignancy, and autoimmune disease.",
    "etymology": "immuno- (immune) + deficiency (lack)",
    "example": "Common variable immunodeficiency (CVID) causes recurrent sinusitis, bronchitis, and hypogammaglobulinemia requiring IVIG replacement.",
    "module": 14
  },
  {
    "id": "hodgkins-lymphoma-condition",
    "term": "Hodgkin's Lymphoma",
    "category": "immune_condition",
    "definition": "Malignancy of B-lymphocyte origin characterized by Reed-Sternberg cells, typically presenting with mediastinal involvement, B symptoms (fever, night sweats, weight loss), and generally better prognosis than non-Hodgkin's.",
    "etymology": "Named after Thomas Hodgkin who first described the disease in 1832",
    "example": "Young adult with Hodgkin's lymphoma presents with supraclavicular lymphadenopathy, mediastinal mass, and constitutional symptoms.",
    "module": 14
  },
  {
    "id": "non-hodgkins-lymphoma-condition",
    "term": "Non-Hodgkin's Lymphoma (NHL)",
    "category": "immune_condition",
    "definition": "Diverse group of lymphoid malignancies (B-cell, T-cell, or NK-cell origin) lacking Reed-Sternberg cells; includes diffuse large B-cell lymphoma, follicular lymphoma, and others with variable prognosis.",
    "etymology": "non- (not) + Hodgkin's + lymphoma (lymphoid tissue tumor)",
    "example": "Diffuse large B-cell lymphoma (DLBCL) presents with rapidly enlarging lymph nodes and may involve extranodal sites like GI tract.",
    "module": 14
  },
  {
    "id": "lymphedema-condition",
    "term": "Lymphedema",
    "category": "immune_condition",
    "definition": "Abnormal accumulation of lymph fluid in subcutaneous tissues due to lymphatic obstruction or dysfunction, causing swelling, fibrosis, and increased infection risk; primary (congenital) or secondary (post-surgical/trauma).",
    "etymology": "lymph- (lymph fluid) + -edema (swelling)",
    "example": "Post-mastectomy lymphedema develops in arm due to axillary lymph node dissection and compromised lymphatic drainage.",
    "module": 14
  },
  {
    "id": "lymph-node-biopsy-procedure",
    "term": "Lymph Node Biopsy",
    "category": "procedure",
    "definition": "Surgical or needle procedure to obtain lymph node tissue for histopathologic diagnosis of malignancy, infection, or inflammatory disease; types include excisional, incisional, core needle, and fine needle aspiration.",
    "etymology": "lymph- (lymph node) + -bio (life) + -opsy (viewing/examination)",
    "example": "Excisional lymph node biopsy confirms Hodgkin's lymphoma diagnosis with Reed-Sternberg cells on histology.",
    "module": 14
  },
  {
    "id": "bone-marrow-transplant-procedure",
    "term": "Bone Marrow Transplant (BMT) / Hematopoietic Stem Cell Transplant (HSCT)",
    "category": "procedure",
    "definition": "Procedure infusing hematopoietic stem cells (autologous from patient or allogeneic from donor) to restore bone marrow function in hematologic malignancies, aplastic anemia, and severe immunodeficiency.",
    "etymology": "bone + marrow + transplant (transfer/graft)",
    "example": "Allogeneic bone marrow transplant from matched sibling donor treats acute myeloid leukemia in remission.",
    "module": 14
  },
  {
    "id": "immunotherapy-procedure",
    "term": "Immunotherapy",
    "category": "procedure",
    "definition": "Treatment modality enhancing or modifying immune response against disease, including checkpoint inhibitors (anti-PD-1/PD-L1), CAR-T cell therapy, therapeutic vaccines, and cytokine therapy.",
    "etymology": "immuno- (immune) + -therapy (treatment)",
    "example": "Pembrolizumab (anti-PD-1 checkpoint inhibitor) immunotherapy improves survival in advanced melanoma.",
    "module": 14
  },
  {
    "id": "lympho-combining-form",
    "term": "lymph/o- (Combining Form)",
    "category": "terminology",
    "definition": "Combining form meaning 'lymph' or 'lymphatic tissue'; used in terms like lymphoma, lymphocyte, lymphedema, and lymphadenopathy.",
    "etymology": "lymph- (from Latin lympha: water)",
    "example": "Lymphadenopathy refers to enlarged lymph nodes; lymphocytosis refers to elevated lymphocyte count.",
    "module": 14
  },
  {
    "id": "immuno-combining-form",
    "term": "immun/o- (Combining Form)",
    "category": "terminology",
    "definition": "Combining form meaning 'immune' or 'immunity'; used in terms like immunoglobulin, immunotherapy, immunodeficiency, and immunosuppression.",
    "etymology": "immune- (from Latin immunis: exempt/protected)",
    "example": "Immunoglobulin refers to antibody proteins; immunotherapy refers to treatment using immune mechanisms.",
    "module": 14
  },
  {
    "id": "splen-combining-form",
    "term": "splen/o- (Combining Form)",
    "category": "terminology",
    "definition": "Combining form meaning 'spleen'; used in terms like splenomegaly (enlarged spleen), splenectomy (spleen removal), and splenic infarction.",
    "etymology": "splen- (from Greek splen: spleen)",
    "example": "Splenomegaly occurs in infectious mononucleosis, lymphoma, and hemolytic anemia.",
    "module": 14
  },
  {
    "id": "thym-combining-form",
    "term": "thym/o- (Combining Form)",
    "category": "terminology",
    "definition": "Combining form meaning 'thymus gland'; used in terms like thymoma (thymus tumor), thymectomy (thymus removal), and thymic hyperplasia.",
    "etymology": "thym- (from Greek thymos: thymus gland)",
    "example": "Thymoma is a tumor arising from thymic epithelial cells; thymectomy treats myasthenia gravis by removing abnormal thymus.",
    "module": 14
  },
  {
    "id": "hemat-001-plasma",
    "term": "Plasma",
    "category": "hematology",
    "definition": "The liquid component of blood that remains after blood cells are removed; contains water, proteins, clotting factors, and dissolved substances.",
    "etymology": "Greek 'plasma' meaning 'something molded or formed'",
    "example": "Fresh frozen plasma (FFP) is transfused to replace clotting factors in patients with coagulopathy.",
    "module": 15
  },
  {
    "id": "hemat-002-serum",
    "term": "Serum",
    "category": "hematology",
    "definition": "The liquid portion of blood that remains after clotting and removal of blood cells; plasma without fibrinogen.",
    "etymology": "Latin 'serum' meaning 'whey' or 'liquid'",
    "example": "Serum electrolytes and kidney function tests are ordered to assess metabolic status.",
    "module": 15
  },
  {
    "id": "hemat-003-erythrocyte",
    "term": "Erythrocyte (Red Blood Cell/RBC)",
    "category": "hematology",
    "definition": "Biconcave disc-shaped blood cell containing hemoglobin; primarily responsible for oxygen transport throughout the body.",
    "etymology": "Greek 'erythros' (red) + 'kytos' (cell)",
    "example": "An RBC count of 4.5–5.5 million cells/μL is normal for adult males.",
    "module": 15
  },
  {
    "id": "hemat-004-leukocyte",
    "term": "Leukocyte (White Blood Cell/WBC)",
    "category": "hematology",
    "definition": "Nucleated blood cell involved in immune defense; includes neutrophils, lymphocytes, monocytes, eosinophils, and basophils.",
    "etymology": "Greek 'leukos' (white) + 'kytos' (cell)",
    "example": "A WBC count of 4.5–11.0 K/μL is considered normal in adult patients.",
    "module": 15
  },
  {
    "id": "hemat-005-platelet",
    "term": "Platelet (Thrombocyte)",
    "category": "hematology",
    "definition": "Small, disc-shaped cell fragment essential for blood clotting and hemostasis; formed from megakaryocyte cytoplasm.",
    "etymology": "Greek 'thrombos' (clot) + 'kytos' (cell)",
    "example": "Normal platelet count ranges from 150,000–400,000/μL; thrombocytopenia occurs below 150,000/μL.",
    "module": 15
  },
  {
    "id": "hemat-006-hemoglobin",
    "term": "Hemoglobin (Hgb)",
    "category": "hematology",
    "definition": "Iron-containing protein in red blood cells that binds oxygen and transports it to tissues; composed of globin chains and heme groups.",
    "etymology": "Greek 'haima' (blood) + Latin 'globus' (globe)",
    "example": "Normal hemoglobin is 13.5–17.5 g/dL in adult males and 12.0–15.5 g/dL in females.",
    "module": 15
  },
  {
    "id": "hemat-007-hematocrit",
    "term": "Hematocrit (Hct)",
    "category": "hematology",
    "definition": "Percentage of blood volume occupied by red blood cells; indicates oxygen-carrying capacity of blood.",
    "etymology": "Greek 'haima' (blood) + 'krisis' (separation)",
    "example": "Normal hematocrit is 40–54% for adult males and 36–46% for females.",
    "module": 15
  },
  {
    "id": "hemat-008-neutrophil",
    "term": "Neutrophil",
    "category": "hematology",
    "definition": "Most abundant WBC type; phagocytic cell with segmented nucleus; first responder to bacterial infection.",
    "etymology": "Latin 'neuter' (neutral) referring to neutral staining with dyes",
    "example": "Neutrophils comprise 50–70% of total WBC count; elevated levels indicate bacterial infection.",
    "module": 15
  },
  {
    "id": "hemat-009-lymphocyte",
    "term": "Lymphocyte",
    "category": "hematology",
    "definition": "Second most abundant WBC; key player in adaptive immunity; includes T cells and B cells.",
    "etymology": "Latin 'lympha' (water/clear fluid) + 'kytos' (cell)",
    "example": "Lymphocytes comprise 20–40% of total WBC count; elevated in viral infections.",
    "module": 15
  },
  {
    "id": "hemat-010-monocyte",
    "term": "Monocyte",
    "category": "hematology",
    "definition": "Largest WBC with single large nucleus; precursor to macrophages; involved in phagocytosis and antigen presentation.",
    "etymology": "Greek 'monos' (single) + 'kytos' (cell)",
    "example": "Monocytes comprise 2–8% of total WBC count; elevated in chronic infections.",
    "module": 15
  },
  {
    "id": "hemat-011-eosinophil",
    "term": "Eosinophil",
    "category": "hematology",
    "definition": "WBC with granules containing histamine; primary role in parasitic infections and allergic reactions.",
    "etymology": "Greek 'eos' (rosy/dawn) + 'philos' (loving) referring to pink staining",
    "example": "Eosinophils comprise 1–4% of total WBC count; elevated in parasitic infections and asthma.",
    "module": 15
  },
  {
    "id": "hemat-012-basophil",
    "term": "Basophil",
    "category": "hematology",
    "definition": "Least abundant WBC; contains histamine and heparin granules; involved in allergic and inflammatory responses.",
    "etymology": "Greek 'basis' (base) + 'philos' (loving) referring to basic staining",
    "example": "Basophils comprise 0–1% of total WBC count; elevated in chronic myeloid leukemia.",
    "module": 15
  },
  {
    "id": "hemat-013-coagulation-cascade",
    "term": "Coagulation Cascade",
    "category": "hematology",
    "definition": "Series of enzymatic reactions involving clotting factors (I–XIII) leading to fibrin formation and blood clot; includes extrinsic, intrinsic, and common pathways.",
    "etymology": "Latin 'coagulare' (to curdle) + 'cascata' (waterfall)",
    "example": "PT measures the extrinsic pathway; aPTT measures the intrinsic pathway; both assess bleeding risk.",
    "module": 15
  },
  {
    "id": "hemat-014-fibrin",
    "term": "Fibrin",
    "category": "hematology",
    "definition": "Insoluble protein formed from fibrinogen by thrombin; polymerizes to form the structural mesh of blood clots.",
    "etymology": "Latin 'fibra' (fiber)",
    "example": "Elevated D-dimer indicates fibrin degradation; positive in DVT, PE, and DIC.",
    "module": 15
  },
  {
    "id": "hemat-015-thrombus",
    "term": "Thrombus",
    "category": "hematology",
    "definition": "Blood clot formed within a blood vessel; consists of platelets, fibrin, and trapped blood cells.",
    "etymology": "Greek 'thrombos' (clot)",
    "example": "Deep vein thrombosis (DVT) is a thrombus in leg veins; treated with anticoagulation.",
    "module": 15
  },
  {
    "id": "hemat-016-embolus",
    "term": "Embolus",
    "category": "hematology",
    "definition": "Blood clot, air bubble, or other material that travels through the bloodstream and lodges in a vessel; causes obstruction.",
    "etymology": "Greek 'embolos' (stopper/plug)",
    "example": "Pulmonary embolism occurs when a thrombus dislodges and becomes an embolus in lung vessels.",
    "module": 15
  },
  {
    "id": "hemat-017-pt-inr",
    "term": "Prothrombin Time (PT/INR)",
    "category": "hematology",
    "definition": "Coagulation test measuring extrinsic pathway and common pathway function; expressed as INR (International Normalized Ratio) for warfarin monitoring.",
    "etymology": "Greek 'pro' (before) + Latin 'thrombina'",
    "example": "PT/INR is monitored in patients on warfarin therapy; therapeutic INR is 2.0–3.0 for most indications.",
    "module": 15
  },
  {
    "id": "hemat-018-aptt",
    "term": "Activated Partial Thromboplastin Time (aPTT)",
    "category": "hematology",
    "definition": "Coagulation test measuring intrinsic and common pathway function; used to monitor heparin therapy and detect clotting factor deficiencies.",
    "etymology": "Greek 'pro' (before) + 'thrombos' (clot) with 'partial' pathway activation",
    "example": "aPTT is maintained at 1.5–2.5 times normal in heparin-treated patients for anticoagulation.",
    "module": 15
  },
  {
    "id": "hemat-019-abo-system",
    "term": "ABO Blood Group System",
    "category": "hematology",
    "definition": "Classification of blood based on presence or absence of A and B antigens on RBC surface; determines transfusion compatibility.",
    "etymology": "Named after antigens A and B discovered by Karl Landsteiner",
    "example": "Type O blood lacks A and B antigens; Type AB blood has both; Type A and B have single antigens.",
    "module": 15
  },
  {
    "id": "hemat-020-rh-system",
    "term": "Rh Blood Group System",
    "category": "hematology",
    "definition": "Classification based on presence or absence of RhD antigen; Rh-positive has antigen; Rh-negative lacks it.",
    "etymology": "Named after Rhesus monkey in which antigen was discovered",
    "example": "Rh-negative individuals can develop antibodies if exposed to Rh-positive blood; causes hemolytic transfusion reaction.",
    "module": 15
  },
  {
    "id": "hemat-021-cross-matching",
    "term": "Cross-Matching",
    "category": "hematology",
    "definition": "Laboratory procedure testing compatibility between donor and recipient blood before transfusion; detects incompatible antibodies.",
    "etymology": "From concept of 'crossing' or testing compatibility between blood samples",
    "example": "Cross-matching prevents ABO incompatibility reactions and other hemolytic transfusion reactions.",
    "module": 15
  },
  {
    "id": "hemat-022-blood-compatibility",
    "term": "Blood Type Compatibility",
    "category": "hematology",
    "definition": "Matching of donor and recipient blood types to prevent transfusion reactions; based on ABO and Rh systems.",
    "etymology": "From Latin 'compatibilis' (capable of existing together)",
    "example": "Type O-negative blood is universal donor; Type AB-positive is universal recipient.",
    "module": 15
  },
  {
    "id": "hemat-023-anemia",
    "term": "Anemia",
    "category": "hematology",
    "definition": "Condition with insufficient red blood cells or hemoglobin to carry adequate oxygen; results in fatigue and weakness.",
    "etymology": "Greek 'an-' (without) + 'haima' (blood)",
    "example": "Iron deficiency anemia is treated with iron supplementation; B12 deficiency anemia requires B12 injections.",
    "module": 15
  },
  {
    "id": "hemat-024-iron-deficiency-anemia",
    "term": "Iron Deficiency Anemia",
    "category": "hematology",
    "definition": "Most common anemia caused by insufficient iron for hemoglobin synthesis; results in microcytic, hypochromic RBCs.",
    "etymology": "From deficiency of iron (Fe), essential cofactor in hemoglobin",
    "example": "Iron deficiency anemia is treated with oral ferrous sulfate or IV iron infusion; ferritin level is low.",
    "module": 15
  },
  {
    "id": "hemat-025-pernicious-anemia",
    "term": "Pernicious Anemia",
    "category": "hematology",
    "definition": "Megaloblastic anemia caused by vitamin B12 deficiency due to intrinsic factor deficiency; results in macrocytic RBCs.",
    "etymology": "Latin 'perniciosus' (destructive) + 'anemia' (without blood)",
    "example": "Pernicious anemia is caused by autoimmune destruction of gastric parietal cells; treated with B12 injections.",
    "module": 15
  },
  {
    "id": "hemat-026-aplastic-anemia",
    "term": "Aplastic Anemia",
    "category": "hematology",
    "definition": "A serious condition in which bone marrow fails to produce adequate numbers of red blood cells, white blood cells, and platelets, resulting in pancytopenia.",
    "etymology": "From Greek 'a-' (without) + 'plassein' (to form) + 'anemia' (lack of blood)",
    "example": "A patient exposed to chemotherapy developed aplastic anemia requiring supportive transfusions.",
    "module": 15
  },
  {
    "id": "hemat-027-sickle-cell-anemia",
    "term": "Sickle Cell Anemia",
    "category": "hematology",
    "definition": "An inherited blood disorder characterized by abnormal hemoglobin S that causes red blood cells to assume a sickle shape, leading to hemolysis, pain crises, and organ damage.",
    "etymology": "From Old English 'sicol' (sickle) + 'cell' (Latin 'cella') + 'anemia'",
    "example": "A 15-year-old male with sickle cell anemia presented with acute chest syndrome and hypoxia.",
    "module": 15
  },
  {
    "id": "hemat-028-hemolytic-anemia",
    "term": "Hemolytic Anemia",
    "category": "hematology",
    "definition": "A condition characterized by premature destruction of red blood cells, leading to decreased hemoglobin and inadequate oxygen delivery; may be autoimmune, hereditary, or secondary.",
    "etymology": "From Greek 'haima' (blood) + 'lysis' (breaking down) + 'anemia'",
    "example": "A newborn with erythroblastosis fetalis developed hemolytic anemia due to ABO incompatibility.",
    "module": 15
  },
  {
    "id": "hemat-029-polycythemia-vera",
    "term": "Polycythemia Vera",
    "category": "hematology",
    "definition": "A myeloproliferative neoplasm characterized by excessive production of red blood cells, leading to increased blood viscosity, thrombosis risk, and cardiovascular complications.",
    "etymology": "From Greek 'polys' (many) + 'kytos' (cell) + 'haima' (blood) + Latin 'verus' (true)",
    "example": "An elderly patient with polycythemia vera underwent phlebotomy to reduce hematocrit and prevent stroke.",
    "module": 15
  },
  {
    "id": "hemat-030-acute-lymphoblastic-leukemia",
    "term": "Acute Lymphoblastic Leukemia (ALL)",
    "category": "hematology",
    "definition": "A rapidly progressive hematologic malignancy characterized by uncontrolled proliferation of immature lymphoid cells, most common in children.",
    "etymology": "From Greek 'akutos' (sharp) + 'lympha' (clear fluid) + 'blastos' (germ) + 'leukos' (white) + 'haima' (blood)",
    "example": "A 6-year-old with ALL presented with fever, pallor, and petechiae requiring immediate chemotherapy.",
    "module": 15
  },
  {
    "id": "hemat-031-acute-myeloid-leukemia",
    "term": "Acute Myeloid Leukemia (AML)",
    "category": "hematology",
    "definition": "A rapidly progressive malignancy of myeloid precursor cells characterized by abnormal blast accumulation in bone marrow and blood, most common adult leukemia.",
    "etymology": "From Greek 'akutos' (sharp) + 'myelos' (marrow) + 'oid' (resembling) + 'leukemia'",
    "example": "A 65-year-old male with AML underwent induction chemotherapy with cytarabine and daunorubicin.",
    "module": 15
  },
  {
    "id": "hemat-032-chronic-lymphocytic-leukemia",
    "term": "Chronic Lymphocytic Leukemia (CLL)",
    "category": "hematology",
    "definition": "A slowly progressive malignancy of mature B lymphocytes, typically affecting older adults, often asymptomatic at diagnosis.",
    "etymology": "From Greek 'chronos' (time) + 'lympha' + 'kytos' + 'leukemia'",
    "example": "A 72-year-old with incidental CLL found on routine CBC requires watchful waiting without immediate treatment.",
    "module": 15
  },
  {
    "id": "hemat-033-chronic-myeloid-leukemia",
    "term": "Chronic Myeloid Leukemia (CML)",
    "category": "hematology",
    "definition": "A myeloproliferative disorder characterized by BCR-ABL fusion gene resulting in excessive granulocyte production; responds well to targeted tyrosine kinase inhibitors.",
    "etymology": "From Greek 'chronos' + 'myelos' + 'leukemia'",
    "example": "A patient with CML was started on imatinib (Gleevec) targeting the BCR-ABL mutation.",
    "module": 15
  },
  {
    "id": "hemat-034-thrombocytopenia",
    "term": "Thrombocytopenia",
    "category": "hematology",
    "definition": "A condition characterized by abnormally low platelet count (less than 150,000/µL), increasing bleeding and bruising risk.",
    "etymology": "From Greek 'thrombos' (clot) + 'kytos' (cell) + 'penia' (deficiency)",
    "example": "A patient with immune thrombocytopenic purpura (ITP) presented with platelet count of 15,000/µL.",
    "module": 15
  },
  {
    "id": "hemat-035-hemophilia-a",
    "term": "Hemophilia A",
    "category": "hematology",
    "definition": "An X-linked recessive bleeding disorder caused by deficiency or dysfunction of clotting factor VIII, leading to prolonged bleeding after injury.",
    "etymology": "From Greek 'haima' (blood) + 'philia' (love of; here meaning tendency toward)",
    "example": "A 10-year-old boy with Hemophilia A received factor VIII infusion before dental surgery.",
    "module": 15
  },
  {
    "id": "hemat-036-hemophilia-b",
    "term": "Hemophilia B (Christmas Disease)",
    "category": "hematology",
    "definition": "An X-linked recessive bleeding disorder caused by deficiency of clotting factor IX, clinically similar to Hemophilia A but less common.",
    "etymology": "From 'hemophilia' + Latin 'B' (second identified type); 'Christmas' from patient's surname",
    "example": "A male with Hemophilia B required factor IX supplementation for spontaneous joint bleeding.",
    "module": 15
  },
  {
    "id": "hemat-037-disseminated-intravascular-coagulation",
    "term": "Disseminated Intravascular Coagulation (DIC)",
    "category": "hematology",
    "definition": "A life-threatening condition of widespread clotting activation throughout vasculature, consuming platelets and coagulation factors, leading to bleeding and thrombosis.",
    "etymology": "From Latin 'disseminatus' (scattered) + 'intravascular' (within vessels) + 'coagulation'",
    "example": "A septic patient developed DIC with elevated D-dimer, low platelets, and prolonged PT/aPTT.",
    "module": 15
  },
  {
    "id": "hemat-038-bacteremia",
    "term": "Bacteremia",
    "category": "hematology",
    "definition": "The presence of viable bacteria in the bloodstream, which may be transient, intermittent, or continuous; can progress to sepsis.",
    "etymology": "From Greek 'bakterion' (rod/small staff) + 'haima' (blood)",
    "example": "Blood cultures confirmed bacteremia with Staphylococcus aureus in a patient with infective endocarditis.",
    "module": 15
  },
  {
    "id": "hemat-039-sepsis",
    "term": "Sepsis",
    "category": "hematology",
    "definition": "Life-threatening organ dysfunction caused by dysregulated host response to infection, involving systemic inflammation, coagulation abnormalities, and potential multi-organ failure.",
    "etymology": "From Greek 'sepsis' (putrefaction/decay)",
    "example": "A patient with sepsis from pneumonia required vasopressors, antibiotics, and supportive care in the ICU.",
    "module": 15
  },
  {
    "id": "hemat-040-thrombosis",
    "term": "Thrombosis",
    "category": "hematology",
    "definition": "Formation of a blood clot (thrombus) within a blood vessel, potentially obstructing blood flow and causing ischemia or infarction.",
    "etymology": "From Greek 'thrombos' (clot) + 'osis' (condition)",
    "example": "A patient with atrial fibrillation developed deep vein thrombosis and required anticoagulation therapy.",
    "module": 15
  },
  {
    "id": "hemat-041-reticulocyte-count",
    "term": "Reticulocyte Count",
    "category": "hematology",
    "definition": "A laboratory test measuring the percentage or absolute number of immature red blood cells (reticulocytes) in blood; indicates bone marrow's erythropoietic response.",
    "etymology": "From Latin 'reticulum' (small net) + 'kytos' (cell) + 'count'",
    "example": "After treatment for iron-deficiency anemia, the reticulocyte count increased to 3.5%, indicating bone marrow recovery.",
    "module": 15
  },
  {
    "id": "hemat-042-ferritin",
    "term": "Ferritin",
    "category": "hematology",
    "definition": "An iron-storage protein found in cells and blood; serum ferritin level reflects total body iron stores and aids diagnosis of iron deficiency or overload.",
    "etymology": "From Latin 'ferrum' (iron) + '-itin' (protein suffix)",
    "example": "A patient with suspected iron-deficiency anemia had a serum ferritin level of 8 ng/mL.",
    "module": 15
  },
  {
    "id": "hemat-043-vitamin-b12",
    "term": "Vitamin B12 (Cobalamin)",
    "category": "hematology",
    "definition": "An essential nutrient required for DNA synthesis, myelin formation, and erythropoiesis; deficiency causes pernicious anemia and neurological symptoms.",
    "etymology": "From 'B' (vitamin complex) + 'cobal-' (cobalt element in molecule)",
    "example": "A vegan patient with B12 deficiency presented with megaloblastic anemia and paresthesias.",
    "module": 15
  },
  {
    "id": "hemat-044-folate",
    "term": "Folate (Folic Acid)",
    "category": "hematology",
    "definition": "A B-vitamin essential for DNA synthesis and cell division; deficiency causes megaloblastic anemia and increased birth defect risk during pregnancy.",
    "etymology": "From Latin 'folium' (leaf) + '-ate' (chemical suffix); found in leafy vegetables",
    "example": "A patient with alcoholic cirrhosis and low folate levels received folic acid supplementation.",
    "module": 15
  },
  {
    "id": "hemat-045-erythrocyte-sedimentation-rate",
    "term": "Erythrocyte Sedimentation Rate (ESR)",
    "category": "hematology",
    "definition": "A non-specific inflammatory marker measuring the rate at which red blood cells settle in a tube; elevated in inflammation, infection, and malignancy.",
    "etymology": "From Greek 'erythros' (red) + 'kytos' (cell) + 'sedimentation' (settling)",
    "example": "A patient with rheumatoid arthritis had an ESR of 45 mm/hr indicating active inflammation.",
    "module": 15
  },
  {
    "id": "hemat-046-c-reactive-protein",
    "term": "C-Reactive Protein (CRP)",
    "category": "hematology",
    "definition": "An acute-phase inflammatory protein synthesized by the liver in response to inflammation and infection; useful marker for bacterial infection and disease activity.",
    "etymology": "From 'C' (polysaccharide C of pneumococcus) + 'reactive' + 'protein'",
    "example": "An infant with suspected sepsis had a CRP of 12 mg/L (elevated above 10 mg/L).",
    "module": 15
  },
  {
    "id": "hemat-047-phlebotomy",
    "term": "Phlebotomy",
    "category": "hematology",
    "definition": "The surgical puncture of a vein to withdraw blood for therapeutic purposes (bloodletting) or diagnostic testing.",
    "etymology": "From Greek 'phlebo-' (vein) + 'tomia' (cutting)",
    "example": "A patient with hemochromatosis underwent therapeutic phlebotomy to reduce iron overload.",
    "module": 15
  },
  {
    "id": "hemat-048-bone-marrow-biopsy",
    "term": "Bone Marrow Biopsy",
    "category": "hematology",
    "definition": "A diagnostic procedure involving needle aspiration or core biopsy of bone marrow to examine cell production, diagnose leukemias, anemias, and hematologic disorders.",
    "etymology": "From Latin 'medulla' (marrow) + Greek 'bios' (life) + 'opsis' (sight/examination)",
    "example": "A patient with pancytopenia underwent bone marrow biopsy revealing aplastic anemia.",
    "module": 15
  },
  {
    "id": "hemat-049-blood-transfusion",
    "term": "Blood Transfusion",
    "category": "hematology",
    "definition": "The transfer of donated blood or blood components (RBCs, plasma, platelets, clotting factors) intravenously to restore blood volume or correct deficiencies.",
    "etymology": "From Latin 'trans-' (across) + 'fusio' (pouring)",
    "example": "A trauma patient received 6 units of O-negative packed red blood cells during emergency surgery.",
    "module": 15
  },
  {
    "id": "hemat-050-plasmapheresis",
    "term": "Plasmapheresis",
    "category": "hematology",
    "definition": "A procedure removing plasma from blood while returning the cellular components, used to remove circulating antibodies, immune complexes, or toxins.",
    "etymology": "From Greek 'plasma' (liquid/something molded) + 'pheresis' (removal/taking away)",
    "example": "A patient with thrombotic thrombocytopenic purpura (TTP) received plasmapheresis to remove von Willebrand multimers.",
    "module": 15
  },
  {
    "id": "resp-001-nares",
    "term": "Nares",
    "category": "respiratory",
    "definition": "The nostrils; the external openings of the nasal cavity that allow air to enter the respiratory system.",
    "etymology": "Latin 'naris' meaning nostril",
    "example": "The patient had bilateral nares patent with no obstruction noted on examination.",
    "module": 16
  },
  {
    "id": "resp-002-pharynx",
    "term": "Pharynx",
    "category": "respiratory",
    "definition": "The muscular tube extending from the nasal cavity to the larynx; serves as a passageway for both air and food.",
    "etymology": "Greek 'pharynx' meaning throat",
    "example": "The pharynx was visualized during the nasopharyngoscopy and appeared clear.",
    "module": 16
  },
  {
    "id": "resp-003-larynx",
    "term": "Larynx",
    "category": "respiratory",
    "definition": "The voice box; a structure composed of cartilage that contains the vocal cords and protects the airway.",
    "etymology": "Greek 'larynx' meaning voice box",
    "example": "The larynx was examined with a laryngoscope to assess for polyps.",
    "module": 16
  },
  {
    "id": "resp-004-trachea",
    "term": "Trachea",
    "category": "respiratory",
    "definition": "The windpipe; a tubular structure composed of cartilage rings that connects the larynx to the bronchi.",
    "etymology": "Greek 'tracheia' meaning rough",
    "example": "The endotracheal tube was positioned in the trachea for mechanical ventilation.",
    "module": 16
  },
  {
    "id": "resp-005-epiglottis",
    "term": "Epiglottis",
    "category": "respiratory",
    "definition": "A leaf-shaped cartilaginous structure that covers the laryngeal opening during swallowing to prevent food aspiration.",
    "etymology": "Greek 'epi' (upon) + 'glottis' (glottis)",
    "example": "Epiglottitis was suspected when the patient presented with drooling and difficulty swallowing.",
    "module": 16
  },
  {
    "id": "resp-006-vocal-cords",
    "term": "Vocal Cords",
    "category": "respiratory",
    "definition": "Paired folds of tissue within the larynx that vibrate to produce sound for speech and vocalization.",
    "etymology": "Latin 'vocalis' (vocal) + 'chorda' (cord)",
    "example": "The patient's vocal cords were examined for nodules using direct laryngoscopy.",
    "module": 16
  },
  {
    "id": "resp-007-bronchi",
    "term": "Bronchi",
    "category": "respiratory",
    "definition": "The main branches of the trachea that divide into the left and right lungs; serve as major airways.",
    "etymology": "Greek 'bronchos' meaning windpipe",
    "example": "The right mainstem bronchus was intubated during emergency airway management.",
    "module": 16
  },
  {
    "id": "resp-008-bronchioles",
    "term": "Bronchioles",
    "category": "respiratory",
    "definition": "Small branches of bronchi that lack cartilage and lead to alveoli; represent the transition from conducting to respiratory airways.",
    "etymology": "Greek 'bronchos' + Latin diminutive suffix '-ole'",
    "example": "Bronchiolar inflammation was noted on the patient's chest CT scan.",
    "module": 16
  },
  {
    "id": "resp-009-alveoli",
    "term": "Alveoli",
    "category": "respiratory",
    "definition": "Microscopic air sacs at the terminal ends of bronchioles where gas exchange occurs between air and blood.",
    "etymology": "Latin 'alveolus' meaning small cavity",
    "example": "The alveoli were damaged in this patient with advanced emphysema.",
    "module": 16
  },
  {
    "id": "resp-010-pleura-visceral",
    "term": "Visceral Pleura",
    "category": "respiratory",
    "definition": "The inner membrane layer of the pleura that directly covers the surface of the lungs.",
    "etymology": "Latin 'visceralis' (related to organs) + 'pleura' (side)",
    "example": "The visceral pleura was involved in the inflammatory process visible on chest imaging.",
    "module": 16
  },
  {
    "id": "resp-011-pleura-parietal",
    "term": "Parietal Pleura",
    "category": "respiratory",
    "definition": "The outer membrane layer of the pleura that lines the inner chest wall and diaphragm.",
    "etymology": "Latin 'parietalis' (wall-related) + 'pleura' (side)",
    "example": "Fluid accumulated between the visceral and parietal pleura, causing a pleural effusion.",
    "module": 16
  },
  {
    "id": "resp-012-diaphragm",
    "term": "Diaphragm",
    "category": "respiratory",
    "definition": "The primary muscle of inspiration; a dome-shaped muscular structure that separates the thoracic and abdominal cavities.",
    "etymology": "Greek 'diaphragma' meaning partition",
    "example": "The diaphragm was elevated on the chest X-ray due to subphrenic fluid.",
    "module": 16
  },
  {
    "id": "resp-013-hilum",
    "term": "Hilum",
    "category": "respiratory",
    "definition": "The depression on the medial aspect of each lung where blood vessels, nerves, and bronchi enter the lung.",
    "etymology": "Latin 'hilum' meaning small thing",
    "example": "Lymphadenopathy at the lung hilum was noted on the CT chest scan.",
    "module": 16
  },
  {
    "id": "resp-014-mediastinum",
    "term": "Mediastinum",
    "category": "respiratory",
    "definition": "The central compartment of the thoracic cavity containing the heart, esophagus, great vessels, and lymph nodes.",
    "etymology": "Latin 'mediastinus' meaning middle",
    "example": "Mediastinal widening was observed on the patient's chest radiograph.",
    "module": 16
  },
  {
    "id": "resp-015-lung-lobes",
    "term": "Lung Lobes",
    "category": "respiratory",
    "definition": "Distinct divisions of the lungs; the right lung has three lobes (upper, middle, lower) and the left has two (upper, lower).",
    "etymology": "Latin 'lobus' meaning lobe",
    "example": "The right upper lobe pneumonia was treated with antibiotics.",
    "module": 16
  },
  {
    "id": "resp-016-inspiration",
    "term": "Inspiration",
    "category": "respiratory",
    "definition": "The act of breathing in; inhalation of air into the lungs, primarily driven by diaphragmatic contraction.",
    "etymology": "Latin 'inspirare' meaning to breathe into",
    "example": "Deep inspiration was limited due to pleuritic chest pain.",
    "module": 16
  },
  {
    "id": "resp-017-expiration",
    "term": "Expiration",
    "category": "respiratory",
    "definition": "The act of breathing out; exhalation of air from the lungs, typically a passive process at rest.",
    "etymology": "Latin 'expirare' meaning to breathe out",
    "example": "Prolonged expiration was noted on auscultation in this asthmatic patient.",
    "module": 16
  },
  {
    "id": "resp-018-tidal-volume",
    "term": "Tidal Volume",
    "category": "respiratory",
    "definition": "The amount of air that moves in and out of the lungs with each breath at rest; typically 500 mL in adults.",
    "etymology": "Latin 'tidalis' (tidal) from 'tides' + Latin 'volumen' (volume)",
    "example": "The patient's tidal volume on the ventilator was set to 450 mL.",
    "module": 16
  },
  {
    "id": "resp-019-vital-capacity",
    "term": "Vital Capacity",
    "category": "respiratory",
    "definition": "The maximum amount of air that can be exhaled after maximum inspiration; measures overall lung function.",
    "etymology": "Latin 'vitalis' (vital) + 'capacitas' (capacity)",
    "example": "The patient's vital capacity decreased by 30% compared to predicted values.",
    "module": 16
  },
  {
    "id": "resp-020-fev1",
    "term": "FEV1",
    "category": "respiratory",
    "definition": "Forced Expiratory Volume in 1 second; the amount of air forcefully exhaled in the first second of spirometry; key COPD indicator.",
    "etymology": "Forced + Expiratory + Volume + 1 second",
    "example": "The patient's FEV1 was 45% of predicted, consistent with GOLD Stage 3 COPD.",
    "module": 16
  },
  {
    "id": "resp-021-residual-volume",
    "term": "Residual Volume",
    "category": "respiratory",
    "definition": "The amount of air that remains in the lungs after maximum expiration; cannot be measured by simple spirometry.",
    "etymology": "Latin 'residuus' (remaining) + 'volumen' (volume)",
    "example": "The residual volume was elevated at 5 liters, indicating air trapping.",
    "module": 16
  },
  {
    "id": "resp-022-ventilation",
    "term": "Ventilation",
    "category": "respiratory",
    "definition": "The mechanical process of air movement in and out of the lungs; the amount of air delivered to the alveoli per minute.",
    "etymology": "Latin 'ventilare' meaning to fan or blow air",
    "example": "Mechanical ventilation was initiated in the ICU patient with respiratory failure.",
    "module": 16
  },
  {
    "id": "resp-023-perfusion",
    "term": "Perfusion",
    "category": "respiratory",
    "definition": "Blood flow through the pulmonary capillaries surrounding the alveoli; necessary for gas exchange.",
    "etymology": "Latin 'perfundere' meaning to pour through",
    "example": "Pulmonary perfusion was reduced in areas affected by the pulmonary embolism.",
    "module": 16
  },
  {
    "id": "resp-024-vq-ratio",
    "term": "V/Q Ratio",
    "category": "respiratory",
    "definition": "Ventilation-to-Perfusion ratio; the relationship between air reaching alveoli and blood flow through capillaries; normal ratio is approximately 1:1.",
    "etymology": "V (ventilation) + Q (perfusion, from Latin 'quota')",
    "example": "V/Q mismatch was evident in this patient with pneumonia.",
    "module": 16
  },
  {
    "id": "resp-025-hypoxia",
    "term": "Hypoxia",
    "category": "respiratory",
    "definition": "Insufficient oxygen delivery to tissues at the cellular level; can result from various respiratory or circulatory causes.",
    "etymology": "Greek 'hypo' (under) + 'oxys' (oxygen)",
    "example": "The patient developed hypoxia with oxygen saturation dropping to 88% on room air.",
    "module": 16
  },
  {
    "id": "resp-026-hypoxemia",
    "term": "Hypoxemia",
    "category": "respiratory",
    "definition": "Abnormally low oxygen concentration in the blood; arterial oxygen saturation (PaO2) below 80 mmHg or SpO2 below 95%.",
    "etymology": "hypo- (below) + ox/o (oxygen) + -emia (condition of blood)",
    "example": "The patient developed hypoxemia after the pulmonary embolism, requiring supplemental oxygen therapy.",
    "module": 16
  },
  {
    "id": "resp-027-hypercapnia",
    "term": "Hypercapnia",
    "category": "respiratory",
    "definition": "Elevated level of carbon dioxide in the blood; PaCO2 above 45 mmHg, indicating respiratory depression or inadequate ventilation.",
    "etymology": "hyper- (above) + capnia (carbon dioxide)",
    "example": "Hypercapnia developed in the patient on mechanical ventilation due to insufficient minute ventilation.",
    "module": 16
  },
  {
    "id": "resp-028-hypocapnia",
    "term": "Hypocapnia",
    "category": "respiratory",
    "definition": "Decreased level of carbon dioxide in the blood; PaCO2 below 35 mmHg, resulting from hyperventilation.",
    "etymology": "hypo- (below) + capnia (carbon dioxide)",
    "example": "Anxiety-induced hyperventilation caused hypocapnia, leading to dizziness and tingling in the patient's extremities.",
    "module": 16
  },
  {
    "id": "resp-029-copd",
    "term": "COPD (Chronic Obstructive Pulmonary Disease)",
    "category": "respiratory",
    "definition": "Progressive lung disease characterized by persistent airflow obstruction; includes emphysema and chronic bronchitis; primarily caused by smoking.",
    "etymology": "chronic (long-term) + obstructive (blocking) + pulmonary (lung) + disease",
    "example": "The 62-year-old smoker was diagnosed with COPD after spirometry showed FEV1/FVC ratio of 0.65.",
    "module": 16
  },
  {
    "id": "resp-030-emphysema",
    "term": "Emphysema",
    "category": "respiratory",
    "definition": "Chronic lung disease characterized by destruction of alveolar walls, resulting in loss of elastic recoil and air trapping; component of COPD.",
    "etymology": "em- (in) + physema (inflation) from Greek physan (to blow)",
    "example": "The patient with emphysema experienced severe dyspnea and required long-term oxygen supplementation.",
    "module": 16
  },
  {
    "id": "resp-031-chronic-bronchitis",
    "term": "Chronic Bronchitis",
    "category": "respiratory",
    "definition": "Chronic inflammatory condition of the bronchi characterized by persistent productive cough for at least 3 months per year for 2 consecutive years.",
    "etymology": "chronic (long-term) + bronch/o (bronchi) + -itis (inflammation)",
    "example": "The smoker presented with chronic bronchitis, exhibiting a productive cough and excessive mucus production.",
    "module": 16
  },
  {
    "id": "resp-032-asthma",
    "term": "Asthma",
    "category": "respiratory",
    "definition": "Chronic inflammatory airway disease characterized by reversible airflow obstruction, bronchial hyperresponsiveness, and inflammation; presents with wheezing, dyspnea, and cough.",
    "etymology": "Greek asthma (panting, breathlessness)",
    "example": "The child experienced an asthma exacerbation triggered by allergen exposure, requiring emergency bronchodilator therapy.",
    "module": 16
  },
  {
    "id": "resp-033-pneumonia",
    "term": "Pneumonia",
    "category": "respiratory",
    "definition": "Acute infection of the lung parenchyma causing inflammation and consolidation; caused by bacteria, viruses, or fungi; presents with fever, cough, and dyspnea.",
    "etymology": "pneum/o (lung) + -ia (condition)",
    "example": "The hospitalized patient developed community-acquired pneumonia complicated by sepsis.",
    "module": 16
  },
  {
    "id": "resp-034-tuberculosis",
    "term": "Tuberculosis (TB)",
    "category": "respiratory",
    "definition": "Chronic infectious disease caused by Mycobacterium tuberculosis; primarily affects lungs but can spread systemically; transmitted via airborne droplets.",
    "etymology": "tubercul/o (small swelling) + -osis (condition)",
    "example": "The TB-positive patient required a 6-month course of isoniazid, rifampin, pyrazinamide, and ethambutol.",
    "module": 16
  },
  {
    "id": "resp-035-pulmonary-fibrosis",
    "term": "Pulmonary Fibrosis",
    "category": "respiratory",
    "definition": "Progressive scarring (fibrosis) of lung tissue reducing elasticity and gas exchange; may be idiopathic or secondary to occupational/environmental exposure.",
    "etymology": "pulmon/o (lung) + fibrosis (scarring)",
    "example": "Idiopathic pulmonary fibrosis caused restrictive lung disease with progressive dyspnea in the 68-year-old patient.",
    "module": 16
  },
  {
    "id": "resp-036-pleural-effusion",
    "term": "Pleural Effusion",
    "category": "respiratory",
    "definition": "Abnormal accumulation of fluid between the visceral and parietal pleura; may be transudative (low protein) or exudative (high protein).",
    "etymology": "pleur/o (pleura) + effusion (pouring out)",
    "example": "The patient developed a pleural effusion secondary to congestive heart failure, requiring thoracentesis for diagnosis.",
    "module": 16
  },
  {
    "id": "resp-037-pneumothorax",
    "term": "Pneumothorax",
    "category": "respiratory",
    "definition": "Collapsed lung caused by air entering the pleural space; may be spontaneous (primary or secondary) or traumatic; presents with sudden dyspnea and chest pain.",
    "etymology": "pneum/o (air) + thorax (chest)",
    "example": "The tall, thin young male presented with a spontaneous primary pneumothorax requiring chest tube insertion.",
    "module": 16
  },
  {
    "id": "resp-038-hemothorax",
    "term": "Hemothorax",
    "category": "respiratory",
    "definition": "Accumulation of blood in the pleural space; usually resulting from trauma, surgery, or bleeding disorders; creates respiratory compromise and hypovolemia.",
    "etymology": "hem/o (blood) + thorax (chest)",
    "example": "The trauma patient developed a hemothorax following a penetrating chest wound requiring surgical intervention.",
    "module": 16
  },
  {
    "id": "resp-039-ards",
    "term": "ARDS (Acute Respiratory Distress Syndrome)",
    "category": "respiratory",
    "definition": "Severe inflammatory lung injury causing acute hypoxemic respiratory failure; characterized by bilateral pulmonary infiltrates and PaO2/FiO2 ratio ≤300.",
    "etymology": "acute (sudden) + respiratory + distress + syndrome",
    "example": "The septic patient developed ARDS requiring mechanical ventilation with low tidal volumes and permissive hypercapnia.",
    "module": 16
  },
  {
    "id": "resp-040-pulmonary-hypertension",
    "term": "Pulmonary Hypertension",
    "category": "respiratory",
    "definition": "Elevated pulmonary artery pressure (mean PAP >25 mmHg at rest); causes right heart strain and may lead to cor pulmonale.",
    "etymology": "pulmon/o (lung) + hypertension (high pressure)",
    "example": "Chronic hypoxia from COPD led to pulmonary hypertension and subsequent right ventricular dysfunction.",
    "module": 16
  },
  {
    "id": "resp-041-sleep-apnea",
    "term": "Sleep Apnea",
    "category": "respiratory",
    "definition": "Repeated episodes of breathing cessation during sleep; includes obstructive (airway collapse), central (no respiratory effort), and mixed types.",
    "etymology": "sleep + apnea (without breathing)",
    "example": "The obese male with obstructive sleep apnea was prescribed CPAP therapy to maintain airway patency during sleep.",
    "module": 16
  },
  {
    "id": "resp-042-croup",
    "term": "Croup",
    "category": "respiratory",
    "definition": "Acute laryngotracheitis in children caused by parainfluenza virus; presents with barky, seal-like cough, stridor, and hoarseness.",
    "etymology": "possibly from Scottish 'croup' (to make a harsh sound)",
    "example": "The 3-year-old with croup was treated with dexamethasone and nebulized epinephrine for airway management.",
    "module": 16
  },
  {
    "id": "resp-043-epiglottitis",
    "term": "Epiglottitis",
    "category": "respiratory",
    "definition": "Life-threatening inflammation of the epiglottis, usually caused by Haemophilus influenzae; presents with severe sore throat, drooling, and potential airway obstruction.",
    "etymology": "epiglott/o (epiglottis) + -itis (inflammation)",
    "example": "The patient with acute epiglottitis required emergency intubation and airway protection in the ICU.",
    "module": 16
  },
  {
    "id": "resp-044-atelectasis",
    "term": "Atelectasis",
    "category": "respiratory",
    "definition": "Collapse of alveoli or an entire lung due to obstruction, compression, or loss of surfactant; results in impaired gas exchange.",
    "etymology": "atel/o (incomplete) + ektasis (expansion)",
    "example": "Post-operative atelectasis developed in the patient's right lower lobe, visible on chest X-ray.",
    "module": 16
  },
  {
    "id": "resp-045-pulmonary-embolism",
    "term": "Pulmonary Embolism (PE)",
    "category": "respiratory",
    "definition": "Blood clot or other material lodged in pulmonary arteries; obstructs blood flow causing acute dyspnea, chest pain, and potential hemodynamic collapse.",
    "etymology": "pulmon/o (lung) + embolism (plug or obstruction)",
    "example": "The post-surgical patient developed a pulmonary embolism requiring anticoagulation therapy and IVC filter placement.",
    "module": 16
  },
  {
    "id": "resp-046-lung-cancer",
    "term": "Lung Cancer",
    "category": "respiratory",
    "definition": "Malignant neoplasm of lung tissue; includes non-small cell lung cancer (NSCLC) and small cell lung cancer (SCLC); leading cancer-related cause of death.",
    "etymology": "lung + cancer (malignant growth)",
    "example": "The longtime smoker was diagnosed with stage IIIB lung cancer requiring chemotherapy and radiation therapy.",
    "module": 16
  },
  {
    "id": "resp-047-spirometry",
    "term": "Spirometry",
    "category": "respiratory",
    "definition": "Pulmonary function test measuring forced expiratory volume (FEV1) and forced vital capacity (FVC); used to diagnose obstructive and restrictive lung disease.",
    "etymology": "spir/o (breathing) + -metry (measurement)",
    "example": "Spirometry confirmed COPD with FEV1 35% predicted, consistent with gold stage III disease.",
    "module": 16
  },
  {
    "id": "resp-048-pulse-oximetry",
    "term": "Pulse Oximetry",
    "category": "respiratory",
    "definition": "Non-invasive measurement of arterial oxygen saturation (SpO2) and heart rate using light absorption by hemoglobin; normal SpO2 >95%.",
    "etymology": "pulse + ox/o (oxygen) + -metry (measurement)",
    "example": "Pulse oximetry showed SpO2 88%, prompting initiation of supplemental oxygen therapy.",
    "module": 16
  },
  {
    "id": "resp-049-arterial-blood-gas",
    "term": "Arterial Blood Gas (ABG)",
    "category": "respiratory",
    "definition": "Diagnostic test measuring arterial pH, PaO2, PaCO2, HCO3-, and BE; assesses oxygenation, ventilation, and acid-base status.",
    "etymology": "arterial + blood + gas",
    "example": "ABG analysis showed pH 7.28, PaCO2 58, PaO2 65, indicating respiratory acidosis with hypoxemia.",
    "module": 16
  },
  {
    "id": "resp-050-chest-xray",
    "term": "Chest X-ray",
    "category": "respiratory",
    "definition": "Radiographic imaging of thorax evaluating lung parenchyma, pleura, mediastinum, and bony structures; first-line imaging for respiratory pathology.",
    "etymology": "chest + x-ray (roentgenography)",
    "example": "Chest X-ray revealed right lower lobe consolidation consistent with pneumonia.",
    "module": 16
  },
  {
    "id": "resp-051-ct-chest",
    "term": "CT Chest (Computed Tomography of the Chest)",
    "category": "respiratory",
    "definition": "Radiographic imaging technique using X-rays and computer processing to create detailed cross-sectional images of thoracic structures; superior to chest X-ray for detecting lung masses, pulmonary nodules, and mediastinal abnormalities.",
    "etymology": "CT from 'computed tomography'; chest from Old English 'cest' meaning box or trunk of the body",
    "example": "A CT chest with contrast was ordered to evaluate a suspicious 8mm nodule found on screening chest X-ray.",
    "module": 16
  },
  {
    "id": "resp-052-bronchoscopy",
    "term": "Bronchoscopy",
    "category": "respiratory",
    "definition": "Minimally invasive diagnostic and therapeutic procedure using a thin, flexible or rigid tube with a camera to directly visualize the trachea, bronchi, and bronchioles; allows for biopsy, secretion removal, and foreign body retrieval.",
    "etymology": "From Greek 'bronchus' (windpipe) + 'skopein' (to examine)",
    "example": "Flexible bronchoscopy with bronchoalveolar lavage was performed to diagnose suspected pulmonary infection.",
    "module": 16
  },
  {
    "id": "resp-053-sputum-culture",
    "term": "Sputum Culture",
    "category": "respiratory",
    "definition": "Microbiological test of expectorated respiratory secretions to identify bacterial, fungal, or acid-fast bacilli organisms causing respiratory infection; guides antibiotic selection.",
    "etymology": "Sputum from Latin 'sputum' (spittle); culture from Latin 'cultura' (cultivation)",
    "example": "Sputum culture grew Streptococcus pneumoniae, confirming bacterial pneumonia.",
    "module": 16
  },
  {
    "id": "resp-054-intubation",
    "term": "Intubation (Endotracheal Intubation)",
    "category": "respiratory",
    "definition": "Procedure of inserting an endotracheal tube through the mouth or nose into the trachea to maintain airway patency and facilitate mechanical ventilation; essential in critical care and anesthesia.",
    "etymology": "From Latin 'in' (into) + 'tubum' (tube)",
    "example": "The patient required emergent intubation following severe anaphylaxis with airway edema.",
    "module": 16
  },
  {
    "id": "resp-055-mechanical-ventilation",
    "term": "Mechanical Ventilation",
    "category": "respiratory",
    "definition": "Life support therapy using a ventilator to deliver oxygen-enriched air into the lungs at controlled volumes, pressures, and rates; essential for respiratory failure and during anesthesia.",
    "etymology": "Mechanical from Greek 'mechanikos' (of machines); ventilation from Latin 'ventilare' (to fan)",
    "example": "The ARDS patient was placed on mechanical ventilation with PEEP of 12 cmH2O.",
    "module": 16
  },
  {
    "id": "resp-056-chest-tube",
    "term": "Chest Tube (Chest Drain, Thoracostomy Tube)",
    "category": "respiratory",
    "definition": "Flexible plastic tube inserted through the chest wall into the pleural space or mediastinum to drain air, fluid, blood, or pus; restores negative pressure and allows lung re-expansion.",
    "etymology": "From Latin 'thorax' (chest) + 'ostomy' (opening)",
    "example": "A 28 French chest tube was placed on the right for hemothorax secondary to blunt trauma.",
    "module": 16
  },
  {
    "id": "resp-057-thoracentesis",
    "term": "Thoracentesis (Pleural Tap)",
    "category": "respiratory",
    "definition": "Minimally invasive procedure using needle or catheter to aspirate fluid from the pleural space for diagnostic analysis or therapeutic drainage; used to diagnose causes of pleural effusion.",
    "etymology": "From Greek 'thorax' (chest) + 'kentesis' (puncture)",
    "example": "Thoracentesis yielded 1.2 liters of exudative fluid positive for malignant cells.",
    "module": 16
  },
  {
    "id": "resp-058-lobectomy",
    "term": "Lobectomy (Pulmonary Lobectomy)",
    "category": "respiratory",
    "definition": "Surgical removal of an entire lobe of the lung; performed for lung cancer, severe infection, tuberculosis, or bronchiectasis; maintains pulmonary function in remaining lobes.",
    "etymology": "From Latin 'lobus' (lobe) + Greek 'ektome' (excision)",
    "example": "Right upper lobectomy was performed for stage IB non-small cell lung cancer.",
    "module": 16
  },
  {
    "id": "resp-059-pneumo-combining-form",
    "term": "Pneum/o, Pneumon/o (Combining Forms)",
    "category": "respiratory",
    "definition": "Greek combining forms meaning 'lung' or 'air'; used in medical terminology to form words related to lungs and respiratory conditions.",
    "etymology": "From Greek 'pneuma' (breath, spirit, air)",
    "example": "Pneumonia (infection of lungs), pneumothorax (air in pleural space), pneumonectomy (lung removal)",
    "module": 16
  },
  {
    "id": "resp-060-spir-combining-form",
    "term": "Spir/o (Combining Form)",
    "category": "respiratory",
    "definition": "Latin combining form meaning 'to breathe'; used in respiratory terminology to describe breathing patterns and measurements.",
    "etymology": "From Latin 'spirare' (to breathe)",
    "example": "Spirometry (measurement of breathing volumes), inspiration (breathing in), expiration (breathing out)",
    "module": 16
  },
  {
    "id": "gi-001-oral-cavity",
    "term": "Oral Cavity",
    "category": "gastrointestinal",
    "definition": "The mouth; the first part of the digestive tract where food enters, is chewed by teeth, and mixed with saliva containing amylase for initial carbohydrate digestion.",
    "etymology": "Latin 'os' (mouth) + 'cavus' (hollow)",
    "example": "The oral cavity contains 32 permanent teeth in adults and is lined with mucous membrane.",
    "module": 17
  },
  {
    "id": "gi-002-esophagus",
    "term": "Esophagus",
    "category": "gastrointestinal",
    "definition": "A muscular tube approximately 25 cm long that transports food from the pharynx to the stomach via peristalsis; lies behind the trachea.",
    "etymology": "Greek 'oisophagos' (gullet); 'oiso' (will carry) + 'phagos' (eat)",
    "example": "Gastroesophageal reflux occurs when stomach acid backs up into the esophagus.",
    "module": 17
  },
  {
    "id": "gi-003-stomach-fundus",
    "term": "Fundus (Stomach)",
    "category": "gastrointestinal",
    "definition": "The upper, rounded portion of the stomach that lies above the gastroesophageal junction and stores food; contains gastric glands.",
    "etymology": "Latin 'fundus' (bottom, base)",
    "example": "The fundus is the most common site for gastric ulcer formation.",
    "module": 17
  },
  {
    "id": "gi-004-stomach-body",
    "term": "Body (Stomach)",
    "category": "gastrointestinal",
    "definition": "The largest central portion of the stomach where food is mixed with gastric juices and churned into chyme through muscular contractions.",
    "etymology": "Latin 'corpus' (body)",
    "example": "The body of the stomach contains the majority of gastric glands producing HCl and pepsinogen.",
    "module": 17
  },
  {
    "id": "gi-005-stomach-antrum",
    "term": "Antrum (Stomach)",
    "category": "gastrointestinal",
    "definition": "The lower portion of the stomach that narrows toward the pylorus; functions to further churn and propel chyme into the small intestine.",
    "etymology": "Greek 'antron' (cave)",
    "example": "Antral gastritis is inflammation of the antral region of the stomach.",
    "module": 17
  },
  {
    "id": "gi-006-pylorus",
    "term": "Pylorus",
    "category": "gastrointestinal",
    "definition": "The outlet of the stomach controlled by the pyloric sphincter; regulates the passage of chyme into the duodenum and prevents reflux.",
    "etymology": "Greek 'pyloros' (gatekeeper); 'pyle' (gate) + 'oros' (guardian)",
    "example": "Pyloric stenosis in infants causes vomiting and is treated surgically with pyloromyotomy.",
    "module": 17
  },
  {
    "id": "gi-007-duodenum",
    "term": "Duodenum",
    "category": "gastrointestinal",
    "definition": "The first part of the small intestine (approximately 25 cm) that receives chyme from the stomach and receives bile from the gallbladder and pancreatic enzymes; site of major nutrient digestion and absorption.",
    "etymology": "Latin 'duodenum' (twelve); named for its length of approximately twelve finger-widths",
    "example": "Duodenal ulcers account for 80% of peptic ulcer disease cases.",
    "module": 17
  },
  {
    "id": "gi-008-jejunum",
    "term": "Jejunum",
    "category": "gastrointestinal",
    "definition": "The middle portion of the small intestine (approximately 2.5 meters) that is responsible for the majority of nutrient absorption; has prominent mucosal folds.",
    "etymology": "Latin 'jejunus' (empty), named because it appears empty after death",
    "example": "Jejunal biopsy may be performed to diagnose celiac disease or tropical sprue.",
    "module": 17
  },
  {
    "id": "gi-009-ileum",
    "term": "Ileum",
    "category": "gastrointestinal",
    "definition": "The final portion of the small intestine (approximately 3.6 meters) that connects to the cecum at the ileocecal valve; specialized for absorption of vitamin B12 and bile salts.",
    "etymology": "Greek 'eilein' (to twist); refers to its coiled appearance",
    "example": "Crohn's disease most commonly affects the terminal ileum.",
    "module": 17
  },
  {
    "id": "gi-010-cecum",
    "term": "Cecum",
    "category": "gastrointestinal",
    "definition": "The beginning of the large intestine; a pouch that receives chyme from the ileum through the ileocecal valve and connects to the ascending colon.",
    "etymology": "Latin 'caecum' (blind), named because it is a blind pouch",
    "example": "The appendix is a small tube attached to the posteromedial wall of the cecum.",
    "module": 17
  },
  {
    "id": "gi-011-ascending-colon",
    "term": "Ascending Colon",
    "category": "gastrointestinal",
    "definition": "The first segment of the large intestine that travels vertically upward from the cecum to the hepatic flexure; absorbs water and electrolytes.",
    "etymology": "Latin 'ascendere' (to climb up)",
    "example": "Ascending colon cancer may present with right-sided abdominal pain.",
    "module": 17
  },
  {
    "id": "gi-012-transverse-colon",
    "term": "Transverse Colon",
    "category": "gastrointestinal",
    "definition": "The horizontal portion of the large intestine that crosses the abdomen from right to left; continues water and electrolyte absorption.",
    "etymology": "Latin 'transversus' (lying across)",
    "example": "The transverse colon is the longest and most mobile segment of the colon.",
    "module": 17
  },
  {
    "id": "gi-013-descending-colon",
    "term": "Descending Colon",
    "category": "gastrointestinal",
    "definition": "The portion of the large intestine that travels vertically downward from the splenic flexure to the sigmoid colon; continues water absorption and propels feces.",
    "etymology": "Latin 'descendere' (to go down)",
    "example": "Descending colon obstruction may occur secondary to colorectal cancer.",
    "module": 17
  },
  {
    "id": "gi-014-sigmoid-colon",
    "term": "Sigmoid Colon",
    "category": "gastrointestinal",
    "definition": "The S-shaped portion of the large intestine between the descending colon and rectum; serves as a reservoir for feces before elimination.",
    "etymology": "Greek 'sigma' (S-shaped letter) + 'colon'",
    "example": "Sigmoid volvulus is a life-threatening condition where the sigmoid colon twists on itself.",
    "module": 17
  },
  {
    "id": "gi-015-rectum",
    "term": "Rectum",
    "category": "gastrointestinal",
    "definition": "The final straight portion of the large intestine (approximately 12 cm) that stores feces until defecation; contains the internal anal sphincter.",
    "etymology": "Latin 'rectus' (straight)",
    "example": "Rectal bleeding may indicate hemorrhoids, anal fissures, or colorectal cancer.",
    "module": 17
  },
  {
    "id": "gi-016-anus",
    "term": "Anus",
    "category": "gastrointestinal",
    "definition": "The terminal opening of the digestive tract controlled by internal and external anal sphincters; allows for elimination of feces.",
    "etymology": "Latin 'anus' (ring)",
    "example": "Anal fissures cause severe pain during defecation and may result from constipation.",
    "module": 17
  },
  {
    "id": "gi-017-appendix",
    "term": "Appendix",
    "category": "gastrointestinal",
    "definition": "A small, tube-like structure (5-10 cm) attached to the posteromedial wall of the cecum; has no known digestive function but contains lymphoid tissue.",
    "etymology": "Latin 'appendix' (something appended or attached)",
    "example": "Acute appendicitis presents with right lower quadrant pain and requires appendectomy.",
    "module": 17
  },
  {
    "id": "gi-018-liver",
    "term": "Liver",
    "category": "gastrointestinal",
    "definition": "The largest internal organ (1.4-1.6 kg) that produces bile, detoxifies substances, synthesizes proteins, and stores glycogen; has dual blood supply from hepatic artery and portal vein.",
    "etymology": "Old English 'lifer' + German 'Leber'",
    "example": "Hepatitis A causes acute liver inflammation with jaundice and elevated liver enzymes.",
    "module": 17
  },
  {
    "id": "gi-019-gallbladder",
    "term": "Gallbladder",
    "category": "gastrointestinal",
    "definition": "A small pear-shaped organ attached to the undersurface of the liver that stores and concentrates bile; releases bile into the duodenum via the cystic duct during fat digestion.",
    "etymology": "Old English 'gall' (bile) + 'bladder'",
    "example": "Cholelithiasis (gallstones) may develop in the gallbladder and cause cholecystitis.",
    "module": 17
  },
  {
    "id": "gi-020-pancreas",
    "term": "Pancreas",
    "category": "gastrointestinal",
    "definition": "A mixed endocrine-exocrine gland located behind the stomach that secretes digestive enzymes (amylase, lipase, protease) into the duodenum and hormones (insulin, glucagon) into the bloodstream.",
    "etymology": "Greek 'pankreas' (all flesh); 'pan' (all) + 'kreas' (flesh)",
    "example": "Acute pancreatitis presents with severe epigastric pain and elevated amylase and lipase levels.",
    "module": 17
  },
  {
    "id": "gi-021-peritoneum",
    "term": "Peritoneum",
    "category": "gastrointestinal",
    "definition": "The serous membrane that lines the abdominal cavity (parietal peritoneum) and covers most abdominal organs (visceral peritoneum); secretes peritoneal fluid for lubrication.",
    "etymology": "Greek 'peritoneum' (stretched around); 'peri' (around) + 'tonos' (stretching)",
    "example": "Peritonitis is inflammation of the peritoneum due to bacterial infection or perforation.",
    "module": 17
  },
  {
    "id": "gi-022-mesentery",
    "term": "Mesentery",
    "category": "gastrointestinal",
    "definition": "A fold of peritoneum that attaches the small intestine to the posterior abdominal wall; contains blood vessels, nerves, and lymphatics that supply the small intestine.",
    "etymology": "Greek 'mesos' (middle) + 'enteron' (intestine)",
    "example": "Mesenteric ischemia occurs when blood flow to the mesentery is compromised.",
    "module": 17
  },
  {
    "id": "gi-023-greater-omentum",
    "term": "Greater Omentum",
    "category": "gastrointestinal",
    "definition": "A large fold of peritoneum that hangs from the greater curvature of the stomach and covers the small intestines; provides insulation and contains adipose tissue.",
    "etymology": "Latin 'omentum' (skin covering)",
    "example": "The greater omentum may wall off infections or inflammatory processes to prevent spread.",
    "module": 17
  },
  {
    "id": "gi-024-lesser-omentum",
    "term": "Lesser Omentum",
    "category": "gastrointestinal",
    "definition": "A fold of peritoneum between the lesser curvature of the stomach and the liver; contains the hepatic artery, portal vein, and common bile duct.",
    "etymology": "Latin 'omentum' (skin covering)",
    "example": "The lesser omentum may be involved in the spread of gastric cancer.",
    "module": 17
  },
  {
    "id": "gi-025-amylase",
    "term": "Amylase",
    "category": "gastrointestinal",
    "definition": "An enzyme that hydrolyzes starch into maltose; secreted by salivary glands and pancreas; elevated serum levels indicate pancreatitis or salivary gland disorders.",
    "etymology": "Greek 'amylon' (starch) + 'ase' (enzyme suffix)",
    "example": "Serum amylase >3 times the upper limit of normal is diagnostic for acute pancreatitis.",
    "module": 17
  },
  {
    "id": "gi-026-lipase",
    "term": "Lipase",
    "category": "gastrointestinal",
    "definition": "Pancreatic enzyme that breaks down dietary fats (lipids) into fatty acids and glycerol in the small intestine.",
    "etymology": "From Latin 'lipum' (fat) + Greek '-ase' (enzyme suffix)",
    "example": "Elevated serum lipase levels may indicate acute pancreatitis.",
    "module": 17
  },
  {
    "id": "gi-027-pepsin",
    "term": "Pepsin",
    "category": "gastrointestinal",
    "definition": "Proteolytic enzyme secreted by gastric chief cells that initiates protein digestion in the stomach by breaking peptide bonds.",
    "etymology": "From Greek 'peptein' (to digest)",
    "example": "Pepsin functions optimally in the acidic environment of the stomach (pH 1.5-3.5).",
    "module": 17
  },
  {
    "id": "gi-028-bile",
    "term": "Bile",
    "category": "gastrointestinal",
    "definition": "Digestive fluid produced by the liver and stored in the gallbladder that emulsifies fats and facilitates their absorption.",
    "etymology": "From Latin 'bilis' (bile)",
    "example": "Bile salts are essential for the absorption of fat-soluble vitamins (A, D, E, K).",
    "module": 17
  },
  {
    "id": "gi-029-hydrochloric-acid",
    "term": "Hydrochloric Acid (HCl)",
    "category": "gastrointestinal",
    "definition": "Strong acid secreted by gastric parietal cells that denatures proteins and activates pepsinogen to pepsin.",
    "etymology": "From Greek 'hydro' (water) + 'chlor' (green) referring to chlorine gas",
    "example": "HCl secretion is controlled by gastrin and acetylcholine.",
    "module": 17
  },
  {
    "id": "gi-030-intrinsic-factor",
    "term": "Intrinsic Factor",
    "category": "gastrointestinal",
    "definition": "Glycoprotein produced by gastric parietal cells that is essential for vitamin B12 (cobalamin) absorption in the terminal ileum.",
    "etymology": "Named 'intrinsic' because it originates within the stomach itself",
    "example": "Loss of intrinsic factor due to gastric atrophy or autoimmunity leads to pernicious anemia.",
    "module": 17
  },
  {
    "id": "gi-031-gastrin",
    "term": "Gastrin",
    "category": "gastrointestinal",
    "definition": "Hormone secreted by G cells in the gastric antrum and duodenum that stimulates gastric acid and pepsin secretion.",
    "etymology": "From Greek 'gaster' (stomach) + '-in' (hormone suffix)",
    "example": "Elevated fasting gastrin levels suggest Zollinger-Ellison syndrome.",
    "module": 17
  },
  {
    "id": "gi-032-secretin",
    "term": "Secretin",
    "category": "gastrointestinal",
    "definition": "Hormone produced by S cells in the duodenum that inhibits gastric acid secretion and stimulates pancreatic bicarbonate secretion.",
    "etymology": "From Latin 'secernere' (to separate or secrete)",
    "example": "Secretin is released in response to acidic chyme entering the duodenum.",
    "module": 17
  },
  {
    "id": "gi-033-gerd",
    "term": "Gastroesophageal Reflux Disease (GERD)",
    "category": "gastrointestinal",
    "definition": "Chronic condition in which stomach acid frequently flows back into the esophagus, causing heartburn and potential tissue damage.",
    "etymology": "From Greek 'gaster' (stomach) + Latin 'oesophagus' (esophagus) + 're' (back) + 'fluxus' (flow)",
    "example": "Long-standing GERD increases risk of Barrett's esophagus and esophageal adenocarcinoma.",
    "module": 17
  },
  {
    "id": "gi-034-peptic-ulcer-disease",
    "term": "Peptic Ulcer Disease (PUD)",
    "category": "gastrointestinal",
    "definition": "Erosion of the mucous membrane of the stomach or duodenum, often caused by Helicobacter pylori infection or NSAIDs.",
    "etymology": "From Greek 'peptikos' (relating to digestion) + Latin 'ulcus' (ulcer)",
    "example": "H. pylori accounts for approximately 90% of duodenal ulcers and 70% of gastric ulcers.",
    "module": 17
  },
  {
    "id": "gi-035-gastritis",
    "term": "Gastritis",
    "category": "gastrointestinal",
    "definition": "Inflammation of the gastric mucosa, which may be acute or chronic and can result from infection, NSAIDs, or autoimmunity.",
    "etymology": "From Greek 'gaster' (stomach) + '-itis' (inflammation suffix)",
    "example": "Acute gastritis may present with epigastric pain, nausea, and hematemesis.",
    "module": 17
  },
  {
    "id": "gi-036-gastroenteritis",
    "term": "Gastroenteritis",
    "category": "gastrointestinal",
    "definition": "Inflammation of the stomach and small intestine, commonly caused by viral or bacterial infection, presenting with diarrhea and vomiting.",
    "etymology": "From Greek 'gaster' (stomach) + 'enteron' (intestine) + '-itis' (inflammation)",
    "example": "Norovirus is a common cause of acute viral gastroenteritis in closed environments.",
    "module": 17
  },
  {
    "id": "gi-037-crohns-disease",
    "term": "Crohn's Disease",
    "category": "gastrointestinal",
    "definition": "Chronic inflammatory bowel disease characterized by transmural inflammation that can affect any segment of the GI tract from mouth to anus.",
    "etymology": "Named after Dr. Burrill Bernard Crohn, who first described the condition in 1932",
    "example": "Crohn's disease commonly affects the terminal ileum and is associated with fistula formation.",
    "module": 17
  },
  {
    "id": "gi-038-ulcerative-colitis",
    "term": "Ulcerative Colitis (UC)",
    "category": "gastrointestinal",
    "definition": "Chronic inflammatory bowel disease limited to the colon and rectum, characterized by mucosal ulceration and bloody diarrhea.",
    "etymology": "From Latin 'ulcus' (ulcer) + 'colitis' (colon inflammation)",
    "example": "Ulcerative colitis always involves the rectum and extends proximally in a continuous pattern.",
    "module": 17
  },
  {
    "id": "gi-039-ibs",
    "term": "Irritable Bowel Syndrome (IBS)",
    "category": "gastrointestinal",
    "definition": "Functional gastrointestinal disorder characterized by abdominal pain and altered bowel habits without structural or biochemical abnormalities.",
    "etymology": "From Latin 'irritare' (to irritate) + 'bowel' (intestine)",
    "example": "IBS affects approximately 10-15% of the population and is classified into subtypes: diarrhea-predominant, constipation-predominant, or mixed.",
    "module": 17
  },
  {
    "id": "gi-040-celiac-disease",
    "term": "Celiac Disease",
    "category": "gastrointestinal",
    "definition": "Autoimmune disorder triggered by gluten ingestion in genetically predisposed individuals, causing villous atrophy and malabsorption.",
    "etymology": "From Greek 'koilia' (abdominal cavity/celiac)",
    "example": "Tissue transglutaminase (tTG) IgA antibodies are used for serological screening of celiac disease.",
    "module": 17
  },
  {
    "id": "gi-041-diverticulitis",
    "term": "Diverticulitis",
    "category": "gastrointestinal",
    "definition": "Inflammation or infection of small outpouchings (diverticula) in the colon, typically affecting the sigmoid colon.",
    "etymology": "From Latin 'divertere' (to turn aside) + '-itis' (inflammation)",
    "example": "Left-sided diverticulitis in the sigmoid colon is more common in Western populations than right-sided cecal diverticulitis.",
    "module": 17
  },
  {
    "id": "gi-042-appendicitis",
    "term": "Appendicitis",
    "category": "gastrointestinal",
    "definition": "Acute inflammation of the vermiform appendix, typically presenting with right lower quadrant pain and requiring surgical appendectomy.",
    "etymology": "From Latin 'appendix' (appendage) + '-itis' (inflammation)",
    "example": "McBurney's point (one-third the distance from the anterior superior iliac spine to the umbilicus) marks the typical location of appendiceal pain.",
    "module": 17
  },
  {
    "id": "gi-043-hepatitis-a",
    "term": "Hepatitis A",
    "category": "gastrointestinal",
    "definition": "Acute viral infection of the liver caused by hepatitis A virus (HAV), transmitted via fecal-oral route, rarely causing chronic disease.",
    "etymology": "From Greek 'hepar' (liver) + '-itis' (inflammation) + Latin 'A' (viral classification)",
    "example": "Hepatitis A vaccination is recommended for travelers to endemic areas and provides lifelong immunity.",
    "module": 17
  },
  {
    "id": "gi-044-hepatitis-b",
    "term": "Hepatitis B",
    "category": "gastrointestinal",
    "definition": "Chronic or acute viral infection of the liver caused by hepatitis B virus (HBV), transmitted parentally or sexually, potentially causing cirrhosis.",
    "etymology": "From Greek 'hepar' (liver) + '-itis' (inflammation) + Latin 'B' (viral classification)",
    "example": "Hepatitis B surface antigen (HBsAg) positivity for ≥6 months indicates chronic hepatitis B infection.",
    "module": 17
  },
  {
    "id": "gi-045-hepatitis-c",
    "term": "Hepatitis C",
    "category": "gastrointestinal",
    "definition": "Chronic viral infection of the liver caused by hepatitis C virus (HCV), primarily transmitted via blood exposure, leading to cirrhosis in 20-30% of cases.",
    "etymology": "From Greek 'hepar' (liver) + '-itis' (inflammation) + Latin 'C' (viral classification)",
    "example": "Hepatitis C can now be cured with direct-acting antiviral (DAA) medications with >95% cure rates.",
    "module": 17
  },
  {
    "id": "gi-046-cirrhosis",
    "term": "Cirrhosis",
    "category": "gastrointestinal",
    "definition": "End-stage liver disease characterized by extensive hepatic fibrosis and hepatocyte necrosis, resulting in loss of liver function and portal hypertension.",
    "etymology": "From Greek 'kirros' (tawny yellow) describing the appearance of the cirrhotic liver",
    "example": "Cirrhosis complications include ascites, variceal bleeding, hepatic encephalopathy, and hepatorenal syndrome.",
    "module": 17
  },
  {
    "id": "gi-047-pancreatitis",
    "term": "Pancreatitis",
    "category": "gastrointestinal",
    "definition": "Inflammation of the pancreas, typically acute and caused by gallstones or alcohol, presenting with severe epigastric pain and elevated pancreatic enzymes.",
    "etymology": "From Greek 'pankreas' (pancreas) + '-itis' (inflammation)",
    "example": "Acute pancreatitis diagnosis requires two of three criteria: characteristic abdominal pain, elevated amylase/lipase (>3× upper limit of normal), and imaging findings.",
    "module": 17
  },
  {
    "id": "gi-048-cholecystitis",
    "term": "Cholecystitis",
    "category": "gastrointestinal",
    "definition": "Inflammation of the gallbladder, usually caused by cystic duct obstruction from gallstones, presenting with right upper quadrant pain.",
    "etymology": "From Greek 'chole' (bile) + 'kystis' (bladder) + '-itis' (inflammation)",
    "example": "Murphy's sign (inspiratory arrest during palpation of the gallbladder fossa) is a clinical indicator of acute cholecystitis.",
    "module": 17
  },
  {
    "id": "gi-049-cholelithiasis",
    "term": "Cholelithiasis",
    "category": "gastrointestinal",
    "definition": "Formation of gallstones (calculi) in the gallbladder, which may be asymptomatic or cause biliary colic and cholecystitis.",
    "etymology": "From Greek 'chole' (bile) + 'lithos' (stone) + '-iasis' (condition)",
    "example": "Risk factors for cholelithiasis include female gender, age, fertility, obesity, and family history (4 F's mnemonic).",
    "module": 17
  },
  {
    "id": "gi-050-colorectal-cancer",
    "term": "Colorectal Cancer",
    "category": "gastrointestinal",
    "definition": "Malignancy arising from the epithelium of the colon or rectum, often developing from adenomatous polyps over 10-15 years.",
    "etymology": "From Latin 'color' (colon) + 'rectum' (rectum) + 'cancer' (malignancy)",
    "example": "Screening colonoscopy beginning at age 45-50 with removal of adenomatous polyps significantly reduces colorectal cancer incidence and mortality.",
    "module": 17
  },
  {
    "id": "gi-051-hemorrhoids",
    "term": "Hemorrhoids",
    "category": "gastrointestinal",
    "definition": "Swollen veins in the lower rectum and anus, causing itching, pain, and bleeding; may be internal or external.",
    "etymology": "From Greek 'haima' (blood) + 'rhoos' (flowing).",
    "example": "The patient presented with bright red blood on toilet paper and anal itching, consistent with external hemorrhoids.",
    "module": 17
  },
  {
    "id": "gi-052-hernia",
    "term": "Hernia",
    "category": "gastrointestinal",
    "definition": "Protrusion of an organ or tissue through an abnormal opening in the muscle or membrane that normally contains it; common types include hiatal, inguinal, and femoral hernias.",
    "etymology": "From Latin 'hernia' (rupture).",
    "example": "A hiatal hernia allows the stomach to protrude through the diaphragm, often causing GERD symptoms.",
    "module": 17
  },
  {
    "id": "gi-053-ileus",
    "term": "Ileus",
    "category": "gastrointestinal",
    "definition": "Temporary paralysis of intestinal muscles preventing normal peristalsis and bowel movement; may be postoperative or due to medication/electrolyte imbalance.",
    "etymology": "From Greek 'eileos' (colic, twisting of the bowels).",
    "example": "Post-abdominal surgery, the patient developed ileus with abdominal distension and absence of bowel sounds.",
    "module": 17
  },
  {
    "id": "gi-054-bowel-obstruction",
    "term": "Bowel Obstruction",
    "category": "gastrointestinal",
    "definition": "Blockage of the small or large intestine preventing the passage of stool and gas; may be mechanical (adhesions, tumors) or functional.",
    "etymology": "From Latin 'obstruere' (to block up).",
    "example": "CT imaging revealed a bowel obstruction caused by adhesions from previous abdominal surgery.",
    "module": 17
  },
  {
    "id": "gi-055-malabsorption",
    "term": "Malabsorption",
    "category": "gastrointestinal",
    "definition": "Impaired absorption of nutrients, vitamins, or minerals in the small intestine; associated with weight loss, diarrhea, and nutritional deficiencies.",
    "etymology": "From Latin 'malus' (bad) + 'absorbere' (to swallow up).",
    "example": "Celiac disease causes malabsorption of iron and calcium, leading to anemia and osteoporosis.",
    "module": 17
  },
  {
    "id": "gi-056-endoscopy",
    "term": "Endoscopy",
    "category": "gastrointestinal",
    "definition": "Minimally invasive procedure using a flexible tube with a camera to visualize the upper GI tract (esophagus, stomach, duodenum); allows for biopsy and therapeutic intervention.",
    "etymology": "From Greek 'endon' (within) + 'skopein' (to view).",
    "example": "Upper endoscopy revealed a bleeding gastric ulcer that was treated with cauterization.",
    "module": 17
  },
  {
    "id": "gi-057-colonoscopy",
    "term": "Colonoscopy",
    "category": "gastrointestinal",
    "definition": "Minimally invasive procedure using a flexible colonoscope to visualize the entire colon and rectum; used for screening, diagnosis, and polyp removal.",
    "etymology": "From 'colon' + Greek 'skopein' (to view).",
    "example": "Colonoscopy screening detected a precancerous polyp in the sigmoid colon that was removed.",
    "module": 17
  },
  {
    "id": "gi-058-upper-gi-series",
    "term": "Upper GI Series",
    "category": "gastrointestinal",
    "definition": "Fluoroscopic imaging study using barium contrast to visualize the esophagus, stomach, and small intestine; used to diagnose ulcers, strictures, and motility disorders.",
    "etymology": "From Latin 'series' (sequence), combining upper GI anatomy imaging.",
    "example": "Upper GI series showed a gastric ulcer on the greater curvature of the stomach.",
    "module": 17
  },
  {
    "id": "gi-059-ercp",
    "term": "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
    "category": "gastrointestinal",
    "definition": "Endoscopic procedure combining endoscopy and fluoroscopy to visualize and treat the pancreatic and biliary ducts; used for stone removal and stricture management.",
    "etymology": "From 'endoscopic' + 'retrograde' (backward direction) + Greek 'chole' (bile) + 'angeion' (vessel) + 'pankreas'.",
    "example": "ERCP successfully removed a common bile duct stone causing obstructive jaundice.",
    "module": 17
  },
  {
    "id": "gi-060-h-pylori-test",
    "term": "H. pylori Test",
    "category": "gastrointestinal",
    "definition": "Diagnostic test to detect Helicobacter pylori infection; methods include breath test, stool antigen test, serology, and urease breath test.",
    "etymology": "From 'Helicobacter pylori', the causative bacterium of gastritis and ulcers.",
    "example": "The patient's positive H. pylori breath test confirmed bacterial infection requiring triple antibiotic therapy.",
    "module": 17
  },
  {
    "id": "gi-061-liver-function-tests",
    "term": "Liver Function Tests (LFTs)",
    "category": "gastrointestinal",
    "definition": "Blood tests measuring hepatic enzymes and proteins including ALT, AST, ALP, bilirubin, and albumin; assess liver health and function.",
    "etymology": "From Latin 'liver' + 'functio' (performance).",
    "example": "Elevated AST and ALT on LFTs indicated hepatocellular injury from acute viral hepatitis.",
    "module": 17
  },
  {
    "id": "gi-062-amylase-lipase-tests",
    "term": "Amylase and Lipase Tests",
    "category": "gastrointestinal",
    "definition": "Serum enzyme tests measuring amylase and lipase levels to diagnose pancreatic inflammation; elevated levels indicate pancreatitis.",
    "etymology": "From 'amylase' (starch-digesting enzyme) and 'lipase' (fat-digesting enzyme).",
    "example": "The patient presented with severe epigastric pain and markedly elevated amylase and lipase, confirming acute pancreatitis.",
    "module": 17
  },
  {
    "id": "gi-063-stool-culture",
    "term": "Stool Culture",
    "category": "gastrointestinal",
    "definition": "Laboratory test culturing stool specimen to identify bacterial pathogens causing gastroenteritis; determines antibiotic sensitivity.",
    "etymology": "From Latin 'stool' + 'cultura' (cultivation).",
    "example": "Stool culture isolated Salmonella, guiding appropriate antibiotic treatment for infectious gastroenteritis.",
    "module": 17
  },
  {
    "id": "gi-064-cholecystectomy",
    "term": "Cholecystectomy",
    "category": "gastrointestinal",
    "definition": "Surgical removal of the gallbladder; may be open or laparoscopic; primary treatment for symptomatic cholelithiasis and cholecystitis.",
    "etymology": "From Greek 'chole' (bile) + 'kystis' (bladder) + 'ektomia' (excision).",
    "example": "Laparoscopic cholecystectomy was performed for acute cholecystitis caused by gallstones.",
    "module": 17
  },
  {
    "id": "gi-065-whipple-procedure",
    "term": "Whipple Procedure (Pancreaticoduodenectomy)",
    "category": "gastrointestinal",
    "definition": "Major surgical procedure removing the head of the pancreas, duodenum, gallbladder, and part of the common bile duct; used for pancreatic cancer and complex pancreatitis.",
    "etymology": "Named after surgeon Allen Whipple; from Greek 'pankreas' + 'duodenum' + 'ektomia' (excision).",
    "example": "The patient underwent a Whipple procedure for resectable pancreatic cancer with potential for curative outcome.",
    "module": 17
  },
  {
    "id": "renal-cortex-01",
    "term": "Renal Cortex",
    "category": "anatomy",
    "definition": "The outer layer of the kidney containing the glomeruli and portions of the renal tubules; site of initial filtration",
    "etymology": "Latin 'renalis' (kidney) + 'cortex' (bark/outer layer)",
    "example": "The renal cortex appears granular due to the presence of numerous glomeruli",
    "module": 18
  },
  {
    "id": "renal-medulla-02",
    "term": "Renal Medulla",
    "category": "anatomy",
    "definition": "The inner region of the kidney composed of renal pyramids containing the loops of Henle and collecting ducts",
    "etymology": "Latin 'renalis' (kidney) + 'medulla' (middle/marrow)",
    "example": "Urine concentration occurs in the renal medulla through osmotic gradient mechanisms",
    "module": 18
  },
  {
    "id": "nephron-03",
    "term": "Nephron",
    "category": "anatomy",
    "definition": "The functional filtration unit of the kidney consisting of the renal corpuscle and renal tubule; approximately 1 million per kidney",
    "etymology": "Greek 'nephros' (kidney) + 'on' (unit)",
    "example": "Each nephron independently filters blood and produces urine through selective reabsorption",
    "module": 18
  },
  {
    "id": "glomerulus-04",
    "term": "Glomerulus",
    "category": "anatomy",
    "definition": "A network of specialized capillaries in the renal corpuscle where blood ultrafiltration begins",
    "etymology": "Latin 'glomus' (ball of yarn)",
    "example": "Damage to the glomerulus in glomerulonephritis reduces the kidney's filtration capacity",
    "module": 18
  },
  {
    "id": "bowmans-capsule-05",
    "term": "Bowman's Capsule",
    "category": "anatomy",
    "definition": "Double-walled cup-like structure surrounding the glomerulus that collects filtrate produced during ultrafiltration",
    "etymology": "Named after Sir William Bowman; Greek 'kapsula' (small box)",
    "example": "Filtrate from the glomerulus enters Bowman's capsule to begin its journey through the renal tubule",
    "module": 18
  },
  {
    "id": "loop-of-henle-06",
    "term": "Loop of Henle",
    "category": "anatomy",
    "definition": "U-shaped segment of the renal tubule that creates an osmotic gradient essential for water reabsorption and urine concentration",
    "etymology": "Named after Friedrich Gustav Jacob Henle",
    "example": "The Loop of Henle's descending limb is permeable to water while the ascending limb actively transports sodium",
    "module": 18
  },
  {
    "id": "collecting-duct-07",
    "term": "Collecting Duct",
    "category": "anatomy",
    "definition": "Final segment of the renal tubule where ADH acts to regulate water reabsorption and determine final urine concentration",
    "etymology": "Latin 'collectare' (to gather) + 'ductus' (to lead)",
    "example": "ADH increases collecting duct permeability, concentrating urine when body fluids are hypertonic",
    "module": 18
  },
  {
    "id": "renal-pelvis-08",
    "term": "Renal Pelvis",
    "category": "anatomy",
    "definition": "Funnel-shaped structure within the kidney that collects urine from the collecting ducts and directs it into the ureter",
    "etymology": "Latin 'renalis' (kidney) + 'pelvis' (basin)",
    "example": "Obstruction of the renal pelvis can cause hydronephrosis and decreased urine flow",
    "module": 18
  },
  {
    "id": "ureter-09",
    "term": "Ureter",
    "category": "anatomy",
    "definition": "Muscular tube (approximately 10 inches) that transports urine from the renal pelvis to the urinary bladder via peristalsis",
    "etymology": "Greek 'oureter' (urine carrier)",
    "example": "Ureteral stones can cause severe flank pain as they obstruct urine passage",
    "module": 18
  },
  {
    "id": "urinary-bladder-10",
    "term": "Urinary Bladder",
    "category": "anatomy",
    "definition": "Muscular, hollow organ that stores urine until voluntary micturition; capacity approximately 400-600 mL",
    "etymology": "Old English 'bladder' (inflated object)",
    "example": "The bladder's detrusor muscle contracts during voiding to expel urine",
    "module": 18
  },
  {
    "id": "detrusor-muscle-11",
    "term": "Detrusor Muscle",
    "category": "anatomy",
    "definition": "Smooth muscle layer of the bladder wall that contracts during micturition to expel urine",
    "etymology": "Latin 'detrudere' (to push down/out)",
    "example": "Detrusor hyperreflexia causes involuntary bladder contractions and urge incontinence",
    "module": 18
  },
  {
    "id": "trigone-12",
    "term": "Trigone",
    "category": "anatomy",
    "definition": "Triangular area of the bladder floor bounded by the two ureteral orifices and the urethral orifice; sensitive to irritation",
    "etymology": "Greek 'trigonon' (triangle)",
    "example": "Trigonitis causes bladder irritation symptoms including frequency and urgency",
    "module": 18
  },
  {
    "id": "urethra-13",
    "term": "Urethra",
    "category": "anatomy",
    "definition": "Tube conveying urine from the bladder to the external meatus; approximately 4 cm in females and 20 cm in males",
    "etymology": "Greek 'ourein' (to urinate) + 'a' (channel)",
    "example": "Urethritis causes dysuria and urinary frequency in both males and females",
    "module": 18
  },
  {
    "id": "adrenal-glands-14",
    "term": "Adrenal Glands",
    "category": "anatomy",
    "definition": "Small endocrine glands located on the superior poles of each kidney; produce hormones including aldosterone and epinephrine",
    "etymology": "Latin 'ad' (toward) + 'renalis' (kidney)",
    "example": "The adrenal cortex secretes aldosterone to regulate sodium and water balance",
    "module": 18
  },
  {
    "id": "gfr-glomerular-filtration-rate-15",
    "term": "Glomerular Filtration Rate (GFR)",
    "category": "physiology",
    "definition": "Volume of filtrate produced by the kidneys per minute; normal range 90-120 mL/min/1.73m²; key indicator of kidney function",
    "etymology": "Latin 'glomerulus' (ball of yarn) + 'filtrare' (to strain)",
    "example": "GFR declines below 60 mL/min/1.73m² in chronic kidney disease Stage 3",
    "module": 18
  },
  {
    "id": "ultrafiltration-16",
    "term": "Ultrafiltration",
    "category": "physiology",
    "definition": "Process of forcing water and small solutes through glomerular membrane into Bowman's capsule; driven by hydrostatic pressure",
    "etymology": "Latin 'ultra' (beyond) + 'filtrare' (to strain)",
    "example": "Ultrafiltration at the glomerulus produces approximately 180 liters of filtrate daily in healthy adults",
    "module": 18
  },
  {
    "id": "tubular-reabsorption-17",
    "term": "Tubular Reabsorption",
    "category": "physiology",
    "definition": "Process by which filtered substances are selectively returned from the renal tubules to the peritubular capillaries and bloodstream",
    "etymology": "Latin 'tubulus' (small tube) + 'reabsorbere' (to absorb again)",
    "example": "Glucose and amino acids are completely reabsorbed in the proximal convoluted tubule",
    "module": 18
  },
  {
    "id": "tubular-secretion-18",
    "term": "Tubular Secretion",
    "category": "physiology",
    "definition": "Active transport process where additional waste substances and excess ions are secreted from peritubular capillaries into the tubular lumen",
    "etymology": "Latin 'tubulus' (small tube) + 'secretio' (separation)",
    "example": "Tubular secretion removes potassium and hydrogen ions to maintain acid-base balance",
    "module": 18
  },
  {
    "id": "renin-angiotensin-aldosterone-19",
    "term": "Renin-Angiotensin-Aldosterone System (RAAS)",
    "category": "physiology",
    "definition": "Hormonal cascade that regulates blood pressure and electrolyte balance; triggered by low blood pressure or sodium depletion",
    "etymology": "Latin 'renalis' (kidney) + 'angiotensin' (vessel tension) + 'aldosterone' (hormone)",
    "example": "RAAS activation increases sodium reabsorption and vasoconstriction when blood pressure drops",
    "module": 18
  },
  {
    "id": "antidiuretic-hormone-adh-20",
    "term": "Antidiuretic Hormone (ADH)",
    "category": "physiology",
    "definition": "Hormone produced by the hypothalamus and released by the pituitary; increases collecting duct permeability to water for osmotic regulation",
    "etymology": "Greek 'anti' (against) + 'diuresis' (increased urination) + 'hormone' (exciter)",
    "example": "ADH secretion increases when plasma osmolality rises, promoting water reabsorption",
    "module": 18
  },
  {
    "id": "osmolality-21",
    "term": "Osmolality",
    "category": "physiology",
    "definition": "Measure of solute concentration per unit of solvent; normal plasma osmolality 280-295 mOsm/kg; critical for fluid balance",
    "etymology": "Greek 'osmos' (push/thrust) + 'lalia' (state of)",
    "example": "Increased plasma osmolality triggers ADH release and thirst to restore normal hydration",
    "module": 18
  },
  {
    "id": "electrolyte-balance-22",
    "term": "Electrolyte Balance",
    "category": "physiology",
    "definition": "Maintenance of proper concentrations of sodium, potassium, calcium, and other ions; essential for cardiac, muscular, and neural function",
    "etymology": "Greek 'elektron' (amber) + 'lytikos' (loosening) + Latin 'bilancia' (balance)",
    "example": "Kidney failure disrupts electrolyte balance, requiring careful dietary management of sodium and potassium",
    "module": 18
  },
  {
    "id": "hematuria-23",
    "term": "Hematuria",
    "category": "urine",
    "definition": "Presence of red blood cells in urine; may be gross (visible) or microscopic (detected by urinalysis)",
    "etymology": "Greek 'haima' (blood) + 'ouron' (urine)",
    "example": "Hematuria can indicate urinary tract infection, kidney stones, or renal cell carcinoma",
    "module": 18
  },
  {
    "id": "pyuria-24",
    "term": "Pyuria",
    "category": "urine",
    "definition": "Presence of white blood cells and/or bacteria in urine; indicates infection or inflammation of the urinary tract",
    "etymology": "Greek 'pyon' (pus) + 'ouron' (urine)",
    "example": "Pyuria with positive urine culture confirms bacterial urinary tract infection",
    "module": 18
  },
  {
    "id": "proteinuria-25",
    "term": "Proteinuria",
    "category": "urine",
    "definition": "Abnormal presence of protein in urine; normal values <150 mg/24h; may indicate glomerular or tubular disease",
    "etymology": "Greek 'proteios' (primary/first) + 'ouron' (urine)",
    "example": "Persistent proteinuria exceeding 3.5 g/24h is characteristic of nephrotic syndrome",
    "module": 18
  },
  {
    "id": "glucosuria-26",
    "term": "Glucosuria",
    "category": "urology",
    "definition": "Presence of glucose in the urine, typically indicating blood glucose levels exceed the renal threshold (>180 mg/dL) or renal tubular dysfunction.",
    "etymology": "gluco- (glucose) + -uria (urine condition)",
    "example": "A diabetic patient with poor glycemic control presented with glucosuria on urinalysis.",
    "module": 18
  },
  {
    "id": "oliguria-27",
    "term": "Oliguria",
    "category": "urology",
    "definition": "Abnormally low urine output, typically defined as less than 400 mL per 24 hours in adults.",
    "etymology": "oligo- (few/scanty) + -uria (urine)",
    "example": "The patient developed oliguria following acute sepsis and hypotension.",
    "module": 18
  },
  {
    "id": "anuria-28",
    "term": "Anuria",
    "category": "urology",
    "definition": "Complete absence or virtual absence of urine output, typically less than 100 mL per 24 hours.",
    "etymology": "an- (without) + -uria (urine)",
    "example": "Anuria developed in the patient after bilateral ureteral obstruction from kidney stones.",
    "module": 18
  },
  {
    "id": "polyuria-29",
    "term": "Polyuria",
    "category": "urology",
    "definition": "Excessive production and elimination of urine, typically greater than 2.5-3 L per 24 hours.",
    "etymology": "poly- (many/excessive) + -uria (urine)",
    "example": "The diabetic patient experienced polyuria and polydipsia as early signs of hyperglycemia.",
    "module": 18
  },
  {
    "id": "dysuria-30",
    "term": "Dysuria",
    "category": "urology",
    "definition": "Painful or difficult urination, often accompanied by burning or stinging sensations.",
    "etymology": "dys- (difficult/painful) + -uria (urination)",
    "example": "The patient reported dysuria and urinary frequency consistent with acute cystitis.",
    "module": 18
  },
  {
    "id": "nocturia-31",
    "term": "Nocturia",
    "category": "urology",
    "definition": "Excessive urination during nighttime hours, causing the patient to awaken multiple times to void.",
    "etymology": "noct- (night) + -uria (urine)",
    "example": "Elderly male with nocturia occurring 3-4 times per night related to benign prostatic hyperplasia.",
    "module": 18
  },
  {
    "id": "urinary-retention-32",
    "term": "Urinary Retention",
    "category": "urology",
    "definition": "Inability to completely empty the bladder, resulting in accumulation of urine within the bladder.",
    "etymology": "urinary (relating to urine) + retention (holding back)",
    "example": "Postoperative urinary retention required catheterization after spinal anesthesia.",
    "module": 18
  },
  {
    "id": "urinary-incontinence-33",
    "term": "Urinary Incontinence",
    "category": "urology",
    "definition": "Involuntary loss of urine control, occurring as stress, urge, overflow, or functional incontinence.",
    "etymology": "urinary (relating to urine) + incontinence (inability to control)",
    "example": "Stress urinary incontinence in a postmenopausal woman improved with pelvic floor physical therapy.",
    "module": 18
  },
  {
    "id": "uti-cystitis-34",
    "term": "Urinary Tract Infection (UTI) / Cystitis",
    "category": "urology",
    "definition": "Bacterial infection of the lower urinary tract, including bladder (cystitis) and urethra (urethritis).",
    "etymology": "cyst- (bladder) + -itis (inflammation); uretr- (urethra) + -itis",
    "example": "Acute cystitis with dysuria and urinary frequency was treated with trimethoprim-sulfamethoxazole.",
    "module": 18
  },
  {
    "id": "pyelonephritis-35",
    "term": "Pyelonephritis",
    "category": "urology",
    "definition": "Acute bacterial infection of the kidney parenchyma and renal pelvis, often ascending from lower urinary tract.",
    "etymology": "pyel- (renal pelvis) + nephr- (kidney) + -itis (inflammation)",
    "example": "Acute pyelonephritis presented with fever, flank pain, and pyuria; treated with IV fluoroquinolone.",
    "module": 18
  },
  {
    "id": "glomerulonephritis-36",
    "term": "Glomerulonephritis",
    "category": "urology",
    "definition": "Inflammation of the glomeruli, causing hematuria, proteinuria, and potential renal dysfunction.",
    "etymology": "glomerul- (glomerulus) + nephr- (kidney) + -itis (inflammation)",
    "example": "Post-infectious glomerulonephritis developed 2 weeks after group A Streptococcus infection.",
    "module": 18
  },
  {
    "id": "nephrotic-syndrome-37",
    "term": "Nephrotic Syndrome",
    "category": "urology",
    "definition": "Clinical syndrome characterized by proteinuria (>3.5 g/day), hypoalbuminemia, edema, and hyperlipidemia.",
    "etymology": "nephr- (kidney) + -otic (relating to)",
    "example": "Minimal change disease presented with nephrotic syndrome and responded to corticosteroid therapy.",
    "module": 18
  },
  {
    "id": "nephrolithiasis-kidney-stones-38",
    "term": "Nephrolithiasis / Kidney Stones",
    "category": "urology",
    "definition": "Formation of mineral deposits (calculi) within the kidney, ureter, or bladder; may cause obstruction and pain.",
    "etymology": "nephr- (kidney) + -lith- (stone) + -iasis (condition)",
    "example": "Calcium oxalate nephrolithiasis caused acute flank pain and hematuria requiring extracorporeal shock wave lithotripsy.",
    "module": 18
  },
  {
    "id": "acute-kidney-injury-39",
    "term": "Acute Kidney Injury (AKI)",
    "category": "urology",
    "definition": "Sudden loss of renal function over hours to days, defined by KDIGO criteria with elevated creatinine and reduced GFR.",
    "etymology": "acute (sudden) + kidney + injury (damage)",
    "example": "Acute kidney injury developed post-surgery with serum creatinine rise from 1.0 to 3.5 mg/dL.",
    "module": 18
  },
  {
    "id": "chronic-kidney-disease-40",
    "term": "Chronic Kidney Disease (CKD)",
    "category": "urology",
    "definition": "Progressive loss of renal function over months to years, classified into 5 stages based on GFR decline.",
    "etymology": "chronic (long-term) + kidney + disease (condition)",
    "example": "Stage 3 chronic kidney disease in a diabetic patient with GFR of 35 mL/min/1.73m².",
    "module": 18
  },
  {
    "id": "end-stage-renal-disease-41",
    "term": "End-Stage Renal Disease (ESRD)",
    "category": "urology",
    "definition": "Advanced chronic kidney disease (CKD Stage 5) requiring renal replacement therapy via dialysis or transplantation.",
    "etymology": "end-stage (final) + renal (kidney) + disease (condition)",
    "example": "ESRD patient initiated hemodialysis when GFR fell below 15 mL/min/1.73m².",
    "module": 18
  },
  {
    "id": "renal-cell-carcinoma-42",
    "term": "Renal Cell Carcinoma (RCC)",
    "category": "urology",
    "definition": "Malignant tumor of the renal epithelium, typically arising from the proximal convoluted tubule.",
    "etymology": "renal (kidney) + cell + carcinoma (cancer)",
    "example": "Clear cell renal cell carcinoma with hematuria and flank pain treated with nephrectomy and targeted therapy.",
    "module": 18
  },
  {
    "id": "bladder-cancer-43",
    "term": "Bladder Cancer",
    "category": "urology",
    "definition": "Malignant tumor of the bladder, usually transitional cell carcinoma, presenting with hematuria.",
    "etymology": "bladder (organ) + cancer (malignancy)",
    "example": "Transitional cell bladder cancer with gross hematuria was diagnosed via cystoscopy and biopsy.",
    "module": 18
  },
  {
    "id": "bph-benign-prostatic-hyperplasia-44",
    "term": "Benign Prostatic Hyperplasia (BPH)",
    "category": "urology",
    "definition": "Non-cancerous enlargement of the prostate gland causing lower urinary tract symptoms and bladder outlet obstruction.",
    "etymology": "benign (non-cancerous) + prostatic (prostate) + hyperplasia (excessive growth)",
    "example": "BPH with nocturia and urinary hesitancy improved with alpha-blocker therapy.",
    "module": 18
  },
  {
    "id": "hydronephrosis-45",
    "term": "Hydronephrosis",
    "category": "urology",
    "definition": "Dilation of the renal pelvis and calices due to obstruction of urine flow, causing increased intraluminal pressure.",
    "etymology": "hydro- (water/fluid) + nephr- (kidney) + -osis (condition)",
    "example": "Unilateral hydronephrosis secondary to ureteral obstruction from a kidney stone.",
    "module": 18
  },
  {
    "id": "polycystic-kidney-disease-46",
    "term": "Polycystic Kidney Disease (PKD)",
    "category": "urology",
    "definition": "Genetic disorder characterized by multiple bilateral renal cysts leading to progressive renal dysfunction and hypertension.",
    "etymology": "poly- (many) + cystic (cysts) + kidney + disease",
    "example": "Autosomal dominant polycystic kidney disease with bilateral renal enlargement and hematuria.",
    "module": 18
  },
  {
    "id": "urinalysis-47",
    "term": "Urinalysis",
    "category": "urology",
    "definition": "Laboratory examination of urine including physical properties, chemical composition, and microscopic elements.",
    "etymology": "urin- (urine) + -analysis (examination/breakdown)",
    "example": "Urinalysis revealed leukocyte esterase and nitrites consistent with urinary tract infection.",
    "module": 18
  },
  {
    "id": "urine-culture-48",
    "term": "Urine Culture",
    "category": "urology",
    "definition": "Laboratory test to identify and quantify bacterial growth from urine specimen; gold standard for UTI diagnosis.",
    "etymology": "urine (liquid waste) + culture (growth medium)",
    "example": "Urine culture isolated E. coli with colony count >100,000 CFU/mL confirming urinary tract infection.",
    "module": 18
  },
  {
    "id": "bun-blood-urea-nitrogen-49",
    "term": "BUN (Blood Urea Nitrogen)",
    "category": "urology",
    "definition": "Serum test measuring nitrogen from urea metabolism; indicates renal function and hydration status.",
    "etymology": "blood + urea (waste product) + nitrogen",
    "example": "Elevated BUN of 28 mg/dL with normal creatinine suggested prerenal azotemia from dehydration.",
    "module": 18
  },
  {
    "id": "creatinine-egfr-50",
    "term": "Creatinine and eGFR (Estimated Glomerular Filtration Rate)",
    "category": "urology",
    "definition": "Serum creatinine reflects muscle metabolism; eGFR estimates kidney filtration function using creatinine and demographic factors.",
    "etymology": "creatinine (metabolite) + e- (estimated) + GFR (glomerular filtration rate)",
    "example": "Serum creatinine 2.5 mg/dL with eGFR 28 mL/min/1.73m² indicated Stage 3b chronic kidney disease.",
    "module": 18
  },
  {
    "id": "testes-anatomy",
    "term": "Testes",
    "category": "reproductive",
    "definition": "Pair of male gonads that produce sperm and testosterone; located in the scrotum",
    "etymology": "Latin: testis (witness), named because they testify to virility",
    "example": "The patient's testes were examined for size and consistency during physical examination.",
    "module": 19
  },
  {
    "id": "epididymis-anatomy",
    "term": "Epididymis",
    "category": "reproductive",
    "definition": "Coiled tubular structure attached to the posterior surface of each testis where sperm mature and are stored",
    "etymology": "Greek: epi (upon) + didymos (twin/testis)",
    "example": "Epididymitis caused severe pain and swelling in the right epididymis.",
    "module": 19
  },
  {
    "id": "vas-deferens-anatomy",
    "term": "Vas Deferens",
    "category": "reproductive",
    "definition": "Muscular duct that transports sperm from the epididymis to the ejaculatory duct; also called ductus deferens",
    "etymology": "Latin: vas (vessel) + deferens (carrying away)",
    "example": "The vas deferens was ligated during the vasectomy procedure.",
    "module": 19
  },
  {
    "id": "seminal-vesicles-anatomy",
    "term": "Seminal Vesicles",
    "category": "reproductive",
    "definition": "Paired accessory glands that secrete fructose-rich fluid comprising 60% of seminal fluid",
    "etymology": "Latin: seminalis (relating to seed) + vesicula (small vessel)",
    "example": "Seminal vesicle fluid provides energy for sperm motility.",
    "module": 19
  },
  {
    "id": "prostate-anatomy",
    "term": "Prostate Gland",
    "category": "reproductive",
    "definition": "Walnut-sized gland surrounding the urethra below the bladder that secretes alkaline fluid for seminal fluid",
    "etymology": "Greek: pro (before) + statis (standing)",
    "example": "The prostate-specific antigen (PSA) test screens for prostate cancer.",
    "module": 19
  },
  {
    "id": "bulbourethral-gland-anatomy",
    "term": "Bulbourethral Glands",
    "category": "reproductive",
    "definition": "Paired pea-sized glands that secrete alkaline mucus into the urethra; also called Cowper's glands",
    "etymology": "Latin: bulbus (bulb) + urethra (urine passage) + gland",
    "example": "Bulbourethral glands secrete pre-ejaculatory fluid that neutralizes urethral acidity.",
    "module": 19
  },
  {
    "id": "urethra-male-anatomy",
    "term": "Urethra (Male)",
    "category": "reproductive",
    "definition": "Tube extending from the bladder through the prostate and penis, serving dual function of urine and semen passage",
    "etymology": "Greek: oureter (ureter), from ouron (urine)",
    "example": "Male urethritis caused dysuria and urethral discharge.",
    "module": 19
  },
  {
    "id": "penis-anatomy",
    "term": "Penis",
    "category": "reproductive",
    "definition": "Male external genital organ consisting of three columns of erectile tissue (corpus cavernosum and corpus spongiosum) and the glans",
    "etymology": "Latin: penis (tail)",
    "example": "Penis examination revealed normal development of external genitalia.",
    "module": 19
  },
  {
    "id": "scrotum-anatomy",
    "term": "Scrotum",
    "category": "reproductive",
    "definition": "External pouch of skin and muscle containing the testes, epididymides, and lower portions of the spermatic cords",
    "etymology": "Latin: scrotum (pouch)",
    "example": "Scrotal ultrasound confirmed testicular torsion with loss of blood flow.",
    "module": 19
  },
  {
    "id": "spermatogenesis-process",
    "term": "Spermatogenesis",
    "category": "reproductive",
    "definition": "Process of sperm formation in the seminiferous tubules of the testes; takes approximately 74 days",
    "etymology": "Greek: sperma (seed) + genesis (creation)",
    "example": "Spermatogenesis is regulated by follicle-stimulating hormone (FSH) and testosterone.",
    "module": 19
  },
  {
    "id": "testosterone-hormone",
    "term": "Testosterone",
    "category": "reproductive",
    "definition": "Primary male sex hormone (androgen) produced by Leydig cells in the testes; essential for sperm production and male sexual characteristics",
    "etymology": "Greek: testis (testis) + sterol (solid alcohol) + one (ketone)",
    "example": "Testosterone levels were measured to assess hypogonadism in the patient.",
    "module": 19
  },
  {
    "id": "fsh-hormone",
    "term": "Follicle-Stimulating Hormone (FSH)",
    "category": "reproductive",
    "definition": "Gonadotropin produced by anterior pituitary that stimulates spermatogenesis in males and follicle development in females",
    "etymology": "Latin: folliculus (small bag) + stimulare (to incite)",
    "example": "FSH levels were elevated, indicating primary testicular failure.",
    "module": 19
  },
  {
    "id": "lh-hormone",
    "term": "Luteinizing Hormone (LH)",
    "category": "reproductive",
    "definition": "Gonadotropin produced by anterior pituitary that stimulates testosterone production in males and ovulation in females",
    "etymology": "Latin: luteus (yellow) + -in (substance) + hormone",
    "example": "LH surge triggers ovulation in the female menstrual cycle.",
    "module": 19
  },
  {
    "id": "erectile-dysfunction-condition",
    "term": "Erectile Dysfunction",
    "category": "reproductive",
    "definition": "Persistent inability to achieve or maintain penile erection sufficient for sexual intercourse; also called impotence",
    "etymology": "Latin: erigere (to raise up) + dys (bad) + function",
    "example": "The patient was prescribed sildenafil for erectile dysfunction.",
    "module": 19
  },
  {
    "id": "testicular-torsion-condition",
    "term": "Testicular Torsion",
    "category": "reproductive",
    "definition": "Twisting of the spermatic cord that cuts off blood supply to the testis; surgical emergency requiring detorsion or orchiectomy",
    "etymology": "Latin: testis (testis) + torsio (twisting)",
    "example": "Testicular torsion presented with acute scrotal pain and required emergency surgery.",
    "module": 19
  },
  {
    "id": "orchitis-condition",
    "term": "Orchitis",
    "category": "reproductive",
    "definition": "Inflammation of one or both testes, often caused by viral infection (mumps) or bacterial infection (STIs)",
    "etymology": "Greek: orchis (testis) + -itis (inflammation)",
    "example": "Mumps orchitis caused bilateral testicular swelling and pain.",
    "module": 19
  },
  {
    "id": "epididymitis-condition",
    "term": "Epididymitis",
    "category": "reproductive",
    "definition": "Inflammation of the epididymis, commonly caused by chlamydia or gonorrhea; presents with scrotal pain and urethral discharge",
    "etymology": "Greek: epididymis (upon the testis) + -itis (inflammation)",
    "example": "Epididymitis was treated with doxycycline after chlamydia testing.",
    "module": 19
  },
  {
    "id": "benign-prostatic-hyperplasia-condition",
    "term": "Benign Prostatic Hyperplasia (BPH)",
    "category": "reproductive",
    "definition": "Non-cancerous enlargement of the prostate gland causing urinary obstruction, frequency, and nocturia; common in aging men",
    "etymology": "Latin: benignus (kind) + Greek: prostatis (prostate) + hyper (excessive) + plasia (formation)",
    "example": "The patient with BPH required TURP due to severe urinary retention.",
    "module": 19
  },
  {
    "id": "prostate-cancer-condition",
    "term": "Prostate Cancer",
    "category": "reproductive",
    "definition": "Malignant tumor of the prostate gland; most common cancer in men; diagnosed via PSA screening and digital rectal exam",
    "etymology": "Greek: prostatis (prostate) + karkinos (crab/cancer)",
    "example": "Prostate cancer with Gleason score 8 required radical prostatectomy.",
    "module": 19
  },
  {
    "id": "testicular-cancer-condition",
    "term": "Testicular Cancer",
    "category": "reproductive",
    "definition": "Malignant tumor of the testis; most common solid tumor in young males; types include seminoma and non-seminomatous germ cell tumors",
    "etymology": "Latin: testis (testis) + karkinos (cancer)",
    "example": "Testicular cancer was confirmed on histology after radical inguinal orchiectomy.",
    "module": 19
  },
  {
    "id": "cryptorchidism-condition",
    "term": "Cryptorchidism",
    "category": "reproductive",
    "definition": "Failure of one or both testes to descend into the scrotum; increases risk of testicular cancer and infertility if untreated",
    "etymology": "Greek: kryptos (hidden) + orchis (testis)",
    "example": "Cryptorchidism was treated with orchiopexy to bring the testis into the scrotum.",
    "module": 19
  },
  {
    "id": "varicocele-condition",
    "term": "Varicocele",
    "category": "reproductive",
    "definition": "Enlarged varicose veins in the pampiniform plexus of the spermatic cord; causes scrotal swelling and may impair fertility",
    "etymology": "Latin: varix (enlarged vein) + koele (hernia)",
    "example": "Varicocele was detected on ultrasound and treated with microsurgical ligation.",
    "module": 19
  },
  {
    "id": "vasectomy-procedure",
    "term": "Vasectomy",
    "category": "reproductive",
    "definition": "Surgical procedure to ligate or resect the vas deferens for male sterilization; highly effective permanent contraception",
    "etymology": "Latin: vas (vessel) + eksome (to cut out)",
    "example": "Post-vasectomy semen analysis confirmed azoospermia.",
    "module": 19
  },
  {
    "id": "orchiectomy-procedure",
    "term": "Orchiectomy",
    "category": "reproductive",
    "definition": "Surgical removal of one or both testes; performed for testicular cancer, trauma, or hormone therapy in prostate cancer",
    "etymology": "Greek: orchis (testis) + ektome (excision)",
    "example": "Bilateral orchiectomy was performed as hormone therapy for metastatic prostate cancer.",
    "module": 19
  },
  {
    "id": "prostatectomy-procedure",
    "term": "Prostatectomy",
    "category": "reproductive",
    "definition": "Surgical removal of part (partial) or all (radical) of the prostate gland; performed for cancer or severe BPH",
    "etymology": "Greek: prostatis (prostate) + ektome (excision)",
    "example": "Radical retropubic prostatectomy was performed for localized prostate cancer.",
    "module": 19
  },
  {
    "id": "turp-procedure",
    "term": "Transurethral Resection of Prostate (TURP)",
    "category": "reproductive",
    "definition": "Endoscopic surgical procedure to remove excess prostate tissue obstructing the urethra; gold standard for BPH treatment",
    "etymology": "Latin: trans (across) + urethra + resectio (cutting back)",
    "example": "TURP resolved urinary retention and improved flow rates in the patient with BPH.",
    "module": 19
  },
  {
    "id": "ovaries-anatomy",
    "term": "Ovaries",
    "category": "reproductive",
    "definition": "Pair of female gonads located on either side of the uterus that produce eggs (ova) and secrete estrogen and progesterone.",
    "etymology": "Latin 'ovum' (egg) + '-ary' (relating to)",
    "example": "Polycystic ovary syndrome (PCOS) affects the ovaries' ability to produce normal eggs.",
    "module": 19
  },
  {
    "id": "fallopian-tubes-anatomy",
    "term": "Fallopian Tubes",
    "category": "reproductive",
    "definition": "Pair of ducts extending from the uterus to the ovaries that transport the ovum from the ovary toward the uterus and are the typical site of fertilization.",
    "etymology": "Named after anatomist Gabriele Falloppio",
    "example": "Blockage of the fallopian tubes is a common cause of infertility in women.",
    "module": 19
  },
  {
    "id": "uterus-anatomy",
    "term": "Uterus",
    "category": "reproductive",
    "definition": "Hollow, muscular organ in the female pelvis where a fertilized egg implants and develops during pregnancy; also called the womb.",
    "etymology": "Latin 'uterus' (womb)",
    "example": "Uterine fibroids are benign tumors that grow within the uterus.",
    "module": 19
  },
  {
    "id": "uterine-fundus-anatomy",
    "term": "Uterine Fundus",
    "category": "reproductive",
    "definition": "The upper, rounded portion of the uterus superior to the attachment of the fallopian tubes.",
    "etymology": "Latin 'fundus' (bottom, base)",
    "example": "The fundus is the widest part of the uterus and expands during pregnancy.",
    "module": 19
  },
  {
    "id": "uterine-body-anatomy",
    "term": "Uterine Body",
    "category": "reproductive",
    "definition": "The main muscular portion of the uterus located between the fundus and cervix.",
    "etymology": "Latin 'corpus' (body)",
    "example": "Endometrial cancer originates in the uterine body lining.",
    "module": 19
  },
  {
    "id": "cervix-anatomy",
    "term": "Cervix",
    "category": "reproductive",
    "definition": "Lower, narrow portion of the uterus that extends into the vagina and contains the cervical canal through which sperm enter and menstrual fluid exits.",
    "etymology": "Latin 'cervix' (neck)",
    "example": "Cervical cancer can be detected early through Pap smear screening.",
    "module": 19
  },
  {
    "id": "vagina-anatomy",
    "term": "Vagina",
    "category": "reproductive",
    "definition": "Muscular canal extending from the cervix to the external genitalia; receives the penis during intercourse and serves as the birth canal.",
    "etymology": "Latin 'vagina' (sheath)",
    "example": "Bacterial vaginitis causes inflammation and discharge in the vagina.",
    "module": 19
  },
  {
    "id": "vulva-anatomy",
    "term": "Vulva",
    "category": "reproductive",
    "definition": "External female genitalia including the mons pubis, labia majora, labia minora, clitoris, and vaginal opening.",
    "etymology": "Latin 'vulva' (wrapper, covering)",
    "example": "Vulvar cancer is rare but can occur in the external genital tissue.",
    "module": 19
  },
  {
    "id": "bartholin-glands-anatomy",
    "term": "Bartholin's Glands",
    "category": "reproductive",
    "definition": "Pair of pea-sized glands located on either side of the vaginal opening that secrete lubricating mucus during sexual arousal.",
    "etymology": "Named after anatomist Casper Bartholin",
    "example": "Bartholin's cyst forms when a Bartholin's gland becomes blocked.",
    "module": 19
  },
  {
    "id": "clitoris-anatomy",
    "term": "Clitoris",
    "category": "reproductive",
    "definition": "Small, sensitive erectile tissue located at the junction of the labia minora; homologous to the male penis and contains numerous nerve endings.",
    "etymology": "Greek 'klitoris' (to shut in)",
    "example": "The clitoris plays a major role in female sexual pleasure and orgasm.",
    "module": 19
  },
  {
    "id": "mammary-glands-anatomy",
    "term": "Mammary Glands",
    "category": "reproductive",
    "definition": "Specialized skin glands in the breast tissue that produce milk for nursing after pregnancy; consist of lobes, ducts, and alveoli.",
    "etymology": "Latin 'mamma' (breast)",
    "example": "Mammary gland dysfunction can result in insufficient milk production.",
    "module": 19
  },
  {
    "id": "estrogen-hormone",
    "term": "Estrogen",
    "category": "reproductive",
    "definition": "Primary female sex hormone produced mainly by the ovaries; promotes development of female secondary sexual characteristics and regulates the menstrual cycle.",
    "etymology": "Greek 'oestros' (frenzy, desire) + '-gen' (producer)",
    "example": "Estrogen replacement therapy may be prescribed during menopause.",
    "module": 19
  },
  {
    "id": "progesterone-hormone",
    "term": "Progesterone",
    "category": "reproductive",
    "definition": "Female sex hormone produced primarily by the corpus luteum after ovulation; maintains the uterine lining for pregnancy and inhibits further ovulation.",
    "etymology": "Latin 'pro' (before, for) + 'gestare' (to bear, carry)",
    "example": "Progesterone levels rise during the luteal phase of the menstrual cycle.",
    "module": 19
  },
  {
    "id": "prolactin-hormone",
    "term": "Prolactin",
    "category": "reproductive",
    "definition": "Pituitary hormone that stimulates and maintains milk production in the breast tissue after childbirth.",
    "etymology": "Latin 'pro' (before, forth) + 'lac' (milk)",
    "example": "Elevated prolactin levels can inhibit ovulation and cause galactorrhea.",
    "module": 19
  },
  {
    "id": "oxytocin-hormone",
    "term": "Oxytocin",
    "category": "reproductive",
    "definition": "Pituitary hormone that triggers uterine contractions during labor and milk letdown reflex during breastfeeding; promotes bonding and pleasure.",
    "etymology": "Greek 'oxys' (quick, sharp) + 'tokos' (birth)",
    "example": "Oxytocin is administered to induce or augment labor contractions.",
    "module": 19
  },
  {
    "id": "hcg-hormone",
    "term": "Human Chorionic Gonadotropin (hCG)",
    "category": "reproductive",
    "definition": "Hormone produced by the placenta after implantation that maintains the corpus luteum and progesterone production during early pregnancy; detected in pregnancy tests.",
    "etymology": "Greek 'chorion' (membrane) + 'gonadotropic' (affecting gonads)",
    "example": "hCG levels double approximately every two to three days in early pregnancy.",
    "module": 19
  },
  {
    "id": "pelvic-inflammatory-disease-condition",
    "term": "Pelvic Inflammatory Disease (PID)",
    "category": "reproductive",
    "definition": "Infection of the upper female reproductive organs (uterus, fallopian tubes, ovaries) usually caused by sexually transmitted bacteria; can lead to infertility if untreated.",
    "etymology": "Latin 'pelvis' (basin) + 'inflammare' (to set on fire)",
    "example": "PID often follows untreated chlamydia or gonorrhea infections.",
    "module": 19
  },
  {
    "id": "endometriosis-condition",
    "term": "Endometriosis",
    "category": "reproductive",
    "definition": "Condition in which tissue similar to the uterine lining grows outside the uterus, typically in the pelvic cavity; causes pain and may lead to infertility.",
    "etymology": "Greek 'endo-' (inside) + 'metra' (uterus) + '-osis' (condition)",
    "example": "Endometriosis is often managed with hormonal therapy or surgery.",
    "module": 19
  },
  {
    "id": "polycystic-ovary-syndrome-condition",
    "term": "Polycystic Ovary Syndrome (PCOS)",
    "category": "reproductive",
    "definition": "Endocrine disorder characterized by multiple cysts on the ovaries, hormonal imbalance, irregular periods, and insulin resistance; common cause of female infertility.",
    "etymology": "Greek 'poly-' (many) + 'kystis' (cyst) + 'ovarium' (ovary)",
    "example": "PCOS patients often present with hirsutism, acne, and weight gain.",
    "module": 19
  },
  {
    "id": "ovarian-cysts-condition",
    "term": "Ovarian Cysts",
    "category": "reproductive",
    "definition": "Fluid-filled sacs that develop on or within the ovaries; may be functional (follicular or corpus luteum) or pathological; most are benign and asymptomatic.",
    "etymology": "Greek 'kystis' (bladder, sac)",
    "example": "Most functional ovarian cysts resolve on their own within a few menstrual cycles.",
    "module": 19
  },
  {
    "id": "uterine-fibroids-condition",
    "term": "Uterine Fibroids (Leiomyomas)",
    "category": "reproductive",
    "definition": "Benign smooth muscle tumors of the uterus that vary in size and location; common in women of reproductive age and may cause heavy bleeding or infertility.",
    "etymology": "Latin 'fibra' (fiber) + Greek 'leiomys' (smooth muscle) + '-oma' (tumor)",
    "example": "Large fibroids can be treated surgically through myomectomy or hysterectomy.",
    "module": 19
  },
  {
    "id": "cervical-cancer-condition",
    "term": "Cervical Cancer",
    "category": "reproductive",
    "definition": "Malignant tumor of the cervix, usually caused by persistent infection with human papillomavirus (HPV); highly preventable with vaccination and screening.",
    "etymology": "Latin 'cervix' (neck) + Greek 'karkinos' (crab, cancer)",
    "example": "Pap smears and HPV testing are effective screening tools for cervical cancer prevention.",
    "module": 19
  },
  {
    "id": "ovarian-cancer-condition",
    "term": "Ovarian Cancer",
    "category": "reproductive",
    "definition": "Malignant tumor arising from ovarian tissue; often detected at advanced stages due to vague symptoms; risk factors include age, family history, and BRCA mutations.",
    "etymology": "Latin 'ovarium' (ovary) + Greek 'karkinos' (cancer)",
    "example": "Ovarian cancer treatment typically involves surgery combined with chemotherapy.",
    "module": 19
  },
  {
    "id": "endometrial-cancer-condition",
    "term": "Endometrial Cancer (Uterine Cancer)",
    "category": "reproductive",
    "definition": "Malignant tumor of the uterine lining; most common gynecologic cancer; often presents with abnormal vaginal bleeding.",
    "etymology": "Greek 'endo-' (inside) + 'metra' (uterus) + Greek 'karkinos' (cancer)",
    "example": "Postmenopausal bleeding is a warning sign that should prompt evaluation for endometrial cancer.",
    "module": 19
  },
  {
    "id": "chlamydia-infection-condition",
    "term": "Chlamydia trachomatis Infection",
    "category": "reproductive",
    "definition": "Sexually transmitted bacterial infection that may be asymptomatic in women or cause cervicitis, urethritis, and PID if untreated; easily treated with antibiotics.",
    "etymology": "Greek 'chlamys' (cloak, covering)",
    "example": "Chlamydia screening is recommended for sexually active women under 25 years old.",
    "module": 19
  },
  {
    "id": "vaginitis-condition",
    "term": "Vaginitis",
    "category": "reproductive",
    "definition": "Inflammation of the vagina caused by infection (bacterial, fungal, or protozoan) or irritation; presents with itching, discharge, and odor.",
    "etymology": "Latin 'vagina' (sheath) + '-itis' (inflammation)",
    "example": "Bacterial vaginosis is the most common cause of vaginitis in women of reproductive age.",
    "module": 19
  },
  {
    "id": "gonorrhea-infection-condition",
    "term": "Gonorrhea",
    "category": "reproductive",
    "definition": "A sexually transmitted infection caused by Neisseria gonorrhoeae bacteria, affecting the urethra, cervix, rectum, and pharynx; characterized by purulent discharge and dysuria.",
    "etymology": "From Greek 'gonos' (seed) + 'rhoia' (flow), referring to the mistaken belief that it was a discharge of semen.",
    "example": "A patient presents with urethral discharge and dysuria; culture confirms gonorrhea, and treatment with ceftriaxone is initiated.",
    "module": 19
  },
  {
    "id": "herpes-simplex-virus-condition",
    "term": "Herpes Simplex Virus (HSV)",
    "category": "reproductive",
    "definition": "A recurrent sexually transmitted viral infection caused by HSV-1 or HSV-2, presenting with painful vesicles and ulcers on genital tissues; characterized by latency and periodic reactivation.",
    "etymology": "From Greek 'herpes' (to creep), describing the characteristic spreading nature of the herpetic lesions.",
    "example": "A female patient reports recurrent painful vesicles on the vulva with fever and dysuria during HSV-2 reactivation; antiviral therapy with acyclovir is prescribed.",
    "module": 19
  },
  {
    "id": "syphilis-infection-condition",
    "term": "Syphilis",
    "category": "reproductive",
    "definition": "A systemic sexually transmitted infection caused by Treponema pallidum spirochete bacterium, progressing through primary, secondary, and tertiary stages with characteristic lesions, rash, and systemic manifestations.",
    "etymology": "From neo-Latin 'syphilis,' possibly derived from the name of a character in a 16th-century poem about a disease.",
    "example": "A patient with a painless chancre on the genitalia tests positive for RPR and TP antibodies; primary syphilis is diagnosed and treated with penicillin G.",
    "module": 19
  },
  {
    "id": "pap-smear-procedure",
    "term": "Pap Smear (Papanicolaou Test)",
    "category": "reproductive",
    "definition": "A cytological screening procedure in which cells are collected from the cervix and examined microscopically to detect precancerous or cancerous changes, HPV infection, and other abnormalities.",
    "etymology": "Named after Dr. George Papanicolaou, who developed the technique in the 1920s.",
    "example": "A routine Pap smear reveals atypical squamous cells of undetermined significance (ASCUS); HPV testing is recommended to guide further management.",
    "module": 19
  },
  {
    "id": "colposcopy-procedure",
    "term": "Colposcopy",
    "category": "reproductive",
    "definition": "A diagnostic procedure using a magnified examination of the cervix, vagina, and vulva with a colposcope to identify abnormal tissue and guide biopsy in cases of abnormal Pap smears or visible lesions.",
    "etymology": "From Greek 'kolpos' (vagina) + 'skopein' (to examine), literally 'to examine the vagina.'",
    "example": "After an abnormal Pap smear, colposcopy with acetic acid application reveals a white epithelial lesion; a cervical biopsy confirms cervical intraepithelial neoplasia (CIN).",
    "module": 19
  },
  {
    "id": "rad-001-radiograph",
    "term": "Radiograph",
    "category": "radiology",
    "definition": "A two-dimensional image produced by passing X-rays through body tissues onto photographic film or digital detector; the traditional method of medical imaging.",
    "etymology": "From Latin 'radius' (ray) and Greek 'graphia' (writing/recording)",
    "example": "A chest radiograph revealed pneumonia in the right lower lobe.",
    "module": 20
  },
  {
    "id": "rad-002-computed-tomography",
    "term": "Computed Tomography (CT)",
    "category": "radiology",
    "definition": "Advanced imaging modality using X-rays and computer processing to create detailed cross-sectional images of body structures; provides superior soft tissue contrast compared to conventional radiographs.",
    "etymology": "From Latin 'computus' (calculation) and Greek 'tomia' (cutting/section)",
    "example": "A CT scan of the abdomen identified a 2 cm pancreatic mass.",
    "module": 20
  },
  {
    "id": "rad-003-mri",
    "term": "Magnetic Resonance Imaging (MRI)",
    "category": "radiology",
    "definition": "Non-ionizing imaging modality using strong magnetic fields and radio waves to produce detailed images; excellent for visualizing soft tissues and does not use radiation.",
    "etymology": "From Latin 'magnetis' and Greek 'resonantia' (resounding)",
    "example": "Brain MRI with contrast showed a small meningioma near the pituitary gland.",
    "module": 20
  },
  {
    "id": "rad-004-pet-scan",
    "term": "Positron Emission Tomography (PET) Scan",
    "category": "radiology",
    "definition": "Nuclear medicine imaging technique that uses radioactive tracers to detect metabolic and functional changes in tissues; commonly used in oncology and neurology.",
    "etymology": "From Greek 'positron' (antiparticle) and 'emissio' (emission)",
    "example": "PET scan revealed hypermetabolic activity consistent with metastatic lung cancer.",
    "module": 20
  },
  {
    "id": "rad-005-nuclear-medicine",
    "term": "Nuclear Medicine Imaging",
    "category": "radiology",
    "definition": "Diagnostic imaging technique using radioactive substances to visualize organ function and structure; includes bone scans, thyroid scans, and cardiac imaging.",
    "etymology": "From Latin 'nuclearis' (of the nucleus) and Greek 'medicina' (healing art)",
    "example": "A thyroid nuclear medicine scan confirmed hyperthyroidism with increased uptake.",
    "module": 20
  },
  {
    "id": "rad-006-ultrasound",
    "term": "Ultrasound (Sonography)",
    "category": "radiology",
    "definition": "Imaging modality using high-frequency sound waves to visualize internal structures; non-invasive, non-ionizing, and real-time capable; particularly useful in obstetrics and abdominal imaging.",
    "etymology": "From Latin 'ultra' (beyond) and 'sonus' (sound)",
    "example": "Obstetric ultrasound at 20 weeks confirmed fetal viability with normal anatomy.",
    "module": 20
  },
  {
    "id": "rad-007-fluoroscopy",
    "term": "Fluoroscopy",
    "category": "radiology",
    "definition": "Real-time radiographic imaging technique using continuous or pulsed X-rays; commonly used for guidance during interventional procedures and studying motion.",
    "etymology": "From Latin 'fluere' (to flow) and Greek 'scopium' (to view)",
    "example": "Fluoroscopic guidance was used during the barium swallow study to assess esophageal motility.",
    "module": 20
  },
  {
    "id": "rad-008-dexa-scan",
    "term": "DEXA Scan (Dual-Energy X-ray Absorptiometry)",
    "category": "radiology",
    "definition": "Specialized X-ray imaging technique that measures bone mineral density to assess for osteoporosis; uses minimal radiation exposure.",
    "etymology": "From Latin 'dualis' (dual) and 'energia' (energy) and Greek 'absorptio' (absorption)",
    "example": "DEXA scan revealed osteoporosis with T-score of -2.8 in the lumbar spine.",
    "module": 20
  },
  {
    "id": "rad-009-mammography",
    "term": "Mammography",
    "category": "radiology",
    "definition": "Specialized radiographic imaging of the breast using low-dose X-rays; primary screening and diagnostic tool for breast cancer detection.",
    "etymology": "From Latin 'mamma' (breast) and Greek 'graphia' (writing/recording)",
    "example": "Screening mammography identified a suspicious microcalcification in the left breast requiring biopsy.",
    "module": 20
  },
  {
    "id": "rad-010-echocardiogram",
    "term": "Echocardiogram",
    "category": "radiology",
    "definition": "Ultrasound imaging of the heart providing real-time visualization of cardiac structures and function; can assess valve function, wall motion, and ejection fraction.",
    "etymology": "From Greek 'echo' (sound reflection) and 'kardia' (heart)",
    "example": "Transthoracic echocardiogram showed moderately reduced ejection fraction of 35% with global hypokinesis.",
    "module": 20
  },
  {
    "id": "rad-011-radiolucent",
    "term": "Radiolucent",
    "category": "radiology",
    "definition": "Appearing dark or black on radiographic images; describes tissues that allow X-rays to pass through with minimal absorption, such as air and fat.",
    "etymology": "From Latin 'radius' (ray) and 'lucens' (shining/transparent)",
    "example": "The pneumothorax appeared as a radiolucent area on the chest X-ray with collapsed lung visible.",
    "module": 20
  },
  {
    "id": "rad-012-radiopaque",
    "term": "Radiopaque",
    "category": "radiology",
    "definition": "Appearing bright or white on radiographic images; describes tissues that absorb X-rays, such as bone, metal, and contrast agents.",
    "etymology": "From Latin 'radius' (ray) and 'opacus' (dark/opaque)",
    "example": "The metallic prosthesis appeared radiopaque on the post-operative X-ray.",
    "module": 20
  },
  {
    "id": "rad-013-enhancement",
    "term": "Enhancement (Contrast Enhancement)",
    "category": "radiology",
    "definition": "Increased visualization and brightness of a structure or lesion after administration of contrast agent; indicates increased blood flow or tissue perfusion.",
    "etymology": "From Latin 'en-' (in) and 'hautus' (high)",
    "example": "The tumor showed heterogeneous enhancement on post-contrast CT imaging.",
    "module": 20
  },
  {
    "id": "rad-014-attenuation",
    "term": "Attenuation",
    "category": "radiology",
    "definition": "Weakening of X-ray or ultrasound beam as it passes through tissue; measured in Hounsfield units (HU) on CT; determines tissue density appearance.",
    "etymology": "From Latin 'attenuare' (to weaken or thin)",
    "example": "The lesion showed similar attenuation to normal liver parenchyma on non-contrast CT.",
    "module": 20
  },
  {
    "id": "rad-015-artifact",
    "term": "Artifact",
    "category": "radiology",
    "definition": "Unwanted distortion or false appearance in medical images caused by equipment malfunction, patient motion, or physical principles; can mimic pathology.",
    "etymology": "From Latin 'ars' (art) and 'factus' (made)",
    "example": "Motion artifact degraded the quality of the MRI study requiring repeat imaging.",
    "module": 20
  },
  {
    "id": "rad-016-resolution",
    "term": "Resolution",
    "category": "radiology",
    "definition": "Ability of an imaging system to distinguish two closely spaced objects as separate entities; higher resolution provides greater detail and diagnostic accuracy.",
    "etymology": "From Latin 'resolvere' (to break apart/separate)",
    "example": "High-resolution CT provided excellent resolution for detecting small pulmonary nodules.",
    "module": 20
  },
  {
    "id": "rad-017-slice",
    "term": "Slice (Cut)",
    "category": "radiology",
    "definition": "A single thin cross-sectional image in CT, MRI, or other volumetric imaging; multiple slices are combined to create a three-dimensional representation.",
    "etymology": "From Old Norse 'slita' (to cut or break)",
    "example": "Thin-slice CT imaging with 1mm slice thickness enhanced detection of small lesions.",
    "module": 20
  },
  {
    "id": "rad-018-axial-plane",
    "term": "Axial Plane",
    "category": "radiology",
    "definition": "Horizontal cross-sectional plane dividing the body into superior and inferior portions; parallel to the ground when patient is standing; standard orientation for CT and MRI.",
    "etymology": "From Latin 'axis' (axle) and Greek 'planum' (plane)",
    "example": "Axial imaging through the abdomen showed the mass arising from the pancreatic head.",
    "module": 20
  },
  {
    "id": "rad-019-coronal-plane",
    "term": "Coronal Plane",
    "category": "radiology",
    "definition": "Vertical plane dividing the body into anterior and posterior portions; parallel to the coronal suture of the skull; common viewing plane for brain and facial imaging.",
    "etymology": "From Latin 'corona' (crown)",
    "example": "Coronal MRI images clearly demonstrated the extent of the pituitary adenoma.",
    "module": 20
  },
  {
    "id": "rad-020-sagittal-plane",
    "term": "Sagittal Plane",
    "category": "radiology",
    "definition": "Vertical plane dividing the body into right and left portions; midsagittal plane divides body into equal halves; essential for spine and midline structure evaluation.",
    "etymology": "From Latin 'sagittalis' (relating to arrows)",
    "example": "Sagittal T2-weighted MRI revealed a herniated disc compressing the spinal cord.",
    "module": 20
  },
  {
    "id": "rad-021-window-level",
    "term": "Window/Level",
    "category": "radiology",
    "definition": "CT display adjustment parameters where 'window' controls the range of displayed densities and 'level' is the central density value; allows optimization for different tissues.",
    "etymology": "From Old English 'wind-eye' (opening) and Latin 'libella' (level)",
    "example": "Adjusting the window/level to bone settings enhanced visualization of the subtle fracture.",
    "module": 20
  },
  {
    "id": "rad-022-iodinated-contrast",
    "term": "Iodinated Contrast",
    "category": "radiology",
    "definition": "Contrast agent containing iodine used in CT and radiographic imaging; iodine is radiopaque and enhances visualization of vascular and organ structures.",
    "etymology": "From Greek 'iodes' (violet-like) and Latin 'contrastare' (to stand against)",
    "example": "Iodinated contrast IV bolus enhanced the aorta and demonstrated no aortic dissection.",
    "module": 20
  },
  {
    "id": "rad-023-gadolinium",
    "term": "Gadolinium",
    "category": "radiology",
    "definition": "Paramagnetic contrast agent used in MRI; gadolinium enhances T1-weighted signal in tissues with increased vascular permeability; chelated form reduces toxicity.",
    "etymology": "From 'gadolinia' (rare earth element named after scientist Johan Gadolin)",
    "example": "Gadolinium-enhanced MRI revealed blood-brain barrier disruption around the brain lesion.",
    "module": 20
  },
  {
    "id": "rad-024-barium",
    "term": "Barium",
    "category": "radiology",
    "definition": "Barium sulfate is a radiopaque contrast medium used for gastrointestinal imaging; non-absorbable and considered safer than iodinated agents for GI studies.",
    "etymology": "From Greek 'barys' (heavy) and Latin 'sulfur' (sulfur)",
    "example": "Barium swallow study demonstrated normal esophageal motility with no evidence of stricture.",
    "module": 20
  },
  {
    "id": "rad-025-contrast-reaction",
    "term": "Contrast Adverse Reaction",
    "category": "radiology",
    "definition": "Adverse effect from contrast agent administration ranging from mild (nausea, urticaria) to severe (anaphylaxis, renal failure); more common with iodinated agents.",
    "etymology": "From Latin 'adversus' (against) and 'reactio' (reaction)",
    "example": "The patient developed an acute allergic reaction to iodinated contrast requiring epinephrine administration.",
    "module": 20
  },
  {
    "id": "rad-026-ionizing-radiation",
    "term": "Ionizing Radiation",
    "category": "radiology",
    "definition": "High-energy electromagnetic radiation or particle radiation capable of removing electrons from atoms, creating ions; used in medical imaging including X-rays, CT scans, and nuclear medicine.",
    "etymology": "From Latin 'ionem' (going) + Greek 'radiare' (to shine)",
    "example": "X-ray imaging utilizes ionizing radiation to penetrate tissue and create images on detector plates.",
    "module": 20
  },
  {
    "id": "rad-027-rad",
    "term": "Rad (Radiation Absorbed Dose)",
    "category": "radiology",
    "definition": "Unit of measurement for absorbed radiation dose equal to 100 ergs of energy per gram of tissue; older unit largely replaced by gray in modern practice.",
    "etymology": "Acronym for Radiation Absorbed Dose",
    "example": "A single chest X-ray typically delivers approximately 0.01 rad of radiation exposure.",
    "module": 20
  },
  {
    "id": "rad-028-gray",
    "term": "Gray (Gy)",
    "category": "radiology",
    "definition": "SI unit of measurement for absorbed radiation dose equal to 1 joule per kilogram; 1 gray equals 100 rad.",
    "etymology": "Named after physicist Louis Harold Gray",
    "example": "CT imaging typically exposes a patient to 10-15 millirays or 0.01-0.015 gray.",
    "module": 20
  },
  {
    "id": "rad-029-sievert",
    "term": "Sievert (Sv)",
    "category": "radiology",
    "definition": "SI unit measuring biological effect of ionizing radiation dose; accounts for type of radiation and tissue sensitivity; 1 sievert equals 100 rem.",
    "etymology": "Named after Swedish physicist Rolf Sievert",
    "example": "Occupational radiation safety limits are typically set at 50 millisieverts per year.",
    "module": 20
  },
  {
    "id": "rad-030-half-life",
    "term": "Half-Life",
    "category": "radiology",
    "definition": "Time required for a radioactive substance to decay to half its original activity; critical in nuclear medicine for scheduling imaging studies and calculating patient dose.",
    "etymology": "From English 'half' + 'life'",
    "example": "Technetium-99m has a half-life of 6 hours, making it ideal for same-day nuclear medicine studies.",
    "module": 20
  },
  {
    "id": "rad-031-isotope",
    "term": "Isotope",
    "category": "radiology",
    "definition": "Atoms of the same element with different numbers of neutrons and varying atomic mass; radioactive isotopes are used as tracers in nuclear medicine imaging.",
    "etymology": "From Greek 'iso' (equal) + 'topos' (place)",
    "example": "Iodine-131 and Iodine-123 are different isotopes used in thyroid imaging studies.",
    "module": 20
  },
  {
    "id": "rad-032-consolidation",
    "term": "Consolidation",
    "category": "radiology",
    "definition": "Replacement of alveolar air with fluid, blood, pus, or cells; appears opaque/white on imaging; common finding in pneumonia.",
    "etymology": "From Latin 'consolidare' (to make solid)",
    "example": "Chest X-ray showed right lower lobe consolidation consistent with bacterial pneumonia.",
    "module": 20
  },
  {
    "id": "rad-033-effusion",
    "term": "Effusion",
    "category": "radiology",
    "definition": "Abnormal collection of fluid in body cavities such as pleural space (lung), pericardial space (heart), or peritoneal cavity (abdomen).",
    "etymology": "From Latin 'effundere' (to pour out)",
    "example": "Chest X-ray revealed a left pleural effusion requiring thoracentesis for evaluation.",
    "module": 20
  },
  {
    "id": "rad-034-mass-lesion",
    "term": "Mass/Lesion",
    "category": "radiology",
    "definition": "Abnormal tissue or growth; masses typically measure greater than 3 cm, while lesions are smaller focal areas of abnormal tissue.",
    "etymology": "Mass from Latin 'massa'; lesion from Latin 'laesio' (injury)",
    "example": "MRI revealed a 4 cm mass in the right breast requiring biopsy evaluation.",
    "module": 20
  },
  {
    "id": "rad-035-nodule",
    "term": "Nodule",
    "category": "radiology",
    "definition": "Small, rounded opacity or growth typically measuring less than 3 cm; requires follow-up imaging to assess stability and characterization.",
    "etymology": "From Latin 'nodulus' (small knot)",
    "example": "CT chest identified a 1.2 cm nodule in the left upper lobe requiring 3-month follow-up.",
    "module": 20
  },
  {
    "id": "rad-036-infiltrate",
    "term": "Infiltrate",
    "category": "radiology",
    "definition": "Abnormal substance or cells that accumulate in tissue; commonly refers to pneumonia patterns in lung tissue appearing as opacities.",
    "etymology": "From Latin 'infiltrare' (to filter in)",
    "example": "Chest X-ray showed bilateral infiltrates concerning for atypical pneumonia.",
    "module": 20
  },
  {
    "id": "rad-037-opacity",
    "term": "Opacity",
    "category": "radiology",
    "definition": "Area of increased density appearing white or light gray on radiograph; indicates fluid, blood, pus, or solid material replacing air.",
    "etymology": "From Latin 'opacus' (dark, shaded)",
    "example": "Frontal chest X-ray demonstrates an opacity in the right middle lobe.",
    "module": 20
  },
  {
    "id": "rad-038-lucency",
    "term": "Lucency",
    "category": "radiology",
    "definition": "Area of decreased density appearing dark or black on radiograph; indicates air-filled or low-density structures.",
    "etymology": "From Latin 'lucens' (shining, clear)",
    "example": "Lucency around the tooth root suggests periapical disease on dental radiographs.",
    "module": 20
  },
  {
    "id": "rad-039-calcification",
    "term": "Calcification",
    "category": "radiology",
    "definition": "Deposition of calcium salts in tissue; appears very white/dense on imaging; can indicate pathology or normal aging.",
    "etymology": "From Latin 'calcis' (chalk, limestone)",
    "example": "Vascular calcification was noted in coronary arteries on CT angiography.",
    "module": 20
  },
  {
    "id": "rad-040-edema",
    "term": "Edema",
    "category": "radiology",
    "definition": "Abnormal fluid accumulation in tissue appearing as areas of increased density with poorly defined margins on imaging.",
    "etymology": "From Greek 'oidema' (swelling)",
    "example": "Pulmonary edema appears as bilateral perihilar opacities on chest radiograph.",
    "module": 20
  },
  {
    "id": "rad-041-stenosis",
    "term": "Stenosis",
    "category": "radiology",
    "definition": "Abnormal narrowing of a vessel, airway, or other tubular structure visualized on imaging studies.",
    "etymology": "From Greek 'stenosis' (narrowing)",
    "example": "Carotid artery stenosis of 70% was identified on doppler ultrasound.",
    "module": 20
  },
  {
    "id": "rad-042-occlusion",
    "term": "Occlusion",
    "category": "radiology",
    "definition": "Complete blockage or closure of a vessel or duct; may appear as absence of flow on vascular imaging studies.",
    "etymology": "From Latin 'occludere' (to close up)",
    "example": "Acute thrombotic occlusion of the middle cerebral artery was seen on CT angiography.",
    "module": 20
  },
  {
    "id": "rad-043-angiogram",
    "term": "Angiogram",
    "category": "radiology",
    "definition": "Radiographic visualization of blood vessels after injection of contrast medium; used diagnostically and therapeutically in interventional radiology.",
    "etymology": "From Greek 'angeion' (vessel) + 'gramma' (recording)",
    "example": "Coronary angiogram revealed significant stenosis in the left anterior descending artery.",
    "module": 20
  },
  {
    "id": "rad-044-embolization",
    "term": "Embolization",
    "category": "radiology",
    "definition": "Interventional radiology procedure involving injection of embolic material (coils, particles, glue) to block blood vessel flow; treats aneurysms, bleeding, or abnormal vasculature.",
    "etymology": "From Greek 'embolon' (stopper)",
    "example": "Coil embolization was performed to treat a ruptured cerebral aneurysm.",
    "module": 20
  },
  {
    "id": "rad-045-clinical-correlation",
    "term": "Clinical Correlation",
    "category": "radiology",
    "definition": "Radiology report recommendation to review imaging findings alongside patient's clinical presentation, symptoms, and lab results for accurate diagnosis.",
    "etymology": "From Latin 'clinicus' + 'correlatio' (mutual relation)",
    "example": "Imaging findings are nonspecific; clinical correlation recommended to determine significance.",
    "module": 20
  },
  {
    "id": "cbc-complete-blood-count",
    "term": "Complete Blood Count (CBC)",
    "category": "laboratory",
    "definition": "A blood test measuring red blood cells, white blood cells, hemoglobin, hematocrit, and platelets to assess overall blood health and detect infections, anemia, and clotting disorders.",
    "etymology": "Latin 'completus' (complete) + Greek 'haima' (blood) + Latin 'putare' (to count)",
    "example": "A CBC with differential showed WBC 12,000/μL (elevated), indicating possible bacterial infection requiring further evaluation.",
    "module": 21
  },
  {
    "id": "hemoglobin-measurement",
    "term": "Hemoglobin (Hgb)",
    "category": "laboratory",
    "definition": "Oxygen-carrying protein in red blood cells; normal range 12.0-16.0 g/dL for women, 13.5-17.5 g/dL for men. Decreased levels indicate anemia.",
    "etymology": "Greek 'haima' (blood) + Latin 'globus' (sphere)",
    "example": "Patient presenting with fatigue had hemoglobin of 9.2 g/dL, confirming moderate anemia requiring iron supplementation.",
    "module": 21
  },
  {
    "id": "hematocrit-packed-cell-volume",
    "term": "Hematocrit (Hct)",
    "category": "laboratory",
    "definition": "Percentage of red blood cells in total blood volume; normal range 36-46% for women, 41-53% for men. Used to diagnose anemia and polycythemia.",
    "etymology": "Greek 'haima' (blood) + 'krisis' (separation)",
    "example": "Hematocrit of 32% in a post-hemorrhage patient confirmed significant blood loss requiring transfusion.",
    "module": 21
  },
  {
    "id": "white-blood-cell-count",
    "term": "White Blood Cell Count (WBC)",
    "category": "laboratory",
    "definition": "Total count of leukocytes; normal range 4,500-11,000/μL. Elevated counts suggest infection or leukemia; low counts indicate immunosuppression.",
    "etymology": "Anglo-Saxon 'hwit' (white) + Greek 'kytos' (cell)",
    "example": "WBC of 15,000/μL with left shift noted in pneumonia patient, consistent with bacterial infection.",
    "module": 21
  },
  {
    "id": "platelet-count-thrombocyte",
    "term": "Platelet Count (Thrombocytes)",
    "category": "laboratory",
    "definition": "Count of blood clotting cells; normal range 150,000-400,000/μL. Low counts increase bleeding risk; high counts increase clotting risk.",
    "etymology": "Greek 'thrombos' (clot) + 'kytos' (cell)",
    "example": "Platelet count of 85,000/μL in a thrombocytopenic patient required monitoring for spontaneous bleeding risk.",
    "module": 21
  },
  {
    "id": "basic-metabolic-panel-bmp",
    "term": "Basic Metabolic Panel (BMP)",
    "category": "laboratory",
    "definition": "Group of 7-8 measurements including electrolytes (sodium, potassium, chloride, CO2), glucose, BUN, and creatinine; assesses kidney function, electrolyte balance, and glucose metabolism.",
    "etymology": "Latin 'basis' (foundation) + Greek 'metabole' (change)",
    "example": "BMP revealed potassium of 5.8 mEq/L (hyperkalemia) requiring urgent ECG monitoring and treatment.",
    "module": 21
  },
  {
    "id": "blood-urea-nitrogen-bun",
    "term": "Blood Urea Nitrogen (BUN)",
    "category": "laboratory",
    "definition": "Measures nitrogen from urea; normal range 7-20 mg/dL. Elevated levels suggest kidney dysfunction or dehydration; low levels may indicate liver disease.",
    "etymology": "Latin 'urea' (substance in urine) + Germanic 'burd' (burden)",
    "example": "BUN of 35 mg/dL with normal creatinine in dehydrated patient suggested prerenal azotemia requiring fluid resuscitation.",
    "module": 21
  },
  {
    "id": "creatinine-glomerular-filtration",
    "term": "Creatinine (Serum)",
    "category": "laboratory",
    "definition": "Waste product of muscle metabolism; normal range 0.7-1.3 mg/dL. Elevated levels indicate kidney dysfunction; used to calculate GFR.",
    "etymology": "Greek 'kreas' (meat) + Latin '-ina' (suffix for chemical compounds)",
    "example": "Serum creatinine of 2.1 mg/dL with GFR of 28 mL/min confirmed Stage 3b chronic kidney disease.",
    "module": 21
  },
  {
    "id": "lipid-panel-comprehensive",
    "term": "Lipid Panel",
    "category": "laboratory",
    "definition": "Measures total cholesterol, LDL cholesterol, HDL cholesterol, and triglycerides to assess cardiovascular risk. Optimal lipid profile includes LDL <100 mg/dL, HDL >40 mg/dL men/50 mg/dL women.",
    "etymology": "Greek 'lipos' (fat) + Latin 'panella' (small cloth)",
    "example": "Lipid panel showed total cholesterol 285 mg/dL, LDL 180 mg/dL, and triglycerides 320 mg/dL, requiring statin therapy.",
    "module": 21
  },
  {
    "id": "low-density-lipoprotein-ldl",
    "term": "Low-Density Lipoprotein (LDL)",
    "category": "laboratory",
    "definition": "Primary atherogenic lipoprotein; normal <100 mg/dL, optimal <70 mg/dL for high-risk patients. Called 'bad cholesterol' as elevated levels increase coronary artery disease risk.",
    "etymology": "Greek 'lipos' (fat) + Latin 'densus' (thick) + 'proteina' (primary)",
    "example": "LDL of 145 mg/dL in diabetic patient warranted intensive lipid-lowering therapy to reduce MI/stroke risk.",
    "module": 21
  },
  {
    "id": "high-density-lipoprotein-hdl",
    "term": "High-Density Lipoprotein (HDL)",
    "category": "laboratory",
    "definition": "Protective lipoprotein; normal >40 mg/dL for men, >50 mg/dL for women. Called 'good cholesterol' as it removes cholesterol from arteries, reducing cardiovascular disease risk.",
    "etymology": "Greek 'lipos' (fat) + Latin 'densus' (thick) + 'proteina' (primary)",
    "example": "HDL of 32 mg/dL in male patient was an independent cardiovascular risk factor requiring lifestyle and pharmacologic intervention.",
    "module": 21
  },
  {
    "id": "triglycerides-blood-lipids",
    "term": "Triglycerides",
    "category": "laboratory",
    "definition": "Most common form of dietary fat in blood; normal <150 mg/dL. Elevated levels (>200 mg/dL) increase cardiovascular risk, especially with low HDL.",
    "etymology": "Greek 'tri' (three) + Latin 'glycerin' (sweet substance) + '-ide' (chemical suffix)",
    "example": "Triglycerides of 450 mg/dL in postprandial blood sample indicated severe hypertriglyceridemia requiring fibrate therapy.",
    "module": 21
  },
  {
    "id": "total-cholesterol-measurement",
    "term": "Total Cholesterol",
    "category": "laboratory",
    "definition": "Sum of LDL, HDL, and triglycerides/5; normal <200 mg/dL. Used to assess overall cardiovascular risk alongside component lipids.",
    "etymology": "Greek 'chole' (bile) + 'stereos' (solid) + Latin 'totalis' (whole)",
    "example": "Total cholesterol of 240 mg/dL prompted lipid panel review revealing primarily elevated LDL requiring statin initiation.",
    "module": 21
  },
  {
    "id": "thyroid-stimulating-hormone-tsh",
    "term": "Thyroid-Stimulating Hormone (TSH)",
    "category": "laboratory",
    "definition": "Pituitary hormone regulating thyroid; normal range 0.4-4.0 mIU/L. Elevated TSH suggests hypothyroidism; low TSH suggests hyperthyroidism or secondary hypothyroidism.",
    "etymology": "Greek 'thyreos' (shield-shaped) + Latin 'stimulare' (to excite)",
    "example": "TSH of 8.5 mIU/L with low-normal free T4 confirmed primary hypothyroidism, requiring levothyroxine replacement.",
    "module": 21
  },
  {
    "id": "free-thyroxine-ft4-hormone",
    "term": "Free Thyroxine (Free T4)",
    "category": "laboratory",
    "definition": "Biologically active thyroid hormone; normal range 0.8-1.8 ng/dL. More accurate than total T4 as measures unbound hormone not affected by binding proteins.",
    "etymology": "Greek 'thyreos' (shield-shaped) + Latin 'libera' (free) + 'tetra' (four)",
    "example": "Free T4 of 0.5 ng/dL with elevated TSH confirmed overt hypothyroidism requiring thyroxine supplementation.",
    "module": 21
  },
  {
    "id": "triiodothyronine-t3-hormone",
    "term": "Triiodothyronine (T3)",
    "category": "laboratory",
    "definition": "A thyroid hormone containing three iodine atoms that regulates metabolic rate and energy production; exists in free (FT3) and bound forms; normal range 80-200 ng/dL",
    "etymology": "tri- (three) + iodo- (iodine) + thyronine (amino acid from thyroid)",
    "example": "A patient with hyperthyroidism may have elevated T3 levels (>200 ng/dL) causing tachycardia and weight loss.",
    "module": 21
  },
  {
    "id": "prothrombin-time-pt-coagulation",
    "term": "Prothrombin Time (PT)",
    "category": "laboratory",
    "definition": "Coagulation test measuring extrinsic pathway function via factors I, II, V, VII, and X; normal range 11-13.5 seconds; reported as INR in anticoagulation monitoring",
    "etymology": "prothrombin (factor II precursor) + time (measurement duration)",
    "example": "A patient on warfarin therapy has a PT of 28 seconds (INR 2.8), indicating therapeutic anticoagulation for atrial fibrillation.",
    "module": 21
  },
  {
    "id": "international-normalized-ratio-inr",
    "term": "International Normalized Ratio (INR)",
    "category": "laboratory",
    "definition": "Standardized measurement of PT results accounting for laboratory variation; therapeutic range 2-3 for most conditions; used to monitor warfarin therapy",
    "etymology": "international (standardized globally) + normalized (adjusted) + ratio (proportional value)",
    "example": "Target INR for a patient with mechanical heart valve is 2.5-3.5; subtherapeutic INR <2.0 requires warfarin dose increase.",
    "module": 21
  },
  {
    "id": "activated-partial-thromboplastin-time-aptt",
    "term": "Activated Partial Thromboplastin Time (aPTT)",
    "category": "laboratory",
    "definition": "Coagulation test evaluating intrinsic pathway and common pathway factors; normal range 25-35 seconds; monitors heparin therapy and detects bleeding disorders",
    "etymology": "activated (initiated) + partial (incomplete) + thromboplastin (tissue factor) + time",
    "example": "A patient receiving heparin infusion has aPTT of 62 seconds (therapeutic 45-70 seconds) for deep vein thrombosis treatment.",
    "module": 21
  },
  {
    "id": "fibrinogen-clotting-factor",
    "term": "Fibrinogen",
    "category": "laboratory",
    "definition": "Coagulation factor I synthesized by liver; converted to fibrin by thrombin; normal range 200-400 mg/dL; elevated in inflammation, low in DIC and hyperfibrinolysis",
    "etymology": "fibrin (clot protein) + -ogen (generates)",
    "example": "A patient with severe sepsis has fibrinogen of 150 mg/dL and prolonged PT/aPTT, consistent with disseminated intravascular coagulation (DIC).",
    "module": 21
  },
  {
    "id": "cardiac-troponin-i-myocardial-marker",
    "term": "Cardiac Troponin I (cTnI)",
    "category": "laboratory",
    "definition": "Myocardial-specific protein released during myocardial infarction; highly sensitive and specific; normal <0.04 ng/mL; detectable 3-4 hours post-MI, peaks 48 hours",
    "etymology": "cardiac (heart) + troponin (contractile protein) + I (isoform)",
    "example": "Patient presenting with chest pain has cTnI of 1.2 ng/mL at 6 hours post-symptom onset, confirming acute myocardial infarction.",
    "module": 21
  },
  {
    "id": "cardiac-troponin-t-myocardial-necrosis",
    "term": "Cardiac Troponin T (cTnT)",
    "category": "laboratory",
    "definition": "Myocardial structural protein isoform released in acute MI; normal <0.01 ng/mL; rises 3-4 hours post-MI; may remain elevated 14 days; alternative to cTnI",
    "etymology": "cardiac (heart) + troponin (thin filament protein) + T (isoform)",
    "example": "High-sensitivity cTnT of 0.05 ng/mL at presentation suggests myocardial injury; serial measurement at 3 hours improves diagnostic accuracy.",
    "module": 21
  },
  {
    "id": "b-type-natriuretic-peptide-bnp",
    "term": "B-Type Natriuretic Peptide (BNP)",
    "category": "laboratory",
    "definition": "Neurohormone released by ventricular myocytes in response to stretch; marker of heart failure; normal <100 pg/mL; elevated indicates cardiac dysfunction or volume overload",
    "etymology": "B-type (brain/atrial) + natriuretic (sodium-excretion-promoting) + peptide (amino acid chain)",
    "example": "Patient with dyspnea has BNP of 450 pg/mL, supporting diagnosis of decompensated heart failure requiring diuretics.",
    "module": 21
  },
  {
    "id": "pro-b-type-natriuretic-peptide-prbnp",
    "term": "Pro-B-Type Natriuretic Peptide (Pro-BNP)",
    "category": "laboratory",
    "definition": "Precursor to BNP with longer half-life (120 minutes vs 20 minutes); normal <125 pg/mL; more stable marker; used to rule out acute decompensated heart failure",
    "etymology": "pro- (precursor) + B-type natriuretic peptide",
    "example": "Pro-BNP of 850 pg/mL in patient with normal echocardiogram suggests chronic heart failure compensation rather than acute decompensation.",
    "module": 21
  },
  {
    "id": "alanine-aminotransferase-alt-liver-enzyme",
    "term": "Alanine Aminotransferase (ALT)",
    "category": "laboratory",
    "definition": "Hepatocyte enzyme more specific for liver injury; normal 7-56 U/L; released in hepatitis, cirrhosis, fatty liver disease; more sensitive than AST for liver damage",
    "etymology": "alanine (amino acid) + amino (nitrogen-containing) + transferase (enzyme transferring groups)",
    "example": "Patient with acute viral hepatitis has ALT of 1,200 U/L while AST is 800 U/L, indicating hepatocellular injury with ALT predominance.",
    "module": 21
  },
  {
    "id": "aspartate-aminotransferase-ast-liver-enzyme",
    "term": "Aspartate Aminotransferase (AST)",
    "category": "laboratory",
    "definition": "Enzyme found in liver, heart, muscle, and RBCs; normal 10-40 U/L; less specific for liver than ALT; AST/ALT ratio >2 suggests alcoholic liver disease",
    "etymology": "aspartate (amino acid) + amino + transferase",
    "example": "Chronic alcoholic presents with AST 280 U/L, ALT 120 U/L (ratio 2.3), consistent with alcoholic cirrhosis.",
    "module": 21
  },
  {
    "id": "alkaline-phosphatase-alp-liver-enzyme",
    "term": "Alkaline Phosphatase (ALP)",
    "category": "laboratory",
    "definition": "Enzyme from liver, bone, intestine, and placenta; normal 30-120 U/L; elevated in cholestasis, bone disease, and pregnancy; isoenzyme testing differentiates sources",
    "etymology": "alkaline (high pH optimum) + phosphatase (phosphate-removing enzyme)",
    "example": "Patient with biliary obstruction presents with ALP of 380 U/L and elevated bilirubin; hepatic isoenzyme >90% confirms liver source.",
    "module": 21
  },
  {
    "id": "total-bilirubin-liver-function-test",
    "term": "Total Bilirubin",
    "category": "laboratory",
    "definition": "Breakdown product of hemoglobin; normal <1.2 mg/dL; elevated in hemolysis, liver disease, or biliary obstruction; fractionated into conjugated and unconjugated",
    "etymology": "bili- (bile) + rubin (red, from color)",
    "example": "Newborn with jaundice has total bilirubin 18 mg/dL (indirect 15.8 mg/dL), indicating physiologic jaundice requiring phototherapy consideration.",
    "module": 21
  },
  {
    "id": "direct-conjugated-bilirubin-measurement",
    "term": "Direct (Conjugated) Bilirubin",
    "category": "laboratory",
    "definition": "Water-soluble bilirubin processed by liver; normal <0.3 mg/dL; elevation indicates cholestasis, hepatocellular injury, or biliary obstruction; >50% of total suggests conjugated hyperbilirubinemia",
    "etymology": "direct (readily measurable) + conjugated (attached to glucuronic acid)",
    "example": "Patient with primary biliary cirrhosis has direct bilirubin 6.2 mg/dL out of total 8.5 mg/dL, confirming cholestatic pattern.",
    "module": 21
  },
  {
    "id": "serum-albumin-protein-synthesis",
    "term": "Serum Albumin",
    "category": "laboratory",
    "definition": "Major plasma protein synthesized by liver; normal 3.5-5.5 g/dL; reflects hepatic synthetic function; decreased in liver disease, malnutrition, and protein-losing conditions",
    "etymology": "albumin (egg white, historical reference to appearance)",
    "example": "Cirrhotic patient with albumin 2.1 g/dL demonstrates hepatic synthetic dysfunction and increased risk of spontaneous bacterial peritonitis.",
    "module": 21
  },
  {
    "id": "indirect-bilirubin-unconjugated-measurement",
    "term": "Indirect (Unconjugated) Bilirubin",
    "category": "laboratory",
    "definition": "Bilirubin that has not yet been processed by the liver; calculated as total bilirubin minus direct bilirubin. Normal range: 0.1–0.8 mg/dL. Elevated levels suggest hemolysis, ineffective erythropoiesis, or impaired hepatic uptake.",
    "etymology": "Indirect: Latin 'indirectus' (not direct); bilirubin: bile + Latin 'rubin' (red); unconjugated: not joined/linked",
    "example": "A newborn with jaundice shows total bilirubin 12 mg/dL and direct bilirubin 0.5 mg/dL, indicating indirect bilirubin of 11.5 mg/dL, suggesting neonatal hemolytic disease.",
    "module": 21
  },
  {
    "id": "arterial-blood-gas-abg-pH-measurement",
    "term": "Arterial Blood Gas (ABG) – pH",
    "category": "laboratory",
    "definition": "Measurement of hydrogen ion concentration in arterial blood; normal range 7.35–7.45. Values <7.35 indicate acidemia; >7.45 indicate alkalemia. Essential for assessing acid-base status and respiratory/metabolic function.",
    "etymology": "Arterial: Latin 'arteria' (artery); blood: Old English 'blōd'; pH: 'potential hydrogen' (mathematical expression)",
    "example": "A COPD patient presents with ABG pH of 7.32, indicating respiratory acidosis requiring ventilatory support adjustment.",
    "module": 21
  },
  {
    "id": "partial-pressure-oxygen-pao2-blood-gas",
    "term": "Partial Pressure of Oxygen (PaO₂)",
    "category": "laboratory",
    "definition": "Measurement of dissolved oxygen tension in arterial blood; normal range 80–100 mmHg at sea level. Values <60 mmHg indicate hypoxemia. Critical for assessing pulmonary oxygenation and oxygen therapy adequacy.",
    "etymology": "Partial: Latin 'partialis' (individual portion); pressure: Latin 'pressura' (force); oxygen: Greek 'oxys' (sharp) + 'genos' (producing)",
    "example": "An acute respiratory distress syndrome (ARDS) patient shows PaO₂ of 55 mmHg on 60% FiO₂, indicating severe hypoxemia requiring escalated respiratory support.",
    "module": 21
  },
  {
    "id": "partial-pressure-carbon-dioxide-paco2-blood-gas",
    "term": "Partial Pressure of Carbon Dioxide (PaCO₂)",
    "category": "laboratory",
    "definition": "Measurement of dissolved carbon dioxide tension in arterial blood; normal range 35–45 mmHg. Values <35 mmHg indicate respiratory alkalosis; >45 mmHg indicate respiratory acidosis. Reflects ventilatory status.",
    "etymology": "Partial: Latin 'partialis'; pressure: Latin 'pressura'; carbon dioxide: Latin 'carbo' (coal) + di- (two) + oxide",
    "example": "A hyperventilating anxiety patient demonstrates PaCO₂ of 28 mmHg, causing respiratory alkalosis with associated paresthesias and tetany.",
    "module": 21
  },
  {
    "id": "bicarbonate-hco3-buffer-system",
    "term": "Bicarbonate (HCO₃⁻) – Arterial Blood Gas Component",
    "category": "laboratory",
    "definition": "Measurement of serum bicarbonate ion reflecting metabolic acid-base status; normal range 22–26 mEq/L. Values <22 indicate metabolic acidosis; >26 indicate metabolic alkalosis. Primary metabolic buffer in blood.",
    "etymology": "Bicarbonate: bi- (two) + carbonate: Latin 'carbo' (coal) + -ate (salt); hydrogen: Greek 'hydro' (water) + 'genos' (producing)",
    "example": "A diabetic ketoacidosis patient presents with HCO₃⁻ of 12 mEq/L, confirming metabolic acidosis requiring insulin and fluid resuscitation.",
    "module": 21
  },
  {
    "id": "base-excess-be-blood-gas-analysis",
    "term": "Base Excess (BE)",
    "category": "laboratory",
    "definition": "Measure of the amount of buffer base in blood; normal range −2 to +2 mEq/L. Negative BE indicates metabolic acidosis; positive BE indicates metabolic alkalosis. Calculated from pH, PaCO₂, and hemoglobin.",
    "etymology": "Base: Latin 'basis' (foundation); excess: Latin 'excedere' (to go beyond)",
    "example": "A septic shock patient shows BE of −8 mEq/L, confirming severe metabolic acidosis requiring aggressive fluid resuscitation and vasopressor support.",
    "module": 21
  },
  {
    "id": "urinalysis-specific-gravity-concentration",
    "term": "Urinalysis – Specific Gravity",
    "category": "laboratory",
    "definition": "Measure of urine concentration relative to water; normal range 1.005–1.030. Values <1.005 suggest polyuria or diabetes insipidus; >1.030 suggest dehydration or glycosuria. Reflects kidney concentrating ability.",
    "etymology": "Specific: Latin 'specificus' (of a particular kind); gravity: Latin 'gravitas' (weight, heaviness)",
    "example": "A dehydrated marathon runner produces urine with specific gravity of 1.035, indicating acute volume depletion requiring fluid replacement.",
    "module": 21
  },
  {
    "id": "urinalysis-protein-proteinuria-detection",
    "term": "Urinalysis – Protein",
    "category": "laboratory",
    "definition": "Detection of protein in urine; normal is negative or trace (<150 mg/24h). Presence indicates glomerular dysfunction, infection, or overflow proteinuria. Graded as trace, 1+, 2+, 3+, or 4+ based on dipstick intensity.",
    "etymology": "Protein: Greek 'proteios' (primary, first); -uria: Greek 'ouron' (urine)",
    "example": "A diabetic patient shows 3+ proteinuria on dipstick (≈300 mg/dL), confirmed by 24-hour collection of 2.8 g, indicating diabetic nephropathy.",
    "module": 21
  },
  {
    "id": "urinalysis-glucose-glucosuria-kidney-threshold",
    "term": "Urinalysis – Glucose",
    "category": "laboratory",
    "definition": "Detection of glucose in urine; normal is negative. Present when serum glucose exceeds renal threshold (~180 mg/dL) or in proximal tubule dysfunction. Indicates hyperglycemia or renal tubular pathology.",
    "etymology": "Glucose: Greek 'glykys' (sweet); -uria: Greek 'ouron' (urine)",
    "example": "An undiagnosed diabetic presents with 4+ glucosuria and serum glucose of 385 mg/dL, prompting type 2 diabetes diagnosis and insulin initiation.",
    "module": 21
  },
  {
    "id": "urinalysis-ketones-ketonuria-metabolic",
    "term": "Urinalysis – Ketones",
    "category": "laboratory",
    "definition": "Detection of ketone bodies (acetoacetate, beta-hydroxybutyrate, acetone) in urine; normal is negative. Present in ketoacidosis, starvation, or uncontrolled diabetes. Positive result indicates metabolic stress.",
    "etymology": "Ketone: German 'Keton' (from acetone); -uria: Greek 'ouron' (urine)",
    "example": "A type 1 diabetic in diabetic ketoacidosis presents with 4+ ketonuria, serum glucose 580 mg/dL, and venous pH 7.18, requiring ICU admission.",
    "module": 21
  },
  {
    "id": "urinalysis-bilirubin-bilirubinuria-liver-disease",
    "term": "Urinalysis – Bilirubin",
    "category": "laboratory",
    "definition": "Detection of conjugated bilirubin in urine; normal is negative. Presence indicates elevated direct serum bilirubin (>1.5–2 mg/dL). Suggests hepatocellular injury, cholestasis, or hemolytic disease.",
    "etymology": "Bilirubin: bile + Latin 'rubin' (red); -uria: Greek 'ouron' (urine)",
    "example": "A patient with acute viral hepatitis shows 2+ bilirubinuria, dark tea-colored urine, and direct bilirubin of 8.2 mg/dL.",
    "module": 21
  },
  {
    "id": "urinalysis-urobilinogen-heme-metabolism",
    "term": "Urinalysis – Urobilinogen",
    "category": "laboratory",
    "definition": "Detection of urobilinogen (reduced bilirubin) in urine; normal 0.1–1.0 mg/dL (Ehrlich units). Elevated in hemolysis or liver disease; absent in complete biliary obstruction. Reflects heme catabolism.",
    "etymology": "Urobilinogen: urine + bilirubin + -gen (produced); relates to bilirubin reduction pathway",
    "example": "A patient with autoimmune hemolytic anemia demonstrates elevated urobilinogen and decreased haptoglobin, confirming intravascular hemolysis.",
    "module": 21
  },
  {
    "id": "urinalysis-blood-hematuria-red-blood-cells",
    "term": "Urinalysis – Blood",
    "category": "laboratory",
    "definition": "Detection of blood (hemoglobin, myoglobin) in urine; normal is negative. May indicate hematuria (RBCs), hemoglobinuria (free hemoglobin), or myoglobinuria (muscle breakdown). Requires microscopy confirmation.",
    "etymology": "Blood: Old English 'blōd'; hematuria: Greek 'haima' (blood) + 'ouron' (urine)",
    "example": "A 45-year-old with hematuria shows 2+ blood on dipstick; microscopy reveals 8–10 RBCs/hpf, prompting urology referral for kidney stone vs. malignancy evaluation.",
    "module": 21
  },
  {
    "id": "culture-sensitivity-antibiogram-bacterial-identification",
    "term": "Culture and Sensitivity (C&S) / Antibiogram",
    "category": "laboratory",
    "definition": "Microbiological test growing isolated pathogens and determining antibiotic susceptibility; results reported as susceptible (S), intermediate (I), or resistant (R). Guides targeted antimicrobial therapy and infection control.",
    "etymology": "Culture: Latin 'cultura' (cultivation); sensitivity: Latin 'sensibilis' (perceptive); antibiogram: anti- (against) + bio- (life) + -gram (written)",
    "example": "A urinary tract infection culture grows E. coli susceptible to nitrofurantoin, cephalexin, and trimethoprim-sulfamethoxazole, allowing appropriate oral antibiotic selection.",
    "module": 21
  },
  {
    "id": "gram-stain-bacterial-morphology-classification",
    "term": "Gram Stain",
    "category": "laboratory",
    "definition": "Differential staining technique classifying bacteria as Gram-positive (purple, thick peptidoglycan) or Gram-negative (pink, thin peptidoglycan). Provides rapid morphological and classification data (cocci, bacilli, spirilla) to guide empiric therapy.",
    "etymology": "Gram: named after Hans Christian Gram; stain: Middle Dutch 'steinen' (to color)",
    "example": "CSF sample Gram stain shows Gram-positive diplococci, consistent with meningococcal meningitis, prompting immediate ceftriaxone administration before culture confirmation.",
    "module": 21
  },
  {
    "id": "aerobic-bacteria-oxygen-dependent-growth",
    "term": "Aerobic Bacteria",
    "category": "laboratory",
    "definition": "Microorganisms that require oxygen for metabolism and growth; commonly cultured on standard media in the presence of air",
    "etymology": "From Greek 'aero' (air) + 'bios' (life)",
    "example": "Staphylococcus aureus and Streptococcus pyogenes are aerobic bacteria cultured in routine wound and throat cultures",
    "module": 21
  },
  {
    "id": "anaerobic-bacteria-oxygen-free-environment",
    "term": "Anaerobic Bacteria",
    "category": "laboratory",
    "definition": "Microorganisms that grow in the absence of oxygen and may be inhibited or killed by oxygen exposure; require specialized culture conditions",
    "etymology": "From Greek 'an' (without) + 'aero' (air) + 'bios' (life)",
    "example": "Clostridium difficile and Peptostreptococcus species are anaerobic pathogens cultured from abdominal and abscess specimens",
    "module": 21
  },
  {
    "id": "pathogen-disease-causing-microorganism",
    "term": "Pathogen",
    "category": "laboratory",
    "definition": "A microorganism or agent that causes disease in a host organism; identified through culture, staining, or molecular methods",
    "etymology": "From Greek 'pathos' (disease) + 'gen' (to produce)",
    "example": "Mycobacterium tuberculosis is the pathogen identified in sputum cultures from patients with tuberculosis",
    "module": 21
  },
  {
    "id": "minimum-inhibitory-concentration-mic-antibiotic",
    "term": "Minimum Inhibitory Concentration (MIC)",
    "category": "laboratory",
    "definition": "The lowest concentration of an antimicrobial agent required to inhibit the visible growth of a microorganism; used to determine antibiotic susceptibility",
    "etymology": "From Latin 'minimus' (smallest) + 'inhibere' (to restrain)",
    "example": "An MIC of 0.5 mcg/mL for ciprofloxacin indicates susceptibility of Pseudomonas aeruginosa",
    "module": 21
  },
  {
    "id": "bacteremia-bacteria-bloodstream-infection",
    "term": "Bacteremia",
    "category": "laboratory",
    "definition": "The presence of bacteria in the bloodstream; detected through blood culture; may indicate infection or contamination",
    "etymology": "From Latin 'bacteria' + Greek 'haima' (blood)",
    "example": "Positive blood cultures growing Streptococcus pneumoniae indicate bacteremia requiring antibiotic treatment",
    "module": 21
  },
  {
    "id": "septicemia-systemic-bacterial-infection",
    "term": "Septicemia",
    "category": "laboratory",
    "definition": "A serious condition characterized by pathogenic organisms and their toxins circulating in the bloodstream; represents systemic infection with fever, tachycardia, and hemodynamic instability",
    "etymology": "From Greek 'sepsis' (decay) + 'haima' (blood)",
    "example": "Septicemia from Escherichia coli bacteremia requires immediate blood cultures and broad-spectrum antibiotic therapy",
    "module": 21
  },
  {
    "id": "venipuncture-blood-collection-needle-puncture",
    "term": "Venipuncture",
    "category": "laboratory",
    "definition": "The puncture of a vein with a needle to obtain a blood sample; standard procedure for collecting blood for diagnostic testing",
    "etymology": "From Latin 'vena' (vein) + 'punctura' (puncture)",
    "example": "Venipuncture of the antecubital vein is performed to collect blood for CBC, BMP, and lipid panel testing",
    "module": 21
  },
  {
    "id": "hemolysis-red-blood-cell-destruction-specimen",
    "term": "Hemolysis",
    "category": "laboratory",
    "definition": "The rupture of red blood cells releasing hemoglobin; renders serum or plasma unsuitable for testing and requires specimen recollection",
    "etymology": "From Greek 'haima' (blood) + 'lysis' (dissolution)",
    "example": "Hemolysis detected in a serum sample invalidates potassium and lactate dehydrogenase results requiring recollection",
    "module": 21
  },
  {
    "id": "lipemia-high-triglyceride-serum-turbidity",
    "term": "Lipemia",
    "category": "laboratory",
    "definition": "The presence of elevated lipids in serum or plasma causing turbidity; interferes with spectrophotometric testing and may require centrifugation or specimen recollection",
    "etymology": "From Greek 'lipos' (fat) + '-emia' (blood condition)",
    "example": "Lipemic serum from a non-fasting patient causes falsely elevated results on glucose and electrolyte assays",
    "module": 21
  },
  {
    "id": "icterus-hyperbilirubinemia-specimen-discoloration",
    "term": "Icterus",
    "category": "laboratory",
    "definition": "Yellowing of serum or plasma due to elevated bilirubin; indicates hemolysis, liver disease, or biliary obstruction and interferes with optical testing",
    "etymology": "From Greek 'ikteros' (jaundice)",
    "example": "Icteric serum with bilirubin >4 mg/dL causes false elevation in alkaline phosphatase and triglyceride measurements",
    "module": 21
  },
  {
    "id": "ectomy-appendectomy",
    "term": "Appendectomy",
    "category": "surgical",
    "definition": "Surgical removal of the appendix, typically performed to treat acute appendicitis",
    "etymology": "append- (appendix) + -ectomy (removal/excision)",
    "example": "The patient underwent an emergency appendectomy after imaging confirmed acute appendicitis with perforation risk",
    "module": 22
  },
  {
    "id": "ectomy-cholecystectomy",
    "term": "Cholecystectomy",
    "category": "surgical",
    "definition": "Surgical removal of the gallbladder, performed via open or laparoscopic approach",
    "etymology": "chole- (bile) + cyst- (bladder) + -ectomy (removal/excision)",
    "example": "Laparoscopic cholecystectomy is the gold standard treatment for symptomatic cholelithiasis",
    "module": 22
  },
  {
    "id": "ectomy-colectomy",
    "term": "Colectomy",
    "category": "surgical",
    "definition": "Surgical removal of part or all of the colon, performed for cancer, inflammatory bowel disease, or obstruction",
    "etymology": "colo- (colon) + -ectomy (removal/excision)",
    "example": "The patient required a total colectomy with ileostomy creation due to familial adenomatous polyposis",
    "module": 22
  },
  {
    "id": "ectomy-thyroidectomy",
    "term": "Thyroidectomy",
    "category": "surgical",
    "definition": "Surgical removal of the thyroid gland, performed for cancer, hyperthyroidism, or goiter",
    "etymology": "thyroid- (thyroid gland) + -ectomy (removal/excision)",
    "example": "Total thyroidectomy with central neck dissection was performed for papillary thyroid carcinoma",
    "module": 22
  },
  {
    "id": "ectomy-mastectomy",
    "term": "Mastectomy",
    "category": "surgical",
    "definition": "Surgical removal of breast tissue, ranging from partial (lumpectomy) to total mastectomy with reconstruction options",
    "etymology": "mast- (breast) + -ectomy (removal/excision)",
    "example": "The patient underwent bilateral prophylactic mastectomy with immediate reconstruction due to BRCA1 mutation",
    "module": 22
  },
  {
    "id": "otomy-craniotomy",
    "term": "Craniotomy",
    "category": "surgical",
    "definition": "Surgical opening of the skull to access the brain for tumor removal, hemorrhage evacuation, or other intracranial procedures",
    "etymology": "cranio- (skull) + -tomy (incision/opening)",
    "example": "The neurosurgeon performed a right frontal craniotomy for resection of the glioblastoma",
    "module": 22
  },
  {
    "id": "otomy-laminectomy",
    "term": "Laminectomy",
    "category": "surgical",
    "definition": "Surgical removal of vertebral lamina to decompress the spinal cord or nerve roots, treating stenosis or herniated disc",
    "etymology": "lamina- (lamina of vertebra) + -ectomy (removal/excision)",
    "example": "Lumbar laminectomy with discectomy was performed to relieve sciatic pain from a herniated L4-L5 disc",
    "module": 22
  },
  {
    "id": "otomy-thoracotomy",
    "term": "Thoracotomy",
    "category": "surgical",
    "definition": "Surgical incision into the thoracic cavity to access the lungs, heart, or mediastinum",
    "etymology": "thorac- (thorax/chest) + -tomy (incision/opening)",
    "example": "Emergency thoracotomy was performed in the trauma bay for penetrating chest wound with hemorrhagic shock",
    "module": 22
  },
  {
    "id": "otomy-laparotomy",
    "term": "Laparotomy",
    "category": "surgical",
    "definition": "Surgical incision into the abdominal wall to access abdominal organs, performed for exploration, repair, or resection",
    "etymology": "laparo- (abdomen) + -tomy (incision/opening)",
    "example": "Exploratory laparotomy was necessary to evaluate acute abdominal pain and identify the source of bleeding",
    "module": 22
  },
  {
    "id": "ostomy-colostomy",
    "term": "Colostomy",
    "category": "surgical",
    "definition": "Surgical creation of an opening (stoma) between the colon and abdominal wall for bowel diversion and waste elimination",
    "etymology": "colo- (colon) + -ostomy (creation of opening/mouth)",
    "example": "The patient received a permanent left-sided colostomy following abdominoperineal resection for rectal cancer",
    "module": 22
  },
  {
    "id": "ostomy-ileostomy",
    "term": "Ileostomy",
    "category": "surgical",
    "definition": "Surgical creation of an opening (stoma) between the small intestine (ileum) and abdominal wall for bowel diversion",
    "etymology": "ileo- (ileum) + -ostomy (creation of opening/mouth)",
    "example": "Total colectomy with ileostomy creation was performed for severe ulcerative colitis refractory to medical management",
    "module": 22
  },
  {
    "id": "ostomy-urostomy",
    "term": "Urostomy",
    "category": "surgical",
    "definition": "Surgical creation of an opening (stoma) for urinary diversion when the bladder is removed or bypassed",
    "etymology": "uro- (urine) + -ostomy (creation of opening/mouth)",
    "example": "Ileal conduit urostomy was created as the urinary diversion method following radical cystoprostatectomy",
    "module": 22
  },
  {
    "id": "plasty-arthroplasty",
    "term": "Arthroplasty",
    "category": "surgical",
    "definition": "Surgical reconstruction or replacement of a joint using prosthetic components or tissue grafting",
    "etymology": "arthro- (joint) + -plasty (formation/repair)",
    "example": "The 68-year-old patient underwent total hip arthroplasty for end-stage osteoarthritis",
    "module": 22
  },
  {
    "id": "plasty-rhinoplasty",
    "term": "Rhinoplasty",
    "category": "surgical",
    "definition": "Surgical reconstruction or reshaping of the nose for cosmetic improvement or functional restoration",
    "etymology": "rhino- (nose) + -plasty (formation/repair)",
    "example": "Functional rhinoplasty was performed to correct the deviated septum and improve nasal airway obstruction",
    "module": 22
  },
  {
    "id": "plasty-angioplasty",
    "term": "Angioplasty",
    "category": "surgical",
    "definition": "Surgical reconstruction of blood vessels, typically using balloon dilation or stent placement to restore blood flow",
    "etymology": "angio- (blood vessel) + -plasty (formation/repair)",
    "example": "Percutaneous transluminal coronary angioplasty with stent placement was performed for acute myocardial infarction",
    "module": 22
  },
  {
    "id": "plasty-blepharoplasty",
    "term": "Blepharoplasty",
    "category": "surgical",
    "definition": "Surgical procedure to reshape the eyelid, removing excess skin, muscle, or fat to improve function or appearance",
    "etymology": "Greek blepharon (eyelid) + -plasty (surgical repair/shaping)",
    "example": "Blepharoplasty corrected the patient's drooping upper eyelids that were obstructing vision",
    "module": 22
  },
  {
    "id": "plasty-abdominoplasty",
    "term": "Abdominoplasty",
    "category": "surgical",
    "definition": "Surgical procedure to tighten abdominal muscles and remove excess skin from the abdomen, commonly called a tummy tuck",
    "etymology": "Latin abdomen + Greek -plasty (surgical repair/shaping)",
    "example": "The patient underwent abdominoplasty following significant weight loss to address loose abdominal skin",
    "module": 22
  },
  {
    "id": "rraphy-herniorrhaphy",
    "term": "Herniorrhaphy",
    "category": "surgical",
    "definition": "Surgical procedure to repair a hernia by closing the defect and suturing the tissues back together",
    "etymology": "Greek hernia (rupture) + -rraphy (suturing/stitching)",
    "example": "The patient required herniorrhaphy to repair an inguinal hernia with mesh reinforcement",
    "module": 22
  },
  {
    "id": "rraphy-perineorrhaphy",
    "term": "Perineorrhaphy",
    "category": "surgical",
    "definition": "Surgical procedure to repair tears or defects in the perineum, the area between the anus and genitals",
    "etymology": "Greek perineos (perineum) + -rraphy (suturing/stitching)",
    "example": "Perineorrhaphy was performed to repair a third-degree perineal laceration sustained during childbirth",
    "module": 22
  },
  {
    "id": "rraphy-tenorrhaphy",
    "term": "Tenorrhaphy",
    "category": "surgical",
    "definition": "Surgical procedure to repair a torn or lacerated tendon by suturing the ends together",
    "etymology": "Greek tenon (tendon) + -rraphy (suturing/stitching)",
    "example": "Tenorrhaphy was necessary to repair the Achilles tendon rupture sustained during the athlete's injury",
    "module": 22
  },
  {
    "id": "scopy-colonoscopy",
    "term": "Colonoscopy",
    "category": "surgical",
    "definition": "Endoscopic procedure using a flexible colonoscope to visualize the entire colon and rectum for diagnosis and treatment",
    "etymology": "Greek kolon (colon) + -scopy (visual examination)",
    "example": "The patient underwent colonoscopy for colorectal cancer screening and removal of polyps",
    "module": 22
  },
  {
    "id": "scopy-arthroscopy",
    "term": "Arthroscopy",
    "category": "surgical",
    "definition": "Minimally invasive surgical procedure using an arthroscope to visualize, diagnose, and treat joint pathology",
    "etymology": "Greek arthron (joint) + -scopy (visual examination)",
    "example": "Arthroscopy was performed to repair a torn meniscus in the patient's knee",
    "module": 22
  },
  {
    "id": "scopy-laparoscopy",
    "term": "Laparoscopy",
    "category": "surgical",
    "definition": "Minimally invasive surgical procedure using a laparoscope to visualize abdominal and pelvic organs through small incisions",
    "etymology": "Greek lapara (abdomen) + -scopy (visual examination)",
    "example": "Diagnostic laparoscopy was performed to evaluate the patient's chronic pelvic pain",
    "module": 22
  },
  {
    "id": "pexy-gastropexy",
    "term": "Gastropexy",
    "category": "surgical",
    "definition": "Surgical procedure to fix or suture the stomach to the abdominal wall to prevent displacement or twisting",
    "etymology": "Greek gaster (stomach) + -pexy (surgical fixation)",
    "example": "Gastropexy was performed to prevent recurrent gastric volvulus in the patient",
    "module": 22
  },
  {
    "id": "pexy-mastopexy",
    "term": "Mastopexy",
    "category": "surgical",
    "definition": "Surgical breast lift procedure to elevate and reshape drooping breast tissue without necessarily changing breast size",
    "etymology": "Greek mastos (breast) + -pexy (surgical fixation)",
    "example": "The patient chose mastopexy to address age-related breast ptosis",
    "module": 22
  },
  {
    "id": "pexy-nephropexy",
    "term": "Nephropexy",
    "category": "surgical",
    "definition": "Surgical procedure to fix a mobile or ptotic kidney to the abdominal wall using sutures or surgical attachment",
    "etymology": "Greek nephros (kidney) + -pexy (surgical fixation)",
    "example": "Nephropexy was indicated to treat the patient's symptomatic nephroptosis causing abdominal pain",
    "module": 22
  },
  {
    "id": "desis-arthrodesis",
    "term": "Arthrodesis",
    "category": "surgical",
    "definition": "Surgical procedure to fuse two adjacent bones at a joint, eliminating joint motion to stabilize or reduce pain",
    "etymology": "Greek arthron (joint) + -desis (surgical binding/fusion)",
    "example": "Lumbar arthrodesis was performed to stabilize the spine following degenerative disc disease",
    "module": 22
  },
  {
    "id": "desis-tenodesis",
    "term": "Tenodesis",
    "category": "surgical",
    "definition": "Surgical procedure to attach or fix a tendon to bone, often used to correct joint instability or paralysis",
    "etymology": "Greek tenon (tendon) + -desis (surgical binding/fusion)",
    "example": "Tenodesis of the wrist extensors was performed to improve hand function in the spinal cord injury patient",
    "module": 22
  },
  {
    "id": "desis-spondylodesis",
    "term": "Spondylodesis",
    "category": "surgical",
    "definition": "Surgical fusion of vertebral bodies, also known as spinal fusion, to stabilize the spine",
    "etymology": "Greek spondylos (vertebra) + -desis (surgical binding/fusion)",
    "example": "Spondylodesis was performed to stabilize the patient's cervical spine following traumatic injury",
    "module": 22
  },
  {
    "id": "anesthesia-epidural",
    "term": "Epidural Anesthesia",
    "category": "surgical",
    "definition": "Regional anesthesia administered via injection into the epidural space surrounding the spinal cord, providing pain relief to lower body areas",
    "etymology": "Greek epi (upon) + dura (tough membrane) + anesthesia (loss of sensation)",
    "example": "The patient received epidural anesthesia for cesarean section delivery, maintaining some lower body sensation",
    "module": 22
  },
  {
    "id": "anesthesia-spinal",
    "term": "Spinal Anesthesia",
    "category": "surgical",
    "definition": "Regional anesthesia administered by injection of local anesthetic into the cerebrospinal fluid within the subarachnoid space, producing rapid onset and complete anesthesia below the injection site.",
    "etymology": "spinal (relating to the spine) + anesthesia (loss of sensation)",
    "example": "Spinal anesthesia is commonly used for cesarean section, lower extremity surgery, and urological procedures.",
    "module": 22
  },
  {
    "id": "anesthesia-nerve-block",
    "term": "Nerve Block",
    "category": "surgical",
    "definition": "Regional anesthesia technique in which local anesthetic is injected directly around a specific nerve or nerve plexus to block pain transmission in a specific area of the body.",
    "etymology": "nerve (bundle of fibers) + block (obstruction of transmission)",
    "example": "Femoral nerve block, brachial plexus block, and interscalene block are used for orthopedic and extremity surgeries.",
    "module": 22
  },
  {
    "id": "anesthesia-local",
    "term": "Local Anesthesia",
    "category": "surgical",
    "definition": "Administration of anesthetic agent directly to tissue to produce loss of sensation in a limited, circumscribed area without systemic effects or loss of consciousness.",
    "etymology": "local (limited to one area) + anesthesia (loss of sensation)",
    "example": "Local anesthesia with lidocaine is used for minor surgical procedures such as suture removal, skin biopsy, and laceration repair.",
    "module": 22
  },
  {
    "id": "anesthesia-mac",
    "term": "Monitored Anesthesia Care (MAC)",
    "category": "surgical",
    "definition": "Anesthetic technique combining local/regional anesthesia with intravenous sedation and analgesia, with continuous monitoring by an anesthesia professional; patient maintains some level of consciousness and protective airway reflexes.",
    "etymology": "monitored (observed closely) + anesthesia care (management of anesthetic state)",
    "example": "MAC is used for colonoscopy, cataract surgery, and endoscopic procedures.",
    "module": 22
  },
  {
    "id": "anesthesia-general",
    "term": "General Anesthesia",
    "category": "surgical",
    "definition": "Reversible state of unconsciousness produced by anesthetic agents, characterized by loss of consciousness, loss of protective airway reflexes, and loss of response to painful stimuli; requires airway management and mechanical ventilation.",
    "etymology": "general (affecting the whole body) + anesthesia (loss of sensation)",
    "example": "General anesthesia is used for major abdominal surgery, cardiac surgery, and intracranial procedures.",
    "module": 22
  },
  {
    "id": "periop-preop-npo",
    "term": "NPO Status (Nil Per Os)",
    "category": "surgical",
    "definition": "Preoperative instruction for patients to remain nothing by mouth for a specified period before surgery to reduce aspiration risk; typically 6-8 hours for solid food and 2 hours for clear liquids.",
    "etymology": "nil per os (nothing by mouth—Latin)",
    "example": "Patients are instructed NPO after midnight before an 8 AM surgical procedure to ensure an empty stomach.",
    "module": 22
  },
  {
    "id": "periop-preop-consent",
    "term": "Informed Surgical Consent",
    "category": "surgical",
    "definition": "Legal and ethical documentation obtained before surgery in which the patient acknowledges understanding of the procedure, risks, benefits, alternatives, and potential complications.",
    "etymology": "informed (made aware) + consent (permission)",
    "example": "Informed consent includes discussion of anesthesia risks, potential bleeding, infection, and procedure-specific complications.",
    "module": 22
  },
  {
    "id": "periop-preop-marking",
    "term": "Surgical Site Marking",
    "category": "surgical",
    "definition": "Preoperative process in which the surgical site is identified and marked with indelible ink by the surgeon to ensure correct anatomical location and prevent wrong-site surgery.",
    "etymology": "surgical (pertaining to surgery) + site marking (identifying location)",
    "example": "In bilateral procedures such as knee replacement, the correct knee is marked with initials or 'YES'.",
    "module": 22
  },
  {
    "id": "periop-intraop-sterile",
    "term": "Sterile Field",
    "category": "surgical",
    "definition": "Area immediately surrounding the surgical site that has been prepared with antimicrobial agents and maintained aseptic throughout the procedure; includes sterile drapes, instruments, and supplies.",
    "etymology": "sterile (free from microorganisms) + field (area of operation)",
    "example": "The surgical team maintains sterile field by wearing sterile gloves, gowns, and masks, and using sterile instruments.",
    "module": 22
  },
  {
    "id": "periop-intraop-draping",
    "term": "Surgical Draping",
    "category": "surgical",
    "definition": "Process of covering the patient's body and surrounding areas with sterile drapes to isolate the surgical site, maintain aseptic conditions, and define the boundaries of the operative field.",
    "etymology": "draping (covering with fabric)",
    "example": "Surgical drapes are placed to expose only the surgical site while protecting surrounding skin from contamination.",
    "module": 22
  },
  {
    "id": "periop-intraop-positioning",
    "term": "Surgical Positioning",
    "category": "surgical",
    "definition": "Strategic placement and support of the patient on the operating table to provide optimal surgical access while maintaining proper body alignment, preventing nerve compression, and ensuring physiological stability.",
    "etymology": "surgical (pertaining to surgery) + positioning (placement)",
    "example": "For spinal surgery, the patient is positioned prone; for abdominal surgery, supine; for thoracic surgery, lateral decubitus.",
    "module": 22
  },
  {
    "id": "periop-postop-pacu",
    "term": "PACU (Post-Anesthesia Care Unit)",
    "category": "surgical",
    "definition": "Specialized recovery area where patients are monitored immediately after surgery and anesthesia; vital signs, consciousness level, pain, and surgical complications are assessed before transfer to the hospital floor.",
    "etymology": "post-anesthesia (after anesthesia) + care unit (monitoring area)",
    "example": "Patients spend 1-2 hours in PACU where nurses monitor heart rate, blood pressure, oxygen saturation, and surgical wound.",
    "module": 22
  },
  {
    "id": "periop-postop-vitals",
    "term": "Vital Signs Monitoring",
    "category": "surgical",
    "definition": "Continuous or frequent assessment of heart rate, blood pressure, respiratory rate, temperature, and oxygen saturation in the postoperative period to detect complications such as bleeding, infection, or cardiac arrhythmia.",
    "etymology": "vital (essential to life) + signs (indicators)",
    "example": "Vital signs are checked every 15 minutes in PACU, then every 30-60 minutes on the hospital floor during postoperative recovery.",
    "module": 22
  },
  {
    "id": "periop-postop-pain",
    "term": "Postoperative Pain Management",
    "category": "surgical",
    "definition": "Comprehensive approach to managing surgical pain using multimodal analgesia including opioids, non-opioids, regional blocks, and non-pharmacologic methods to promote comfort and recovery.",
    "etymology": "postoperative (after surgery) + pain management (relief and control)",
    "example": "Pain management includes IV opioids, NSAIDs, acetaminophen, epidural analgesia, and patient-controlled analgesia (PCA) pumps.",
    "module": 22
  },
  {
    "id": "instrument-scalpel",
    "term": "Scalpel",
    "category": "surgical",
    "definition": "Sharp surgical cutting instrument with a small, thin, straight blade used to make precise incisions in tissue during surgery; available with fixed or detachable blades of various sizes.",
    "etymology": "scalpel (small knife—Latin)",
    "example": "The surgeon uses a scalpel to make the initial skin incision during abdominal or cardiac surgery.",
    "module": 22
  },
  {
    "id": "instrument-retractor",
    "term": "Retractor",
    "category": "surgical",
    "definition": "Surgical instrument used to hold back tissue edges and organs to expose the surgical field during a procedure.",
    "etymology": "From Latin 'retrahere' meaning 'to draw back'; -or denotes an instrument or agent.",
    "example": "The surgeon used a self-retaining retractor to keep the abdominal wall open during the CABG procedure.",
    "module": 22
  },
  {
    "id": "instrument-forceps",
    "term": "Forceps",
    "category": "surgical",
    "definition": "Hinged surgical instrument resembling pincers or tweezers, used to grasp, hold, or manipulate tissue or objects during surgery.",
    "etymology": "From Latin 'forceps' meaning 'tongs' or 'pincers'; used since Roman times.",
    "example": "Tissue forceps were used to gently handle the delicate blood vessels during the vascular anastomosis.",
    "module": 22
  },
  {
    "id": "instrument-clamp",
    "term": "Hemostatic Clamp",
    "category": "surgical",
    "definition": "Surgical instrument designed to compress and occlude blood vessels to control bleeding during surgery; includes Kelly clamps and Crile clamps.",
    "etymology": "From Greek 'haima' (blood) + 'stasis' (stopping); 'clamp' from Old Norse 'klamp' meaning to press.",
    "example": "The surgeon applied a series of hemostatic clamps along the bleeding vessel before ligation during the cholecystectomy.",
    "module": 22
  },
  {
    "id": "instrument-bovie",
    "term": "Electrocautery (Bovie)",
    "category": "surgical",
    "definition": "Surgical instrument that uses high-frequency electrical current to cut tissue and coagulate blood vessels for hemostasis; named after inventor William T. Bovie.",
    "etymology": "From Greek 'elektron' (amber) + Latin 'cautericare' (to burn); Bovie is an eponym.",
    "example": "The Bovie was used on low setting to coagulate small bleeding capillaries along the surgical incision in the laminectomy.",
    "module": 22
  },
  {
    "id": "instrument-laparoscope",
    "term": "Laparoscope",
    "category": "surgical",
    "definition": "Minimally invasive endoscopic instrument consisting of a thin telescope with light source and camera that allows visualization of abdominal and pelvic organs through a small incision.",
    "etymology": "From Greek 'lapara' (flank/abdomen) + 'skopein' (to view); also called laparoscopic camera or video telescope.",
    "example": "The surgeon inserted the laparoscope through a small umbilical port to perform a minimally invasive cholecystectomy.",
    "module": 22
  },
  {
    "id": "instrument-trocar",
    "term": "Trocar",
    "category": "surgical",
    "definition": "Sharp, pointed surgical instrument with a cannula (hollow tube) used to puncture the abdominal wall and create ports for laparoscopic surgery; allows passage of other instruments.",
    "etymology": "From French 'trois' (three) + 'carré' (square), referring to its three-cornered original design; also called 'verres needle' in some contexts.",
    "example": "The surgeon inserted a 5mm trocar through the epigastric port to pass instruments during the VATS procedure.",
    "module": 22
  },
  {
    "id": "complication-dehiscence",
    "term": "Wound Dehiscence",
    "category": "surgical",
    "definition": "Partial or complete separation of wound edges during the healing process, typically occurring in the first 7-14 days postoperatively; increases infection risk and requires immediate intervention.",
    "etymology": "From Latin 'dehiscere' meaning 'to gape open' or 'split apart'; common surgical complication.",
    "example": "The patient experienced wound dehiscence on postoperative day 5 after abdominal surgery, requiring emergency suturing and antibiotic therapy.",
    "module": 22
  },
  {
    "id": "complication-evisceration",
    "term": "Evisceration",
    "category": "surgical",
    "definition": "Complete rupture of all surgical wound layers with protrusion of abdominal organs and contents through the incision; a surgical emergency requiring immediate coverage and repair.",
    "etymology": "From Latin 'ex' (out) + 'viscera' (internal organs); represents complete wound failure.",
    "example": "Following sudden coughing and strain, the patient experienced evisceration on postoperative day 7, with bowel loops protruding through the abdominal incision.",
    "module": 22
  },
  {
    "id": "complication-hematoma",
    "term": "Surgical Hematoma",
    "category": "surgical",
    "definition": "Collection of blood outside blood vessels in tissues following surgery, typically from inadequate hemostasis; can be superficial (subcutaneous) or deep (intramuscular or organ-related).",
    "etymology": "From Greek 'haima' (blood) + 'oma' (tumor/swelling); indicates blood collection.",
    "example": "A large hematoma formed in the subcutaneous tissues along the mastectomy incision, requiring drainage on postoperative day 3.",
    "module": 22
  },
  {
    "id": "complication-seroma",
    "term": "Seroma",
    "category": "surgical",
    "definition": "Accumulation of serous fluid (sterile, clear fluid) in tissues following surgery, typically at the surgical site or in dependent areas; may resolve spontaneously or require drainage.",
    "etymology": "From Latin 'serum' (watery part of blood) + Greek 'oma' (swelling); indicates fluid collection without infection.",
    "example": "The patient developed a seroma under the skin flap after mastectomy, which was managed conservatively with observation and compression.",
    "module": 22
  },
  {
    "id": "complication-infection",
    "term": "Surgical Site Infection (SSI)",
    "category": "surgical",
    "definition": "Infection occurring at the surgical incision site within 30 days of surgery (or 1 year if implant placed), classified as superficial, deep, or organ/space infections; major postoperative complication.",
    "etymology": "From Latin 'inficere' (to taint/contaminate); 'site' indicates location at surgical area.",
    "example": "The patient developed a superficial surgical site infection on postoperative day 6 after colectomy, treated with antibiotics and wound care.",
    "module": 22
  },
  {
    "id": "complication-dvt",
    "term": "Deep Vein Thrombosis (DVT)",
    "category": "surgical",
    "definition": "Formation of blood clot in deep veins, typically in the lower extremity, following major surgery; serious postoperative complication with risk of pulmonary embolism if clot dislodges.",
    "etymology": "From Greek 'thrombus' (clot) + Latin 'vena' (vein); 'deep' distinguishes from superficial thrombophlebitis.",
    "example": "The patient developed DVT in the left leg on postoperative day 4 after CABG, presenting with calf swelling and pain; confirmed by ultrasound and treated with anticoagulation.",
    "module": 22
  },
  {
    "id": "complication-pe",
    "term": "Pulmonary Embolism (PE)",
    "category": "surgical",
    "definition": "Blockage of pulmonary artery by thrombus (usually from DVT), fat, air, or other material; life-threatening postoperative complication causing acute respiratory compromise and hemodynamic instability.",
    "etymology": "From Greek 'embolon' (something inserted) + 'pneu' (lung); indicates obstruction of lung vessels.",
    "example": "The patient suffered acute pulmonary embolism on postoperative day 5 after orthopedic surgery, presenting with chest pain, shortness of breath, and hemodynamic collapse requiring emergency intervention.",
    "module": 22
  },
  {
    "id": "complication-ileus",
    "term": "Postoperative Ileus",
    "category": "surgical",
    "definition": "Temporary paralysis of intestinal motility after surgery, typically lasting 24-72 hours; characterized by absence of bowel sounds, distension, and delayed return of bowel function; managed conservatively with NPO status.",
    "etymology": "From Greek 'eileos' (intestinal obstruction) or 'eilein' (to roll/twist); 'postoperative' indicates timing after surgery.",
    "example": "The patient experienced postoperative ileus following colectomy, requiring NPO status, nasogastric tube placement, and IV hydration until bowel function returned on day 4.",
    "module": 22
  },
  {
    "id": "complication-anastomotic-leak",
    "term": "Anastomotic Leak",
    "category": "surgical",
    "definition": "Disruption of surgical anastomosis (connection between two structures) allowing leakage of bowel contents or other fluids into the peritoneal cavity or surrounding tissues; serious complication requiring intervention.",
    "etymology": "From Greek 'ana' (again) + 'stoma' (mouth/opening); 'leak' indicates abnormal communication.",
    "example": "Anastomotic leak developed on postoperative day 8 after Whipple procedure, presenting with fever, peritonitis, and sepsis; required emergency reoperation.",
    "module": 22
  },
  {
    "id": "major-procedure-cabg",
    "term": "Coronary Artery Bypass Graft (CABG)",
    "category": "surgical",
    "definition": "Major cardiac surgery creating alternate routes for blood flow around coronary artery stenosis using saphenous vein or internal mammary artery grafts; performed via median sternotomy or minimally invasive approach.",
    "etymology": "From Latin 'coronarius' (crown) + 'arteria' (artery); 'bypass' indicates alternative pathway; 'graft' from Old Norse 'grafi' (to dig).",
    "example": "The patient underwent three-vessel CABG using saphenous vein grafts to the LAD, circumflex, and RCA due to critical stenosis.",
    "module": 22
  },
  {
    "id": "major-procedure-vats",
    "term": "Video-Assisted Thoracic Surgery (VATS)",
    "category": "surgical",
    "definition": "Minimally invasive thoracic surgical technique using endoscope with video camera for visualization through small intercostal ports; allows lung biopsy, wedge resection, and other thoracic procedures with reduced morbidity.",
    "etymology": "From Latin 'video' (I see) + 'thorax' (chest); represents evolution of traditional thoracotomy.",
    "example": "The patient underwent left upper lobe wedge resection via VATS for a suspicious nodule, with significantly faster recovery compared to open thoracotomy.",
    "module": 22
  },
  {
    "id": "major-procedure-whipple",
    "term": "Whipple Procedure (Pancreaticoduodenectomy)",
    "category": "surgical",
    "definition": "Major abdominal surgery removing the head of pancreas, duodenum, distal stomach, and distal bile duct due to pancreatic cancer or other pathology; involves creation of multiple anastomoses to restore GI continuity.",
    "etymology": "Named after surgeon Allen O. Whipple; 'pancreaticoduodenectomy' from Greek 'pancreas' + 'duodenum' + '-ectomy' (removal).",
    "example": "The patient underwent a Whipple procedure for resectable pancreatic adenocarcinoma, with reconstruction via pancreaticojejunostomy, hepaticojejunostomy, and gastrojejunostomy.",
    "module": 22
  },
  {
    "id": "major-procedure-arthroplasty",
    "term": "Total Joint Arthroplasty (TJA)",
    "category": "surgical",
    "definition": "Surgical procedure replacing damaged joint surfaces with prosthetic implants; common procedures include total hip arthroplasty (THA) and total knee arthroplasty (TKA); indicated for severe osteoarthritis or rheumatoid arthritis.",
    "etymology": "From Greek 'arthron' (joint) + 'plassein' (to form); 'total' indicates complete joint replacement.",
    "example": "The patient underwent total knee arthroplasty for end-stage osteoarthritis with a cemented posterior-stabilized prosthetic, achieving significant pain relief and improved mobility.",
    "module": 22
  },
  {
    "id": "esi-level-five",
    "term": "ESI Level 5",
    "category": "emergency",
    "definition": "Emergency Severity Index level 5; lowest acuity triage category for patients with minor injuries or illnesses requiring minimal resources, typically discharged home with outpatient care",
    "etymology": "ESI from Emergency Severity Index; level 5 represents the least urgent classification",
    "example": "A patient with a minor laceration on the finger requiring only wound cleaning and a bandage is triaged as ESI Level 5",
    "module": 23
  },
  {
    "id": "mechanism-of-injury",
    "term": "Mechanism of Injury (MOI)",
    "category": "emergency",
    "definition": "The way in which traumatic injury occurred, including force, direction, and type of impact; critical for predicting injury patterns and severity",
    "etymology": "Mechanism from Latin mechan- (machine, device); injury from Old French injure (wrongdoing, harm)",
    "example": "A motorcycle collision at 60 mph head-on into a tree is a high-energy MOI suggesting multi-system trauma",
    "module": 23
  },
  {
    "id": "mass-casualty-incident",
    "term": "Mass Casualty Incident (MCI)",
    "category": "emergency",
    "definition": "Event involving multiple injured patients that exceeds the immediate capacity of a single emergency department, requiring activation of disaster protocols and resource coordination",
    "etymology": "Mass from Latin massa (lump, heap); casualty from casualis (happening by chance)",
    "example": "A building collapse with 200 injured patients triggers an MCI response with activation of multiple hospitals and trauma centers",
    "module": 23
  },
  {
    "id": "triage-tag",
    "term": "Triage Tag",
    "category": "emergency",
    "definition": "Color-coded identification system used in mass casualty incidents to categorize patients by acuity (immediate/red, delayed/yellow, minor/green, deceased/black)",
    "etymology": "Triage from French trier (to sort); tag from Low German tagge (something that hangs loosely)",
    "example": "In an earthquake MCI, a patient with severe bleeding and altered mental status receives a red triage tag indicating immediate transport",
    "module": 23
  },
  {
    "id": "code-blue",
    "term": "Code Blue",
    "category": "emergency",
    "definition": "Hospital announcement and activation of the cardiac arrest response team when a patient experiences cardiopulmonary arrest requiring immediate resuscitation",
    "etymology": "Code from medical communication system; blue traditionally associated with cardiac emergency signaling",
    "example": "When a 68-year-old patient in the ICU loses pulse and becomes unresponsive, the monitor announces 'Code Blue, Room 412' and the resuscitation team responds immediately",
    "module": 23
  },
  {
    "id": "acls-advanced-cardiac-life-support",
    "term": "ACLS (Advanced Cardiac Life Support)",
    "category": "emergency",
    "definition": "Systematic approach to managing life-threatening cardiac emergencies including cardiac arrest, using algorithms incorporating CPR, defibrillation, and pharmacologic interventions",
    "etymology": "Advanced from Latin ad- (to) + vanced (come); cardiac from Greek kardia (heart); life support from Old English life + support",
    "example": "An ACLS-trained physician administers epinephrine IV and performs defibrillation for a patient in ventricular fibrillation following acute MI",
    "module": 23
  },
  {
    "id": "bls-basic-life-support",
    "term": "BLS (Basic Life Support)",
    "category": "emergency",
    "definition": "Initial emergency care provided to a patient in cardiac arrest, consisting of rescue breathing and chest compressions performed without advanced equipment",
    "etymology": "Basic from Medieval Latin basicus (fundamental); life support from Old English life + support",
    "example": "A bystander performs BLS with hands-only CPR on a collapsed shopping center patron until paramedics arrive with an AED",
    "module": 23
  },
  {
    "id": "cpr-cardiopulmonary-resuscitation",
    "term": "CPR (Cardiopulmonary Resuscitation)",
    "category": "emergency",
    "definition": "Emergency procedure combining chest compressions and rescue breathing to maintain circulation and oxygenation in a patient with absent pulse and respirations",
    "etymology": "Cardio- from Greek kardia (heart); pulmonary from Latin pulmonarius (relating to lungs); resuscitation from Latin resuscitare (to revive)",
    "example": "Paramedics initiate CPR at a compression rate of 100-120 per minute with a compression-to-ventilation ratio of 30:2 during a witnessed cardiac arrest",
    "module": 23
  },
  {
    "id": "aed-automated-external-defibrillator",
    "term": "AED (Automated External Defibrillator)",
    "category": "emergency",
    "definition": "Portable electronic device that automatically analyzes cardiac rhythm and delivers defibrillating shock to patients in ventricular fibrillation or pulseless ventricular tachycardia",
    "etymology": "Automated from Greek autos (self) + Latin matus (made); external from Latin externus (outside); defibrillator from Latin de- (remove) + fibrillation",
    "example": "An AED mounted in an airport terminal is retrieved and applied to a passenger in cardiac arrest, delivering a successful defibrillating shock",
    "module": 23
  },
  {
    "id": "defibrillation",
    "term": "Defibrillation",
    "category": "emergency",
    "definition": "Therapeutic delivery of electrical current to the heart to terminate ventricular fibrillation or pulseless ventricular tachycardia and restore organized cardiac rhythm",
    "etymology": "De- from Latin (to reverse) + fibrillation from Latin fibrilla (small fiber), describing disorganized electrical activity",
    "example": "The ACLS team delivers unsynchronized defibrillation at 200 joules to a patient whose monitor shows coarse ventricular fibrillation",
    "module": 23
  },
  {
    "id": "cardioversion",
    "term": "Cardioversion",
    "category": "emergency",
    "definition": "Synchronized delivery of electrical current to the heart to terminate symptomatic tachydysrhythmias such as atrial fibrillation or ventricular tachycardia with a pulse",
    "etymology": "Cardio- from Greek kardia (heart); version from Latin versio (turning), describing conversion of abnormal rhythm to normal",
    "example": "A patient with rapid atrial fibrillation and hypotension receives synchronized cardioversion at 120 joules, converting to normal sinus rhythm",
    "module": 23
  },
  {
    "id": "endotracheal-intubation",
    "term": "Endotracheal Intubation",
    "category": "emergency",
    "definition": "Placement of an endotracheal tube directly into the trachea to secure airway, facilitate mechanical ventilation, and prevent aspiration in critically ill or unconscious patients",
    "etymology": "Endo- from Greek endon (within); tracheal from Greek tracheia (rough artery); intubation from Latin in- (into) + tubation",
    "example": "A patient with severe head injury and Glasgow Coma Scale of 6 undergoes rapid sequence intubation with succinylcholine and propofol for airway protection",
    "module": 23
  },
  {
    "id": "bag-valve-mask",
    "term": "Bag-Valve-Mask (BVM)",
    "category": "emergency",
    "definition": "Manual ventilation device consisting of compressible bag, one-way valve, and face mask used to deliver positive pressure ventilation to apneic or hypoventilating patients",
    "etymology": "Bag from Old Norse baggi (bundle); valve from Latin valva (folding door); mask from French masque (covering for face)",
    "example": "Paramedics use a bag-valve-mask with 100% oxygen to ventilate an apneic patient who overdosed on opioids during transport to the hospital",
    "module": 23
  },
  {
    "id": "rosc-return-of-spontaneous-circulation",
    "term": "ROSC (Return of Spontaneous Circulation)",
    "category": "emergency",
    "definition": "Restoration of palpable pulse and detectable blood pressure in a patient following cardiac arrest and CPR, indicating resumption of effective cardiac output",
    "etymology": "Return from Old French returner (to turn back); spontaneous from Latin sponte (of one's own accord); circulation from Latin circulare (to move in a circle)",
    "example": "After 6 minutes of ACLS interventions, the monitor shows an organized rhythm with a palpable carotid pulse—ROSC has been achieved",
    "module": 23
  },
  {
    "id": "post-cardiac-arrest-care",
    "term": "Post-Cardiac Arrest Care",
    "category": "emergency",
    "definition": "Comprehensive critical care management following ROSC including therapeutic hypothermia/temperature management, hemodynamic support, ventilator management, and neuroprotection",
    "etymology": "Post- from Latin (after); cardiac from Greek kardia (heart); arrest from Old French arester (to stop); care from Old French ciere",
    "example": "Following ROSC from VF, a patient undergoes targeted temperature management at 32-36°C, coronary angiography, and ICU monitoring for neurologic recovery",
    "module": 23
  },
  {
    "id": "hypovolemic-shock",
    "term": "Hypovolemic Shock",
    "category": "emergency",
    "definition": "A state of inadequate tissue perfusion resulting from decreased circulating blood volume, typically due to hemorrhage, severe dehydration, or fluid loss. Characterized by low preload, decreased cardiac output, and compensatory tachycardia and vasoconstriction.",
    "etymology": "From Greek 'hypo' (under/below) + 'volemia' (blood volume) + 'shock' (circulatory collapse)",
    "example": "A trauma patient with a penetrating abdominal wound presents with hypovolemic shock: tachycardia (HR 125), hypotension (BP 85/50), cool clammy skin, and altered mental status requiring immediate fluid resuscitation and blood transfusion.",
    "module": 23
  },
  {
    "id": "septic-shock",
    "term": "Septic Shock (Distributive Shock)",
    "category": "emergency",
    "definition": "A form of distributive shock caused by infection with resultant systemic inflammatory response, characterized by vasodilation, increased capillary permeability, and maldistribution of blood flow. Defined by suspected infection plus SOFA score ≥2 with hypotension requiring vasopressors (Sepsis-3 criteria).",
    "etymology": "From Latin 'sepsis' (decay/infection) + 'shock' (circulatory failure); 'distributive' reflects widespread vasodilation",
    "example": "A 67-year-old with urosepsis presents with fever (39.2°C), tachycardia, hypotension (90/55) despite fluid boluses, and altered mental status; requiring norepinephrine infusion and broad-spectrum antibiotics per sepsis protocol.",
    "module": 23
  },
  {
    "id": "cardiogenic-shock",
    "term": "Cardiogenic Shock",
    "category": "emergency",
    "definition": "Inadequate tissue perfusion due to primary cardiac dysfunction resulting in decreased cardiac output. Common causes include acute myocardial infarction, severe valvular disease, acute heart failure, and arrhythmias. Characterized by high filling pressures and low perfusion.",
    "etymology": "From Greek 'kardia' (heart) + Latin 'shock' (circulatory collapse)",
    "example": "A 58-year-old male with anterior MI presents with cardiogenic shock: hypotension (88/52), elevated JVP, pulmonary crackles, and confusion; Swan-Ganz catheter shows PAWP 28 mmHg and cardiac index 1.8 L/min/m².",
    "module": 23
  },
  {
    "id": "obstructive-shock",
    "term": "Obstructive Shock",
    "category": "emergency",
    "definition": "Shock resulting from mechanical obstruction to blood flow within the heart or great vessels. Causes include tension pneumothorax, pulmonary embolism, cardiac tamponade, and massive pulmonary hypertension. Characterized by impaired venous return or right heart outflow.",
    "etymology": "From Latin 'obstruere' (to block/obstruct) + 'shock' (circulatory failure)",
    "example": "A trauma patient develops tension pneumothorax post-injury with hypotension, JVD, tracheal deviation, and hypoxia; emergency needle decompression via 2nd intercostal space midclavicular line restores blood pressure and perfusion.",
    "module": 23
  },
  {
    "id": "neurogenic-shock",
    "term": "Neurogenic Shock",
    "category": "emergency",
    "definition": "A form of distributive shock resulting from loss of sympathetic tone, typically following spinal cord injury above T6. Characterized by paradoxical bradycardia, hypotension, and loss of sweating below the injury level due to unopposed vagal activity.",
    "etymology": "From Greek 'neuron' (nerve) + Latin 'shock' (circulatory failure)",
    "example": "A patient with C5 spinal cord injury from diving accident presents with hypotension (90/58), bradycardia (48 bpm), and warm dry skin despite shock state; treated with fluid resuscitation and vasopressors (norepinephrine).",
    "module": 23
  },
  {
    "id": "mean-arterial-pressure-map",
    "term": "Mean Arterial Pressure (MAP)",
    "category": "emergency",
    "definition": "The average arterial pressure during the cardiac cycle, calculated as (SBP + 2×DBP)/3. Critical perfusion parameter used to assess organ perfusion adequacy; target MAP ≥65 mmHg in shock states to maintain vital organ perfusion.",
    "etymology": "From Latin 'medianus' (middle/mean) + 'arteria' (artery) + 'pressure' (force exerted)",
    "example": "A septic shock patient with SBP 95 mmHg and DBP 55 mmHg has MAP of 68 mmHg; norepinephrine initiated to increase MAP to target ≥70 mmHg for adequate renal and cerebral perfusion.",
    "module": 23
  },
  {
    "id": "norepinephrine-vasopressor",
    "term": "Norepinephrine (Vasopressor)",
    "category": "emergency",
    "definition": "A catecholamine with potent alpha-1 adrenergic (vasoconstriction) and beta-1 adrenergic (inotropic) effects. First-line vasopressor in septic shock per Surviving Sepsis Campaign guidelines; maintains MAP while improving cardiac output and organ perfusion.",
    "etymology": "From Greek 'neuro' (nerve) + 'epinephrine' (adrenaline); '-ine' denotes organic amine compound",
    "example": "Septic shock patient unresponsive to fluid resuscitation started on norepinephrine 0.05 mcg/kg/min IV infusion; titrated to achieve MAP ≥65 mmHg and lactate clearance with continuous hemodynamic monitoring.",
    "module": 23
  },
  {
    "id": "dopamine-vasopressor",
    "term": "Dopamine (Vasopressor)",
    "category": "emergency",
    "definition": "A catecholamine with dose-dependent effects: <5 mcg/kg/min (dopaminergic—renal vasodilation), 5-10 mcg/kg/min (beta-1—inotropic), >10 mcg/kg/min (alpha-1—vasoconstrictive). Used in cardiogenic shock and hypotensive states; second-line to norepinephrine in sepsis.",
    "etymology": "From 'dihydroxyphenylalanine' (dopamine precursor); '-amine' indicates organic compound",
    "example": "A cardiogenic shock patient on dopamine 10 mcg/kg/min shows increased heart rate and blood pressure; dose escalated to 15 mcg/kg/min with pulmonary artery catheter monitoring demonstrating improved cardiac output and systemic perfusion.",
    "module": 23
  },
  {
    "id": "epinephrine-vasopressor",
    "term": "Epinephrine (Vasopressor)",
    "category": "emergency",
    "definition": "A potent catecholamine with alpha-1 and beta-1/beta-2 adrenergic effects causing vasoconstriction, inotropic support, and bronchodilation. Used in refractory septic shock, cardiogenic shock, and cardiac arrest; standard medication in ACLS protocols.",
    "etymology": "From Greek 'epi' (upon) + 'nephros' (kidney, where adrenal glands sit); indicates epinephrine from adrenal medulla",
    "example": "A cardiac arrest patient receives epinephrine 1 mg IV during CPR; three minutes later achieves ROSC with BP 110/68; continued on epinephrine infusion 0.05-0.1 mcg/kg/min for post-resuscitation hemodynamic support.",
    "module": 23
  },
  {
    "id": "vasopressin-vasopressor",
    "term": "Vasopressin (Antidiuretic Hormone/ADH)",
    "category": "emergency",
    "definition": "An endogenous hormone that causes vasoconstriction via V1 receptors and fluid reabsorption via V2 receptors. Used as adjunctive vasopressor in refractory septic or cardiogenic shock; may improve outcome in vasodilatory shock states.",
    "etymology": "From Latin 'vas' (vessel) + 'pressio' (pressure); also called antidiuretic hormone (ADH) for fluid-retaining effects",
    "example": "A septic shock patient on maximum norepinephrine dosing remains hypotensive; vasopressin 0.04 units/min added to regimen resulting in improved MAP and reduced norepinephrine requirement.",
    "module": 23
  },
  {
    "id": "fluid-resuscitation",
    "term": "Fluid Resuscitation",
    "category": "emergency",
    "definition": "Rapid administration of intravenous crystalloid (normal saline, lactated Ringer's) or colloid solutions to restore intravascular volume and improve tissue perfusion in shock states. Initial goal 30 mL/kg in sepsis; titrated to MAP, lactate, urine output.",
    "etymology": "From Latin 'fluids' (flowing liquid) + 'resuscitare' (to revive/restore)",
    "example": "A trauma patient with hypovolemic shock receives two 1-L boluses of normal saline over 20 minutes; BP improves from 82/50 to 105/62, urine output increases to 0.5 mL/kg/hr, allowing time for operative hemorrhage control.",
    "module": 23
  },
  {
    "id": "arterial-line-aline",
    "term": "Arterial Line (A-line)",
    "category": "emergency",
    "definition": "A catheter placed in a peripheral artery (radial, femoral, or axillary) allowing continuous real-time blood pressure monitoring and frequent blood sampling. Enables beat-to-beat hemodynamic assessment in critically ill patients and shock management.",
    "etymology": "From Latin 'arteria' (artery) + 'line' (catheter); abbreviated as 'A-line'",
    "example": "A septic shock patient has a radial arterial line placed; continuous waveform monitoring shows persistent hypotension despite vasopressors; repeated ABG sampling guides ventilator and medication adjustments.",
    "module": 23
  },
  {
    "id": "central-venous-catheter-cvc",
    "term": "Central Venous Catheter (CVC)",
    "category": "emergency",
    "definition": "A catheter advanced into the superior or inferior vena cava, typically via internal jugular, subclavian, or femoral vein. Allows CVP monitoring, central administration of medications/vasopressors, frequent blood sampling, and hemodynamic assessment in critical care.",
    "etymology": "From Latin 'centralis' (central) + 'vena' (vein) + 'catheter' (tube for aspiration/infusion)",
    "example": "A cardiogenic shock patient has a right internal jugular CVC placed; CVP reading of 18 mmHg indicates elevated filling pressures; medication infusions administered centrally allowing large-bore access and reduced peripheral irritation.",
    "module": 23
  },
  {
    "id": "swan-ganz-catheter-pa-catheter",
    "term": "Swan-Ganz Catheter (Pulmonary Artery Catheter)",
    "category": "emergency",
    "definition": "A flow-directed balloon-tipped catheter advanced through the right heart into the pulmonary artery. Allows measurement of intracardiac pressures (RAP, RVP, PAWP), cardiac output, mixed venous oxygen saturation, and SVR calculation for hemodynamic assessment in complex shock.",
    "etymology": "Named after inventors Harold Swan and William Ganz; 'pulmonary artery catheter' describes distal tip location",
    "example": "A patient with unclear shock etiology has Swan-Ganz catheter placed revealing PAWP 24 mmHg (elevated), CI 1.8 L/min/m² (low), SVR 1600 dyne·s·cm⁻⁵ (high)—consistent with cardiogenic shock; dobutamine infusion initiated for inotropic support.",
    "module": 23
  },
  {
    "id": "intracranial-pressure-monitor",
    "term": "Intracranial Pressure (ICP) Monitor",
    "category": "emergency",
    "definition": "A device measuring cerebrospinal fluid pressure within the cranial vault. Placed via ventriculostomy, epidural, subdural, or parenchymal placement. Guides management of traumatic brain injury, SAH, and other conditions; target ICP <20 mmHg, CPP 60-70 mmHg.",
    "etymology": "From Latin 'intra' (within) + 'cranium' (skull) + 'pressure' (force exerted)",
    "example": "A severe TBI patient with GCS 6 has external ventricular drain (ICP monitor) placed; elevated ICP of 28 mmHg triggers interventions: head elevation 30°, sedation, hyperventilation to PaCO2 35, osmotic therapy with mannitol.",
    "module": 23
  },
  {
    "id": "end-tidal-carbon-dioxide-etco2",
    "term": "End-Tidal Carbon Dioxide (ETCO2)",
    "category": "emergency",
    "definition": "The concentration of CO2 at the end of exhalation, measured by capnography. Reflects pulmonary perfusion and tissue metabolism; normal 35-45 mmHg. Low ETCO2 suggests poor perfusion or inadequate ventilation; used to confirm endotracheal intubation.",
    "etymology": "From Greek 'endon' (within/end) + Latin 'tidus' (tidal/wave) + 'carboneum dioxide' (carbon dioxide)",
    "example": "During cardiac arrest CPR, ETCO2 is 18 mmHg indicating inadequate perfusion; after ROSC achieved with epinephrine, ETCO2 increases to 42 mmHg confirming improved cardiac output and pulmonary perfusion.",
    "module": 23
  },
  {
    "id": "central-venous-pressure-cvp",
    "term": "Central Venous Pressure (CVP)",
    "category": "emergency",
    "definition": "Blood pressure in the thoracic vena cava near the right atrium, measured via central venous catheter; used to assess right heart function and fluid status. Normal CVP is 2–8 mmHg; elevations suggest right heart failure or fluid overload; low CVP indicates hypovolemia.",
    "etymology": "Central (from center/trunk) + Venous (from vein) + Pressure (force exerted by fluid)",
    "example": "A patient with severe sepsis has a CVP of 12 mmHg indicating fluid accumulation; vasopressors and diuretics are initiated.",
    "module": 23
  },
  {
    "id": "mixed-venous-oxygen-saturation-scvo2",
    "term": "Mixed Venous Oxygen Saturation (ScvO₂)",
    "category": "emergency",
    "definition": "Oxygen saturation of blood in the superior vena cava (measured via central line); reflects the balance between oxygen delivery and oxygen consumption. Normal ScvO₂ is >70%; values <70% indicate inadequate oxygen delivery or increased tissue metabolism, typical in shock states.",
    "etymology": "Mixed (combined blood from upper body) + Venous (from vein) + Oxygen + Saturation (degree of binding)",
    "example": "During septic shock resuscitation, ScvO₂ of 65% prompts increased fluid bolus and vasopressor titration to restore tissue perfusion.",
    "module": 23
  },
  {
    "id": "acute-respiratory-distress-syndrome-ards",
    "term": "Acute Respiratory Distress Syndrome (ARDS)",
    "category": "emergency",
    "definition": "Severe inflammatory lung injury with acute onset (within 1 week), bilateral infiltrates on imaging, respiratory failure requiring mechanical ventilation, and PaO₂/FiO₂ ratio ≤300; caused by sepsis, aspiration, trauma, or pneumonia. Berlin criteria classify severity by oxygenation index.",
    "etymology": "Acute (sudden onset) + Respiratory (breathing) + Distress (difficulty) + Syndrome (group of symptoms)",
    "example": "A 65-year-old with aspiration pneumonia develops ARDS requiring intubation, lung-protective ventilation (Vt 6 mL/kg), and PEEP titration.",
    "module": 23
  },
  {
    "id": "sepsis-septic-shock-sepsis-3-criteria",
    "term": "Sepsis and Septic Shock (Sepsis-3 Criteria)",
    "category": "emergency",
    "definition": "Sepsis: life-threatening organ dysfunction caused by dysregulated host response to suspected/confirmed infection (≥2 SOFA points). Septic shock: sepsis with vasopressor requirement (MAP ≥65 mmHg) and lactate >2 mmol/L despite fluid resuscitation; carries 40% mortality.",
    "etymology": "Sepsis (from Greek: putrefaction/decay) + Shock (circulatory collapse)",
    "example": "Patient with pneumonia develops fever, tachycardia, confusion (SOFA 2), requiring norepinephrine and broad-spectrum antibiotics within 1 hour.",
    "module": 23
  },
  {
    "id": "disseminated-intravascular-coagulation-dic",
    "term": "Disseminated Intravascular Coagulation (DIC)",
    "category": "emergency",
    "definition": "Systemic activation of coagulation causing widespread microthrombi and consumption of clotting factors/platelets; presents with bleeding and thrombosis. Caused by sepsis, trauma, malignancy. Diagnosed by low platelets, elevated PT/aPTT, low fibrinogen, elevated D-dimer and fibrin degradation products.",
    "etymology": "Disseminated (spread throughout) + Intravascular (within blood vessels) + Coagulation (clotting)",
    "example": "Septic patient develops petechial rash, melena, and lab values showing PLT 45K, fibrinogen 80, D-dimer >10; DIC protocol activated with FFP and platelet transfusion.",
    "module": 23
  },
  {
    "id": "stress-ulcer-curling-ulcer",
    "term": "Stress Ulcer (Curling's Ulcer)",
    "category": "emergency",
    "definition": "Acute gastric or duodenal ulceration secondary to physiologic stress (critical illness, burns, trauma, sepsis); caused by ischemia and reduced gastric mucosal protection. Prophylaxis with proton-pump inhibitors or H2-blockers reduces risk in ICU patients.",
    "etymology": "Stress (physical/physiologic strain) + Ulcer (open sore); Curling's named after physician who described burn-associated ulcers",
    "example": "Burn victim intubated in SICU started on omeprazole prophylaxis; despite treatment develops hematemesis from stress ulcer requiring endoscopy.",
    "module": 23
  },
  {
    "id": "ventilator-associated-pneumonia-vap",
    "term": "Ventilator-Associated Pneumonia (VAP)",
    "category": "emergency",
    "definition": "Pneumonia developing ≥48 hours after mechanical ventilation initiation; caused by aspiration of contaminated oropharyngeal secretions. Risk factors include duration of ventilation, supine positioning, and sedation. Prevention: elevate head of bed, oral care with chlorhexidine, minimize sedation.",
    "etymology": "Ventilator (mechanical breathing apparatus) + Associated (connected with) + Pneumonia (lung infection)",
    "example": "Intubated trauma patient develops fever, purulent sputum, and new infiltrate on CXR day 5; VAP suspected, cultures sent, empiric antibiotics started.",
    "module": 23
  },
  {
    "id": "central-line-associated-bloodstream-infection-clabsi",
    "term": "Central Line-Associated Bloodstream Infection (CLABSI)",
    "category": "emergency",
    "definition": "Bloodstream infection in a patient with central venous catheter, occurring ≥48 hours after insertion with no other source; reported as hospital-acquired complication. Prevention: aseptic insertion technique, chlorhexidine skin antisepsis, prompt removal when no longer indicated, and dressing changes per protocol.",
    "etymology": "Central (trunk/central line) + Line (catheter) + Associated (connected with) + Bloodstream (circulatory system) + Infection (microbial invasion)",
    "example": "ICU patient on day 6 of CVC develops fever and positive blood cultures; CLABSI suspected, CVC removed, antibiotics initiated, tip cultured.",
    "module": 23
  },
  {
    "id": "catheter-associated-urinary-tract-infection-cauti",
    "term": "Catheter-Associated Urinary Tract Infection (CAUTI)",
    "category": "emergency",
    "definition": "Urinary tract infection in a patient with indwelling urinary catheter, occurring ≥48 hours after catheter placement. Prevention includes prompt catheter removal, aseptic insertion, maintaining sterile closed drainage, and adequate hydration. Diagnosis: pyuria plus symptoms or fever.",
    "etymology": "Catheter (tube for urinary drainage) + Associated (connected with) + Urinary (related to urine) + Tract (anatomical pathway) + Infection (microbial invasion)",
    "example": "Bedridden patient with indwelling foley develops dysuria and fever on day 4 ICU admission; urinalysis shows WBCs, urine culture pending, catheter removed.",
    "module": 23
  },
  {
    "id": "multiple-organ-dysfunction-syndrome-mods",
    "term": "Multiple Organ Dysfunction Syndrome (MODS)",
    "category": "emergency",
    "definition": "Progressive dysfunction of ≥2 organ systems (cardiovascular, respiratory, renal, hepatic, hematologic, neurologic) in critically ill patient; follows prolonged SIRS/sepsis. SOFA score quantifies dysfunction; MODS indicates advanced critical illness with high mortality (50–80%).",
    "etymology": "Multiple (many) + Organ (body structure) + Dysfunction (impaired function) + Syndrome (group of symptoms)",
    "example": "Septic patient develops respiratory failure (requiring intubation), acute kidney injury (creatinine 3.5), hypotension (requiring norepinephrine), and thrombocytopenia; MODS diagnosed with SOFA >8.",
    "module": 23
  },
  {
    "id": "sequential-organ-failure-assessment-sofa-score",
    "term": "Sequential Organ Failure Assessment (SOFA) Score",
    "category": "emergency",
    "definition": "ICU scoring system quantifying organ dysfunction across 6 systems: respiratory (PaO₂/FiO₂), coagulation (platelets), liver (bilirubin), cardiovascular (hypotension/vasopressor requirement), CNS (GCS), and renal (creatinine/urine output). Each scored 0–4; total 0–24. SOFA ≥2 defines sepsis; used for prognosis and mortality prediction.",
    "etymology": "Sequential (occurring in order) + Organ (body structure) + Failure (loss of function) + Assessment (evaluation) + Score (numerical value)",
    "example": "Sepsis protocol: patient with respiratory failure, MAP <65 on norepinephrine, bilirubin 3.2, creatinine 2.5, platelets 80K, GCS 12 scores SOFA 11, indicating high mortality risk.",
    "module": 23
  },
  {
    "id": "icd10-cm-diagnosis-coding",
    "term": "ICD-10-CM Diagnosis Coding",
    "category": "coding",
    "definition": "The classification system used to encode and report patient diagnoses in outpatient and inpatient settings, containing alphanumeric codes with 3-7 characters organized into chapters by body system and disease type.",
    "etymology": "International Classification of Diseases, 10th Revision, Clinical Modification; ICD from Latin 'diagnostica' and Greek 'gnosis'",
    "example": "E11.9 (Type 2 diabetes mellitus without complications) or J44.0 (Chronic obstructive pulmonary disease with acute lower respiratory infection)",
    "module": 24
  },
  {
    "id": "icd10-cm-code-structure",
    "term": "ICD-10-CM Code Structure",
    "category": "coding",
    "definition": "Hierarchical organization of diagnosis codes consisting of category (3 characters), subcategory (4-5 characters), and etiology/anatomical site/severity (6-7 characters with 7th character extensions for laterality, episode of care, or clinical detail.",
    "etymology": "Structure from Latin 'structura' meaning arrangement; hierarchical from Greek 'hierarches' meaning leader of sacred rites",
    "example": "S52.531A (Colles' fracture of right radius, initial encounter for closed fracture) where S52 = category, 531 = subcategory, A = 7th character for initial encounter",
    "module": 24
  },
  {
    "id": "icd10-cm-seventh-character",
    "term": "ICD-10-CM Seventh Character Extension",
    "category": "coding",
    "definition": "Required alphabetic placeholder or clinically significant character in positions 6-7 of ICD-10-CM codes that provides additional specificity regarding laterality, episode of care, trimester, or clinical status of the condition.",
    "etymology": "Seventh from Old English 'seofon'; character from Latin 'character' meaning mark or distinctive feature",
    "example": "For fractures: A (initial encounter), D (subsequent encounter), S (sequela); for poisoning: 1st (initial), 2nd (subsequent), 3rd (sequela); for pregnancy: 0 (not applicable), 1 (first trimester), 2 (second trimester), 3 (third trimester)",
    "module": 24
  },
  {
    "id": "icd10-cm-laterality",
    "term": "ICD-10-CM Laterality",
    "category": "coding",
    "definition": "Requirement to specify whether a bilateral condition is reported separately for each side (right, left, or bilateral) using appropriate ICD-10-CM codes, essential for proper reimbursement and clinical documentation.",
    "etymology": "Laterality from Latin 'lateralis' meaning pertaining to the side",
    "example": "M79.3 Paniculitis, unspecified - must specify right shoulder (M79.31), left shoulder (M79.32), or bilateral (M79.3) rather than unilateral M79.3",
    "module": 24
  },
  {
    "id": "principal-diagnosis-sequencing",
    "term": "Principal Diagnosis Sequencing",
    "category": "coding",
    "definition": "The diagnosis established after study to be chiefly responsible for occasioning the admission of the patient to the hospital; must be listed first on claims and drives DRG assignment in inpatient settings.",
    "etymology": "Principal from Latin 'principalis' meaning first in importance; sequencing from Latin 'sequi' meaning to follow",
    "example": "Patient admitted with chest pain found to have acute MI; AMI codes (I21.x) listed as principal diagnosis first, chest pain (R07.x) listed as secondary diagnosis",
    "module": 24
  },
  {
    "id": "additional-diagnosis",
    "term": "Additional Diagnosis",
    "category": "coding",
    "definition": "All conditions that coexist at admission, develop during the inpatient encounter, or affect the treatment received or length of stay, listed after the principal diagnosis on the claim form.",
    "etymology": "Additional from Latin 'addere' meaning to add to; diagnosis from Greek 'dia' (through) and 'gnosis' (knowledge)",
    "example": "Patient hospitalized for pneumonia (principal) with comorbidities of hypertension, type 2 diabetes, and COPD (additional diagnoses)",
    "module": 24
  },
  {
    "id": "icd10-pcs-procedure-coding",
    "term": "ICD-10-PCS Procedure Coding",
    "category": "coding",
    "definition": "Classification system used exclusively for inpatient hospital procedure reporting, containing 7-character alphanumeric codes organized into sections, bodies, root operations, and anatomical specificity.",
    "etymology": "ICD-10 Procedure Coding System; from Latin 'procedere' meaning to move forward",
    "example": "0DB68ZX (Endoscopic biopsy of stomach), where 0=section, D=body system, B=root operation (excision), 6=anatomical site, 8=approach, Z=device, X=qualifier",
    "module": 24
  },
  {
    "id": "icd10-pcs-root-operations",
    "term": "ICD-10-PCS Root Operations",
    "category": "coding",
    "definition": "31 standardized procedures that form the third character of ICD-10-PCS codes, including alteration, bypass, creation, dilation, division, drainage, excision, extirpation, fragmentation, insertion, inspection, map, and others.",
    "etymology": "Root from Old English 'rot' meaning source; operation from Latin 'operari' meaning to work",
    "example": "B (excision), C (extirpation), D (extraction), H (insertion), J (inspection), K (map), L (occlusion), M (reattachment), N (release), P (removal), Q (repair), S (reposition), T (resection), U (supplement), V (restriction), W (revision), X (transfer), Y (transplantation)",
    "module": 24
  },
  {
    "id": "cpt-evaluation-management-codes",
    "term": "CPT Evaluation and Management (E/M) Codes",
    "category": "coding",
    "definition": "Range of codes (99202-99215 for office visits, 99221-99223 for initial hospital visits, 99231-99233 for subsequent hospital visits) that represent varying levels of clinical complexity and service intensity based on history, examination, and medical decision-making.",
    "etymology": "CPT from Current Procedural Terminology; evaluation from Latin 'evaluare' meaning to ascertain value; management from Old French 'management'",
    "example": "99213 (Office visit, established patient, moderate complexity) versus 99215 (Office visit, established patient, high complexity) based on documented history, exam, and MDM components",
    "module": 24
  },
  {
    "id": "cpt-modifiers",
    "term": "CPT Modifiers",
    "category": "coding",
    "definition": "Two-digit suffixes appended to CPT codes to clarify the service rendered, including bilateral procedures (RT, LT, 50), multiple procedures (59), assistant surgeon (80-82), and other circumstances affecting reimbursement.",
    "etymology": "Modifier from Latin 'modificare' meaning to limit or qualify",
    "example": "27447-LT (Total knee arthroplasty, left side) or 99213-25 (Office visit with significant, separately identifiable E/M service on same day as procedure)",
    "module": 24
  },
  {
    "id": "bundling-coding",
    "term": "Bundling (Coding)",
    "category": "coding",
    "definition": "Payer policy that includes multiple services or procedures within a single code and payment, preventing separate billing for component services that are considered integral to the primary procedure.",
    "etymology": "Bundle from Old Dutch 'bundel' meaning package or collection",
    "example": "Global surgical package bundling pre-operative evaluation, surgery, and post-operative care into one surgical CPT code with a single allowable charge",
    "module": 24
  },
  {
    "id": "unbundling-coding",
    "term": "Unbundling (Coding)",
    "category": "coding",
    "definition": "Fraudulent or inappropriate billing practice of separating bundled services into component codes to increase reimbursement; considered compliance violation under OIG guidelines.",
    "etymology": "Unbundling from un- (not) plus bundle; represents breaking apart standard groupings",
    "example": "Billing component codes 99213 (office visit) and 99214 (higher-level office visit) separately instead of as single encounter; or submitting individual laboratory components separately instead of under panel codes",
    "module": 24
  },
  {
    "id": "ncci-edits",
    "term": "NCCI Edits (National Correct Coding Initiative)",
    "category": "coding",
    "definition": "CMS database of code pairs that should not be billed together in the same encounter due to bundling or inherent component relationships; violations result in denial or reduction of secondary code.",
    "etymology": "NCCI from National Correct Coding Initiative; edit from Latin 'editus' meaning put forth",
    "example": "Bilateral knee arthroscopy cannot be billed as two separate codes without modifier; cataract surgery includes intraocular lens insertion and cannot be billed separately",
    "module": 24
  },
  {
    "id": "hcpcs-level-i-ii",
    "term": "HCPCS Level I and Level II Codes",
    "category": "coding",
    "definition": "Healthcare Common Procedure Coding System with Level I representing CPT codes and Level II (alphanumeric J-codes, E-codes, etc.) for supplies, equipment, drugs, and services not in CPT including durable medical equipment and biologics.",
    "etymology": "HCPCS from Healthcare Common Procedure Coding System; Level from Latin 'libella' meaning balance",
    "example": "Level I: 99213 (office visit); Level II: J1100 (dexamethasone injection), E1390 (oxygen concentrator), L3010 (foot orthosis)",
    "module": 24
  },
  {
    "id": "encoder-medical-coding",
    "term": "Encoder (Medical Coding)",
    "category": "coding",
    "definition": "Software tool used by coders to assign diagnosis, procedure, and CPT codes by searching clinical documentation via code look-up, key word, or clinical description; provides real-time compliance checking and edits.",
    "etymology": "Encoder from Latin 'encodare' meaning to put into code; from 'en-' (in) plus 'code'",
    "example": "Coder searches 'Type 2 diabetes with nephropathy' in encoder software and retrieves ICD-10 code E11.21 with recommended 7th character; encoder flags NCCI edits if incompatible codes selected",
    "module": 24
  },
  {
    "id": "hcpcs-dme-coding",
    "term": "HCPCS DME Coding",
    "category": "coding",
    "definition": "The use of HCPCS Level II codes to report durable medical equipment, prosthetics, orthotics, and supplies (DMEPOS) for patient use outside of acute care settings.",
    "etymology": "HCPCS = Healthcare Common Procedure Coding System; DME = Durable Medical Equipment",
    "example": "Code E1390 reports a Doppler ultrasonic flowmeter for monitoring blood flow in patients with vascular disease.",
    "module": 24
  },
  {
    "id": "hcpcs-j-codes",
    "term": "HCPCS J Codes",
    "category": "coding",
    "definition": "HCPCS Level II codes beginning with 'J' used to report chemotherapy drugs, immunosuppressive drugs, injectables, and other therapeutic injections administered in outpatient settings.",
    "etymology": "HCPCS code series; 'J' designation historically reserved for injectable medications",
    "example": "Code J9031 reports Bcg (bacillus Calmette-Guérin) intravesical instillation for bladder cancer treatment.",
    "module": 24
  },
  {
    "id": "drg-ms-drg-system",
    "term": "DRG/MS-DRG System",
    "category": "coding",
    "definition": "Diagnosis-Related Group or Medicare Severity-DRG; a classification system that groups inpatient hospital discharges into clinically meaningful categories for prospective payment reimbursement based on diagnoses, procedures, age, and complications.",
    "etymology": "DRG = Diagnosis-Related Group; MS-DRG = Medicare Severity-DRG (implemented 2008 for enhanced severity adjustment)",
    "example": "MS-DRG 469 (Major joint replacement or replication of lower extremity without MCC) assigns a specific reimbursement weight based on severity and resource utilization.",
    "module": 24
  },
  {
    "id": "apc-ambulatory-payment",
    "term": "APC (Ambulatory Payment Classification)",
    "category": "coding",
    "definition": "A prospective payment system used by CMS for hospital outpatient department services that groups CPT/HCPCS codes into clinically coherent payment groups with similar resource consumption.",
    "etymology": "APC = Ambulatory Payment Classification; ambulatory = outpatient settings not requiring overnight stay",
    "example": "APC 5011 groups multiple preventive care evaluation and management services with similar reimbursement rates for outpatient visits.",
    "module": 24
  },
  {
    "id": "rvu-relative-value-unit",
    "term": "RVU (Relative Value Unit)",
    "category": "coding",
    "definition": "A numerical value assigned to CPT codes representing the relative resource cost of providing a service, consisting of work RVU, practice expense RVU, and malpractice RVU; used in the Medicare Physician Fee Schedule.",
    "etymology": "RVU = Relative Value Unit; relative = compared to baseline service value",
    "example": "CPT 99214 (Established patient office visit, moderate complexity) has a work RVU of 1.5, reflecting physician time and skill relative to other services.",
    "module": 24
  },
  {
    "id": "chargemaster-hospital-coding",
    "term": "Chargemaster",
    "category": "coding",
    "definition": "A comprehensive listing of all billable services, supplies, and procedures used by a hospital with their associated CPT, HCPCS, ICD-10 codes and charges; serves as the foundation for claim generation.",
    "etymology": "Charge = amount billed; Master = comprehensive master list",
    "example": "A hospital chargemaster includes entries such as 'Chest X-ray portable two views' linked to CPT 71046 with a charge amount of $450.",
    "module": 24
  },
  {
    "id": "superbill-encounter-form",
    "term": "Superbill (Encounter Form)",
    "category": "coding",
    "definition": "A document used by healthcare providers to capture patient visit information, including diagnoses, procedures, and services rendered; serves as a source document for coding and billing.",
    "etymology": "Superbill = comprehensive bill form; encounter = patient-provider interaction",
    "example": "A physician office superbill lists common diagnoses (hypertension, diabetes) and procedures (EKG, urinalysis) with associated codes for quick selection during patient checkout.",
    "module": 24
  },
  {
    "id": "cms-1500-claim-form",
    "term": "CMS-1500 Claim Form",
    "category": "coding",
    "definition": "The standard paper and electronic claim form used to submit outpatient healthcare service claims to Medicare and other insurers for physician and non-institutional providers.",
    "etymology": "CMS = Centers for Medicare & Medicaid Services; 1500 = form number designation",
    "example": "A primary care physician submits a CMS-1500 form reporting a patient office visit (CPT 99214) with diagnosis codes for hypertension and high cholesterol.",
    "module": 24
  },
  {
    "id": "ub04-hospital-claim",
    "term": "UB-04 Claim Form",
    "category": "coding",
    "definition": "The standardized claim form (CMS-1450) used by hospitals and other institutional providers to submit inpatient and outpatient claims to Medicare and other insurance programs.",
    "etymology": "UB = Uniform Bill; 04 = version 4 (updated 2007); also called CMS-1450",
    "example": "A hospital submits a UB-04 form for an inpatient stay including charges for room, laboratory tests, imaging, and procedures with MS-DRG assignment.",
    "module": 24
  },
  {
    "id": "place-of-service-coding",
    "term": "Place of Service (POS) Codes",
    "category": "coding",
    "definition": "Two-digit codes on claims that identify the physical location where a healthcare service was provided, affecting reimbursement rates and policy applicability.",
    "etymology": "Place = location; Service = healthcare service provided; POS = Place of Service",
    "example": "POS code 11 represents an office setting, while POS 21 represents an inpatient hospital, each with different reimbursement and documentation requirements.",
    "module": 24
  },
  {
    "id": "type-of-service-coding",
    "term": "Type of Service (TOS) Codes",
    "category": "coding",
    "definition": "Codes used in claim submissions to indicate the category of healthcare service provided (e.g., office visit, surgery, dialysis) for billing and payment purposes.",
    "etymology": "Type = category; Service = healthcare service; TOS = Type of Service",
    "example": "TOS code 1 represents medical care, TOS code 4 represents diagnostic laboratory, helping insurers route claims appropriately.",
    "module": 24
  },
  {
    "id": "present-on-admission-poa",
    "term": "Present on Admission (POA) Indicator",
    "category": "coding",
    "definition": "A five-character indicator (Y, N, U, W, or 1) appended to secondary ICD-10-CM diagnosis codes on inpatient hospital claims to identify whether a condition existed at the time of admission, affecting MS-DRG assignment and payment.",
    "etymology": "POA = Present on Admission; present = existing at time of admission",
    "example": "A patient admitted with pneumonia develops a hospital-acquired infection (HAI) during stay; pneumonia coded with POA 'Y' and HAI with POA 'N' affects complication classification.",
    "module": 24
  },
  {
    "id": "cc-mcc-complication-comorbidity",
    "term": "CC/MCC (Complication and Comorbidity)",
    "category": "coding",
    "definition": "Secondary diagnoses in the ICD-10-CM that are designated as either Complication/Comorbidity (CC) or Major CC (MCC) for MS-DRG severity adjustment, significantly affecting inpatient hospital reimbursement.",
    "etymology": "CC = Complication/Comorbidity; MCC = Major CC; designations impact DRG weight and payment",
    "example": "A patient with acute myocardial infarction (principal diagnosis) with chronic kidney disease (MCC) results in a higher MS-DRG weight and increased reimbursement vs. without the comorbidity.",
    "module": 24
  },
  {
    "id": "hierarchical-condition-category-hcc",
    "term": "HCC (Hierarchical Condition Category)",
    "category": "coding",
    "definition": "A risk adjustment coding system using ICD-10-CM diagnosis codes to identify patients with chronic or serious conditions for capitated payment models and risk-based contracts; used in Medicare Advantage and other value-based arrangements.",
    "etymology": "HCC = Hierarchical Condition Category; hierarchical = ranked by clinical severity and cost impact",
    "example": "ICD-10-CM code I50.9 (Heart failure, unspecified) maps to HCC 85, triggering risk adjustment payments in Medicare Advantage plans for high-risk patients.",
    "module": 24
  },
  {
    "id": "clinical-documentation-improvement-cdi",
    "term": "CDI (Clinical Documentation Improvement)",
    "category": "coding",
    "definition": "A systematic process of improving healthcare documentation accuracy and completeness to ensure proper coding, appropriate DRG assignment, and accurate reimbursement while reducing audit risk and supporting quality outcomes.",
    "etymology": "CDI = Clinical Documentation Improvement; improvement = enhancing clarity and specificity",
    "example": "A CDI specialist queries a physician to clarify whether acute kidney injury was community-acquired or hospital-acquired, as POA status and severity level significantly affect MS-DRG and reimbursement.",
    "module": 24
  },
  {
    "id": "mdc-major-diagnostic-category",
    "term": "MDC (Major Diagnostic Category)",
    "category": "coding",
    "definition": "A classification system that groups ICD-10-CM diagnosis codes and ICD-10-PCS procedure codes into 25 clinically meaningful categories used in DRG assignment for inpatient hospital reimbursement.",
    "etymology": "Major from Latin 'maior' (greater); Diagnostic from Greek 'diagnostikos' (distinguishing); Category from Greek 'kategoria' (predicate, accusation)",
    "example": "MDC 04 covers diseases and disorders of the respiratory system, including pneumonia, COPD, and pulmonary embolism diagnoses.",
    "module": 24
  },
  {
    "id": "grouper-drg-assignment",
    "term": "Grouper (DRG Assignment Software)",
    "category": "coding",
    "definition": "Computerized software that automatically assigns ICD-10-CM/PCS codes and patient data to specific MS-DRG codes, determining inpatient hospital reimbursement based on diagnosis, procedures, and patient demographics.",
    "etymology": "Group from Old Norse 'grupr' (heap, knot); -er denoting a tool or device that performs a function",
    "example": "A grouper program receives codes for a 65-year-old patient with acute myocardial infarction and assigns MS-DRG 216 for 'Cardiac valve procedures with major complications or comorbidities.'",
    "module": 24
  },
  {
    "id": "apc-status-indicators",
    "term": "APC Status Indicators",
    "category": "coding",
    "definition": "Alphanumeric designations (A, B, J, N, S, T, etc.) assigned to CPT/HCPCS codes in the Ambulatory Payment Classification system that determine payment rules, packaging, and billing requirements for outpatient hospital services.",
    "etymology": "Status from Latin 'status' (state, position); Indicator from Latin 'indicare' (to point out)",
    "example": "Status indicator 'J1' indicates a CPT code that is packaged into the APC payment and receives no separate payment; 'S' indicates a separately payable service.",
    "module": 24
  },
  {
    "id": "rvu-calculation-formula",
    "term": "RVU Calculation and Conversion Factor",
    "category": "coding",
    "definition": "A reimbursement methodology where Relative Value Units (work, practice expense, malpractice RVUs) are multiplied by a geographic Practice Cost Index (GPCI) and annual Conversion Factor to determine Medicare payment amounts for CPT codes.",
    "etymology": "Relative from Latin 'relativus' (related); Value from Latin 'valere' (to be strong); Unit from Latin 'unitas' (oneness); Conversion from Latin 'convertere' (to turn around)",
    "example": "CPT 99213 (office visit, established patient, moderate complexity) has 0.97 work RVU; multiplied by GPCI of 1.05 and 2024 conversion factor of $33.29 yields approximately $33.81 payment.",
    "module": 24
  },
  {
    "id": "chargemaster-maintenance",
    "term": "Chargemaster Maintenance and Auditing",
    "category": "coding",
    "definition": "The ongoing process of reviewing, updating, and validating a hospital's charge description master (CDM) to ensure accurate CPT/HCPCS coding, correct pricing, and compliance with payer requirements.",
    "etymology": "Charge from Old French 'chargier' (to load); Master from Old English 'magister' (teacher, authority)",
    "example": "A chargemaster audit reveals that a hospital's charge for CPT 99285 (emergency department visit, high complexity) is missing recent CPT changes; codes are updated and prices adjusted to match current fee schedules.",
    "module": 24
  },
  {
    "id": "superbill-completion",
    "term": "Superbill (Encounter Form) Completion",
    "category": "coding",
    "definition": "A multi-purpose form used by healthcare providers to document and report CPT, ICD-10-CM, and HCPCS codes for services rendered during a patient visit for billing, coding, and audit purposes.",
    "etymology": "Super from Latin 'super' (above, over); Bill from Old Italian 'billa' (document); Encounter from Old French 'encontrer' (to meet)",
    "example": "During an office visit, a provider checks boxes on a superbill for CPT 99213, ICD-10-CM code E11.9 (Type 2 diabetes without complications), and any procedures performed for insurance claim submission.",
    "module": 24
  },
  {
    "id": "cms-1500-form-anatomy",
    "term": "CMS-1500 Claim Form Structure and Fields",
    "category": "coding",
    "definition": "The standardized paper/electronic claim form used by healthcare providers to bill for outpatient services to Medicare, commercial insurers, and other payers, containing patient demographics, provider information, diagnosis, and procedure codes.",
    "etymology": "CMS from Centers for Medicare & Medicaid Services; 1500 is the form number designation",
    "example": "Box 21 on CMS-1500 contains ICD-10-CM diagnosis codes; Box 24D lists CPT codes; Box 24E shows units of service; Box 24F shows charges for each procedure billed.",
    "module": 24
  },
  {
    "id": "ub04-form-structure",
    "term": "UB-04 Hospital Claim Form Data Elements",
    "category": "coding",
    "definition": "The standardized paper/electronic claim form (CMS-1450-equivalent) used by hospitals and inpatient facilities to bill for inpatient admissions and institutional services, containing admission dates, discharge status, ICD-10-CM/PCS codes, and revenue codes.",
    "etymology": "UB from Uniform Bill designation; 04 indicates the 2004 version update",
    "example": "UB-04 Form Locator 72 contains the principal diagnosis (ICD-10-CM); FL 73-75 contain secondary diagnoses; FL 74 contains the principal procedure code (ICD-10-PCS).",
    "module": 24
  },
  {
    "id": "place-of-service-taxonomy",
    "term": "Place of Service (POS) Codes",
    "category": "coding",
    "definition": "Two-digit standardized codes (01-99) used on claims to identify the physical location where healthcare services were rendered (office, hospital, ambulatory surgery center, home, telehealth, etc.).",
    "etymology": "Place from Old French 'place' (open space); Service from Latin 'servitium' (servitude)",
    "example": "POS 11 = office; POS 21 = inpatient hospital; POS 24 = ambulatory surgical center; POS 02 = telehealth patient home; used in Box 24B of CMS-1500.",
    "module": 24
  },
  {
    "id": "type-of-service-coding",
    "term": "Type of Service (TOS) Codes",
    "category": "coding",
    "definition": "Single-digit codes assigned to CPT codes that categorize the type of healthcare service provided (evaluation/management, surgery, radiology, pathology, laboratory, anesthesia, etc.) for billing and data analysis purposes.",
    "etymology": "Type from Greek 'typos' (impression, model); Service from Latin 'servitium' (labor)",
    "example": "TOS code 1 = medical/surgical services; TOS code 2 = surgery; TOS code 3 = diagnostic radiology; TOS code 9 = other; CPT 99213 has TOS 1.",
    "module": 24
  },
  {
    "id": "rac-audit-recovery-audit",
    "term": "RAC (Recovery Audit Contractor) Program",
    "category": "compliance",
    "definition": "A CMS-authorized audit program where contractors review paid and denied claims to identify overpayments, underpayments, and billing errors, with authority to collect overpayments and issue refunds for underpayments.",
    "etymology": "RAC from Recovery Audit Contractor designation; Audit from Latin 'audire' (to hear, examine)",
    "example": "A RAC audit identifies that a provider billed CPT 99213 and 99214 on the same date of service (unbundling) and determines an overpayment of $45, requiring the provider to refund the difference.",
    "module": 24
  },
  {
    "id": "cert-comprehensive-error-rate",
    "term": "CERT (Comprehensive Error Rate Testing)",
    "category": "compliance",
    "definition": "A CMS national audit program that conducts statistical sampling of claims to measure accuracy, calculate error rates for different code categories, and identify systemic billing and coding problems.",
    "etymology": "CERT from Comprehensive Error Rate Testing designation; Comprehensive from Latin 'comprehendere' (to take together)",
    "example": "CERT auditors select 300 claims to review, finding that 12 contain incorrect secondary diagnosis codes (ICD-10-CM specificity errors), resulting in a 4% error rate for diagnosis coding.",
    "module": 24
  },
  {
    "id": "whistleblower-qui-tam-action",
    "term": "Whistleblower (Qui Tam) False Claims Act Protection",
    "category": "compliance",
    "definition": "Legal protections and incentive provisions under the False Claims Act that allow employees or other individuals to report fraudulent healthcare billing and receive whistleblower protection and potential financial rewards.",
    "etymology": "Whistleblower from English 'blow' (produce sound); Qui tam from Latin 'qui tam pro domino rege quam pro se ipso' (who sues for the king as well as for himself)",
    "example": "A hospital coder reports to the Office of Inspector General that the facility is using incorrect ICD-10-CM codes to increase DRG severity and payment; protected from retaliation, awarded $150,000 qui tam share.",
    "module": 24
  },
  {
    "id": "stark-law-physician-self-referral",
    "term": "Stark Law (Physician Self-Referral Prohibition)",
    "category": "compliance",
    "definition": "Federal law prohibiting physicians from referring Medicare/Medicaid patients to healthcare entities for designated health services (imaging, surgery, lab, physical therapy, etc.) in which the physician has a financial interest, unless specific exceptions apply.",
    "etymology": "Stark from Congressman Pete Stark who sponsored the law; Self-referral from English 'self' and Latin 'referre' (to carry back)",
    "example": "A cardiologist who owns a diagnostic imaging center cannot refer her Medicare patients for echocardiograms to her own facility unless the medical necessity and specific exception criteria are met.",
    "module": 24
  },
  {
    "id": "anti-kickback-statute-aks",
    "term": "Anti-Kickback Statute (AKS)",
    "category": "compliance",
    "definition": "Federal law prohibiting the exchange of anything of value (payments, referrals, discounts, supplies) intended to induce or reward referrals or recommendations of healthcare items/services paid by federal healthcare programs.",
    "etymology": "Anti from Greek 'anti' (against); Kickback from English 'kick' and 'back' (payment in return)",
    "example": "A durable medical equipment supplier cannot offer a physician $200 per patient referral for wheelchair prescriptions (ICD-10 mobility codes M89.62) as this constitutes illegal inducement.",
    "module": 24
  },
  {
    "id": "false-claims-act-liability",
    "term": "False Claims Act (FCA) Liability",
    "category": "compliance",
    "definition": "Federal law imposing civil liability for knowingly submitting false claims for payment to federal healthcare programs, with penalties of $5,500-$11,000 per claim plus treble damages, enforced through qui tam whistleblower suits.",
    "etymology": "False from Latin 'falsus' (deceived, false); Claims from Old French 'claimer' (to call, proclaim); Act from Latin 'actus' (deed)",
    "example": "A provider submits claims with principal diagnoses misrepresented to increase MS-DRG assignment; convicted of FCA violation, assessed $33,000 per claim (3 claims × $11,000 statutory penalty) plus treble damages.",
    "module": 24
  },
  {
    "id": "medical-necessity-documentation",
    "term": "Medical Necessity in Coding and Compliance",
    "category": "coding",
    "definition": "The requirement that all codes and billed services must be supported by clinical documentation demonstrating that the service was appropriate, reasonable, and necessary for the patient's condition according to payer policy.",
    "etymology": "Medical from Latin 'medicus' (physician); Necessity from Latin 'necessitas' (unavoidable need)",
    "example": "Billing CPT 99285 (ED visit, high complexity) without documentation of high-complexity decision-making or patient acuity violates medical necessity standards and constitutes potential upcoding fraud.",
    "module": 24
  },
  {
    "id": "specificity-icd10-coding",
    "term": "Specificity in ICD-10-CM Coding",
    "category": "coding",
    "definition": "The requirement to code diagnoses to the highest level of specificity available, using the most specific ICD-10-CM code that accurately describes the condition, laterality, severity, and associated complications.",
    "etymology": "Specificity from Latin 'specificus' (relating to a particular kind); ICD from International Classification of Diseases",
    "example": "Coding 'diabetes' as E11 (Type 2 diabetes without complications) is less specific than E11.22 (Type 2 diabetes with diabetic chronic kidney disease stage 2); proper coding requires the most specific available code.",
    "module": 24
  },
  {
    "id": "query-process-cds-documentation",
    "term": "Query Process and Clinical Documentation Specificity (CDI Query)",
    "category": "coding",
    "definition": "A formal process by which coders or CDI specialists request clarification or additional documentation from providers regarding diagnoses, severity, procedures, or other clinical details needed for accurate coding and compliance.",
    "etymology": "Query from Latin 'quaerere' (to ask, seek); Clinical from Greek 'klinikos' (bedside); Documentation from Latin 'documentum' (proof)",
    "example": "A coder queries the physician: 'Is the patient's AKI acute kidney injury stage 1, 2, or 3 as this affects CMS assignment?' or 'Is the hypertension controlled or uncontrolled based on medications and BP readings?'",
    "module": 24
  },
  {
    "id": "compliance-plan-healthcare-organization",
    "term": "Compliance Plan",
    "category": "compliance",
    "definition": "A written program established by a healthcare organization to promote adherence to applicable laws, regulations, and ethical standards. Includes policies, procedures, training, auditing, and corrective action mechanisms to prevent fraud, waste, and abuse.",
    "etymology": "Compliance: from Latin 'complere' (to fill up, fulfill); Plan: from Latin 'planus' (flat, level); used in organizational governance since the 1990s OIG guidance.",
    "example": "A hospital's compliance plan includes annual coding audits, staff training on HIPAA requirements, a hotline for reporting violations, and corrective action protocols for identified deficiencies.",
    "module": 24
  },
  {
    "id": "oig-office-inspector-general-oversight",
    "term": "OIG (Office of Inspector General)",
    "category": "compliance",
    "definition": "A federal agency within the Department of Health and Human Services responsible for auditing and investigating Medicare, Medicaid, and other HHS programs to detect fraud, waste, and abuse. Issues compliance guidance, conducts audits, and enforces regulations.",
    "etymology": "Office: from Latin 'officium' (duty, service); Inspector: from Latin 'inspectare' (to look at, examine); General: from Latin 'generalis' (relating to all); established 1976.",
    "example": "The OIG publishes an annual work plan identifying audit focus areas such as home health billing patterns, hospice compliance, and post-acute care coding accuracy.",
    "module": 24
  },
  {
    "id": "hipaa-health-insurance-portability-accountability",
    "term": "HIPAA (Health Insurance Portability and Accountability Act)",
    "category": "compliance",
    "definition": "Federal legislation enacted in 1996 establishing national standards for protecting patient privacy, ensuring security of electronic health information, and maintaining portability of health insurance coverage. Applies to covered entities and business associates.",
    "etymology": "Health: from Old English 'hælth'; Insurance: from Old French 'enseurer'; Portability: from Latin 'portare' (to carry); Accountability: from Old French 'acounter' (to account).",
    "example": "A medical practice must implement HIPAA Privacy Rule safeguards, obtain patient authorization for disclosure of protected health information, and maintain Security Rule protections for electronic PHI in its EHR system.",
    "module": 24
  },
  {
    "id": "false-claims-act-qui-tam-liability",
    "term": "False Claims Act (FCA) and Qui Tam Liability",
    "category": "compliance",
    "definition": "Federal statute imposing liability for knowingly submitting or causing submission of false claims to the government. Qui tam provisions allow private citizens (whistleblowers) to sue on behalf of the government for violations. Damages include treble damages plus civil penalties.",
    "etymology": "False: from Latin 'falsus' (deceived, wrong); Claims: from Latin 'clamare' (to call out); Qui tam: from Latin 'qui tam pro rege quam pro se' (who sues for king as for himself); enacted 1863, amended 1986.",
    "example": "A hospital coder receives a qui tam complaint alleging systematic upcoding of DRGs. If substantiated, the hospital faces treble damages (3x actual losses) plus civil penalties of $11,000–$22,000 per false claim.",
    "module": 24
  },
  {
    "id": "cdi-audit-compliance-validation",
    "term": "CDI (Clinical Documentation Improvement) Audit and Validation",
    "category": "compliance",
    "definition": "Systematic review and assessment of clinical documentation quality and coding accuracy post-submission. Validates that documented diagnoses support coded diagnoses, identifies education gaps, ensures medical necessity is evident, and detects potential compliance risks such as upcoding or insufficient specificity.",
    "etymology": "Clinical: from Greek 'klinikos' (relating to a bed, bedside); Documentation: from Latin 'documentum' (written instruction); Improvement: from Old French 'emprovier' (to make good); Audit: from Latin 'audire' (to hear, examine).",
    "example": "A CDI auditor reviews 50 discharged records, noting that 12 cases lack documented medical necessity for sepsis coding, and 8 cases show evidence of upcoding CC/MCC status without supporting clinical findings, triggering targeted physician education.",
    "module": 24
  }
]

export const MED_TERM_CATEGORIES = [
  {
    "id": "prefix",
    "label": "Prefixes",
    "emoji": "⬅️",
    "desc": "Word beginnings that modify meaning"
  },
  {
    "id": "suffix",
    "label": "Suffixes",
    "emoji": "➡️",
    "desc": "Word endings that define type or condition"
  },
  {
    "id": "root",
    "label": "Root Words",
    "emoji": "🌱",
    "desc": "Core meaning — usually the body part or action"
  },
  {
    "id": "body-system",
    "label": "Body Systems",
    "emoji": "🫀",
    "desc": "Organ systems and anatomical terms"
  },
  {
    "id": "disease",
    "label": "Diseases",
    "emoji": "🦠",
    "desc": "Pathological conditions and disorders"
  },
  {
    "id": "procedure",
    "label": "Procedures",
    "emoji": "🔬",
    "desc": "Diagnostic and treatment procedures"
  },
  {
    "id": "pregnancy",
    "label": "Pregnancy & OB",
    "emoji": "🤰",
    "desc": "Obstetrics and reproductive terminology"
  },
  {
    "id": "mental-health",
    "label": "Mental Health",
    "emoji": "🧠",
    "desc": "Psychiatry and behavioral health terms"
  },
  {
    "id": "pharmacology",
    "label": "Pharmacology",
    "emoji": "💊",
    "desc": "Drug terminology, classes, and actions"
  },
  {
    "id": "oncology",
    "label": "Oncology",
    "emoji": "🎗️",
    "desc": "Cancer terminology and staging"
  },
  {
    "id": "legal-ethical",
    "label": "Legal & Ethical",
    "emoji": "⚖️",
    "desc": "Healthcare law, ethics, and compliance"
  },
  {
    "id": "abbreviation",
    "label": "Medical Abbreviations",
    "emoji": "📋",
    "desc": "Clinical abbreviations used in documentation and orders"
  },
  {
    "id": "anatomy",
    "label": "Anatomy & Planes",
    "emoji": "🗺️",
    "desc": "Anatomical planes, directions, and body positions"
  },
  {
    "id": "integumentary",
    "label": "Integumentary (Skin)",
    "emoji": "🩹",
    "desc": "Skin, hair, nails, and wound terminology"
  },
  {
    "id": "skeletal",
    "label": "Skeletal System",
    "emoji": "🦴",
    "desc": "Bones, joints, and musculoskeletal structure"
  },
  {
    "id": "muscular",
    "label": "Muscular System",
    "emoji": "💪",
    "desc": "Muscles, tendons, and movement terminology"
  },
  {
    "id": "neurology",
    "label": "Nervous System",
    "emoji": "⚡",
    "desc": "Brain, spinal cord, and neurological terms"
  },
  {
    "id": "special-senses",
    "label": "Eyes & Ears",
    "emoji": "👁️",
    "desc": "Ophthalmology and otolaryngology terminology"
  },
  {
    "id": "endocrine",
    "label": "Endocrine System",
    "emoji": "🔄",
    "desc": "Hormones, glands, and metabolic disorders"
  },
  {
    "id": "cardiovascular",
    "label": "Cardiovascular System",
    "emoji": "❤️",
    "desc": "Heart, vessels, and circulatory terminology"
  },
  {
    "id": "lymphatic",
    "label": "Lymphatic & Immune",
    "emoji": "🛡️",
    "desc": "Immune system, lymph nodes, and immunity"
  },
  {
    "id": "hematology",
    "label": "Blood & Hematology",
    "emoji": "🩸",
    "desc": "Blood components, clotting, and blood disorders"
  },
  {
    "id": "respiratory",
    "label": "Respiratory System",
    "emoji": "🫁",
    "desc": "Lungs, airways, and breathing terminology"
  },
  {
    "id": "gastrointestinal",
    "label": "Digestive System",
    "emoji": "🍽️",
    "desc": "GI tract, liver, and digestive terminology"
  },
  {
    "id": "urology",
    "label": "Urinary System",
    "emoji": "🫘",
    "desc": "Kidneys, bladder, and urinary terminology"
  },
  {
    "id": "reproductive",
    "label": "Reproductive System",
    "emoji": "🧬",
    "desc": "Male and female reproductive terminology"
  },
  {
    "id": "radiology",
    "label": "Radiology & Imaging",
    "emoji": "📡",
    "desc": "Medical imaging modalities and findings"
  },
  {
    "id": "laboratory",
    "label": "Lab & Diagnostics",
    "emoji": "🧪",
    "desc": "Lab values, panels, and diagnostic testing"
  },
  {
    "id": "surgical",
    "label": "Surgical Procedures",
    "emoji": "🏥",
    "desc": "Surgery, perioperative care, and procedures"
  },
  {
    "id": "emergency",
    "label": "Emergency & Critical Care",
    "emoji": "🚨",
    "desc": "EM, ICU, resuscitation, and critical care"
  },
  {
    "id": "coding",
    "label": "Medical Coding",
    "emoji": "💻",
    "desc": "ICD-10, CPT, HCPCS, and coding compliance"
  }
] as const
