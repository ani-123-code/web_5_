import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import CalBookingModal from './CalBookingModal';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCalModal, setShowCalModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navLinks: Array<{ href: string; label: string; external?: boolean }> = [
    { href: '#pillars', label: 'Platform' },
    { href: '#ai-architect', label: 'AI Architect' },
    { href: '#calculator', label: 'Savings' },
    { href: '#about', label: 'About' },
    { href: '#blog', label: 'Blog' },
    { href: 'https://flownetics.beehiiv.com/', label: 'Newsletter', external: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + href);
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/90 border-b border-gray-200/50 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 sm:h-24 flex items-center justify-between">
        <a href="/" onClick={handleLogoClick} className="cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-3">
          <img src="/media/flownetics.png" alt="Flownetics" className="h-8 sm:h-9 md:h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm font-medium text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (link.external) {
                  e.preventDefault();
                  window.open(link.href, '_blank', 'noopener,noreferrer');
                } else {
                  handleNavClick(e, link.href);
                }
              }}
              className="hover:text-brand-orange transition-colors relative group py-2"
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-purple transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button
          onClick={() => setShowCalModal(true)}
          className="hidden md:block bg-gradient-to-r from-brand-orange to-brand-purple text-white text-sm font-semibold px-6 lg:px-8 py-3 lg:py-3.5 rounded-full hover:shadow-lg hover:scale-105 transition-all"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Book Consultation
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-7 h-7 text-gray-700" /> : <Menu className="w-7 h-7 text-gray-700" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-xl animate-fadeIn">
          <div className="px-6 py-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.external) {
                    e.preventDefault();
                    window.open(link.href, '_blank', 'noopener,noreferrer');
                    setIsMenuOpen(false);
                  } else {
                    handleNavClick(e, link.href);
                  }
                }}
                className="block py-4 px-5 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-purple-50 hover:text-brand-orange transition-all font-medium rounded-xl"
                style={{ fontFamily: "'Inter', sans-serif" }}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setShowCalModal(true);
                setIsMenuOpen(false);
              }}
              className="block w-full text-center mt-6 bg-gradient-to-r from-brand-orange to-brand-purple text-white font-semibold px-6 py-4 rounded-full hover:shadow-lg transition-all"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}

      <CalBookingModal
        isOpen={showCalModal}
        onClose={() => setShowCalModal(false)}
        calLink={import.meta.env.VITE_CAL_LINK}
      />
    </nav>
  );
}
