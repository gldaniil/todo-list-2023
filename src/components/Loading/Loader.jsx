import styles from './Loader.module.scss';
import ContentLoader from 'react-content-loader';

const Loader = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <ContentLoader
          speed={2}
          width={500}
          height={500}
          viewBox="0 0 500 500"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="100" height="100" />
        </ContentLoader>
      </div>
    </div>
  );
};

export default Loader;
