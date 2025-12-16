'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <a href={`tel:${siteConfig.phone}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                        {siteConfig.phone}
                    </a>
                    <a href={`https://line.me/ti/p/${siteConfig.lineId}`} target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                        </svg>
                        LINE: {siteConfig.lineId}
                    </a>
                </div>
            </div>
            <nav className="navbar">
                <div className="container">
                    <Link href="/" className="logo-link">
                        <Image
                            src="/images/Logo.webp"
                            alt={siteConfig.companyName}
                            width={80}
                            height={80}
                            priority
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                    <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                        <li><Link href="/" className="active">หน้าแรก</Link></li>
                        <li><Link href="/service">บริการของเรา</Link></li>
                        <li><Link href="/portfolio">ผลงาน</Link></li>
                        <li><Link href="/house-designs">แบบบ้าน</Link></li>
                        <li><Link href="/reviews">รีวิว</Link></li>
                        <li><Link href="/about">เกี่ยวกับเรา</Link></li>
                        <li><Link href="/contact">ติดต่อเรา</Link></li>
                    </ul>
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </nav>
        </header>
    );
}
