import React, { useState } from 'react';
import { Search, Filter, MapPin, Clock, DollarSign, Users, Building, Calendar } from 'lucide-react';

const JobSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
    ageRange: '',
    salaryRange: '',
  });

  const jobs = [
    {
      id: 1,
      title: 'พนักงานทำความสะอาด',
      company: 'บริษัท สะอาดใส จำกัด',
      location: 'โคกกรวด',
      salary: '12,000 - 15,000 บาท',
      type: 'งานประจำ',
      ageRange: '18-50 ปี',
      posted: '2 วันที่แล้ว',
      description: 'รับสมัครพนักงานทำความสะอาดสำนักงาน มีประสบการณ์หรือไม่มีก็ได้ ฝึกให้',
      requirements: ['ขยัน อดทน', 'มีความรับผิดชอบ', 'สามารถทำงานเป็นทีมได้'],
      verified: true,
    },
    {
      id: 2,
      title: 'คนส่งอาหาร',
      company: 'ร้านอาหารอร่อยมาก',
      location: 'สุรนารี',
      salary: '400 - 600 บาท/วัน',
      type: 'งานไม่ประจำ',
      ageRange: '18-40 ปี',
      posted: '1 วันที่แล้ว',
      description: 'รับสมัครคนส่งอาหาร สามารถทำงานแบบยืดหยุ่น มีรถมอเตอร์ไซค์เป็นของตัวเอง',
      requirements: ['มีรถมอเตอร์ไซค์', 'มีใบขับขี่', 'รู้จักเส้นทางในพื้นที่'],
      verified: true,
    },
    {
      id: 3,
      title: 'แม่บ้าน',
      company: 'บ้านคุณสมศรี',
      location: 'โพธิ๋กลาง',
      salary: '15,000 - 18,000 บาท',
      type: 'งานประจำ',
      ageRange: '25-55 ปี',
      posted: '3 วันที่แล้ว',
      description: 'รับสมัครแม่บ้านดูแลบ้านเดี่ยว ทำความสะอาด ซักรีด ทำอาหารง่ายๆ',
      requirements: ['มีประสบการณ์', 'ทำอาหารได้', 'ซื่อสัตย์ น่าเชื่อถือ'],
      verified: true,
    },
    {
      id: 4,
      title: 'ผู้ช่วยช่างซ่อม',
      company: 'บริษัท ซ่อมเก่ง จำกัด',
      location: 'สุรนารี',
      salary: '350 - 500 บาท/วัน',
      type: 'งานไม่ประจำ',
      ageRange: '20-45 ปี',
      posted: '4 วันที่แล้ว',
      description: 'รับสมัครผู้ช่วยช่างซ่อมเครื่องใช้ไฟฟ้า ไม่จำเป็นต้องมีประสบการณ์ ฝึกให้',
      requirements: ['กระตือรือร้น', 'เรียนรู้ได้เร็ว', 'ไม่กลัวความสูง'],
      verified: false,
    },
    {
      id: 5,
      title: 'พนักงานร้านกาแฟ',
      company: 'Coffee Corner',
      location: 'โคกกรวด',
      salary: '13,000 - 16,000 บาท',
      type: 'งานประจำ',
      ageRange: '18-35 ปี',
      posted: '5 วันที่แล้ว',
      description: 'รับสมัครพนักงานร้านกาแฟ ยิ้มแย้ม แจ่มใส ชอบพูดคุยกับลูกค้า',
      requirements: ['บุคลิกดี', 'รักการบริการ', 'เรียนรู้ได้เร็ว'],
      verified: true,
    },
    {
      id: 6,
      title: 'คนขายของ',
      company: 'ตลาดนัด 80 พรรษา',
      location: 'ปรุใหญ่',
      salary: '300 - 800 บาท/วัน',
      type: 'งานไม่ประจำ',
      ageRange: '18-60 ปี',
      posted: '1 สัปดาห์ที่แล้ว',
      description: 'รับสมัครคนขายของในตลาดนัด วันเสาร์-อาทิตย์ หรือวันหยุดนักขัตฤกษ์',
      requirements: ['พูดเก่ง', 'ขายของเป็น', 'อดทนต่อแดด ฝน'],
      verified: true,
    },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !filters.jobType || job.type === filters.jobType;
    const matchesLocation = !filters.location || job.location.includes(filters.location);
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ค้นหางานที่เหมาะกับคุณ
          </h1>
          <p className="text-xl text-gray-600">
            งานใหม่ทุกวัน รอคุณมาสมัคร
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="ค้นหาตำแหน่งงานหรือบริษัท..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Job Type Filter */}
            <select
              value={filters.jobType}
              onChange={(e) => setFilters({...filters, jobType: e.target.value})}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">ประเภทงานทั้งหมด</option>
              <option value="งานประจำ">งานประจำ</option>
              <option value="งานไม่ประจำ">งานไม่ประจำ</option>
            </select>

            {/* Location Filter */}
            <select
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">ทุกพื้นที่</option>
              <option value="นครราชสีมา">นครราชสีมา</option>
              <option value="โคกกรวด">โคกกรวด</option>
              <option value="สุรนารี">สุรนารี</option>
              <option value="ปรุใหญ่">ปรุใหญ่</option>
              <option value="โพธิ์กลาง">โพธิ์กลาง</option>
              <option value="หนองจะบก">หนองจะบก</option>
              <option value="ไชยมงคล">ไชยมงคล</option>


            </select>

            {/* Search Button */}
            <button className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium flex items-center justify-center">
              <Filter className="mr-2 h-4 w-4" />
              ค้นหา
            </button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            พบ <span className="font-semibold text-primary-600">{filteredJobs.length}</span> งาน
            {searchTerm && (
              <span> สำหรับ "<span className="font-semibold">{searchTerm}</span>"</span>
            )}
          </p>
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
            <option>เรียงตามวันที่โพสต์</option>
            <option>เรียงตามเงินเดือน</option>
            <option>เรียงตามความเกี่ยวข้อง</option>
          </select>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {job.title}
                        {job.verified && (
                          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            ✓ ตรวจสอบแล้ว
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building className="h-4 w-4 mr-1" />
                        <span className="text-sm">{job.company}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      job.type === 'งานประจำ' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {job.type}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-gray-400" />
                      อายุ {job.ageRange}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      {job.posted}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">ความต้องการ:</h4>
                    <ul className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <li
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 lg:ml-6 mt-4 lg:mt-0">
                  <button className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium">
                    สมัครงาน
                  </button>
                  <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
                    บันทึก
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors duration-200">
              ก่อนหน้า
            </button>
            <button className="px-3 py-2 bg-primary-500 text-white rounded-lg">1</button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              2
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              3
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors duration-200">
              ถัดไป
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default JobSearchPage;