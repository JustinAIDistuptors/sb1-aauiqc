import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/95 py-4 md:py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-semibold">
          <Bot className="text-purple-600" />
          <span className="text-purple-600">AI</span> Agents Made Easy
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className={`hover:text-purple-600 transition-colors ${location.pathname === '/' ? 'text-purple-600' : ''}`}>
            Home
          </Link>
          <Link to="/future" className={`hover:text-purple-600 transition-colors ${location.pathname === '/future' ? 'text-purple-600' : ''}`}>
            Future
          </Link>
          <Link to="/pricing" className={`hover:text-purple-600 transition-colors ${location.pathname === '/pricing' ? 'text-purple-600' : ''}`}>
            Pricing
          </Link>
          <Link to="/tools" className={`hover:text-purple-600 transition-colors ${location.pathname === '/tools' ? 'text-purple-600' : ''}`}>
            Free Tools
          </Link>
          <Link to="/contact" className={`hover:text-purple-600 transition-colors ${location.pathname === '/contact' ? 'text-purple-600' : ''}`}>
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:transform hover:-translate-y-0.5 transition-all hover:shadow-lg hover:shadow-purple-600/30">
            Get Started
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-t border-gray-800 py-4">
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              to="/" 
              className={`text-lg ${location.pathname === '/' ? 'text-purple-600' : 'text-white'}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/future" 
              className={`text-lg ${location.pathname === '/future' ? 'text-purple-600' : 'text-white'}`}
              onClick={toggleMenu}
            >
              Future
            </Link>
            <Link 
              to="/pricing" 
              className={`text-lg ${location.pathname === '/pricing' ? 'text-purple-600' : 'text-white'}`}
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link 
              to="/tools" 
              className={`text-lg ${location.pathname === '/tools' ? 'text-purple-600' : 'text-white'}`}
              onClick={toggleMenu}
            >
              Free Tools
            </Link>
            <Link 
              to="/contact" 
              className={`text-lg ${location.pathname === '/contact' ? 'text-purple-600' : 'text-white'}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold text-center"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;