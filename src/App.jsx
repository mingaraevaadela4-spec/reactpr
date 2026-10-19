import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}