import Link from 'next/link';

export default function HRPage() {
    return (
        <>
            <section className="section" style={{
                background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("/assets/HR.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '100px 0',
                color: 'white'
            }}>
                <div className="container">
                    <h1 className="text-h1">HR Services – Talent Acquisition</h1>
                    <p className="text-body" style={{ maxWidth: '800px', color: '#e2e8f0' }}>
                        Identifying, assessing, and securing professionals who align with your operational needs, culture, and long-term objectives.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2">
                        <div>
                            <h2 className="text-h2">Find the Right Talent</h2>
                            <p className="text-body" style={{ marginBottom: '20px' }}>
                                Our <strong>HR Services – Talent Acquisition</strong> is designed to help businesses identify, assess, and secure professionals who align with their operational needs, culture, and long-term objectives.
                            </p>
                            <p className="text-body">
                                We provide end-to-end recruitment and placement support, combining market insight, structured assessment processes, and industry expertise to deliver high-quality talent solutions. Our approach focuses on efficiency, confidentiality, and precision, ensuring the right fit for both employers and candidates.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-h3" style={{ marginBottom: '20px' }}>Our services include:</h3>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '2', color: 'var(--secondary)' }}>
                                <li>Talent sourcing</li>
                                <li>Candidate screening, evaluation, and shortlisting</li>
                                <li>Permanent and contract staffing solutions</li>
                                <li>Executive and mid-management placements</li>
                                <li>Recruitment process support and advisory</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#f8fafc' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h3 className="text-h3">Build Your Dream Team</h3>
                    <p className="text-body" style={{ maxWidth: '700px', margin: '0 auto 30px' }}>
                        Finding the right people is critical to business success. Let us handle the complexity of recruitment so you can focus on leading your team.
                    </p>
                    <Link href="/contact" className="btn btn-primary">Contact HR Team</Link>
                </div>
            </section>
        </>
    );
}
