type TitleProps = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

const Title = ({ title, subtitle, align = 'left', className = '' }: TitleProps) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${alignClass} ${className}`}>
      {subtitle && (
        <p className="text-xs sm:text-sm uppercase tracking-[0.14em] text-slate-500">{subtitle}</p>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
    </div>
  )
}

export default Title
