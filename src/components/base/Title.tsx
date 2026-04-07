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
      {subtitle && (
        <p className="text-xs sm:text-sm uppercase tracking-[0.14em] text-gray-500">{subtitle}</p>
      )}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight leading-tight">
        {title}
      </h2>
    </div>
  )
}

export default Title
