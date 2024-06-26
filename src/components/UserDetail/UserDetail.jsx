import React, { useEffect, useState } from "react";
import "../css/fixed.css";
import "./detail.css";
import { useGetDetailUser } from "../../hook/useGetDetailUser";
import { NavLink, useNavigate } from "react-router-dom";
import { PATH } from "../../constant/config";
import { Modal, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoursesThunk } from "../../store/Courses/thunkDelete";

export const UserDetail = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const { data: userInfo } = useGetDetailUser();
  const { userLogin } = useSelector((state) => state.quanLyNguoiDung);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const userCourses = userInfo?.chiTietKhoaHocGhiDanh || [];

  const handleDeleteClick = (course) => {
    setSelectedCourse(course);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    const payload = {
      maKhoaHoc: selectedCourse.maKhoaHoc,
      taiKhoan: userLogin.payload.taiKhoan,
    };

    dispatch(deleteCoursesThunk(payload));
    navigate(PATH.home);
  };

  return (
    <div className="maTop">
      <div className="container mx-auto mt-10 p-5">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
            Thông tin cá nhân
          </h2>
          <div className="space-y-4">
            <p className="text-lg">
              <strong className="font-semibold">Tài khoản:</strong>{" "}
              {userInfo?.taiKhoan}
            </p>
            <p className="text-lg">
              {" "}
              <strong className="font-semibold">Họ tên:</strong>{" "}
              {userInfo?.hoTen}
            </p>
            <p className="text-lg">
              {" "}
              <strong className="font-semibold">Số điện thoại:</strong>{" "}
              {userInfo?.soDT}
            </p>
            <p className="text-lg flex">
              {" "}
              <strong className="font-semibold me-1">Loại người dùng:</strong>{" "}
              {userInfo?.maLoaiNguoiDung}
              {userInfo?.maLoaiNguoiDung === "GV" && (
                <div className="ms-2">
                  <span>-</span>
                  <NavLink to={PATH.homeadmin} className="ml-2 bg-[#032343] hover:bg-[#224363] text-white py-2 px-5 rounded font-bold">
                    Admin
                  </NavLink>
                </div>
              )}
            </p>
          </div>
        </div>
      </div>

      <button
        className="btn bg-orange-500 hover:bg-orange-700 lg:ms-[205px] ms-[20px]"
        onClick={() => navigate(PATH.edituser)}
      >
        Chỉnh sửa thông tin cá nhân
      </button>

      <div className="container mx-auto p-5">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h3 className="text-3xl font-semibold mb-4 border-b pb-2">
            Khóa học đã ghi danh
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6">
            {userCourses.slice(startIndex, endIndex).map((course) => (
              <div
                key={course.maKhoaHoc}
                className="bg-white rounded-lg shadow-md"
              >
                <img
                  src={course.hinhAnh}
                  alt={course.tenKhoaHoc}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-4">
                    {course.tenKhoaHoc}
                  </h4>
                  <p className="text-gray-700 text-lg mb-4 h-16 overflow-hidden">
                    {" "}
                    {/* Đặt chiều cao cố định và ẩn tràn */}
                    {course.moTa}
                  </p>
                  <p className="text-blue-700 text-lg mb-4">
                    <strong className="text-gray-700">Lượt xem:</strong>{" "}
                    {course.luotXem}
                  </p>
                  <p className="text-gray-700 text-lg mb-5">
                    <strong>Ngày tạo:</strong>{" "}
                    {new Date(course.ngayTao).toLocaleDateString()}
                  </p>
                  <div className="flex justify-between">
                    <p className="text-red-500 text-lg">
                      <strong className="text-gray-700">Đánh giá:</strong>{" "}
                      {course.danhGia}
                    </p>
                    <button
                      className="btn-detail"
                      onClick={() => handleDeleteClick(course)}
                    >
                      Hủy khóa học
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <NavLink to={PATH.listcourses}>
              <div className="flex justify-center items-center border-[5px] border-gray-200 rounded-lg p-2 h-[200px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-gray-300 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11 9V6a1 1 0 00-2 0v3H6a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 000-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {/* phan trang  */}
      <div className="mt-8 flex justify-center">
        <Pagination
          current={currentPage}
          total={userCourses ? userCourses.length : 0}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
      <Modal
        title="Xác nhận hủy khóa học"
        open={showConfirmation}
        onCancel={() => setShowConfirmation(false)}
        footer={[
          <button
            key="cancel"
            className="btn me-3 w-[90px]"
            onClick={() => setShowConfirmation(false)}
          >
            Hủy
          </button>,
          <button key="confirm" className="btn" onClick={handleConfirm}>
            Xác nhận
          </button>,
        ]}
      >
        <p>Bạn chắc chắn muốn xóa khóa học này?</p>
      </Modal>
    </div>
  );
};

export default UserDetail;
//helloo
