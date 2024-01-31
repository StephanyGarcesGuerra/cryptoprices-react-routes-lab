

import './App.css';

import {Route, Routes} from "react-router-dom";
import Currencies from "./pages/currencies";
import Main from "./pages/main";
import Price from "./pages/price";
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <h1> Crypto Prices App </h1>
      <Nav />
      <Routes>
        <Route path = '/' element={ <Main />} />
        <Route path = '/currencies' element={ <Currencies />} />
        <Route path = '/price' element={ <Price />} />
        <Route path="/price/:symbol" element={<Price/>}/>
      </Routes>

    </div>
  );
}

export default App;
