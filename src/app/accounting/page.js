import Link from 'next/link';

export default function AccountingPage() {
    return (
        <>
            <section className="section" style={{
                background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("/assets/Bookkepping_header.avif")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '100px 0',
                color: 'white'
            }}>
                <div className="container">
                    <h1 className="text-h1">Accounting & Bookkeeping Services</h1>
                    <p className="text-body" style={{ maxWidth: '800px', color: '#e2e8f0' }}>
                        Accurate and timely financial information is the foundation of sound business decision-making. Our services provide clarity, control, and compliance.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2">
                        <div>
                            <h2 className="text-h2">Precision & Compliance</h2>
                            <p className="text-body" style={{ marginBottom: '20px' }}>
                                We deliver end-to-end bookkeeping and accounting solutions tailored to the needs of small and medium-sized enterprises, ensuring that financial records are maintained with precision and in accordance with applicable accounting standards and regulatory requirements.
                            </p>
                            <h3 className="text-h3">Our Core Services</h3>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '2', color: 'var(--secondary)' }}>
                                <li>Systematic recording of financial transactions</li>
                                <li>Maintenance of general ledgers</li>
                                <li>Bank and account reconciliations</li>
                                <li>Accounts receivable and payable management</li>
                                <li>Payroll accounting</li>
                                <li>Preparation of periodic financial statements</li>
                            </ul>
                        </div>
                        <div style={{ background: '#f1f5f9', padding: '40px', borderRadius: '12px' }}>
                            <h3 className="text-h3">Why Partner With Us?</h3>
                            <p className="text-body" style={{ marginBottom: '20px' }}>
                                Beyond routine compliance, we provide insight-driven accounting support, helping management understand financial performance, monitor cash flows, and identify opportunities.
                            </p>
                            <ul style={{ listStyle: 'none', space: '10px' }}>
                                <li style={{ marginBottom: '10px' }}>✓ Improved financial transparency</li>
                                <li style={{ marginBottom: '10px' }}>✓ Timely and compliant financial statements</li>
                                <li style={{ marginBottom: '10px' }}>✓ Reduced operational and regulatory risk</li>
                                <li style={{ marginBottom: '10px' }}>✓ Professional focus on core business activities</li>
                            </ul>
                            <div style={{ marginTop: '30px' }}>
                                <Link href="/contact" className="btn btn-primary">Request a Consultation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
