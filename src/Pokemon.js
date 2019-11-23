import React, {useState, useEffect} from 'react';
import RenderList from './RenderList';
const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon'

const Pokemon = () => {
  const [pokelist, setPokelist] = useState([]);
  /*
  destructuring useState():
    hook[0] = pokelist
    hook[1] = setPokelist
  */
  
  useEffect(() => {
    fetch(POKEMON_API)
      .then(res => res.json())
      .then(data => setPokelist([...data.results])) 
      
  },[])

 console.log('pokelist', pokelist)

  return (
    <div>
     
      <RenderList list={pokelist} />
    </div>
  )
}

export default Pokemon;

/*

render => useEffect(setState) => render =>useEffect(setState) => render

*/