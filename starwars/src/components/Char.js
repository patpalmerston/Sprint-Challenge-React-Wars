import React from 'react'

const Char = (props) => {
  console.log(props);
  return (
    <div className='char'>
      <p>Year of Birth: {props.passChar.birth_year}</p>
      <p>Date Created: {props.passChar.created}</p>
      <p>Last Edited: {props.passChar.edited}</p>
      <p>Eye Color: {props.passChar.eye_color}</p>
      <p>Films: {props.passChar.films}</p>  //array?
      <p>Gender: {props.passChar.gender}</p>
      <p>Hair Color: {props.passChar.hair_color}</p>
      <p>Height: {props.passChar.height}</p>
      <p>Home World: {props.passChar.homeworld}</p>
      <p>mass: {props.passChar.mass}</p>
      <p>Name: {props.passChar.name}</p>
      <p>Skin Color: {props.passChar.skin_color}</p>
      <p>Species: {props.passChar.species}</p>//array?
      <p>Star Ships: {props.passChar.starships}</p>  //array?
      <p>Website: {props.passChar.url}</p>
      <p>Vehicles: {props.passChar.vehicles}</p>  //array?
    </div>
  )
}


export default Char;