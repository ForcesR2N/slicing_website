import PropTypes from 'prop-types'

const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <div 
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="text-4xl mb-6 text-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-heading text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <p className="text-gray-600 font-body text-center leading-relaxed">
        {description}
      </p>
    </div>
  )
}

ServiceCard.propTypes = { 
  title: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  icon: PropTypes.string.isRequired,
  index: PropTypes.number
}

export default ServiceCard