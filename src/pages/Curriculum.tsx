import React from 'react';
import { BookOpen, Award, Users, TrendingUp } from 'react-feather';

const ExperienceCard: React.FC<{ icon: React.ReactNode; title: string; items: string[] }> = ({ icon, title, items }) => (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg card-hover border border-white/20 h-full flex flex-col">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-secondary-900 mb-6">{title}</h3>
        <ul className="space-y-3 flex-1">
            {items.map((item, index) => (
                <li key={index} className="flex items-start group">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0 mt-2 group-hover:bg-primary-600 transition-colors"></div>
                    <span className="text-secondary-600 group-hover:text-secondary-900 transition-colors leading-relaxed">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);


const Curriculum: React.FC = () => {
    const editorialExperience = [
        "Stesura testi per comunicazione interna ed esterna",
        "Creazione e gestione house organ aziendali",
        "Realizzazione di company profile e brochure",
        "Ghost writing per blog e testate giornalistiche",
        "Realizzazione riviste e progetti editoriali"
    ];

    const marketingExperience = [
        "Strategie di marketing e comunicazione",
        "Campagne pubblicitarie su stampa, radio, web",
        "Media planning e buying",
        "Organizzazione eventi e promozioni",
        "Progetti di co-marketing e sponsorizzazioni"
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-primary-50 via-white to-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        
                        <h1 className="text-4xl md:text-6xl pt-20 font-black text-secondary-900 mb-6">
                            Il nostro{' '}
                            <span className="gradient-text-primary-simple">
                                percorso
                            </span>
                        </h1>
                        <p className="text-xl text-secondary-600 leading-relaxed">
                            Anni di esperienza nel settore della comunicazione, progetti realizzati e clienti soddisfatti. 
                            Scopri la nostra storia professionale.
                        </p>
                    </div>

                    {/* Experience Cards */}
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
                        <ExperienceCard
                            icon={<BookOpen className="w-8 h-8 text-white" />}
                            title="Editoria e Contenuti"
                            items={editorialExperience}
                        />
                        <ExperienceCard
                            icon={<TrendingUp className="w-8 h-8 text-white" />}
                            title="Marketing e Advertising"
                            items={marketingExperience}
                        />
                    </div>
                </div>
            </section>


            {/* Stats Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                            I nostri{' '}
                            <span className="gradient-text-primary-simple">
                                numeri
                            </span>
                        </h2>
                        <p className="text-xl text-secondary-600 leading-relaxed">
                            Risultati concreti che testimoniano la qualità del nostro lavoro
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <Award className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-4xl font-black text-secondary-900 mb-2">15+</div>
                            <p className="text-secondary-600 font-medium">Anni di esperienza</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-4xl font-black text-secondary-900 mb-2">100+</div>
                            <p className="text-secondary-600 font-medium">Clienti soddisfatti</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <BookOpen className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-4xl font-black text-secondary-900 mb-2">500+</div>
                            <p className="text-secondary-600 font-medium">Progetti realizzati</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <TrendingUp className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-4xl font-black text-secondary-900 mb-2">95%</div>
                            <p className="text-secondary-600 font-medium">Tasso di soddisfazione</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 section-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Vuoi far parte della nostra storia?
                    </h2>
                    <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                        Contattaci per scoprire come possiamo aiutarti a raggiungere i tuoi obiettivi di comunicazione.
                    </p>
                    <a 
                        href="/contatti" 
                        className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                        Inizia il tuo progetto
                        <Award className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Curriculum; 