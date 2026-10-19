import s from "./Header.module.css";

export  function Header() {
  return (
    <header className={s.header}>
      <a className={s["header-logo"]} href="#home">
        <span className={s["header-logo-icon"]}>♧</span>
        <span>Кедр</span>
      </a>

      <nav className={s["header-nav"]}>
        <a className={`${s["header-link"]} ${s.active}`} href="#home">
          Главная
        </a>
        <a className={s["header-link"]} href="#catalog">
          Каталог
        </a>
        <a className={s["header-link"]} href="#footer">
          Корзина <span className={s["cart-icon"]}>🛒</span>
        </a>
      </nav>
    </header>
  );
}