import ListContainer from "./containers/ListContainer/ListContainer"
import  NavBar  from "./components/NavBar/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListContainer />
      <h2>Listo</h2>
    </div>
  );
}

export default App;
