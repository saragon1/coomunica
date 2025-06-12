import React from 'react';
import { MapPin } from 'react-feather';

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
                        <div className="space-y-6">
                            {/* Email Card */}
                            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 border border-gray-200/50 hover:border-primary-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="relative z-10">
                                    <div>
                                        <h3 className="text-lg font-bold text-secondary-900 mb-3">Email</h3>
                                        <a 
                                            href="mailto:info@coomunica.it" 
                                            className="text-2xl font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-300 group-hover:underline"
                                        >
                                            info@coomunica.it
                                        </a>
                                        <p className="text-sm text-secondary-500 mt-2">Scrivici per qualsiasi informazione</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Sede Legale Card */}
                            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-primary-50/30 rounded-3xl p-8 border border-gray-200/50 hover:border-primary-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="relative z-10">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-secondary-900 mb-3">Sede Legale</h3>
                                            <div className="space-y-1">
                                                <p className="text-xl font-semibold text-secondary-800">Via Dei Castani, 183</p>
                                                <p className="text-lg text-secondary-600 font-medium">00172 ROMA</p>
                                            </div>
                                            <p className="text-sm text-secondary-500 mt-2">Sede legale e amministrativa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Sede Operativa Card */}
                            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-primary-50/30 rounded-3xl p-8 border border-gray-200/50 hover:border-primary-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="relative z-10">
                                    <div>
                                        <h3 className="text-lg font-bold text-secondary-900 mb-3">Sede Operativa</h3>
                                        <div className="space-y-1">
                                            <p className="text-xl font-semibold text-secondary-800">Via Vallerotonda, 13</p>
                                            <p className="text-lg text-secondary-600 font-medium">00178 ROMA</p>
                                        </div>
                                        <p className="text-sm text-secondary-500 mt-2">Qui lavoriamo ai tuoi progetti</p>
                                    </div>
                                </div>
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
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info Section */}
            
        </div>
    );
};

export default Contacts; 