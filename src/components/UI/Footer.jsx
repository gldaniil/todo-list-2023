import { RiGithubFill } from 'react-icons/ri';
import styles from './Footer.module.scss';
import Tooltip from './Tooltip';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <RiGithubFill className={styles.icon} />
        </div>
        <Tooltip text={'Текст при наведении'} />
      </div>
    </footer>
  );
};

export default Footer;
