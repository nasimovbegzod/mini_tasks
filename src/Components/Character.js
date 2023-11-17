import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Character.scss'

const Character = ( { character } ) => {
  const [ heart, setheart ] = useState( "🤍" );
  const fun1 = () => {
     setheart( '💜' )  
  }
  
  
  return (
    <div className="Section-1 container">
      <div className="Card" >
        <div className='CardTop'>
          <button id={character.id} onClick={fun1}>{heart}</button>
          <Link to={'Single/' + character.id}><img src={character.image
          } alt="" /></Link>
        </div>
        <div className='CardBottom'>
          <h2>{character.title}</h2>
          <h4>{character.description}</h4>
          <h3>{character.price}</h3>
        </div>
      </div>
    </div>
  )
}

export default Character