import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
            <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/dashboard' element={<HomePage />} />
            </Routes>
    </div>
  );
}

export default App;
