import React from 'react';
import '../assets/styles/Services.css';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

const services: ServiceItem[] = [
  {
    title: 'Đặt vé máy bay trong nước',
    description: 'Chúng tôi cung cấp dịch vụ đặt vé máy bay cho các chuyến bay nội địa với giá ưu đãi và tiện ích nhanh chóng.',
    icon: '✈️',
  },
  {
    title: 'Đặt vé máy bay quốc tế',
    description: 'Dịch vụ đặt vé máy bay quốc tế tới mọi điểm đến trên thế giới với giá cả hợp lý và dịch vụ hỗ trợ tận tâm.',
    icon: '🌍',
  },
  {
    title: 'Hỗ trợ đổi vé và hoàn vé',
    description: 'Cung cấp dịch vụ hỗ trợ đổi vé hoặc hoàn vé nhanh chóng và dễ dàng, đảm bảo sự linh hoạt cho hành khách.',
    icon: '🔄',
  },
  {
    title: 'Tư vấn lịch trình bay',
    description: 'Chúng tôi cung cấp tư vấn miễn phí về các lựa chọn lịch trình bay tối ưu và các phương án phù hợp với nhu cầu của bạn.',
    icon: '🗺️',
  },
];

const Services: React.FC = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Dịch Vụ Đặt Vé Máy Bay</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
