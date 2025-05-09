import React, { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import '../assets/styles/AuthForm.css';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        {/* Tabs */}
        <div className="auth-tabs">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Đăng nhập
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Đăng ký
          </button>
        </div>

        {isLogin ? (
          <form className="auth-form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Mật khẩu" required />
            <button type="submit" className="btn-submit">Đăng nhập</button>
          </form>
        ) : (
          <form className="auth-form">
            <input type="text" placeholder="Họ và tên" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Mật khẩu" required />
            <input type="password" placeholder="Xác nhận mật khẩu" required />
            <button type="submit" className="btn-submit">Đăng ký</button>
          </form>
        )}

        <div className="divider"><span>HOẶC</span></div>

        <div className="social-login">
        <button className="btn-social btn-fb">
            {FaFacebookF({})} Đăng nhập với Facebook
        </button>
          <button className="btn-social btn-gg">
          {FcGoogle({})} Đăng nhập với Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
