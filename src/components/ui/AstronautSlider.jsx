import { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaUserAstronaut } from 'react-icons/fa'

const AstronautSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  // TODO: add touch swipe for mobile soon maybe
  const slides = [
    {
      id: 1,
      image: '/assets/images/image.png',
      alt: 'Astronaut 1',
    },
    {
      id: 2,
      image: '/assets/images/image_2.png',
      alt: 'Astronaut 2', 
    },
    {
      id: 3,
      image: '/assets/images/image_3.png',
      alt: 'Astronaut 3',
    }
  ]

  // console.log('Current slide:', currentSlide) // keeping this for now

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div 
      className="relative w-full h-[400px] lg:h-[500px] rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* main slider container */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-purple-900/50 to-indigo-900">
        
        {/* slides wrapper */}
        <div 
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className="min-w-full relative flex items-center justify-center"
            >
              {/* space background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-indigo-900/80"></div>
              
              {/* astronaut container */}
              <div className="relative animate-float w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
                
                {/* astronaut image */}
                <img 
                  src={slide.image}
                  alt={slide.alt}
                  className="relative w-full h-full object-contain drop-shadow-2xl"
                  style={{ maxHeight: '400px', maxWidth: '400px' }}
                  onError={(e) => {
                    // quick fix for broken images
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                  }}
                />
                
                {/* fallback icon */}
                <div className="hidden w-full h-full items-center justify-center min-h-[400px]">
                  <FaUserAstronaut className="w-32 h-32 text-orange-400/60" />
                </div>
              </div>

              {/* some space effects */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500/40 to-violet-500/40 blur-2xl opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-500/30 blur-3xl opacity-70 animate-pulse"></div>
              
              {/* stars */}
              <div className="absolute inset-0">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
                    style={{
                      left: `${30 + Math.random() * 40}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <button
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all pointer-events-auto"
          aria-label="Previous"
        >
          <HiChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all pointer-events-auto"
          aria-label="Next"
        >
          <HiChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* slide dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default AstronautSlider