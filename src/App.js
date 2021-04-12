import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar  from "./components/NavBar/NavBar";
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
            <ItemListContainer />
          </Route>

          <Route path='/category/:categoryId'>
            <ItemListContainer />
          </Route>


          <Route path='/item/:itemId'>
            <ItemDetailContainer />

          </Route>

        </Switch >
        
        
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
