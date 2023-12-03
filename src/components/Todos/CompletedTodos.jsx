import { useEffect, useState } from 'react';
import styles from './CompletedTodos.module.scss';
import Todo from './Todo';
import Loader from '../Loading/Loader';

const CompletedTodos = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTodos(JSON.parse(window.localStorage.getItem('todos')));
      setCompleted(JSON.parse(window.localStorage.getItem('completed')));
      setIsLoading(true);
    }, 250);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    isLoading
      ? window.localStorage.setItem('completed', JSON.stringify(completed))
      : null;
  }, [completed, isLoading]);

  useEffect(() => {
    isLoading
      ? window.localStorage.setItem('todos', JSON.stringify(todos))
      : null;
  }, [todos]);

  const deleteTodoHandle = (index) => {
    setCompleted((prev) => prev.filter((_, i) => i !== index));
  };

  const revertTodoHandle = (index, todo) => {
    setTodos((prev) => [...prev, todo]);
    setCompleted((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      {!isLoading ? (
        <Loader />
      ) : !completed.length ? (
        <h2 className={styles.title}>
          Выполненные задачи отсутствуют &#128558;
        </h2>
      ) : (
        completed.map((todo, i) => {
          return (
            <Todo
              key={i}
              todo={todo}
              index={i}
              deleteTodo={deleteTodoHandle}
              revertTodo={revertTodoHandle}
            />
          );
        })
      )}
    </>
  );
};

export default CompletedTodos;
