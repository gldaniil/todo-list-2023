import { useState } from 'react';
import { RiAddFill, RiDeleteBin5Line } from 'react-icons/ri';
import styles from './Todo.module.scss';

const Todo = ({ addTodo, todo, index }) => {
  const [text, setText] = useState('');

  const onBlurHandler = (e) => {
    if (e.target.value) {
      addTodo(e.target.value, index);
      setText('');
    }
  };

  return (
    <div className={styles.todo}>
      <input
        placeholder={todo}
        onBlur={(e) => onBlurHandler(e)}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className={styles.text}
      />
      <div className={styles.actions}>
        <RiAddFill className={styles.icon} />
        <RiDeleteBin5Line className={styles.icon} />
      </div>
    </div>
  );
};

export default Todo;
