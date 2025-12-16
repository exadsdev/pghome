import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LineFloat from '@/components/LineFloat';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: `นโยบายความเป็นส่วนตัว | ${siteConfig.companyName}`,
    description: 'นโยบายความเป็นส่วนตัวของ PG HOME การเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล',
};

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="page-hero small">
                    <div className="page-hero-bg solid"></div>
                    <div className="container">
                        <div className="page-hero-content">
                            <h1>นโยบายความเป็นส่วนตัว</h1>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </section>

                {/* Privacy Content */}
                <section className="section privacy-content">
                    <div className="container">
                        <div className="privacy-wrapper">
                            <div className="privacy-section">
                                <h2>1. บทนำ</h2>
                                <p>
                                    บริษัท พีจีโฮม จำกัด ("บริษัท", "เรา") ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของท่าน
                                    นโยบายความเป็นส่วนตัวฉบับนี้อธิบายถึงวิธีการที่เราเก็บรวบรวม ใช้ เปิดเผย
                                    และโอนข้อมูลส่วนบุคคลของท่าน เมื่อท่านใช้บริการของเรา
                                </p>
                            </div>

                            <div className="privacy-section">
                                <h2>2. ข้อมูลที่เราเก็บรวบรวม</h2>
                                <p>เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลของท่านดังต่อไปนี้:</p>
                                <ul>
                                    <li><strong>ข้อมูลติดต่อ:</strong> ชื่อ-นามสกุล, ที่อยู่, เบอร์โทรศัพท์, อีเมล, LINE ID</li>
                                    <li><strong>ข้อมูลเอกสาร:</strong> เลขบัตรประชาชน (สำหรับการทำสัญญา)</li>
                                    <li><strong>ข้อมูลโครงการ:</strong> ที่ตั้งที่ดิน, แบบบ้านที่สนใจ, งบประมาณ</li>
                                    <li><strong>ข้อมูลการใช้งานเว็บไซต์:</strong> IP Address, ประเภทเบราว์เซอร์, หน้าที่เข้าชม</li>
                                </ul>
                            </div>

                            <div className="privacy-section">
                                <h2>3. วัตถุประสงค์ในการใช้ข้อมูล</h2>
                                <p>เราใช้ข้อมูลส่วนบุคคลของท่านเพื่อวัตถุประสงค์ดังนี้:</p>
                                <ul>
                                    <li>ให้บริการและติดต่อสื่อสารกับท่าน</li>
                                    <li>จัดทำใบเสนอราคาและสัญญา</li>
                                    <li>ดำเนินการก่อสร้างตามที่ท่านร้องขอ</li>
                                    <li>ส่งข่าวสารและโปรโมชั่น (หากท่านยินยอม)</li>
                                    <li>ปรับปรุงบริการและเว็บไซต์ของเรา</li>
                                    <li>ปฏิบัติตามกฎหมายที่เกี่ยวข้อง</li>
                                </ul>
                            </div>

                            <div className="privacy-section">
                                <h2>4. การเปิดเผยข้อมูล</h2>
                                <p>
                                    เราจะไม่เปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่บุคคลภายนอก
                                    เว้นแต่จะได้รับความยินยอมจากท่าน หรือเป็นการเปิดเผยตามกฎหมาย
                                    หรือเพื่อการดำเนินการตามสัญญา
                                </p>
                            </div>

                            <div className="privacy-section">
                                <h2>5. การรักษาความปลอดภัยข้อมูล</h2>
                                <p>
                                    เรามีมาตรการรักษาความปลอดภัยของข้อมูลส่วนบุคคลอย่างเหมาะสม
                                    เพื่อป้องกันการเข้าถึง การใช้ การเปลี่ยนแปลง หรือการเปิดเผยข้อมูลโดยไม่ได้รับอนุญาต
                                </p>
                            </div>

                            <div className="privacy-section">
                                <h2>6. สิทธิของเจ้าของข้อมูล</h2>
                                <p>ท่านมีสิทธิตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล ดังนี้:</p>
                                <ul>
                                    <li>สิทธิในการเข้าถึงข้อมูลส่วนบุคคลของท่าน</li>
                                    <li>สิทธิในการแก้ไขข้อมูลให้ถูกต้อง</li>
                                    <li>สิทธิในการลบข้อมูล</li>
                                    <li>สิทธิในการระงับการใช้ข้อมูล</li>
                                    <li>สิทธิในการคัดค้านการประมวลผลข้อมูล</li>
                                    <li>สิทธิในการถอนความยินยอม</li>
                                </ul>
                            </div>

                            <div className="privacy-section">
                                <h2>7. การใช้คุกกี้</h2>
                                <p>
                                    เว็บไซต์ของเราอาจใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของท่าน
                                    ท่านสามารถตั้งค่าเบราว์เซอร์เพื่อปฏิเสธคุกกี้ได้ แต่อาจส่งผลต่อการใช้งานบางส่วน
                                </p>
                            </div>

                            <div className="privacy-section">
                                <h2>8. การเปลี่ยนแปลงนโยบาย</h2>
                                <p>
                                    เราอาจปรับปรุงนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว
                                    การเปลี่ยนแปลงจะมีผลเมื่อเผยแพร่บนเว็บไซต์ของเรา
                                </p>
                            </div>

                            <div className="privacy-section">
                                <h2>9. ติดต่อเรา</h2>
                                <p>
                                    หากท่านมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ หรือต้องการใช้สิทธิของท่าน
                                    กรุณาติดต่อเราที่:
                                </p>
                                <div className="privacy-contact">
                                    <p><strong>บริษัท พีจีโฮม จำกัด</strong></p>
                                    <p>ตำบลหน้าเมือง อำเภอเมือง จังหวัดราชบุรี 70000</p>
                                    <p>โทร: 092-270-2120</p>
                                    <p>อีเมล: pghome.ceo@gmail.com</p>
                                    <p>LINE: @pghome</p>
                                </div>
                            </div>

                            <div className="privacy-updated">
                                <p>ปรับปรุงล่าสุด: ธันวาคม 2567</p>
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
