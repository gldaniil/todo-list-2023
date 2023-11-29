import { Route, Routes } from 'react-router-dom';
import './styles/reset.scss';
import styles from './App.module.css';
import FirstVisit from './components/Loading/FirstVisit';
import Navigation from './components/UI/Navigation';
import Footer from './components/UI/Footer';
import Todos from './components/Todos/Todos';
import CompletedTodos from './components/Todos/CompletedTodos';

const App = () => {
  const checkUser = window.localStorage.getItem('wasHere');
  checkUser ? 0 : window.localStorage.setItem('wasHere', true);

  return (
    <div className={styles.App}>
      {!checkUser && <FirstVisit />}
      <Navigation />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/completed" element={<CompletedTodos />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
