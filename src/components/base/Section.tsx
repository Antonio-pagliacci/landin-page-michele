import React from 'react'

type SectionProps = {
  id?: string
  children: React.ReactNode
  className?: string
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-6 sm:py-10 ${className}`}>
      {children}
    </section>
  )
}

export default Section
