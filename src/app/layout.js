import './globals.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Smart Tax & Accounting Consultancy',
  description: 'Expert tax and accounting advisory for SMEs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        <footer style={{ background: '#020617', color: 'white', padding: '60px 0', borderTop: '1px solid #1e293b' }}>
          <div className="container">
            <div className="grid-3">
              <div>
                <h3 style={{ color: 'white', marginBottom: '20px' }}>Smart Tax</h3>
                <p style={{ color: '#94a3b8' }}>
                  Integrated, end-to-end solutions across accounting, financial reporting, bookkeeping, and tax compliance.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '20px' }}>Quick Links</h4>
                <ul style={{ listStyle: 'none', space: '10px' }}>
                  <li style={{ marginBottom: '10px' }}><Link href="/bookkeeping">Bookkeeping</Link></li>
                  <li style={{ marginBottom: '10px' }}><Link href="/tax-compliance">Tax Compliance</Link></li>
                  <li style={{ marginBottom: '10px' }}><Link href="/services">Other Services</Link></li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '20px' }}>Contact</h4>
                <p style={{ color: '#94a3b8' }}>Get in touch with our expert team today.</p>
                <div style={{ marginTop: '20px' }}>
                  <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>Contact Now</Link>
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #334155', marginTop: '60px', paddingTop: '30px', textAlign: 'center', color: '#94a3b8' }}>
              © {new Date().getFullYear()} Smart Tax & Accounting Consultancy. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
