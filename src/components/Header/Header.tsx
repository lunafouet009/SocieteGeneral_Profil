import './Header.scss';
import { Menu, Power } from 'react-feather';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <div className="header">
      <Menu className="header_burgerMenu" />
      <img className="header_logo" src={logo} alt="logo" />
      <Power className="header_logout" />
    </div>
  );
}

export default Header;
