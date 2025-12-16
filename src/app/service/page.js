import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LineFloat from '@/components/LineFloat';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: `บริการของเรา | ${siteConfig.companyName}`,
    description: 'PG HOME รับสร้างบ้าน ออกแบบบ้าน บริษัทรับสร้างบ้าน รับเหมาก่อสร้าง ด้วยประสบการณ์กว่า 15 ปี ดูแลครบวงจร ตั้งแต่ออกแบบ สร้าง จนถึงส่งมอบ',
};

export default function ServicePage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section with Logo */}
                <section className="service-hero">
                    <div className="container">
                        <div className="service-hero-content">
                            <div className="logo-badge">
                                <Image
                                    src="/images/Logo.webp"
                                    alt="PG HOME Logo"
                                    width={120}
                                    height={120}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <p className="tagline">บริษัท พีจี โฮม จำกัด</p>
                        </div>
                    </div>
                </section>

                {/* About Company Section */}
                <section className="service-about">
                    <div className="container">
                        <div className="service-about-grid">
                            <div className="service-about-text">
                                <h1 className="gold-title">พีจีโฮม</h1>
                                <h2 className="sub-title">บริษัทรับสร้างบ้าน รับออกแบบบ้าน</h2>
                                <div className="company-description">
                                    <h3>คุณมีแล้วมั้ยบ้าน บริษัท พีจีโฮม จำกัด</h3>
                                    <p>
                                        เรามั่นใจ ดูแลลูกค้าทุกท่านเหมือนคนในครอบครัว เพราะพวกเราเรียกกันว่า
                                        เราขอบตนเองว่าเป็น "ช่างบ้าน" ที่มีความชำนาญในการก่อสร้างมานานกว่า 15 ปี
                                        พร้อมรับประกันโครงสร้าง 5 ปี หรือ 10 เดือน พร้อมบริการซ่อมแซมหลังการขาย
                                        เชื่อถือได้ มั่นใจ ไม่ทิ้งงาน
                                    </p>
                                    <div className="action-buttons">
                                        <a href="https://line.me/ti/p/@pghome" target="_blank" rel="noopener noreferrer" className="btn-line">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                            </svg>
                                            แอดไลน์เลย
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="service-about-image">
                                <Image
                                    src="/images/S_01_Pic_02.webp"
                                    alt="ทีมงาน PG HOME"
                                    width={500}
                                    height={400}
                                    style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Badge */}
                <section className="experience-badge-section">
                    <div className="container">
                        <div className="experience-content">
                            <div className="experience-text">
                                <p className="experience-years">ประสบการณ์</p>
                                <p>
                                    บริษัทรับสร้างบ้านที่เปี่ยมประสบการณ์มากกว่า <strong>15 ปี</strong> การันตีด้วยผลงานบ้านมากกว่า
                                    <strong> 200 หลัง</strong> ในจังหวัดราชบุรีและพื้นที่ใกล้เคียง
                                </p>
                            </div>
                            <div className="experience-gold-badge">
                                <Image
                                    src="/images/Logo.webp"
                                    alt="PG HOME Badge"
                                    width={100}
                                    height={100}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Choose House Design Section */}
                <section className="choose-design-section">
                    <div className="container">
                        <div className="choose-design-content">
                            <div className="choose-design-text">
                                <h2 className="gold-title">เลือกแบบบ้านที่ใช่สำหรับคุณ</h2>
                                <p>
                                    เรามีแบบบ้านให้เลือกมากมายหลากหลายสไตล์ทั้งบ้านชั้นเดียว บ้าน 2 ชั้น
                                    ด้วยดีไซน์ทันสมัยที่จะตอบโจทย์ทุกไลฟ์สไตล์ พร้อมให้คุณเลือกชมได้จากแบบบ้าน
                                    หรือปรับเปลี่ยน ตกแต่งตามความต้องการ
                                </p>
                            </div>
                            <div className="choose-design-image">
                                <Image
                                    src="/images/S_04_Pic_01.webp"
                                    alt="แบบบ้าน PG HOME"
                                    width={600}
                                    height={400}
                                    style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* House Style Cards */}
                <section className="house-style-section">
                    <div className="container">
                        <div className="house-style-grid">
                            <div className="house-style-card classic">
                                <div className="style-image">
                                    <Image
                                        src="/images/S_04_แบบบ้านชั้นเดียว_01.webp"
                                        alt="บ้าน Classic Style"
                                        width={400}
                                        height={300}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="style-label">
                                    <h3>บ้าน CLASSIC STYLE</h3>
                                    <span className="badge">โปรจำกัด</span>
                                </div>
                            </div>
                            <div className="house-style-card problem">
                                <div className="style-image">
                                    <Image
                                        src="/images/S_04_แบบบ้าน_2_ชั้น_01.webp"
                                        alt="ปัญหาสร้างบ้านเอง"
                                        width={400}
                                        height={300}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="style-label problem-label">
                                    <h3>ปัญหา</h3>
                                    <p>สร้างบ้านเองแพง</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="service-contact-section">
                    <div className="container">
                        <div className="service-contact-header">
                            <h2>ปรับแบบบ้าน หรือ แบบแปลนบ้านได้ตามใจคุณ</h2>
                        </div>
                        <div className="service-contact-form">
                            <form>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>ชื่อผู้เอกสาร/ชื่อบริษัท *</label>
                                        <input type="text" placeholder="กรอกชื่อ-นามสกุล หรือชื่อบริษัท" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>เลขประจำตัวประชาชน (บัตรประชาชน) *</label>
                                        <input type="text" placeholder="กรอกเลขบัตรประชาชน 13 หลัก" required />
                                    </div>
                                </div>
                                <div className="form-row two-cols">
                                    <div className="form-group">
                                        <label>แบบบ้าน/รหัส *</label>
                                        <input type="text" placeholder="ระบุแบบบ้านที่สนใจ" required />
                                    </div>
                                    <div className="form-group">
                                        <label>ขนาด</label>
                                        <input type="text" placeholder="ระบุขนาดบ้าน" />
                                    </div>
                                </div>
                                <div className="form-row two-cols">
                                    <div className="form-group">
                                        <label>ที่ตั้งโครงการ/รายละเอียดที่ดิน (ต.อ.จ) *</label>
                                        <input type="text" placeholder="ระบุที่ตั้งโครงการ" required />
                                    </div>
                                    <div className="form-group">
                                        <label>จำนวน</label>
                                        <input type="text" placeholder="จำนวนหลัง" />
                                    </div>
                                </div>
                                <div className="form-row two-cols">
                                    <div className="form-group">
                                        <label>งบประมาณ *</label>
                                        <input type="text" placeholder="ระบุงบประมาณ" required />
                                    </div>
                                    <div className="form-group">
                                        <label>เบอร์โทรติดต่อ</label>
                                        <input type="tel" placeholder="เบอร์โทรศัพท์" />
                                    </div>
                                </div>
                                <div className="form-row two-cols">
                                    <div className="form-group">
                                        <label>ระยะเวลา</label>
                                        <input type="text" placeholder="ระยะเวลาที่ต้องการ" />
                                    </div>
                                    <div className="form-group">
                                        <label>วันที่ต้องการเริ่มต้น</label>
                                        <input type="date" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>LINE ID</label>
                                        <input type="text" placeholder="กรอก LINE ID" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>หมายเหตุ</label>
                                        <textarea placeholder="รายละเอียดเพิ่มเติม"></textarea>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group checkbox-group">
                                        <label>
                                            <input type="checkbox" required />
                                            ยอมรับข้อตกลงและเงื่อนไข <a href="/privacy">นโยบายความเป็นส่วนตัว</a>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <button type="submit" className="submit-btn gold">ส่งข้อมูล</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <LineFloat />
        </>
    );
}
