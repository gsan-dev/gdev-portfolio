import React from 'react';

const Footer = () => (
    <footer className="py-8 border-t border-slate-900 bg-slate-950 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Guillermo Sánchez Domínguez (gdev).</p>
        <p className="mt-2 text-xs">
            <span className="text-green-500">●</span> Systems Operational.
        </p>
    </footer>
);

export default Footer;
