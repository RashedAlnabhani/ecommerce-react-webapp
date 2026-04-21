import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/crwn-logo.svg";
import "./navigation.styles.scss";
const NavigationBar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
