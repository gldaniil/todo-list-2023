import { useState } from 'react';
import { RiAddFill, RiDeleteBin5Line } from 'react-icons/ri';
import styles from './Todo.module.scss';

const Todo = ({ addTodo, deleteTodo, todo, index }) => {
  const [text, setText] = useState('');

  const inputHandler = (e) => {
    if ((e.target.value && e.type === 'blur') || e.code === 'Enter') {
      addTodo(e.target.value, index);
      setText('');
    }
  };

  return (
    <div className={styles.todo}>
      <input
        placeholder={todo}
        onBlur={(e) => inputHandler(e)}
        onKeyDown={(e) => inputHandler(e)}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className={styles.text}
      />
      {index !== undefined && (
        <div className={styles.actions}>
          <RiAddFill className={styles.icon} />
          <RiDeleteBin5Line
            onClick={() => deleteTodo(todo, index)}
            className={styles.icon}
          />
        </div>
      )}
    </div>
  );
};

export default Todo;
