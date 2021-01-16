import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/DropDown.css';
import Card from './Card'

function DropBox () {
  const [chars, setData] = useState([])
  const [tags, addTags] = useState([])
  const [conditionalRender, setConditional] = useState(true)
  const [drop, setDrop] = useState(false)

  useEffect( () => {
    const characters = async () => {
       const {data} = await axios.get("https://rickandmortyapi.com/api/character/?page=1");
       setData(data.results.slice(0, 15))
    } 
    characters()
  }, [setData])

  const addTag = character => {
    if(!tags.find(chars => chars.id === character.id)) {
    addTags([...tags, character])
    setConditional(false)
    } else {
      return
    }
  }

  const deleteTag = i => {
    const newTags = [ ...tags ]
    newTags.splice(i, 1)
    addTags(newTags)
    if (tags.length === 1) setConditional(true)
  }


  return (
    <>
  
      
      <div className='tests'>
        {!conditionalRender &&
          <ul className="droplist1">
            {tags.map(character => (<li key={character.id}>{character.name}<span><button className='xbutton' type="button" onClick={deleteTag}>+</button></span></li>))}
          </ul>}
        {conditionalRender && <p className='paraDrop' onClick={() => setDrop(true)}>Prueba Tecnica Oblek</p>}
        <p onClick={() => setDrop(!drop)}>{drop? <button className='openClose'>Cerrar</button> : <button className='openClose'>Abrir</button>}</p>
      </div>
      {drop && <div>
        <ul className="droplist">
          {chars?.map(character =>(
            <div key={character.name}>
            <li onClick={() => addTag(character)}>{character.name}</li>
            </div>
          ))}
        </ul>
      </div>}
          <div className="row">
      {!conditionalRender && tags.map(character => (
          <Card key={character.id} character={character}/>
          ))}
          </div>
    </>
  );

}

export default DropBox