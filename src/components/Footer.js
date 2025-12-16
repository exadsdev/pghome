import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-about">
                        <div className="footer-logo">
                            <Image
                                src="/images/Logo.webp"
                                alt={siteConfig.companyName}
                                width={60}
                                height={60}
                                style={{ objectFit: 'contain' }}
                            />
                            <span>พีจีโฮม จำกัด</span>
                        </div>
                        <p>
                            {siteConfig.companyFullName} รับสร้างบ้าน ออกแบบบ้าน รับเหมาก่อสร้าง
                            ด้วยประสบการณ์กว่า 15 ปี ดูแลครบวงจร ตั้งแต่ออกแบบ สร้าง จนถึงส่งมอบ
                        </p>
                        <div className="footer-social">
                            <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href={`https://line.me/ti/p/${siteConfig.lineId}`} target="_blank" rel="noopener noreferrer" aria-label="LINE">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="footer-links">
                        <h4>เมนู</h4>
                        <ul>
                            <li><Link href="/">หน้าแรก</Link></li>
                            <li><Link href="/service">บริการของเรา</Link></li>
                            <li><Link href="/portfolio">ผลงาน</Link></li>
                            <li><Link href="/house-designs">แบบบ้าน</Link></li>
                            <li><Link href="/reviews">รีวิว</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>ข้อมูลเพิ่มเติม</h4>
                        <ul>
                            <li><Link href="/about">เกี่ยวกับเรา</Link></li>
                            <li><Link href="/contact">ติดต่อเรา</Link></li>
                            <li><Link href="/faq">คำถามที่พบบ่อย</Link></li>
                            <li><Link href="/privacy">นโยบายความเป็นส่วนตัว</Link></li>
                            <li><Link href="/terms">ข้อกำหนดและเงื่อนไข</Link></li>
                            <li><Link href="/cookies">ประกาศการใช้คุกกี้</Link></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4>ติดต่อเรา</h4>
                        <p>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            {siteConfig.phone}
                        </p>
                        <p>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            {siteConfig.address}
                        </p>
                        <p>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            {siteConfig.email}
                        </p>
                        <p>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755z" />
                            </svg>
                            LINE ID : {siteConfig.lineId}
                        </p>
                        {/* Mini Map */}
                        <div className="footer-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5!2d99.791542!3d13.548478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e325abd937951d%3A0x31f1911d8427dca9!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4nuC4teC4iOC4teC5guC4ruC4oSDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1702736368000!5m2!1sth!2sth"
                                width="100%"
                                height="150"
                                style={{ border: 0, borderRadius: '10px', marginTop: '15px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© Copyright {currentYear}. All Rights Reserved.</p>
                    <div className="footer-social">
                        <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
