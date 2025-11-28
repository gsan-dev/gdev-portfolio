import React from 'react';
import { Icons } from './Icons';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-accent-500 text-xs font-medium mb-6 uppercase tracking-wider animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                    </span>
                    Disponible para proyectos
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                    Ingeniería de Sistemas <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-indigo-300">
                        & Virtualización
                    </span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed">
                    Guillermo Sánchez. Especialista en gestión de entornos Proxmox,
                    segmentación de redes y despliegue de servicios contenerizados de alta disponibilidad.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <a href="#infraestructura" className="px-8 py-3 rounded-lg bg-accent-600 text-white font-medium hover:bg-accent-500 transition-all shadow-lg shadow-accent-600/25 flex items-center gap-2">
                        <Icons.Server className="w-5 h-5" /> Ver Infraestructura
                    </a>
                    <a href="#contacto" className="px-8 py-3 rounded-lg bg-slate-800 text-slate-200 font-medium hover:bg-slate-700 transition-all border border-slate-700">
                        Contactar
                    </a>
                </div>

                {/* Abstract Tech Visualization Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-accent-600/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-900/20 rounded-full blur-[120px]"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
