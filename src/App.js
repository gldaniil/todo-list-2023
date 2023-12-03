import './styles/reset.scss';
import styles from './App.module.css';
import Navigation from './components/UI/Navigation';
import Footer from './components/UI/Footer';
import Main from './components/UI/Main';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Navigation />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
