import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import Popup from '../components/Popup';

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>ANALYST ,</h1>
          <h1>dEVELOPER</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Tejas Athalye</h1>
            <h6 className={styles.bio}>Analyst By Data; Developer By Code.</h6>
            <button className={styles.resumebutton} onClick={handleButtonClick}>
              Resume
            </button>
            {showPopup && <Popup onClose={handleClosePopup} />}
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.button}>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
