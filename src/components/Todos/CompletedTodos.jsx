import { useEffect } from 'react';
import '../../styles/general.scss';
import styles from './CompletedTodos.module.scss';

const CompletedTodos = () => {
  useEffect(() => {
    console.log('Чё тут происходит?');
  }, []);

  return (
    <div className="container">
      <h2 className={styles.title}>Пока что выполненных задач нет ;(</h2>
    </div>
  );
};

export default CompletedTodos;
