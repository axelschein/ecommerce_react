import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar  from "./components/NavBar/NavBar";
import Greetings from "./components/Greetings/greetings";
import BotonContador from "./components/botonContador/botonContador";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Greetings nombre="Axel" />
      <ItemListContainer />
      <h2>Listo</h2>
      <BotonContador
        onClick1={(num) => console.log(`mi componente me dio un click ${num}`)}
        onClick2={(num) => console.log(`mi componente me dio un click ${num}`)}
      ></BotonContador>
    </div>
  );
}

export default App;
