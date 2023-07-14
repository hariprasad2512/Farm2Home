import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Products from './components/Products';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';




//


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




