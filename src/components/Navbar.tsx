import { menuItems } from "./MenuItems";
import MenuItems from './MenuItems';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarView = () => {
    return (
       <nav>
         <ul className="menus">
             {menuItems.map((menu,index) => {
               return <MenuItems items={menu} key={index} />
             })}
        </ul>
       </nav>
    );
  };
  
  export default NavbarView;