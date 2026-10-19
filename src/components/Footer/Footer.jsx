import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>О магазине</h3>
          <p>Растения с заботой о вашем доме.</p>
          <p>Выбираем, выращиваем и помогаем.</p>
        </div>

        <div className="footer-column">
          <h3>Помощь</h3>
          <a href="#footer">Доставка и оплата</a>
          <a href="#footer">Возврат и гарантия</a>
          <a href="#footer">Уход за растениями</a>
        </div>

        <div className="footer-column">
          <h3>Контакты</h3>
          <a href="mailto:hello@kedr.ru">
            hello@kedr.ru
          </a>
          <a href="tel:+74951234567">
            +7 (495) 123-45-67
          </a>
          <p>Ежедневно, 10:00–20:00</p>
        </div>
      </div>

      <div className="footer-copyright">
        © 2025 Кедр
      </div>
    </footer>
  );
}