import { useEffect, useState } from 'react';
import Todo from './Todo';
import styles from './Todos.module.scss';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(window.localStorage.getItem('todos')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodoHandle = (todo, index) => {
    if (index) {
      setTodos((prev) => prev.map((item, i) => (i !== index ? item : todo)));
    } else {
      setTodos((prev) => [...prev, todo]);
    }
  };

  const deleteTodoHandle = (todo, index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      {todos.length > 0 &&
        todos.map((todo, i) => {
          return (
            <Todo
              key={i}
              addTodo={addTodoHandle}
              deleteTodo={deleteTodoHandle}
              todo={todo}
              index={i}
            />
          );
        })}
      <Todo addTodo={addTodoHandle} deleteTodo={deleteTodoHandle} />
    </div>
  );
};

export default Todos;
