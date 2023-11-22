import { Route, Routes } from 'react-router-dom';
import './styles/reset.scss';
import './App.css';
import FirstVisit from './components/Loading/FirstVisit';
import Navigation from './components/UI/Navigation';
import Todos from './components/Todos/Todos';
import CompletedTodos from './components/Todos/CompletedTodos';

const App = () => {
  const checkUser = window.localStorage.getItem('wasHere');
  checkUser ? 0 : window.localStorage.setItem('wasHere', true);

  return (
    <div className="App">
      {!checkUser && <FirstVisit />}
      <Navigation />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/completed" element={<CompletedTodos />} />
      </Routes>
    </div>
  );
};

export default App;
