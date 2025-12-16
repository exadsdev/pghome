import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LineFloat from '@/components/LineFloat';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: `ประกาศการใช้คุกกี้ | ${siteConfig.companyName}`,
    description: 'ประกาศการใช้คุกกี้ (Cookie Notice) อธิบายประเภทคุกกี้ วัตถุประสงค์ และวิธีจัดการคุกกี้',
};

export default function CookiesPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="page-hero small">
                    <div className="page-hero-bg solid"></div>
                    <div className="container">
                        <div className="page-hero-content">
                            <h1>ประกาศการใช้คุกกี้</h1>
                            <p>Cookie Notice</p>
                        </div>
                    </div>
                </section>

                {/* Cookie Content */}
                <section className="section privacy-content">
                    <div className="container">
                        <div className="privacy-wrapper">
                            <div className="privacy-section">
                                <h2>1. คุกกี้คืออะไร</h2>
                                <p>
                                    คุกกี้ (Cookies) คือไฟล์ข้อมูลขนาดเล็กที่ถูกจัดเก็บไว้บนอุปกรณ์ของท่าน (เช่น คอมพิวเตอร์หรือโทรศัพท์มือถือ)
                                    เมื่อท่านเข้าชมเว็บไซต์ คุกกี้ช่วยให้เว็บไซต์จดจำการตั้งค่าและรูปแบบการใช้งานของท่าน เพื่อให้ใช้งานได้สะดวกขึ้น
                                </p>
                            </div>

                            <div className="privacy-section">
                                <h2>2. เราใช้คุกกี้เพื่อวัตถุประสงค์ใด</h2>
                                <p>เว็บไซต์ของเราอาจใช้คุกกี้และเทคโนโลยีที่คล้ายกันเพื่อวัตถุประสงค์ดังนี้:</p>
                                <ul>
                                    <li><strong>คุกกี้ที่จำเป็น (Strictly Necessary):</strong> ช่วยให้เว็บไซต์ทำงานได้ตามปกติ เช่น ความปลอดภัย และการแสดงผลหน้าเว็บ</li>
                                    <li><strong>คุกกี้เพื่อการวิเคราะห์ (Analytics):</strong> ช่วยให้เราเข้าใจการใช้งานเว็บไซต์ เช่น หน้าที่เข้าชม เวลาในการใช้งาน เพื่อปรับปรุงประสบการณ์ผู้ใช้</li>
                                    <li><strong>คุกกี้เพื่อการทำงาน (Functional):</strong> จดจำการตั้งค่าบางอย่าง เพื่อให้ท่านใช้งานได้สะดวกยิ่งขึ้น</li>
                                </ul>
                                <p>
                                    ทั้งนี้ เว็บไซต์ของเราอาจมีส่วนประกอบของบุคคลภายนอก เช่น แผนที่ (Google Maps) หรือการเชื่อมต่อไปยังแพลตฟอร์มอื่น
                                    ซึ่งผู้ให้บริการบุคคลภายนอกอาจมีการตั้งคุกกี้หรือเก็บข้อมูลตามนโยบายของตนเอง
                                </p>
                            </div>

                            <div className="privacy-section">
                                <h2>3. คุกกี้ของบุคคลภายนอก</h2>
                                <p>
                                    เราอาจใช้บริการหรือมีการฝังเนื้อหาจากบุคคลภายนอก (เช่น Google Maps ที่ปรากฏในเว็บไซต์)
                                    ซึ่งอาจทำให้เกิดคุกกี้ของบุคคลภายนอก ผู้ให้บริการเหล่านั้นเป็นผู้ควบคุมข้อมูลตามนโยบายของตนเอง
                                    บริษัทไม่สามารถควบคุมการทำงานของคุกกี้ของบุคคลภายนอกได้
                                </p>
                            </div>

                            <div className="privacy-section">
                                <h2>4. วิธีจัดการคุกกี้</h2>
                                <p>
                                    ท่านสามารถจัดการคุกกี้ได้ผ่านการตั้งค่าเบราว์เซอร์ โดยสามารถเลือกให้เบราว์เซอร์แจ้งเตือนก่อนรับคุกกี้
                                    ปฏิเสธคุกกี้ทั้งหมด หรือลบคุกกี้ที่จัดเก็บไว้แล้ว อย่างไรก็ตาม หากท่านปิดการใช้งานคุกกี้บางประเภท
                                    เว็บไซต์อาจทำงานได้ไม่สมบูรณ์ หรือบางฟังก์ชันอาจใช้งานไม่ได้
                                </p>
                                <ul>
                                    <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                                    <li><strong>Safari:</strong> Preferences &gt; Privacy</li>
                                    <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security</li>
                                    <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions</li>
                                </ul>
                            </div>

                            <div className="privacy-section">
                                <h2>5. การเปลี่ยนแปลงประกาศการใช้คุกกี้</h2>
                                <p>
                                    เราอาจปรับปรุงประกาศการใช้คุกกี้นี้เป็นครั้งคราว การเปลี่ยนแปลงจะมีผลเมื่อเผยแพร่บนเว็บไซต์ของเรา
                                </p>
                            </div>

                            <div className="privacy-section">
                                <h2>6. ติดต่อเรา</h2>
                                <p>
                                    หากท่านมีคำถามเกี่ยวกับคุกกี้ หรือการคุ้มครองข้อมูลส่วนบุคคล โปรดติดต่อ:
                                </p>
                                <div className="privacy-contact">
                                    <p><strong>{siteConfig.companyFullName}</strong></p>
                                    <p>{siteConfig.address}</p>
                                    <p>โทร: {siteConfig.phone}</p>
                                    <p>อีเมล: {siteConfig.email}</p>
                                    <p>LINE: {siteConfig.lineId}</p>
                                </div>
                            </div>

                            <div className="privacy-updated">
                                <p>มีผลใช้บังคับ: 16 ธันวาคม 2568 (2025-12-16)</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <LineFloat />
        </>
    );
}
