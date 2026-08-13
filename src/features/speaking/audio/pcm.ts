export function downsampleToLinear16(input: Float32Array, sourceRate: number, targetRate = 16_000) {
  if (!Number.isFinite(sourceRate) || sourceRate < targetRate) throw new Error('The microphone sample rate is unsupported.')
  const ratio = sourceRate / targetRate
  const outputLength = Math.max(1, Math.floor(input.length / ratio))
  const output = new Int16Array(outputLength)
  for (let outputIndex = 0; outputIndex < outputLength; outputIndex += 1) {
    const start = Math.floor(outputIndex * ratio)
    const end = Math.min(input.length, Math.floor((outputIndex + 1) * ratio))
    let sum = 0
    for (let inputIndex = start; inputIndex < Math.max(start + 1, end); inputIndex += 1) sum += input[inputIndex] ?? 0
    const sample = Math.max(-1, Math.min(1, sum / Math.max(1, end - start)))
    output[outputIndex] = sample < 0 ? sample * 0x8000 : sample * 0x7fff
  }
  return output
}

export function linear16ToFloat32(input: ArrayBuffer) {
  const pcm = new Int16Array(input)
  const output = new Float32Array(pcm.length)
  for (let index = 0; index < pcm.length; index += 1) output[index] = pcm[index] / (pcm[index] < 0 ? 0x8000 : 0x7fff)
  return output
}
