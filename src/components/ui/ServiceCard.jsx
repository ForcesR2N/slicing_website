const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="text-4xl mb-6 text-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
  )
}

export default ServiceCard