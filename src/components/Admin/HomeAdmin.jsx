import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Statistic, Typography } from 'antd';
import { BookOutlined, UserOutlined, EyeOutlined, CrownOutlined } from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import { TOKENCYBERSOFT } from '../../constant/constant';
import 'animate.css/animate.min.css';
const { Title } = Typography;

export const HomeAdmin = () => {
  const [courseData, setCourseData] = useState([]);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [mostSelectedCategory, setMostSelectedCategory] = useState('');
  const [topCourses, setTopCourses] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01',
          {
            headers: {
              TokenCybersoft: TOKENCYBERSOFT
            }
          }
        );
        const courses = response.data;
        setCourseData(courses);

        const totalCourses = courses.length;
        setTotalCourses(totalCourses);

        const totalStudents = courses.reduce((total, course) => total + course.luotXem, 0);
        setTotalStudents(totalStudents);

        const counts = courses.reduce((acc, course) => {
          const category = course.danhMucKhoaHoc ? course.danhMucKhoaHoc.maDanhMucKhoahoc : 'Unknown';
          acc[category] = acc[category] ? acc[category] + 1 : 1;
          return acc;
        }, {});
        setCategoryCounts(counts);

        const maxCategory = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
        setMostSelectedCategory(maxCategory);

        courses.sort((a, b) => b.luotXem - a.luotXem);

        const topCourses = courses.slice(0, 3);
        setTopCourses(topCourses);

      } catch (error) {
        console.error(error);
      }
    };

    fetchCourseData();
  }, []);

  return (
    <div className="p-6">
      <Row justify="center" className="mb-6">
        <Title level={2} className="animate__animated animate__fadeInDown">Xin chào, Admin</Title>
      </Row>
      <Row gutter={16} className="mb-6">
        <Col xs={24} sm={12} md={8}>
          <Card className="animate__animated animate__fadeInLeft bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <Statistic
              title="Tổng khoá học"
              value={totalCourses}
              prefix={<BookOutlined className="text-blue-500" />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="animate__animated animate__fadeIn bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <Statistic
              title="Số lượng học viên"
              value={totalStudents}
              prefix={<UserOutlined className="text-green-500" />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="animate__animated animate__fadeInRight bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <Statistic
              title="Tổng lượt xem"
              value={courseData.reduce((total, course) => total + course.luotXem, 0)}
              prefix={<EyeOutlined className="text-yellow-500" />}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} className="mb-6">
        <Col xs={24} md={12}>
          <Card title={`Biểu đồ danh mục phổ biến - ${mostSelectedCategory}`} className="animate__animated animate__fadeInUp bg-white p-4 rounded-lg shadow-md">
            <div className="overflow-x-auto">
              <BarChart
                width={600}
                height={400}
                data={Object.keys(categoryCounts).map(category => ({
                  name: category,
                  count: categoryCounts[category]
                }))}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" name="Số lượng khoá học" />
              </BarChart>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Top 3 khoá học nhiều học viên nhất" className="animate__animated animate__fadeInUp bg-gray-100 p-4 rounded-lg shadow-md">
            {topCourses.map((course, index) => (
              <Card
                key={course.maKhoaHoc}
                className="mb-4 p-4 border rounded-md bg-white hover:bg-gray-50 transition-all duration-300"
              >
                <Row gutter={16} align="middle">
                  <Col span={6} className="flex justify-center items-center pr-4">
                    {index === 0 && <CrownOutlined className="text-3xl text-yellow-500 mb-2" />}
                    <img
                      src={course.hinhAnh}
                      alt={course.tenKhoaHoc}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  </Col>
                  <Col span={18} style={{ paddingLeft: '16px', paddingRight: '8px' }}>
                    <Typography.Title level={4} className="mb-2 text-gray-700">{course.tenKhoaHoc}</Typography.Title>
                    <Statistic title="Số lượng học viên" value={course.luotXem} valueStyle={{ color: '#1890ff' }} />
                  </Col>
                </Row>
              </Card>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
