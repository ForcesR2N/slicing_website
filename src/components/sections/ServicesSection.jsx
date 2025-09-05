import ServiceCard from '../ui/ServiceCard'

const ServicesSection = () => {
  const services = [
    {
      title: "Web Design Project",
      description: "We craft modern, user-friendly website designs tailored to your brand identity. Our creative approach ensures your digital presence stands out.",
      icon: "🎨"
    },
    {
      title: "Website Development",
      description: "Full-stack web development using cutting-edge technologies and best practices. We build fast, scalable, and maintainable web applications.",
      icon: "💻"
    },
    {
      title: "Digital Artwork",
      description: "Custom digital illustrations, graphics, and visual content that brings your creative vision to life with stunning artistic quality.",
      icon: "🎭"
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
            We provide comprehensive digital solutions to help your business thrive in the digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="opacity-0 animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 font-body">
            Ready to start your next project?
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            aria-label="Get in touch with us"
          >
            Get In Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection