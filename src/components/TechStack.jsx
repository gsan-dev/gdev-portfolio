import React from 'react';
import { Icons } from './Icons';

const StackCard = ({ title, icon: Icon, skills }) => (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-accent-500/50 transition-colors duration-300">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-800 rounded-lg text-accent-500">
                <Icon />
            </div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <ul className="space-y-2">
            {skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500"></span>
                    {skill}
                </li>
            ))}
        </ul>
    </div>
);

const TechStack = () => {
    const stacks = [
        {
            title: "Virtualización Core",
            icon: Icons.Server,
            skills: ["Proxmox VE (PVE)", "Linux Containers (LXC)", "KVM Virtual Machines", "ZFS Storage Management"]
        },
        {
            title: "Gestión de Servicios",
            icon: Icons.Cpu,
            skills: ["Docker Stacks", "Portainer", "Systemd Services", "Gestión de Recursos (RAM/CPU)"]
        },
        {
            title: "Networking & Proxy",
            icon: Icons.Globe,
            skills: ["Nginx Proxy Manager", "Cloudflare Tunnels", "DNS Management (Pi-Hole)", "VLAN Segmentation"]
        },
        {
            title: "Seguridad & Acceso",
            icon: Icons.Shield,
            skills: ["SSH Key Management", "Firewall Rules (UFW/PVE)", "VPN (WireGuard)", "SSL/TLS Certificates"]
        }
    ];

    return (
        <section id="stack" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white">Stack de Operaciones</h2>
                    <p className="mt-4 text-slate-400">Tecnologías que utilizo para desplegar, asegurar y mantener servicios.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stacks.map((stack, index) => (
                        <StackCard key={index} {...stack} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
