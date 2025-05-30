import React from 'react'
import '../styles/PlayersPresentation.css'

export default function PlayersPresentation({players, handleShowDetails, selectedPlayer, showDetails, handleCloseDetails}) {
    return (
        <div>
            <div className='container'>
                {players.map((player) => (
                    <div className='column' key={player.id}>
                        <div className='card'>
                            <img src={player.img} alt={player.name}/>
                            <h3>{player.name}</h3>
                            <p className='title'>{player.club}</p>
                            <p><button onClick={() => handleShowDetails(player)}>Detail</button></p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Player Details Modal */}
            {showDetails && selectedPlayer && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseDetails}>&times;</span>
                        <img src={selectedPlayer.img} alt={selectedPlayer.name} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}/>
                        <h2>{selectedPlayer.name}</h2>
                        <p className="title">{selectedPlayer.club}</p>
                        <p>{selectedPlayer.info}</p>
                    </div>
                </div>
            )}
        </div>
    )
}