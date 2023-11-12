import Navbar from './Navbar';

const Header = () => {
    const style = {
      backgroundColor: '#9356CA',
      // Add other styles as needed
  };
  return (
    <header style = {style}>
      <div className="nav-area">
        <a href="/" className="logo">
          InfoStream
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;