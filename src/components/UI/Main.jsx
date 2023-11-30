import { Route, Routes } from 'react-router-dom';
import styles from './Main.module.scss';
import Todos from '../Todos/Todos';
import CompletedTodos from '../Todos/CompletedTodos';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/completed" element={<CompletedTodos />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
