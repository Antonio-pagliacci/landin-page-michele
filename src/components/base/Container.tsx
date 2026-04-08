type ContainerProps = {
  children: React.ReactNode
  className?: string
  maxWidthClass?: string
}

const Container = ({ children, className = '', maxWidthClass = 'max-w-6xl lg:max-w-7xl' }: ContainerProps) => {
  return (
    <div className={`w-full px-4 sm:px-6 lg:px-12 ${className}`}>
      <div className={`mx-auto ${maxWidthClass}`}>{children}</div>
    </div>
  )
}

export default Container
