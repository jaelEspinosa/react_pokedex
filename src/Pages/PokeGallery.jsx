import axios from 'axios'
import {  useContext, useEffect, useState } from 'react'
import './PokeGallery.css'






const PokeGallery = ()=>{
        
        
        const [arrayPoke, setArrayPoke]=useState([])
        const [cardObj, setCardObj]= useState([])
        
        useEffect(()=>{        
        const getPokemons = async ()=>{
         
        for (let n=1 ; n<300; n++){
            const res = await axios.get('http://pokeapi.co/api/v2/pokemon/'+n)
            
            setArrayPoke(arrayPoke.push(res.data))     
            
        }   
          setCardObj(arrayPoke.map((param)=>({
              
              name:param.name,
              image:param.sprites.other.dream_world.front_default,
              num:param.id
          })))         
    }
    
    console.log('esto tengo en arraypoke',arrayPoke)
    getPokemons()       
    },[])
    
    return <div className='block-lsit'>
    <div>
        
    </div>
    <div className='list'>
    
        {cardObj.map((item)=>(
            <div className='item-list'>
            <p  key={JSON.stringify(item)}>{item.name}</p>
            <p>#{item.num}</p>
            <img src = {item.image} alt = 'pepe'></img>
            </div>
            
        ))}
    </div>
    </div>
}
export default PokeGallery