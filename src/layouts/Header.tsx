// src/layouts/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">MyLogo</Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Trang chủ</Link></li>
          <li><Link to="/gioi-thieu" className="nav-link">Giới thiệu</Link></li>
          <li><Link to="/dich-vu" className="nav-link">Dịch vụ</Link></li>
          <li><Link to="/lien-he" className="nav-link">Liên hệ</Link></li>
          <li><Link to="/dang-nhap" className="nav-link">Đăng nhập</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
