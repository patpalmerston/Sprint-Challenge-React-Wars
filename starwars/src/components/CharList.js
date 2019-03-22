import React from 'react'
import Char from './Char';

const CharList = (props) => {
  return (
    <div className='char-list'>
    {props.passCharList.map((charItem, index) => <Char key={index} passChar={charItem}/>)}

    </div>
  )
}



export default CharList;