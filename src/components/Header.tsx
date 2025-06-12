import React, { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/chi-siamo', label: 'Chi Siamo' },
        { to: '/servizi', label: 'Servizi' },
        { to: '/portfolio', label: 'Portfolio' },
        { to: '/curriculum', label: 'Curriculum' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'glass shadow-lg' : 'bg-white/90 backdrop-blur-md'
        }`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Logo />
                    
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `relative px-4 py-2 text-base font-bold transition-all duration-300 hover:text-primary-600 ${
                                        isActive 
                                            ? 'text-primary-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-500 after:rounded-full' 
                                            : 'text-secondary-700 hover:text-primary-600'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                        <NavLink 
                            to="/contatti" 
                            className="btn-gradient-primary px-6 py-2.5 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Contattaci
                        </NavLink>
                    </div>

                    <button 
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-secondary-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-secondary-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
                    mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 space-y-4">
                        {navLinks.map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `block px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
                                        isActive 
                                            ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-500' 
                                            : 'text-secondary-700 hover:bg-gray-50 hover:text-primary-600'
                                    }`
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <div className="pt-4 border-t border-gray-200">
                            <NavLink 
                                to="/contatti" 
                                className="block w-full text-center btn-gradient-primary px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contattaci
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 