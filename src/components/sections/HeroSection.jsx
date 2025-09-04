import Button from '../ui/Button'
import AstronautSlider from '../ui/AstronautSlider'

const HeroSection = () => {
  const handleDiscoverClick = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Dark Space Background Gradient */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f0f23 100%)'
      }}></div>
      
      {/* Radial Glow on Astronaut Side */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 70% 50%, rgba(79, 70, 229, 0.3) 0%, transparent 50%)'
      }}></div>
      
      {/* Stars Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 lg:col-span-2">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                HELLO WORLD!
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold font-heading text-white mb-8 leading-tight">
                We are creative agency. We build digital work that you will love!
              </h1>
              <Button 
                onClick={handleDiscoverClick}
                size="lg"
                className="shadow-2xl"
                aria-label="Discover our portfolio"
              >
                Discover our portfolio
              </Button>
            </div>

            {/* Right Content - Astronaut Slider */}
            <div className="relative order-1 lg:order-2 lg:col-span-3">
              <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:mr-0">
                <AstronautSlider />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection