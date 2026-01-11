import Link from 'next/link';

export default function ServicesPage() {
    return (
        <>
            <section className="section" style={{
                background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("/assets/Services_Header.avif")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '100px 0',
                color: 'white'
            }}>
                <div className="container">
                    <h1 className="text-h1">Specialized Advisory Services</h1>
                    <p className="text-body" style={{ maxWidth: '800px', color: '#e2e8f0' }}>
                        Beyond core accounting and tax, we offer specialized services to support your business lifecycle.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2">

                        <div className="card">
                            <h3 className="text-h3">Transfer Pricing</h3>
                            <p className="text-body" style={{ marginBottom: '15px' }}>
                                We provide transfer pricing support designed to help businesses manage cross-border transactions in compliance with applicable regulations.
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--secondary)' }}>
                                <li>Transfer pricing documentation & policy design</li>
                                <li>Benchmarking studies</li>
                                <li>Advisory support for international alignment</li>
                                <li>Defensible pricing strategies</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h3 className="text-h3">Offshore Company Formation</h3>
                            <p className="text-body" style={{ marginBottom: '15px' }}>
                                We assist clients with the formation and ongoing management of offshore and international business structures.
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--secondary)' }}>
                                <li>Entity setup and regulatory registrations</li>
                                <li>Corporate secretarial support</li>
                                <li>Ongoing compliance management</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h3 className="text-h3">Management Reporting & MIS</h3>
                            <p className="text-body">
                                Preparation of customized management reports, dashboards, and performance analysis for informed decision-making.
                            </p>
                        </div>

                        <div className="card">
                            <h3 className="text-h3">Payroll & WPS Compliance</h3>
                            <p className="text-body">
                                End-to-end payroll processing, statutory filings, and compliance with UAE WPS and labor regulations.
                            </p>
                        </div>

                        <div className="card">
                            <h3 className="text-h3">Business Setup & Regulatory Advisory</h3>
                            <p className="text-body">
                                End-to-end advisory for company formation, licensing, and regulatory registrations.
                            </p>
                        </div>

                        <div className="card">
                            <h3 className="text-h3">ESR & UBO Compliance</h3>
                            <p className="text-body">
                                Registration, notification, reporting, and advisory for UAE ESR requirements. Identification and filing for UBO requirements.
                            </p>
                        </div>

                        <div className="card">
                            <h3 className="text-h3">Internal Controls & Process Review</h3>
                            <p className="text-body">
                                A periodic review of tax, accounting, and compliance status. Identifying gaps before they become risks.
                            </p>
                        </div>

                        <div className="card" style={{ background: 'var(--primary)', color: 'white' }}>
                            <h3 className="text-h3" style={{ color: 'white' }}>Ready to Get Started?</h3>
                            <p className="text-body" style={{ color: '#e2e8f0', marginBottom: '30px' }}>
                                Contact us today to discuss how we can support your business goals.
                            </p>
                            <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>Contact Us Now</Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
