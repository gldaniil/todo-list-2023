import styles from './Loader.module.scss';
import ContentLoader from 'react-content-loader';

const Loader = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <ContentLoader
          className={styles.loader}
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" className={styles.loaderBlock} />
          <rect x="0" y="55" rx="10" ry="10" className={styles.loaderBlock} />
          <rect x="0" y="110" rx="10" ry="10" className={styles.loaderBlock} />
        </ContentLoader>
      </div>
    </div>
  );
};

export default Loader;
