// questions.js
// Format: { id, image?, question, options[], answerIndex, correctAnswerText }

window.questions = [
  // ===== Set 1 =====
 {
    id: 1,
    image: "images/IMG_0424.jpeg",
    question: `A 2-year-old boy has an empty right hemiscrotum since birth. Testis is non-palpable even under anesthesia. Diagnostic laparoscopy shows an oval, smooth, whitish structure consistent with a testis lying intra-abdominally.

What is the MOST LIKELY finding?`,
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
    question: `A 35-year-old male has poor urinary stream, straining and post-void dribbling for 6 months. He had catheterization after RTA 1 year ago. The contrast study shown outlines the urethra with contrast entering from the meatus.

What is the MOST LIKELY investigation?`,
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
    question: `A 45-year-old woman has fever, flank pain, weight loss, recurrent UTIs and a long history of renal stones. CT shows a large renal pelvic calculus with multiple rounded low-density areas giving a “bear paw” appearance.

Most consistent diagnosis?`,
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
    question: `A 62-year-old man has poor urinary stream, intermittency, terminal hematuria and suprapubic pain worse at the end of micturition. X-ray pelvis (KUB) shows a large central radiopaque shadow just above the pubic symphysis.

Most likely diagnosis?`,
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
    question: `A 38-year-old man has dysuria, frequency, sterile pyuria and intermittent flank pain for 6 months. Past pulmonary TB. X-ray KUB shows dense, diffuse, irregular “cast-like” calcification occupying one renal fossa.

Most likely diagnosis?`,
    options: [
      "Staghorn calculus due to struvite stone (Proteus infection)",
      "Nephrocalcinosis due to hyperparathyroidism",
      "Putty kidney due to renal tuberculosis",
      "Xanthogranulomatous pyelonephritis (XGP)",
    ],
    answerIndex: 2,
    correctAnswerText: "Putty kidney due to renal tuberculosis",
  },

  {
    id: 6,
    image: "images/IMG_0430.jpeg",
    question: `A 24-year-old male has intermittent right flank pain and recurrent UTI. USG suggests right hydronephrosis. An IVP (delayed/prone film) shows a “reverse J / fishhook” deformity of the proximal ureter.

Most likely diagnosis?`,
    options: [
      "PUJ obstruction – ballooned pelvis with absent ureteric visualization",
      "Reverse J / fishhook sign on IVP – Retrocaval ureter",
      "Duplex collecting system – drooping lily sign",
      "Medullary sponge kidney – paintbrush appearance",
    ],
    answerIndex: 1,
    correctAnswerText: "Reverse J / fishhook sign on IVP – Retrocaval ureter",
  },

  {
    id: 7,
    image: "images/IMG_0431.jpeg",
    question: `A 32-year-old man has painless scrotal swelling. Testis not clearly palpable separately. Transillumination test shows a uniform reddish-orange glow.

Most likely condition?`,
    options: ["Varicocele", "Inguinoscrotal hernia", "Hydrocele", "Testicular torsion"],
    answerIndex: 2,
    correctAnswerText: "Hydrocele",
  },

  {
    id: 8,
    image: "images/IMG_0432.jpeg",
    question: `A 28-year-old male with pelvic fracture after RTA develops suprapubic pain, inability to void and gross hematuria. A retrograde contrast bladder study shows free intraperitoneal contrast outlining bowel loops.

Investigation + most likely diagnosis?`,
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
    question: `A 45-year-old woman has rapid onset (2–3 weeks) breast swelling with diffuse erythema, warmth, heaviness and peau d’orange. No discrete lump.

Most probable diagnosis?`,
    options: ["DCIS", "LCIS", "Inflammatory carcinoma of breast", "Paget disease of nipple"],
    answerIndex: 2,
    correctAnswerText: "Inflammatory carcinoma of breast",
  },

  {
    id: 10,
    image: "images/IMG_0436.jpeg",
    question: `A 22-year-old woman has bilateral firm, mobile, well-circumscribed breast lumps. Mammogram shows coarse “popcorn-like” calcifications.

Most likely diagnosis?`,
    options: ["Breast cyst", "Fibroadenoma", "DCIS", "LCIS"],
    answerIndex: 1,
    correctAnswerText: "Fibroadenoma",
  },

  {
    id: 11,
    image: "images/IMG_0438.jpeg",
    question: `A 50-year-old woman has a rapidly enlarging huge bosselated breast mass stretching the skin. Biopsy suggests malignancy (giant phyllodes tumor scenario).

Best treatment option?`,
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
    question: `A 48-year-old man with chronic sun exposure has a pearly papule/nodule on face with telangiectasia and central ulceration (rodent ulcer appearance).

Most likely diagnosis?`,
    options: ["Basal cell carcinoma", "Malignant melanoma", "Squamous cell carcinoma", "Marjolin ulcer"],
    answerIndex: 0,
    correctAnswerText: "Basal cell carcinoma",
  },

  {
    id: 13,
    image: "images/IMG_0441.jpeg",
    question: `A 22-year-old female has ulnar-sided paresthesia worsened on overhead activity, hand coldness/discoloration, positive Adson’s test. X-ray shows a cervical rib.

Best management?`,
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
    question: `A surgeon uses the suture shown (catgut) for mucosal closure. What TRUE statement about this suture is asked (source/mechanism of absorption)?

Which statement is TRUE?`,
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
    question: `A 10-year-old child has a painless midline anterior neck swelling that moves with deglutition and with protrusion of tongue.

Most likely diagnosis?`,
    options: ["Thyroglossal cyst", "Thyroglossal fistula", "Cold abscess", "Acute lymphadenitis"],
    answerIndex: 0,
    correctAnswerText: "Thyroglossal cyst",
  },

  {
    id: 16,
    image: "images/IMG_0445.jpeg",
    question: `A 32-year-old woman with a thyroid nodule (childhood radiation exposure). FNAC shows cells with optically clear nuclei and nuclear grooves.

FNAC is showing which feature?`,
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
    question: `A 16-year-old girl has a midline reddish nodular swelling at the base of tongue (foramen cecum). No palpable thyroid in neck.

Identify the lesion.`,
    options: ["Lingual thyroid", "Lingual tonsil", "Ranula", "Thyroglossal cyst"],
    answerIndex: 0,
    correctAnswerText: "Lingual thyroid",
  },

  {
    id: 18,
    image: "images/q18.jpeg",
    question: `A 46-year-old woman has a 2.5 cm lump in the upper outer quadrant of right breast with one palpable right axillary node. Which is the most likely first draining nodal basin?`,
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
    image: "images/q19.jpeg",
    question: `A 45-year-old woman has an 8 cm breast mass with skin edema (peau d’orange), mobile ipsilateral axillary nodes and a palpable ipsilateral supraclavicular node. No distant metastasis.

What is the stage group?`,
    options: ["Stage IIB", "Stage IIIA", "Stage IIIC", "Stage IV"],
    answerIndex: 2,
    correctAnswerText: "Stage IIIC",
  },

  {
    id: 20,
    image: "images/q20.jpeg",
    question: `A 58-year-old postmenopausal woman undergoes BCS for a 1.2 cm IDC, node-negative, ER/PR+, HER2-, unifocal, margins negative, no LVI. She asks about shorter RT schedules.

Best statement?`,
    options: [
      "APBI is preferred in young age (<35) and multicentric tumors",
      "Whole breast RT is mandatory only if margins are positive",
      "APBI can be considered in selected low-risk cases like this patient",
      "Postmenopausal ER+ patients should receive tamoxifen only (never aromatase inhibitors)",
    ],
    answerIndex: 2,
    correctAnswerText: "APBI can be considered in selected low-risk cases like this patient",
  },

  {
    id: 21,
    image: "images/q21.jpeg",
    question: `A 60-year-old woman has chronic eczema-like changes of nipple-areola complex with occasional serosanguinous discharge. Biopsy shows large pale vacuolated cells within epidermis.

Most appropriate statement?`,
    options: [
      "Underlying malignancy is uncommon; reassurance is enough",
      "Paget cell has abundant clear cytoplasm and is commonly associated with underlying breast carcinoma",
      "It is due to duct ectasia and is treated with Hadfield’s operation",
      "It is usually bilateral and multicentric like LCIS",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Paget cell has abundant clear cytoplasm and is commonly associated with underlying breast carcinoma",
  },

  {
    id: 22,
    image: "images/q22.jpeg",
    question: `A 28-year-old man undergoes open splenectomy for trauma. Hemostasis was secured. Four hours later he develops tachycardia, falling BP, and increasing drain output with fresh blood.

MOST likely type of hemorrhage?`,
    options: ["Primary hemorrhage", "Reactionary hemorrhage", "Secondary hemorrhage", "Tertiary hemorrhage"],
    answerIndex: 1,
    correctAnswerText: "Reactionary hemorrhage",
  },

  {
    id: 23,
    image: "images/q23.jpeg",
    question: `A 55-year-old man with urosepsis has warm extremities, bounding pulse, wide pulse pressure, tachycardia, hypotension, high lactate.

Which hemodynamic pattern fits early/warm septic shock?`,
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
    image: "images/q24.jpeg",
    question: `A trauma patient arrives with HR 128/min, RR 32/min, confused, cold clammy extremities, and urine output 10 mL/hr.

Estimated blood loss corresponds to which ATLS class of hemorrhagic shock?`,
    options: ["Class I", "Class II", "Class III", "Class IV"],
    answerIndex: 2,
    correctAnswerText: "Class III",
  },

  {
    id: 25,
    image: "images/q25.jpeg",
    question: `A 24-year-old woman with acute gastroenteritis has tachycardia, delayed capillary refill, cool extremities, RR 26/min, BP 110/70. She is anxious but oriented.

Which statement is TRUE?`,
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
    image: "images/q26.jpeg",
    question: `A 72-year-old diabetic man with fever and dysuria has RR 28/min, BP 88/54, HR 124, altered mentation (GCS 13). Suspected urosepsis.

BEST immediate next step?`,
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
    image: "images/q27.jpeg",
    question: `A 30-year-old man develops high fever and hypotension after abdominal perforation. Extremities are warm, bounding pulse, wide pulse pressure. CVP is low-normal.

Which hemodynamic profile fits BEST?`,
    options: [
      "↓CO, ↑SVR, ↑PCWP",
      "↓CO, ↑SVR, ↓PCWP",
      "↑/normal CO, ↓SVR, ↓PCWP",
      "↓CO, ↓SVR, ↑PCWP",
    ],
    answerIndex: 2,
    correctAnswerText: "↑/normal CO, ↓SVR, ↓PCWP",
  },

  {
    id: 28,
    image: "images/q28.jpeg",
    question: `A 42-year-old woman has a suspicious pigmented lesion (ABCDE positive). Which immunohistochemical marker is LEAST likely to be positive in melanoma?`,
    options: ["S-100", "HMB-45", "Vimentin", "Cytokeratin-20"],
    answerIndex: 3,
    correctAnswerText: "Cytokeratin-20",
  },

  {
    id: 29,
    image: "images/q29.jpeg",
    question: `A 58-year-old man has a 2.2 cm SCC of lower lip with perineural invasion.

Best management plan?`,
    options: [
      "Wide excision with 3 mm margin only",
      "Surgical excision with wider margin / Mohs micrographic surgery (high-risk) + nodal evaluation as indicated",
      "Cryotherapy",
      "Radiotherapy alone for all cases",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Surgical excision with wider margin / Mohs micrographic surgery (high-risk) + nodal evaluation as indicated",
  },

  {
    id: 30,
    image: "images/q30.jpeg",
    question: `Brodie–Trendelenburg test: after emptying veins and applying thigh tourniquet, superficial veins fill rapidly from below even with tourniquet on; releasing tourniquet produces no sudden gush from above.

Most likely site of incompetence?`,
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
    image: "images/q31.jpeg",
    question: `A 19-year-old girl has unilateral limb hypertrophy, prominent varicosities since childhood, and a large port-wine stain. Duplex suggests superficial venous malformation.

Most likely diagnosis?`,
    options: ["Park–Weber syndrome", "Klippel–Trénaunay syndrome", "Post-thrombotic syndrome", "Chronic venous insufficiency due to valve degeneration"],
    answerIndex: 1,
    correctAnswerText: "Klippel–Trénaunay syndrome",
  },

  {
    id: 32,
    image: "images/q32.jpeg",
    question: `A 46-year-old woman with long-standing varicose veins has ankle pigmentation, eczema and lipodermatosclerosis. No active ulcer currently.

CEAP Clinical (C) class?`,
    options: ["C3", "C4a", "C4b", "C5"],
    answerIndex: 2,
    correctAnswerText: "C4b",
  },

  {
    id: 33,
    image: "images/q33.jpeg",
    question: `A 58-year-old man has unilateral calf swelling and pain 10 days after major surgery. Modified Wells score indicates DVT is likely.

BEST next step?`,
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
    image: "images/q34.jpeg",
    question: `A 52-year-old chronic smoker has buttock/thigh claudication relieved by rest and erectile dysfunction. Femoral pulses are weak bilaterally.

Most likely diagnosis?`,
    options: [
      "Buerger disease with distal occlusion",
      "Aortoiliac occlusive disease (Leriche syndrome)",
      "Femoro-popliteal occlusion",
      "Lumbar canal stenosis (pseudoclaudication)",
    ],
    answerIndex: 1,
    correctAnswerText: "Aortoiliac occlusive disease (Leriche syndrome)",
  },

  {
    id: 35,
    image: "images/q35.jpeg",
    question: `A 56-year-old smoker/diabetic has intermittent claudication, ABI 0.72, femoro-popliteal atherosclerotic disease. No rest pain/ulcer/gangrene.

Best initial management to improve symptoms and reduce CV risk?`,
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
    image: "images/q36.jpeg",
    question: `A patient with severe rest pain and small ischemic toe ulcers has diffuse distal tibial disease not amenable to bypass. Surgeon suggests lumbar sympathectomy.

Which statement is TRUE?`,
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
    image: "images/q37.jpeg",
    question: `A 62-year-old man with atrial fibrillation develops sudden severe leg pain, pallor, coldness, pulselessness with sensory/motor deficit (acute limb ischemia) starting 4 hours ago.

Best next step?`,
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
    image: "images/q38.jpeg",
    question: `A 59-year-old man gets dizziness and visual blurring during left arm exertion. BP is 25 mmHg lower in left arm; bruit over left supraclavicular area; proximal left subclavian stenosis on duplex.

Which statement is TRUE?`,
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
    image: "images/q39.jpeg",
    question: `A 71-year-old male smoker has an incidental infrarenal AAA on ultrasound measuring 5.8 cm and is asymptomatic.

Best management?`,
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
    image: "images/q40.jpeg",
    question: `A 48-year-old man has sudden tearing chest pain radiating to the back with BP 210/120 and widened mediastinum—suspected aortic dissection.

Best initial medical management while preparing definitive care?`,
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
      "A 68-year-old man with diabetes mellitus and history of smoking undergoes elective hernia repair. On day 7, wound edges look pale and separation is starting. Which factor does NOT adversely affect wound healing?",
    options: [
      "Increasing age",
      "Poor nutrition",
      "Drugs such as corticosteroids",
      "Dryness or wetness of the wound environment",
    ],
    answerIndex: 3,
    correctAnswerText: "Dryness or wetness of the wound environment",
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
      "A 45-year-old woman undergoes elective cholecystectomy with controlled entry into the gastrointestinal tract and no spillage. No pus is present. This surgery is best classified as:",
    options: ["Clean", "Clean-contaminated", "Contaminated", "Dirty"],
    answerIndex: 1,
    correctAnswerText: "Clean-contaminated",
  },

  {
    id: 44,
    image: "",
    question:
      "A 24-year-old woman develops a raised itchy scar 3 months after ear piercing. The lesion progressively enlarges beyond the original wound margin. Most likely diagnosis and best first-line treatment:",
    options: [
      "Hypertrophic scar; silicone sheet and observation",
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
      "A 35-year-old man presents with fever and a painful erythematous swelling over the leg. Margins are ill-defined; the skin is warm and tender. No raised sharply demarcated edge is present. Most likely diagnosis?",
    options: ["Erysipelas", "Cellulitis", "Ecthyma", "Erythema nodosum"],
    answerIndex: 1,
    correctAnswerText: "Cellulitis",
  },

  {
    id: 46,
    image: "",
    question:
      "A 60-year-old man with diabetes mellitus has rapidly progressive severe leg pain, toxic appearance, edema, and skin discoloration. Exploration shows gray necrotic fascia with thin ‘dishwater’ fluid; muscle appears viable. Most likely diagnosis and best management:",
    options: [
      "Gas gangrene; penicillin alone",
      "Necrotizing soft tissue infection (necrotizing fasciitis); urgent surgical debridement plus antibiotics",
      "Cellulitis; oral antibiotics only",
      "Erysipelas; topical antibiotics",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Necrotizing soft tissue infection (necrotizing fasciitis); urgent surgical debridement plus antibiotics",
  },

  {
    id: 47,
    image: "",
    question:
      "A 28-year-old man is planned for renal transplant. Which human leukocyte antigen locus is most important for organ transplantation and tissue typing?",
    options: [
      "Human leukocyte antigen A",
      "Human leukocyte antigen B",
      "Human leukocyte antigen C",
      "Human leukocyte antigen D",
    ],
    answerIndex: 3,
    correctAnswerText: "Human leukocyte antigen D",
  },

  {
    id: 48,
    image: "",
    question:
      "A patient develops sudden anuria immediately after renal transplant. The graft becomes mottled and cyanotic on table. Doppler shows no flow. Most likely type of rejection, mechanism, and key pathological event?",
    options: [
      "Acute rejection; T-cell mediated; interstitial lymphocytes",
      "Hyperacute rejection; preformed antibodies; graft thrombosis",
      "Chronic rejection; cell-mediated immunity; graft fibrosis",
      "Acute rejection; immune complex; vasculitis",
    ],
    answerIndex: 1,
    correctAnswerText: "Hyperacute rejection; preformed antibodies; graft thrombosis",
  },

  {
    id: 49,
    image: "",
    question:
      "A 40-year-old renal transplant recipient on tacrolimus, mycophenolate mofetil, and prednisolone develops fever, lymphadenopathy, and tonsillar enlargement 8 months post-transplant. Biopsy shows post-transplant lymphoproliferative disorder. Most commonly associated virus and most common overall complication of immunosuppression?",
    options: [
      "Cytomegalovirus and infection",
      "Epstein–Barr virus and malignancy",
      "Epstein–Barr virus and infection",
      "Herpes simplex virus and thrombocytopenia",
    ],
    answerIndex: 2,
    correctAnswerText: "Epstein–Barr virus and infection",
  },

  {
    id: 50,
    image: "",
    question:
      "During thyroidectomy, the surgeon is ligating a vessel close to the gland. Which vessel has the closest association with the recurrent laryngeal nerve and hence should be ligated carefully?",
    options: [
      "Superior thyroid artery",
      "Superior thyroid vein",
      "Middle thyroid vein",
      "Inferior thyroid artery",
    ],
    answerIndex: 3,
    correctAnswerText: "Inferior thyroid artery",
  },

  {
    id: 51,
    image: "",
    question:
      "A patient with oral cavity carcinoma has clinically positive cervical lymph nodes (levels one to five). Which procedure removes levels one to five plus sternocleidomastoid muscle, internal jugular vein, and spinal accessory nerve?",
    options: [
      "Selective supraomohyoid neck dissection",
      "Modified radical neck dissection",
      "Radical neck dissection",
      "Central compartment neck dissection",
    ],
    answerIndex: 2,
    correctAnswerText: "Radical neck dissection",
  },

  {
    id: 52,
    image: "",
    question:
      "A 38-year-old woman presents with a solitary thyroid nodule (2 centimeters) and is clinically euthyroid. No compressive symptoms. What is the initial preferred investigation?",
    options: [
      "Fine needle aspiration cytology",
      "Radionuclide scan",
      "Thyroid function test (thyroid stimulating hormone)",
      "Computed tomography of neck",
    ],
    answerIndex: 2,
    correctAnswerText: "Thyroid function test (thyroid stimulating hormone)",
  },

  {
    id: 53,
    image: "",
    question:
      "A 42-year-old woman has a 1.3 centimeter thyroid nodule. Ultrasonography shows solid, very hypoechoic, taller-than-wide, irregular margins, and microcalcifications. She is clinically euthyroid. Best next step?",
    options: [
      "Observe and repeat ultrasonography in 12 months",
      "Fine needle aspiration cytology now",
      "Radionuclide scan first",
      "Start levothyroxine suppression therapy",
    ],
    answerIndex: 1,
    correctAnswerText: "Fine needle aspiration cytology now",
  },

  {
    id: 54,
    image: "",
    question:
      "Thyroid fine needle aspiration cytology report: ‘Follicular neoplasm / suspicious for follicular neoplasm’. Ultrasonography shows a 2.5 centimeter solid nodule with no lymph nodes. Most appropriate management?",
    options: [
      "Repeat fine needle aspiration cytology after 6 weeks",
      "Start anti-thyroid drugs",
      "Hemithyroidectomy (diagnostic lobectomy)",
      "Total thyroidectomy plus central neck dissection",
    ],
    answerIndex: 2,
    correctAnswerText: "Hemithyroidectomy (diagnostic lobectomy)",
  },

  {
    id: 55,
    image: "",
    question:
      "A 28-year-old woman has weight loss, palpitations, heat intolerance, diffuse neck swelling, and prominent eyes. Thyroid stimulating hormone is suppressed and triiodothyronine and thyroxine are high. Thyroid scan shows diffuse increased uptake. Most specific diagnostic test?",
    options: [
      "Anti-thyroid peroxidase antibody",
      "Anti-thyroglobulin antibody",
      "Thyroid stimulating hormone receptor antibody",
      "Serum calcitonin",
    ],
    answerIndex: 2,
    correctAnswerText: "Thyroid stimulating hormone receptor antibody",
  },

  {
    id: 56,
    image: "",
    question:
      "A 36-year-old woman has painful tender thyroid swelling after an upper respiratory infection, fever, and elevated erythrocyte sedimentation rate. Thyroid scan shows decreased uptake and she is transiently thyrotoxic. Most likely diagnosis?",
    options: [
      "Hashimoto thyroiditis",
      "De Quervain (subacute granulomatous) thyroiditis",
      "Riedel thyroiditis",
      "Acute suppurative thyroiditis",
    ],
    answerIndex: 1,
    correctAnswerText: "De Quervain (subacute granulomatous) thyroiditis",
  },

  {
    id: 57,
    image: "",
    question:
      "A woman treated with neck irradiation 10 years ago now has papillary carcinoma of thyroid on cytology. What is the most likely route of spread?",
    options: [
      "Hematogenous spread to bone",
      "Lymphatic spread to cervical lymph nodes",
      "Direct spread to liver",
      "Perineural spread",
    ],
    answerIndex: 1,
    correctAnswerText: "Lymphatic spread to cervical lymph nodes",
  },

  {
    id: 58,
    image: "",
    question:
      "A 22-year-old woman has a thyroid nodule. Cytology shows amyloid in stroma and serum calcitonin is elevated. Her father had pheochromocytoma. Most appropriate pre-operative priority?",
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
      "A 68-year-old woman with long-standing multinodular goitre develops rapid enlargement over 3 weeks with hoarseness and stridor; mass is hard and fixed. Most likely diagnosis?",
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
      "A 19-year-old male has marfanoid habitus, mucosal neuromas on tongue, chronic constipation, and a thyroid nodule. Which multiple endocrine neoplasia syndrome is most likely?",
    options: [
      "Multiple endocrine neoplasia type 1",
      "Multiple endocrine neoplasia type 2A",
      "Multiple endocrine neoplasia type 2B",
      "Multiple endocrine neoplasia type 4",
    ],
    answerIndex: 2,
    correctAnswerText: "Multiple endocrine neoplasia type 2B",
  },

  {
    id: 61,
    image: "",
    question:
      "A newborn has a RET mutation consistent with multiple endocrine neoplasia type 2B. Best management to reduce mortality?",
    options: [
      "Observe and repeat neck ultrasonography yearly",
      "Start levothyroxine suppression therapy",
      "Prophylactic total thyroidectomy in early childhood",
      "Fine needle aspiration cytology when nodule appears",
    ],
    answerIndex: 2,
    correctAnswerText: "Prophylactic total thyroidectomy in early childhood",
  },

  {
    id: 62,
    image: "",
    question:
      "A 46-year-old woman has recurrent renal stones, bone pains, constipation, and depression. Calcium is high, parathyroid hormone is high, phosphate is low-normal. Best test for pre-operative localization?",
    options: [
      "Ultrasonography of neck",
      "Contrast-enhanced computed tomography of neck",
      "Radioiodine scan",
      "Technetium-99m sestamibi scan",
    ],
    answerIndex: 3,
    correctAnswerText: "Technetium-99m sestamibi scan",
  },

  {
    id: 63,
    image: "",
    question:
      "A 55-year-old man with chronic renal failure has bone pain and pruritus. Parathyroid hormone is high, phosphate is high, calcium is low-normal. Mechanism?",
    options: [
      "Autonomous parathyroid adenoma causing hypercalcemia",
      "Hyperphosphatemia plus low calcitriol causing hypocalcemia leading to reactive rise in parathyroid hormone",
      "Parathyroid carcinoma",
      "Increased calcitonin secretion",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Hyperphosphatemia plus low calcitriol causing hypocalcemia leading to reactive rise in parathyroid hormone",
  },

  {
    id: 64,
    image: "",
    question:
      "After parathyroidectomy for severe primary hyperparathyroidism, within 48 hours a patient develops perioral tingling, carpopedal spasm, and prolonged corrected QT interval. Calcium is low and phosphate is low-normal. Cause?",
    options: [
      "Accidental recurrent laryngeal nerve injury",
      "DiGeorge syndrome",
      "Hungry bone syndrome due to rapid uptake of calcium into bone",
      "Hypercalcitoninemia from C-cell hyperplasia",
    ],
    answerIndex: 2,
    correctAnswerText: "Hungry bone syndrome due to rapid uptake of calcium into bone",
  },

  {
    id: 65,
    image: "",
    question:
      "A chronic smoker has squamous cell carcinoma of lower lip involving the oral commissure. After wide excision, defect involves about one-third to one-half of lower lip including commissure. Best reconstruction?",
    options: [
      "Karapandzic flap",
      "Abbe–Estlander flap",
      "Bernard–Burow flap",
      "Free radial forearm flap",
    ],
    answerIndex: 1,
    correctAnswerText: "Abbe–Estlander flap",
  },

  {
    id: 66,
    image: "",
    question:
      "A 52-year-old man chews tobacco and smokes. He has a well-demarcated red velvety patch on buccal mucosa that does not scrape off. Most appropriate next step?",
    options: ["Reassure and observe", "Topical antifungals", "Biopsy the lesion", "Oral steroids trial"],
    answerIndex: 2,
    correctAnswerText: "Biopsy the lesion",
  },

  {
    id: 67,
    image: "",
    question:
      "A 40-year-old woman has a slow-growing painless parotid swelling for 2 years. Facial nerve is intact. Most likely diagnosis?",
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
    question:
      "A well-circumscribed parotid mass has cytology suggesting pleomorphic adenoma. Surgeon proposes enucleation. Best response?",
    options: [
      "Enucleation is adequate; recurrence is rare",
      "Enucleation is preferred if tumor is in superficial lobe",
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
    question:
      "A man has recurrent pain and swelling in the submandibular region during meals. Which statement is most accurate?",
    options: [
      "Parotid gland is the most common gland involved",
      "Most salivary stones are radiolucent",
      "Sialography is contraindicated in acute sialadenitis",
      "Ultrasound is contraindicated in suspected stone",
    ],
    answerIndex: 2,
    correctAnswerText: "Sialography is contraindicated in acute sialadenitis",
  },

  {
    id: 70,
    image: "",
    question:
      "A 45-year-old woman has dry mouth and gritty sensation in eyes for 1 year with enlarged parotids. Which finding is most consistent with the diagnosis?",
    options: [
      "Anti-double stranded deoxyribonucleic acid positivity",
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
    question:
      "After tangential excision of a burn, a split-thickness skin graft is applied. On post-operative day 2, graft looks pale, lifts easily, and there is fluid collection under it; no foul smell or pus. Most common cause of graft failure?",
    options: [
      "Acute rejection",
      "Hematoma or seroma under the graft",
      "Infection with group A beta-hemolytic streptococcus",
      "Hypergranulation tissue",
    ],
    answerIndex: 1,
    correctAnswerText: "Hematoma or seroma under the graft",
  },

  {
    id: 72,
    image: "",
    question:
      "A term baby has unilateral left cleft lip. Parents ask best timing for repair. Which statement is most accurate regarding cleft lip repair?",
    options: [
      "It is due to failure of fusion of maxillary process with lateral nasal process",
      "Ideal time for surgery is 6–12 months",
      "Cleft lip is commonly associated with Pierre Robin sequence",
      "Surgery is ideally done when the baby satisfies the rule of tens",
    ],
    answerIndex: 3,
    correctAnswerText: "Surgery is ideally done when the baby satisfies the rule of tens",
  },

  {
    id: 73,
    image: "",
    question:
      "A 9-month-old child has isolated cleft palate with feeding difficulty and hypernasal speech developing. Best management statement?",
    options: [
      "Repair is ideally done at 2–3 years to allow maxillofacial growth",
      "Soft palate is repaired first around 6 months, followed by hard palate later",
      "Primary goal is cosmetic appearance of lips and nose",
      "Cleft palate is most commonly repaired by Millard rotation-advancement technique",
    ],
    answerIndex: 1,
    correctAnswerText: "Soft palate is repaired first around 6 months, followed by hard palate later",
  },

  {
    id: 74,
    image: "",
    question:
      "A thin female has episodic gross hematuria and left flank pain worse on standing. Imaging shows left renal vein narrowed between aorta and superior mesenteric artery with proximal dilatation and left-sided varicocele. Most likely mechanism?",
    options: [
      "Compression of left renal vein between aorta and superior mesenteric artery",
      "Compression of right renal vein between inferior vena cava and aorta",
      "Compression of left ureter at pelvic brim by common iliac artery",
      "Obstruction at pelviureteric junction due to aberrant lower pole vessel",
    ],
    answerIndex: 0,
    correctAnswerText:
      "Compression of left renal vein between aorta and superior mesenteric artery",
  },

  {
    id: 75,
    image: "",
    question:
      "A man has acute colicky flank pain radiating to groin. Non-contrast computed tomography of kidney, ureter, and bladder shows a 4 millimeter ureteric stone stuck near the pelvic brim with proximal hydroureteronephrosis. The stone is most likely impacted at which ureteric constriction?",
    options: [
      "Pelviureteric junction",
      "Crossing of ureter over common iliac vessels at the pelvic brim",
      "Ureterovesical junction",
      "Intramural ureter at bladder trigone",
    ],
    answerIndex: 1,
    correctAnswerText: "Crossing of ureter over common iliac vessels at the pelvic brim",
  },

  {
    id: 76,
    image: "",
    question:
      "An infant has persistent hydronephrosis. Intravenous pyelogram suggests possible pelviureteric junction obstruction but functional obstruction is uncertain. Urologist plans an invasive pressure-flow test. Which combination is correct?",
    options: [
      "Whitaker test is non-invasive; definitive surgery is Boari flap",
      "Whitaker test is invasive; definitive surgery is Anderson–Hynes dismembered pyeloplasty",
      "Whitaker test confirms obstruction by bladder pressure being greater than renal pelvis pressure; definitive surgery is ureteric reimplantation",
      "Antenatal hydronephrosis never resolves spontaneously; immediate nephrectomy is preferred",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Whitaker test is invasive; definitive surgery is Anderson–Hynes dismembered pyeloplasty",
  },

  {
    id: 77,
    image: "",
    question:
      "A 40-year-old man has severe dysuria, frequency, weight loss, and sterile pyuria with repeated negative routine culture. Past pulmonary tuberculosis. Best next diagnostic test to confirm genitourinary tuberculosis?",
    options: [
      "Single random urine acid-fast bacillus smear",
      "Three consecutive early-morning urine samples for acid-fast bacilli",
      "Serum prostate-specific antigen",
      "Urine eosinophils",
    ],
    answerIndex: 1,
    correctAnswerText: "Three consecutive early-morning urine samples for acid-fast bacilli",
  },

  {
    id: 78,
    image: "",
    question:
      "A woman has recurrent urinary tract infections, urine pH is alkaline, and a large branching renal pelvis stone is seen. Culture grows Proteus. Most likely stone composition and medical prevention?",
    options: [
      "Calcium oxalate; acetazolamide",
      "Struvite (magnesium ammonium phosphate); acetohydroxamic acid",
      "Uric acid; thiazide",
      "Cystine; allopurinol",
    ],
    answerIndex: 1,
    correctAnswerText: "Struvite (magnesium ammonium phosphate); acetohydroxamic acid",
  },

  {
    id: 79,
    image: "",
    question:
      "A woman presents with sudden severe flank pain, hypotension, and palpable flank mass. Computed tomography shows a renal mass with fat density and perirenal hemorrhage. Most likely diagnosis and named syndrome?",
    options: [
      "Renal cell carcinoma; Stauffer syndrome",
      "Renal abscess; psoas sign",
      "Angiomyolipoma; Wunderlich syndrome",
      "Wilms tumor; Beckwith–Wiedemann syndrome",
    ],
    answerIndex: 2,
    correctAnswerText: "Angiomyolipoma; Wunderlich syndrome",
  },

  {
    id: 80,
    image: "",
    question:
      "A 3-year-old child has painless abdominal mass, mild hematuria, hypertension, aniridia, and developmental delay. Most likely syndrome and genetic locus?",
    options: [
      "Beckwith–Wiedemann syndrome; deletion at chromosome 11p13",
      "WAGR syndrome; deletion at chromosome 11p13",
      "Denys–Drash syndrome; duplication at chromosome 11p15",
      "WAGR syndrome; duplication at chromosome 11p15",
    ],
    answerIndex: 1,
    correctAnswerText: "WAGR syndrome; deletion at chromosome 11p13",
  },

  {
    id: 81,
    image: "",
    question:
      "A man with pelvic fracture has blood at urethral meatus and inability to void. Best next step before any urethral catheterization?",
    options: [
      "Pass Foley catheter gently; if fails, proceed to cystoscopy",
      "Suprapubic catheter immediately without imaging",
      "Retrograde urethrogram before any urethral catheterization",
      "Computed tomography abdomen with oral contrast first",
    ],
    answerIndex: 2,
    correctAnswerText: "Retrograde urethrogram before any urethral catheterization",
  },

  {
    id: 82,
    image: "",
    question:
      "Newborn male has ventrally placed urethral opening with dorsal hooded prepuce and ventral curvature. Which statement regarding hypospadias is correct?",
    options: [
      "Urethral meatus is on dorsal side; dorsal hooded prepuce is absent",
      "Most common and mildest type is glanular; most severe is perineal",
      "Surgery should be done immediately in the first month of life",
      "Circumcision is recommended at birth to facilitate hygiene",
    ],
    answerIndex: 1,
    correctAnswerText: "Most common and mildest type is glanular; most severe is perineal",
  },

  {
    id: 83,
    image: "",
    question:
      "A man with long-standing lower urinary tract symptoms reports two-stage micturition: after finishing urination he presses lower abdomen and passes more urine; symptoms vary with posture. Cystoscopy shows a bladder outpouching. Most characteristic feature of bladder diverticulum?",
    options: [
      "Continuous dribbling since childhood",
      "Two-stage micturition with increased post-void residual that changes with position",
      "Severe colicky flank pain radiating to groin",
      "Pneumaturia after meals",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Two-stage micturition with increased post-void residual that changes with position",
  },

  {
    id: 84,
    image: "",
    question:
      "A 66-year-old man has hesitancy, weak stream, nocturia. Peak urinary flow rate is 8 milliliters per second and post-void residual is 140 milliliters. Best initial pharmacotherapy for rapid symptomatic relief?",
    options: ["Finasteride", "Dutasteride", "Tamsulosin", "Sildenafil"],
    answerIndex: 2,
    correctAnswerText: "Tamsulosin",
  },

  {
    id: 85,
    image: "",
    question:
      "A man has recurrent urinary tract infections, perineal pain, and dysuria for months. After prostatic massage, the post-massage urine specimen shows markedly higher bacteria and pus cells with positive culture. This diagnostic test is:",
    options: [
      "Retrograde urethrography",
      "Meares–Stamey four-glass test",
      "Whitaker test",
      "Allen test",
    ],
    answerIndex: 1,
    correctAnswerText: "Meares–Stamey four-glass test",
  },

  {
    id: 86,
    image: "",
    question:
      "A term male newborn has empty right hemiscrotum; testis palpable in inguinal canal. Which statement is most correct?",
    options: [
      "Testis is near kidney at 7th month and reaches scrotum by 8th month",
      "At birth, testes should be in scrotum; undescended testis increases risk of torsion, trauma, and infertility",
      "Processus vaginalis forms the fibrous cord that guides descent",
      "Remnant of gubernaculum becomes tunica vaginalis",
    ],
    answerIndex: 1,
    correctAnswerText:
      "At birth, testes should be in scrotum; undescended testis increases risk of torsion, trauma, and infertility",
  },

  {
    id: 87,
    image: "",
    question:
      "A 26-year-old sexually active man has acute scrotal pain, dysuria, and urethral discharge. Fever is mild and cremasteric reflex is present. Most likely causative organism?",
    options: [
      "Escherichia coli",
      "Proteus mirabilis",
      "Chlamydia trachomatis",
      "Mycobacterium tuberculosis",
    ],
    answerIndex: 2,
    correctAnswerText: "Chlamydia trachomatis",
  },

  {
    id: 88,
    image: "",
    question:
      "A 45-year-old man has painless scrotal swelling for 1 year. It is fluctuant, transilluminates, and you can get above the swelling. Ultrasonography confirms fluid around the testis. Definitive treatment?",
    options: [
      "Aspiration and sclerotherapy in all cases",
      "Herniotomy with mesh",
      "Jaboulay procedure (excision and eversion of sac)",
      "Orchiectomy",
    ],
    answerIndex: 2,
    correctAnswerText: "Jaboulay procedure (excision and eversion of sac)",
  },

  {
    id: 89,
    image: "",
    question:
      "A 28-year-old man has painless testicular mass with elevated alpha-fetoprotein and retroperitoneal nodes. Histology is non-seminomatous germ cell tumor. Most appropriate statement about management?",
    options: [
      "Seminoma is radioresistant; treat with retroperitoneal lymph node dissection first always",
      "Non-seminomatous germ cell tumor commonly needs chemotherapy with bleomycin, etoposide, and cisplatin; retroperitoneal lymph node dissection has a role in nodal disease or residual masses",
      "Alpha-fetoprotein elevation is typical for pure seminoma",
      "In elderly, most common testicular tumor is seminoma",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Non-seminomatous germ cell tumor commonly needs chemotherapy with bleomycin, etoposide, and cisplatin; retroperitoneal lymph node dissection has a role in nodal disease or residual masses",
  },

  {
    id: 90,
    image: "",
    question:
      "A man with past pulmonary tuberculosis has sterile pyuria, frequency, and dull flank pain. Which of the following is NOT a radiological feature of renal tuberculosis?",
    options: ["Golf-hole ureter", "Thimble bladder", "Putty kidney", "Horseshoe kidney"],
    answerIndex: 3,
    correctAnswerText: "Horseshoe kidney",
  },

{
    id: 91,
    image: "",
    question:
      "Which of the following genes is most commonly associated with the development of breast carcinoma?",
    options: ["BRCA 1", "BRCA 2", "PTEN", "KRAS"],
    answerIndex: 0,
    correctAnswerText: "BRCA 1",
  },
  {
    id: 92,
    image: "",
    question: "Which quadrant of the breast contains the greatest amount of tissue?",
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
    question:
      "Which among the following criteria is suggestive of locally advanced thyroid cancer?",
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
    question:
      "Which condition refers to angiosarcoma developing in the same-side arm as a complication of long-standing post-surgical lymphoedema?",
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
    question:
      "Which among the following is not an important anatomical relation of the submandibular gland?",
    options: ["Lingual nerve", "Posterior facial vein", "Facial artery", "Hypoglossal nerve"],
    answerIndex: 1,
    correctAnswerText: "Posterior facial vein",
  },
  {
    id: 96,
    image: "images/IMG_0336.jpeg",
    question:
      "A 77-year-old man with biopsy-proven prostate cancer and a serum prostate-specific antigen level of 67 nanograms per millilitre undergoes a bone scan. What is the most likely stage?",
    options: ["Limited to prostate", "Locally advanced", "Metastatic", "Cannot be commented upon"],
    answerIndex: 2,
    correctAnswerText: "Metastatic",
  },
  {
    id: 97,
    image: "",
    question:
      "A patient has thyroid cancer with a 3 centimetre tumour and unilateral metastasis to Delphian lymph nodes, with no distant metastasis. What is the correct Tumour–Node–Metastasis stage?",
    options: ["T2N1aM0", "T1N1aM0", "T2N1bM0", "T1N1bM0"],
    answerIndex: 0,
    correctAnswerText: "T2N1aM0",
  },
  {
    id: 98,
    image: "",
    question:
      "Which of the following statements is NOT true regarding Autosomal Dominant Polycystic Kidney Disease?",
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
    question: "Congenital condition shown in the image is?",
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
    question:
      "Which among the following organisms are not responsible for acute suppurative thyroiditis?",
    options: ["Staphylococcus", "Streptococcus", "Campylobacter", "Clostridium"],
    answerIndex: 2,
    correctAnswerText: "Campylobacter",
  },
  {
    id: 101,
    image: "",
    question:
      "Which among the following is not a preventive technique for Frey’s syndrome following parotidectomy?",
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
    question:
      "A young male patient had urethral injury after a road traffic accident. The following procedure has been performed (as shown in the images). What is the likely procedure?",
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
    question:
      "Where does the lymphatic spread occur for a tumour in the posterior one-third of the breast?",
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
    question:
      "In which of the following conditions of the breast disease is magnetic resonance imaging scan not useful?",
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
    question:
      "A 6-year-old boy came with a history of recurrent urinary tract infections. Imaging was done and is shown. What is the diagnosis?",
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
    question:
      "A 45-year-old patient complains of pain on one side of the neck that worsens with eating. Ultrasound imaging of the salivary glands is shown. What is the most likely diagnosis?",
    options: ["Foreign body", "Sialolithiasis", "Osteoma of floor of mouth", "Cervical lymphadenopathy"],
    answerIndex: 1,
    correctAnswerText: "Sialolithiasis",
  },
  {
    id: 107,
    image: "",
    question: "Which of the following is the most common type of shock?",
    options: ["Hypovolemic", "Cardiogenic", "Obstructive", "Distributive"],
    answerIndex: 0,
    correctAnswerText: "Hypovolemic",
  },
  {
    id: 108,
    image: "",
    question:
      "During a routine antenatal checkup, a pregnant woman in her third trimester is noticed to have accessory nipples. Which of the following does this condition refer to?",
    options: ["Polymazia", "Polythelia", "Symmastia", "Supernumerary mazia"],
    answerIndex: 1,
    correctAnswerText: "Polythelia",
  },
  {
    id: 109,
    image: "",
    question:
      "A patient has thyroid cancer with a 3 centimetre tumour and unilateral metastasis to Delphian lymph nodes, with no distant metastasis. What is the correct Tumour–Node–Metastasis stage?",
    options: ["T2N1aM0", "T1N1aM0", "T2N1bM0", "T1N1bM0"],
    answerIndex: 0,
    correctAnswerText: "T2N1aM0",
  },
  {
    id: 110,
    image: "",
    question:
      "A middle-aged woman presents with flank pain and painful micturition and is diagnosed with ureteric colic due to ureteric calculi. What is the best diagnostic modality in this case?",
    options: [
      "Non-contrast computed tomography of the kidney, ureters, and bladder",
      "Contrast-enhanced computed tomography",
      "Ultrasonography of the kidney, ureters, and bladder",
      "Ureteroscopy",
    ],
    answerIndex: 0,
    correctAnswerText: "Non-contrast computed tomography of the kidney, ureters, and bladder",
  },

{
    id: 111,
    image: "",
    question:
      "A patient with unilateral breast cancer is started on tamoxifen. This will increase the risk of?",
    options: ["Ovarian cancer", "Endometrial cancer", "Breast cancer on the other side", "Cervical cancer"],
    answerIndex: 1,
    correctAnswerText: "Endometrial cancer",
  },
  {
    id: 112,
    image: "images/IMG_0448.jpeg",
    question:
      "A 62-year-old man with long-standing diabetes mellitus presents with a non-healing ulcer on the foot with progressive black discoloration of multiple toes. The toes look dry, shriveled, and black with a clear line of demarcation. What is the most likely underlying cause of this presentation?",
    options: ["Venous ulcer", "Pressure sore", "Chronic arterial insufficiency", "Diabetic neuropathy"],
    answerIndex: 2,
    correctAnswerText: "Chronic arterial insufficiency",
  },
  {
    id: 113,
    image: "",
    question: "Dohlman’s procedure is done for which of the following conditions?",
    options: ["Meckel’s diverticulum", "Zenker’s diverticulum", "Bochdalek hernia", "Ménétrier disease"],
    answerIndex: 1,
    correctAnswerText: "Zenker’s diverticulum",
  },
  {
    id: 114,
    image: "",
    question: "Which is the most common organism causing acute bacterial prostatitis?",
    options: ["Enterococcus", "Proteus", "Streptococcus agalactiae", "Escherichia coli"],
    answerIndex: 3,
    correctAnswerText: "Escherichia coli",
  },
  {
    id: 115,
    image: "images/IMG_0380.jpeg",
    question: "Identify the image:",
    options: ["Ileal diverticulum", "Bladder exstrophy", "Omphalocele", "Gastroschisis"],
    answerIndex: 1,
    correctAnswerText: "Bladder exstrophy",
  },
  {
    id: 116,
    image: "",
    question:
      "A farmer has a brownish lesion over the plantar aspect of the foot for 2 years, increasing in size. Excision biopsy shows cells with large pleomorphic nuclei and numerous mitotic figures. Which of the following will be used as a marker for this condition?",
    options: ["S-100", "CK-20", "CK-10", "Vimentin"],
    answerIndex: 0,
    correctAnswerText: "S-100",
  },
  {
    id: 117,
    image: "",
    question: "What is the recommended age for starting screening mammography?",
    options: ["40 years", "45 years", "50 years", "55 years"],
    answerIndex: 0,
    correctAnswerText: "40 years",
  },
  {
    id: 118,
    image: "images/IMG_0388.jpeg",
    question:
      "The image shows methylene blue dye being injected in the peritumoral region. What is this procedure useful for?",
    options: ["Localizing the tumor", "Identifying the margins", "Sentinel lymph node biopsy", "Identifying metastasis"],
    answerIndex: 2,
    correctAnswerText: "Sentinel lymph node biopsy",
  },
  {
    id: 119,
    image: "images/IMG_0391.jpeg",
    question:
      "A 40-year-old woman has perioral numbness and tingling in fingers one year after parathyroidectomy. Electrocardiogram shows changes consistent with hypocalcaemia. What will be your immediate management?",
    options: ["Beta blockers", "Teriparatide", "Intravenous bisphosphonates", "Intravenous calcium gluconate"],
    answerIndex: 3,
    correctAnswerText: "Intravenous calcium gluconate",
  },
  {
    id: 120,
    image: "images/IMG_0395.jpeg",
    question: "Identify the instrument shown in the image.",
    options: ["Allis tissue forceps", "Babcock’s forceps", "Lane’s tissue holding forceps", "Kocher’s hemostatic forceps"],
    answerIndex: 1,
    correctAnswerText: "Babcock’s forceps",
  },

];
