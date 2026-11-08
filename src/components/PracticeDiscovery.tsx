import { APP_URL } from '../constants'
import snapshot from '../data/practice-discovery.json'

export default function PracticeDiscovery() {
  const groups = snapshot.groups
  return <section id="practice-discovery" className="relative px-6 py-20 text-[#F7F3EC] sm:px-10" style={{ backgroundColor: '#0D0D0D', fontFamily: 'system-ui, sans-serif' }}>
    <div className="mx-auto max-w-6xl">
      <h2 className="max-w-3xl font-serif text-3xl font-semibold sm:text-4xl">See the conversations before you start.</h2>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#C9C3BB]">Find the situations covered in the app, see the level of practice and compare the courses by your role.</p>
      <div className="mt-7 rounded-2xl border border-[#C9A84C]/40 p-6">
        <h3 className="font-serif text-2xl font-semibold">What level is our Spanish speaking program?</h3>
        <p className="mt-3 text-lg font-semibold text-[#DCC272]">A1–B1 structured speaking, with advanced role-specific Master practice.</p>
        <p className="mt-3 max-w-3xl leading-relaxed text-[#C9C3BB]">Start with introductions and routine exchanges. Build toward connected explanations, then rehearse more demanding work conversations: a changed plan, an unexpected complication or a teammate who needs you to explain it another way.</p>
        <a href={`${APP_URL}/scenarios#program-level`} className="mt-4 inline-flex min-h-11 items-center font-semibold text-[#DCC272] underline">Explore the levels and actual scenarios →</a>
      </div>
      <h3 className="mt-10 font-serif text-2xl font-semibold">Compare Spanish practice at a glance</h3>
      <p className="mt-3 text-sm text-[#C9C3BB]">Spanish for English-speaking learners. Swipe across the table on a phone. Counts describe different course formats.</p>
      <div role="region" aria-label="Spanish course comparison" tabIndex={0} className="mt-4 overflow-x-auto rounded-xl border border-white/20">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="bg-[#171717]"><tr><th scope="col" className="sticky left-0 bg-[#171717] p-4">Compare</th>{['Language Threshold','Duolingo','ClinicaLingo','CanopyLearn'].map(name=><th scope="col" key={name} className="p-4">{name}</th>)}</tr></thead>
          <tbody className="divide-y divide-white/15">
            <tr><th scope="row" className="sticky left-0 bg-[#0D0D0D] p-4">Progression</th><td className="p-4">A1–B1 speaking labels + Master work practice</td><td className="p-4">General Spanish through B2</td><td className="p-4">Clinical encounters</td><td className="p-4">Three medical course levels</td></tr>
            <tr><th scope="row" className="sticky left-0 bg-[#0D0D0D] p-4">Medical Spanish</th><td className="p-4">{groups.Medical.lessons} lessons / {groups.Medical.courses} role courses</td><td className="p-4">General Spanish</td><td className="p-4">29 free clinical scenarios</td><td className="p-4">36 medical lessons</td></tr>
            <tr><th scope="row" className="sticky left-0 bg-[#0D0D0D] p-4">Trades</th><td className="p-4">{groups.Trades.lessons} lessons / {groups.Trades.courses} role courses</td><td className="p-4">General Spanish</td><td className="p-4">Medical scenarios</td><td className="p-4">Medical course</td></tr>
            <tr><th scope="row" className="sticky left-0 bg-[#0D0D0D] p-4">Coaching & sports</th><td className="p-4">{groups.Sports.lessons} lessons / {groups.Sports.courses} sports courses</td><td className="p-4">General Spanish</td><td className="p-4">Medical scenarios</td><td className="p-4">Medical course</td></tr>
          </tbody>
        </table>
      </div>
      <a href={`${APP_URL}/compare`} className="mt-4 inline-flex min-h-11 items-center font-semibold text-[#DCC272] underline">See the complete role comparison and sources →</a>
      <h3 className="mt-9 font-serif text-2xl font-semibold">A few conversations you can rehearse</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">{snapshot.examples.map(example=><article key={example.name} className="rounded-xl border border-white/20 p-5"><p className="font-semibold text-[#DCC272]">{example.name}</p><h4 className="mt-3 font-serif text-xl font-semibold">{example.title}</h4><p className="mt-3 text-sm leading-relaxed text-[#C9C3BB]">{example.summary}</p></article>)}</div>
      <a href={`${APP_URL}/scenarios`} className="mt-6 inline-flex min-h-12 items-center rounded-xl bg-[#C9A84C] px-5 py-3 font-semibold text-[#0D0D0D]">Browse scenarios by role and level →</a>
    </div>
  </section>
}
