import React from 'react'

type SectionProps = {
  id?: string
  children: React.ReactNode
  className?: string
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-8 sm:py-12 lg:py-16 ${className}`}>
      {children}
    </section>
  )
}

export default Section
