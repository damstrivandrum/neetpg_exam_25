// questions.js
// Format: { id, image?, question, options[], answerIndex, correctAnswerText }

window.questions = [
  // ===== Set 1 =====

  {
    id: 1,
    image: "images/IMG_0424.jpeg",
    question:
      "A 2-year-old boy is brought with empty right hemiscrotum since birth. The testis is non-palpable on examination (including under anesthesia). Diagnostic laparoscopy is performed and the shown image is obtained.\n\nWhat is the MOST LIKELY finding in this procedure?",
    options: [
      "Vanishing testis: blind-ending vas and vessels",
      "Intra-abdominal undescended testis",
      "Indirect inguinal hernia sac without testis",
      "Torsion of pedunculated subserosal fibroid",
    ],
    answerIndex: 1,
    correctAnswerText: "Intra-abdominal undescended testis",
  },

  {
    id: 2,
    image: "images/IMG_0425.jpeg",
    question:
      "A 35-year-old male presents with poor urinary stream, straining, and post-void dribbling for 6 months. He has history of catheterization after RTA 1 year ago. The investigation shown in the image is performed to evaluate the urethra.\n\nWhat is the MOST LIKELY investigation shown?",
    options: [
      "Micturating cystourethrogram (MCU/VCUG)",
      "Retrograde urethrogram (RGU)",
      "Intravenous pyelogram (IVP)",
      "CT urogram",
    ],
    answerIndex: 1,
    correctAnswerText: "Retrograde urethrogram (RGU)",
  },

  {
    id: 3,
    image: "images/IMG_0452.jpeg",
    question:
      "A 45-year-old woman presents with fever, flank pain, weight loss, and recurrent UTIs. She has long-standing history of renal stones. CT abdomen (axial) image is shown. It demonstrates a large renal pelvic calculus with multiple rounded low-density areas in the kidney giving a characteristic appearance.\n\nIdentify the diagnosis MOST CONSISTENT with this CT image.",
    options: [
      "Emphysematous pyelonephritis",
      "Renal cell carcinoma",
      "Xanthogranulomatous pyelonephritis (XGP)",
      "Simple hydronephrosis due to PUJ obstruction",
    ],
    answerIndex: 2,
    correctAnswerText: "Xanthogranulomatous pyelonephritis (XGP)",
  },

  {
    id: 4,
    image: "images/IMG_0428.jpeg",
    question:
      "A 62-year-old man presents with poor urinary stream, straining, intermittency, and terminal hematuria. He also reports suprapubic pain that worsens at the end of micturition and dysuria. X-ray pelvis (KUB) is shown.\n\nWhat is the MOST LIKELY diagnosis (finding) on this X-ray?",
    options: [
      "Phlebolith",
      "Ureteric calculus at VUJ",
      "Vesical (urinary bladder) calculus",
      "Prostatic calcification",
    ],
    answerIndex: 2,
    correctAnswerText: "Vesical (urinary bladder) calculus",
  },

  {
    id: 5,
    image: "images/IMG_0429.jpeg",
    question:
      "A 38-year-old man has dysuria, frequency, sterile pyuria, and intermittent flank pain for 6 months. He has history of pulmonary TB 5 years ago. X-ray KUB is shown. The film demonstrates a diffuse, dense, irregular calcification occupying the renal area on one side, giving a “cast-like” appearance.\n\nIdentify the image finding and the MOST LIKELY diagnosis.",
    options: [
      "Staghorn calculus due to struvite stone (Proteus infection)",
      "Nephrocalcinosis due to hyperparathyroidism",
      "Putty kidney due to renal tuberculosis",
      "Xanthogranulomatous pyelonephritis",
    ],
    answerIndex: 2,
    correctAnswerText: "Putty kidney due to renal tuberculosis",
  },

  {
    id: 6,
    image: "images/IMG_0430.jpeg",
    question:
      "A 24-year-old male presents with intermittent right flank pain and occasional episodes of UTI. Ultrasound suggests right hydronephrosis. An IVP (intravenous pyelogram) film at delayed time (prone) is shown.\n\nIdentify the image finding and the MOST LIKELY diagnosis.",
    options: [
      "PUJ obstruction – “ballooned pelvis” with absent ureteric visualization",
      "Reverse J / fishhook sign on IVP – Retrocaval ureter",
      "Duplex collecting system – “drooping lily sign”",
      "Medullary sponge kidney – “paintbrush appearance”",
    ],
    answerIndex: 1,
    correctAnswerText: "Reverse J / fishhook sign on IVP – Retrocaval ureter",
  },

  {
    id: 7,
    image: "images/IMG_0431.jpeg",
    question:
      "A 32-year-old man presents with a painless scrotal swelling for 4 months. On examination, the swelling is cystic, non-tender, and you are unable to palpate the testis separately clearly. A torch-light test (transillumination test) is performed and the swelling shows a uniform reddish-orange glow as in the image.\n\nWhat is the MOST LIKELY clinical condition identified by this examination?",
    options: ["Varicocele", "Inguinoscrotal hernia", "Hydrocele", "Testicular torsion"],
    answerIndex: 2,
    correctAnswerText: "Hydrocele",
  },

  {
    id: 8,
    image: "images/IMG_0432.jpeg",
    question:
      "A 28-year-old male sustains pelvic fracture in an RTA. He develops lower abdominal pain, inability to void, and gross hematuria. A contrast study of bladder is performed.\n\nWhat is the investigation and MOST LIKELY diagnosis?",
    options: [
      "IVP – PUJ obstruction with hydronephrosis",
      "MCU – Posterior urethral valve",
      "Retrograde cystogram – Intraperitoneal rupture of urinary bladder",
      "Retrograde urethrogram – Anterior urethral stricture",
    ],
    answerIndex: 2,
    correctAnswerText: "Retrograde cystogram – Intraperitoneal rupture of urinary bladder",
  },

  {
    id: 9,
    image: "images/IMG_0433.jpeg",
    question:
      "A 45-year-old woman presents with rapid onset (2–3 weeks) swelling of the left breast associated with diffuse redness, warmth, heaviness, and tenderness. She reports no discrete lump. The breast skin in the image shows pitting edema with accentuated hair follicles.\n\nMost probable diagnosis is:",
    options: ["DCIS", "LCIS", "Inflammatory carcinoma of breast", "Paget disease of nipple"],
    answerIndex: 2,
    correctAnswerText: "Inflammatory carcinoma of breast",
  },

  {
    id: 10,
    image: "images/IMG_0436.jpeg",
    question:
      "A 22-year-old woman comes to surgery OPD with bilateral breast lumps noticed for 8 months. On examination, the lumps are firm, well-circumscribed, and freely mobile. There is no skin/nipple retraction and no axillary nodes.\n\nThe mammogram image shows coarse, chunky calcifications described as “popcorn-like”.\n\nMost likely diagnosis is:",
    options: ["Breast cyst", "Fibroadenoma", "DCIS", "LCIS"],
    answerIndex: 1,
    correctAnswerText: "Fibroadenoma",
  },

  {
    id: 11,
    image: "images/IMG_0438.jpeg",
    question:
      "A 50-year-old woman presents with a rapidly enlarging, huge breast mass as shown in the image. The lump is bosselated, stretches the overlying skin, and has been increasing in size over a short period. Biopsy suggests malignancy.\n\nWhat is the best treatment option?",
    options: [
      "Breast conservation surgery (lumpectomy + RT)",
      "Simple mastectomy",
      "Wide local excision",
      "Modified radical mastectomy (MRM)",
    ],
    answerIndex: 1,
    correctAnswerText: "Simple mastectomy",
  },

  {
    id: 12,
    image: "images/IMG_0440.jpeg",
    question:
      "A 48-year-old man who works outdoors notices a slowly enlarging facial lesion for 4 months. It is painless, occasionally bleeds on rubbing, and has not responded to topical antibiotics. On exam (image), there is a pearly papule/nodule with telangiectasia and central ulceration.\n\nQuestion: Most likely diagnosis?",
    options: ["Basal cell carcinoma", "Malignant melanoma", "Squamous cell carcinoma", "Marjolin ulcer"],
    answerIndex: 0,
    correctAnswerText: "Basal cell carcinoma",
  },

  {
    id: 13,
     image: "images/IMG_0441.jpeg",
    question:
      "A 22-year-old female presents with pain and paresthesia along the ulnar border of the forearm and hand, worsened on overhead activity. She also complains of hand coldness and discoloration after carrying a bag. On examination, Adson’s test is positive and radial pulse decreases on abduction-external rotation. X-ray is as shown.\n\nQuestion:Best management for this patient?",
    options: [
      "Physiotherapy only",
      "Conservative management (analgesics + posture correction)",
      "Surgical intervention",
      "None of the above",
    ],
    answerIndex: 2,
    correctAnswerText: "Surgical intervention",
  },

  {
    id: 14,
    image: "images/IMG_0442.jpeg",
    question:
      "A 28-year-old woman undergoes episiotomy repair. The surgeon chooses the suture shown in the image for mucosal closure. The resident is asked about its source and mechanism of absorption.\n\nQuestion: Which statement is TRUE about the given suture?",
    options: [
      "It is less reactive",
      "Derived from catgut mucosa",
      "It is absorbed by phagocytosis and enzymatic degradation",
      "Made from rabbit gut",
    ],
    answerIndex: 2,
    correctAnswerText: "It is absorbed by phagocytosis and enzymatic degradation",
  },

  {
    id: 15,
    image: "images/IMG_0443.jpeg",
    question:
      "A 10-year-old child presents with a painless midline swelling in the anterior neck for 6 months. Parents say the swelling becomes more prominent when the child swallows. There is no fever, no redness, and no weight loss. On examination, the swelling is midline, cystic, and moves up with deglutition and also moves with protrusion of tongue.\n\nQuestion: Most likely diagnosis?",
    options: ["Thyroglossal cyst", "Thyroglossal fistula", "Cold abscess", "Acute lymphadenitis"],
    answerIndex: 0,
    correctAnswerText: "Thyroglossal cyst",
  },

  {
    id: 16,
    image: "images/IMG_0445.jpeg",
    question:
      "A 32-year-old woman presents with a painless thyroid nodule. She had radiation exposure in childhood. On ultrasound, the nodule is hypoechoic with microcalcifications and irregular margins. FNAC image is shown.\n\nQuestion: The FNAC of this lesion is showing:",
    options: [
      "Orphan-Annie eye nucleus cells",
      "Amyloid deposits",
      "Epithelioid cells and giant cells",
      "Follicular cells",
    ],
    answerIndex: 0,
    correctAnswerText: "Orphan-Annie eye nucleus cells",
  },

  {
    id: 17,
    image: "images/IMG_0446.jpeg",
    question:
      "A 16-year-old girl presents with foreign body sensation in throat, mild dysphagia, and occasional bleeding from the mouth. On examination, there is a midline, reddish, nodular swelling at the base of tongue (foramen cecum region) as shown. Neck exam reveals no palpable thyroid in the normal pretracheal location.\n\nQuestion: Identify the lesion.",
    options: ["Lingual thyroid", "Lingual tonsil", "Ranula", "Thyroglossal cyst"],
    answerIndex: 0,
    correctAnswerText: "Lingual thyroid",
  },

  {
    id: 18,
    image: "",
    question:
      "A 46-year-old woman has a 2.5 cm lump in the upper outer quadrant (UOQ) of the right breast. FNAC suggests malignancy. On examination, there is a single palpable node in the right axilla. Which is the most likely first draining nodal basin for this lesion?",
    options: [
      "Internal mammary (parasternal) nodes",
      "Supraclavicular nodes",
      "Axillary nodes (pectoral/anterior group)",
      "Posterior mediastinal nodes",
    ],
    answerIndex: 2,
    correctAnswerText: "Axillary nodes (pectoral/anterior group)",
  },

  {
    id: 19,
    image: "",
    question:
      "A 45-year-old woman has an 8 cm breast mass with skin involvement (peau d’orange). She has mobile ipsilateral axillary nodes and a clinically palpable ipsilateral supraclavicular node. No distant metastasis. What is the stage group?",
    options: ["Stage IIB", "Stage IIIA", "Stage IIIC", "Stage IV"],
    answerIndex: 2,
    correctAnswerText: "Stage IIIC",
  },

  {
    id: 20,
    image: "",
    question:
      "A 58-year-old postmenopausal woman undergoes breast-conserving surgery (BCS) for a 1.2 cm invasive ductal carcinoma. Margins are negative, node-negative, ER/PR positive, HER2 negative, unifocal tumor, no lymphovascular invasion. She asks about shorter radiotherapy schedules. Which is the best statement?",
    options: [
      "Accelerated partial breast irradiation (APBI) is preferred in young age (<35) and multicentric tumors",
      "Whole breast RT is mandatory only if margins are positive",
      "Accelerated partial breast irradiation (APBI) can be considered in selected low-risk cases like this patient",
      "Postmenopausal ER+ patients should receive tamoxifen only (never aromatase inhibitors)",
    ],
    answerIndex: 2,
    correctAnswerText:
      "Accelerated partial breast irradiation (APBI) can be considered in selected low-risk cases like this patient",
  },

  {
    id: 21,
    image: "",
    question:
      "A 60-year-old woman has chronic eczema-like changes of the nipple-areola complex with occasional serosanguinous discharge. Biopsy shows large pale vacuolated cells within epidermis. Which is the most appropriate statement?",
    options: [
      "Underlying malignancy is uncommon; reassurance is enough",
      "The characteristic cell contains abundant clear cytoplasm (Paget cell) and is commonly associated with underlying breast carcinoma",
      "It is due to duct ectasia and is treated with Hadfield’s operation",
      "It is usually bilateral and multicentric like LCIS",
    ],
    answerIndex: 1,
    correctAnswerText:
      "The characteristic cell contains abundant clear cytoplasm (Paget cell) and is commonly associated with underlying breast carcinoma",
  },

  {
    id: 22,
    image: "",
    question:
      "A 28-year-old man undergoes open splenectomy for trauma. Intra-op hemostasis was secured. Four hours later in the recovery room, he develops tachycardia, falling BP and increasing drain output with fresh blood. The MOST likely type of hemorrhage is:",
    options: ["Primary hemorrhage", "Reactionary hemorrhage", "Secondary hemorrhage", "Tertiary hemorrhage"],
    answerIndex: 1,
    correctAnswerText: "Reactionary hemorrhage",
  },

  {
    id: 23,
    image: "",
    question:
      "A 55-year-old man with urosepsis has warm extremities, bounding pulse, wide pulse pressure, tachycardia, hypotension, and high lactate. Which hemodynamic pattern is most consistent with septic shock (early/warm shock)?",
    options: [
      "↓ CO, ↑ SVR, ↑ PCWP",
      "↑ CO, ↓ SVR, normal/↓ PCWP, ↑ mixed venous O₂ saturation",
      "↓ CO, ↓ SVR, ↑ PCWP",
      "Normal CO, ↑ SVR, ↓ PCWP",
    ],
    answerIndex: 1,
    correctAnswerText: "↑ CO, ↓ SVR, normal/↓ PCWP, ↑ mixed venous O₂ saturation",
  },

  {
    id: 24,
    image: "",
    question:
      "A 35-year-old trauma patient arrives with HR 128/min, RR 32/min, confused, cold clammy extremities, and urine output 10 mL/hr. Estimated blood loss is most consistent with which ATLS class of hemorrhagic shock?",
    options: ["Class I", "Class II", "Class III", "Class IV"],
    answerIndex: 2,
    correctAnswerText: "Class III",
  },

  {
    id: 25,
    image: "",
    question:
      "A 24-year-old woman with acute gastroenteritis has tachycardia and delayed capillary refill. She is anxious but oriented. Extremities are cool; BP is 110/70. RR is 26/min. Which statement is TRUE regarding her shock state?",
    options: [
      "She is in decompensated shock because BP is normal",
      "She is in compensated hypovolemic shock due to sympathetic vasoconstriction maintaining BP",
      "She is in distributive shock because she is tachycardic",
      "She is in cardiogenic shock because extremities are cold",
    ],
    answerIndex: 1,
    correctAnswerText:
      "She is in compensated hypovolemic shock due to sympathetic vasoconstriction maintaining BP",
  },

  {
    id: 26,
    image: "",
    question:
      "A 72-year-old man with diabetes presents with fever, dysuria, altered sensorium. Vitals: RR 28/min, BP 88/54 mmHg, HR 124/min, SpO₂ 94% on room air. He is drowsy (GCS 13). You suspect urosepsis.\n\nWhat is the BEST immediate next step?",
    options: [
      "Start norepinephrine infusion first",
      "Start broad-spectrum antibiotics only, then reassess",
      "Rapid IV crystalloids (fluid resuscitation) + sepsis bundle",
      "Packed RBC transfusion",
    ],
    answerIndex: 2,
    correctAnswerText: "Rapid IV crystalloids (fluid resuscitation) + sepsis bundle",
  },

  {
    id: 27,
    image: "",
    question:
      "A 30-year-old man develops high fever and hypotension after abdominal perforation. Extremities are warm, bounding pulse, wide pulse pressure. CVP is low-normal, and oxygen saturation is relatively preserved initially.\n\nWhich hemodynamic profile fits BEST?",
    options: ["↓CO, ↑SVR, ↑PCWP", "↓CO, ↑SVR, ↓PCWP", "↑/normal CO, ↓SVR, ↓PCWP", "↓CO, ↓SVR, ↑PCWP"],
    answerIndex: 2,
    correctAnswerText: "↑/normal CO, ↓SVR, ↓PCWP",
  },

  {
    id: 28,
    image: "",
    question:
      "A 42-year-old woman has a pigmented lesion on the back that has increased in size over 3 months. It is asymmetric, has irregular borders, variegated color, and diameter is 9 mm. Dermoscopy is suspicious.\n\nWhich immunohistochemical marker is LEAST likely to be positive in melanoma?",
    options: ["S-100", "HMB-45", "Vimentin", "Cytokeratin-20"],
    answerIndex: 3,
    correctAnswerText: "Cytokeratin-20",
  },

  {
    id: 29,
    image: "",
    question:
      "A 58-year-old man has a 2.2 cm ulceroproliferative lesion on the lower lip. Biopsy: squamous cell carcinoma. There is perineural invasion on histology.\n\nBest management plan?",
    options: [
      "Wide excision with 3 mm margin only",
      "Surgical excision with wider margin / Mohs- Micrographic Surgery (high-risk) + nodal evaluation as indicated",
      "Cryotherapy",
      "Radiotherapy alone for all cases",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Surgical excision with wider margin / Mohs- Micrographic Surgery (high-risk) + nodal evaluation as indicated",
  },

  {
    id: 30,
    image: "",
    question:
      "A 34-year-old woman has long-standing dilated tortuous veins along the medial aspect of the leg. On Brodie–Trendelenburg test, after elevating and emptying the veins, a tourniquet is applied at the upper thigh and she is made to stand. The superficial veins fill rapidly from below even with the tourniquet on. When the tourniquet is released, there is no additional sudden “rush” of filling from above.\n\nWhat is the MOST LIKELY site of venous incompetence?",
    options: [
      "Saphenofemoral junction (SFJ) incompetence",
      "Saphenopopliteal junction (SPJ) incompetence",
      "Perforator incompetence",
      "Deep vein thrombosis (DVT)",
    ],
    answerIndex: 2,
    correctAnswerText: "Perforator incompetence",
  },

  {
    id: 31,
    image: "",
    question:
      "A 19-year-old girl presents with unilateral limb hypertrophy, prominent varicosities since childhood, and a large port-wine stain over the affected limb. Duplex suggests superficial venous malformation.\n\nMost likely diagnosis?",
    options: ["Park–Weber syndrome", "Klippel–Trénaunay syndrome", "Post-thrombotic syndrome", "Chronic venous insufficiency due to valve degeneration"],
    answerIndex: 1,
    correctAnswerText: "Klippel–Trénaunay syndrome",
  },

  {
    id: 32,
    image: "",
    question:
      "A 46-year-old woman with long-standing varicose veins has ankle pigmentation, eczema, and lipodermatosclerosis. No active ulcer is present currently.\n\nWhat is her CEAP Clinical (C) class?",
    options: ["C3", "C4a", "C4b", "C5"],
    answerIndex: 2,
    correctAnswerText: "C4b",
  },

  {
    id: 33,
    image: "",
    question:
      "A 58-year-old man presents with unilateral calf swelling and pain. He had major surgery 10 days ago. Examination shows:\n• Calf swelling >3 cm compared to the other side\n• Pitting edema confined to symptomatic leg\n• Tenderness along deep venous system\nNo alternative diagnosis is more likely.\n\nUsing Modified Wells criteria for DVT, what is the BEST next step?",
    options: [
      "Reassure and discharge",
      "D-dimer only, and if negative stop workup",
      "Compression ultrasonography (venous Doppler)",
      "Immediate CT pulmonary angiography",
    ],
    answerIndex: 2,
    correctAnswerText: "Compression ultrasonography (venous Doppler)",
  },

  {
    id: 34,
    image: "",
    question:
      "A 52-year-old chronic smoker presents with pain in buttocks and thighs on walking that is relieved by rest. He also reports erectile dysfunction. On examination, femoral pulses are weak bilaterally.\n\nMost likely diagnosis?",
    options: ["Buerger disease with distal occlusion", "Aortoiliac occlusive disease (Leriche syndrome)", "Femoro-popliteal occlusion", "Lumbar canal stenosis (pseudoclaudication)"],
    answerIndex: 1,
    correctAnswerText: "Aortoiliac occlusive disease (Leriche syndrome)",
  },

  {
    id: 35,
    image: "",
    question:
      "A 56-year-old man (smoker, diabetic) complains of calf pain on walking 150 meters, relieved by rest. Foot is warm, no rest pain/ulcer/gangrene. ABI = 0.72. Doppler shows femoro-popliteal atherosclerotic disease.\n\nBest initial management to improve symptoms and reduce CV risk is:",
    options: [
      "Immediate femoro-popliteal bypass",
      "Lifestyle modification + antiplatelet + statin + cilostazol",
      "Lumbar sympathectomy",
      "Catheter-directed thrombolysis",
    ],
    answerIndex: 1,
    correctAnswerText: "Lifestyle modification + antiplatelet + statin + cilostazol",
  },

  {
    id: 36,
    image: "",
    question:
      "A 43-year-old male has severe rest pain and small painful ischemic toe ulcers. Angiography shows diffuse distal tibial disease not amenable to bypass. Surgeon suggests lumbar sympathectomy.\n\nWhich of the following is TRUE?",
    options: [
      "It is best for intermittent claudication",
      "It works by relieving vasospasm and improving skin blood flow",
      "Both L1 ganglia should always be divided for better outcome",
      "Major complication is urinary retention due to parasympathetic injury",
    ],
    answerIndex: 1,
    correctAnswerText: "It works by relieving vasospasm and improving skin blood flow",
  },

  {
    id: 37,
    image: "",
    question:
      "A 62-year-old man with atrial fibrillation develops sudden severe pain in right leg with pallor and coldness. Examination shows pulseless foot, decreased sensation, and weakness. Symptoms started 4 hours ago.\n\nBest next step (most appropriate immediate management) is:",
    options: [
      "Wait for demarcation and plan amputation",
      "Start heparin and do urgent embolectomy (Fogarty) / revascularization",
      "Start warfarin only",
      "Give thrombolysis only and delay imaging",
    ],
    answerIndex: 1,
    correctAnswerText: "Start heparin and do urgent embolectomy (Fogarty) / revascularization",
  },

  {
    id: 38,
    image: "",
    question:
      "A 59-year-old man develops dizziness and visual blurring while using his left arm for exertion. BP is lower in left arm by 25 mmHg. Bruit heard over left supraclavicular region. Duplex shows proximal left subclavian stenosis.\n\nWhich statement is TRUE?",
    options: [
      "Reversal of flow occurs in ipsilateral vertebral artery",
      "Blood is stolen from ipsilateral carotid artery",
      "Reversal of flow occurs in contralateral vertebral artery",
      "Primary symptom is lower limb claudication",
    ],
    answerIndex: 0,
    correctAnswerText: "Reversal of flow occurs in ipsilateral vertebral artery",
  },

  {
    id: 39,
    image: "",
    question:
      "A 71-year-old male smoker is found to have an incidental Abdominal aortic aneurysm (AAA) on ultrasound measuring 5.8 cm. He is asymptomatic, stable vitals, no tenderness.\n\nBest management is:",
    options: [
      "Reassure and repeat scan after 5 years",
      "Start antibiotics for mycotic aneurysm",
      "Elective repair (EVAR/open)",
      "Observe until 7.5 cm because rupture risk is low below that",
    ],
    answerIndex: 2,
    correctAnswerText: "Elective repair (EVAR/open)",
  },

  {
    id: 40,
    image: "",
    question:
      "A 48-year-old man presents with sudden tearing chest pain radiating to the back. BP is 210/120 mmHg. CXR shows widened mediastinum. ECG is non-diagnostic.\n\nBest initial medical management while preparing definitive care is:",
    options: [
      "IV nitroglycerin first, then beta blocker",
      "IV beta blocker (esmolol) first, then vasodilator if needed",
      "Immediate thrombolysis",
      "High-dose aspirin and heparin (NSTEMI protocol)",
    ],
    answerIndex: 1,
    correctAnswerText: "IV beta blocker (esmolol) first, then vasodilator if needed",
  },

  {
    id: 41,
    image: "",
    question:
      "A 68-year-old diabetic smoker undergoes an elective hernia repair. On day 7, the wound edges look pale and separation is starting. The resident asks which factor does NOT adversely affect wound healing.\n\nWhich is the EXCEPT?",
    options: [
      "Increasing age",
      "Poor nutrition",
      "Drugs (e.g., steroids)",
      "Dryness/wetness of wound environment",
    ],
    answerIndex: 3,
    correctAnswerText: "Dryness/wetness of wound environment",
  },

  {
    id: 42,
    image: "",
    question:
      "A 32-year-old woman with a non-healing wound is self-medicating with supplements. Which vitamin has an inhibitory effect on wound healing?",
    options: ["Vitamin A", "Vitamin E", "Vitamin C", "Vitamin B complex"],
    answerIndex: 1,
    correctAnswerText: "Vitamin E",
  },

  {
    id: 43,
    image: "",
    question:
      "A 45-year-old woman undergoes elective cholecystectomy with controlled entry into GI tract (no spillage). No pus is present.\n\nThis surgery is best classified as:",
    options: ["Clean", "Clean-contaminated", "Contaminated", "Dirty"],
    answerIndex: 1,
    correctAnswerText: "Clean-contaminated",
  },

  {
    id: 44,
    image: "",
    question:
      "A 24-year-old woman develops a raised itchy scar 3 months after ear piercing. The lesion progressively enlarges beyond the original wound margin and is cosmetically distressing.\n\nMost likely diagnosis and best first-line treatment:",
    options: [
      "Hypertrophic scar; silicone sheet + observation",
      "Keloid; excision alone",
      "Keloid; intralesional triamcinolone",
      "Hypertrophic scar; radiotherapy",
    ],
    answerIndex: 2,
    correctAnswerText: "Keloid; intralesional triamcinolone",
  },

  {
    id: 45,
    image: "",
    question:
      "A 35-year-old man presents with fever and a painful erythematous swelling over the leg. The margins are ill-defined, skin is warm and tender. No raised sharply demarcated edge is present.\n\nMost likely diagnosis?",
    options: ["Erysipelas", "Cellulitis", "Ecthyma", "Erythema nodosum"],
    answerIndex: 1,
    correctAnswerText: "Cellulitis",
  },

  {
    id: 46,
    image: "",
    question:
      "A 60-year-old diabetic presents with rapidly progressive severe pain in the leg (pain out of proportion), toxic look, edema, and skin discoloration. On exploration, there is gray necrotic fascia with thin “dishwater” fluid. Muscle appears viable.\n\nMost likely diagnosis and best management:",
    options: [
      "Gas gangrene; penicillin alone",
      "Necrotizing soft tissue infection (necrotizing fasciitis); urgent surgical debridement + antibiotics",
      "Cellulitis; oral antibiotics only",
      "Erysipelas; topical antibiotics",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Necrotizing soft tissue infection (necrotizing fasciitis); urgent surgical debridement + antibiotics",
  },

  {
    id: 47,
    image: "",
    question:
      "A 28-year-old man is planned for renal transplant. The team discusses HLA matching. Which HLA locus is most important for organ transplantation and tissue typing?",
    options: ["HLA-A", "HLA-B", "HLA-C", "HLA-D"],
    answerIndex: 3,
    correctAnswerText: "HLA-D",
  },

  {
    id: 48,
    image: "",
    question:
      "A patient develops sudden anuria immediately after renal transplant. The graft becomes mottled and cyanotic on table. Doppler shows no flow.\n\nMost likely type of rejection, mechanism, and key pathological event?",
    options: [
      "Acute rejection; T-cell mediated; interstitial lymphocytes",
      "Hyperacute rejection; preformed antibodies; graft thrombosis",
      "Chronic rejection; CMI; graft fibrosis",
      "Acute rejection; immune complex; vasculitis",
    ],
    answerIndex: 1,
    correctAnswerText: "Hyperacute rejection; preformed antibodies; graft thrombosis",
  },

  {
    id: 49,
    image: "",
    question:
      "A 40-year-old renal transplant recipient is on tacrolimus + mycophenolate mofetil + prednisolone. He develops fever, lymphadenopathy, and tonsillar enlargement 8 months post-transplant. Biopsy shows post-transplant lymphoproliferative disorder (PTLD).\n\nMost commonly associated virus + most common overall complication of immunosuppression?",
    options: ["CMV + infection", "EBV + malignancy", "EBV + infection", "HSV + thrombocytopenia"],
    answerIndex: 2,
    correctAnswerText: "EBV + infection",
  },

  {
    id: 50,
    image: "",
    question:
      "During thyroidectomy, the surgeon is ligating a vessel close to the gland. Which vessel has the closest association with the recurrent laryngeal nerve (RLN) and hence should be ligated carefully?",
    options: ["Superior thyroid artery", "Superior thyroid vein", "Middle thyroid vein", "Inferior thyroid artery"],
    answerIndex: 3,
    correctAnswerText: "Inferior thyroid artery",
  },

  {
    id: 51,
    image: "",
    question:
      "A patient with oral cavity carcinoma has clinically positive cervical nodes (levels I–V). Surgeon plans a neck dissection. Which procedure removes levels I–V + SCM + IJV + spinal accessory nerve (CN XI)?",
    options: [
      "Selective supraomohyoid neck dissection",
      "Modified radical neck dissection (MRND)",
      "Radical neck dissection (RND)",
      "Central compartment neck dissection",
    ],
    answerIndex: 2,
    correctAnswerText: "Radical neck dissection (RND)",
  },

  {
    id: 52,
    image: "",
    question:
      "A 38-year-old woman presents with a solitary thyroid nodule (2 cm), euthyroid clinically. No compressive symptoms. What is the initial preferred investigation?",
    options: ["FNAC", "Radionuclide scan", "Thyroid function test (TSH)", "CT neck"],
    answerIndex: 2,
    correctAnswerText: "Thyroid function test (TSH)",
  },

  {
    id: 53,
    image: "",
    question:
      "A 42-year-old woman has a 1.3 cm thyroid nodule. USG shows solid, very hypoechoic, taller-than-wide, irregular/lobulated margins, and microcalcifications. No suspicious nodes. She is euthyroid.\n\nWhat is the best next step?",
    options: ["Observe; repeat USG in 12 months", "FNAC now", "Radionuclide scan first", "Start levothyroxine suppression therapy"],
    answerIndex: 1,
    correctAnswerText: "FNAC now",
  },

  {
    id: 54,
    image: "",
    question:
      "A thyroid FNAC report reads: “Follicular neoplasm / suspicious for follicular neoplasm.” USG shows a 2.5 cm solid nodule, no nodes.\n\nMost appropriate management?",
    options: [
      "Repeat FNAC after 6 weeks",
      "Start anti-thyroid drugs",
      "Hemithyroidectomy (diagnostic lobectomy)",
      "Total thyroidectomy + central neck dissection (CND)",
    ],
    answerIndex: 2,
    correctAnswerText: "Hemithyroidectomy (diagnostic lobectomy)",
  },

  {
    id: 55,
    image: "",
    question:
      "A 28-year-old woman has weight loss, palpitations, heat intolerance, diffuse neck swelling, and prominent eyes. TFT: TSH suppressed, T3/T4 high. Thyroid scan shows diffuse increased uptake.\n\nMost specific diagnostic test?",
    options: ["Anti-TPO antibody", "Anti-thyroglobulin antibody", "TSH receptor antibody (TRAb/TSI)", "Serum calcitonin"],
    answerIndex: 2,
    correctAnswerText: "TSH receptor antibody (TRAb/TSI)",
  },

  {
    id: 56,
    image: "",
    question:
      "A 36-year-old woman presents with painful tender thyroid swelling after an upper respiratory infection. She has fever and elevated ESR. Thyroid scan shows decreased uptake. She is transiently thyrotoxic.\n\nMost likely diagnosis?",
    options: ["Hashimoto thyroiditis", "De Quervain (subacute granulomatous) thyroiditis", "Riedel thyroiditis", "Acute suppurative thyroiditis"],
    answerIndex: 1,
    correctAnswerText: "De Quervain (subacute granulomatous) thyroiditis",
  },

  {
    id: 57,
    image: "",
    question:
      "A 35-year-old woman treated with neck irradiation 10 years ago presents with a 1.8 cm thyroid nodule. USG suggests malignancy; FNAC shows features consistent with papillary carcinoma.\n\nWhich is the most likely route of spread?",
    options: ["Hematogenous spread to bone", "Lymphatic spread to cervical nodes", "Direct spread to liver", "Perineural spread"],
    answerIndex: 1,
    correctAnswerText: "Lymphatic spread to cervical nodes",
  },

  {
    id: 58,
    image: "",
    question:
      "A 22-year-old woman has a thyroid nodule. FNAC shows amyloid in the stroma. Serum calcitonin is elevated. Her father had pheochromocytoma.\n\nBest next step in management (most appropriate pre-op priority)?",
    options: [
      "Proceed directly to total thyroidectomy",
      "Start radioiodine ablation",
      "Screen for pheochromocytoma first",
      "Give levothyroxine suppression and observe",
    ],
    answerIndex: 2,
    correctAnswerText: "Screen for pheochromocytoma first",
  },

  {
    id: 59,
    image: "",
    question:
      "A 68-year-old woman has a long-standing multinodular goitre. Over 3 weeks, she develops rapid increase in neck swelling, hoarseness, and stridor. The mass is hard and fixed. What is the MOST likely diagnosis?",
    options: [
      "Papillary carcinoma thyroid",
      "Follicular carcinoma thyroid",
      "Medullary carcinoma thyroid",
      "Anaplastic carcinoma thyroid",
    ],
    answerIndex: 3,
    correctAnswerText: "Anaplastic carcinoma thyroid",
  },

  {
    id: 60,
    image: "",
    question:
      "A 19-year-old male has marfanoid habitus, mucosal neuromas on tongue, chronic constipation, and a thyroid nodule. What MEN syndrome is most likely?",
    options: ["MEN 1", "MEN 2A", "MEN 2B", "MEN 4"],
    answerIndex: 2,
    correctAnswerText: "MEN 2B",
  },

  {
    id: 61,
    image: "",
    question: `A newborn is found to have a RET mutation consistent with MEN2B on genetic screening. What is the BEST management to reduce mortality?`,
    options: [
      "Observe and repeat neck USG yearly",
      "Start levothyroxine suppression therapy",
      "Prophylactic total thyroidectomy in early childhood",
      "FNAC of thyroid when nodule appears",
    ],
    answerIndex: 2,
    correctAnswerText: "Prophylactic total thyroidectomy in early childhood",
  },

  {
    id: 62,
    image: "",
    question: `A 46-year-old woman has recurrent renal stones, bone pains, constipation, and depression. Labs: Ca 11.8 mg/dL (high), PTH high, phosphate low/normal. What is the BEST test for pre-operative localization?`,
    options: ["USG neck", "CECT neck", "Radioiodine scan", "99mTc sestamibi scan"],
    answerIndex: 3,
    correctAnswerText: "99mTc sestamibi scan",
  },

  {
    id: 63,
    image: "",
    question: `A 55-year-old man with chronic renal failure has bone pain and pruritus. Labs: PTH high, phosphate high, calcium is low-normal. What is the mechanism?`,
    options: [
      "Autonomous parathyroid adenoma causing hypercalcemia",
      "Hyperphosphatemia + low calcitriol → hypocalcemia → reactive ↑PTH",
      "Parathyroid carcinoma",
      "Increased calcitonin secretion",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Hyperphosphatemia + low calcitriol → hypocalcemia → reactive ↑PTH",
  },

  {
    id: 64,
    image: "",
    question: `A patient undergoes parathyroidectomy for severe primary hyperparathyroidism. Within 48 hours he develops perioral tingling, carpopedal spasm and prolonged QT. Calcium is low, phosphate is low-normal, magnesium may be low. Cause?`,
    options: [
      "Accidental recurrent laryngeal nerve injury",
      "DiGeorge syndrome",
      "Hungry bone syndrome due to rapid uptake of calcium into bone",
      "Hypercalcitoninemia from C-cell hyperplasia",
    ],
    answerIndex: 2,
    correctAnswerText:
      "Hungry bone syndrome due to rapid uptake of calcium into bone",
  },

  {
    id: 65,
    image: "",
    question: `A 68-year-old chronic smoker presents with a non-healing ulcer on the lower lip involving the oral commissure. Biopsy: SCC. After wide local excision, the defect involves ~1/3–1/2 of lower lip including commissure. Best reconstruction?`,
    options: [
      "Karapandzic flap",
      "Abbey–Estlander flap",
      "Bernard–Burow flap",
      "Free radial forearm flap",
    ],
    answerIndex: 1,
    correctAnswerText: "Abbey–Estlander flap",
  },

  {
    id: 66,
    image: "",
    question: `A 52-year-old man chews tobacco and smokes. He has a well-demarcated red velvety patch on the buccal mucosa that does not scrape off. What is the most appropriate next step?`,
    options: [
      "Reassure and observe",
      "Topical antifungals",
      "Biopsy the lesion",
      "Oral steroids trial",
    ],
    answerIndex: 2,
    correctAnswerText: "Biopsy the lesion",
  },

  {
    id: 67,
    image: "",
    question: `A 40-year-old woman presents with a slow-growing painless parotid swelling for 2 years. Facial nerve is intact. What is the most likely diagnosis?`,
    options: [
      "Mucoepidermoid carcinoma",
      "Warthin tumor",
      "Pleomorphic adenoma",
      "Adenoid cystic carcinoma",
    ],
    answerIndex: 2,
    correctAnswerText: "Pleomorphic adenoma",
  },

  {
    id: 68,
    image: "",
    question: `A 38-year-old female has a well-circumscribed parotid mass. FNAC suggests pleomorphic adenoma. Surgeon proposes “enucleation” to remove the lump only. Best response?`,
    options: [
      "Enucleation is adequate; recurrence is rare",
      "Enucleation is preferred if tumor is superficial lobe",
      "Superficial parotidectomy is preferred due to pseudopods and recurrence risk",
      "Total parotidectomy with facial nerve sacrifice is mandatory",
    ],
    answerIndex: 2,
    correctAnswerText:
      "Superficial parotidectomy is preferred due to pseudopods and recurrence risk",
  },

  {
    id: 69,
    image: "",
    question: `A 32-year-old man has recurrent pain and swelling in the submandibular region during meals. Which statement is most accurate?`,
    options: [
      "Parotid is the most common gland involved",
      "Most stones are radiolucent",
      "Sialography is contraindicated in acute sialadenitis",
      "Ultrasound is contraindicated in suspected stone",
    ],
    answerIndex: 2,
    correctAnswerText:
      "Sialography is contraindicated in acute sialadenitis",
  },

  {
    id: 70,
    image: "",
    question: `A 45-year-old woman complains of dry mouth and gritty sensation in eyes for 1 year. Examination shows enlarged parotids. Which of the following is most consistent with the diagnosis?`,
    options: [
      "Anti-dsDNA positivity",
      "Anti-Ro (SSA) and Anti-La (SSB) positivity",
      "Raised calcitonin",
      "Biopsy from thyroid gland is diagnostic",
    ],
    answerIndex: 1,
    correctAnswerText: "Anti-Ro (SSA) and Anti-La (SSB) positivity",
  },

  {
    id: 71,
    image: "",
    question: `A 26-year-old male has a 15% TBSA superficial-to-deep dermal burn over the anterior thigh. After tangential excision, a split-thickness skin graft (STSG) is applied and dressed. On post-op day 2, the graft looks pale, lifts easily, and there is fluid collection under the graft. There is no foul smell or pus.\n\nWhat is the most common cause of graft failure in this situation?`,
    options: [
      "Acute rejection",
      "Hematoma/Seroma under the graft",
      "Infection (GABHS)",
      "Hypergranulation tissue",
    ],
    answerIndex: 1,
    correctAnswerText: "Hematoma/Seroma under the graft",
  },

  {
    id: 72,
    image: "",
    question: `A term baby is born with unilateral left cleft lip. The mother wants surgery as early as possible. The baby weighs 3.2 kg, Hb is 9 g/dL, and there are no other congenital anomalies.\n\nWhich statement is most accurate regarding cleft lip repair?`,
    options: [
      "It is due to failure of fusion of maxillary process with lateral nasal process",
      "Ideal time for surgery is when the child is 6–12 months old",
      "Cleft lip is commonly associated with Pierre Robin sequence",
      "Surgery is ideally done when the baby satisfies the Rule of 10s",
    ],
    answerIndex: 3,
    correctAnswerText:
      "Surgery is ideally done when the baby satisfies the Rule of 10s",
  },

  {
    id: 73,
    image: "",
    question: `A 9-month-old child has an isolated cleft palate with feeding difficulty and hypernasal speech developing. Parents ask the best timing and principle of repair.\n\nWhich is the best management statement?`,
    options: [
      "Repair is ideally done at 2–3 years to allow maxillofacial growth",
      "Soft palate is repaired first, typically around ~6 months, followed by hard palate later",
      "Primary goal is cosmetic appearance of lips and nose",
      "Cleft palate is most commonly repaired by Millard rotation-advancement technique",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Soft palate is repaired first, typically around ~6 months, followed by hard palate later",
  },

  {
    id: 74,
    image: "",
    question: `A 19-year-old thin female presents with intermittent left flank pain and episodic gross hematuria, worse on standing/exertion. Urine culture is sterile. On Doppler/CT angiography, the left renal vein is narrowed between the aorta and the SMA with proximal dilatation. She also has a left-sided varicocele noted on exam.\n\nThe most likely underlying mechanism is:`,
    options: [
      "Compression of left renal vein between aorta and SMA",
      "Compression of right renal vein between IVC and aorta",
      "Compression of left ureter at pelvic brim by common iliac artery",
      "Obstruction at pelviureteric junction due to aberrant lower pole vessel",
    ],
    answerIndex: 0,
    correctAnswerText: "Compression of left renal vein between aorta and SMA",
  },

  {
    id: 75,
    image: "",
    question: `A 32-year-old man has acute colicky flank pain radiating to groin. NCCT-KUB shows a 4 mm calculus stuck near the pelvic brim with proximal hydroureteronephrosis.\n\nThe stone is most likely impacted at which ureteric constriction?`,
    options: [
      "Pelviureteric junction (PUJ)",
      "Crossing of ureter over common iliac vessels (pelvic brim)",
      "Ureterovesical junction (UVJ)",
      "Intramural ureter at trigone (uvula)",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Crossing of ureter over common iliac vessels (pelvic brim)",
  },

  {
    id: 76,
    image: "",
    question: `A 3-month-old infant had antenatal ultrasound showing hydronephrosis. Postnatal USG confirms persistent Hydronephrosis (HUN). IVP suggests possible PUJ obstruction but functional obstruction is uncertain. The urologist plans an invasive pressure-flow test to confirm PUJ obstruction. A definitive surgery is planned if true obstruction is confirmed.\n\nWhich combination is CORRECT?`,
    options: [
      "Whitaker test is non-invasive; definitive surgery is Boari flap",
      "Whitaker test is invasive; definitive surgery is Anderson–Hynes dismembered pyeloplasty",
      "Whitaker test measures PB>PA in PUJ obstruction; definitive surgery is ureteric reimplantation",
      "Antenatal HUN never resolves spontaneously; immediate nephrectomy is preferred",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Whitaker test is invasive; definitive surgery is Anderson–Hynes dismembered pyeloplasty",
  },

  {
    id: 77,
    image: "",
    question: `A 40-year-old man has severe dysuria, frequency, and weight loss. Urinalysis shows abundant pus cells, but routine urine culture is negative repeatedly. He has history of pulmonary TB. Imaging suggests ureteric narrowing/strictures causing obstructive uropathy.\n\nBest next diagnostic test to confirm the etiology?`,
    options: [
      "Single random urine AFB smear",
      "Three consecutive early-morning urine samples for AFB",
      "Serum PSA",
      "Urine eosinophils",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Three consecutive early-morning urine samples for AFB",
  },

  {
    id: 78,
    image: "",
    question: `A 29-year-old woman has recurrent UTIs. Urine pH is 8.2. She passes a stone; imaging shows a large branching renal pelvis stone. Culture grows Proteus.\n\nMost likely stone composition and medical prevention?`,
    options: [
      "Calcium oxalate; acetazolamide",
      "Struvite; acetohydroxamic acid",
      "Uric acid; thiazide",
      "Cystine; allopurinol",
    ],
    answerIndex: 1,
    correctAnswerText: "Struvite; acetohydroxamic acid",
  },

  {
    id: 79,
    image: "",
    question: `A 35-year-old woman presents to ER with sudden severe flank pain, hypotension, and a palpable flank mass. She is pale and tachycardic. CECT shows a well-defined renal mass with fat density (~ -20 HU) and perirenal hemorrhage.\n\nMost likely diagnosis and named clinical syndrome?`,
    options: [
      "RCC; Stauffer syndrome",
      "Renal abscess; psoas sign",
      "Angiomyolipoma; Wunderlich syndrome",
      "Wilms tumor; Beckwith-Wiedemann syndrome",
    ],
    answerIndex: 2,
    correctAnswerText: "Angiomyolipoma; Wunderlich syndrome",
  },

  {
    id: 80,
    image: "",
    question: `A 3-year-old child is brought with a painless abdominal mass noticed by parents while bathing. There is mild hematuria and hypertension. On imaging, a large renal mass is seen. Child also has aniridia and mild developmental delay.\n\nThe MOST likely syndrome + genetic locus involved is:`,
    options: [
      "Beckwith–Wiedemann syndrome – 11p13 deletion",
      "WAGR syndrome – 11p13 deletion",
      "Denys–Drash syndrome – 11p15 duplication",
      "WAGR syndrome – 11p15 duplication",
    ],
    answerIndex: 1,
    correctAnswerText: "WAGR syndrome – 11p13 deletion",
  },

  {
    id: 81,
    image: "",
    question: `A 26-year-old man meets with an RTA. He has a pelvic fracture, blood at the urethral meatus, and inability to void. Perineum is bruised. Catheterization is attempted in casualty.\n\nBest next step?`,
    options: [
      "Pass Foley catheter gently; if fails, proceed to cystoscopy",
      "Suprapubic catheter immediately without imaging",
      "Retrograde urethrogram (RUG) before any urethral catheterization",
      "CT abdomen with oral contrast first",
    ],
    answerIndex: 2,
    correctAnswerText:
      "Retrograde urethrogram (RUG) before any urethral catheterization",
  },

  {
    id: 82,
    image: "",
    question: `A newborn male has a ventrally placed urethral opening with dorsal hooded prepuce and ventral curvature (chordee). Testes are palpable but one is high in the canal.\n\nCorrect statement regarding hypospadias is:`,
    options: [
      "Urethral meatus is on dorsal side; dorsal hooded prepuce absent",
      "Most common/mildest type is glanular; most severe is perineal",
      "Surgery should be done immediately in the first month of life",
      "Circumcision is recommended at birth to facilitate hygiene",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Most common/mildest type is glanular; most severe is perineal",
  },

  {
    id: 83,
    image: "",
    question: `A 58-year-old man with long-standing LUTS presents with recurrent UTI. He reports a peculiar symptom: after finishing urination, he presses his lower abdomen and passes more urine, and symptoms vary with posture. Cystoscopy shows a bladder outpouching from the lateral wall.\n\nMost characteristic feature of bladder diverticulum is:`,
    options: [
      "Continuous dribbling since childhood",
      "Two-stage micturition / increased post-void residual with change in position",
      "Severe colicky flank pain radiating to groin",
      "Pneumaturia after meals",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Two-stage micturition / increased post-void residual with change in position",
  },

  {
    id: 84,
    image: "",
    question: `A 66-year-old man has LUTS: hesitancy, weak stream, nocturia. Uroflowmetry shows Qmax 8 mL/s. USG shows post-void residual urine 140 mL. PSA is mildly elevated but DRE suggests benign enlarged prostate.\n\nBest initial pharmacotherapy to give rapid symptomatic relief is:`,
    options: ["Finasteride", "Dutasteride", "Tamsulosin", "Sildenafil"],
    answerIndex: 2,
    correctAnswerText: "Tamsulosin",
  },

  {
    id: 85,
    image: "",
    question: `A 38-year-old man has recurrent UTI, perineal pain (prostadynia), and dysuria for months. Urine routine shows pyuria intermittently. You suspect chronic bacterial prostatitis and plan the standard diagnostic test. After prostatic massage, the third specimen shows significantly higher bacteria/pus cells and culture is positive.\n\nThis test is:`,
    options: [
      "Retrograde urethrography (RUG)",
      "Meares–Stamey 4-glass test",
      "Whitaker test",
      "Allen test",
    ],
    answerIndex: 1,
    correctAnswerText: "Meares–Stamey 4-glass test",
  },

  {
    id: 86,
    image: "",
    question: `A term male newborn has empty right hemiscrotum. The testis is palpable in the inguinal canal. Parents ask when it normally reaches the scrotum and why early correction is advised.\n\nWhich statement is MOST correct?`,
    options: [
      "Testis is near kidney at 7th month and reaches scrotum by 8th month",
      "At birth, testes should be at the bottom of scrotum; undescended testis increases risk of torsion, trauma and infertility",
      "Processus vaginalis forms the fibrous cord that guides descent",
      "Remnant of gubernaculum becomes tunica vaginalis",
    ],
    answerIndex: 1,
    correctAnswerText:
      "At birth, testes should be at the bottom of scrotum; undescended testis increases risk of torsion, trauma and infertility",
  },

  {
    id: 87,
    image: "",
    question: `A 26-year-old man presents with acute scrotal pain, dysuria and urethral discharge. He is sexually active. Fever is mild. Cremasteric reflex is present. You suspect epididymo-orchitis.\n\nMost likely causative organism in this patient is:`,
    options: ["E. coli", "Proteus mirabilis", "Chlamydia trachomatis", "Mycobacterium tuberculosis"],
    answerIndex: 2,
    correctAnswerText: "Chlamydia trachomatis",
  },

  {
    id: 88,
    image: "",
    question: `A 45-year-old man has painless scrotal swelling for 1 year. It is fluctuant and transilluminates. You can get above the swelling. USG confirms fluid around the testis.\n\nDefinitive treatment of this condition is:`,
    options: [
      "Aspiration and sclerotherapy in all cases",
      "Herniotomy with mesh",
      "Jaboulay’s procedure (excision and eversion of sac)",
      "Orchiectomy",
    ],
    answerIndex: 2,
    correctAnswerText: "Jaboulay’s procedure (excision and eversion of sac)",
  },

  {
    id: 89,
    image: "",
    question: `A 28-year-old man presents with painless testicular mass. Tumor markers show AFP elevated. CT abdomen shows retroperitoneal nodes. Histology is non-seminomatous germ cell tumor (NSGCT).\n\nThe most appropriate statement is:`,
    options: [
      "Seminoma is radioresistant; treat with retroperitoneal lymph node dissection (RPLND) first always",
      "Non-seminomatous germ cell tumor (NSGCT) commonly needs chemotherapy (BEP: Bleomycin + Etoposide + Cisplatin) and RPLND has a role in nodal disease/residual masses",
      "AFP elevation is typical for pure seminoma",
      "In elderly, most common testicular tumor is seminoma",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Non-seminomatous germ cell tumor (NSGCT) commonly needs chemotherapy (BEP: Bleomycin + Etoposide + Cisplatin) and RPLND has a role in nodal disease/residual masses",
  },

  {
    id: 90,
    image: "",
    question: `A 34-year-old man with past pulmonary TB presents with sterile pyuria, frequency, and dull flank pain. IVU/CT urography is planned.\n\nWhich of the following is NOT a radiological feature of renal tuberculosis?`,
    options: ["Golf-hole ureter", "Thimble bladder", "Putty kidney", "Horseshoe kidney"],
    answerIndex: 3,
    correctAnswerText: "Horseshoe kidney",
  },

  {
    id: 91,
    image: "",
    question: `Which of the following genes is most commonly associated with the development of breast carcinoma?`,
    options: ["BRCA 1", "BRCA 2", "PTEN", "KRAS"],
    answerIndex: 0,
    correctAnswerText: "BRCA 1",
  },

  {
    id: 92,
    image: "",
    question: `Which quadrant of the breast contains the greatest amount of tissue?`,
    options: [
      "Upper inner quadrant",
      "Upper outer quadrant",
      "Lower inner quadrant",
      "Lower outer quadrant",
    ],
    answerIndex: 1,
    correctAnswerText: "Upper outer quadrant",
  },

  {
    id: 93,
    image: "",
    question: `Which among the following criteria is suggestive of locally advanced thyroid cancer?`,
    options: [
      "Cervical lymphadenopathy",
      "Female sex",
      "Recurrent laryngeal nerve paralysis",
      "Dysphagia",
    ],
    answerIndex: 2,
    correctAnswerText: "Recurrent laryngeal nerve paralysis",
  },

  {
    id: 94,
    image: "",
    question: `Which condition refers to angiosarcoma developing in the same-side arm as a complication of long-standing post-surgical lymphoedema?`,
    options: [
      "Dubin–Johnson syndrome",
      "Stewart–Treves syndrome",
      "Fitz–Hugh–Curtis syndrome",
      "Ehlers–Danlos syndrome",
    ],
    answerIndex: 1,
    correctAnswerText: "Stewart–Treves syndrome",
  },

  {
    id: 95,
    image: "",
    question: `Which among the following is not an important anatomical relation of the submandibular gland?`,
    options: ["Lingual nerve", "Posterior facial vein", "Facial artery", "Hypoglossal nerve"],
    answerIndex: 1,
    correctAnswerText: "Posterior facial vein",
  },

  {
    id: 96,
    image: "images/IMG_0336.jpeg",
    question: `A 77-year-old man with biopsy-proven prostate cancer and a serum prostate-specific antigen level of 67 nanograms per millilitre undergoes a bone scan as shown. What is the most likely stage?`,
    options: ["Limited to prostate", "Locally advanced", "Metastatic", "Cannot be commented upon"],
    answerIndex: 2,
    correctAnswerText: "Metastatic",
  },

  {
    id: 97,
    image: "",
    question: `A patient has thyroid cancer with a 3 centimetre tumour and unilateral metastasis to Delphian lymph nodes, with no distant metastasis. What is the correct Tumour–Node–Metastasis stage?`,
    options: ["T2N1aM0", "T1N1aM0", "T2N1bM0", "T1N1bM0"],
    answerIndex: 0,
    correctAnswerText: "T2N1aM0",
  },

  {
    id: 98,
    image: "",
    question: `Which of the following statements is NOT true regarding Autosomal Dominant Polycystic Kidney Disease?`,
    options: [
      "Polycystin-1 and polycystin-2 play a critical role",
      "Associated with intracranial aneurysms",
      "Visible haematuria occurs in up to 40% of patients with Autosomal Dominant Polycystic Kidney Disease",
      "Hypertension is the least common manifestation of Autosomal Dominant Polycystic Kidney Disease",
    ],
    answerIndex: 3,
    correctAnswerText:
      "Hypertension is the least common manifestation of Autosomal Dominant Polycystic Kidney Disease",
  },

  {
    id: 99,
    image: "images/IMG_0343.jpeg",
    question: `Congenital condition shown in the image is?`,
    options: [
      "Horseshoe kidney",
      "Crossed renal ectopia",
      "Pelviureteric junction obstruction",
      "Polycystic kidney disease",
    ],
    answerIndex: 1,
    correctAnswerText: "Crossed renal ectopia",
  },

  {
    id: 100,
    image: "",
    question: `Which among the following organisms are not responsible for acute suppurative thyroiditis?`,
    options: ["Staphylococcus", "Streptococcus", "Campylobacter", "Clostridium"],
    answerIndex: 2,
    correctAnswerText: "Campylobacter",
  },

  {
    id: 101,
    image: "",
    question: `Which among the following is not a preventive technique for Frey’s syndrome following parotidectomy?`,
    options: [
      "Sternomastoid muscle flap",
      "Temporalis fascial flap",
      "Insertion of artificial membrane",
      "Injection of botulinum toxin",
    ],
    answerIndex: 3,
    correctAnswerText: "Injection of botulinum toxin",
  },

  {
    id: 102,
    image: "images/IMG_0350.jpeg",
    question: `A young male patient had urethral injury after a road traffic accident. The following procedure has been performed (as shown in the images). What is the likely procedure?`,
    options: [
      "Suprapubic cystostomy",
      "Percutaneous nephrostomy",
      "End-to-end anastomosis",
      "Urethroplasty",
    ],
    answerIndex: 0,
    correctAnswerText: "Suprapubic cystostomy",
  },

  {
    id: 103,
    image: "",
    question: `Where does the lymphatic spread occur for a tumour in the posterior one-third of the breast?`,
    options: [
      "Level one axillary lymph nodes",
      "Level two axillary lymph nodes",
      "Level three axillary lymph nodes",
      "Internal mammary lymph nodes",
    ],
    answerIndex: 3,
    correctAnswerText: "Internal mammary lymph nodes",
  },

  {
    id: 104,
    image: "",
    question: `In which of the following conditions of the breast disease is magnetic resonance imaging scan not useful?`,
    options: [
      "To assess multifocality",
      "To assess multicentricity",
      "In breast with implants",
      "To stage the breast cancer",
    ],
    answerIndex: 3,
    correctAnswerText: "To stage the breast cancer",
  },

  {
    id: 105,
    image: "images/IMG_0357.jpeg",
    question: `A 6-year-old boy came with a history of recurrent urinary tract infections. Imaging was done and is shown below. What is the diagnosis?`,
    options: [
      "Vesicoureteric reflux",
      "Urinary bladder diverticulum",
      "Urinary bladder hernia",
      "Vesicocolic fistula",
    ],
    answerIndex: 0,
    correctAnswerText: "Vesicoureteric reflux",
  },

  {
    id: 106,
    image: "images/IMG_0361.jpeg",
    question: `A 45-year-old patient complains of pain on one side of the neck. She is afraid of eating food as it worsens the pain. Ultrasound imaging of the salivary glands is shown. What is the most likely diagnosis?`,
    options: ["Foreign body", "Sialolithiasis", "Osteoma of floor of mouth", "Cervical lymphadenopathy"],
    answerIndex: 1,
    correctAnswerText: "Sialolithiasis",
  },

  {
    id: 107,
    image: "",
    question: `Which of the following is the most common type of shock?`,
    options: ["Hypovolemic", "Cardiogenic", "Obstructive", "Distributive"],
    answerIndex: 0,
    correctAnswerText: "Hypovolemic",
  },

  {
    id: 108,
    image: "",
    question: `During a routine antenatal checkup, a pregnant woman in her third trimester is noticed to have accessory nipples. Which of the following does this condition refer to?`,
    options: ["Polymazia", "Polythelia", "Symmastia", "Supernumerary mazia"],
    answerIndex: 1,
    correctAnswerText: "Polythelia",
  },

  {
    id: 109,
    image: "",
    question: `A patient has thyroid cancer with a 3 centimetre tumour and unilateral metastasis to Delphian lymph nodes, with no distant metastasis. What is the correct Tumour–Node–Metastasis stage?`,
    options: ["T2N1aM0", "T1N1aM0", "T2N1bM0", "T1N1bM0"],
    answerIndex: 0,
    correctAnswerText: "T2N1aM0",
  },

  {
    id: 110,
    image: "",
    question: `A middle-aged woman presents with flank pain and painful micturition. The pain was relieved by intravenous analgesics given at a nearby primary healthcare centre. She is diagnosed with ureteric colic due to ureteric calculi. What is the best diagnostic modality in this case?`,
    options: [
      "Non-contrast computed tomography of the kidney, ureters, and bladder",
      "Contrast-enhanced computed tomography",
      "Ultrasonography of the kidney, ureters, and bladder",
      "Ureteroscopy",
    ],
    answerIndex: 0,
    correctAnswerText:
      "Non-contrast computed tomography of the kidney, ureters, and bladder",
  },

  {
    id: 111,
    image: "",
    question: `A patient with unilateral breast cancer is started on tamoxifen. This will increase the risk of?`,
    options: [
      "Ovarian cancer",
      "Endometrial cancer",
      "Breast cancer on the other side",
      "Cervical cancer",
    ],
    answerIndex: 1,
    correctAnswerText: "Endometrial cancer",
  },

  {
    id: 112,
    image: "images/IMG_0448.jpeg",
    question: `A 62-year-old man with long-standing diabetes mellitus presents with a non-healing ulcer on the foot. He also notices progressive black discoloration of multiple toes. On examination, the toes look dry, shriveled, and black with a clear line of demarcation, as seen in the image.\n\nWhat is the most likely underlying cause of this presentation?`,
    options: [
      "Venous ulcer",
      "Pressure sore",
      "Chronic arterial insufficiency",
      "Diabetic neuropathy",
    ],
    answerIndex: 2,
    correctAnswerText: "Chronic arterial insufficiency",
  },

  {
    id: 113,
    image: "",
    question: `Dohlman’s procedure is done for which of the following conditions?`,
    options: ["Meckel’s diverticulum", "Zenker’s diverticulum", "Bochdalek hernia", "Ménétrier disease"],
    answerIndex: 1,
    correctAnswerText: "Zenker’s diverticulum",
  },

  {
    id: 114,
    image: "",
    question: `Which is the most common organism causing acute bacterial prostatitis?`,
    options: ["Enterococcus", "Proteus", "Streptococcus agalactiae", "Escherichia coli"],
    answerIndex: 3,
    correctAnswerText: "Escherichia coli",
  },

  {
    id: 115,
    image: "images/IMG_0380.jpeg",
    question: `Identify the image:`,
    options: ["Ileal diverticulum", "Bladder exstrophy", "Omphalocele", "Gastroschisis"],
    answerIndex: 1,
    correctAnswerText: "Bladder exstrophy",
  },

  {
    id: 116,
    image: "",
    question: `A farmer presented with a brownish lesion over the plantar aspect of the left foot for 2 years. Over the last few months, he noticed that the lesion was increasing in size. On examination, a 2 × 1.5 centimetre asymmetric lesion with notched edges was noted. Excision biopsy revealed cells containing large, pleomorphic nuclei and numerous mitotic figures. Which of the following will be used as a marker for this condition?`,
    options: ["S-100", "CK-20", "CK-10", "Vimentin"],
    answerIndex: 0,
    correctAnswerText: "S-100",
  },

  {
    id: 117,
    image: "",
    question: `What is the recommended age for starting screening mammography?`,
    options: ["40 years", "45 years", "50 years", "55 years"],
    answerIndex: 0,
    correctAnswerText: "40 years",
  },

  {
    id: 118,
    image: "images/IMG_0388.jpeg",
    question: `The image shows methylene blue dye being injected in the peritumoral region. What is this procedure useful for?`,
    options: [
      "Localizing the tumor",
      "Identifying the margins",
      "Sentinel lymph node biopsy",
      "Identifying metastasis",
    ],
    answerIndex: 2,
    correctAnswerText: "Sentinel lymph node biopsy",
  },

  {
    id: 119,
    image: "images/IMG_0391.jpeg",
    question: `A 40-year-old woman presents with complaints of numbness around the lips and a tingling sensation in her fingers. She underwent parathyroidectomy for hyperparathyroidism one year ago. An electrocardiogram was done and is shown. What will be your immediate management?`,
    options: [
      "Beta blockers",
      "Teriparatide",
      "Intravenous bisphosphonates",
      "Intravenous calcium gluconate",
    ],
    answerIndex: 3,
    correctAnswerText: "Intravenous calcium gluconate",
  },

  {
    id: 120,
    image: "images/IMG_0395.jpeg",
    question: `Identify the instrument shown in the image.`,
    options: [
      "Allis tissue forceps",
      "Babcock’s forceps",
      "Lane’s tissue holding forceps",
      "Kocher’s hemostatic forceps",
    ],
    answerIndex: 1,
    correctAnswerText: "Babcock’s forceps",
  },

];
