// components/Popup.js
import styles from '/styles/Popup.module.css';

const Popup = ({ onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <h3>Download Resume</h3>
        <a href="/resume.docx" download target="_blank" rel="noopener noreferrer">
          <button className={styles.popupButton}>Download as DOCX</button>
        </a>
        <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
          <button className={styles.popupButton}>Download as PDF</button>
        </a>
        <button className={styles.popupClose} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
