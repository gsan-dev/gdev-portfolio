import React from 'react';

const Roadmap = () => {
    const items = [
        { quarter: "Actualidad", title: "Consolidación de Proxmox", desc: "Optimización de LXC y gestión avanzada de almacenamiento ZFS.", status: "En curso" },
        { quarter: "Q1 2025", title: "Alta Disponibilidad (HA)", desc: "Implementación de clúster de nodos para redundancia de servicios.", status: "Planificado" },
        { quarter: "Q2 2025", title: "Infraestructura como Código", desc: "Automatización del despliegue de VMs/LXC usando Terraform o Ansible.", status: "Futuro" }
    ];

    return (
        <section id="roadmap" className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white">Roadmap de Aprendizaje</h2>
                    <p className="mt-4 text-slate-400">Evolución planificada hacia arquitecturas DevOps profesionales.</p>
                </div>

                <div className="relative border-l border-slate-800 ml-4 md:ml-0 space-y-12">
                    {items.map((item, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            <div className="md:flex items-center justify-between group">
                                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-slate-900 bg-accent-500 md:left-auto md:right-1/2 md:-mr-1.5 md:mt-0"></div>

                                <div className="md:w-1/2 md:pr-12 md:text-right">
                                    <span className="inline-block px-2 py-1 text-xs font-mono text-accent-400 bg-slate-900 border border-slate-800 rounded mb-2 md:mb-0">
                                        {item.quarter}
                                    </span>
                                </div>

                                <div className="md:w-1/2 md:pl-12">
                                    <h3 className="text-lg font-bold text-white group-hover:text-accent-400 transition-colors">{item.title}</h3>
                                    <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                                    <p className="text-xs text-slate-500 mt-2 font-mono uppercase tracking-wider">{item.status}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
