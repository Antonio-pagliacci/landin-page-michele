import React from 'react'

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

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false
}) => {
  const base = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
    outline: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400'
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
