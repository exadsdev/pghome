import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LineFloat from '@/components/LineFloat';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div
            className="hero-slide"
            style={{ backgroundImage: "url('/images/03_ล่าสุด.webp')" }}
          >
            <div className="hero-content animate-fadeInUp">
              <h1>คุณมีแล้วมั้ยบ้านที่โดน</h1>
              <p>รับสร้างบ้าน ราคาประหยัด | ใส่ใจทุกรายละเอียด คืนกำไรให้ชีวิต</p>
              <Link href="/contact" className="hero-btn">
                ติดต่อเรา
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats animate-fadeInUp">
          <div className="container">
            <div className="stat-item">
              <div className="number">15+</div>
              <div className="label">ปีประสบการณ์</div>
            </div>
            <div className="stat-item">
              <div className="number">200+</div>
              <div className="label">ผลงานสร้างบ้าน</div>
            </div>
            <div className="stat-item">
              <div className="number">100%</div>
              <div className="label">ความพึงพอใจ</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section about" id="about">
          <div className="container">
            <div className="about-content">
              <div className="about-image animate-slideInLeft">
                <Image
                  src="/images/S_01_Pic_01.webp"
                  alt="PG HOME Team"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="about-text animate-slideInRight">
                <h3>พีจีโฮม</h3>
                <p>
                  บริษัท พีจีโฮม จำกัด เริ่มก่อตั้งขึ้นมา ประกอบกิจการมานานกว่า 15 ปี
                  ได้สั่งสมประสบการณ์และความเชี่ยวชาญ จากการทำงานด้านการก่อสร้างมากกว่า
                  200 หลัง ในจังหวัดราชบุรีและพื้นที่ใกล้เคียง
                </p>
                <p>
                  เราให้บริการครบวงจร ตั้งแต่ออกแบบ สร้าง จนถึงส่งมอบ
                  พร้อมทีมงานมืออาชีพที่ใส่ใจทุกรายละเอียด
                </p>
                <div className="about-features">
                  <div className="feature-item">
                    <div className="icon">✓</div>
                    <span>ออกแบบครบวงจร</span>
                  </div>
                  <div className="feature-item">
                    <div className="icon">✓</div>
                    <span>ราคายุติธรรม</span>
                  </div>
                  <div className="feature-item">
                    <div className="icon">✓</div>
                    <span>วัสดุคุณภาพ</span>
                  </div>
                  <div className="feature-item">
                    <div className="icon">✓</div>
                    <span>รับประกันงาน</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section services" id="services">
          <div className="container">
            <div className="section-title">
              <h2>บริการของเรา</h2>
              <p>เราให้บริการครบวงจร ตั้งแต่ออกแบบ สร้าง จนถึงส่งมอบ</p>
            </div>
            <div className="services-grid">
              <div className="service-card animate-fadeInUp">
                <div className="icon">🏠</div>
                <h3>รับสร้างบ้าน</h3>
                <p>รับสร้างบ้านตามแบบ หรือออกแบบใหม่ตามความต้องการ ด้วยทีมช่างมืออาชีพ</p>
              </div>
              <div className="service-card animate-fadeInUp delay-100">
                <div className="icon">✏️</div>
                <h3>ออกแบบบ้าน</h3>
                <p>ออกแบบบ้านให้ตรงกับไลฟ์สไตล์และงบประมาณของคุณ</p>
              </div>
              <div className="service-card animate-fadeInUp delay-200">
                <div className="icon">🔧</div>
                <h3>รับเหมาก่อสร้าง</h3>
                <p>รับเหมาก่อสร้างทุกประเภท ด้วยมาตรฐานงานคุณภาพสูง</p>
              </div>
              <div className="service-card animate-fadeInUp delay-300">
                <div className="icon">🏗️</div>
                <h3>ต่อเติม-ปรับปรุง</h3>
                <p>รับต่อเติมและปรับปรุงบ้าน ให้ตรงกับความต้องการของคุณ</p>
              </div>
            </div>
          </div>
        </section>

        {/* House Designs Section */}
        <section className="section house-designs" id="designs">
          <div className="container">
            <div className="section-title">
              <h2>เลือกแบบบ้านที่ใช่สำหรับคุณ</h2>
              <p>เราพร้อมสร้างบ้านในฝันให้คุณ ด้วยแบบบ้านหลากหลายสไตล์</p>
            </div>
            <div className="design-tabs">
              <button className="tab-btn active">แบบบ้านชั้นเดียว</button>
              <button className="tab-btn">แบบบ้าน 2 ชั้น</button>
            </div>
            <div className="designs-grid">
              <div className="design-card animate-scaleIn">
                <Image
                  src="/images/S_04_แบบบ้านชั้นเดียว_01.webp"
                  alt="แบบบ้านชั้นเดียว 01"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <div className="design-overlay">
                  <h3>แบบบ้านชั้นเดียว</h3>
                  <p>สไตล์โมเดิร์น</p>
                </div>
              </div>
              <div className="design-card animate-scaleIn delay-100">
                <Image
                  src="/images/S_04_แบบบ้านชั้นเดียว_02.webp"
                  alt="แบบบ้านชั้นเดียว 02"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <div className="design-overlay">
                  <h3>แบบบ้านชั้นเดียว</h3>
                  <p>สไตล์คอนเทมโพรารี</p>
                </div>
              </div>
              <div className="design-card animate-scaleIn delay-200">
                <Image
                  src="/images/S_04_แบบบ้านชั้นเดียว_03.webp"
                  alt="แบบบ้านชั้นเดียว 03"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <div className="design-overlay">
                  <h3>แบบบ้านชั้นเดียว</h3>
                  <p>สไตล์มินิมอล</p>
                </div>
              </div>
            </div>
            <Link href="/house-designs" className="view-all-btn">
              ดูแบบบ้านทั้งหมด
            </Link>
          </div>
        </section>

        {/* Construction Process Section */}
        <section className="section construction-process">
          <div className="container">
            <div className="section-title">
              <h2>ขั้นตอนการสร้างบ้านกับเรา</h2>
              <p>กระบวนการทำงานที่เป็นระบบ เพื่อให้คุณมั่นใจในทุกขั้นตอน</p>
            </div>
            <div className="process-grid">
              <div className="process-card animate-fadeInUp">
                <div className="number">1</div>
                <h3>ปรึกษาและออกแบบ</h3>
                <p>พูดคุยความต้องการ และออกแบบบ้านให้ตรงใจ</p>
              </div>
              <div className="process-card animate-fadeInUp delay-100">
                <div className="number">2</div>
                <h3>ประเมินราคา</h3>
                <p>คำนวณราคาอย่างละเอียด พร้อมสัญญาที่โปร่งใส</p>
              </div>
              <div className="process-card animate-fadeInUp delay-200">
                <div className="number">3</div>
                <h3>ดำเนินการก่อสร้าง</h3>
                <p>เริ่มก่อสร้างด้วยทีมช่างมืออาชีพ พร้อมรายงานความคืบหน้า</p>
              </div>
              <div className="process-card animate-fadeInUp delay-300">
                <div className="number">4</div>
                <h3>ส่งมอบงาน</h3>
                <p>ตรวจสอบคุณภาพและส่งมอบบ้านพร้อมรับประกัน</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="section portfolio" id="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>ผลงานของเราและลูกค้าที่ไว้วางใจ</h2>
              <p>ความภาคภูมิใจจากผลงานบ้านที่เราได้สร้างให้ลูกค้า</p>
            </div>
            <div className="portfolio-grid">
              <div className="portfolio-card animate-fadeInUp">
                <Image
                  src="/images/S_09_คุณเบิ้ล_อ่างทอง.webp"
                  alt="บ้านคุณเบิ้ล อ่างทอง"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                />
                <div className="portfolio-overlay">
                  <h3>บ้านคุณเบิ้ล</h3>
                  <p>อ่างทอง</p>
                </div>
              </div>
              <div className="portfolio-card animate-fadeInUp delay-100">
                <Image
                  src="/images/S_09_บ้านคุณ_กอล์ฟ_ปากท่อ.webp"
                  alt="บ้านคุณกอล์ฟ ปากท่อ"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                />
                <div className="portfolio-overlay">
                  <h3>บ้านคุณกอล์ฟ</h3>
                  <p>ปากท่อ</p>
                </div>
              </div>
              <div className="portfolio-card animate-fadeInUp delay-200">
                <Image
                  src="/images/S_09_บ้านคุณเปิ้ล_จอมบึงและครอบครัว.webp"
                  alt="บ้านคุณเปิ้ล จอมบึง"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                />
                <div className="portfolio-overlay">
                  <h3>บ้านคุณเปิ้ลและครอบครัว</h3>
                  <p>จอมบึง</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section why-us">
          <div className="container">
            <div className="section-title">
              <h2>ทำไมต้องเลือกเรา</h2>
              <p>เหตุผลที่ลูกค้ากว่า 200 หลังไว้วางใจให้เราสร้างบ้าน</p>
            </div>
            <div className="why-us-grid">
              <div className="why-us-card animate-fadeInUp">
                <div className="icon">💰</div>
                <h3>ราคายุติธรรม</h3>
                <p>ราคาตรงไปตรงมา ไม่มีค่าใช้จ่ายแอบแฝง</p>
              </div>
              <div className="why-us-card animate-fadeInUp delay-100">
                <div className="icon">🏆</div>
                <h3>มาตรฐานสูง</h3>
                <p>ใช้วัสดุคุณภาพ งานก่อสร้างได้มาตรฐาน</p>
              </div>
              <div className="why-us-card animate-fadeInUp delay-200">
                <div className="icon">⏰</div>
                <h3>ตรงเวลา</h3>
                <p>ส่งมอบงานตรงเวลาตามที่กำหนด</p>
              </div>
              <div className="why-us-card animate-fadeInUp delay-300">
                <div className="icon">🛡️</div>
                <h3>รับประกันงาน</h3>
                <p>รับประกันโครงสร้าง 5 ปี พร้อมดูแลหลังการขาย</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <h2 className="animate-fadeInUp">ปรึกษาเรื่องบ้านกับเรา ฟรี!</h2>
            <p className="animate-fadeInUp delay-100">
              พร้อมให้คำปรึกษาและออกแบบบ้านในฝันของคุณ
            </p>
            <div className="cta-buttons animate-fadeInUp delay-200">
              <a href="tel:084-2899794" className="cta-btn primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                โทร 084-2899794
              </a>
              <a href="https://line.me/ti/p/pghome4289" target="_blank" rel="noopener noreferrer" className="cta-btn outline">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                แอดไลน์ pghome4289
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact" id="contact">
          <div className="container">
            <div className="section-title">
              <h2>ติดต่อเรา</h2>
              <p>พร้อมให้บริการและตอบทุกคำถามของคุณ</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info animate-slideInLeft">
                <h3>ข้อมูลการติดต่อ</h3>
                <div className="contact-item">
                  <div className="icon">📍</div>
                  <div className="info">
                    <h4>ที่อยู่</h4>
                    <p>518 ต.เจดีย์หัก อ.เมือง จ.ราชบุรี 70000</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon">📞</div>
                  <div className="info">
                    <h4>โทรศัพท์</h4>
                    <p>084-2899794</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon">📧</div>
                  <div className="info">
                    <h4>อีเมล</h4>
                    <p>pghome.con@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon">💬</div>
                  <div className="info">
                    <h4>LINE ID</h4>
                    <p>pghome4289</p>
                  </div>
                </div>
                <div className="social-links">
                  <a href="https://www.facebook.com/pghomethailand" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="https://line.me/ti/p/pghome4289" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LINE">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="contact-form animate-slideInRight">
                <h3>ส่งข้อความหาเรา</h3>
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="ชื่อ-นามสกุล" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="เบอร์โทรศัพท์" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="อีเมล" />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="ข้อความ" required></textarea>
                  </div>
                  <button type="submit" className="submit-btn">ส่งข้อความ</button>
                </form>
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
