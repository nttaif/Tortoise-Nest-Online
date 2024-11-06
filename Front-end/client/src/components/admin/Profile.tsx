import { User } from '@/types/next-auth'
import React from 'react'
interface IProp{
  user?: User
}
export default function Profile(props:IProp) {
  const {user} = props
  return (
    <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Thông tin chung</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
        {/* Row 1 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Ngày đăng ký</span>
          <span className="text-lg text-gray-800">{user?.createdAt ?? 'Chưa có dữ liệu'}</span>
        </div>
        {/* Row 2 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Họ và tên</span>
          <span className="text-lg text-gray-800">{user?.name ?? 'Chưa có dữ liệu'}</span>
        </div>
        
        {/* Row 4 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Chức vụ</span>
          <span className="text-lg text-gray-800">{user?.role ?? 'Chưa có dữ liệu'}</span>
        </div>
        {/* Row 5 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Email</span>
          <span className="text-lg text-gray-800">{user?.email ?? 'Chưa có dữ liệu' }</span>
        </div>
        {/* Row 6 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Số điện thoại</span>
          <span className="text-lg text-gray-800">{user?.phoneNumber ?? 'Chưa có dữ liệu'}</span>
        </div>
        {/* Row 7 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Trạng thái</span>
          <span className="text-lg text-gray-800">{user?.isActivity ? (<div>Đã kích hoạt</div>):(<div>Chưa kích hoạt</div>)}</span>
        </div>
        {/* Row 7 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Loại tài khoản</span>
          <span className="text-lg text-gray-800">{user?.accountType}</span>
        </div>
        {/* Row 7 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Học vị</span>
          <span className="text-lg text-gray-800">{user?.inFoLecturer?.academic ?? 'Chưa có dữ liệu'}</span>
        </div>
        {/* Row 7 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Chuyên môn</span>
          <span className="text-lg text-gray-800">{user?.inFoLecturer?.specialization ?? 'Chưa có dữ liệu'}</span>
        </div>
        {/* Row 7 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Đánh giá</span>
          <span className="text-lg text-gray-800">{user?.inFoLecturer?.rating  ?? 'Chưa có dữ liệu'}</span>
        </div>
      </div>
      {/* Biography */}
      <div className="mt-10">
        <h3 className="font-semibold text-lg mb-4 text-gray-600">Mô tả</h3>
        <p className="leading-relaxed text-gray-800 text-lg">
          {user?.biography ?? 'Chưa có dữ liệu'}
        </p>
      </div>
    </div>
  )
}
