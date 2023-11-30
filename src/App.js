import './styles/reset.scss';
import styles from './App.module.css';
import FirstVisit from './components/Loading/FirstVisit';
import Navigation from './components/UI/Navigation';
import Footer from './components/UI/Footer';
import Main from './components/UI/Main';

const App = () => {
  const checkUser = window.localStorage.getItem('wasHere');
  checkUser ? 0 : window.localStorage.setItem('wasHere', true);

  return (
    <div className={styles.App}>
      {!checkUser && <FirstVisit />}
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
