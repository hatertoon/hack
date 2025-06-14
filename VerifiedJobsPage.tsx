import React from 'react';
import { Award, Download, Calendar, CheckCircle, User, Building, Star } from 'lucide-react';

const VerifiedJobsPage = () => {
  const verifiedJobs = [
    {
      id: 1,
      jobTitle: 'นักพัฒนาเว็บ',
      company: 'Tech Solutions Co.',
      completedDate: '15 มกราคม 2025',
      duration: '4 เดือน',
      rating: 5,
      certificate: 'web_dev_cert_001.pdf',
      feedback: 'สามารถพัฒนาเว็บไซต์ได้ตามความต้องการของลูกค้า มีทักษะในการใช้เทคโนโลยีใหม่ๆ และทำงานได้อย่างมืออาชีพ',
      verified: true,
    },
    {
      id: 2,
      jobTitle: 'นักออกแบบกราฟิก',
      company: 'Creative Studio',
      completedDate: '12 มกราคม 2025',
      duration: '3 เดือน',
      rating: 5,
      certificate: 'graphic_design_cert_002.pdf',
      feedback: 'ออกแบบงานกราฟิกที่มีความสร้างสรรค์ เข้าใจลูกค้าได้ดีเยี่ยม และส่งงานตรงเวลาเสมอ',
      verified: true,
    },
    {
      id: 3,
      jobTitle: 'ผู้ดูแลระบบ IT',
      company: 'IT Support Ltd.',
      completedDate: '8 มกราคม 2025',
      duration: '6 เดือน',
      rating: 4,
      certificate: 'it_support_cert_003.pdf',
      feedback: 'การดูแลระบบเป็นไปอย่างราบรื่น แก้ปัญหาคอมพิวเตอร์ได้อย่างมีประสิทธิภาพ แต่ควรพัฒนาทักษะการสื่อสารเพิ่มเติม',
      verified: true,
    },
    {
      id: 4,
      jobTitle: 'ช่างเทคนิคคอมพิวเตอร์',
      company: 'Tech Service Center',
      completedDate: '5 มกราคม 2025',
      duration: '2 เดือน',
      rating: 5,
      certificate: 'tech_cert_004.pdf',
      feedback: 'ทำงานได้อย่างมืออาชีพ มีความเชี่ยวชาญในการซ่อมและดูแลคอมพิวเตอร์ ลูกค้าประทับใจในบริการ',
      verified: true,
    },
    {
      id: 5,
      jobTitle: 'นักวิเคราะห์ข้อมูล',
      company: 'Data Analytics Co.',
      completedDate: '2 มกราคม 2025',
      duration: '5 เดือน',
      rating: 5,
      certificate: 'data_analyst_cert_005.pdf',
      feedback: 'สามารถวิเคราะห์ข้อมูลได้อย่างแม่นยำ นำเสนอผลงานได้ชัดเจน และให้คำแนะนำที่มีประโยชน์',
      verified: true,
    },
    {
      id: 6,
      jobTitle: 'ผู้จัดการโครงการ',
      company: 'Project Management Ltd.',
      completedDate: '28 ธันวาคม 2024',
      duration: '8 เดือน',
      rating: 4,
      certificate: 'project_manager_cert_006.pdf',
      feedback: 'จัดการโครงการได้ดี ทีมงานให้ความร่วมมือ แต่ควรปรับปรุงการติดตามงานให้ละเอียดมากขึ้น',
      verified: true,
    },
    {
      id: 7,
      jobTitle: 'นักการตลาดดิจิทัล',
      company: 'Digital Marketing Agency',
      completedDate: '25 ธันวาคม 2024',
      duration: '3 เดือน',
      rating: 5,
      certificate: 'digital_marketing_cert_007.pdf',
      feedback: 'สร้างแคมเปญการตลาดที่มีประสิทธิภาพ เพิ่มยอดขายได้อย่างชัดเจน และมีความคิดสร้างสรรค์สูง',
      verified: true,
    },
    {
      id: 8,
      jobTitle: 'ผู้เชี่ยวชาญด้านความปลอดภัย',
      company: 'Security Solutions Inc.',
      completedDate: '20 ธันวาคม 2024',
      duration: '4 เดือน',
      rating: 5,
      certificate: 'security_expert_cert_008.pdf',
      feedback: 'มีความรู้ด้านความปลอดภัยอย่างลึกซึ้ง สามารถป้องกันภัยคุกคามได้อย่างมีประสิทธิภาพ',
      verified: true,
    },
    {
      id: 9,
      jobTitle: 'นักพัฒนาแอปพลิเคชัน',
      company: 'Mobile App Studio',
      completedDate: '15 ธันวาคม 2024',
      duration: '6 เดือน',
      rating: 4,
      certificate: 'app_developer_cert_009.pdf',
      feedback: 'พัฒนาแอปพลิเคชันได้ตามความต้องการ มีทักษะการเขียนโปรแกรมดี แต่ควรเพิ่มการทดสอบให้มากขึ้น',
      verified: true,
    },
    {
      id: 10,
      jobTitle: 'ที่ปรึกษาธุรกิจ',
      company: 'Business Consulting Group',
      completedDate: '10 ธันวาคม 2024',
      duration: '7 เดือน',
      rating: 5,
      certificate: 'business_consultant_cert_010.pdf',
      feedback: 'ให้คำปรึกษาที่มีคุณค่า ช่วยปรับปรุงกระบวนการทำงานได้อย่างมีประสิทธิภาพ และมีวิสัยทัศน์ที่ดี',
      verified: true,
    },
  ];

  const stats = [
    { label: 'งานที่เสร็จสิ้น', value: '10', icon: CheckCircle },
    { label: 'ใบรับรองที่ได้รับ', value: '10', icon: Award },
    { label: 'คะแนนเฉลี่ย', value: '4.8', icon: Star },
    { label: 'วันทำงานรวม', value: '1,250', icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            งานที่ได้รับการรับรอง
          </h1>
          <p className="text-xl text-gray-600">
            ประวัติการทำงานและใบรับรองที่คุณได้รับ
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Verified Jobs List */}
        <div className="space-y-6">
          {verifiedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  {/* Job Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                        {job.jobTitle}
                        {job.verified && (
                          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            รับรองแล้ว
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < job.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({job.rating}/5)</span>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      เสร็จสิ้นเมื่อ: {job.completedDate}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-2 text-gray-400" />
                      ระยะเวลา: {job.duration}
                    </div>
                  </div>

                  {/* Feedback */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">ความคิดเห็นจากนายจ้าง:</h4>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded-lg italic">
                      "{job.feedback}"
                    </p>
                  </div>

                  {/* Certificate Section */}
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-primary-600 mr-2" />
                        <div>
                          <div className="text-sm font-medium text-primary-900">
                            ใบรับรองการทำงาน
                          </div>
                          <div className="text-xs text-primary-700">
                            {job.certificate}
                          </div>
                        </div>
                      </div>
                      <button className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 text-sm">
                        <Download className="h-4 w-4 mr-2" />
                        ดาวน์โหลด
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Benefits */}
        <div className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">ประโยชน์ของใบรับรอง</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">พิสูจน์ประสบการณ์</h3>
                <p className="text-sm opacity-90">
                  ใช้เป็นหลักฐานประสบการณ์การทำงานสำหรับสมัครงานใหม่
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">เพิ่มความน่าเชื่อถือ</h3>
                <p className="text-sm opacity-90">
                  นายจ้างมั่นใจในความสามารถและประสบการณ์ของคุณมากขึ้น
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">โอกาสงานดีขึ้น</h3>
                <p className="text-sm opacity-90">
                  ได้รับงานที่มีเงินเดือนและสวัสดิการที่ดีกว่า
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Empty State (if no verified jobs) */}
        {verifiedJobs.length === 0 && (
          <div className="text-center py-12">
            <Award className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ยังไม่มีงานที่ได้รับการรับรอง
            </h3>
            <p className="text-gray-600 mb-6">
              เมื่อคุณทำงานเสร็จสิ้นและได้รับการยืนยันจากนายจ้าง<br />
              ใบรับรองจะปรากฏที่นี่
            </p>
            <button className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200">
              ไปหางาน
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifiedJobsPage;