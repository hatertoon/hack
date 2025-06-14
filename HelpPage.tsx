import React, { useState } from 'react';
import { HelpCircle, MessageCircle, Phone, Mail, ChevronDown, Search, BookOpen, Users, Shield } from 'lucide-react';

const HelpPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    { id: 'general', name: 'ทั่วไป', icon: BookOpen },
    { id: 'jobseeker', name: 'สำหรับผู้หางาน', icon: Users },
    { id: 'employer', name: 'สำหรับนายจ้าง', icon: Shield },
  ];

  const faqs = {
    general: [
      {
        id: 1,
        question: 'BuddyMe คืออะไร?',
        answer: 'BuddyMe เป็นแพลตฟอร์มหางานที่เชื่อมโยงผู้หางานกับนายจ้าง โดยเฉพาะสำหรับคนที่หางานยาก เพื่อสร้างโอกาสให้ทุกคนมีงานทำ พร้อมระบบใบรับรองที่จะช่วยเพิ่มประสบการณ์และความน่าเชื่อถือ'
      },
      {
        id: 2,
        question: 'การใช้งาน BuddyMe มีค่าใช้จ่ายหรือไม่?',
        answer: 'สำหรับผู้หางาน การใช้งานฟรี! คุณสามารถสมัครสมาชิก ค้นหางาน และสมัครงานได้โดยไม่มีค่าใช้จ่าย สำหรับนายจ้าง จะมีค่าธรรมเนียมเพียงเล็กน้อยในการโพสต์งาน'
      },
      {
        id: 3,
        question: 'ใบรับรองมีความสำคัญอย่างไร?',
        answer: 'ใบรับรองเป็นหลักฐานที่แสดงว่าคุณได้ทำงานเสร็จสิ้นตามที่นายจ้างต้องการ จะช่วยเพิ่มความน่าเชื่อถือและเป็นประสบการณ์ที่นายจ้างรายต่อไปสามารถอ้างอิงได้'
      },
      {
        id: 4,
        question: 'ทำไมต้องเลือก BuddyMe?',
        answer: 'เพราะเราเข้าใจปัญหาของคนหางาน เรามีระบบตรวจสอบนายจ้างอย่างเข้มงวด มีใบรับรองที่ช่วยสร้างประสบการณ์ และทีมงานที่พร้อมช่วยเหลือตลอด 24 ชั่วโมง'
      }
    ],
    jobseeker: [
      {
        id: 5,
        question: 'ฉันจะสมัครงานอย่างไร?',
        answer: '1. สมัครสมาชิกและเขียนโปรไฟล์ให้สมบูรณ์ 2. ค้นหางานที่เหมาะสม 3. กดปุ่ม "สมัครงาน" 4. รอนายจ้างติดต่อกลับ ง่ายๆ แค่นี้!'
      },
      {
        id: 6,
        question: 'ถ้าไม่มีประสบการณ์เลย สมัครงานได้ไหม?',
        answer: 'ได้เลย! BuddyMe มีงานมากมายที่เปิดรับคนไม่มีประสบการณ์ โดยจะมีการฝึกให้ และเมื่อทำเสร็จจะได้ใบรับรองเป็นประสบการณ์ครั้งแรกของคุณ'
      },
      {
        id: 7,
        question: 'จะรู้ได้อย่างไรว่านายจ้างไหนน่าเชื่อถือ?',
        answer: 'งานในระบบของเราผ่านการตรวจสอบทั้งหมด นายจ้างที่ผ่านการรับรองจะมีเครื่องหมาย ✓ และเราจะติดตามผลการทำงานอย่างใกล้ชิด'
      },
      {
        id: 8,
        question: 'ถ้ามีปัญหากับนายจ้างจะทำอย่างไร?',
        answer: 'ติดต่อทีมงานของเราทันที เราจะเข้าไปช่วยประสานงานและแก้ไขปัญหา รวมถึงปกป้องสิทธิ์ของคุณ'
      }
    ],
    employer: [
      {
        id: 9,
        question: 'ฉันจะโพสต์งานอย่างไร?',
        answer: '1. สมัครบัญชีนายจ้าง 2. ยืนยันตัวตนและข้อมูลบริษัท 3. กดปุ่ม "โพสต์งานใหม่" 4. กรอกรายละเอียดงาน 5. ชำระค่าธรรมเนียม และงานจะเผยแพร่ทันที'
      },
      {
        id: 10,
        question: 'ค่าธรรมเนียมการโพสต์งานเท่าไร?',
        answer: 'งานประจำ 299 บาท/โพสต์ งานไม่ประจำ 99 บาท/โพสต์ รวมระยะเวลาเผยแพร่ 30 วัน และมีบริการหลังการขายฟรี'
      },
      {
        id: 11,
        question: 'ทำอย่างไรถึงจะออกใบรับรองให้คนงาน?',
        answer: 'เมื่องานเสร็จสิ้น คนงานจะส่งรูปผลงานมาให้ตรวจสอบ หากคุณพอใจกับผลงาน กดปุ่ม "ยืนยันงานเสร็จ" ระบบจะออกใบรับรองให้โดยอัตโนมัติ'
      },
      {
        id: 12,
        question: 'ถ้าผลงานไม่ได้มาตรฐานจะทำอย่างไร?',
        answer: 'คุณสามารถขอให้แก้ไขงาน หรือไม่ยืนยันผลงานได้ ทีมงานจะเข้ามาช่วยประสานงานเพื่อให้ได้ผลลัพธ์ที่ดีที่สุดสำหรับทุกฝ่าย'
      }
    ]
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'แชทสด',
      description: 'พูดคุยกับทีมงานทันที',
      action: 'เริ่มแชท',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: Phone,
      title: 'โทรศัพท์',
      description: '02-123-4567 (24 ชั่วโมง)',
      action: 'โทรเลย',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Mail,
      title: 'อีเมล',
      description: 'support@buddyme.co.th',
      action: 'ส่งอีเมล',
      color: 'bg-purple-500 hover:bg-purple-600',
    },
  ];

  const filteredFaqs = faqs[activeCategory as keyof typeof faqs].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ศูนย์ช่วยเหลือ
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            เรายินดีช่วยเหลือคุณ หาคำตอบหรือติดต่อเราได้ตลอด 24 ชั่วโมง
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="ค้นหาคำถามที่พบบ่อย..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">หมวดหมู่</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                      activeCategory === category.id
                        ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <category.icon className="h-5 w-5 mr-3" />
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                คำถามที่พบบ่อย - {categories.find(c => c.id === activeCategory)?.name}
              </h2>

              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                          expandedFaq === faq.id ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ไม่พบคำถามที่ค้นหา
                  </h3>
                  <p className="text-gray-600">
                    ลองเปลี่ยนคำค้นหา หรือติดต่อทีมงานเราโดยตรง
                  </p>
                </div>
              )}
            </div>

            {/* Contact Methods */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                ยังหาคำตอบไม่เจอ? ติดต่อเราได้เลย
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {method.description}
                    </p>
                    <button className={`px-6 py-2 ${method.color} text-white rounded-lg transition-colors duration-200`}>
                      {method.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Help */}
            <div className="mt-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">
                ต้องการความช่วยเหลือเพิ่มเติม?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                ทีมงานของเราพร้อมช่วยเหลือคุณตลอด 24 ชั่วโมง
                <br />
                ไม่ว่าจะเป็นปัญหาเรื่องการหางาน การใช้งานระบบ หรือข้อสงสัยใดๆ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  เริ่มแชทเลย
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200">
                  โทรหาเรา
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;