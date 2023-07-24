import { Link } from "react-router-dom";

export const Title = () => (
  <div className="header__title">
    <a href="/">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        alt="logo"
      />
    </a>
  </div>
);

const Header = () => {
  return (
    <header className="header">
      <Title />
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
