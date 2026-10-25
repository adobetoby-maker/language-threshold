export type Audience = 'general' | 'construction' | 'medical'
const app = 'https://app.languagethreshold.com/'
const course = (module: string, lesson = 1) => `${app}?module=${module}&target=Spanish&native=English&tab=core30&lesson=${lesson}&way=see`
const contactPoints = [
  ['01', 'See it.', 'Give the word a place.', 'Read the word beside its meaning, then meet it in a sentence. Connect the spelling to something you can picture and a situation you recognize.'],
  ['02', 'Hear it.', 'Connect the letters to the sound.', 'Listen to the word and the phrase around it. Return to the parts you need to hear again, so the written word becomes something you can recognize in speech.'],
  ['03', 'Say it.', 'Put the word in your own voice.', 'Speak it aloud. Try the phrase, listen again, and have another go. Begin using your voice before you need the words in a real conversation.'],
  ['04', 'Type it.', 'Bring it back from memory.', 'Look away from the answer and type the word or phrase. Compare your response, notice what needs attention, and try again.'],
  ['05', 'Handwrite it.', 'Make the letters yourself.', 'Write the word by hand on the practice pad. Take time with its shape, spelling, and accents, then compare your writing with the example.'],
]
const examples = {
  general: { label: 'A word with a purpose', word: 'necesitar', meaning: 'to need', phrase: 'Necesito saber dónde le duele.', translation: 'I need to know where it hurts.', image: 'medical.jpg', caption: 'Actual app · Orthopedics Lesson 1', module: 'orthopedics', lesson: 1 },
  medical: { label: 'From a word to a patient conversation', word: 'doler', meaning: 'to hurt', phrase: '¿Dónde le duele?', translation: 'Where does it hurt?', image: 'medical.jpg', caption: 'Actual app · Orthopedics Lesson 1', module: 'orthopedics', lesson: 1 },
  construction: { label: 'From a word to a crew conversation', word: 'barrer', meaning: 'to sweep', phrase: 'Barran la cubierta antes de la sub-capa.', translation: 'Sweep the deck before the underlayment.', image: 'roofing.png', caption: 'Actual app · Roofing Lesson 2', module: 'roofing', lesson: 2 },
}

export function WhyLearnTeaser({ href = '/why-learn-with-us/', audience = 'general' }: { href?: string; audience?: Audience }) {
  return <section className="why-teaser" aria-label="Why learn with Language Threshold">
    <div className="why-wrap">
      <p className="why-eyebrow">Why learn with us</p>
      <h2>More ways to meet a word.<br />More reasons to use it.</h2>
      <p>See it. Hear it. Say it. Type it. Handwrite it. Then use it in a conversation with AI feedback—all around the topics {audience === 'construction' ? 'your crew needs' : audience === 'medical' ? 'you need in your clinical role' : 'you actually need'}.</p>
      <a className="why-button" href={href}>Explore how we learn →</a>
    </div>
  </section>
}

export function WhyLearnContent({ audience = 'general' }: { audience?: Audience }) {
  const example = examples[audience]
  return <article className="why-learn">
    <header className="why-hero why-wrap">
      <p className="why-eyebrow">Why learn with Language Threshold</p>
      <h1>A word becomes yours<br />when you can <em>use it.</em></h1>
      <p className="why-lead">See it. Hear it. Say it. Type it. Handwrite it. Then bring it into a conversation—with feedback that helps you try again.</p>
      <a className="why-button" href="#your-topics">Start with what you need ↓</a>
      <div className="why-word"><span>{example.label}</span><p lang="es">{example.word}</p><span>{example.meaning}</span></div>
    </header>
    <section className="why-topics" id="your-topics">
      <div className="why-wrap">
        <p className="why-eyebrow">Your purpose comes first</p>
        <h2>Learn the language<br />for the life you lead.</h2>
        <p className="why-intro">The conversation you need gives the words a reason to matter. Start with your work, your role, or the situation you are preparing for.</p>
        <div className="why-topic-grid">
          {(audience === 'construction' ? [
            ['Your trade', 'Roofing, framing, plumbing, gutters, siding. Practice the materials, tools, and tasks you work with.', course('roofing', 2)],
            ['Your crew', 'Work through schedules, measurements, task assignments, and everyday crew handoffs.', course('construction-foreman')],
            ['Both sides of the conversation', 'Spanish for supervisors and English for Spanish-speaking employees, with team assignments and progress reporting.', `${app}team`],
          ] : audience === 'medical' ? [
            ['Your clinical role', 'Begin with patient greetings, questions, and the conversations around your specialty.', course('orthopedics')],
            ['Your next mission', 'Prepare around your role, destination, departure date, and the people working beside you.', '/missions/'],
            ['Your team', 'Practice language for colleagues and daily handoffs, with assignments and progress reporting.', `${app}team`],
          ] : [
            ['At work', 'A crew briefing. A patient greeting. A conversation with a colleague. Start with your role.', course('construction-foreman')],
            ['Before you go', 'Prepare for a medical mission, a trip, or the next conversation you want to take part in.', 'https://medicalspanish.app/missions/'],
            ['Together', 'Learn as an individual or help your team practice the language around shared tasks.', `${app}team`],
          ]).map(([title, text, href]) => <a className="why-topic" href={href} key={title}><h3>{title}</h3><p>{text}</p><span>Explore →</span></a>)}
        </div>
      </div>
    </section>
    <section className="why-wrap why-contacts">
      <p className="why-eyebrow">The contact points</p>
      <h2>Meet the same word<br />in more than one way.</h2>
      <p className="why-intro">A word has a look, a sound, a meaning, and a use. Our practice gives you different ways to connect with it, recall it, and return to what needs another pass.</p>
      <div className="why-contact-grid">
        {contactPoints.map(([number, title, subtitle, text]) => <section className="why-contact" key={number}><span className="why-number">{number}</span><h3>{title}</h3><h4>{subtitle}</h4><p>{text}</p></section>)}
        <section className="why-contact why-contact-final"><span className="why-number">06</span><h3>Use it.</h3><h4>Give the word a job.</h4><p>Put the words together in a conversation. Ask a question, respond to the other person, and practice saying what you mean.</p><a href="#conversation">See how feedback fits →</a></section>
      </div>
      <p className="why-note">These are contact points, not a rigid checklist. Use the practice you need and come back to the parts that challenge you.</p>
    </section>
    <section className="why-conversation" id="conversation">
      <div className="why-wrap why-conversation-grid">
        <div>
          <p className="why-eyebrow">From practice to conversation</p>
          <h2>Say something.<br />Get feedback.<br /><em>Try it again.</em></h2>
          <p className="why-intro">Practice with an AI conversation partner in the context of your lesson. Respond in your own words, work with feedback on your response, and try a clearer way to express yourself.</p>
          <p className="why-intro">The aim is to move beyond recognizing the answer: listen to a reply, ask for clarification, and keep the conversation going.</p>
          <div className="why-example"><span>For example</span><p lang="es">{example.phrase}</p><p>{example.translation}</p><small>An illustrative phrase. Open the lesson to explore the actual activities and feedback.</small></div>
          <a className="why-button" href={course(example.module, example.lesson)}>Try {audience === 'construction' ? 'a roofing lesson' : 'a patient greeting'} →</a>
          <p className="why-note">AI conversation and feedback need an internet connection. Feedback is generated by AI and can make mistakes.</p>
        </div>
        <figure className="why-screenshot"><a href={course(example.module, example.lesson)}><img src={`/assets/why/${example.image}`} alt={`${example.caption}, showing lesson text and the See, Recall, Hear, Type, Say, and Write practice modes`} width="390" height="844" loading="lazy" /></a><figcaption>{example.caption}<br />Tap the screen to open the lesson.</figcaption></figure>
      </div>
    </section>
    <section className="why-wrap why-close">
      <p className="why-eyebrow">Start with your next conversation</p>
      <h2>Your topics.<br />Your words.<br /><em>Your way into conversation.</em></h2>
      <p className="why-intro">Choose a topic that matters to you. Meet the words, practice them, and give them a place in a conversation.</p>
      <div className="why-actions"><a className="why-button" href={audience === 'general' ? app : course(example.module, example.lesson)}>Start learning →</a><a className="why-link" href={`${app}team`}>Learning with a team? →</a></div>
      {audience === 'medical' && <p className="why-note">Language practice supports communication alongside qualified interpreters and local care teams. It does not establish clinical competence or interpreter qualification.</p>}
      {audience === 'construction' && <p className="why-note">Language practice supports jobsite communication. It does not replace required safety training or establish trade certification.</p>}
    </section>
  </article>
}
