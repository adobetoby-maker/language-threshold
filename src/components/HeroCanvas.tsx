import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// ─── Language globe — point cloud sphere ─────────────────────────────────────

function LanguageGlobe() {
  const ref = useRef<THREE.Points>(null!)

  const [positions, colors] = useMemo(() => {
    const COUNT = 60000
    const pos = new Float32Array(COUNT * 3)
    const col = new Float32Array(COUNT * 3)

    const gold   = new THREE.Color('#C9A84C')
    const ivory  = new THREE.Color('#F0E8D8')
    const cream  = new THREE.Color('#D4C4A0')
    const dim    = new THREE.Color('#6B5A3A')
    const blue   = new THREE.Color('#2A3060')
    const tmp    = new THREE.Color()

    const RADIUS = 3.8

    for (let i = 0; i < COUNT; i++) {
      // Fibonacci sphere distribution — even spacing across surface
      const theta = Math.acos(1 - 2 * (i + 0.5) / COUNT)
      const phi   = Math.PI * (1 + Math.sqrt(5)) * i

      // Add subtle geological noise to surface
      const noise =
        Math.sin(theta * 4 + phi * 0.5) * 0.06 +
        Math.cos(theta * 7 - phi * 0.3) * 0.04 +
        Math.sin(phi * 3.2) * 0.03

      const r = RADIUS + noise

      pos[i * 3]     = r * Math.sin(theta) * Math.cos(phi)
      pos[i * 3 + 1] = r * Math.cos(theta)
      pos[i * 3 + 2] = r * Math.sin(theta) * Math.sin(phi)

      // Height-based coloring: equatorial gold band, ivory poles, dark gaps
      const lat = Math.abs(Math.cos(theta)) // 0=equator, 1=poles
      const lon = (Math.sin(phi * 2.4) + 1) * 0.5 // 0-1 longitude variation

      if (lat < 0.15) {
        // Equatorial bright gold band
        tmp.copy(gold).lerp(cream, lon * 0.4)
      } else if (lat < 0.35) {
        // Mid latitudes: gold fading to ivory
        tmp.copy(gold).lerp(ivory, (lat - 0.15) / 0.20)
      } else if (lat < 0.55) {
        // Upper mid: ivory dimming
        tmp.copy(ivory).lerp(cream, (lat - 0.35) / 0.20)
      } else if (lat < 0.75) {
        // Subpolar: cream to dim gold
        tmp.copy(cream).lerp(dim, (lat - 0.55) / 0.20)
      } else {
        // Polar caps: dim gold to midnight blue shimmer
        tmp.copy(dim).lerp(blue, (lat - 0.75) / 0.25)
      }

      // Dark ocean patches based on longitude bands
      const oceanMask = Math.pow(Math.abs(Math.sin(phi * 1.3 + theta * 0.8)), 3.5)
      if (oceanMask > 0.82) tmp.multiplyScalar(0.18)

      col[i * 3]     = tmp.r
      col[i * 3 + 1] = tmp.g
      col[i * 3 + 2] = tmp.b
    }

    return [pos, col]
  }, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.elapsedTime * 0.055
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.08) * 0.04
  })

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    g.setAttribute('color',    new THREE.BufferAttribute(colors,    3))
    return g
  }, [positions, colors])

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        size={0.022}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.88}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// ─── Orbit ring — language latitude lines ────────────────────────────────────

function LatitudeRing({ y, radius, opacity }: { y: number; radius: number; opacity: number }) {
  const ref = useRef<THREE.Points>(null!)

  const positions = useMemo(() => {
    const COUNT = 280
    const pos = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      const angle = (i / COUNT) * Math.PI * 2
      pos[i * 3]     = radius * Math.cos(angle)
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = radius * Math.sin(angle)
    }
    return pos
  }, [y, radius])

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [positions])

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.elapsedTime * 0.055
  })

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.03} color="#C9A84C" transparent opacity={opacity} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  )
}

// ─── Floating dust ───────────────────────────────────────────────────────────

// Generated once at module load — positions are stable across re-renders
const STAR_POSITIONS = (() => {
  const COUNT = 1200
  const pos = new Float32Array(COUNT * 3)
  for (let i = 0; i < COUNT; i++) {
    const r = 12 + Math.random() * 20
    const theta = Math.random() * Math.PI * 2
    const phi   = Math.random() * Math.PI
    pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
    pos[i * 3 + 1] = r * Math.cos(phi)
    pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
  }
  return pos
})()

function StarField() {
  const positions = STAR_POSITIONS

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [positions])

  return (
    <points geometry={geo}>
      <pointsMaterial size={0.04} color="#A89F94" transparent opacity={0.35} sizeAttenuation depthWrite={false} />
    </points>
  )
}

// ─── Glow core ────────────────────────────────────────────────────────────────

function GlowCore() {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame(({ clock }) => {
    if (!ref.current) return
    const m = ref.current.material as THREE.MeshBasicMaterial
    m.opacity = 0.06 + Math.sin(clock.elapsedTime * 0.4) * 0.02
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[4.6, 32, 32]} />
      <meshBasicMaterial color="#C9A84C" transparent opacity={0.06} side={THREE.BackSide} depthWrite={false} />
    </mesh>
  )
}

// ─── Scene ────────────────────────────────────────────────────────────────────

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 1.2, 10], fov: 55 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      gl={{ antialias: false, alpha: true }}
      aria-hidden
    >
      <fog attach="fog" args={['#16182A', 16, 38]} />
      <StarField />
      <GlowCore />
      <LanguageGlobe />
      <LatitudeRing y={0}    radius={3.82} opacity={0.18} />
      <LatitudeRing y={1.9}  radius={3.30} opacity={0.12} />
      <LatitudeRing y={-1.9} radius={3.30} opacity={0.12} />
    </Canvas>
  )
}
