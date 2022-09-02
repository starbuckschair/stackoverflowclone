import "./App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEarthAmericas } from '@fortawesome/fontawesome-svg-core';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Header from "./pages/Header";
import Aside from "./pages/Aside";
import Article from "./pages/Article";
import Footer from "./pages/Footer";
import AskQ from "./routes/AskQ";
import Contents from "./Contents";
import Users from "./Users";




function App() {

  return (
    <>
      < Header />
      < Routes>
        <Route path="/" element={ 
          <>
            < Article />
          </>
        }/>
        <Route path="/question" element={ <AskQ /> } />
        <Route path="/contents/:id" element={ <Contents /> } />
        <Route path="/users" element={ 
          <>
            < Aside />
            < Users /> 
          </>
        }/>
       </Routes>
      < Footer />
    </>
  );
}

export default App;
