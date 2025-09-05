import Button from '../ui/Button'
import AstronautSlider from '../ui/AstronautSlider'

const HeroSection = () => {
  const handleDiscoverClick = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-section relative min-h-screen flex items-center overflow-hidden w-full">
      {/* Background Layers */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f0f23 100%)'
      }}></div>
      
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 70% 50%, rgba(79, 70, 229, 0.3) 0%, transparent 50%)'
      }}></div>
      
      {/* Stars Animation */}
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

      {/* Content */}
      <div className="relative z-10 w-full py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
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

            <div className="relative order-1 lg:order-2 lg:col-span-3">
              <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:mr-0">
                <AstronautSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection