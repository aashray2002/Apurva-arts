import styles from "./gallery.module.css";

export default function GallerySection() {
  return (
    <div className={styles.gallerySection}>

      {/* HEADING */}
      <div className={styles.heading}>
        <div className={styles.firstline}>
          <div className={styles.line}></div>
          <p>Our Achievements</p>
        </div>

        <h2>
          Special Invitation at <span>Independence Day Ceremony</span>
        </h2>

        <p className={styles.description}>
          Apurva Arts was proudly invited as a <b>Special Guest</b> at the
          prestigious Independence Day Ceremony held in New Delhi.
          Our contribution towards quality printing and creative services
          was recognized at the national level. The team had the honour of
          participating in celebrations organized under the Government of
          India initiative and receiving appreciation for excellence in
          professional printing services.
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className={styles.galleryGrid}>
        <img src="/Images/gallery1.jpg" alt="Event" />
        <img src="/Images/gallery2.jpg" alt="Award Ceremony" />
        <img src="/Images/gallery3.jpg" alt="Invitation" />
        <img src="/Images/gallery4.jpg" alt="Special Guest Moment" />
        <img src="/Images/gallery5.jpg" alt="Recognition" />
        <img src="/Images/gallery6.jpg" alt="Independence Event" />
      </div>

    </div>
  );
}
