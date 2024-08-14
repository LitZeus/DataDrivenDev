import Link from 'next/link';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
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
            <a
              href="https://drive.google.com/file/d/1MBQcF_QMz0mKk2a0zKaJ7UvWNOgOya60/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumebutton}
            >
              Resume
            </a>
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
