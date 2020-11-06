import "./style.css";
import LogoSVG from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className={props.premium ? "theme-premium" : ""}>
      <Link to="/">
        <img src={LogoSVG} alt="logo"></img>
      </Link>
      <nav>
        <ul className={props.premium ? "theme-premium-ul" : ""}>
          <Link to="/premium">
            <li>Premium</li>
          </Link>
          <li>Ajuda</li>
          <li>Baixar</li>
          <li>Inscrever-se</li>
          <li>Entrar</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
