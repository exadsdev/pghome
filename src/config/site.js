// Site Configuration - Update these values to change domain and company info
// In production, these values can be overridden by environment variables

export const siteConfig = {
  domain: process.env.NEXT_PUBLIC_DOMAIN || 'pghome.co.th',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pghome.co.th',
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || 'PG HOME',
  companyFullName: 'บริษัท พีจีโฮม จำกัด',
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '084-2899794',
  lineId: process.env.NEXT_PUBLIC_LINE_ID || 'pghome4289',
  email: 'pghome.con@gmail.com',
  address: '518 ต.เจดีย์หัก อ.เมือง จ.ราชบุรี 70000',
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/pghome',

  // SEO
  title: 'คุณมีแล้วมั้ยบ้านที่โดน | PG HOME รับสร้างบ้าน ราคาประหยัด คืนกำไรให้ชีวิต',
  description: 'PG HOME รับสร้างบ้าน ออกแบบบ้าน รับเหมาก่อสร้าง ราคาประหยัด ใส่ใจทุกรายละเอียด ดูแลครบวงจร ตั้งแต่ออกแบบ สร้าง จนถึงส่งมอบ',
  keywords: 'รับสร้างบ้าน, ออกแบบบ้าน, รับเหมาก่อสร้าง, สร้างบ้าน, PG HOME, บ้านราคาประหยัด',
};

