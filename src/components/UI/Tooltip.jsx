import { useState } from 'react';
import styles from './Tooltip.module.scss';
import { RiInformationLine } from 'react-icons/ri';
import { Transition } from 'react-transition-group';

const Tooltip = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.container} onClick={() => setIsVisible(!isVisible)}>
      <RiInformationLine className={styles.icon} />
      {
        <Transition in={isVisible} timeout={1000} mountOnEnter unmountOnExit>
          {(state) => (
            <div className={`${styles.tooltip} ${styles[state]}`}>{text}</div>
          )}
        </Transition>
      }
    </div>
  );
};

export default Tooltip;
