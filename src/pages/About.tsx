import React from 'react';
import { Users, Heart, Zap, Award } from 'react-feather';

const TeamMember: React.FC<{ name: string; role: string; description: string }> = ({ name, role, description }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100">
        <div className="p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-white font-bold text-2xl">{name.charAt(0)}</span>
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 text-center mb-2">{name}</h3>
            <p className="text-primary-600 font-semibold text-center mb-4">{role}</p>
            <p className="text-secondary-600 leading-relaxed text-center">{description}</p>
        </div>
    </div>
);

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-float">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-secondary-900 mb-4">{title}</h3>
        <p className="text-secondary-600 leading-relaxed">{description}</p>
    </div>
);

const About: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-primary-50 via-white to-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                            
                        <h1 className="text-4xl md:text-6xl pt-20 font-black text-secondary-900 mb-6">
                            Un cuore{' '}
                            <span className="gradient-text-primary-simple">
                                cooperativo
                            </span>
                            <br />
                            infiniti modi di{' '}
                            <span className="gradient-text-primary-simple">
                                comunicare
                            </span>
                        </h1>
                        <p className="text-xl text-secondary-600 leading-relaxed">
                            Siamo una cooperativa di comunicazione nata dalla passione di quattro professionisti 
                            che hanno deciso di unire le proprie competenze per offrire servizi di qualità nel mondo della comunicazione.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                            I nostri{' '}
                            <span className="gradient-text-primary-simple">
                                valori
                            </span>
                        </h2>
                        <p className="text-xl text-secondary-600 leading-relaxed">
                            Quello che ci guida ogni giorno nel nostro lavoro
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <ValueCard
                            icon={<Heart className="w-8 h-8 text-white" />}
                            title="Passione"
                            description="Mettiamo il cuore in ogni progetto, perché crediamo che la passione sia il motore dell'eccellenza."
                        />
                        <ValueCard
                            icon={<Users className="w-8 h-8 text-white" />}
                            title="Collaborazione"
                            description="Il nostro spirito cooperativo ci permette di unire competenze diverse per risultati straordinari."
                        />
                        <ValueCard
                            icon={<Zap className="w-8 h-8 text-white" />}
                            title="Innovazione"
                            description="Cerchiamo sempre soluzioni creative e innovative per distinguere i nostri clienti."
                        />
                        <ValueCard
                            icon={<Award className="w-8 h-8 text-white" />}
                            title="Qualità"
                            description="Non scendiamo mai a compromessi sulla qualità, perché il vostro successo è il nostro successo."
                        />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                            Il nostro{' '}
                            <span className="gradient-text-primary-simple">
                                team
                            </span>
                        </h2>
                        <p className="text-xl text-secondary-600 leading-relaxed">
                            Quattro professionisti, un'unica visione: comunicare con efficacia e creatività
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <TeamMember
                            name="Zac"
                            role="Creative Director"
                            description="Esperto in comunicazione visiva e strategia creativa, trasforma le idee in progetti vincenti."
                        />
                        <TeamMember
                            name="Francesco"
                            role="Marketing Strategist"
                            description="Specializzato in marketing digitale e analisi di mercato, sviluppa strategie data-driven."
                        />
                        <TeamMember
                            name="Luca"
                            role="Content Manager"
                            description="Copywriter e content creator, sa trovare le parole giuste per ogni messaggio."
                        />
                        <TeamMember
                            name="Azzurra"
                            role="Project Manager"
                            description="Coordina progetti e team, garantendo qualità e rispetto dei tempi di consegna."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 section-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Vuoi conoscerci meglio?
                    </h2>
                    <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                        Siamo sempre pronti a raccontarti di più sui nostri progetti e su come possiamo aiutarti.
                    </p>
                    <a 
                        href="/contatti" 
                        className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                        Contattaci
                        <Users className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About; 