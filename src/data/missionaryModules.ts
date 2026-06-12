export interface VocabPair { en: string; es: string; sw: string; pt: string }

export interface MissionaryModule {
  id: string
  emoji: string
  title: string
  tagline: string
  color: string
  vocab: VocabPair[]
  samplePhrase: { en: string; es: string; sw: string; pt: string }
  scenario: string
}

export const MISSIONARY_COLOR = '#7C3AED'

export const MISSIONARY_MODULES: MissionaryModule[] = [
  {
    id: 'restoration',
    emoji: '📖',
    title: 'Restoration & First Lessons',
    tagline: 'Introduce the Restored Gospel with clarity and confidence from the first door.',
    color: MISSIONARY_COLOR,
    vocab: [
      { en: 'restoration', es: 'la restauración', sw: 'urejesho', pt: 'a restauração' },
      { en: 'prophet', es: 'el profeta', sw: 'nabii', pt: 'o profeta' },
      { en: 'revelation', es: 'la revelación', sw: 'ufunuo', pt: 'a revelação' },
      { en: 'priesthood', es: 'el sacerdocio', sw: 'ukuhani', pt: 'o sacerdócio' },
      { en: 'apostasy', es: 'la apostasía', sw: 'uasi wa dini', pt: 'a apostasia' },
      { en: 'First Vision', es: 'la Primera Visión', sw: 'Maono ya Kwanza', pt: 'a Primeira Visão' },
      { en: 'authority', es: 'la autoridad', sw: 'mamlaka', pt: 'a autoridade' },
      { en: 'church', es: 'la iglesia', sw: 'kanisa', pt: 'a igreja' },
      { en: 'original', es: 'original / primitivo', sw: 'wa asili', pt: 'original / primitivo' },
      { en: 'truth', es: 'la verdad', sw: 'ukweli', pt: 'a verdade' },
    ],
    samplePhrase: {
      en: 'God called a prophet to restore His church on the earth.',
      es: 'Dios llamó a un profeta para restaurar Su iglesia en la tierra.',
      sw: 'Mungu aliita nabii kurejesha kanisa lake duniani.',
      pt: 'Deus chamou um profeta para restaurar Sua igreja na terra.',
    },
    scenario: 'First discussion, door approach, street contact, member referral',
  },
  {
    id: 'gospel-of-jesus-christ',
    emoji: '✝️',
    title: 'Gospel of Jesus Christ',
    tagline: 'Teach the five principles and ordinances that lead to salvation.',
    color: MISSIONARY_COLOR,
    vocab: [
      { en: 'faith', es: 'la fe', sw: 'imani', pt: 'a fé' },
      { en: 'repentance', es: 'el arrepentimiento', sw: 'toba', pt: 'o arrependimento' },
      { en: 'baptism', es: 'el bautismo', sw: 'ubatizo', pt: 'o batismo' },
      { en: 'Holy Ghost', es: 'el Espíritu Santo', sw: 'Roho Mtakatifu', pt: 'o Espírito Santo' },
      { en: 'endure to the end', es: 'perseverar hasta el final', sw: 'kuendelea hadi mwisho', pt: 'perseverar até o fim' },
      { en: 'sin', es: 'el pecado', sw: 'dhambi', pt: 'o pecado' },
      { en: 'forgiveness', es: 'el perdón', sw: 'msamaha', pt: 'o perdão' },
      { en: 'commandment', es: 'el mandamiento', sw: 'amri', pt: 'o mandamento' },
      { en: 'obedience', es: 'la obediencia', sw: 'utii', pt: 'a obediência' },
      { en: 'grace', es: 'la gracia', sw: 'neema', pt: 'a graça' },
    ],
    samplePhrase: {
      en: 'Jesus Christ atoned for our sins so we can be forgiven and return to God.',
      es: 'Jesucristo expió nuestros pecados para que podamos ser perdonados y regresar a Dios.',
      sw: 'Yesu Kristo alitoa upatanisho kwa dhambi zetu ili tuweze kusamehewa na kurudi kwa Mungu.',
      pt: 'Jesus Cristo expiou nossos pecados para que possamos ser perdoados e retornar a Deus.',
    },
    scenario: 'Second and third discussions, commitment to the gospel principles',
  },
  {
    id: 'plan-of-salvation',
    emoji: '🌟',
    title: 'Plan of Salvation',
    tagline: 'Explain where we came from, why we are here, and where we are going.',
    color: MISSIONARY_COLOR,
    vocab: [
      { en: 'plan of salvation', es: 'el plan de salvación', sw: 'mpango wa wokovu', pt: 'o plano de salvação' },
      { en: 'premortal life', es: 'la vida preterrenal', sw: 'maisha ya kabla ya kuzaliwa', pt: 'a vida pré-mortal' },
      { en: 'spirit world', es: 'el mundo de los espíritus', sw: 'ulimwengu wa roho', pt: 'o mundo dos espíritos' },
      { en: 'resurrection', es: 'la resurrección', sw: 'ufufuko', pt: 'a ressurreição' },
      { en: 'judgment', es: 'el juicio', sw: 'hukumu', pt: 'o julgamento' },
      { en: 'eternal life', es: 'la vida eterna', sw: 'uzima wa milele', pt: 'a vida eterna' },
      { en: 'purpose', es: 'el propósito', sw: 'madhumuni / kusudi', pt: 'o propósito' },
      { en: 'agency', es: 'el albedrío / la agencia', sw: 'uhuru wa kuchagua / maamuzi', pt: 'o livre-arbítrio / a agência' },
      { en: 'spirit', es: 'el espíritu', sw: 'roho', pt: 'o espírito' },
      { en: 'family', es: 'la familia', sw: 'familia', pt: 'a família' },
    ],
    samplePhrase: {
      en: 'Before we were born on earth, we lived with God as spirit children. We came here to gain a body and grow.',
      es: 'Antes de nacer en la tierra, vivíamos con Dios como hijos espirituales. Vinimos aquí para obtener un cuerpo y crecer.',
      sw: 'Kabla ya kuzaliwa duniani, tuliishi na Mungu kama watoto wa roho. Tulikuja hapa kupata mwili na kukua.',
      pt: 'Antes de nascer na terra, vivíamos com Deus como filhos espirituais. Viemos aqui para obter um corpo e crescer.',
    },
    scenario: 'Plan of Salvation discussion, pre-mortal life, purpose of mortality',
  },
  {
    id: 'commandments',
    emoji: '📜',
    title: 'Commandments & Commitments',
    tagline: 'Explain the law of chastity, Word of Wisdom, Sabbath, and tithing clearly.',
    color: MISSIONARY_COLOR,
    vocab: [
      { en: 'law of chastity', es: 'la ley de castidad', sw: 'sheria ya usafi wa maadili', pt: 'a lei de castidade' },
      { en: 'Word of Wisdom', es: 'la Palabra de Sabiduría', sw: 'Neno la Hekima', pt: 'a Palavra de Sabedoria' },
      { en: 'Sabbath day', es: 'el día de reposo / el día domingo', sw: 'Siku ya Sabato / Jumapili', pt: 'o dia de sábado / o domingo' },
      { en: 'tithing', es: 'el diezmo', sw: 'zaka', pt: 'o dízimo' },
      { en: 'fasting', es: 'el ayuno', sw: 'kufunga / saumu', pt: 'o jejum' },
      { en: 'prayer', es: 'la oración', sw: 'sala / maombi', pt: 'a oração' },
      { en: 'scripture', es: 'las escrituras', sw: 'maandiko matakatifu', pt: 'as escrituras' },
      { en: 'temple', es: 'el templo', sw: 'hekalu', pt: 'o templo' },
      { en: 'covenant', es: 'el convenio', sw: 'agano / kiapo', pt: 'a aliança' },
      { en: 'commitment', es: 'el compromiso', sw: 'ahadi / wajibu', pt: 'o compromisso' },
    ],
    samplePhrase: {
      en: 'The law of chastity means sexual relations only between a man and a woman who are legally married.',
      es: 'La ley de castidad significa relaciones sexuales únicamente entre un hombre y una mujer que estén casados legalmente.',
      sw: 'Sheria ya usafi wa maadili inamaanisha mahusiano ya ngono tu kati ya mwanaume na mwanamke walioolewa kisheria.',
      pt: 'A lei de castidade significa relações sexuais apenas entre um homem e uma mulher que estejam legalmente casados.',
    },
    scenario: 'Commitment invitation, commandment discussion, baptismal interview prep',
  },
]
