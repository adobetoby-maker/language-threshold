import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import { APP_URL, displayFont, serifFont, sansFont } from '../constants'

const GOLD = '#C9A84C'
const TEAL = '#0ea5e9'

type Mode = 'beginner' | 'translator'
type LocationId = 'baja' | 'caribbean' | 'mediterranean' | 'brazil'

interface Fish {
  english: string
  commonAlias: string
  spanish: string
  pronunciation: string
  localName?: string
  emoji: string
  imgUrl: string
  habitat: string
  season: string
  sizeRange: string
  funFact: string
  color: string
}

interface GearItem {
  emoji: string
  english: string
  spanish: string
  pronunciation: string
}

interface PhrasePack {
  context: string
  phrases: { en: string; es: string; phonetic: string }[]
}

const GEAR: GearItem[] = [
  { emoji: '🎣', english: 'Fishing Rod', spanish: 'Caña de pescar', pronunciation: 'KAH-nyah de pes-KAR' },
  { emoji: '🪝', english: 'Hook', spanish: 'Anzuelo', pronunciation: 'ahn-SWEH-lo' },
  { emoji: '🧵', english: 'Fishing Line', spanish: 'Hilo de pesca', pronunciation: 'EE-lo de PES-kah' },
  { emoji: '🐛', english: 'Bait', spanish: 'Carnada', pronunciation: 'kar-NAH-dah' },
  { emoji: '⚙️', english: 'Reel', spanish: 'Carrete', pronunciation: 'kah-REH-teh' },
  { emoji: '🐠', english: 'Lure', spanish: 'Señuelo', pronunciation: 'seh-NYOO-eh-lo' },
  { emoji: '🥅', english: 'Net', spanish: 'Red', pronunciation: 'REHD' },
  { emoji: '🧊', english: 'Ice Chest / Cooler', spanish: 'Hielera', pronunciation: 'yeh-LEH-rah' },
  { emoji: '📦', english: 'Tackle Box', spanish: 'Caja de pesca', pronunciation: 'KAH-hah de PES-kah' },
  { emoji: '🦺', english: 'Life Jacket', spanish: 'Chaleco salvavidas', pronunciation: 'chah-LEH-ko sal-bah-BEE-dahs' },
  { emoji: '☀️', english: 'Sunscreen', spanish: 'Protector solar', pronunciation: 'pro-tek-TOR so-LAR' },
  { emoji: '📋', english: 'Fishing License', spanish: 'Licencia de pesca', pronunciation: 'lee-SEN-syah de PES-kah' },
]

const PHRASES: PhrasePack[] = [
  {
    context: 'At the Dock',
    phrases: [
      { en: 'What time do we leave?', es: '¿A qué hora salimos?', phonetic: 'ah keh O-rah sah-LEE-mos' },
      { en: 'Where are we fishing today?', es: '¿Dónde pescamos hoy?', phonetic: 'DON-deh pes-KAH-mos OY' },
      { en: 'Do you have bait?', es: '¿Tienen carnada?', phonetic: 'TYEH-nen kar-NAH-dah' },
      { en: 'How much does the charter cost?', es: '¿Cuánto cuesta el charter?', phonetic: 'KWAHN-to KWES-tah el CHAR-ter' },
      { en: 'I am a beginner', es: 'Soy principiante', phonetic: 'soy preen-see-PYAN-teh' },
    ],
  },
  {
    context: 'On the Water',
    phrases: [
      { en: 'Cast to the right!', es: '¡Lanza a la derecha!', phonetic: 'LAN-sah ah lah deh-REH-chah' },
      { en: "There's a fish on the line!", es: '¡Hay un pez en la línea!', phonetic: 'AY oon PEHS en lah LEE-neh-ah' },
      { en: 'Reel it in!', es: '¡Enrolla el hilo!', phonetic: 'en-ROH-yah el EE-lo' },
      { en: 'How deep are we fishing?', es: '¿A qué profundidad pescamos?', phonetic: 'ah keh pro-foon-dee-DAHD pes-KAH-mos' },
      { en: 'The line is tangled', es: 'El hilo está enredado', phonetic: 'el EE-lo es-TAH en-reh-DAH-do' },
    ],
  },
  {
    context: 'Landing the Fish',
    phrases: [
      { en: "It's a big one!", es: '¡Es uno grande!', phonetic: 'es OO-no GRAHN-deh' },
      { en: 'Get the net!', es: '¡Trae la red!', phonetic: 'TRAH-eh lah REHD' },
      { en: 'Catch and release', es: 'Captura y suelta', phonetic: 'kap-TOO-rah ee SWEL-tah' },
      { en: 'Take a photo!', es: '¡Tómanos una foto!', phonetic: 'TOH-mah-nos OO-nah FO-to' },
      { en: 'Can we keep it?', es: '¿Podemos quedárnoslo?', phonetic: 'po-DEH-mos keh-DAR-nos-lo' },
    ],
  },
  {
    context: 'Charter Talk',
    phrases: [
      { en: 'I feel seasick', es: 'Me siento mareado', phonetic: 'meh SYEN-to mah-reh-AH-do' },
      { en: 'Slow down, please', es: 'Más despacio, por favor', phonetic: 'mahs des-PAH-syo por fah-BOR' },
      { en: 'What fish is that?', es: '¿Qué pez es ese?', phonetic: 'keh PEHS es EH-seh' },
      { en: 'Is that a whale?', es: '¿Es eso una ballena?', phonetic: 'es EH-so OO-nah bah-YEH-nah' },
      { en: 'How do you say __ in Spanish?', es: '¿Cómo se dice __ en español?', phonetic: 'KO-mo seh DEE-seh ... en es-pah-NYOL' },
    ],
  },
]

const BAJA_FISH: Fish[] = [
  {
    english: 'Mahi-Mahi',
    commonAlias: 'Also called: Dolphin Fish',
    spanish: 'Dorado',
    pronunciation: 'doh-RAH-doh',
    localName: 'Dorado (same word as Spanish — locals love this one!)',
    emoji: '🐟',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Coryphaena_hippurus1.jpg/400px-Coryphaena_hippurus1.jpg',
    habitat: 'Open ocean near weed lines',
    season: 'May – October',
    sizeRange: '5–40 lbs',
    funFact: 'Turns bright gold when excited — hence "Dorado" (the golden one)',
    color: '#facc15',
  },
  {
    english: 'Yellowfin Tuna',
    commonAlias: 'Also called: Ahi Tuna',
    spanish: 'Atún aleta amarilla',
    pronunciation: 'ah-TOON ah-LEH-tah ah-mah-REE-yah',
    emoji: '🐠',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Yellowfin_tuna_nurp.jpg/400px-Yellowfin_tuna_nurp.jpg',
    habitat: 'Deep offshore, 100+ miles out',
    season: 'Year-round, peak June – September',
    sizeRange: '20–200 lbs',
    funFact: 'Can swim at 50 mph — one of the fastest fish in the ocean',
    color: '#fbbf24',
  },
  {
    english: 'Wahoo',
    commonAlias: 'Called Ono in Hawaii',
    spanish: 'Peto',
    pronunciation: 'PEH-toh',
    localName: 'Sierra (some Baja ports use this name)',
    emoji: '⚡',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Wahoo2.jpg/400px-Wahoo2.jpg',
    habitat: 'Open ocean near reefs and current edges',
    season: 'October – March',
    sizeRange: '20–100 lbs',
    funFact: 'Named for the shout fishermen made when they first caught one',
    color: '#60a5fa',
  },
  {
    english: 'Roosterfish',
    commonAlias: 'Named for its dramatic dorsal spines',
    spanish: 'Pez gallo',
    pronunciation: 'PEHS GAH-yoh',
    localName: 'Unique to the Eastern Pacific — not found anywhere else on Earth',
    emoji: '🐓',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nematistius_pectoralis.jpg/400px-Nematistius_pectoralis.jpg',
    habitat: 'Sandy beaches and rocky shoreline',
    season: 'May – October',
    sizeRange: '10–80 lbs',
    funFact: '"Pez gallo" = rooster fish — the tall dorsal spines look like a rooster\'s comb',
    color: '#f97316',
  },
  {
    english: 'Blue Marlin',
    commonAlias: 'The most prized offshore trophy fish',
    spanish: 'Marlín azul',
    pronunciation: 'mar-LEEN ah-SOOL',
    emoji: '🗡️',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Makaira_nigricans.jpg/400px-Makaira_nigricans.jpg',
    habitat: 'Deep offshore, 100+ miles from shore',
    season: 'July – November',
    sizeRange: '200–2,000 lbs',
    funFact: 'Can live 27 years — most Baja marlin are catch-and-release',
    color: '#818cf8',
  },
  {
    english: 'Red Snapper',
    commonAlias: 'Best eating fish in Baja',
    spanish: 'Huachinango',
    pronunciation: 'wah-chee-NAHN-go',
    localName: 'Huachinango — a uniquely Mexican name you\'ll only hear here',
    emoji: '🎏',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Red_snapper_nmfs.jpg/400px-Red_snapper_nmfs.jpg',
    habitat: 'Rocky reefs and structure, 30–300 ft deep',
    season: 'Year-round',
    sizeRange: '1–20 lbs',
    funFact: 'The word "Huachinango" comes from Nahuatl — the Aztec language',
    color: '#ef4444',
  },
]

const CARIBBEAN_FISH: Fish[] = [
  {
    english: 'Sailfish',
    commonAlias: 'The fastest fish in the ocean',
    spanish: 'Pez vela',
    pronunciation: 'PEHS BEH-lah',
    emoji: '⛵',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sailfish_NOAA.jpg/400px-Sailfish_NOAA.jpg',
    habitat: 'Open blue water, offshore',
    season: 'November – April',
    sizeRange: '40–220 lbs',
    funFact: 'Reaches 68 mph — the fastest fish on Earth. "Pez vela" means sail fish.',
    color: '#818cf8',
  },
  {
    english: 'Tarpon',
    commonAlias: 'The Silver King',
    spanish: 'Sábalo',
    pronunciation: 'SAH-bah-lo',
    localName: 'Tarpón (on Spanish-speaking islands)',
    emoji: '🥈',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Megalops_atlanticus.jpg/400px-Megalops_atlanticus.jpg',
    habitat: 'Estuaries, flats, under bridges',
    season: 'March – July',
    sizeRange: '40–280 lbs',
    funFact: 'Can breathe air — rolls at the surface to gulp oxygen from the atmosphere',
    color: '#94a3b8',
  },
  {
    english: 'Bonefish',
    commonAlias: 'The Gray Ghost of the flats',
    spanish: 'Macabí',
    pronunciation: 'mah-kah-BEE',
    emoji: '👻',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Albula_vulpes1.jpg/400px-Albula_vulpes1.jpg',
    habitat: 'Shallow saltwater flats near mangroves',
    season: 'Year-round in warm water',
    sizeRange: '2–15 lbs',
    funFact: 'Nearly invisible in 12 inches of water — the ultimate challenge for fly fishermen',
    color: '#94a3b8',
  },
  {
    english: 'Mahi-Mahi',
    commonAlias: 'Also called: Dolphin Fish',
    spanish: 'Dorado',
    pronunciation: 'doh-RAH-doh',
    localName: 'Dorado throughout Spanish Caribbean; Lampuki in Malta/Cyprus',
    emoji: '🐟',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Coryphaena_hippurus1.jpg/400px-Coryphaena_hippurus1.jpg',
    habitat: 'Open water near floating debris and weed lines',
    season: 'April – September',
    sizeRange: '5–40 lbs',
    funFact: '"Mahi-Mahi" is Hawaiian for "strong strong" — same fish as Baja\'s Dorado',
    color: '#facc15',
  },
  {
    english: 'Barracuda',
    commonAlias: 'The ocean\'s torpedo',
    spanish: 'Barracuda',
    pronunciation: 'bah-rah-KOO-dah',
    localName: 'Picuda (Cuba and Puerto Rico)',
    emoji: '💨',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Great_Barracuda_%28Sphyraena_barracuda%29.jpg/400px-Great_Barracuda_%28Sphyraena_barracuda%29.jpg',
    habitat: 'Reefs, near structure, open water',
    season: 'Year-round',
    sizeRange: '5–60 lbs',
    funFact: 'Remove jewelry before snorkeling — barracuda are attracted to shiny objects',
    color: '#64748b',
  },
  {
    english: 'Wahoo',
    commonAlias: 'Called Ono in Hawaii',
    spanish: 'Wahoo / Guahu',
    pronunciation: 'wah-HOO',
    localName: 'Petón (Dominican Republic)',
    emoji: '⚡',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Wahoo2.jpg/400px-Wahoo2.jpg',
    habitat: 'Open ocean current edges',
    season: 'September – March',
    sizeRange: '20–100 lbs',
    funFact: 'Strikes at 60 mph — will strip 100 yards of line in seconds',
    color: '#60a5fa',
  },
]

const MEDITERRANEAN_FISH: Fish[] = [
  {
    english: 'European Sea Bass',
    commonAlias: 'Italian: Branzino · French: Bar · Greek: Lavraki',
    spanish: 'Lubina',
    pronunciation: 'loo-BEE-nah',
    localName: 'Branzino (Italy) · Lavraki (Greece) · Loup de mer (France)',
    emoji: '🐟',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Dicentrarchus_labrax_%28Meluso%29.jpg/400px-Dicentrarchus_labrax_%28Meluso%29.jpg',
    habitat: 'Rocky coasts, estuaries, harbors',
    season: 'Year-round, peak autumn–winter',
    sizeRange: '0.5–10 lbs',
    funFact: 'The most prized eating fish on every Med menu — 4 different names across 4 countries',
    color: '#94a3b8',
  },
  {
    english: 'Swordfish',
    commonAlias: 'A Mediterranean legend',
    spanish: 'Pez espada',
    pronunciation: 'PEHS es-PAH-dah',
    localName: 'Pesce spada (Italy) · Xifias (Greece)',
    emoji: '🗡️',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Xiphias_gladius1.jpg/400px-Xiphias_gladius1.jpg',
    habitat: 'Deep offshore water',
    season: 'May – September',
    sizeRange: '50–1,000 lbs',
    funFact: 'Can heat its brain and eyes — allowing deep, cold-water hunting in pitch darkness',
    color: '#818cf8',
  },
  {
    english: 'Mahi-Mahi',
    commonAlias: 'Called Lampuka in Malta and Cyprus',
    spanish: 'Llampuga',
    pronunciation: 'yam-POO-gah',
    localName: 'Lampuki (Malta) · Koryfena (Greece) · Lampuga (Spain)',
    emoji: '🐠',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Coryphaena_hippurus1.jpg/400px-Coryphaena_hippurus1.jpg',
    habitat: 'Open water near floating objects',
    season: 'August – November',
    sizeRange: '5–40 lbs',
    funFact: 'Same fish as Baja\'s "Dorado" — has its own festival in Malta. Four continents, four names.',
    color: '#facc15',
  },
  {
    english: 'Sea Bream',
    commonAlias: 'The most farmed fish in the Mediterranean',
    spanish: 'Dorada',
    pronunciation: 'doh-RAH-dah',
    localName: 'Orata (Italy) · Tsipoura (Greece) · Daurade (France)',
    emoji: '✨',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sparus_aurata.jpg/400px-Sparus_aurata.jpg',
    habitat: 'Coastal waters, lagoons, sea grass beds',
    season: 'Year-round',
    sizeRange: '0.5–6 lbs',
    funFact: '"Dorada" means golden in Spanish — named for the golden stripe between its eyes',
    color: '#facc15',
  },
  {
    english: 'Grouper',
    commonAlias: 'Many varieties throughout the Med',
    spanish: 'Mero',
    pronunciation: 'MEH-roh',
    localName: 'Cernia (Italy) · Rofos (Greece)',
    emoji: '🪨',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nassau_grouper_Epinephelus_striatus.jpg/400px-Nassau_grouper_Epinephelus_striatus.jpg',
    habitat: 'Rocky reefs and caves, 15–400 ft deep',
    season: 'Year-round',
    sizeRange: '2–100 lbs',
    funFact: 'All groupers are born female — the largest dominant fish in a group turns male',
    color: '#78716c',
  },
  {
    english: 'Bluefin Tuna',
    commonAlias: 'The most valuable fish in the world',
    spanish: 'Atún rojo',
    pronunciation: 'ah-TOON ROH-ho',
    localName: 'Tonno (Italy) · Tónos (Greece)',
    emoji: '🏆',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Bluefin-big.jpg/400px-Bluefin-big.jpg',
    habitat: 'Deep offshore Mediterranean',
    season: 'May – September',
    sizeRange: '200–1,500 lbs',
    funFact: 'A single Bluefin sold at Tokyo auction for $3.1 million USD. "Atún rojo" = red tuna.',
    color: '#ef4444',
  },
]

const BRAZIL_FISH: Fish[] = [
  {
    english: 'Peacock Bass',
    commonAlias: 'The most explosive freshwater fish on Earth',
    spanish: 'Pavón',
    pronunciation: 'pah-BON',
    localName: 'Tucunaré (Brazil) — this Portuguese name is used by everyone here',
    emoji: '🦚',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Cichla_ocellaris_by_OpenCage.jpg/400px-Cichla_ocellaris_by_OpenCage.jpg',
    habitat: 'Amazon tributaries, clear jungle rivers',
    season: 'Year-round, peak dry season (July – November)',
    sizeRange: '2–30 lbs',
    funFact: 'Strikes so hard it sounds like a gunshot. Most sought freshwater game fish in South America.',
    color: '#4ade80',
  },
  {
    english: 'Golden Dorado (Freshwater)',
    commonAlias: 'Not the same as saltwater Mahi-Mahi — a different fish entirely',
    spanish: 'Dorado del río',
    pronunciation: 'doh-RAH-doh del REE-oh',
    localName: 'Dourado (Brazil) — "The Golden One" in Portuguese',
    emoji: '🥇',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Salminus_brasiliensis1.jpg/400px-Salminus_brasiliensis1.jpg',
    habitat: 'Large rivers with powerful current',
    season: 'October – March',
    sizeRange: '5–60 lbs',
    funFact: 'Lives only in South American rivers — the most prized freshwater trophy on the continent',
    color: '#facc15',
  },
  {
    english: 'Pintado (Spotted Sorubim)',
    commonAlias: 'A giant Amazon catfish',
    spanish: 'Pintado',
    pronunciation: 'peen-TAH-doh',
    localName: 'Pintado (used across all of Brazil) — means "painted" or "spotted"',
    emoji: '🎨',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pseudoplatystoma_fasciatum_Bleeker.jpg/400px-Pseudoplatystoma_fasciatum_Bleeker.jpg',
    habitat: 'Deep river channels, Amazon basin floor',
    season: 'Year-round',
    sizeRange: '5–90 lbs',
    funFact: 'The spots on each fish are unique — like a fingerprint. No two are the same.',
    color: '#f97316',
  },
  {
    english: 'Piranha',
    commonAlias: 'Their man-eating reputation is mostly myth!',
    spanish: 'Piraña',
    pronunciation: 'pee-RAH-nyah',
    localName: 'Piranha (universal across South America)',
    emoji: '🦷',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Piranha_display.jpg/400px-Piranha_display.jpg',
    habitat: 'Warm, slow Amazon tributaries',
    season: 'Year-round',
    sizeRange: '0.5–8 lbs',
    funFact: 'Brazilians fry them whole and make piranha soup. The "man-eater" story is mostly legend.',
    color: '#ef4444',
  },
  {
    english: 'Sailfish',
    commonAlias: 'World record waters off the Brazilian coast',
    spanish: 'Pez vela',
    pronunciation: 'PEHS BEH-lah',
    localName: 'Agulhão (Brazil Atlantic coast) — means "big needle"',
    emoji: '⛵',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sailfish_NOAA.jpg/400px-Sailfish_NOAA.jpg',
    habitat: 'Atlantic coast offshore, warm blue water',
    season: 'October – April',
    sizeRange: '40–200 lbs',
    funFact: 'Brazil holds several IGFA sailfish records — world-class waters off Vitória and the northeast',
    color: '#818cf8',
  },
  {
    english: 'Giant Trevally',
    commonAlias: 'The GT — pound for pound the most powerful inshore fish',
    spanish: 'Jurel gigante',
    pronunciation: 'hoo-REL hee-GAN-teh',
    localName: 'Xaréu (Brazil) · GT (universal fishing shorthand)',
    emoji: '💪',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Caranx_ignobilis.jpg/400px-Caranx_ignobilis.jpg',
    habitat: 'Coastal reefs, river mouths, offshore atolls',
    season: 'Year-round',
    sizeRange: '10–170 lbs',
    funFact: 'Will attack birds on the water surface. One of the few fish that actively hunts above the waterline.',
    color: '#94a3b8',
  },
]

const LOCATIONS = [
  { id: 'baja' as LocationId, label: 'Baja California', flag: '🇲🇽', color: '#ef4444', description: 'Pacific big game — dorado, marlin, wahoo, roosterfish', fish: BAJA_FISH },
  { id: 'caribbean' as LocationId, label: 'Caribbean', flag: '🌊', color: '#0ea5e9', description: 'Sailfish, tarpon, bonefish — world-class variety on every depth', fish: CARIBBEAN_FISH },
  { id: 'mediterranean' as LocationId, label: 'Mediterranean', flag: '🌅', color: '#818cf8', description: 'Ancient fishing grounds, legendary eating fish', fish: MEDITERRANEAN_FISH },
  { id: 'brazil' as LocationId, label: 'Brazil', flag: '🇧🇷', color: '#4ade80', description: 'Amazon freshwater giants + Atlantic offshore records', fish: BRAZIL_FISH },
]

function FishCard({ fish, mode, hasImgError, onImgError }: {
  fish: Fish
  mode: Mode
  hasImgError: boolean
  onImgError: () => void
}) {
  return (
    <div
      style={{
        backgroundColor: '#161616',
        border: '1px solid rgba(201,168,76,0.12)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'border-color 0.25s, transform 0.25s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = `${fish.color}66`
        el.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(201,168,76,0.12)'
        el.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ position: 'relative', height: '180px', overflow: 'hidden', backgroundColor: '#0a1628' }}>
        {!hasImgError ? (
          <img
            src={fish.imgUrl}
            alt={fish.english}
            onError={onImgError}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: `linear-gradient(135deg, ${fish.color}22 0%, #050e1a 100%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '4.5rem',
          }}>
            {fish.emoji}
          </div>
        )}
        <div style={{
          position: 'absolute', top: '0.75rem', right: '0.75rem',
          backgroundColor: 'rgba(0,0,0,0.72)',
          backdropFilter: 'blur(8px)',
          borderRadius: '6px',
          padding: '0.2rem 0.5rem',
          fontSize: '0.58rem',
          fontFamily: 'monospace',
          color: fish.color,
          letterSpacing: '0.05em',
        }}>
          {fish.season}
        </div>
        <div style={{
          position: 'absolute', bottom: '0.75rem', left: '0.75rem',
          backgroundColor: 'rgba(0,0,0,0.72)',
          backdropFilter: 'blur(8px)',
          borderRadius: '6px',
          padding: '0.2rem 0.5rem',
          fontSize: '0.58rem',
          fontFamily: 'monospace',
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.04em',
        }}>
          ⚖️ {fish.sizeRange}
        </div>
      </div>

      <div style={{ padding: '1.25rem' }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ ...sansFont, fontSize: '0.55rem', color: '#6b6560', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>
            {mode === 'beginner' ? 'Common English Name' : 'En Español'}
          </div>
          <div style={{ ...displayFont, fontSize: '1.45rem', fontWeight: 700, color: '#F7F3EC', lineHeight: 1.1, marginBottom: '0.2rem' }}>
            {mode === 'beginner' ? fish.english : fish.spanish}
          </div>
          {mode === 'beginner' && (
            <div style={{ ...sansFont, fontSize: '0.65rem', color: '#6b6560' }}>{fish.commonAlias}</div>
          )}
          {mode === 'translator' && (
            <div style={{ ...sansFont, fontSize: '0.62rem', color: '#6b6560', fontStyle: 'italic' }}>/{fish.pronunciation}/</div>
          )}
        </div>

        <div style={{
          padding: '0.65rem 0.85rem',
          backgroundColor: `${fish.color}12`,
          border: `1px solid ${fish.color}30`,
          borderRadius: '9px',
          marginBottom: '0.75rem',
        }}>
          <div style={{ ...sansFont, fontSize: '0.55rem', color: '#6b6560', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>
            {mode === 'beginner' ? 'En Español' : 'In English'}
          </div>
          <div style={{ ...displayFont, fontSize: '1.15rem', fontWeight: 600, color: fish.color, lineHeight: 1.1 }}>
            {mode === 'beginner' ? fish.spanish : fish.english}
          </div>
          {mode === 'beginner' && (
            <div style={{ ...sansFont, fontSize: '0.6rem', color: '#6b6560', fontStyle: 'italic', marginTop: '0.15rem' }}>/{fish.pronunciation}/</div>
          )}
        </div>

        {fish.localName && (
          <div style={{
            padding: '0.55rem 0.85rem',
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '9px',
            marginBottom: '0.75rem',
          }}>
            <div style={{ ...sansFont, fontSize: '0.55rem', color: '#6b6560', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.15rem' }}>
              🗺 Local Name
            </div>
            <div style={{ ...sansFont, fontSize: '0.68rem', color: '#A89F94', lineHeight: 1.5 }}>{fish.localName}</div>
          </div>
        )}

        <div style={{ borderLeft: `2px solid ${fish.color}44`, paddingLeft: '0.75rem' }}>
          <p style={{ ...serifFont, fontSize: '0.72rem', color: '#A89F94', lineHeight: 1.55, fontStyle: 'italic', margin: 0 }}>
            {fish.funFact}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FishingModule() {
  const [mode, setMode] = useState<Mode>('beginner')
  const [location, setLocation] = useState<LocationId>('baja')
  const [phraseTab, setPhraseTab] = useState(0)
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set())

  const currentLocation = LOCATIONS.find(l => l.id === location)!

  function handleImgError(fishName: string) {
    setImgErrors(prev => new Set([...prev, fishName]))
  }

  return (
    <div style={{ backgroundColor: '#0D0D0D', color: '#F7F3EC', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(180deg, #050e1a 0%, #0a1a2e 55%, #0D0D0D 100%)',
        paddingTop: '128px',
        paddingBottom: '64px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <svg
          aria-hidden="true"
          style={{ position: 'absolute', right: 0, top: 0, opacity: 0.07, pointerEvents: 'none' }}
          width="500" height="400" viewBox="0 0 500 400" fill="none"
        >
          <ellipse cx="350" cy="200" rx="300" ry="180" stroke={TEAL} strokeWidth="1" />
          <ellipse cx="350" cy="200" rx="220" ry="130" stroke={TEAL} strokeWidth="0.5" />
          <line x1="50" y1="200" x2="650" y2="200" stroke={TEAL} strokeWidth="0.5" strokeDasharray="4 8" />
        </svg>

        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
          <p style={{ ...sansFont, color: TEAL, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Fishing Module · Language Threshold
          </p>
          <h1 style={{ ...displayFont, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#F7F3EC', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Fish Names in Spanish<br />
            <span style={{ color: TEAL }}>by Location</span>
          </h1>
          <p style={{ ...serifFont, fontSize: '1.05rem', color: '#A89F94', lineHeight: 1.75, maxWidth: '34rem' }}>
            New to fishing — or just new to Spanish? Every card shows a picture of the fish, what English speakers call it, and exactly what the locals call it where you're headed.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section style={{ padding: '2rem 1.5rem 1rem', maxWidth: '72rem', margin: '0 auto' }}>

        {/* Learning Mode */}
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ ...sansFont, color: '#A89F94', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.13em', marginBottom: '0.75rem' }}>
            Learning Mode
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            {([
              { id: 'beginner' as Mode, label: '🎣  New to Fishing — Learn the Fish First', active: TEAL },
              { id: 'translator' as Mode, label: '🌎  Know the Fish — Learn the Spanish', active: GOLD },
            ] as const).map(opt => (
              <button
                key={opt.id}
                onClick={() => setMode(opt.id)}
                style={{
                  padding: '0.6rem 1.2rem',
                  borderRadius: '9999px',
                  fontSize: '0.7rem',
                  fontFamily: 'monospace',
                  letterSpacing: '0.08em',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: mode === opt.id ? opt.active : 'rgba(255,255,255,0.06)',
                  color: mode === opt.id ? '#000' : 'rgba(255,255,255,0.45)',
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p style={{ ...sansFont, fontSize: '0.65rem', color: '#524e4a' }}>
            {mode === 'beginner'
              ? 'English name shown large. Spanish below. Perfect if you\'re new to fishing entirely.'
              : 'Spanish name shown large. English below. For experienced anglers learning the language.'
            }
          </p>
        </div>

        {/* Location Selector */}
        <div>
          <p style={{ ...sansFont, color: '#A89F94', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.13em', marginBottom: '0.75rem' }}>
            Fishing Location
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            {LOCATIONS.map(loc => (
              <button
                key={loc.id}
                onClick={() => setLocation(loc.id)}
                style={{
                  padding: '0.6rem 1.2rem',
                  borderRadius: '9999px',
                  fontSize: '0.7rem',
                  fontFamily: 'monospace',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: `1px solid ${location === loc.id ? loc.color : 'rgba(255,255,255,0.08)'}`,
                  backgroundColor: location === loc.id ? `${loc.color}20` : 'transparent',
                  color: location === loc.id ? loc.color : 'rgba(255,255,255,0.38)',
                }}
              >
                {loc.flag} {loc.label}
              </button>
            ))}
          </div>
          <p style={{ ...sansFont, fontSize: '0.65rem', color: '#524e4a' }}>{currentLocation.description}</p>
        </div>
      </section>

      {/* Fish Grid */}
      <section style={{ padding: '1.5rem 1.5rem 5rem', maxWidth: '72rem', margin: '0 auto' }}>
        <FadeIn>
          <h2 style={{ ...displayFont, fontSize: '1.4rem', color: '#F7F3EC', marginBottom: '0.35rem' }}>
            {currentLocation.flag} Fish of {currentLocation.label}
          </h2>
          <p style={{ ...sansFont, fontSize: '0.68rem', color: '#A89F94', marginBottom: '2rem' }}>
            {currentLocation.fish.length} species — click any card to focus
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.5rem' }}>
            {currentLocation.fish.map(fish => (
              <FishCard
                key={fish.english}
                fish={fish}
                mode={mode}
                hasImgError={imgErrors.has(fish.english)}
                onImgError={() => handleImgError(fish.english)}
              />
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Gear Section */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: '#161616' }}>
        <FadeIn>
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <p style={{ ...sansFont, color: GOLD, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.4rem' }}>
              Gear & Tackle
            </p>
            <h2 style={{ ...displayFont, fontSize: '1.75rem', color: '#F7F3EC', marginBottom: '0.4rem' }}>
              The Essential Tackle List
            </h2>
            <p style={{ ...sansFont, fontSize: '0.75rem', color: '#A89F94', marginBottom: '2.5rem' }}>
              Know what you're asking for before you reach the tackle shop or talk to the crew.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '1rem' }}>
              {GEAR.map(item => (
                <div
                  key={item.english}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(201,168,76,0.09)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.28)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.09)' }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.emoji}</div>
                  <div style={{ ...sansFont, fontSize: '0.78rem', color: '#D9D4CC', fontWeight: 500, marginBottom: '0.3rem' }}>
                    {item.english}
                  </div>
                  <div style={{ ...displayFont, fontSize: '1.05rem', color: GOLD, fontWeight: 700, marginBottom: '0.2rem' }}>
                    {item.spanish}
                  </div>
                  <div style={{ ...sansFont, fontSize: '0.6rem', color: '#524e4a', fontStyle: 'italic' }}>
                    /{item.pronunciation}/
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Phrases Section */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <FadeIn>
          <div style={{ maxWidth: '54rem', margin: '0 auto' }}>
            <p style={{ ...sansFont, color: TEAL, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.4rem' }}>
              On the Water
            </p>
            <h2 style={{ ...displayFont, fontSize: '1.75rem', color: '#F7F3EC', marginBottom: '2rem' }}>
              Situational Phrases
            </h2>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {PHRASES.map((pack, i) => (
                <button
                  key={pack.context}
                  onClick={() => setPhraseTab(i)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.65rem',
                    fontFamily: 'monospace',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: phraseTab === i ? TEAL : 'rgba(255,255,255,0.06)',
                    color: phraseTab === i ? '#000' : 'rgba(255,255,255,0.38)',
                    transition: 'all 0.2s',
                  }}
                >
                  {pack.context}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {PHRASES[phraseTab].phrases.map((phrase, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    backgroundColor: '#161616',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.055)',
                  }}
                >
                  <div>
                    <div style={{ ...sansFont, fontSize: '0.55rem', color: '#524e4a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                      English
                    </div>
                    <div style={{ ...serifFont, fontSize: '0.9rem', color: '#F7F3EC' }}>{phrase.en}</div>
                  </div>
                  <div>
                    <div style={{ ...sansFont, fontSize: '0.55rem', color: '#524e4a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                      Español
                    </div>
                    <div style={{ ...serifFont, fontSize: '0.9rem', color: GOLD, fontStyle: 'italic', marginBottom: '0.15rem' }}>{phrase.es}</div>
                    <div style={{ ...sansFont, fontSize: '0.6rem', color: '#524e4a', fontStyle: 'italic' }}>/{phrase.phonetic}/</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#161616', borderTop: '1px solid rgba(14,165,233,0.1)', textAlign: 'center' }}>
        <FadeIn>
          <div style={{ maxWidth: '34rem', margin: '0 auto' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>🎣</div>
            <h2 style={{ ...displayFont, fontSize: '2rem', color: '#F7F3EC', marginBottom: '1rem' }}>
              Ready to fish in Spanish?
            </h2>
            <p style={{ ...sansFont, fontSize: '0.85rem', color: '#A89F94', marginBottom: '2.5rem', lineHeight: 1.75 }}>
              Practice these fish names, gear words, and charter phrases with our AI-powered fishing module. Your guide speaks Spanish — now you can too.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <a
                href={APP_URL}
                style={{
                  display: 'inline-block',
                  backgroundColor: TEAL,
                  color: '#fff',
                  padding: '1rem 2.5rem',
                  borderRadius: '9999px',
                  fontSize: '0.72rem',
                  fontFamily: 'monospace',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                Start the Fishing Module →
              </a>
              <Link
                to="/"
                style={{ fontSize: '0.65rem', color: '#524e4a', textDecoration: 'none', fontFamily: 'monospace', letterSpacing: '0.1em' }}
              >
                ← Back to Language Threshold
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
