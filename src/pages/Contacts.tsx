import React from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'react-feather';

const ContactCard: React.FC<{ icon: React.ReactNode; title: string; content: React.ReactNode; }> = ({ icon, title, content }) => (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg card-hover border border-white/20">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-secondary-900 mb-4">{title}</h3>
        <div className="text-secondary-600 leading-relaxed">{content}</div>
    </div>
);

const Contacts: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-primary-50 via-white to-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        
                        <h1 className="text-4xl md:text-6xl pt-20 font-black text-secondary-900 mb-6">
                            Mettiamoci in{' '}
                            <span className="gradient-text-primary-simple">
                                contatto
                            </span>
                        </h1>
                        <p className="text-xl text-secondary-600 leading-relaxed">
                            Siamo qui per ascoltare le tue idee e trasformarle in progetti di successo. 
                            Contattaci per una consulenza gratuita.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <ContactCard
                                icon={<Mail className="w-8 h-8 text-white" />}
                                title="Email"
                                content={
                                    <a 
                                        href="mailto:info@coomunica.it" 
                                        className="text-lg font-medium text-primary-600 hover:text-primary-700 transition-colors"
                                    >
                                        info@coomunica.it
                                    </a>
                                }
                            />
                            
                            <ContactCard
                                icon={<MapPin className="w-8 h-8 text-white" />}
                                title="Sede Legale"
                                content={
                                    <div className="text-lg">
                                        <p className="font-medium text-secondary-800">Via Dei Castani, 183</p>
                                        <p className="text-secondary-600">00172 ROMA</p>
                                    </div>
                                }
                            />
                            
                            <ContactCard
                                icon={<MapPin className="w-8 h-8 text-white" />}
                                title="Sede Operativa"
                                content={
                                    <div className="text-lg">
                                        <p className="font-medium text-secondary-800">Via Vallerotonda, 13</p>
                                        <p className="text-secondary-600">00178 ROMA</p>
                                    </div>
                                }
                            />

                            {/* CTA Card */}
                            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-lg overflow-hidden card-hover text-white p-8">
                                <h3 className="text-2xl font-bold mb-4">Pronto per iniziare?</h3>
                                <p className="text-primary-100 mb-6 leading-relaxed">
                                    Scrivici per raccontarci il tuo progetto e ricevere una consulenza personalizzata.
                                </p>
                                <a 
                                    href="mailto:info@coomunica.it" 
                                    className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300"
                                >
                                    Scrivi ora
                                    <Mail className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100">
                            <div className="p-6 border-b border-gray-100">
                                <h3 className="text-xl font-bold text-secondary-900 flex items-center">
                                    <MapPin className="w-5 h-5 mr-2 text-primary-600" />
                                    Dove siamo
                                </h3>
                                <p className="text-secondary-600 mt-2">Sede operativa - Via Vallerotonda, 13, Roma</p>
                            </div>
                            <iframe
                                width="100%"
                                height="400"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://www.openstreetmap.org/export/embed.html?bbox=12.5705,41.8915,12.5795,41.8955&layer=mapnik&marker=41.8935,12.575"
                                style={{ border: 0 }}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                                className="w-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info Section */}
            
        </div>
    );
};

export default Contacts; 