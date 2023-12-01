import NavbarView from './Navbar';
import {auth} from '../../server/firebase-config'

const Header = () => {
    const style = {
      backgroundColor: '#9356CA',
      // Add other styles as needed
  };
  return (
    <header style = {style}>
      <div className="navbar">
        <a href="/" className="logo">
          InfoStream
        </a>
        <NavbarView />
        <p className='nav-item'>{auth.currentUser?.displayName}</p>
      </div>
    </header>
  );
};

export default Header;