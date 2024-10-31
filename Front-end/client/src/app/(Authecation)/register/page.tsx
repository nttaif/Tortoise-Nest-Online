'use client';
import { sendRequest } from '@/utils/api';
import { Input, message, Modal, notification, Button, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [_idUser, set_idUser] = useState('');
  const [loading, setLoading] = useState(false); // Loading state cho nút đăng ký
  const [verifying, setVerifying] = useState(false); // Loading cho xác thực mã

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password.length >= 6;
    return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars && isValidLength;
  };

  const onFinish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      notification.error({
        message: 'Mật khẩu không hợp lệ',
        description:
          'Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ hoa, số và ký tự đặc biệt.',
      });
      return;
    }

    if (password !== rePassword) {
      notification.error({
        message: 'Mật khẩu không khớp',
        description: 'Mật khẩu và nhập lại mật khẩu không khớp.',
      });
      return;
    }

    setLoading(true); // Bắt đầu loading
    const res = await sendRequest<IBackendRes<any>>({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`,
      body: { email, password, name },
    });

    setLoading(false); // Kết thúc loading
    if (res?.data) {
      set_idUser(res.data._id);
      setIsModalOpen(true);
    } else {
      notification.error({
        message: 'Đăng ký không thành công',
        description: res?.message,
      });
    }
  };

  const handleVerifyCode = async () => {
    setVerifying(true); // Bắt đầu loading xác thực
    const verifyRes = await sendRequest<IBackendRes<any>>({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/verify`,
      body: { _id: _idUser, verificationCode },
    });

    setVerifying(false); // Kết thúc loading xác thực
    if (verifyRes?.data) {
      notification.success({
        message: 'Xác thực thành công',
        description: 'Tài khoản của bạn đã được xác thực.',
      });
      setIsModalOpen(false);
      router.push('/login');
    } else {
      notification.error({
        message: 'Xác thực không thành công',
        description: verifyRes?.message,
      });
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Create an Account
        </h2>
        <form className="space-y-5" onSubmit={onFinish}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Họ và tên
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Nhập tên của bạn"
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Địa chỉ email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Nhập email của bạn"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mật khẩu
            </label>
            <Input.Password
              id="password"
              name="password"
              placeholder="Nhập mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <label htmlFor="rePassword" className="block text-sm font-medium text-gray-700">
              Nhập lại mật khẩu
            </label>
            <Input.Password
              id="rePassword"
              name="rePassword"
              placeholder="Nhập lại mật khẩu"
              onChange={(e) => setRePassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={loading} // Thêm loading spinner
            >
              Sign up
            </Button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="font-semibold text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </div>

      <Modal
        title="Xác thực tài khoản"
        open={isModalOpen}
        onOk={handleVerifyCode}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={verifying} // Thêm loading spinner cho xác thực
            onClick={handleVerifyCode}
          >
            Verify
          </Button>,
        ]}
      >
        <p>Nhập mã xác thực được gửi đến email của bạn</p>
        <Input
          placeholder="Nhập mã xác thực"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="mt-2"
        />
      </Modal>
    </div>
  );
}
