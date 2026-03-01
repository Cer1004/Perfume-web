import '../App.css';
import HomeKuva from '../components/HomeKuva.jpg';

function Home() {
  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <div className="home-flex-container">
        
        <div className="home-text">
          <h1>Smelling good for every occasion</h1>
          <p>Welcome to the guide to perfumes, where beginners can learn everything they need to know to always smell great.</p>
          <p>Choosing the right perfume can sometimes be overwhelming. Did I choose the right one? Why doesn’t it last long? Which perfume should I wear for different occasions or seasons?</p>
          <p>Here, we will cover all of these questions and more.</p>
          <p>If you have any further questions, please feel free to contact us.</p>
        </div>

    
        <div className="home-image-container">
          <img src={HomeKuva} alt="Perfume" className="home-right-image" />
        </div>
      </div>
      <div className="home-rectangle"></div>
      <div className="home-contact">
        <h2>We have online guides and you can contact us by: </h2>
        <p>◦ Email: find.your.sent@gmail.com </p>
        <p>◦ Phone number: +235798010802   We respond on mon-frid10:00-15:00 and sat 13:00-17:00 </p>
        <h2>We are also on social media: </h2>
        <p>◦ Instagram: “fake linkki” find_your_sent.ig </p>
        <p>◦ Tiktok: “fake linkki”  find_your_sent.tt  </p>
      </div>
    </div>
    
  );
}

export default Home;