import { useEffect, useState } from 'react';
import styles from './CompletedTodos.module.scss';
import Todo from './Todo';
import Loader from '../Loading/Loader';

const CompletedTodos = () => {
  // const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCompleted(JSON.parse(window.localStorage.getItem('completed')));
      setIsLoading(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isLoading)
      window.localStorage.setItem('completed', JSON.stringify(completed));
  }, [completed, isLoading]);

  const deleteTodoHandle = (index) => {
    setCompleted((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      {!isLoading ? <Loader /> : null}
      {!completed.length ? (
        <h2 className={styles.title}>Пока что выполненных задач нет ;</h2>
      ) : (
        completed.map((todo, i) => {
          return (
            <Todo key={i} todo={todo} index={i} deleteTodo={deleteTodoHandle} />
          );
        })
      )}
    </>
  );
};

export default CompletedTodos;
