export type ButtonVariant = 'primary' | 'outline'
export type ButtonSize = 'md' | 'lg'

type ButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
}

const Button = ({
  children,
  type = 'button',
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false
}) => {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500',
    outline: 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-400'
  }

  const sizeClasses: Record<ButtonSize, string> = {
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-3 text-base'
  }

  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
