
import './App.css';
// import Pokecard from './Pokecard';
// import Pokedex from './Pokedex'
import Pokegame from './Pokegame';

function App() {
  return (
    <div className="App">
      Pokemon
      {/* <Pokecard
         id={4}
         name="Charmander"
         type="fire"
         exp={62}
      /> */}
      <Pokegame />
    </div>
  );
}

export default App;
