import NavLogoSearch from './Components/NavLogoSearch'
import Footer from './Components/Footer'
import NavMenu from './Components/NavMenu'
import SwipeableTextMobileStepper from './Components/Jumbotron'
import Carousel from './Components/Carousel'
import SuccessStories from './Components/SuccessStories'
import './App.css';
import ProductsHome from './Components/ProductsHome'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AboutUs from './Components/Pages/AboutUs'
import HomePage from './Components/HomePage'
import Products from './Components/Pages/Products'
import Contact from './Components/Pages/Contact'

function App() {
  return (
    <div className="App">
    <Router>
    <NavLogoSearch/>
    <NavMenu/>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path='/aboutUs' element={< AboutUs />}/>
        <Route path='/products' element = {<Products/>}/>
        <Route path='/contact' element = {<Contact/>} />
    </Routes>
    <Footer/> 
    </Router>
    </div>
  );
}

export default App;
