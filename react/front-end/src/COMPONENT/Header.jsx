import img from "../../public/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <img className="logo" src={img} alt="logo" />
        <div>
          <h1>Travel Tingle</h1>
          <h4>See the world with your own two eyes</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
