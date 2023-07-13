import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

//


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




