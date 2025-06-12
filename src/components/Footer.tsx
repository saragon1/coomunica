import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowRight } from 'react-feather';
import Logo from './Logo';

const Footer: React.FC = () => {
    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/chi-siamo', label: 'Chi Siamo' },
        { to: '/servizi', label: 'Servizi' },
        { to: '/portfolio', label: 'Portfolio' },
        { to: '/curriculum', label: 'Curriculum' },
        { to: '/contatti', label: 'Contatti' },
    ];

    const contactInfo = [
        { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'info@coomunica.it' },
        { icon: <Phone className="w-5 h-5" />, label: 'Telefono', value: '+39 123 456 7890' },
        { icon: <MapPin className="w-5 h-5" />, label: 'Indirizzo', value: 'Via Roma 123, Milano' },
    ];

    return (
        <footer className="bg-secondary-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-transparent"></div>
            </div>
            
            <div className="relative z-10">


                {/* Bottom Bar */}
                <div className="border-t border-gray-800">
                    <div className="container mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                            <div className="text-gray-400 font-medium flex items-center">
                            <Logo />
                                &copy; {new Date().getFullYear()}  Tutti i diritti riservati.
                            </div>
                            <div className="mt-4 md:mt-0 flex items-center space-x-6">
                                <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition-colors font-medium">
                                    Privacy Policy
                                </Link>
                                <Link to="/contatti" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition-all duration-300 font-bold transform hover:scale-105">
                                    Contattaci
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 