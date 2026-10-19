import s from "./Newsletter.module.css";

export function Newsletter() {
  return (
    <section className={s.newsletter} id="newsletter">
      <div className={s["newsletter-content"]}>
        <h2>Подпишитесь на рассылку</h2>
        <p>
          Советы по уходу и новые растения.
          <br />
          Только полезное, без лишних писем.
        </p>
      </div>

      <form className={s["newsletter-form"]}>
        <div className={s["newsletter-controls"]}>
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            aria-label="Ваш email"
            required
          />
          <button type="submit">Подписаться</button>
        </div>

        <small>
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
        </small>
      </form>
    </section>
  );
}