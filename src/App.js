
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Card from './components/Card';

import title from './img/pokemon-logo-png-pokemon-logo-png-2000.png'
import PokeGallery from './Pages/PokeGallery';

function App() {
  const[pokemonName, setPokemonName]= useState('')
  const[pokeInput, setPokeInput] = useState(false)
  
  const[pokemon, setPokemon]=useState({
            name : '',
            img : '',
            species: '',
            number: '',
            height: '',
            weight:'',
            attack: '',
            defense: '',
            speed: '',
            type: ''
  })
  const searchPokemon = async ()  =>{
        setPokeInput(false)
        const res = await axios.get('http://pokeapi.co/api/v2/pokemon/'+pokemonName)
        console.log(res.data)
        setPokemon({
            name : res.data.name,
            img : res.data.sprites.other.dream_world.front_default,
            species: res.data.species.name,
            number: res.data.id,
            height: res.data.height,
            weight: res.data.weight,
            attack: res.data.stats[1].base_stat,
            defense: res.data.stats[2].base_stat,
            speed:res.data.stats[5].base_stat,
            type:res.data.types[0].type.name

        })
        console.log(pokemon.name+'  '+pokemon.img+'  '+pokemon.species)

  }
  return (

    <Router>
    
    <Routes>
         <Route path = '/gallery' element ={<PokeGallery/>}/>
         
    </Routes>   
    
    <div className="App">
    <div className='TitleSection'>
      <img src={title} alt='logo'></img>
      <input type='text' onChange = {(e)=> {
        setPokeInput(true)
        setPokemonName(e.target.value)}}/>
    {pokeInput && <button onClick = {searchPokemon}>Search Pokémon</button>}
    </div>
    <Card pokemon = {pokemon}/>
    </div>
  
    </Router>
  );
}

export default App;
