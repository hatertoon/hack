import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Award, TrendingUp, CheckCircle, ArrowRight, Star, Building, UserCheck } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: Search,
      title: 'ค้นหางานง่าย',
      description: 'ระบบค้นหางานที่ครบครันด้วยฟิลเตอร์ที่หลากหลาย',
    },
    {
      icon: UserCheck,
      title: 'ตรวจสอบได้',
      description: 'งานทุกตำแหน่งผ่านการตรวจสอบและรับรองจากระบบ',
    },
    {
      icon: Award,
      title: 'ใบรับรอง',
      description: 'รับใบรับรองหลังจากทำงานเสร็จสิ้น เพิ่มประสบการณ์',
    },
    {
      icon: Building,
      title: 'นายจ้างเชื่อถือได้',
      description: 'นายจ้างทุกรายผ่านการตรวจสอบอย่างเข้มงวด',
    },
  ];

  const stats = [
    { label: 'ผู้ใช้งานทั้งหมด', value: '50,000+', icon: Users },
    { label: 'งานที่เปิดรับ', value: '5,000+', icon: Building },
    { label: 'ใบรับรองที่ออก', value: '25,000+', icon: Award },
    { label: 'อัตราสำเร็จ', value: '95%', icon: TrendingUp },
  ];

  const testimonials = [
    {
      name: 'นางสาวสมใจ ใจดี',
      role: 'พนักงานทำความสะอาด',
      content: 'ผมหางานยากมาก เพราะไม่มีประสบการณ์ แต่ BuddyMe ช่วยให้ผมได้งานที่เหมาะสม',
      rating: 5,
    },
    {
      name: 'นายสมชาย ทำงาน',
      role: 'คนส่งอาหาร',
      content: 'ระบบใช้ง่าย หางานได้เร็ว และนายจ้างดูแลดี ได้ใบรับรองทำให้มีงานต่อเนื่อง',
      rating: 5,
    },
    {
      name: 'นางสมหญิง ขยัน',
      role: 'แม่บ้าน',
      content: 'ตอนแรกไม่เชื่อว่าจะหางานได้ง่ายขนาดนี้ ตอนนี้มีงานประจำและรายได้ดีแล้ว',
      rating: 5,
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                หางานได้ง่าย
                <br />
                <span className="text-yellow-300">สำหรับทุกคน</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                แพลตฟอร์มที่เชื่อมโยงผู้หางานกับนายจ้าง
                <br />
                เปิดโอกาสให้ทุกคนมีงานทำ ไม่ว่าจะเป็นใคร
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/jobs"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-xl hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Search className="mr-2 h-5 w-5" />
                  หางานเลย
                </Link>
                <Link
                  to="/employer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-700 transition-all duration-200"
                >
                  สำหรับนายจ้าง
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative lg:ml-8 animate-bounce-subtle">
              <div className="w-80 h-80 mx-auto bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="People looking for jobs"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ปัญหาที่เราต้องการแก้ไข
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              หลายคนหางานยาก เพราะขาดประสบการณ์ ขาดโอกาส หรือไม่รู้ว่าจะเริ่มต้นอย่างไร
              <br />
              เราเชื่อว่าทุกคนควรมีโอกาสในการทำงานและพัฒนาตนเอง
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ขาดโอกาส</h3>
              <p className="text-gray-600">
                คนหลายกลุ่มไม่ได้รับโอกาสในการทำงาน
                เพราะขาดทักษะหรือประสบการณ์
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">หางานยาก</h3>
              <p className="text-gray-600">
                การหางานที่เหมาะสมเป็นเรื่องยาก
                โดยเฉพาะสำหรับคนที่ไม่มีประสบการณ์
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ไม่มีใบรับรอง</h3>
              <p className="text-gray-600">
                การทำงานไม่เป็นทางการทำให้ไม่มีประสบการณ์
                ที่สามารถพิสูจน์ได้
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ทำไมต้องเลือก BuddyMe?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              เราสร้างระบบที่ช่วยเชื่อมโยงผู้หางานกับนายจ้าง ด้วยความปลอดภัยและเชื่อถือได้
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ตัวเลขที่พิสูจน์ความสำเร็จ
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              เสียงจากผู้ใช้งานจริง
            </h2>
            <p className="text-xl text-gray-600">
              ฟังประสบการณ์จากคนที่ประสบความสำเร็จผ่าน BuddyMe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            พร้อมเริ่มต้นหางานแล้วหรือยัง?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            สมัครสมาชิกวันนี้ และเริ่มต้นค้นหางานที่เหมาะกับคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/jobs"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <Search className="mr-2 h-5 w-5" />
              เริ่มหางานเลย
            </Link>
            <Link
              to="/help"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-700 transition-all duration-200"
            >
              เรียนรู้เพิ่มเติม
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
