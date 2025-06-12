import React from 'react';
import { Shield, FileText, Lock, Eye } from 'react-feather';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-primary-50 via-white to-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 font-medium mb-8">
                            <Shield className="w-4 h-4 mr-2" />
                            Privacy Policy
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-secondary-900 mb-6">
                            La tua{' '}
                            <span className="gradient-text-primary-simple">
                                privacy
                            </span>{' '}
                            è importante
                        </h1>
                        <p className="text-xl text-secondary-600 leading-relaxed">
                            Informazioni sul trattamento dei dati personali secondo il GDPR e la normativa italiana sulla privacy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Privacy Cards */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <Lock className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary-900 mb-4">Dati Protetti</h3>
                                <p className="text-secondary-600">I tuoi dati sono trattati con la massima sicurezza e riservatezza</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <Eye className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary-900 mb-4">Trasparenza</h3>
                                <p className="text-secondary-600">Chiare informazioni su come utilizziamo i tuoi dati personali</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <FileText className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary-900 mb-4">Conformità GDPR</h3>
                                <p className="text-secondary-600">Rispettiamo tutte le normative europee sulla protezione dei dati</p>
                            </div>
                        </div>

                        {/* Privacy Policy Content */}
                        <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-white/20">
                            <div className="prose max-w-none">
                                <h2 className="text-3xl font-bold text-secondary-900 mb-8 flex items-center">
                                    <FileText className="w-8 h-8 mr-3 text-primary-600" />
                                    Informativa per il Trattamento dei Dati Personali
                                </h2>
                                
                                <div className="space-y-8">
                                    <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500">
                                        <h3 className="text-xl font-bold text-secondary-900 mb-4">Titolare del Trattamento</h3>
                                        <p className="text-secondary-700 leading-relaxed">
                                            <strong>Coomunica</strong><br />
                                            Via Vallerotonda, 13 - 00178 ROMA<br />
                                            Email: info@coomunica.it
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-secondary-900 mb-4">Base Giuridica del Trattamento</h3>
                                        <p className="text-secondary-700 leading-relaxed mb-4">
                                            La presente informativa è resa ai sensi dell'articolo 13 del Regolamento UE 2016/679 (GDPR) 
                                            e del d.lgs. n. 196/2003 – Codice in materia di protezione dei dati personali.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-secondary-900 mb-4">Finalità del Trattamento</h3>
                                        <p className="text-secondary-700 leading-relaxed mb-4">
                                            I dati personali raccolti attraverso il nostro sito web sono utilizzati per:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                                            <li>Rispondere alle richieste di informazioni</li>
                                            <li>Fornire i servizi richiesti</li>
                                            <li>Invio di comunicazioni commerciali (previo consenso)</li>
                                            <li>Adempimenti di obblighi legali</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-secondary-900 mb-4">Modalità del Trattamento</h3>
                                        <p className="text-secondary-700 leading-relaxed">
                                            Il trattamento dei dati personali è effettuato con strumenti informatici e telematici, 
                                            con modalità organizzative e logiche strettamente correlate alle finalità indicate. 
                                            Oltre al titolare, potrebbero avere accesso ai dati soggetti appositamente incaricati.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-secondary-900 mb-4">Diritti dell'Interessato</h3>
                                        <p className="text-secondary-700 leading-relaxed mb-4">
                                            L'interessato ha diritto di ottenere dal titolare:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                                            <li>La conferma dell'esistenza o meno di dati personali che lo riguardano</li>
                                            <li>L'aggiornamento, la rettificazione ovvero l'integrazione dei dati</li>
                                            <li>La cancellazione, la trasformazione in forma anonima o il blocco dei dati</li>
                                            <li>La portabilità dei dati</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-xl">
                                        <h3 className="text-xl font-bold text-secondary-900 mb-4">Consenso</h3>
                                        <p className="text-secondary-700 leading-relaxed">
                                            Il conferimento dei dati è facoltativo. Il rifiuto a fornire i dati comporta 
                                            l'impossibilità di ottenere i servizi richiesti. Per l'invio di comunicazioni 
                                            commerciali è necessario il consenso esplicito dell'interessato.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                            Hai{' '}
                            <span className="gradient-text-primary-simple">
                                domande
                            </span>?
                        </h2>
                        <p className="text-xl text-secondary-600 leading-relaxed mb-10">
                            Per qualsiasi chiarimento sulla nostra privacy policy o per esercitare i tuoi diritti, 
                            non esitare a contattarci.
                        </p>
                        <a 
                            href="/contatti" 
                            className="btn-gradient-primary px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center"
                        >
                            Contattaci
                            <Shield className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy; 