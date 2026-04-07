import React from 'react'

type ContainerProps = {
  children: React.ReactNode
  className?: string
  maxWidthClass?: string
}

const Container: React.FC<ContainerProps> = ({ children, className = '', maxWidthClass = 'max-w-3xl' }) => {
  return (
    <div className={`w-full px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className={`mx-auto ${maxWidthClass}`}>{children}</div>
    </div>
  )
}

export default Container
