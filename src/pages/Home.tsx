import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Users, TrendingUp } from 'react-feather';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg card-hover border border-white/20">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 animate-float">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-secondary-900 mb-4">{title}</h3>
        <p className="text-secondary-600 leading-relaxed">{description}</p>
    </div>
);

const Home: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100"></div>
                <div className="absolute top-80 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 left-3/5 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>
                
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <div className="max-w-5xl mx-auto">
                        
                        <h1 className="text-5xl md:text-7xl font-black text-secondary-900 leading-tight mb-8 animate-slideUp">
                            Creiamo{' '}
                            <span className="gradient-text-primary">
                                connessioni
                            </span>
                            <br />
                            raccontiamo la tua{' '}
                            <span className="gradient-text-primary">
                                storia
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto mb-12 leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
                            Siamo un'agenzia di comunicazione che trasforma idee in strategie vincenti. 
                            Dal marketing digitale all'editoria, diamo voce al tuo brand con creatività ed efficacia.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
                            <Link 
                                to="/servizi" 
                                className="group btn-gradient-primary px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center"
                            >
                                Scopri i nostri servizi
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link 
                                to="/portfolio" 
                                className="px-8 py-4 rounded-full font-bold text-lg text-secondary-700 border-2 border-secondary-300 hover-border-primary-500 hover-text-primary-600 transition-all duration-300"
                            >
                                Vedi Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home; 