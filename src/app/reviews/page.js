'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LineFloat from '@/components/LineFloat';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

const reviewImages = [
    {
        id: 1,
        src: '/ริวิว/S__65978411_0.jpg',
        alt: 'รีวิวจากลูกค้า PG HOME - บ้านคุณเปิ้ล จอมบึงและครอบครัว',
        title: 'บ้านคุณเปิ้ล จอมบึงและครอบครัว',
    },
    {
        id: 2,
        src: '/ริวิว/S__65978413_0.jpg',
        alt: 'รีวิวจากลูกค้า PG HOME',
        title: 'ผลงานบ้านที่สร้างเสร็จ',
    },
    {
        id: 3,
        src: '/ริวิว/S__65978414_0.jpg',
        alt: 'รีวิวจากลูกค้า PG HOME',
        title: 'ผลงานบ้านสไตล์โมเดิร์น',
    },
];

export default function ReviewsPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % reviewImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + reviewImages.length) % reviewImages.length);
    };

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="page-hero">
                    <div className="page-hero-bg" style={{ backgroundImage: "url('/images/S_04_Pic_01.webp')" }}></div>
                    <div className="container">
                        <div className="page-hero-content">
                            <h1>รีวิวของเรา</h1>
                            <p>ความประทับใจจากลูกค้าที่เลือก <strong>{siteConfig.companyFullName}</strong> เป็นผู้ดูแลและออกแบบบ้านในฝัน</p>
                        </div>
                    </div>
                </section>

                {/* Review Slider */}
                <section className="section review-slider-section">
                    <div className="container">
                        <div className="review-slider">
                            <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous">
                                ❮
                            </button>

                            <div className="slider-content">
                                <div className="slider-counter">
                                    {currentSlide + 1}/{reviewImages.length}
                                </div>
                                <div className="slider-image">
                                    <Image
                                        src={reviewImages[currentSlide].src}
                                        alt={reviewImages[currentSlide].alt}
                                        width={800}
                                        height={600}
                                        style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'contain' }}
                                    />
                                </div>
                                <div className="slider-caption">
                                    <p className="highlight-text">
                                        ไม่ผิดหวังค่ะ ที่เลือก <span className="gold-text">พีจี โฮม</span> ®
                                    </p>
                                    <h3>{reviewImages[currentSlide].title}</h3>
                                </div>
                            </div>

                            <button className="slider-btn next" onClick={nextSlide} aria-label="Next">
                                ❯
                            </button>
                        </div>

                        {/* Slider Dots */}
                        <div className="slider-dots">
                            {reviewImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* All Reviews Grid */}
                <section className="section reviews-grid-section">
                    <div className="container">
                        <div className="section-title">
                            <h2>ภาพรีวิวทั้งหมด</h2>
                            <p>ผลงานและความประทับใจจากลูกค้าที่ไว้วางใจ {siteConfig.companyName}</p>
                        </div>
                        <div className="reviews-grid">
                            {reviewImages.map((review) => (
                                <div key={review.id} className="review-card">
                                    <Image
                                        src={review.src}
                                        alt={review.alt}
                                        width={400}
                                        height={300}
                                        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                    />
                                    <div className="review-card-overlay">
                                        <h3>{review.title}</h3>
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
