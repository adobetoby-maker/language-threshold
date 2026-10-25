import { WhyLearnContent } from '../components/why/WhyLearnContent'
import { usePageMeta } from '../hooks/usePageMeta'

export default function WhyLearn() {
  usePageMeta({ title: 'Why Learn With Us', canonical: 'https://languagethreshold.com/why-learn-with-us/', description: 'See, hear, say, type, and handwrite the words you need. Then use them in conversation with AI feedback, around the topics that matter to you.' })
  return <WhyLearnContent />
}
