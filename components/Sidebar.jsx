import Link from 'next/link';
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import CodeIcon from './icons/CodeIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import styles from '../styles/Sidebar.module.css';

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  {
    Icon: CodeIcon,
    path: '/projects',
  },
  {
    Icon: MailIcon,
    url: 'mailto:tejasathalye.nbnstic.comp@gmail.com',
  },
  {
    Icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/tejasathalye/',
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path, url }) => (
          url ? (
            <a href={url} key={url} target="_blank" rel="noopener noreferrer">
              <div className={styles.iconContainer}>
                <Icon
                  fill="rgb(106, 115, 125)"
                  className={styles.icon}
                />
              </div>
            </a>
          ) : (
            <Link href={path} key={path}>
              <div
                className={`${styles.iconContainer} ${
                  router.pathname === path && styles.active
                }`}
              >
                <Icon
                  fill={
                    router.pathname === path
                      ? 'rgb(225, 228, 232)'
                      : 'rgb(106, 115, 125)'
                  }
                  className={styles.icon}
                />
              </div>
            </Link>
          )
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
