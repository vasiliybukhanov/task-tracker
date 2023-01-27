import './Header.css';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo"/>
      <h1 className="header__title">Task Tracker</h1>      
    </header>
  );
};
