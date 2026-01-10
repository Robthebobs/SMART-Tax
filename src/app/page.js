'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Home() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0;
            videoRef.current.play().catch(error => {
                console.error("Video autoplay failed:", error);
            });
        }
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '80vh',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {/* Video Background */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0 // FIX: Changed from -1 to 0 to be above body background
                }}>
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center' // User preferred center crop
                        }}
                    >
                        <source src="/assets/Cityline.mp4" type="video/mp4" />
                    </video>
                    {/* Overlay for readability */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(15, 23, 42, 0.75)',
                        zIndex: 1
                    }}></div>
                </div>

                <div className="container" style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'flex-start', // Left align
                    textAlign: 'left'
                }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h1 className="text-h1" style={{ marginBottom: '20px', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                            Expert Tax & Accounting Advisory for Business Growth
                        </h1>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '40px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                            Empowering SMEs with strategic financial insight, regulatory certainty, and dependable advisory support.
                        </p>
                    </div>


                </div>
            </section>

            {/* Intro Section */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 className="text-h2">Driving Sustainable Growth for SMEs</h2>
                            <p className="text-body" style={{ marginBottom: '20px' }}>
                                Small and Medium-Sized Enterprises (SMEs) form the foundation of the global economy. Their scale and significance underscore the importance of robust financial governance.
                            </p>
                            <p className="text-body" style={{ marginBottom: '20px' }}>
                                In an increasingly complex regulatory environment, SMEs require more than routine accounting — they need strategic financial insight and dependable advisory support to navigate risk and unlock growth opportunities.
                            </p>
                            <Link href="/services" className="btn btn-outline" style={{ marginTop: '20px' }}>More About Us</Link>
                        </div>
                        <div>
                            <div style={{ height: '400px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                                <Image
                                    src="/assets/PageIntro_Signing.avif"
                                    alt="Financial Meeting"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Highlight - Refined Design */}
            <section className="section" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                        <div style={{ maxWidth: '600px' }}>
                            <h2 className="text-h2">Integrated Solutions</h2>
                            <p className="text-body">
                                Comprehensive financial governance for modern businesses.
                            </p>
                        </div>
                        <Link href="/services" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            View All Services &rarr;
                        </Link>
                    </div>

                    <div className="grid-3">
                        <div style={{ padding: '20px 0', borderTop: '1px solid #e2e8f0' }}>
                            <span style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: '600', display: 'block', marginBottom: '10px' }}>01</span>
                            <h3 className="text-h3">Bookkeeping</h3>
                            <p className="text-body" style={{ marginBottom: '20px', fontSize: '1rem' }}>
                                Precision in recording financial transactions and maintaining general ledgers for clear decision making.
                            </p>
                            <Link href="/bookkeeping" style={{ color: 'var(--primary)', fontSize: '0.95rem', fontWeight: '500' }}>Learn more</Link>
                        </div>
                        <div style={{ padding: '20px 0', borderTop: '1px solid #e2e8f0' }}>
                            <span style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: '600', display: 'block', marginBottom: '10px' }}>02</span>
                            <h3 className="text-h3">Tax Compliance</h3>
                            <p className="text-body" style={{ marginBottom: '20px', fontSize: '1rem' }}>
                                Full lifecycle management of VAT, Corporate Tax, and IRS filings to mitigate regulatory risks.
                            </p>
                            <Link href="/tax-compliance" style={{ color: 'var(--primary)', fontSize: '0.95rem', fontWeight: '500' }}>Learn more</Link>
                        </div>
                        <div style={{ padding: '20px 0', borderTop: '1px solid #e2e8f0' }}>
                            <span style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: '600', display: 'block', marginBottom: '10px' }}>03</span>
                            <h3 className="text-h3">Strategic Advisory</h3>
                            <p className="text-body" style={{ marginBottom: '20px', fontSize: '1rem' }}>
                                From offshore formation to transfer pricing, we structure your business for global efficiency.
                            </p>
                            <Link href="/services" style={{ color: 'var(--primary)', fontSize: '0.95rem', fontWeight: '500' }}>Learn more</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container text-center">
                    <h2 className="text-h2" style={{ color: 'white', marginBottom: '30px' }}>Ready to optimize your financial operations?</h2>
                    <p style={{ fontSize: '1.15rem', opacity: '0.9', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px', lineHeight: '1.8' }}>
                        Our team of highly qualified professionals, registered with the Internal Revenue Service and the Federal Tax Authority, combines deep technical expertise with practical industry experience. We deliver our services with precision, discretion, and the highest standards of professional integrity. Acting as trusted advisors, we enable our clients to focus confidently on business growth while we manage their financial, tax, and regulatory obligations.
                    </p>
                    <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>Contact Our Team</Link>
                </div>
            </section>
        </>
    );
}
