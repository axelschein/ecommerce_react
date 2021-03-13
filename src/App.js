import ListContainer from "./containers/ListContainer/ListContainer"
import  NavBar  from "./components/NavBar/NavBar";
import Greetings from "./components/Greetings/greetings";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Greetings nombre="Axel" />
      <ListContainer />
      <h2>Listo</h2>
    </div>
  );
}

export default App;
