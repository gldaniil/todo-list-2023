import { useState } from 'react';
import styles from './Tooltip.module.scss';
import { RiInformationLine } from 'react-icons/ri';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <RiInformationLine className={styles.icon} />
      {children}
      {isVisible && <div className={styles.tooltip}>{text}</div>}
    </div>
  );
};

export default Tooltip;
