import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        
        {/* Placeholder sections for complete navigation */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 font-body">Coming Soon...</p>
          </div>
        </section>
        
        <section id="portfolio" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Portfolio</h2>
            <p className="text-lg text-gray-600 font-body">Our amazing work showcase...</p>
          </div>
        </section>
        
        <section id="team" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 font-body">Meet our creative professionals...</p>
          </div>
        </section>
        
        <section id="contact" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 font-body">Get in touch with our team...</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
