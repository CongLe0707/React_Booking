import '../assets/styles/Content.css'; // Import CSS cho styles
import hinh1 from '../assets/images/anh1.jpg';
import hinh2 from '../assets/images/anh2.jpg';
import hinh3 from '../assets/images/anh3.jpg';

const Content = () => {
  return (
    <section className="content-section">
      <div className="content-container">
        <div className="content-item">
          <div className="content-arrow"></div>
          <img src={hinh1} alt="Feature 1" className="content-img" />
          <h3 className="content-title">Feature 1</h3>
          <p className="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="content-item">
          <div className="content-arrow"></div>
          <img src={hinh2} alt="Feature 2" className="content-img" />
          <h3 className="content-title">Feature 2</h3>
          <p className="content-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div>
        <div className="content-item">
          <div className="content-arrow"></div>
          <img src={hinh3} alt="Feature 3" className="content-img" />
          <h3 className="content-title">Feature 3</h3>
          <p className="content-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
