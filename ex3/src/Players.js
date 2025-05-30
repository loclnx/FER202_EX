import React, { useState } from 'react'
import { Players as PlayersList } from '../Share/ListOfPlayers'

export default function Players() {
  const [player, setPlayer] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='container'>
      {PlayersList.map((playerItem) => (
        <div className='column' key={playerItem.name}>
          <div className='card'>
            <img src={playerItem.img} alt={playerItem.name} />
            <h3>{playerItem.name}</h3>
            <p className='title'></p>
            <p>
              <button
                onClick={() => {
                  setPlayer(playerItem)
                  setIsOpen(true)
                }}
              >
                Chi tiết
              </button>
            </p>
          </div>
        </div>
      ))}
      {isOpen && player && (
        <div className="overlay">
          <div className="popup">
            <h2>{player.name}</h2>
            <button
              className="close"
              onClick={() => setIsOpen(false)}
              aria-label="Đóng"
            >
              &times;
            </button>
            <div className="content">
              <img src={player.img} alt={player.name} />
              <div>{player.info}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}