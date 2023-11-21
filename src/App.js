import './styles/reset.scss';
import './App.css';
import FirstVisit from './components/Loading/FirstVisit';
import Navigation from './components/UI/Navigation';
import Todos from './components/Todos/Todos';

const App = () => {
  const checkUser = window.localStorage.getItem('wasHere');
  checkUser ? 0 : window.localStorage.setItem('wasHere', true);

  return (
    <div className="App">
      {!checkUser && <FirstVisit />}
      <Navigation />
      <Todos />
    </div>
  );
};

export default App;
