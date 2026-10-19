import "./Hero.css";

const plants = [
  {
    src: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=85",
    alt: "Суккулент в горшке",
    className: "hero-photo hero-photo-main",
  },
  {
    src: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=85",
    alt: "Кактусы",
    className: "hero-photo hero-photo-small",
  },
  {
    src: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=85",
    alt: "Зелёные комнатные растения",
    className: "hero-photo hero-photo-small",
  },
];

export default function Hero() {
  return (<section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Растения, которые
          <br />
          делают
          <br />
          дом живым
        </h1>

        <p className="hero-description">
          Найдите своего зелёного соседа — мы поможем
          выбрать и позаботиться о нём.
        </p>

        <a className="hero-button" href="#catalog">
          Перейти в каталог
        </a>
      </div>

      <div className="hero-gallery" id="catalog">
        {plants.map((plant) => (
          <img
            key={plant.src}
            src={plant.src}
            alt={plant.alt}
            className={plant.className}
          />
        ))}
      </div>
    </section>
  );
}