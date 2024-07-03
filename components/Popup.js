// components/Popup.js
import styles from '/styles/Popup.module.css';

const Popup = ({ onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <button className={styles.popupClose} onClick={onClose}>
        ×
        </button>
        <h2 className={styles.popupHeading}>Download Resume</h2>
        <div className={styles.buttonContainer}>
          <a href="/resume.docx" download target="_blank" rel="noopener noreferrer">
            <button className={styles.popupButton}>Download as DOCX</button>
          </a>
          <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
            <button className={styles.popupButton}>Download as PDF</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
