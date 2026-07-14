const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-slate-100 text-ink hover:bg-slate-200',
  danger: 'bg-danger text-white hover:bg-red-700',
}

function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-xl text-projector-sm font-semibold transition-colors
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
