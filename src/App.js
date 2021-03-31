import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar  from "./components/NavBar/NavBar";
import Greetings from "./components/Greetings/greetings";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemCount from "./components/ItemCount/ItemCount";
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
            
          </Route>
          <Route path='/category/:categoryId'>
            <ItemListContainer />
            
          </Route>
          <Route path='/item/:itemId'>
            <ItemDetailContainer />
            <ItemCount stock="5" initial={1} />
          </Route>
          
          <Route path='*'>
            404
          </Route>
          <Route path='/item/:itemCount'>
            
          </Route>
          

        </Switch >
        
        
        <h2>Listo</h2>
        
        
        
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
