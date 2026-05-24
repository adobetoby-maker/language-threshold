export interface VocabPair { en: string; es: string; sw: string }

export interface ClimbingModule {
  id: string
  emoji: string
  title: string
  tagline: string
  color: string
  vocab: VocabPair[]
  samplePhrase: { en: string; es: string; sw: string }
  scenario: string
}

export const CLIMBING_COLOR = '#4CAF7D'

export const CLIMBING_MODULES: ClimbingModule[] = [
  {
    id: 'gear',
    emoji: '🪢',
    title: 'Gear & Equipment',
    tagline: 'Name every piece of gear, explain fit and function, and handle the gear room with confidence.',
    color: CLIMBING_COLOR,
    vocab: [
      { en: 'rope', es: 'la cuerda', sw: 'kamba' },
      { en: 'harness', es: 'el arnés', sw: 'mkanda wa usalama wa kupanda / harness' },
      { en: 'carabiner', es: 'el mosquetón', sw: 'ndoano ya usalama / karabina' },
      { en: 'helmet', es: 'el casco', sw: 'kofia ngumu / helmeti' },
      { en: 'chalk / chalk bag', es: 'el magnesio / la bolsa de magnesio', sw: 'chokaa / mfuko wa chokaa' },
      { en: 'climbing shoes', es: 'los pies de gato / las zapatillas', sw: 'viatu vya kupanda' },
      { en: 'belay device', es: 'el asegurador / el freno', sw: 'kifaa cha kusimamia kamba / belay device' },
      { en: 'quickdraw', es: 'la cinta exprés / el express', sw: 'kiunganisho cha haraka / express' },
      { en: 'crash pad', es: 'la colchoneta de caída', sw: 'godoro la usalama / pad ya kuangukia' },
      { en: 'anchor', es: 'el anclaje / la reunión', sw: 'nanga / sehemu ya kufunga kamba' },
    ],
    samplePhrase: {
      en: 'Your harness fits correctly when you can fit two fingers under the waist belt.',
      es: 'El arnés está bien ajustado cuando puedes meter dos dedos bajo el cinturón de la cintura.',
      sw: 'Mkanda wako wa usalama unafaa vizuri unapoweza kuweka vidole viwili chini ya ukanda wa kiuno.',
    },
    scenario: 'Gear room, equipment rental, guiding beginner climbers',
  },
  {
    id: 'commands',
    emoji: '🧗',
    title: 'Safety Commands',
    tagline: 'Belay communication, safety checks, and emergency calls — the words that keep your partner safe.',
    color: CLIMBING_COLOR,
    vocab: [
      { en: 'On belay?', es: '¿Listo para asegurar?', sw: 'Uko tayari kusimamia kamba?' },
      { en: 'Belay on', es: 'Asegurado / Listo', sw: 'Kamba imesimamishwa / Niko tayari' },
      { en: 'Climbing!', es: '¡Escalando! / ¡Subo!', sw: 'Napanda! / Ninaanza kupanda!' },
      { en: 'Climb on', es: '¡Sube! / ¡Adelante!', sw: 'Panda! / Endelea!' },
      { en: 'Take! / Hold me!', es: '¡Coge! / ¡Ténme!', sw: 'Shika! / Nishike!' },
      { en: 'Slack!', es: '¡Da cuerda! / ¡Suelta!', sw: 'Legeza kamba! / Achia kidogo!' },
      { en: 'Watch me!', es: '¡Mírame! / ¡Atención!', sw: 'Niangalie! / Makini!' },
      { en: 'Falling!', es: '¡Me caigo! / ¡Caigo!', sw: 'Naanguka! / Ninaanguka!' },
      { en: 'Off belay', es: 'Desasegurado / Fuera de seguro', sw: 'Kamba imeachiwa / Siyo kwenye usalama' },
      { en: 'Lower me!', es: '¡Bájame! / ¡Baja!', sw: 'Nishushe! / Niteremsha!' },
    ],
    samplePhrase: {
      en: 'Always confirm "Belay on" before you call "Climbing!" — never skip the check.',
      es: 'Confirma siempre "Asegurado" antes de decir "¡Escalando!" — nunca omitas la comprobación.',
      sw: 'Thibitisha "Kamba imesimamishwa" kabla ya kusema "Napanda!" — usipige hatua bila uthibitisho huo.',
    },
    scenario: 'Indoor gym, sport climbing, guide and client communication',
  },
  {
    id: 'route-reading',
    emoji: '🗺️',
    title: 'Route Reading & Technique',
    tagline: 'Grade a route, describe movement, and coach a climber — all in Swahili.',
    color: CLIMBING_COLOR,
    vocab: [
      { en: 'route / problem', es: 'la vía / el bloque', sw: 'njia / tatizo (bouldering)' },
      { en: 'grade / difficulty', es: 'el grado / la dificultad', sw: 'daraja / ugumu' },
      { en: 'hold', es: 'la presa / el agarre', sw: 'shikamano / mahali pa kushika' },
      { en: 'overhang', es: 'el desplome / el extraplomo', sw: 'ukuta ulioelekezwa mbele / overhang' },
      { en: 'slab', es: 'la placa', sw: 'ukuta laini wa mwinuko kidogo / slab' },
      { en: 'to rest', es: 'descansar / recuperarse', sw: 'kupumzika / kupumua' },
      { en: 'to fall', es: 'caer / caerse', sw: 'kuanguka' },
      { en: 'top rope', es: 'la cuerda de arriba / el top rope', sw: 'kamba kutoka juu / top rope' },
      { en: 'lead climbing', es: 'la escalada de cabeza / el lead', sw: 'kupanda huku ukifunga kamba / lead climbing' },
      { en: 'bouldering', es: 'el boulder / la escalada de bloque', sw: 'kupanda bila kamba kwa urefu mfupi / bouldering' },
    ],
    samplePhrase: {
      en: 'This is a slab route — use your feet on the small holds and keep your hips close to the wall.',
      es: 'Esta vía es una placa — usa los pies en las presas pequeñas y mantén las caderas cerca de la pared.',
      sw: 'Hii ni njia ya slab — tumia miguu yako kwenye vishikamano vidogo na uweke nyonga zako karibu na ukuta.',
    },
    scenario: 'Route setting, coaching sessions, competition announcements',
  },
]

export interface GearPhoto {
  name: string
  es: string
  sw: string
  photo: string
  tip: string
}

export const GEAR_PHOTOS: GearPhoto[] = [
  {
    name: 'Rope',
    es: 'La cuerda',
    sw: 'Kamba',
    photo: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?auto=format&fit=crop&w=600&h=400&q=80',
    tip: 'Dynamic ropes stretch on a fall to absorb force — never use a static rope for lead climbing.',
  },
  {
    name: 'Harness',
    es: 'El arnés',
    sw: 'Mkanda wa usalama',
    photo: 'https://images.unsplash.com/photo-1550265047-a42e8b5c14b8?auto=format&fit=crop&w=600&h=400&q=80',
    tip: 'Check the doubled-back buckle before every single climb — no exceptions.',
  },
  {
    name: 'Carabiner',
    es: 'El mosquetón',
    sw: 'Ndoano ya usalama',
    photo: 'https://images.unsplash.com/photo-1767916901536-d42f78ad2ecf?auto=format&fit=crop&w=600&h=400&q=80',
    tip: 'Locking carabiners are required at every belay and anchor point.',
  },
  {
    name: 'Climbing Wall',
    es: 'El muro de escalada',
    sw: 'Ukuta wa kupanda',
    photo: 'https://images.unsplash.com/photo-1501450626433-39bbf117090e?auto=format&fit=crop&w=600&h=400&q=80',
    tip: 'Read the entire route from the ground before you touch the first hold.',
  },
  {
    name: 'Rock Climbing',
    es: 'La escalada en roca',
    sw: 'Kupanda miamba',
    photo: 'https://images.unsplash.com/premium_photo-1683380297110-a8d0ab72f79e?auto=format&fit=crop&w=600&h=400&q=80',
    tip: 'Seventy percent of climbing power comes from your legs — trust your feet.',
  },
]
