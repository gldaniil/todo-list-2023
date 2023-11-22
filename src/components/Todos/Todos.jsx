import { useState } from 'react';
import Todo from './Todo';
import styles from './Todos.module.scss';

const Todos = () => {
  const [todos, setTodos] = useState(['вынести мусор', 'прилечь']);

  const addTodoHandle = (todo, index) => {
    if (index) {
      setTodos((prev) => prev.map((item, i) => (i !== index ? item : todo)));
    } else {
      setTodos((prev) => [...prev, todo]);
    }
  };

  return (
    <div className={styles.container}>
      {todos.length > 0 &&
        todos.map((todo, i) => {
          return <Todo key={i} addTodo={addTodoHandle} todo={todo} index={i} />;
        })}
      <Todo addTodo={addTodoHandle} />
    </div>
  );
};

export default Todos;
