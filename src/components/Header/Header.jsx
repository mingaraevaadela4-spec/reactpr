import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a className="header-logo" href="#home">
        <span className="header-logo-icon">♧</span>
        <span>Кедр</span>
      </a>

      <nav className="header-nav">
        <a className="header-link active" href="#home">
          Главная
        </a>
        <a className="header-link" href="#catalog">
          Каталог
        </a>
        <a className="header-link" href="#footer">
          Корзина <span className="cart-icon">🛒</span>
        </a>
      </nav>
    </header>
  );
}