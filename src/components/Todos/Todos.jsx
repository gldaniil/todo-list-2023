import { useEffect, useState } from 'react';
import Todo from './Todo';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(window.localStorage.getItem('todos')));
    setCompleted(JSON.parse(window.localStorage.getItem('completed')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    window.localStorage.setItem('completed', JSON.stringify(completed));
  }, [completed]);

  const addTodoHandle = (todo, index) => {
    typeof index === 'number'
      ? setTodos((prev) => prev.map((item, i) => (i !== index ? item : todo)))
      : setTodos((prev) => (prev ? [...prev, todo] : [todo]));
  };

  const deleteTodoHandle = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const completeTodoHandle = (index, todo) => {
    setCompleted((prev) => (prev ? [...prev, todo] : [todo]));
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      {todos &&
        todos.map((todo, i) => {
          return (
            <Todo
              key={i}
              addTodo={addTodoHandle}
              deleteTodo={deleteTodoHandle}
              completeTodo={completeTodoHandle}
              todo={todo}
              index={i}
            />
          );
        })}
      <Todo addTodo={addTodoHandle} />
    </>
  );
};

export default Todos;
