import React, { useState } from 'react';
import { Plus, Building, Users, CheckCircle, Clock, Edit, Trash2, Eye, Star, FileText, Award, Download } from 'lucide-react';

interface EvaluationData {
  workBehavior: {
    punctuality: string;
    responsibility: string;
    followRules: string;
    communication: string;
  };
  workQuality: {
    completeness: string;
    accuracy: string;
    problemSolving: string;
    timeliness: string;
  };
  communicationAttitude: {
    politeness: string;
    employerCommunication: string;
    teamwork: string;
  };
  summary: {
    rehire: boolean;
  };
  additionalComments?: string;
}

interface CompletedJob {
  id: number;
  workerName: string;
  jobTitle: string;
  completedDate: string;
  workPeriod: string;
  evaluation: EvaluationData;
  overallRating: number;
  certificateIssued: boolean;
  startDate: string;
  companyName: string;
  requiresCertificate: boolean;
}

const EmployerPage = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [showJobForm, setShowJobForm] = useState(false);
  const [showEvaluationModal, setShowEvaluationModal] = useState(false);
  const [showEvaluationDetail, setShowEvaluationDetail] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [selectedCompletedJob, setSelectedCompletedJob] = useState<CompletedJob | null>(null);
  const [evaluationData, setEvaluationData] = useState<EvaluationData>({
    workBehavior: {
      punctuality: '',
      responsibility: '',
      followRules: '',
      communication: ''
    },
    workQuality: {
      completeness: '',
      accuracy: '',
      problemSolving: '',
      timeliness: ''
    },
    communicationAttitude: {
      politeness: '',
      employerCommunication: '',
      teamwork: ''
    },
    summary: {
      rehire: false
    },
    additionalComments: ''
  });

  // Jobs that require certificates (professional positions)
  const jobsRequiringCertificates = [
    'UI/UX Designer',
    'Data Analys',
    'ผู้ช่วยช่างซ่อม',
    'พนักงานขาย',
    'ช่างไฟฟ้า',
    'ช่างประปา',
    'พนักงานรักษาความปลอดภัย',
    'พนักงานต้อนรับ',
    'พนักงานบัญชี'
  ];

  const [completedJobs, setCompletedJobs] = useState<CompletedJob[]>([
    {
      id: 1,
      workerName: 'นายสมชาย ทำงาน',
      jobTitle: 'Web Developer',
      completedDate: '2025-01-20',
      startDate: '2025-01-13',
      workPeriod: '7 วัน',
      companyName: 'TechSolutions Co., Ltd.',
      evaluation: {
        workBehavior: {
          punctuality: 'excellent',
          responsibility: 'excellent',
          followRules: 'good',
          communication: 'good'
        },
        workQuality: {
          completeness: 'excellent',
          accuracy: 'good',
          problemSolving: 'good',
          timeliness: 'excellent'
        },
        communicationAttitude: {
          politeness: 'excellent',
          employerCommunication: 'good',
          teamwork: 'excellent'
        },
        summary: {
          rehire: true
        },
        additionalComments: 'สามารถพัฒนาเว็บไซต์ได้อย่างมีประสิทธิภาพ และใช้งานเครื่องมือได้ครบถ้วน'
      },
      overallRating: 5,
      certificateIssued: true,
      requiresCertificate: true
    },
    {
      id: 2,
      workerName: 'นางสมใจ ขยัน',
      jobTitle: 'ผู้ช่วยฝ่ายบริหาร',
      completedDate: '2025-01-19',
      startDate: '2025-02-19',
      workPeriod: '1 เดือน',
      companyName: 'TechSolutions Co., Ltd.',
      evaluation: {
        workBehavior: {
          punctuality: 'good',
          responsibility: 'excellent',
          followRules: 'good',
          communication: 'excellent'
        },
        workQuality: {
          completeness: 'excellent',
          accuracy: 'excellent',
          problemSolving: 'good',
          timeliness: 'excellent'
        },
        communicationAttitude: {
          politeness: 'excellent',
          employerCommunication: 'excellent',
          teamwork: 'good'
        },
        summary: {
          rehire: true
        },
        additionalComments: 'ช่วยงานได้ดี ชัดเจน และพร้อมทำงานเสมอ'
      },
      overallRating: 5,
      certificateIssued: false,
      requiresCertificate: false
    }
  ]);

  const postedJobs = [
    {
      id: 1,
      title: 'แม่บ้าน',
      type: 'งานประจำ',
      location: 'โพธิ์กลาง',
      salary: '10,000 - 12,000 บาท',
      applicants: 5,
      status: 'ปิดรับสมัคร',
      postedDate: '2025-01-10',
    },
    {
      id: 3,
      title: 'Data Analys',
      type: 'งานประจำ',
      location: 'โพธิ์กลาง',
      salary: '15,000 - 18,000 บาท',
      applicants: 1,
      status: 'เปิดรับสมัคร',
      postedDate: '2025-01-15',
    },
  ];

  const [verificationRequests, setVerificationRequests] = useState([
    {
      id: 1,
      workerName: 'นางสมศรี ใจดี',
      jobTitle: 'UI/UX Designer',
      completedDate: '2025-01-22',
      startDate: '2025-01-01',
      workPeriod: '21 วัน',
      companyName: 'TechSolutions Co., Ltd.',
      photos: ['photo1.jpg', 'photo2.jpg'],
      status: 'รอการตรวจสอบ',
    },
    {
      id: 2,
      workerName: 'นางเพ็ญศรี ใจดำ',
      jobTitle: 'แม่บ้าน',
      completedDate: '2025-01-06',
      startDate: '2025-01-12',
      workPeriod: '5 เดือน',
      companyName: 'TechSolutions Co., Ltd.',
      photos: ['photo3.jpg'],
      status: 'รอการตรวจสอบ',
    },
  ]);

  const stats = [
    { label: 'งานที่โพสต์', value: '23', icon: Building },
    { label: 'ผู้สมัครทั้งหมด', value: '156', icon: Users },
    { label: 'งานที่เสร็จสิ้น', value: completedJobs.length.toString(), icon: CheckCircle },
    { label: 'รอการตรวจสอบ', value: verificationRequests.length.toString(), icon: Clock },
  ];

  const generateCertificatePDF = (job: CompletedJob) => {
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
                    <span class="info-value">${job.workerName}</span>
                </div>
               
                <div class="info-row">
                    <span class="info-label">ตำแหน่งงาน:</span>
                    <span class="info-value">${job.jobTitle}</span>
                </div>
               
                <div class="info-row">
                    <span class="info-label">สถานประกอบการ:</span>
                    <span class="info-value">${job.companyName}</span>
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
                    <div class="signature-name">${job.companyName}</div>
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
    link.download = `ใบรับรองการทำงาน_${job.workerName}_${job.jobTitle}_BuddyMe.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleConfirmJob = (request: any) => {
    setSelectedRequest(request);
    setShowEvaluationModal(true);
  };

  const handleEvaluationSubmit = () => {
    if (!selectedRequest) return;

    // Calculate overall rating based on evaluation
    const ratings = [
      ...Object.values(evaluationData.workBehavior),
      ...Object.values(evaluationData.workQuality),
      ...Object.values(evaluationData.communicationAttitude)
    ];

    const ratingValues = ratings.map(rating => {
      switch (rating) {
        case 'excellent': return 5;
        case 'good': return 4;
        case 'fair': return 3;
        case 'poor': return 2;
        default: return 3;
      }
    });

    const overallRating = Math.round(ratingValues.reduce((sum, val) => sum + val, 0) / ratingValues.length);
    const requiresCertificate = jobsRequiringCertificates.includes(selectedRequest.jobTitle);

    const newCompletedJob: CompletedJob = {
      id: Date.now(),
      workerName: selectedRequest.workerName,
      jobTitle: selectedRequest.jobTitle,
      completedDate: selectedRequest.completedDate,
      startDate: selectedRequest.startDate,
      workPeriod: selectedRequest.workPeriod,
      companyName: selectedRequest.companyName,
      evaluation: evaluationData,
      overallRating,
      certificateIssued: requiresCertificate,
      requiresCertificate
    };

    setCompletedJobs([...completedJobs, newCompletedJob]);
    setVerificationRequests(verificationRequests.filter(req => req.id !== selectedRequest.id));
    setShowEvaluationModal(false);
    setActiveTab('completed');

    // Reset evaluation data
    setEvaluationData({
      workBehavior: {
        punctuality: '',
        responsibility: '',
        followRules: '',
        communication: ''
      },
      workQuality: {
        completeness: '',
        accuracy: '',
        problemSolving: '',
        timeliness: ''
      },
      communicationAttitude: {
        politeness: '',
        employerCommunication: '',
        teamwork: ''
      },
      summary: {
        rehire: false
      },
      additionalComments: ''
    });
  };

  const getThaiRatingText = (rating: string) => {
    switch (rating) {
      case 'excellent': return 'ดีมาก';
      case 'good': return 'ดี';
      case 'fair': return 'พอใช้';
      case 'poor': return 'ต้องปรับปรุง';
      default: return '-';
    }
  };

  const getOverallCategoryRating = (category: any) => {
    const ratings = Object.values(category);
    const ratingCounts = {
      excellent: ratings.filter(r => r === 'excellent').length,
      good: ratings.filter(r => r === 'good').length,
      fair: ratings.filter(r => r === 'fair').length,
      poor: ratings.filter(r => r === 'poor').length
    };

    if (ratingCounts.excellent >= ratings.length / 2) return 'ดีมาก';
    if (ratingCounts.good >= ratings.length / 2) return 'ดี';
    if (ratingCounts.fair >= ratings.length / 2) return 'พอใช้';
    return 'ต้องปรับปรุง';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            TechSolutions Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            จัดการงานและตรวจสอบผลการทำงาน
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

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'jobs'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                งานที่โพสต์
              </button>
              <button
                onClick={() => setActiveTab('verification')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'verification'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                การตรวจสอบงาน
                {verificationRequests.length > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {verificationRequests.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'completed'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                งานที่ตรวจแล้ว
                {completedJobs.length > 0 && (
                  <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {completedJobs.length}
                  </span>
                )}
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Posted Jobs Tab */}
            {activeTab === 'jobs' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">งานที่โพสต์ทั้งหมด</h2>
                  <button
                    onClick={() => setShowJobForm(true)}
                    className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    โพสต์งานใหม่
                  </button>
                </div>

                <div className="space-y-4">
                  {postedJobs.map((job) => (
                    <div
                      key={job.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                {job.title}
                                {jobsRequiringCertificates.includes(job.title) && (
                                  <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    <Award className="h-3 w-3 mr-1" />
                                    มีใบรับรอง
                                  </span>
                                )}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span>{job.type}</span>
                                <span>{job.location}</span>
                                <span>{job.salary}</span>
                              </div>
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                job.status === 'เปิดรับสมัคร'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {job.status}
                            </span>
                          </div>

                          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {job.applicants} ผู้สมัคร
                            </div>
                            <div>โพสต์เมื่อ: {job.postedDate}</div>
                          </div>
                        </div>

                        <div className="flex space-x-2 lg:ml-6">
                          <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Job Verification Tab */}
            {activeTab === 'verification' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  รอการตรวจสอบและออกใบรับรอง
                </h2>

                <div className="space-y-6">
                  {verificationRequests.map((request) => (
                    <div
                      key={request.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center">
                                {request.workerName}
                                {jobsRequiringCertificates.includes(request.jobTitle) && (
                                  <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    <Award className="h-3 w-3 mr-1" />
                                    จะได้ใบรับรอง
                                  </span>
                                )}
                              </h3>
                              <p className="text-gray-600 mb-2">งาน: {request.jobTitle}</p>
                              <p className="text-gray-600 mb-2">บริษัท: {request.companyName}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span>เสร็จเมื่อ: {request.completedDate}</span>
                                <span>ระยะเวลา: {request.workPeriod}</span>
                              </div>
                            </div>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                              {request.status}
                            </span>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">
                              รูปภาพผลงาน ({request.photos.length} รูป)
                            </h4>
                            <div className="flex space-x-2">
                              {request.photos.map((photo, index) => (
                                <div
                                  key={index}
                                  className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500"
                                >
                                  รูปที่ {index + 1}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                            <h4 className="text-sm font-medium text-yellow-800 mb-2">
                              ขั้นตอนการตรวจสอบ:
                            </h4>
                            <ol className="text-sm text-yellow-700 space-y-1">
                              <li>1. ตรวจสอบรูปภาพผลงาน</li>
                              <li>2. ประเมินคุณภาพการทำงาน</li>
                              <li>3. ยืนยันการทำงานเสร็จสิ้น</li>
                              <li>4. {jobsRequiringCertificates.includes(request.jobTitle)
                                ? 'ระบบจะออกใบรับรองให้ผู้ทำงานโดยอัตโนมัติ'
                                : 'บันทึกผลการประเมินเสร็จสิ้น'}</li>
                            </ol>
                          </div>
                        </div>

                        <div className="flex flex-col space-y-2 lg:ml-6 mt-4 lg:mt-0">
                          <button
                            onClick={() => handleConfirmJob(request)}
                            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                          >
                            ยืนยันงานเสร็จ
                          </button>
                          <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200">
                            งานไม่ผ่าน
                          </button>
                          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                            ขอข้อมูลเพิ่ม
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {verificationRequests.length === 0 && (
                  <div className="text-center py-12">
                    <CheckCircle className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      ไม่มีงานรอการตรวจสอบ
                    </h3>
                    <p className="text-gray-600">
                      เมื่อมีคนทำงานเสร็จสิ้น รายการจะปรากฏที่นี่
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Completed Jobs Tab */}
            {activeTab === 'completed' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  งานที่ตรวจสอบเสร็จแล้ว
                </h2>

                <div className="space-y-6">
                  {completedJobs.map((job) => (
                    <div
                      key={job.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                งาน: {job.jobTitle}
                              </h3>
                              <p className="text-gray-600 mb-1">ผู้ปฏิบัติงาน: {job.workerName}</p>
                              <p className="text-gray-600 mb-1">บริษัท: {job.companyName}</p>
                              <p className="text-sm text-gray-600 mb-2">
                                เสร็จสิ้นเมื่อ: {job.completedDate} (ระยะเวลา: {job.workPeriod})
                              </p>
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${
                                    i < job.overallRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                              <span className="ml-2 text-sm text-gray-600">({job.overallRating}/5)</span>
                            </div>
                          </div>

                          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                            <h4 className="text-sm font-medium text-green-800 mb-3">ผลการประเมิน:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                              <div>
                                <span className="text-green-700">• พฤติกรรมในการทำงาน: </span>
                                <span className="font-medium text-green-800">
                                  {getOverallCategoryRating(job.evaluation.workBehavior)}
                                </span>
                              </div>
                              <div>
                                <span className="text-green-700">• คุณภาพของงาน: </span>
                                <span className="font-medium text-green-800">
                                  {getOverallCategoryRating(job.evaluation.workQuality)}
                                </span>
                              </div>
                              <div>
                                <span className="text-green-700">• การสื่อสารและทัศนคติ: </span>
                                <span className="font-medium text-green-800">
                                  {getOverallCategoryRating(job.evaluation.communicationAttitude)}
                                </span>
                              </div>
                              <div>
                                <span className="text-green-700">• นายจ้างยินดีรับเข้าทำงานอีก: </span>
                                <span className="font-medium text-green-800">
                                  {job.evaluation.summary.rehire ? 'ใช่' : 'ไม่ใช่'}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex space-x-3">
                              <button
                                onClick={() => {
                                  setSelectedCompletedJob(job);
                                  setShowEvaluationDetail(true);
                                }}
                                className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200 text-sm"
                              >
                                <FileText className="h-4 w-4 mr-2" />
                                ดูผลประเมินแบบละเอียด
                              </button>
                             
                              {job.requiresCertificate && job.certificateIssued && (
                                <button
                                  onClick={() => generateCertificatePDF(job)}
                                  className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 text-sm"
                                >
                                  <Download className="h-4 w-4 mr-2" />
                                  ดาวน์โหลดใบรับรอง
                                </button>
                              )}
                            </div>
                           
                            <div className="flex items-center space-x-3">
                              {job.requiresCertificate ? (
                                job.certificateIssued ? (
                                  <div className="flex items-center text-sm text-green-600">
                                    <Award className="h-4 w-4 mr-1" />
                                    ออกใบรับรองแล้ว
                                  </div>
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
                  ))}
                </div>

                {completedJobs.length === 0 && (
                  <div className="text-center py-12">
                    <CheckCircle className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      ยังไม่มีงานที่ตรวจสอบเสร็จ
                    </h3>
                    <p className="text-gray-600">
                      เมื่อคุณตรวจสอบและประเมินงานเสร็จแล้ว รายการจะปรากฏที่นี่
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Job Posting Form Modal */}
        {showJobForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">โพสต์งานใหม่</h2>
                <button
                  onClick={() => setShowJobForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ชื่อตำแหน่งงาน
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="เช่น พนักงานทำความสะอาด"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    💡 ตำแหน่งที่มีใบรับรอง: พนักงานทำความสะอาด, แม่บ้าน, พนักงานร้านกาแฟ, ผู้ช่วยช่างซ่อม, ฯลฯ
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ประเภทงาน
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>งานประจำ</option>
                      <option>งานไม่ประจำ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      สถานที่ทำงาน
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="เช่น กรุงเทพมหานคร"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    เงินเดือน/ค่าจ้าง
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="เช่น 12,000 - 15,000 บาท"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    รายละเอียดงาน
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="อธิบายรายละเอียดงาน หน้าที่ความรับผิดชอบ..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ความต้องการ
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="ระบุคุณสมบัติ ทักษะ หรือประสบการณ์ที่ต้องการ..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      อายุ (ปี)
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="เช่น 18-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      จำนวนที่รับ
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="1"
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowJobForm(false)}
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    ยกเลิก
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  >
                    โพสต์งาน
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Evaluation Modal */}
        {showEvaluationModal && selectedRequest && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">ประเมินผลการทำงาน</h2>
                <button
                  onClick={() => setShowEvaluationModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">ข้อมูลงาน</h3>
                <p className="text-blue-800">ผู้ปฏิบัติงาน: {selectedRequest.workerName}</p>
                <p className="text-blue-800">ตำแหน่ง: {selectedRequest.jobTitle}</p>
                <p className="text-blue-800">บริษัท: {selectedRequest.companyName}</p>
                <p className="text-blue-800">เสร็จสิ้นเมื่อ: {selectedRequest.completedDate} (ระยะเวลา: {selectedRequest.workPeriod})</p>
                {jobsRequiringCertificates.includes(selectedRequest.jobTitle) && (
                  <div className="mt-2 flex items-center text-blue-800">
                    <Award className="h-4 w-4 mr-2" />
                    <span className="font-medium">งานนี้จะได้รับใบรับรองการทำงาน</span>
                  </div>
                )}
              </div>

              <form className="space-y-8">
                {/* Work Behavior Section */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    🔹 หมวดที่ 1: พฤติกรรมในการทำงาน
                  </h3>
                  <div className="space-y-4">
                    {[
                      { key: 'punctuality', label: 'มาตรงเวลา' },
                      { key: 'responsibility', label: 'มีความรับผิดชอบ' },
                      { key: 'followRules', label: 'ปฏิบัติตามกฎและคำสั่ง' },
                      { key: 'communication', label: 'แจ้งล่วงหน้าเมื่อมีเหตุขัดข้อง' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between">
                        <label className="text-gray-700 font-medium">{item.label}</label>
                        <div className="flex space-x-4">
                          {[
                            { value: 'excellent', label: 'ดีมาก' },
                            { value: 'good', label: 'ดี' },
                            { value: 'fair', label: 'พอใช้' },
                            { value: 'poor', label: 'ต้องปรับปรุง' }
                          ].map((option) => (
                            <label key={option.value} className="flex items-center">
                              <input
                                type="radio"
                                name={`workBehavior.${item.key}`}
                                value={option.value}
                                checked={evaluationData.workBehavior[item.key as keyof typeof evaluationData.workBehavior] === option.value}
                                onChange={(e) => setEvaluationData({
                                  ...evaluationData,
                                  workBehavior: {
                                    ...evaluationData.workBehavior,
                                    [item.key]: e.target.value
                                  }
                                })}
                                className="mr-2"
                              />
                              <span className="text-sm">{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Work Quality Section */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    🔹 หมวดที่ 2: คุณภาพของงาน
                  </h3>
                  <div className="space-y-4">
                    {[
                      { key: 'completeness', label: 'ส่งงานครบตามที่ตกลง' },
                      { key: 'accuracy', label: 'งานมีความเรียบร้อย ถูกต้อง' },
                      { key: 'problemSolving', label: 'แก้ไขปัญหาเฉพาะหน้าได้' },
                      { key: 'timeliness', label: 'ส่งมอบงานตรงเวลา' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between">
                        <label className="text-gray-700 font-medium">{item.label}</label>
                        <div className="flex space-x-4">
                          {[
                            { value: 'excellent', label: 'ดีมาก' },
                            { value: 'good', label: 'ดี' },
                            { value: 'fair', label: 'พอใช้' },
                            { value: 'poor', label: 'ต้องปรับปรุง' }
                          ].map((option) => (
                            <label key={option.value} className="flex items-center">
                              <input
                                type="radio"
                                name={`workQuality.${item.key}`}
                                value={option.value}
                                checked={evaluationData.workQuality[item.key as keyof typeof evaluationData.workQuality] === option.value}
                                onChange={(e) => setEvaluationData({
                                  ...evaluationData,
                                  workQuality: {
                                    ...evaluationData.workQuality,
                                    [item.key]: e.target.value
                                  }
                                })}
                                className="mr-2"
                              />
                              <span className="text-sm">{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Communication & Attitude Section */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    🔹 หมวดที่ 3: การสื่อสารและทัศนคติ
                  </h3>
                  <div className="space-y-4">
                    {[
                      { key: 'politeness', label: 'พูดจาสุภาพเหมาะสม' },
                      { key: 'employerCommunication', label: 'สื่อสารกับนายจ้างได้ดี' },
                      { key: 'teamwork', label: 'ร่วมมือกับผู้อื่นได้ดี' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between">
                        <label className="text-gray-700 font-medium">{item.label}</label>
                        <div className="flex space-x-4">
                          {[
                            { value: 'excellent', label: 'ดีมาก' },
                            { value: 'good', label: 'ดี' },
                            { value: 'fair', label: 'พอใช้' },
                            { value: 'poor', label: 'ต้องปรับปรุง' }
                          ].map((option) => (
                            <label key={option.value} className="flex items-center">
                              <input
                                type="radio"
                                name={`communicationAttitude.${item.key}`}
                                value={option.value}
                                checked={evaluationData.communicationAttitude[item.key as keyof typeof evaluationData.communicationAttitude] === option.value}
                                onChange={(e) => setEvaluationData({
                                  ...evaluationData,
                                  communicationAttitude: {
                                    ...evaluationData.communicationAttitude,
                                    [item.key]: e.target.value
                                  }
                                })}
                                className="mr-2"
                              />
                              <span className="text-sm">{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary Section */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    🔹 หมวดสรุปเบื้องต้น
                  </h3>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700 font-medium">นายจ้างยินดีรับเข้าทำงานอีกในอนาคต</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="summary.rehire"
                          value="true"
                          checked={evaluationData.summary.rehire === true}
                          onChange={(e) => setEvaluationData({
                            ...evaluationData,
                            summary: {
                              ...evaluationData.summary,
                              rehire: e.target.value === 'true'
                            }
                          })}
                          className="mr-2"
                        />
                        <span className="text-sm">ใช่</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="summary.rehire"
                          value="false"
                          checked={evaluationData.summary.rehire === false}
                          onChange={(e) => setEvaluationData({
                            ...evaluationData,
                            summary: {
                              ...evaluationData.summary,
                              rehire: e.target.value === 'true'
                            }
                          })}
                          className="mr-2"
                        />
                        <span className="text-sm">ไม่ใช่</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Comments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ความคิดเห็นเพิ่มเติม (ถ้ามี)
                  </label>
                  <textarea
                    rows={3}
                    value={evaluationData.additionalComments}
                    onChange={(e) => setEvaluationData({
                      ...evaluationData,
                      additionalComments: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="ระบุความคิดเห็นหรือข้อเสนอแนะเพิ่มเติม..."
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowEvaluationModal(false)}
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    ยกเลิก
                  </button>
                  <button
                    type="button"
                    onClick={handleEvaluationSubmit}
                    className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                  >
                    ยืนยันการประเมิน
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Evaluation Detail Modal */}
        {showEvaluationDetail && selectedCompletedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">ผลการประเมินแบบละเอียด</h2>
                <button
                  onClick={() => setShowEvaluationDetail(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">ข้อมูลงาน</h3>
                <p className="text-blue-800">งาน: {selectedCompletedJob.jobTitle}</p>
                <p className="text-blue-800">ผู้ปฏิบัติงาน: {selectedCompletedJob.workerName}</p>
                <p className="text-blue-800">บริษัท: {selectedCompletedJob.companyName}</p>
                <p className="text-blue-800">เสร็จสิ้นเมื่อ: {selectedCompletedJob.completedDate} (ระยะเวลา: {selectedCompletedJob.workPeriod})</p>
                <div className="flex items-center mt-2">
                  <span className="text-blue-800 mr-2">คะแนนรวม:</span>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < selectedCompletedJob.overallRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-blue-800">({selectedCompletedJob.overallRating}/5)</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Work Behavior Results */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    🔹 หมวดที่ 1: พฤติกรรมในการทำงาน
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>มาตรงเวลา</span>
                      <span className="font-medium">{getThaiRatingText(selectedCompletedJob.evaluation.workBehavior.punctuality)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>มีความรับผิดชอบ</span>
                      <span className="font-medium">{getThaiRatingText(selectedCompletedJob.evaluation.workBehavior.responsibility)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ปฏิบัติตามกฎและคำสั่ง</span>
                      <span className="font-medium">{getThaiRatingText(selectedCompletedJob.evaluation.workBehavior.followRules)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>แจ้งล่วงหน้าเมื่อมีเหตุขัดข้อง</span>
                      <span className="font-medium">{getThaiRatingText(selectedCompletedJob.evaluation.workBehavior.communication)}</span>
                    </div>
                  </div>
                </div>

                {/* Work Quality Results */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    🔹 หมวดที่ 2: คุณภาพของงาน
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>ส่งงานครบตามที่ตกลง</span>
                      <span className="font-medium">{getThaiRatingText(selectedCompletedJob.evaluation.workQuality.completeness)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>งานมีความเรียบร้อย ถูกต้อง</span>
                      <span className="font-medium">{getThaiRatingText(selectedCompletedJob.evaluation.workQuality.accuracy)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>แก้ไขปัญหาเฉพาะหน้าได้</span>
                      <span className="font-medium">{getThaiRatingText(selectedCompletedJob.evaluation.workQuality.problemSolving)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ส่งมอบงานตรงเวลา</span>
                      <span className="font-medium">{getThaiRatingText(selectedCompletedJob.evaluation.workQuality.timeliness)}</span>
                    </div>
                  </div>
                </div>

                {/* Communication & Attitude Results */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    🔹 หมวดที่ 3: การสื่อสารและทัศนคติ
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>พูดจาสุภาพเหมาะสม</span>
                      <span className="font-medium">{getThaiRatingText(selectedCompletedJob.evaluation.communicationAttitude.politeness)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>สื่อสารกับนายจ้างได้ดี</span>
                      <span className="font-medium">{getThaiRatingText(selectedCompletedJob.evaluation.communicationAttitude.employerCommunication)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ร่วมมือกับผู้อื่นได้ดี</span>
                      <span className="font-medium">{getThaiRatingText(selectedCompletedJob.evaluation.communicationAttitude.teamwork)}</span>
                    </div>
                  </div>
                </div>

                {/* Summary Results */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    🔹 หมวดสรุปเบื้องต้น
                  </h3>
                  <div className="flex justify-between">
                    <span>นายจ้างยินดีรับเข้าทำงานอีกในอนาคต</span>
                    <span className="font-medium">{selectedCompletedJob.evaluation.summary.rehire ? 'ใช่' : 'ไม่ใช่'}</span>
                  </div>
                </div>

                {/* Additional Comments */}
                {selectedCompletedJob.evaluation.additionalComments && (
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">ความคิดเห็นเพิ่มเติม</h3>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded-lg italic">
                      "{selectedCompletedJob.evaluation.additionalComments}"
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-center space-x-4">
                {selectedCompletedJob.requiresCertificate && selectedCompletedJob.certificateIssued && (
                  <button
                    onClick={() => generateCertificatePDF(selectedCompletedJob)}
                    className="flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    ดาวน์โหลดใบรับรอง
                  </button>
                )}
                <button
                  onClick={() => setShowEvaluationDetail(false)}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  ปิด
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerPage;
