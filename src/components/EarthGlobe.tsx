import { useRef, useEffect, useState, useCallback } from 'react'
import type { GlobeMethods } from 'react-globe.gl'
import Globe from 'react-globe.gl'

const LANG_COUNTRIES: Record<string, string> = {
  ESP: 'Spanish', MEX: 'Spanish', COL: 'Spanish', ARG: 'Spanish',
  PER: 'Spanish', CHL: 'Spanish', VEN: 'Spanish', ECU: 'Spanish',
  BOL: 'Spanish', URY: 'Spanish', PRY: 'Spanish', GTM: 'Spanish',
  HND: 'Spanish', SLV: 'Spanish', NIC: 'Spanish', CRI: 'Spanish',
  PAN: 'Spanish', CUB: 'Spanish', DOM: 'Spanish',
  FRA: 'French',  SEN: 'French',  CIV: 'French',  MDG: 'French',
  CMR: 'French',  BFA: 'French',  NER: 'French',  MLI: 'French',
  GIN: 'French',  TCD: 'French',  HTI: 'French',  BEL: 'French',
  DEU: 'German',  AUT: 'German',  CHE: 'German',
  ITA: 'Italian',
  JPN: 'Japanese',
  KOR: 'Korean',
  PRT: 'Portuguese', BRA: 'Portuguese', AGO: 'Portuguese',
  MOZ: 'Portuguese', CPV: 'Portuguese',
}

const LANG_COLORS: Record<string, string> = {
  Spanish:    'rgba(239,68,68,0.55)',
  French:     'rgba(59,130,246,0.55)',
  German:     'rgba(234,179,8,0.55)',
  Italian:    'rgba(34,197,94,0.55)',
  Japanese:   'rgba(244,114,182,0.55)',
  Korean:     'rgba(168,85,247,0.55)',
  Portuguese: 'rgba(249,115,22,0.55)',
  Pashto:     'rgba(16,185,129,0.55)',
}

const LANG_LABELS = [
  { text: 'Español',   lat: 40.4,   lng: -3.7,   color: LANG_COLORS.Spanish    },
  { text: 'Español',   lat: 4.7,    lng: -74.1,  color: LANG_COLORS.Spanish    },
  { text: 'Español',   lat: -34.6,  lng: -58.4,  color: LANG_COLORS.Spanish    },
  { text: 'Français',  lat: 48.8,   lng: 2.3,    color: LANG_COLORS.French     },
  { text: 'Français',  lat: 14.7,   lng: -17.4,  color: LANG_COLORS.French     },
  { text: 'Deutsch',   lat: 52.5,   lng: 13.4,   color: LANG_COLORS.German     },
  { text: 'Italiano',  lat: 41.9,   lng: 12.5,   color: LANG_COLORS.Italian    },
  { text: '日本語',     lat: 35.7,   lng: 139.7,  color: LANG_COLORS.Japanese   },
  { text: '한국어',     lat: 37.5,   lng: 127.0,  color: LANG_COLORS.Korean     },
  { text: 'Português', lat: -15.8,  lng: -47.9,  color: LANG_COLORS.Portuguese },
  { text: 'Português', lat: 38.7,   lng: -9.1,   color: LANG_COLORS.Portuguese },
  { text: 'پښتو',      lat: 34.5,   lng: 69.2,   color: LANG_COLORS.Pashto     },
  { text: 'پښتو',      lat: 34.0,   lng: 71.5,   color: LANG_COLORS.Pashto     },
]

interface GeoFeature {
  type: string
  properties: { ISO_A3: string; ADMIN: string }
  geometry: unknown
}

interface GeoData {
  features: GeoFeature[]
}

export function EarthGlobe({ size = 600 }: { size?: number }) {
  const globeRef = useRef<GlobeMethods | undefined>(undefined)
  const [countries, setCountries] = useState<GeoFeature[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then((r) => r.json())
      .then((d: GeoData) => setCountries(d.features))
  }, [])

  const handleGlobeReady = useCallback(() => {
    setReady(true)
    if (!globeRef.current) return
    const ctrl = globeRef.current.controls()
    ctrl.autoRotate = true
    ctrl.autoRotateSpeed = 0.5
    ctrl.enableZoom = false
    ctrl.enablePan = false
    globeRef.current.pointOfView({ altitude: 1.8 }, 0)
  }, [])

  return (
    <div
      style={{ width: size, height: size }}
      className={`transition-opacity duration-1000 ${ready ? 'opacity-100' : 'opacity-0'}`}
    >
      <Globe
        ref={globeRef}
        width={size}
        height={size}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
        atmosphereColor="#4a90d9"
        atmosphereAltitude={0.22}
        polygonsData={countries}
        polygonCapColor={(feat: unknown) => {
          const f = feat as GeoFeature
          const lang = LANG_COUNTRIES[f.properties.ISO_A3]
          return lang ? LANG_COLORS[lang] : 'rgba(255,255,255,0.02)'
        }}
        polygonSideColor={() => 'rgba(255,255,255,0.02)'}
        polygonStrokeColor={(feat: unknown) => {
          const f = feat as GeoFeature
          const lang = LANG_COUNTRIES[f.properties.ISO_A3]
          return lang ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.06)'
        }}
        polygonAltitude={(feat: unknown) => {
          const f = feat as GeoFeature
          return LANG_COUNTRIES[f.properties.ISO_A3] ? 0.008 : 0.001
        }}
        labelsData={LANG_LABELS}
        labelText={(d: unknown) => (d as { text: string }).text}
        labelSize={1.4}
        labelDotRadius={0.35}
        labelColor={(d: unknown) => (d as { color: string }).color}
        labelResolution={3}
        onGlobeReady={handleGlobeReady}
      />
    </div>
  )
}
