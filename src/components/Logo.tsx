import React from 'react';
import { NavLink } from 'react-router-dom';

interface LogoProps {
    variant?: 'default' | 'footer';
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
    const isFooter = variant === 'footer';
    
    return (
        <NavLink to="/" className={`flex items-center space-x-2 ${className}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
            </div>
            <div 
                className={`text-2xl font-extrabold ${isFooter ? 'text-white' : 'text-secondary-700'} flex items-center`} 
                style={{ fontFamily: 'Oceanwide Pro Extra Bold, sans-serif', transform: 'translateY(-2px)' }}
            >
                <span>c</span>
                <span 
                    className="text-4xl leading-none" 
                    style={{ 
                        color: '#56C800', 
                        letterSpacing: '-0.1em', 
                        marginRight: '0.1em', 
                        marginLeft: '0.05em',
                        lineHeight: '1'
                    }}
                >••</span>
                <span>munica</span>
            </div>
        </NavLink>
    );
};

export default Logo; 