import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LineFloat from '@/components/LineFloat';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: `แบบบ้าน | ${siteConfig.companyName}`,
    description: 'รวมแบบบ้านสวยหลากหลายสไตล์ ทั้งบ้านชั้นเดียวและบ้าน 2 ชั้น ออกแบบโดยทีมสถาปนิกมืออาชีพ พร้อมปรับแบบได้ตามต้องการ',
};

const singleFloorHouses = [
    {
        id: 1,
        image: '/images/S_04_แบบบ้านชั้นเดียว_01.webp',
        name: 'แบบบ้าน PG-101',
        style: 'Modern Tropical',
        bedrooms: 3,
        bathrooms: 2,
        size: '120 ตร.ม.',
        price: 'เริ่มต้น 1.8 ล้าน',
    },
    {
        id: 2,
        image: '/images/S_04_แบบบ้านชั้นเดียว_02.webp',
        name: 'แบบบ้าน PG-102',
        style: 'Contemporary',
        bedrooms: 3,
        bathrooms: 2,
        size: '140 ตร.ม.',
        price: 'เริ่มต้น 2.1 ล้าน',
    },
    {
        id: 3,
        image: '/images/S_04_แบบบ้านชั้นเดียว_03.webp',
        name: 'แบบบ้าน PG-103',
        style: 'Minimal',
        bedrooms: 2,
        bathrooms: 1,
        size: '90 ตร.ม.',
        price: 'เริ่มต้น 1.5 ล้าน',
    },
];

const twoFloorHouses = [
    {
        id: 4,
        image: '/images/S_04_แบบบ้าน_2_ชั้น_01.webp',
        name: 'แบบบ้าน PG-201',
        style: 'Modern Luxury',
        bedrooms: 4,
        bathrooms: 3,
        size: '200 ตร.ม.',
        price: 'เริ่มต้น 3.5 ล้าน',
    },
    {
        id: 5,
        image: '/images/S_04_แบบบ้าน_2_ชั้น_02.webp',
        name: 'แบบบ้าน PG-202',
        style: 'Contemporary',
        bedrooms: 4,
        bathrooms: 3,
        size: '220 ตร.ม.',
        price: 'เริ่มต้น 4.0 ล้าน',
    },
    {
        id: 6,
        image: '/images/S_04_แบบบ้าน_2_ชั้น_03.webp',
        name: 'แบบบ้าน PG-203',
        style: 'Tropical Modern',
        bedrooms: 5,
        bathrooms: 4,
        size: '280 ตร.ม.',
        price: 'เริ่มต้น 5.0 ล้าน',
    },
];

function HouseCard({ house }) {
    return (
        <div className="house-design-card">
            <div className="house-design-image">
                <Image
                    src={house.image}
                    alt={house.name}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <div className="price-tag">{house.price}</div>
            </div>
            <div className="house-design-info">
                <h3>{house.name}</h3>
                <p className="style-label">{house.style}</p>
                <div className="house-specs">
                    <span>🛏️ {house.bedrooms} ห้องนอน</span>
                    <span>🚿 {house.bathrooms} ห้องน้ำ</span>
                    <span>📐 {house.size}</span>
                </div>
                <Link href="/contact" className="btn-view-detail">
                    สนใจแบบนี้
                </Link>
            </div>
        </div>
    );
}

export default function HouseDesignsPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="page-hero">
                    <div className="page-hero-bg" style={{ backgroundImage: "url('/images/S_04_Pic_02.webp')" }}></div>
                    <div className="container">
                        <div className="page-hero-content">
                            <h1>แบบบ้าน</h1>
                            <p>เลือกแบบบ้านที่ใช่สำหรับคุณ หรือปรับแบบได้ตามต้องการ</p>
                        </div>
                    </div>
                </section>

                {/* Single Floor Houses */}
                <section className="section house-designs-page">
                    <div className="container">
                        <div className="section-title">
                            <h2>แบบบ้านชั้นเดียว</h2>
                            <p>บ้านชั้นเดียวสไตล์โมเดิร์น เหมาะสำหรับทุกครอบครัว</p>
                        </div>
                        <div className="house-designs-grid">
                            {singleFloorHouses.map((house) => (
                                <HouseCard key={house.id} house={house} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Two Floor Houses */}
                <section className="section house-designs-page bg-light">
                    <div className="container">
                        <div className="section-title">
                            <h2>แบบบ้าน 2 ชั้น</h2>
                            <p>บ้าน 2 ชั้นสไตล์หรูหรา พื้นที่กว้างขวางสำหรับครอบครัวใหญ่</p>
                        </div>
                        <div className="house-designs-grid">
                            {twoFloorHouses.map((house) => (
                                <HouseCard key={house.id} house={house} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Custom Design Section */}
                <section className="custom-design-section">
                    <div className="container">
                        <div className="custom-design-content">
                            <div className="custom-design-text">
                                <h2>ออกแบบบ้านตามใจคุณ</h2>
                                <p>
                                    หากไม่พบแบบบ้านที่ถูกใจ เราพร้อมออกแบบบ้านใหม่ตามความต้องการของคุณ
                                    ด้วยทีมสถาปนิกมืออาชีพ ที่จะช่วยให้บ้านในฝันของคุณเป็นจริง
                                </p>
                                <ul className="custom-features">
                                    <li>✓ ออกแบบตามไลฟ์สไตล์</li>
                                    <li>✓ ปรับขนาดได้ตามที่ดิน</li>
                                    <li>✓ เลือกวัสดุได้ตามงบประมาณ</li>
                                    <li>✓ ทีมสถาปนิกดูแลใกล้ชิด</li>
                                </ul>
                                <Link href="/service" className="btn-custom-design">
                                    ปรึกษาออกแบบบ้าน
                                </Link>
                            </div>
                            <div className="custom-design-image">
                                <Image
                                    src="/images/S_01_Pic_02.webp"
                                    alt="ทีมออกแบบ PG HOME"
                                    width={500}
                                    height={400}
                                    style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta">
                    <div className="container">
                        <h2>พร้อมเริ่มต้นสร้างบ้านในฝัน?</h2>
                        <p>ติดต่อเราวันนี้ รับคำปรึกษาฟรี พร้อมประเมินราคาเบื้องต้น</p>
                        <div className="cta-buttons">
                            <a href={`tel:${siteConfig.phone}`} className="cta-btn primary">
                                โทร {siteConfig.phone}
                            </a>
                            <a href={`https://line.me/ti/p/${siteConfig.lineId}`} target="_blank" rel="noopener noreferrer" className="cta-btn outline">
                                แอดไลน์ {siteConfig.lineId}
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
