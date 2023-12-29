import "./nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="controller-nav">
        <h1>
          <span>IMC</span>OUTER
        </h1>
        <ul>
          <li>
            <a href="">Estatisticas</a>
          </li>
          <li>
            <a href="">Fale conosco!</a>
          </li>
          <li>
            <button>Começar</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
