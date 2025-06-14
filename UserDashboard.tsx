import React, { useState } from 'react';
import { User, MapPin, Phone, Mail, Edit, Settings, Bell, FileText, Briefcase, Calendar, TrendingUp, Award, Download, Building, Star, CheckCircle, Clock } from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const userProfile = {
    name: 'Peter Parker',
    email: 'park.peter@email.com',
    phone: '081-234-5678',
    location: 'นครราชสีมา',
    joinDate: '15 ธันวาคม 2024',
    avatar: 'https://ew.com/thmb/b0zT2Z-I5kZEOTL8OuTTxUcegzs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Amazing-Spider-Man-Andrew-Garfield-042125-1dd6ea5625da4357a827bdfe283a1974.jpg',
    completedJobs: 12,
    rating: 4.8,
    certificates: 10,
  };

  const jobApplications = [
    {
      id: 1,
      title: 'พนักงานทำความสะอาด',
      company: 'บริษัท สะอาดใส จำกัด',
      status: 'รอการตอบรับ',
      appliedDate: '20 มกราคม 2025',
      statusColor: 'yellow',
    },
    {
      id: 2,
      title: 'คนส่งอาหาร',
      company: 'ร้านอาหารอร่อยมาก',
      status: 'ได้รับการตอบรับ',
      appliedDate: '18 มกราคม 2025',
      statusColor: 'green',
    },
    {
      id: 3,
      title: 'ผู้ช่วยช่างซ่อม',
      company: 'บริษัท ซ่อมเก่ง จำกัด',
      status: 'ไม่ผ่านการคัดเลือก',
      appliedDate: '15 มกราคม 2025',
      statusColor: 'red',
    },
  ];

  const verifiedJobs = [
    {
      id: 1,
      jobTitle: 'นักพัฒนาเว็บ',
      company: 'Tech Solutions Co.',
      completedDate: '2024-02-12',
      startDate: '2024-01-12',
      duration: '1 เดือน',
      workPeriod: '30 วัน',
      rating: 5,
      certificate: 'web_dev_cert_001.pdf',
      evaluation: {
        workBehavior: 'ดีมาก',
        workQuality: 'ดีมาก',
        communication: 'ดี',
        rehire: true
      },
      skills: [
        'พัฒนาเว็บไซต์ด้วย React และ TypeScript',
        'ออกแบบ UI/UX ที่ใช้งานง่าย',
        'จัดการฐานข้อมูลและ API',
        'ทำงานเป็นทีมได้ดี',
        'แก้ไขปัญหาได้อย่างมีประสิทธิภาพ'
      ],
      verified: true,
      requiresCertificate: true,
      certificateIssued: true,
    },
    {
      id: 2,
      jobTitle: 'ผู้ช่วยการตลาดดิจิทัล',
      company: 'Digital Marketing Hub',
      completedDate: '2025-01-15',
      startDate: '2024-10-15',
      duration: '3 เดือน',
      workPeriod: '90 วัน',
      rating: 5,
      certificate: 'marketing_cert_002.pdf',
      evaluation: {
        workBehavior: 'ดีมาก',
        workQuality: 'ดี',
        communication: 'ดีมาก',
        rehire: true
      },
      skills: [
        'สร้างเนื้อหาโซเชียลมีเดียที่น่าสนใจ',
        'วิเคราะห์ข้อมูลการตลาดออนไลน์',
        'จัดการแคมเปญโฆษณา Facebook และ Google',
        'ติดต่อประสานงานกับลูกค้าได้ดี',
        'มีความคิดสร้างสรรค์และนวัตกรรม'
      ],
      verified: true,
      requiresCertificate: true,
      certificateIssued: true,
    },
    {
      id: 4,
      jobTitle: 'ตัดต่อวิดีโอ',
      completedDate: '6 มกราคม 2025',
      startDate: '4 มกราคม 2025',
      duration: '2 วัน',
      workPeriod: '2 วัน',
      rating: 4,
      certificate: 'restaurant_cert_005.pdf',
      evaluation: {
        workBehavior: 'ดี',
        workQuality: 'ดี',
        communication: 'ดีมาก',
        rehire: true
      },
      skills: [
      'การตัดต่อวิดีโอด้วยโปรแกรม Adobe Premiere Pro, Final Cut Pro',
      'การทำการเปลี่ยนแปลงและแก้ไขเสียง',
      'การเพิ่มเอฟเฟกต์, การปรับแสงและสีให้เหมาะสม',
      'การสร้างกราฟิกเคลื่อนไหว (motion graphics)',
      'ทักษะในการทำงานร่วมกับทีมโปรดักชั่น'
    ],
      verified: false,
      requiresCertificate: false,
      certificateIssued: false,
    },
  ];

  const notifications = [
    {
      id: 1,
      title: 'งานใหม่ที่เหมาะกับคุณ',
      message: 'พบงาน "แม่บ้าน" ใกล้บ้านคุณ',
      time: '2 ชั่วโมงที่แล้ว',
      read: false,
    },
    {
      id: 2,
      title: 'ผลการสมัครงาน',
      message: 'คุณได้รับการตอบรับสำหรับตำแหน่ง "คนส่งอาหาร"',
      time: '1 วันที่แล้ว',
      read: true,
    },
    {
      id: 3,
      title: 'ใบรับรองพร้อมแล้ว',
      message: 'ใบรับรองงาน "พนักงานทำความสะอาด" พร้อมดาวน์โหลด',
      time: '3 วันที่แล้ว',
      read: true,
    },
  ];

  const generateCertificatePDF = (job: any) => {
    const certificateContent = `
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ใบรับรองการทำงาน - BuddyMe</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Kanit', sans-serif;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .certificate-container {
            background: white;
            width: 210mm;
            min-height: 297mm;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
            border-radius: 8px;
            overflow: hidden;
            position: relative;
        }

        .certificate-header {
            background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
            color: white;
            padding: 40px;
            text-align: center;
            position: relative;
        }

        .certificate-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="20" cy="80" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
            opacity: 0.3;
        }

        .logo-section {
            position: relative;
            z-index: 2;
            margin-bottom: 20px;
        }

        .logo {
            width: 80px;
            height: 80px;
            background: rgba(255,255,255,0.2);
            border: 3px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            margin: 0 auto 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            font-weight: 700;
            backdrop-filter: blur(10px);
        }

        .certificate-title {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: 2px;
            position: relative;
            z-index: 2;
        }

        .certificate-subtitle {
            font-size: 16px;
            opacity: 0.9;
            font-weight: 400;
            position: relative;
            z-index: 2;
        }

        .certificate-body {
            padding: 50px;
            line-height: 1.8;
        }

        .intro-text {
            text-align: center;
            font-size: 18px;
            color: #374151;
            margin-bottom: 40px;
            font-weight: 500;
        }

        .main-content {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            padding: 40px;
            margin: 30px 0;
            position: relative;
        }

        .main-content::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 6px;
            height: 100%;
            background: linear-gradient(to bottom, #2563eb, #1e40af);
            border-radius: 0 0 0 12px;
        }

        .info-row {
            display: flex;
            margin-bottom: 20px;
            align-items: center;
        }

        .info-label {
            font-weight: 600;
            color: #374151;
            min-width: 180px;
            font-size: 16px;
        }

        .info-value {
            color: #374151;
            padding: 8px 16px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
        }

        .conclusion-text {
            text-align: center;
            font-size: 16px;
            color: #374151;
            margin: 40px 0;
            padding: 20px;
            background: #f1f5f9;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
        }

        .signatures-section {
            display: flex;
            justify-content: space-between;
            margin-top: 60px;
            gap: 40px;
        }

        .signature-box {
            flex: 1;
            text-align: center;
            padding: 20px;
            border: 2px dashed #d1d5db;
            border-radius: 8px;
            background: #fafafa;
        }

        .signature-line {
            border-bottom: 2px solid #374151;
            width: 200px;
            margin: 40px auto 15px;
        }

        .signature-title {
            font-weight: 600;
            color: #374151;
            margin-bottom: 8px;
            font-size: 14px;
        }

        .signature-name {
            color: #6b7280;
            font-size: 13px;
            font-weight: 500;
        }

        .footer-section {
            background: #f8fafc;
            padding: 30px;
            text-align: center;
            border-top: 2px solid #e5e7eb;
            margin-top: 40px;
        }

        .issue-date {
            font-weight: 600;
            color: #374151;
            margin-bottom: 15px;
            font-size: 16px;
        }

        .verification-code {
            background: white;
            border: 2px solid #2563eb;
            padding: 15px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            font-weight: 600;
            color: #1e40af;
            margin: 15px 0;
            letter-spacing: 1px;
        }

        .contact-info {
            font-size: 12px;
            color: #6b7280;
            margin-top: 20px;
            line-height: 1.6;
        }

        .watermark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 120px;
            color: rgba(37, 99, 235, 0.03);
            font-weight: 900;
            z-index: 1;
            pointer-events: none;
        }

        @media print {
            body {
                background: white;
                padding: 0;
            }
            .certificate-container {
                box-shadow: none;
                border-radius: 0;
                width: 100%;
                min-height: auto;
            }
        }
    </style>
</head>
<body>
    <div class="certificate-container">
        <div class="watermark">BuddyMe</div>

        <div class="certificate-header">
            <div class="logo-section">
                <div class="logo">BM</div>
                <h1 class="certificate-title">ใบรับรองการทำงาน</h1>
                <p class="certificate-subtitle">Certificate of Employment Completion</p>
            </div>
        </div>

        <div class="certificate-body">
            <p class="intro-text">
                <strong>แพลตฟอร์ม BuddyMe</strong> ขอรับรองว่าผู้ปฏิบัติงานท่านนี้<br>
                ได้ทำงานเสร็จสิ้นตามข้อตกลงและผ่านการประเมินจากนายจ้างเรียบร้อยแล้ว
            </p>
           
            <div class="main-content">
                <div class="info-row">
                    <span class="info-label">ชื่อผู้ปฏิบัติงาน:</span>
                    <span class="info-value">${userProfile.name}</span>
                </div>
               
                <div class="info-row">
                    <span class="info-label">ตำแหน่งงาน:</span>
                    <span class="info-value">${job.jobTitle}</span>
                </div>
               
                <div class="info-row">
                    <span class="info-label">สถานประกอบการ:</span>
                    <span class="info-value">${job.company}</span>
                </div>
               
                <div class="info-row">
                    <span class="info-label">ระยะเวลาการทำงาน:</span>
                    <span class="info-value">${job.workPeriod}</span>
                </div>
               
                <div class="info-row">
                    <span class="info-label">วันที่เริ่มงาน:</span>
                    <span class="info-value">${new Date(job.startDate).toLocaleDateString('th-TH', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                </div>
               
                <div class="info-row">
                    <span class="info-label">วันที่เสร็จสิ้น:</span>
                    <span class="info-value">${new Date(job.completedDate).toLocaleDateString('th-TH', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                </div>
            </div>
           
            <p class="conclusion-text">
                ผู้ปฏิบัติงานได้แสดงความรับผิดชอบและทำงานด้วยความเรียบร้อย<br>
                จึงออกใบรับรองนี้ให้เพื่อเป็นหลักฐานในการสมัครงานต่อไป
            </p>
           
            <div class="signatures-section">
                <div class="signature-box">
                    <div class="signature-line"></div>
                    <div class="signature-title">ผู้รับรองจากระบบ</div>
                    <div class="signature-name">BuddyMe Platform</div>
                    <div class="signature-name">ระบบจัดการงานออนไลน์</div>
                </div>
               
                <div class="signature-box">
                    <div class="signature-line"></div>
                    <div class="signature-title">ผู้รับรองจากนายจ้าง</div>
                    <div class="signature-name">${job.company}</div>
                    <div class="signature-name">ยืนยันการทำงานเสร็จสิ้น</div>
                </div>
            </div>
        </div>

        <div class="footer-section">
            <div class="issue-date">
                วันที่ออกใบรับรอง: ${new Date().toLocaleDateString('th-TH', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
            </div>
           
            <div class="verification-code">
                รหัสตรวจสอบ: BM${job.id.toString().padStart(6, '0')}-${new Date().getFullYear()}
            </div>
           
            <div class="contact-info">
                ใบรับรองนี้สามารถตรวจสอบความถูกต้องได้ที่ <strong>www.buddyme.co.th/verify</strong><br>
                หรือติดต่อ <strong>02-123-4567</strong> | <strong>support@buddyme.co.th</strong><br><br>
                <em>© 2025 BuddyMe Platform - แพลตฟอร์มหางานสำหรับทุกคน</em>
            </div>
        </div>
    </div>
</body>
</html>`;

    // Create blob and download
    const blob = new Blob([certificateContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ใบรับรองการทำงาน_${userProfile.name}_${job.jobTitle}_BuddyMe.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getStatusBadge = (status: string, color: string) => {
    const colorClasses = {
      yellow: 'bg-yellow-100 text-yellow-800',
      green: 'bg-green-100 text-green-800',
      red: 'bg-red-100 text-red-800',
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClasses[color as keyof typeof colorClasses]}`}>
        {status}
      </span>
    );
  };

  const getEvaluationColor = (level: string) => {
    switch (level) {
      case 'ดีมาก':
        return 'text-green-600 bg-green-50';
      case 'ดี':
        return 'text-blue-600 bg-blue-50';
      case 'พอใช้':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const tabs = [
    { id: 'profile', name: 'โปรไฟล์', icon: User },
    { id: 'applications', name: 'การสมัครงาน', icon: Briefcase },
    { id: 'certificates', name: 'ใบรับรอง', icon: Award },
    { id: 'notifications', name: 'การแจ้งเตือน', icon: Bell },
    { id: 'settings', name: 'การตั้งค่า', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <img
                src={userProfile.avatar}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-primary-200"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-200">
                <Edit className="h-4 w-4" />
              </button>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{userProfile.name}</h1>
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-gray-600">
                <div className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
                  <Mail className="h-4 w-4 mr-2" />
                  {userProfile.email}
                </div>
                <div className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
                  <Phone className="h-4 w-4 mr-2" />
                  {userProfile.phone}
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  {userProfile.location}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600">{userProfile.completedJobs}</div>
                <div className="text-sm text-gray-600">งานที่เสร็จ</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">{userProfile.rating}</div>
                <div className="text-sm text-gray-600">คะแนนเฉลี่ย</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">{userProfile.certificates}</div>
                <div className="text-sm text-gray-600">ใบรับรอง</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5 mr-3" />
                    {tab.name}
                    {tab.id === 'certificates' && (
                      <span className="ml-auto bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                        {verifiedJobs.length}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">ข้อมูลส่วนตัว</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ชื่อ-นามสกุล
                        </label>
                        <input
                          type="text"
                          value={userProfile.name}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          อีเมล
                        </label>
                        <input
                          type="email"
                          value={userProfile.email}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          เบอร์โทรศัพท์
                        </label>
                        <input
                          type="tel"
                          value={userProfile.phone}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ที่อยู่
                        </label>
                        <input
                          type="text"
                          value={userProfile.location}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        เกี่ยวกับฉัน
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="เล่าเกี่ยวกับตัวคุณ ทักษะ และประสบการณ์..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                    >
                      บันทึกการเปลี่ยนแปลง
                    </button>
                  </form>
                </div>
              )}

              {/* Applications Tab */}
              {activeTab === 'applications' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">ประวัติการสมัครงาน</h2>
                  <div className="space-y-4">
                    {jobApplications.map((application) => (
                      <div
                        key={application.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {application.title}
                            </h3>
                            <p className="text-gray-600 mb-2">{application.company}</p>
                            <p className="text-sm text-gray-500">
                              สมัครเมื่อ: {application.appliedDate}
                            </p>
                          </div>
                          <div className="mt-4 md:mt-0">
                            {getStatusBadge(application.status, application.statusColor)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certificates Tab */}
              {activeTab === 'certificates' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">ใบรับรองของฉัน</h2>
                    <div className="text-sm text-gray-600">
                      ทั้งหมด {verifiedJobs.length} ใบรับรอง
                    </div>
                  </div>

                  {/* Summary Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-primary-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary-600">{verifiedJobs.length}</div>
                      <div className="text-sm text-primary-700">ใบรับรองทั้งหมด</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {(verifiedJobs.reduce((sum, job) => sum + job.rating, 0) / verifiedJobs.length).toFixed(1)}
                      </div>
                      <div className="text-sm text-green-700">คะแนนเฉลี่ย</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {verifiedJobs.reduce((sum, job) => {
                          const duration = job.duration.includes('เดือน')
                            ? parseInt(job.duration) * 30
                            : parseInt(job.duration);
                          return sum + duration;
                        }, 0)}
                      </div>
                      <div className="text-sm text-blue-700">วันทำงานรวม</div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-600">
                        {verifiedJobs.filter(job => job.rating === 5).length}
                      </div>
                      <div className="text-sm text-yellow-700">งาน 5 ดาว</div>
                    </div>
                  </div>

                  {/* Verified Jobs List */}
                  <div className="space-y-6">
                    {verifiedJobs.map((job) => (
                      <div
                        key={job.id}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
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
                                  <span>สถานประกอบการ: {job.company}</span>
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
                                <TrendingUp className="h-4 w-4 mr-2 text-gray-400" />
                                ระยะเวลา: {job.duration}
                              </div>
                            </div>

                            {/* Evaluation Summary */}
                            <div className="mb-4">
                              <h4 className="text-sm font-medium text-gray-900 mb-3">ผลการประเมิน:</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                <div>
                                  <span className="text-gray-700">• พฤติกรรมในการทำงาน: </span>
                                  <span className="font-medium text-gray-800">{job.evaluation.workBehavior}</span>
                                </div>
                                <div>
                                  <span className="text-gray-700">• คุณภาพของงาน: </span>
                                  <span className="font-medium text-gray-800">{job.evaluation.workQuality}</span>
                                </div>
                                <div>
                                  <span className="text-gray-700">• การสื่อสารและทัศนคติ: </span>
                                  <span className="font-medium text-gray-800">{job.evaluation.communication}</span>
                                </div>
                                <div>
                                  <span className="text-gray-700">• นายจ้างยินดีรับเข้าทำงานอีก: </span>
                                  <span className="font-medium text-gray-800">{job.evaluation.rehire ? 'ใช่' : 'ไม่ใช่'}</span>
                                </div>
                              </div>
                            </div>

                            {/* Skills Section */}
                            <div className="mb-4">
                              <h4 className="text-sm font-medium text-gray-900 mb-2">ทักษะที่ได้รับการรับรอง:</h4>
                              <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
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
                                <div className="flex items-center space-x-3">
                                  {job.requiresCertificate ? (
                                    job.certificateIssued ? (
                                      <>
                                        <div className="flex items-center text-sm text-green-600">
                                          <Award className="h-4 w-4 mr-1" />
                                          ออกใบรับรองแล้ว
                                        </div>
                                        <button
                                          onClick={() => generateCertificatePDF(job)}
                                          className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 text-sm"
                                        >
                                          <Download className="h-4 w-4 mr-2" />
                                          ดาวน์โหลด
                                        </button>
                                      </>
                                    ) : (
                                      <div className="flex items-center text-sm text-yellow-600">
                                        <Clock className="h-4 w-4 mr-1" />
                                        กำลังออกใบรับรอง
                                      </div>
                                    )
                                  ) : (
                                    <div className="flex items-center text-sm text-gray-500">
                                      <CheckCircle className="h-4 w-4 mr-1" />
                                      งานไม่ต้องใบรับรอง
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Certificate Benefits */}
                  <div className="mt-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white">
                    <div className="text-center">
                      <Award className="h-10 w-10 mx-auto mb-3" />
                      <h3 className="text-lg font-bold mb-3">ประโยชน์ของใบรับรอง</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <CheckCircle className="h-6 w-6 mx-auto mb-2 opacity-80" />
                          <p className="opacity-90">พิสูจน์ประสบการณ์การทำงาน</p>
                        </div>
                        <div className="text-center">
                          <Star className="h-6 w-6 mx-auto mb-2 opacity-80" />
                          <p className="opacity-90">เพิ่มความน่าเชื่อถือ</p>
                        </div>
                        <div className="text-center">
                          <TrendingUp className="h-6 w-6 mx-auto mb-2 opacity-80" />
                          <p className="opacity-90">โอกาสงานดีขึ้น</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">การแจ้งเตือน</h2>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`border rounded-lg p-4 ${
                          notification.read ? 'border-gray-200 bg-white' : 'border-primary-200 bg-primary-50'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className={`font-semibold mb-1 ${notification.read ? 'text-gray-900' : 'text-primary-900'}`}>
                              {notification.title}
                            </h3>
                            <p className="text-gray-700 mb-2">{notification.message}</p>
                            <p className="text-sm text-gray-500">{notification.time}</p>
                          </div>
                          {!notification.read && (
                            <div className="w-3 h-3 bg-primary-500 rounded-full ml-4 mt-1"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">การตั้งค่า</h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">การแจ้งเตือน</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                         
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span className="text-gray-700">แจ้งเตือนงานใหม่</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span className="text-gray-700">แจ้งเตือนผลการสมัครงาน</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          <span className="text-gray-700">แจ้งเตือนข่าวสารจากระบบ</span>
                        </label>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">ความปลอดภัย</h3>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 mr-4">
                        เปลี่ยนรหัสผ่าน
                      </button>
                      <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200">
                        ลบบัญชี
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;