import React from 'react'
import { Players as PlayersList } from '../Share/ListOfPlayers'
export default function Players() {
  
  return (
    <div className='container'>
      {Players.map((player)=>(
        <div className='column'>
          <div className='card'>
            <img src={player.img} alt={player.name}/>
            <h3>{player.name}</h3>
            <p className='title'>{player.club}</p>
            <p><button>Detail</button></p>
          </div>
        </div>
      ))}
    </div>
  )
}