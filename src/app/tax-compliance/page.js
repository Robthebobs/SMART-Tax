import Link from 'next/link';

export default function TaxCompliancePage() {
    return (
        <>
            <section className="section" style={{
                background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("/assets/Tax_Header.avif")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '100px 0',
                color: 'white'
            }}>
                <div className="container">
                    <h1 className="text-h1">Tax Compliance Services</h1>
                    <p className="text-body" style={{ maxWidth: '800px', color: '#e2e8f0' }}>
                        Mitigate risk and maintain regulatory confidence with our comprehensive tax compliance support.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <p className="text-body" style={{ marginBottom: '40px', maxWidth: '900px' }}>
                        Smart Business Solutions provides comprehensive tax compliance services, supported by our registration with the Federal Tax Authority (FTA) and the Internal Revenue Service (IRS). We manage the complete tax compliance lifecycle, emphasizing accuracy, transparency, and adherence to statutory deadlines.
                    </p>

                    <div className="grid-2">
                        <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
                            <h3 className="text-h3">United Arab Emirates (UAE)</h3>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.8', color: 'var(--secondary)', marginTop: '20px' }}>
                                <li>VAT registration, return preparation, and timely filing</li>
                                <li>Corporate Tax compliance, reporting, and regulatory support</li>
                                <li>Review and response to Federal Tax Authority (FTA) notices</li>
                                <li>Representation before the FTA on your behalf</li>
                            </ul>
                        </div>

                        <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
                            <h3 className="text-h3">United States of America (USA)</h3>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.8', color: 'var(--secondary)', marginTop: '20px' }}>
                                <li>Individual and corporate tax return preparation and filing</li>
                                <li>Withholding and indirect tax compliance</li>
                                <li>IRS-related filings and statutory reporting obligations</li>
                                <li>Ongoing advisory support for U.S. tax regulations</li>
                                <li>Representation before the Internal Revenue Service (IRS)</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginTop: '60px', textAlign: 'center' }}>
                        <h3 className="text-h3">Expert Hands for Your Compliance</h3>
                        <p className="text-body" style={{ maxWidth: '700px', margin: '0 auto 30px' }}>
                            Acting as trusted advisors, we manage your tax obligations with precision and discretion, allowing you to focus confidently on running and growing your business.
                        </p>
                        <Link href="/contact" className="btn btn-primary">Speak to a Tax Expert</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
