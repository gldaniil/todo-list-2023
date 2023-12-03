import { RiGithubFill } from 'react-icons/ri';
import styles from './Footer.module.scss';
import Tooltip from './Tooltip';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <a
            href="https://github.com/gldaniil/todo-list-2023"
            className={styles.link}
          >
            <RiGithubFill />
          </a>
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
