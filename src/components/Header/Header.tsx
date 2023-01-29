import './Header.css';
import logo from '../../assets/images/logo.png';
import filterImage from '../../assets/images/filter.svg';

export const Header = () => {

  return (
    <header className="header">
      <div className="header-info">
        <img src={logo}
          alt="logo"
          className="header__logo"/>
        <h1>Task Tracker</h1>
      </div>

      <button className="header__filter-button">
        <img src={filterImage}
          alt="filter"
          className="header__filter-icon" />
      </button>
    </header>
  );
};
