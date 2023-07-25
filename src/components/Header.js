import { Link } from "react-router-dom";
import { LOGO_URL } from "./constants";

export const Title = () => (
  <div className="header__title">
    <a href="/">
      <img src={LOGO_URL} alt="logo" />
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
