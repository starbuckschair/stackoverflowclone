import "./App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEarthAmericas } from '@fortawesome/fontawesome-svg-core';
import { Routes, Route, Link } from 'react-router-dom'
import Header from "./pages/Header";
import Aside from "./pages/Aside"
import Article from "./pages/Article";
import Footer from "./pages/Footer";
import AskQ from "./routes/AskQ";

function App() {
  return (

    <>
      < Header />
      < Routes>
        <Route path="/" element={ 
          <>
            < Aside />
            < Article />
          </>
        }/>
        <Route path="/question" element={ <AskQ /> } />
        <Route path="/about" element={ <div>어바웃페이지임</div> } />
       </Routes>
      < Footer />     
    </>
  );
}

export default App;
