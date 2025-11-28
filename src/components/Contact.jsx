import React from 'react';
import { Icons } from './Icons';

const Contact = () => {
    return (
        <section id="contacto" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">¿Hablamos de Infraestructura?</h2>
                <p className="text-slate-400 mb-10 text-lg">
                    Estoy disponible para colaboraciones relacionadas con administración de sistemas, virtualización y gestión de servidores Linux.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="mailto:gdev@outlook.es" className="flex items-center justify-center gap-3 px-8 py-4 bg-accent-600 text-white rounded-lg font-bold hover:bg-accent-500 transition-all shadow-lg shadow-accent-600/25">
                        <Icons.Mail /> Enviar Correo
                    </a>
                    <a href="https://www.linkedin.com/in/guillermosanchezdominguez/" target="_blank" className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-all border border-slate-700">
                        <span className="font-sans font-bold">in</span> LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
