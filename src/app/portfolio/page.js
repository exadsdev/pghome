import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LineFloat from '@/components/LineFloat';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: `ผลงานของเรา | ${siteConfig.companyName}`,
    description: 'รวมผลงานบ้านที่เราได้สร้างให้ลูกค้า กว่า 200 หลัง ด้วยความใส่ใจในทุกรายละเอียด การันตีคุณภาพจากลูกค้าจริง',
};

const portfolioItems = [
    {
        id: 1,
        image: '/images/S_09_คุณเบิ้ล_อ่างทอง.webp',
        title: 'บ้านคุณเบิ้ล',
        location: 'อ่างทอง',
        type: 'บ้าน 2 ชั้น',
        size: '180 ตร.ม.',
    },
    {
        id: 2,
        image: '/images/S_09_บ้านคุณ_กอล์ฟ_ปากท่อ.webp',
        title: 'บ้านคุณกอล์ฟ',
        location: 'ปากท่อ',
        type: 'บ้านชั้นเดียว',
        size: '120 ตร.ม.',
    },
    {
        id: 3,
        image: '/images/S_09_บ้านคุณเปิ้ล_จอมบึงและครอบครัว.webp',
        title: 'บ้านคุณเปิ้ลและครอบครัว',
        location: 'จอมบึง',
        type: 'บ้านชั้นเดียว',
        size: '150 ตร.ม.',
    },
    {
        id: 4,
        image: '/images/S_04_แบบบ้านชั้นเดียว_01.webp',
        title: 'บ้านสไตล์โมเดิร์น',
        location: 'ราชบุรี',
        type: 'บ้านชั้นเดียว',
        size: '140 ตร.ม.',
    },
    {
        id: 5,
        image: '/images/S_04_แบบบ้าน_2_ชั้น_01.webp',
        title: 'บ้านสไตล์คอนเทมโพรารี',
        location: 'ราชบุรี',
        type: 'บ้าน 2 ชั้น',
        size: '200 ตร.ม.',
    },
    {
        id: 6,
        image: '/images/S_04_แบบบ้าน_2_ชั้น_02.webp',
        title: 'บ้านหรูหราทันสมัย',
        location: 'นครปฐม',
        type: 'บ้าน 2 ชั้น',
        size: '250 ตร.ม.',
    },
];

export default function PortfolioPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="page-hero">
                    <div className="page-hero-bg" style={{ backgroundImage: "url('/images/S_04_Pic_01.webp')" }}></div>
                    <div className="container">
                        <div className="page-hero-content">
                            <h1>ผลงานของเรา</h1>
                            <p>รวมผลงานบ้านที่เราภาคภูมิใจ กว่า 200 หลังทั่วประเทศ</p>
                        </div>
                    </div>
                </section>

                {/* Portfolio Stats */}
                <section className="portfolio-stats">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-box">
                                <span className="stat-number">200+</span>
                                <span className="stat-label">ผลงานสร้างบ้าน</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">ปีประสบการณ์</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">ความพึงพอใจ</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">5 ปี</span>
                                <span className="stat-label">รับประกันโครงสร้าง</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio Grid */}
                <section className="section portfolio-page">
                    <div className="container">
                        <div className="section-title">
                            <h2>ผลงานบ้านที่เราสร้าง</h2>
                            <p>ความภาคภูมิใจจากผลงานและลูกค้าที่ไว้วางใจ</p>
                        </div>
                        <div className="portfolio-grid-page">
                            {portfolioItems.map((item) => (
                                <div key={item.id} className="portfolio-card-page">
                                    <div className="portfolio-image">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={400}
                                            height={300}
                                            style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="portfolio-info">
                                        <h3>{item.title}</h3>
                                        <p className="location">📍 {item.location}</p>
                                        <div className="portfolio-meta">
                                            <span>{item.type}</span>
                                            <span>{item.size}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta">
                    <div className="container">
                        <h2>อยากมีบ้านสวยเหมือนลูกค้าเรา?</h2>
                        <p>ปรึกษาเราได้ฟรี ทีมงานพร้อมให้คำปรึกษาและออกแบบบ้านในฝันของคุณ</p>
                        <div className="cta-buttons">
                            <a href="tel:092-270-2120" className="cta-btn primary">
                                โทร 092-270-2120
                            </a>
                            <a href="https://line.me/ti/p/@pghome" target="_blank" rel="noopener noreferrer" className="cta-btn outline">
                                แอดไลน์ @pghome
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
