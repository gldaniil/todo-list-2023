import { useState } from 'react';
import { RiAddFill, RiDeleteBin5Line } from 'react-icons/ri';
import styles from './Todo.module.scss';

const Todo = ({ addTodo, deleteTodo, completeTodo, todo, index }) => {
  const [text, setText] = useState('');

  const inputHandler = (e) => {
    if ((e.target.value && e.type === 'blur') || e.code === 'Enter') {
      addTodo(e.target.value, index);
      setText('');
    }
  };

  return (
    <div className={styles.todo}>
      {index !== undefined && <p className={styles.number}>{index + 1}</p>}
      <input
        placeholder={todo}
        onBlur={(e) => inputHandler(e)}
        onKeyDown={(e) => inputHandler(e)}
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        className={styles.text}
      />
      {index !== undefined && (
        <div className={styles.actions}>
          <RiAddFill
            onClick={() => completeTodo(todo)}
            className={styles.icon}
          />
          <RiDeleteBin5Line
            onClick={() => deleteTodo(index)}
            className={styles.icon}
          />
        </div>
      )}
    </div>
  );
};

export default Todo;
