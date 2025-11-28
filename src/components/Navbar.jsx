import React, { useState } from 'react';
import { Icons } from './Icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                            <span className="text-accent-500 font-mono">&lt;gdev/&gt;</span>
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['Sobre mí', 'Stack', 'Infraestructura', 'Roadmap', 'Contacto'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-slate-300 hover:text-accent-500 transition-colors duration-200">
                                    {item}
                                </a>
                            ))}
                            <a href="#contacto" className="bg-accent-600 hover:bg-accent-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-lg shadow-accent-600/20">
                                Contratar
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 hover:text-white p-2">
                            {isOpen ? <Icons.X /> : <Icons.Menu />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['Sobre mí', 'Stack', 'Infraestructura', 'Roadmap', 'Contacto'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800" onClick={() => setIsOpen(false)}>
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
