const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg ${className}`}
    >
      {children}
    </button>
  )
}

export default Button