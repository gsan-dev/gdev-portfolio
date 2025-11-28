import React from 'react';
import { Icons } from './Icons';

const About = () => {
    return (
        <section id="sobre-mí" className="py-20 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Arquitectura y <br /><span className="text-accent-500">Optimización de Recursos</span></h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed">
                            <p>
                                Hola, soy <strong>Guillermo Sánchez Domínguez</strong>, conocido en el ámbito técnico como <strong>gdev</strong>.
                            </p>
                            <p>
                                Mi especialidad no es solo "hacer que funcione", sino diseñar la infraestructura base que permite que los servicios operen con eficiencia y seguridad. Gestiono un ecosistema avanzado de virtualización basado en <strong>Proxmox VE</strong>.
                            </p>
                            <p>
                                En lugar de centrarme en el código de aplicación, mi foco está en la <strong>orquestación del sistema operativo</strong>, la gestión eficiente de recursos mediante <strong>LXC (Linux Containers)</strong> y VMs, y la implementación de redes seguras para servicios autohospedados.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                                <div className="text-accent-500 mb-2"><Icons.Activity /></div>
                                <div className="text-white font-semibold">Proxmox VE</div>
                                <div className="text-sm text-slate-500">Gestión Avanzada</div>
                            </div>
                            <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                                <div className="text-accent-500 mb-2"><Icons.Shield /></div>
                                <div className="text-white font-semibold">LXC & Docker</div>
                                <div className="text-sm text-slate-500">Containerización</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent-600 to-indigo-600 rounded-xl transform rotate-3 opacity-20 blur-lg"></div>
                        <div className="relative bg-slate-950 border border-slate-800 rounded-xl p-6 font-mono text-sm text-slate-300 shadow-2xl">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <p className="text-green-400">$ whoami</p>
                            <p className="mb-4">gdev (Guillermo Sánchez)</p>

                            <p className="text-green-400">$ neofetch</p>
                            <div className="grid grid-cols-[100px_1fr] gap-2">
                                <span className="text-slate-500">Host:</span> <span>Proxmox VE Cluster</span>
                                <span className="text-slate-500">Virtualiz:</span> <span>LXC / KVM</span>
                                <span className="text-slate-500">Containers:</span> <span>Docker / Portainer</span>
                                <span className="text-slate-500">Uptime:</span> <span>99.98%</span>
                                <span className="text-slate-500">Focus:</span> <span>SysAdmin, Networking</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
