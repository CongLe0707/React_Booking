import React from 'react';
import '../assets/styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>Giới thiệu về chúng tôi</h1>
      <p>
        Chào mừng bạn đến với <strong>MyApp</strong> – nền tảng giúp bạn theo dõi thời tiết, tin tức và nhiều tiện ích khác!
      </p>
      <section className="about-section">
        <h2>Sứ mệnh của chúng tôi</h2>
        <p>
          Chúng tôi mong muốn mang đến trải nghiệm người dùng thân thiện, chính xác và nhanh chóng.
        </p>
      </section>
    </div>
  );
};

export default About;
