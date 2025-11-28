import React from 'react';
import { Icons } from './Icons';

const ProjectCard = ({ title, description, tags, type, challenge, result }) => (
    <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-accent-900/20 transition-all duration-300 flex flex-col h-full">
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-accent-600 to-indigo-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

        <div className="p-8 flex-1">
            <div className="flex justify-between items-start mb-4">
                <span className="inline-block py-1 px-3 rounded-full bg-slate-800 text-accent-400 text-xs font-semibold uppercase tracking-wider">
                    {type}
                </span>
                <div className="flex gap-3">
                    {/* Mock links */}
                    <a href="#" className="text-slate-500 hover:text-white transition-colors" title="Ver Infraestructura"><Icons.Server /></a>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">{title}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>

            <div className="space-y-4 mb-6">
                <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800/50">
                    <p className="text-sm text-slate-300"><strong className="text-accent-500">Reto:</strong> {challenge}</p>
                </div>
                <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800/50">
                    <p className="text-sm text-slate-300"><strong className="text-accent-500">Solución:</strong> {result}</p>
                </div>
            </div>
        </div>

        <div className="p-6 pt-0 mt-auto">
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-slate-500 bg-slate-950 border border-slate-800 px-2 py-1 rounded">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "Infraestructura Homelab Empresarial",
            type: "Virtualización",
            description: "Diseño e implementación de un entorno de virtualización centralizado sobre Proxmox VE para alojar múltiples servicios en un único nodo físico.",
            challenge: "Maximizar el rendimiento del hardware limitado reduciendo el overhead del sistema operativo.",
            result: "Migración de VMs pesadas a contenedores LXC ligeros, reduciendo el consumo de RAM en un 40% y mejorando tiempos de arranque.",
            tags: ["Proxmox VE", "LXC Containers", "ZFS", "Backup Strategy"]
        },
        {
            title: "Gateway de Servicios Seguros",
            type: "Networking & Security",
            description: "Arquitectura de red para exponer servicios internos (Nextcloud, Home Assistant, etc.) a internet de manera segura y cifrada.",
            challenge: "Acceder a herramientas internas desde el exterior sin exponer puertos vulnerables ni depender de VPNs lentas.",
            result: "Implementación de Nginx Proxy Manager con certificados SSL Wildcard automáticos y Cloudflare Proxy para ocultar la IP real.",
            tags: ["Nginx Proxy Manager", "Cloudflare", "SSL/TLS", "Docker Network"]
        },
        {
            title: "Ecosistema de Servicios Contenerizados",
            type: "Despliegue & Operaciones",
            description: "Gestión de una flota de más de 10 microservicios interconectados para automatización, almacenamiento y monitoreo.",
            challenge: "Mantener, actualizar y monitorear múltiples servicios dispares asegurando que si uno falla no afecte al resto.",
            result: "Orquestación mediante Docker Compose y Portainer, con volúmenes de datos persistentes y redes aisladas por servicio.",
            tags: ["Docker", "Portainer", "Watchtower", "Microservicios"]
        }
    ];

    return (
        <section id="infraestructura" className="py-20 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white">Infraestructura Desplegada</h2>
                        <p className="mt-4 text-slate-400 max-w-2xl">
                            Proyectos activos de administración de sistemas y virtualización en entorno de producción personal.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
