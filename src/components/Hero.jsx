import wakyeImage from '../Assets/Images/waakye.jpg';
import egusiImage from '../Assets/Images/egusi.jpg';
import '../Styles/Hero.css';

const menuItems = [
  {
    name: "Egusi Soup",
    description: "Rich Nigerian soup made with ground melon seeds, leafy vegetables, and your choice of meat or fish, served with pounded yam",
    price: "$18",
    image: egusiImage
  },
  {
    name: "Waakye",
    description: "Ghanaian dish of rice and beans cooked with millet leaves, served with spicy pepper sauce, shito, and grilled tilapia",
    price: "$15",
    image: wakyeImage
  }
];

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="overlay"></div>
      </div>
      
      <div className="content">
        <div className="header">
          <h1>African Delights</h1>
          <p>Experience authentic African cuisine in the heart of the city</p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero;
