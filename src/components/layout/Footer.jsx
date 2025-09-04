import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: '#' },
    { name: 'Twitter', icon: FaTwitter, href: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' }
  ]

  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Column 1: Logo & About */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">TNT</h3>
            <p className="text-gray-300 font-body leading-relaxed">
              We are a creative agency that builds digital experiences you will love. 
              Let's create something amazing together.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold font-heading mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-gray-300 hover:text-primary transition-colors duration-200 focus:outline-none focus:text-primary font-body"
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold font-heading mb-4">Get In Touch</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a 
                href="mailto:hello@tnt-agency.com"
                className="flex items-center justify-center md:justify-start text-gray-300 hover:text-primary transition-colors duration-200 font-body"
                aria-label="Send email to hello@tnt-agency.com"
              >
                <FaEnvelope className="mr-3 text-primary" />
                hello@tnt-agency.com
              </a>
              <a 
                href="tel:+15551234567"
                className="flex items-center justify-center md:justify-start text-gray-300 hover:text-primary transition-colors duration-200 font-body"
                aria-label="Call +1 (555) 123-4567"
              >
                <FaPhone className="mr-3 text-primary" />
                +1 (555) 123-4567
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-400 mb-3 font-body">Follow us</p>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-body">
            <p>&copy; 2024 TNT Agency. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <button 
                className="hover:text-primary transition-colors duration-200 focus:outline-none focus:text-primary"
                aria-label="View privacy policy"
              >
                Privacy Policy
              </button>
              <button 
                className="hover:text-primary transition-colors duration-200 focus:outline-none focus:text-primary"
                aria-label="View terms of service"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer