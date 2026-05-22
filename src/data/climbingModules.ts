export interface VocabPair { en: string; es: string }

export interface ClimbingModule {
  id: string
  emoji: string
  title: string
  tagline: string
  color: string
  vocab: VocabPair[]
  samplePhrase: { en: string; es: string }
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
      { en: 'rope', es: 'la cuerda' },
      { en: 'harness', es: 'el arnés' },
      { en: 'carabiner', es: 'el mosquetón' },
      { en: 'helmet', es: 'el casco' },
      { en: 'chalk / chalk bag', es: 'el magnesio / la bolsa de magnesio' },
      { en: 'climbing shoes', es: 'los pies de gato / las zapatillas' },
      { en: 'belay device', es: 'el asegurador / el freno' },
      { en: 'quickdraw', es: 'la cinta exprés / el express' },
      { en: 'crash pad', es: 'la colchoneta de caída' },
      { en: 'anchor', es: 'el anclaje / la reunión' },
    ],
    samplePhrase: {
      en: 'Your harness fits correctly when you can fit two fingers under the waist belt.',
      es: 'El arnés está bien ajustado cuando puedes meter dos dedos bajo el cinturón de la cintura.',
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
      { en: 'On belay?', es: '¿Listo para asegurar?' },
      { en: 'Belay on', es: 'Asegurado / Listo' },
      { en: 'Climbing!', es: '¡Escalando! / ¡Subo!' },
      { en: 'Climb on', es: '¡Sube! / ¡Adelante!' },
      { en: 'Take! / Hold me!', es: '¡Coge! / ¡Ténme!' },
      { en: 'Slack!', es: '¡Da cuerda! / ¡Suelta!' },
      { en: 'Watch me!', es: '¡Mírame! / ¡Atención!' },
      { en: 'Falling!', es: '¡Me caigo! / ¡Caigo!' },
      { en: 'Off belay', es: 'Desasegurado / Fuera de seguro' },
      { en: 'Lower me!', es: '¡Bájame! / ¡Baja!' },
    ],
    samplePhrase: {
      en: 'Always confirm "Belay on" before you call "Climbing!" — never skip the check.',
      es: 'Confirma siempre "Asegurado" antes de decir "¡Escalando!" — nunca omitas la comprobación.',
    },
    scenario: 'Indoor gym, sport climbing, guide and client communication',
  },
  {
    id: 'route-reading',
    emoji: '🗺️',
    title: 'Route Reading & Technique',
    tagline: 'Grade a route, describe movement, and coach a climber — all in Spanish.',
    color: CLIMBING_COLOR,
    vocab: [
      { en: 'route / problem', es: 'la vía / el bloque' },
      { en: 'grade / difficulty', es: 'el grado / la dificultad' },
      { en: 'hold', es: 'la presa / el agarre' },
      { en: 'overhang', es: 'el desplome / el extraplomo' },
      { en: 'slab', es: 'la placa' },
      { en: 'to rest', es: 'descansar / recuperarse' },
      { en: 'to fall', es: 'caer / caerse' },
      { en: 'top rope', es: 'la cuerda de arriba / el top rope' },
      { en: 'lead climbing', es: 'la escalada de cabeza / el lead' },
      { en: 'bouldering', es: 'el boulder / la escalada de bloque' },
    ],
    samplePhrase: {
      en: 'This is a slab route — use your feet on the small holds and keep your hips close to the wall.',
      es: 'Esta vía es una placa — usa los pies en las presas pequeñas y mantén las caderas cerca de la pared.',
    },
    scenario: 'Route setting, coaching sessions, competition announcements',
  },
]

export interface GearPhoto {
  name: string
  es: string
  photo: string
  tip: string
}

export const GEAR_PHOTOS: GearPhoto[] = [
  {
    name: 'Rope',
    es: 'La cuerda',
    photo: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?auto=format&fit=crop&w=600&h=400&q=80',
    tip: 'Dynamic ropes stretch on a fall to absorb force — never use a static rope for lead climbing.',
  },
  {
    name: 'Harness',
    es: 'El arnés',
    photo: 'https://images.unsplash.com/photo-1550265047-a42e8b5c14b8?auto=format&fit=crop&w=600&h=400&q=80',
    tip: 'Check the doubled-back buckle before every single climb — no exceptions.',
  },
  {
    name: 'Carabiner',
    es: 'El mosquetón',
    photo: 'https://images.unsplash.com/photo-1767916901536-d42f78ad2ecf?auto=format&fit=crop&w=600&h=400&q=80',
    tip: 'Locking carabiners are required at every belay and anchor point.',
  },
  {
    name: 'Climbing Wall',
    es: 'El muro de escalada',
    photo: 'https://images.unsplash.com/photo-1501450626433-39bbf117090e?auto=format&fit=crop&w=600&h=400&q=80',
    tip: 'Read the entire route from the ground before you touch the first hold.',
  },
  {
    name: 'Rock Climbing',
    es: 'La escalada en roca',
    photo: 'https://images.unsplash.com/premium_photo-1683380297110-a8d0ab72f79e?auto=format&fit=crop&w=600&h=400&q=80',
    tip: 'Seventy percent of climbing power comes from your legs — trust your feet.',
  },
]
