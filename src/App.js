import React, {useState, createContext} from 'react';
import "./styles/App.css";
import MenuBar from "./components/MenuBar"
import Container from './components/Container';
import Footer from './components/Footer';
export const menuebarContext = createContext("Bhookkad");
export const wishContext = createContext();

const App = () => {
    const [wishlist, setwishlist] = useState([])
    const [menudata, setmenudata] = useState("User");
    const [history, sethistory] = useState([])
    return (
      <div className="main">
        <div className="color">
          <menuebarContext.Provider value={[menudata, setmenudata]} >
            <MenuBar/>
          </menuebarContext.Provider>

          <wishContext.Provider value = {[wishlist, setwishlist, history, sethistory]}>
            <Container menudata={menudata}/>
          </wishContext.Provider>
        </div>
        <Footer/>
      </div>
    );
  
}

export default App;