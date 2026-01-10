export default function ContactPage() {
    return (
        <>
            <section className="section" style={{ background: '#f8fafc', padding: '60px 0' }}>
                <div className="container">
                    <h1 className="text-h1">Contact Us</h1>
                    <p className="text-body" style={{ maxWidth: '800px' }}>
                        Get in touch with our expert team for inquiries about our services.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2">
                        <div>
                            <h2 className="text-h2">Get in Touch</h2>
                            <p className="text-body" style={{ marginBottom: '30px' }}>
                                We are ready to assist you. Fill out the form or use the contact details below.
                            </p>

                            <div style={{ marginBottom: '30px' }}>
                                <h4 className="text-h3" style={{ fontSize: '1.2rem' }}>Office Address</h4>
                                <p className="text-body">
                                    Smart Tax & Accounting Consultancy<br />
                                    [Address Line 1]<br />
                                    [City, Country]
                                </p>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <h4 className="text-h3" style={{ fontSize: '1.2rem' }}>Contact Info</h4>
                                <p className="text-body">
                                    Email: info@smarttax.com<br />
                                    Phone: +1 234 567 890
                                </p>
                            </div>

                        </div>

                        <div className="card">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name</label>
                                    <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1' }} placeholder="Your Name" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Address</label>
                                    <input type="email" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1' }} placeholder="name@example.com" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                                    <textarea rows="5" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1' }} placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
