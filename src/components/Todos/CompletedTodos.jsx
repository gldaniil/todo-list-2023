import { useEffect, useState } from 'react';
import '../../styles/general.scss';
import styles from './CompletedTodos.module.scss';
import Todo from './Todo';

const CompletedTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(window.localStorage.getItem('completed')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('completed', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      {todos ? (
        todos.map((todo, i) => {
          return <Todo key={i} todo={todo} index={i} />;
        })
      ) : (
        <h2 className={styles.title}>Пока что выполненных задач нет ;</h2>
      )}
    </>
  );
};

export default CompletedTodos;
