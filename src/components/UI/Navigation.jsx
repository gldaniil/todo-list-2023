import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link__active}` : `${styles.link}`
            }
          >
            Текущие задачи
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/completed"
            className={({ isActive }) =>
              isActive ? `${styles.link__active}` : `${styles.link}`
            }
          >
            Выполненные задачи
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
