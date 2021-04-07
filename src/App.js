import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar  from "./components/NavBar/NavBar";
import Greetings from "./components/Greetings/greetings";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

import './App.css';

import { BrowserRouter, Switch, Route  } from "react-router-dom";

function App() {
  return (

    <BrowserRouter >
      <div className="App">            
        <NavBar />
        <Switch > 
          <Route exact path='/'>
            <Greetings nombre="Axel" />
            <ItemListContainer />
            
          </Route>
          <Route path='/category/:categoryId'>
            
            
          </Route>
          <Route path='/item/:itemId'>
            <ItemDetailContainer />
            
          </Route>
          
          <Route path='*'>
            404
          </Route>
          <Route path='/item/:itemCount'>
            
          </Route>
          

        </Switch >
        
        
        
        
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
