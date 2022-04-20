
import { Link } from 'react-router-dom'
import './Card.css'



const Card = ({pokemon})=>{
    
    return <div className ='pokemon'>
    <div>
    <Link to='/gallery'><h2 className='screen'>Show list</h2></Link> 
    <Link to='/'><h2 className='screen'>Hide list</h2></Link> 
    </div>

 <div className="contain-card">    
        {pokemon.name !== '' ? <div className="card-1">
      
       <img src={pokemon.img} alt = "poke"></img>
      <div className='screen'>
      <h5>Nombre: {pokemon.species}</h5>
      </div>


     </div>:
     <div className="card-2 screen">Escribe el Nombre/num. de Pokemon</div>} 
    </div>
    {pokemon.name !== "" && <div className='contain-detail'>
     <h3 className='screen'>numero: {pokemon.number}</h3>
     <h3 className='screen'>nombre: {pokemon.species}</h3>
     <h3 className='screen'>ataque: {pokemon.attack}</h3>
     <h3 className='screen'>defensa: {pokemon.defense}</h3>
     <h3 className='screen'>velocidad: {pokemon.speed}</h3>
     <h3 className='screen'>tipo: {pokemon.type}</h3>
     <h3 className='screen'>peso: {pokemon.weight/10} Kg</h3>
     <h3 className='screen'>estatura: {pokemon.height/10} m</h3>


</div>}
   
    </div>
   
}

export default Card