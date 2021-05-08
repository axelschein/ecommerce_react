import React from 'react';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { NavBar }  from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Switch, Route  } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import './App.css';

function App() {
  return (    
  <BrowserRouter >
    <CartProvider>

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

          <Route path="/cart">
            <Cart />
          </Route>
        </Switch >
      </div>
    </CartProvider>
  </BrowserRouter>
    
  );
}

export default App;