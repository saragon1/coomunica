import React from 'react';
import { Calendar, Radio, FileText, Globe, Video } from 'react-feather';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; items: string[] }> = ({ title, items }) => (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg card-hover border border-white/20 h-full flex flex-col">
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

const Services: React.FC = () => {
    const services = [
        {
            icon: <Calendar className="w-8 h-8 text-white" />,
            title: "Eventi Aziendali",
            items: [
                "Ideazione e organizzazione completa", "Individuazione location perfette", "Organizzazione catering di qualità",
                "Servizi front e back office", "Animazione e intrattenimento", "Immagine coordinata personalizzata",
                "Team building creativi", "Riprese e streaming live", "Servizi fotografici professionali",
                "Comunicazione e merchandising", "Servizi di traduzione"
            ]
        },
        {
            icon: <Radio className="w-8 h-8 text-white" />,
            title: "Mass Media",
            items: [
                "Progetti di comunicazione strategica", "Advertising creativo e efficace", "Ideazione e realizzazione spot",
                "Campagne stampa e affissioni", "Pianificazioni media ottimizzate"
            ]
        },
        {
            icon: <FileText className="w-8 h-8 text-white" />,
            title: "Below the Line",
            items: [
                "Ideazione e impaginazione professionale", "Magazine aziendali", "Bilanci Sociali dettagliati",
                "Brochure accattivanti", "Pieghevoli informativi", "Volantini promozionali",
                "Immagine coordinata completa", "Gadget personalizzati"
            ]
        },
        {
            icon: <Globe className="w-8 h-8 text-white" />,
            title: "Comunicazione Web",
            items: [
                "Progettazione siti web moderni", "Gestione contenuti e aggiornamenti", "Campagne social strategiche",
                "SEO e ottimizzazione", "E-commerce personalizzati"
            ]
        },
        {
            icon: <Video className="w-8 h-8 text-white" />,
            title: "Audiovisivi",
            items: [
                "Filmati istituzionali di qualità", "Video promozionali accattivanti", "Interviste professionali",
                "Spot pubblicitari creativi", "Riprese eventi live", "Dirette streaming", 
                "Trasmissioni televisive", "Podcast e contenuti audio"
            ]
        }
    ];

    return (
        <div className="pt-20">
            <section className="py-24 bg-gradient-to-b from-primary-50 via-white to-gray-50">

                {/* Background Elements */}
                <div className="absolute top-80 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
                
                <div className="relative z-10 container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <h1 className="text-4xl md:text-6xl pt-20 font-black text-secondary-900 mb-6 animate-slideUp">
                            Dalla A alla Z,{' '}
                            <span className="gradient-text-primary-simple">
                                zero pensieri
                            </span>{' '}
                            per te
                        </h1>
                        <div className="space-y-6 text-xl text-secondary-600 leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
                            <p>
A come Advertising, Zeta come zero pensieri per te. Perché saremo noi ad occuparci di tutto. L'organizzazione del tuo evento aziendale, la strategia migliore per il tuo brand, quella brochure da riscrivere finalmente come si deve o il sito web da realizzare per farti trovare da nuovi clienti: Coomunica può supportare la tua attività in molti modi.                             </p>
                            <p>
                            Può farla conoscere, darle valore, raccontarla al mondo esterno. Con tutte le lettere dell'alfabeto che sappiamo mettere insieme per formare parole e idee che diventano progetti da mettere a disposizione del tuo lavoro.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <div key={index} className="animate-slideUp" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                                <ServiceCard 
                                    icon={service.icon}
                                    title={service.title} 
                                    items={service.items} 
                                />
                            </div>
                        ))}
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services; 