import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#" className={styles.link__active}>
            Текущие задачи
          </a>
        </li>
        <li className={styles.item}>
          <a href="#" className={styles.link}>
            Выполненные задачи
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
