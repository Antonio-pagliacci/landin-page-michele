import React from 'react'

type TitleProps = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

const Title: React.FC<TitleProps> = ({ title, subtitle, align = 'left', className = '' }) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${alignClass} ${className}`}>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
    </div>
  )
}

export default Title
