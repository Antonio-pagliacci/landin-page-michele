import { useEffect, useRef, useState } from 'react'

/**
 * Hook that adds a fade-in + slide-up animation when an element scrolls into view.
 * Returns a ref to attach to the target element and a className string.
 */
export function useFadeIn<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const className = visible
    ? 'opacity-100 translate-y-0 transition-all duration-700 ease-out'
    : 'opacity-0 translate-y-6'

  return { ref, className }
}
