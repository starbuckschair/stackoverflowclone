import "./App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEarthAmericas } from '@fortawesome/fontawesome-svg-core';
import { Routes, Route, Link } from 'react-router-dom'
import Header from "./pages/Header";
import Aside from "./pages/Aside"
import Article from "./pages/Article";
import Footer from "./pages/Footer";

function App() {
  return (

    <>
      < Header />
      < Aside />
      < Article />
      < Footer />     
      < Routes>
       <Route path="/detail" element={ <div>상세페이지임</div> } />
       <Route path="/about" element={ <div>어바웃페이지임</div> } />
      </Routes>
    </>
  );
}

export default App;
