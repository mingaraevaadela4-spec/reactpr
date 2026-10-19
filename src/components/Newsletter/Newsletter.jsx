import { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setMessage("Спасибо за подписку!");
    setEmail("");
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter-content">
        <h2>Подпишитесь на рассылку</h2>

        <p>
          Советы по уходу и новые растения.
          <br />
          Только полезное, без лишних писем.
        </p>
      </div>

      <form
        className="newsletter-form"
        onSubmit={handleSubmit}
      >
        <div className="newsletter-controls">
          <input
            type="email"
            placeholder="Ваш email"
            aria-label="Ваш email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <button type="submit">
            Подписаться
          </button>
        </div>

        <small>
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
        </small>

        {message && (
          <p className="newsletter-success" role="status">
            {message}
          </p>
        )}
      </form>
    </section>
  );
}