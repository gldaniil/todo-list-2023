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
        <Tooltip
          text={`«Планировщик дел» позволяет добавлять, редактировать, архивировать и удалять задачи.
            На данный момент перечень задач хранится только в локальном хранилище данных - браузере.`}
        />
      </div>
    </footer>
  );
};

export default Footer;
