import React, { useState } from 'react';
import { Eye, ExternalLink, Folder } from 'react-feather';
import bro from '../assets/images/bro.png';
import mag from '../assets/images/mag.png';
import pack from '../assets/images/pack.png';
import event1 from '../assets/images/event1.png';
import event2 from '../assets/images/event2.png';
import event3 from '../assets/images/event3.png';
import adv1 from '../assets/images/adv1.png';
import adv2 from '../assets/images/adv2.png';
import adv3 from '../assets/images/adv3.png';
import brand1 from '../assets/images/brand1.png';
import brand2 from '../assets/images/brand2.png';
import brand3 from '../assets/images/brand3.png';
import site1 from '../assets/images/site1.png';
import site2 from '../assets/images/site2.png';
import site3 from '../assets/images/site3.png';
import media1 from '../assets/images/media1.png';
import media2 from '../assets/images/media2.png';
import media3 from '../assets/images/media3.png';

const Portfolio: React.FC = () => {
    const [activeTab, setActiveTab] = useState('eventi');

    const portfolioData = {
        eventi: {
            title: "Eventi",
            items: [
                { title: "Conferenza Annuale OSA", description: "Organizzazione completa evento aziendale con 500 partecipanti", image: event1 },
                { title: "Team Building Aziendale", description: "Evento di team building per multinazionale del settore tech", image: event2 },
                { title: "Lancio Prodotto", description: "Evento di lancio prodotto con live streaming e media coverage", image: event3 },
            ]
        },
        advertising: {
            title: "Advertising",
            items: [
                { title: "Campagna TV Nazionale", description: "Spot televisivo per brand del settore alimentare", image: adv1 },
                { title: "Campagna Digital", description: "Strategia pubblicitaria multi-canale per e-commerce", image: adv2 },
                { title: "Outdoor Campaign", description: "Campagna affissioni metropolitane per servizio finanziario", image: adv3 },
            ]
        },
        logo: {
            title: "Logo & Brand Identity",
            items: [
                { title: "Rebranding Startup Tech", description: "Nuovo logo e identità visiva per startup innovativa", image: brand1 },
                { title: "Brand Identity Ristorante", description: "Logo e coordinato per catena di ristoranti", image: brand2 },
                { title: "Corporate Identity", description: "Identità aziendale completa per società di consulenza", image: brand3 },
            ]
        },
        graphic: {
            title: "Graphic Design",
            items: [
                { title: "Brochure Aziendale", description: "Design e impaginazione brochure istituzionale", image: bro },
                { title: "Packaging Design", description: "Design packaging per linea prodotti cosmetici", image: pack },
                { title: "Magazine Layout", description: "Impaginazione magazine trimestrale settore moda", image: mag },
            ]
        },
        web: {
            title: "Web Design",
            items: [
                { title: "E-commerce Fashion", description: "Sito e-commerce responsive per brand di moda", image: site1 },
                { title: "Corporate Website", description: "Sito istituzionale per azienda manifatturiera", image: site2 },
                { title: "Landing Page", description: "Landing page ad alta conversione per servizio SaaS", image: site3 },
            ]
        },
        audiovisivi: {
            title: "Audiovisivi",
            items: [
                { title: "Video Istituzionale", description: "Produzione video corporate per multinazionale", image: media1 },
                { title: "Spot Pubblicitario", description: "Realizzazione spot per campagna TV e digital", image: media2 },
                { title: "Documentario Aziendale", description: "Documentario sulla storia e valori dell'azienda", image: media3 },
            ]
        }
    };

    const tabs = Object.keys(portfolioData);

    return (
        <div className="pt-20">
            <section className="py-24 bg-gradient-to-b from-primary-50 via-white to-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20">

                        <h1 className="text-4xl md:text-6xl pt-20 font-black text-secondary-900 mb-6">
                            I nostri{' '}
                            <span className="gradient-text-primary-simple">
                                progetti
                            </span>
                        </h1>
                        <p className="text-xl text-secondary-600 leading-relaxed">
                            Scopri alcuni dei lavori che abbiamo realizzato per i nostri clienti. 
                            Ogni progetto racconta una storia di successo e creatività.
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    activeTab === tab
                                        ? 'bg-primary-500 text-white shadow-lg transform -translate-y-0.5'
                                        : 'bg-white text-secondary-700 hover-bg-primary-50 hover-text-primary-600 shadow-md'
                                }`}
                            >
                                {portfolioData[tab as keyof typeof portfolioData].title}
                            </button>
                        ))}
                    </div>

                    {/* Portfolio Content */}
                    <div className="max-w-7xl mx-auto">
                        {tabs.map(tab => (
                            <div
                                key={tab}
                                className={`${activeTab === tab ? 'block animate-fadeIn' : 'hidden'}`}
                            >
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {portfolioData[tab as keyof typeof portfolioData].items.map((item, index) => (
                                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100 group">
                                            <div className="relative overflow-hidden">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title}
                                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                                        <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                                                            <Eye className="w-5 h-5" />
                                                        </button>
                                                        <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                                                            <ExternalLink className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-secondary-600 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 section-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Hai un progetto in mente?
                    </h2>
                    <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                        Raccontaci la tua idea e trasformiamola insieme in un progetto di successo.
                    </p>
                    <a 
                        href="/contatti" 
                        className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                        Inizia il tuo progetto
                        <ExternalLink className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Portfolio; 