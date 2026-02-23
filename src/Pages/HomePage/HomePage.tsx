import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import AboutUsTwo from "../../Components/AboutUsTwo/AboutUsTwo";
import GallerySection from "../../Components/Gallery/GallerySection";
import Contact from "../../Components/Contact/Contact";

import { Element } from "react-scroll";
import styles from "./homepage.module.css";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className={styles.home}>

        {/* HERO SECTION */}
        <Element name="home" className={styles.section}>
          <Hero />
        </Element>

        {/* SERVICES SECTION */}
        <Element name="services" className={styles.section}>
          <Services />
        </Element>

        {/* ABOUT SECTION */}
        <Element name="about" className={styles.section}>
          <AboutUsTwo />
        </Element>

        {/* GALLERY SECTION */}
        <Element name="gallery" className={styles.section}>
          <GallerySection />
        </Element>

        {/* CONTACT SECTION */}
        <Element name="contact" className={styles.section}>
          <Contact />
        </Element>

      </main>
    </>
  );
}
