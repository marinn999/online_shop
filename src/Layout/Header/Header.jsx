import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logo from "../media/logo.svg";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <img
          className={s.logotype}
          src={logo}
          width="80"
          height="70"
          alt="page logotype"
        ></img>
        <nav className={s.navigation}>
          <ul className={s.navList}>
            <li className={s.navItem}>
              <NavLink to="/">Products</NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink to="/">Search</NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink to="/">Favorite</NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink to="/">Cart</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
