'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const getLinkStyle = (path) => {
        const baseStyle = {
            position: 'relative'
        };
        // Add underline if active
        if (pathname === path) {
            return {
                ...baseStyle,
                color: 'var(--primary)',
                borderBottom: '2px solid var(--accent-gold)' // Using accent gold for high visibility/premium feel
            };
        }
        return baseStyle;
    };

    return (
        <nav className="navbar">
            <div className="container nav-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                    Smart Tax
                </Link>
                <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                    <Link href="/" className="nav-link" style={getLinkStyle('/')}>Home</Link>
                    <Link href="/accounting" className="nav-link" style={getLinkStyle('/accounting')}>Accounting</Link>
                    <Link href="/tax-compliance" className="nav-link" style={getLinkStyle('/tax-compliance')}>Tax Compliance</Link>
                    <Link href="/other-services" className="nav-link" style={getLinkStyle('/other-services')}>Other Services</Link>
                    <Link href="/contact" className="nav-link btn btn-primary" style={{ color: 'white', padding: '8px 16px', display: 'inline-flex', alignItems: 'center' }}>Contact Us</Link>
                </div>
            </div>
        </nav>
    );
}
