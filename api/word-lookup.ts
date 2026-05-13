import type { VercelRequest, VercelResponse } from '@vercel/node'
import { checkRateLimit } from './_ratelimit'

interface AnthropicMessage {
  content?: Array<{ type: string; input?: unknown }>
  error?: { type: string; message: string }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (await checkRateLimit(req, res)) return

  const { word, sentence } = req.body ?? {}
  if (!word || !sentence) return res.status(400).json({ error: 'Missing word or sentence' })

  const key = process.env.ANTHROPIC_API_KEY
  if (!key) return res.status(500).json({ error: 'AI not configured' })

  const tool = {
    name: 'return_word_card',
    description: 'Return a Spanish word card for a professional learner, including morphological breakdown.',
    input_schema: {
      type: 'object',
      properties: {
        headword:          { type: 'string', description: 'The base/infinitive form of the word' },
        wordEmoji:         { type: 'string', description: 'One emoji that best pictures this word' },
        partOfSpeech:      { type: 'string', description: 'noun, verb, adjective, adverb, etc.' },
        phonetic:          { type: 'string', description: 'Pronunciation in English phonetics, e.g. "mah-REE-poh-sah"' },
        baseDefinition:    { type: 'string', description: 'Simple English meaning in 8 words or less' },
        exampleSentence:   { type: 'string', description: 'A natural Spanish sentence using the word in a work context' },
        exampleTranslation:{ type: 'string', description: 'English translation of the example sentence' },
        morphStem:         { type: 'string', description: 'The unchanging root/stem. For verbs: stem before infinitive ending (e.g. "com" from "comer"). For nouns: root before gender ending (e.g. "nivel" is invariant). Omit for particles.' },
        morphEnding:       { type: 'string', description: 'Base-form ending that attaches to the stem (e.g. "er", "ar", "o", "a"). Must equal headword minus morphStem.' },
        morphConjugations: {
          type: 'array',
          description: 'For verbs: 5 present-tense forms (yo/tú/él/nosotros/ellos). For nouns/adjectives: gender+number variants. Each entry: inflected ending only, and the full word.',
          items: {
            type: 'object',
            properties: {
              ending: { type: 'string' },
              full:   { type: 'string' },
            },
            required: ['ending', 'full'],
          },
        },
        commonPhrases: {
          type: 'array',
          description: '2–3 short natural Spanish phrases a worker would actually say on the job.',
          items: { type: 'string' },
        },
      },
      required: ['headword', 'wordEmoji', 'partOfSpeech', 'phonetic', 'baseDefinition', 'exampleSentence', 'exampleTranslation'],
    },
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 700,
        system: 'You are a bilingual Spanish dictionary for working professionals. Keep definitions concise. Always populate morphStem, morphEnding, morphConjugations, and commonPhrases to show how words change on the job.',
        tools: [tool],
        tool_choice: { type: 'tool', name: 'return_word_card' },
        messages: [{ role: 'user', content: `Spanish word: "${word}"\nContext: "${sentence}"` }],
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Anthropic error', response.status, errText)
      return res.status(502).json({ error: 'AI service error' })
    }

    const data = await response.json() as AnthropicMessage
    if (data.error) {
      console.error('Anthropic API error', data.error)
      return res.status(502).json({ error: data.error.message })
    }
    const toolUse = data.content?.find(b => b.type === 'tool_use')
    if (!toolUse) return res.status(500).json({ error: 'No card returned' })
    return res.status(200).json({ card: toolUse.input })
  } catch (err) {
    console.error('word-lookup error:', err)
    return res.status(500).json({ error: 'Server error' })
  }
}
