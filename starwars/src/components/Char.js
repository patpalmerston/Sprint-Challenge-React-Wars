import React from 'react'

import './StarWars.css'


const Char = (props) => {
  console.log(props);
  return (
    <div className='char'>
      <p>Name: {props.passChar.name}</p>
      <p>Year of Birth: {props.passChar.birth_year}</p>
      {/* <p>Date Created: {props.passChar.created}</p>
      <p>Last Edited: {props.passChar.edited}</p> */}
      <p>Eye Color: {props.passChar.eye_color}</p>

      {/* <div className='char-array'>
        <p>Films: 
          <a href={props.passChar.films}>
          {props.passChar.films}
          </a>
        </p>  
      </div> */}

      <p>Gender: {props.passChar.gender}</p>
      <p>Hair Color: {props.passChar.hair_color}</p>
      <p>Height: {props.passChar.height}</p>
      {/* <p>Home World: {props.passChar.homeworld}</p> */}
      <p>mass: {props.passChar.mass}</p>
      <p>Skin Color: {props.passChar.skin_color}</p>

      {/* <div className='char-array'>
        <p>Species: 
          <a href={props.passChar.species}>
          {props.passChar.species}
          </a>
        </p>
      </div> */}

      {/* <div className='char-array'>
        <p>Star Ships: 
          <a href={props.passChar.starships}>
          {props.passChar.starships}
          </a>
        </p>  
      </div> */}

      {/* <div className='char-array'>
        <p>Website: 
          <a href={props.passChar.url}>
          {props.passChar.url}
          </a>
        </p>
      </div> */}

      {/* <div className='char-array'>
        <p>Vehicles: <a href={props.passChar.vehicles}>
          {props.passChar.vehicles}
          </a>
        </p>  
      </div> */}
    </div>
  )
}


export default Char;