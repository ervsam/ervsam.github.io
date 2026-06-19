import { useEffect, useRef } from 'react'

// Adds a 'visible' class when the element scrolls into view, matching the
// template's data-animate / IntersectionObserver fade-up behavior.
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible')
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return ref
}
