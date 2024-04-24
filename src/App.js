import React from "react";
// import Home from './pages/Home/Home.jsx';
import About from "./pages/About/About.jsx";
// import BookList from "./components/BookList/BookList.jsx";
// import BookDetails from "./components/BookDetails/BookDetails.jsx";
// import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx"
import Footer from './components/Footer/Footer.jsx';

function App() {
    return (
    <Router>
        <Header />
        <Routes>
          <Route path="/"  element={<Home />}></Route>
          <Route path="/about"  element={<About />}></Route>
        </Routes>
        <Footer/>
      </Router>
    )   
}

export default App;