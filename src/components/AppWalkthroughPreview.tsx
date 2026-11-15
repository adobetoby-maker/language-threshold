import './app-walkthrough-preview.css'

export default function AppWalkthroughPreview() {
  return (
    <section className="app-walkthrough-preview" aria-labelledby="app-walkthrough-heading">
      <div className="app-walkthrough-inner">
        <div className="app-walkthrough-copy">
          <p className="app-walkthrough-eyebrow">A look inside the app</p>
          <h2 id="app-walkthrough-heading">From a new word<br />to a real conversation.</h2>
          <p>Follow the Orthopedics lesson on muscles, tendons and ligaments, shown in the iPhone app and on the web.</p>
          <p className="app-walkthrough-pattern">See it → Recall → Hear → Write → Say → Speak</p>
          <a className="app-walkthrough-link" href="/app-walkthrough/">See the six steps →</a>
        </div>
        <a className="app-walkthrough-pair" href="/app-walkthrough/" aria-label="Follow the Orthopedics tendon lesson on iPhone and the web">
          <figure className="app-walkthrough-desktop">
            <img src="/app-walkthrough/screenshots/desktop-01-see.webp" alt="The Orthopedics tendon lesson in the web app’s See it screen" width="1440" height="1000" loading="lazy" />
            <figcaption>Web app</figcaption>
          </figure>
          <figure className="app-walkthrough-phone">
            <img src="/app-walkthrough/screenshots/iphone-01-see.webp" alt="Actual iPhone Simulator capture of the tendon card in See it" width="1320" height="2868" loading="lazy" />
            <figcaption>iPhone app</figcaption>
          </figure>
        </a>
      </div>
    </section>
  )
}
