import React from 'react';
import { flightTickets } from '../data/flightData';
import '../assets/styles/FlightTickets.css'; 
const FlightTickets: React.FC = () => {
  return (
    <section className="flight-tickets-section">
      <h2 className="section-title">Các Loại Vé Máy Bay</h2>
      <div className="ticket-container">
        {flightTickets.map((ticket) => (
          <div className="ticket-card" key={ticket.id}>
            <img src={ticket.imageUrl} alt={ticket.title} className="ticket-image" />
            <div className="ticket-header">
              <h3 className="ticket-title">{ticket.title}</h3>
              <p className="ticket-price">{ticket.price}</p>
            </div>
            <div className="ticket-details">
              <p><strong>Khởi hành:</strong> {ticket.departure}</p>
              <p><strong>Điểm đến:</strong> {ticket.destination}</p>
              <p><strong>Ngày khởi hành:</strong> {ticket.departureDate}</p>
              <p>{ticket.description}</p>
            </div>
            <div className="ticket-buttons">
              <button className="btn-details">Xem Chi Tiết</button>
              <button className="btn-book">Đặt Vé</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlightTickets;
