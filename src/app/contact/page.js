import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LineFloat from '@/components/LineFloat';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: `ติดต่อเรา | ${siteConfig.companyName}`,
    description: 'ติดต่อ PG HOME รับสร้างบ้าน ออกแบบบ้าน โทร 092-270-2120 หรือ LINE: @pghome พร้อมให้คำปรึกษาฟรี',
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="page-hero small">
                    <div className="page-hero-bg" style={{ backgroundImage: "url('/images/S_05_Pic.webp')" }}></div>
                    <div className="container">
                        <div className="page-hero-content">
                            <h1>ติดต่อเรา</h1>
                            <p>พร้อมให้บริการและตอบทุกคำถามของคุณ</p>
                        </div>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="contact-cards-section">
                    <div className="container">
                        <div className="contact-cards-grid">
                            <a href={`tel:${siteConfig.phone}`} className="contact-info-card">
                                <div className="contact-card-icon">📞</div>
                                <h3>โทรศัพท์</h3>
                                <p>{siteConfig.phone}</p>
                                <span className="contact-card-action">โทรเลย</span>
                            </a>
                            <a href={`https://line.me/ti/p/${siteConfig.lineId}`} target="_blank" rel="noopener noreferrer" className="contact-info-card line">
                                <div className="contact-card-icon">💬</div>
                                <h3>LINE Official</h3>
                                <p>{siteConfig.lineId}</p>
                                <span className="contact-card-action">แอดไลน์</span>
                            </a>
                            <a href={`mailto:${siteConfig.email}`} className="contact-info-card">
                                <div className="contact-card-icon">📧</div>
                                <h3>อีเมล</h3>
                                <p>{siteConfig.email}</p>
                                <span className="contact-card-action">ส่งอีเมล</span>
                            </a>
                            <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="contact-info-card facebook">
                                <div className="contact-card-icon">📘</div>
                                <h3>Facebook</h3>
                                <p>{siteConfig.companyName}</p>
                                <span className="contact-card-action">ติดตาม</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Contact Form & Map */}
                <section className="section contact-main">
                    <div className="container">
                        <div className="contact-main-grid">
                            {/* Contact Form */}
                            <div className="contact-form-wrapper">
                                <h2>ส่งข้อความหาเรา</h2>
                                <p>กรอกข้อมูลด้านล่าง เราจะติดต่อกลับโดยเร็วที่สุด</p>
                                <form className="contact-page-form">
                                    <div className="form-row two-cols">
                                        <div className="form-group">
                                            <label>ชื่อ-นามสกุล *</label>
                                            <input type="text" placeholder="กรอกชื่อ-นามสกุล" required />
                                        </div>
                                        <div className="form-group">
                                            <label>เบอร์โทรศัพท์ *</label>
                                            <input type="tel" placeholder="กรอกเบอร์โทรศัพท์" required />
                                        </div>
                                    </div>
                                    <div className="form-row two-cols">
                                        <div className="form-group">
                                            <label>อีเมล</label>
                                            <input type="email" placeholder="กรอกอีเมล" />
                                        </div>
                                        <div className="form-group">
                                            <label>LINE ID</label>
                                            <input type="text" placeholder="กรอก LINE ID" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>หัวข้อ *</label>
                                            <select required>
                                                <option value="">เลือกหัวข้อ</option>
                                                <option value="สร้างบ้านใหม่">สอบถามเรื่องสร้างบ้านใหม่</option>
                                                <option value="ออกแบบบ้าน">สอบถามเรื่องออกแบบบ้าน</option>
                                                <option value="ต่อเติม/ปรับปรุง">สอบถามเรื่องต่อเติม/ปรับปรุง</option>
                                                <option value="ขอใบเสนอราคา">ขอใบเสนอราคา</option>
                                                <option value="อื่นๆ">อื่นๆ</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>รายละเอียด *</label>
                                            <textarea rows="5" placeholder="กรอกรายละเอียดที่ต้องการสอบถาม" required></textarea>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <button type="submit" className="submit-btn gold">ส่งข้อความ</button>
                                    </div>
                                </form>
                            </div>

                            {/* Contact Info & Map */}
                            <div className="contact-sidebar">
                                <div className="contact-address-box">
                                    <h3>ที่อยู่บริษัท</h3>
                                    <div className="address-content">
                                        <div className="address-item">
                                            <span className="icon">📍</span>
                                            <div>
                                                <strong>{siteConfig.companyFullName}</strong>
                                                <p>{siteConfig.address}</p>
                                            </div>
                                        </div>
                                        <div className="address-item">
                                            <span className="icon">🕐</span>
                                            <div>
                                                <strong>เวลาทำการ</strong>
                                                <p>จันทร์ - เสาร์: 08:00 - 18:00 น.</p>
                                                <p>อาทิตย์: นัดหมายล่วงหน้า</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="map-container">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5!2d99.791542!3d13.548478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e325abd937951d%3A0x31f1911d8427dca9!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4nuC4teC4iOC4teC5guC4ruC4oSDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1702736368000!5m2!1sth!2sth"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0, borderRadius: '15px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta">
                    <div className="container">
                        <h2>ต้องการคำปรึกษาด่วน?</h2>
                        <p>โทรหาเราได้เลย พร้อมให้บริการทุกวัน</p>
                        <div className="cta-buttons">
                            <a href={`tel:${siteConfig.phone}`} className="cta-btn primary">
                                โทร {siteConfig.phone}
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <LineFloat />
        </>
    );
}
