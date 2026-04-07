import React from 'react'

type SectionProps = {
  id?: string
  children: React.ReactNode
  className?: string
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`scroll-mt-20 py-12 sm:py-14 lg:py-20 ${className}`}>
      {children}
    </section>
  )
}

export default Section
