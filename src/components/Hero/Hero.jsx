import s from "./Hero.module.css";
import succulent from "../../assets/b1.png";
import cactuses from "../../assets/b2.png";
import greenPlants from "../../assets/b3.png";

const plants = [
  {
    src: succulent,
    alt: "Суккулент в горшке",
    className: `${s["hero-photo"]} ${s["hero-photo-main"]}`,
  },
  {
    src: cactuses,
    alt: "Кактусы",
    className: `${s["hero-photo"]} ${s["hero-photo-small"]}`,
  },
  {
    src: greenPlants,
    alt: "Зелёные комнатные растения",
    className: `${s["hero-photo"]} ${s["hero-photo-small"]}`,
  },
];

export function Hero() {
  return (
    <section className={s.hero} id="home">
      <div className={s["hero-content"]}>
        <h1>
          Растения, которые
          <br />
          делают
          <br />
          дом живым
        </h1>

        <p className={s["hero-description"]}>
          Найдите своего зелёного соседа — мы поможем выбрать и позаботиться о нём.
        </p>

        <a className={s["hero-button"]} href="#catalog">
          Перейти в каталог
        </a>
      </div>

      <div className={s["hero-gallery"]} id="catalog">
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