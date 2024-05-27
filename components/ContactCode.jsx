import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'GitHub',
    link: 'tejasathalye',
    href: 'https://github.com/tejasathalye',
  },
  {
    social: 'Email',
    link: 'tejasathalye.nbnstic.comp@gmail.com',
    href: 'mailto:tejasathalye.nbnstic.comp@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'tejasathalye',
    href: 'https://www.linkedin.com/in/tejas-athalye-62a53823a/',
  },
  {
    social : 'Whatsapp',
    link: 'Tejas Athalye',
    href: 'https://wa.me/7666803812'
  },
  {
    social: 'Instagram',
    link: 'Tejas | Artist',
    href: 'https://www.instagram.com/artist.tejas_/',
  },
  {
    social: 'Telegram',
    link: 'tejasathalye',
    href: 'https://t.me/tejasathalye',
  },
  
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
