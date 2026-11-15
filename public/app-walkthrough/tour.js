const button = document.querySelector('#play')
const slides = [...document.querySelectorAll('.tour-step')]
const links = [...document.querySelectorAll('.tour-nav-links a')]
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
let timer = null
let index = 0

function stop() {
  clearInterval(timer)
  timer = null
  button.textContent = 'Play tour'
  button.setAttribute('aria-pressed', 'false')
}

function show() {
  slides[index].scrollIntoView({behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start'})
}

button.addEventListener('click', () => {
  if (timer) return stop()
  button.textContent = 'Pause tour'
  button.setAttribute('aria-pressed', 'true')
  show()
  timer = setInterval(() => {
    if (++index >= slides.length) {
      index = 0
      stop()
    } else show()
  }, 8500)
})

links.forEach(link => link.addEventListener('click', stop))
document.addEventListener('visibilitychange', () => { if (document.hidden) stop() })
document.addEventListener('keydown', event => { if (event.key === 'Escape') stop() })

const observer = new IntersectionObserver(entries => {
  const visible = entries.find(entry => entry.isIntersecting)
  if (!visible) return
  const current = visible.target.id.replace('step-', '')
  links.forEach(link => {
    if (link.dataset.step === current) link.setAttribute('aria-current', 'step')
    else link.removeAttribute('aria-current')
  })
  if (!timer) index = slides.indexOf(visible.target)
}, {rootMargin: '-15% 0px -55% 0px'})
slides.forEach(slide => observer.observe(slide))
