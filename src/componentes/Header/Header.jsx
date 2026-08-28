import Banner from "../Banner/Banner";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>Bodão Computadores</h1>
          <p>Tudo em informática, de onde estiver!</p>
        </div>
        <Banner />
      </div>
    </header>
  );
}

export default Header;