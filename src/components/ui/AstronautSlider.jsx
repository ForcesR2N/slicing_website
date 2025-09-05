import { useState, useEffect, useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaUserAstronaut } from 'react-icons/fa'

const AstronautSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [imageErrors, setImageErrors] = useState({})
  const [loadingStates, setLoadingStates] = useState({})
  const sliderRef = useRef(null)

  // setup slides for the astronaut showcase
  const slides = [
    {
      id: 1,
      image: '/assets/images/image.png',
      alt: 'Astronaut in space - slide 1',
      filter: 'none',
      glow: 'from-purple-500/20 to-blue-500/20'
    },
    {
      id: 2,
      image: '/assets/images/image_2.png',
      alt: 'Astronaut in space - slide 2', 
      filter: 'hue-rotate(30deg) brightness(1.1)',
      glow: 'from-green-500/20 to-cyan-500/20'
    },
    {
      id: 3,
      image: '/assets/images/image_3.png',
      alt: 'Astronaut in space - slide 3',
      filter: 'hue-rotate(300deg) brightness(0.9)',
      glow: 'from-pink-500/20 to-violet-500/20'
    }
  ]

  const totalSlides = slides.length

  // slides change automatically every 4 seconds
  useEffect(() => {
    if (!isHovered && !isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isHovered, isPaused, totalSlides])

  // arrow keys and spacebar controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrevSlide()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNextSlide()
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault()
        setIsPaused(prev => !prev)
      }
    }

    if (isHovered) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isHovered])

  // pause if user prefers reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsPaused(mediaQuery.matches)

    const handleChange = (e) => setIsPaused(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides)
  }

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleSliderMouseEnter = () => {
    setIsHovered(true)
  }

  const handleSliderMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div 
      className="astronaut-slider-container relative w-full h-[400px] lg:h-[500px] rounded-2xl"
      onMouseEnter={handleSliderMouseEnter}
      onMouseLeave={handleSliderMouseLeave}
      ref={sliderRef}
      role="region"
      aria-label="Astronaut image slider"
    >
      {/* main container */}
      <div className="slider-wrapper relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-purple-900/50 to-indigo-900">
        {/* slides container */}
        <div 
          className="slider-track flex h-full transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
            width: `${totalSlides * 100}%`
          }}
        >
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className="slide relative flex-shrink-0 flex items-center justify-center"
              style={{ width: `${100 / totalSlides}%` }}
            >
              {/* dark space background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-indigo-900/80 rounded-2xl"></div>
              
              {/* floating astronaut with glow effect */}
              <div className="relative animate-float w-full max-w-md mx-auto">
                {/* colored glow behind astronaut */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.glow} blur-3xl rounded-full scale-110`}></div>
                
                {/* main astronaut image or fallback icon */}
                {imageErrors[slide.id] ? (
                  <div className="relative w-full h-full flex items-center justify-center min-h-[400px] max-w-[400px] mx-auto">
                    <div className="text-center">
                      <FaUserAstronaut className="w-32 h-32 text-primary/60 mx-auto mb-4" />
                      <p className="text-white/60 font-body">Astronaut Image</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {loadingStates[slide.id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 rounded-2xl">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                      </div>
                    )}
                    <img 
                      src={slide.image}
                      alt={slide.alt}
                      className="relative w-full h-full object-contain filter drop-shadow-2xl transition-all duration-500 rounded-2xl"
                      style={{ 
                        filter: slide.filter,
                        maxHeight: '400px',
                        maxWidth: '400px',
                        opacity: loadingStates[slide.id] ? 0.3 : 1
                      }}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      onLoad={() => {
                        setLoadingStates(prev => ({ ...prev, [slide.id]: false }))
                      }}
                      onLoadStart={() => {
                        setLoadingStates(prev => ({ ...prev, [slide.id]: true }))
                      }}
                      onError={() => {
                        setImageErrors(prev => ({ ...prev, [slide.id]: true }))
                        setLoadingStates(prev => ({ ...prev, [slide.id]: false }))
                      }}
                    />
                  </div>
                )}
                
                {/* light reflections for realism */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-blue-300/20 rounded-full blur-md"></div>
              </div>

              {/* colorful space effects */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500/40 to-violet-500/40 blur-2xl opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-500/30 blur-3xl opacity-70 animate-pulse" style={{ animationDelay: `${index}s` }}></div>
              <div className="absolute top-1/3 -right-16 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400/35 to-orange-500/35 blur-xl opacity-75 animate-pulse" style={{ animationDelay: `${index * 0.5}s` }}></div>
              
              {/* twinkling stars */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full animate-twinkle"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${10 + Math.random() * 80}%`,
                      animationDelay: `${Math.random() * 3 + index}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* prev/next buttons */}
      <div className="slider-controls absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        {/* left arrow */}
        <button
          onClick={handlePrevSlide}
          className="nav-button bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 pointer-events-auto"
          aria-label="Previous astronaut image"
          tabIndex={isHovered ? 0 : -1}
        >
          <HiChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* right arrow */}
        <button
          onClick={handleNextSlide}
          className="nav-button bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 pointer-events-auto"
          aria-label="Next astronaut image"
          tabIndex={isHovered ? 0 : -1}
        >
          <HiChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* dots at bottom */}
      <div className="slide-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={isHovered ? 0 : -1}
          />
        ))}
      </div>

      {/* accessibility info */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Showing astronaut image {currentSlide + 1} of {totalSlides}. {isPaused ? 'Slideshow paused' : 'Slideshow playing'}. Press space to toggle, arrow keys to navigate.
      </div>

      {/* pause/play toggle */}
      <button
        onClick={() => setIsPaused(prev => !prev)}
        className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 opacity-0 hover:opacity-100 focus:opacity-100"
        aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
      >
        {isPaused ? (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default AstronautSlider