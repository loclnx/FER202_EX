import React, { Component } from 'react'
import { Players } from '../shared/ListOfPlayers'
import PlayersPresentation from './PlayersPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            players: Players,
            selectedPlayer: null,
            showDetails: false
        };
    }
    
    // Method to handle showing player details
    handleShowDetails = (player) => {
        this.setState({
            selectedPlayer: player,
            showDetails: true
        });
    }
    
    // Method to close the details modal
    handleCloseDetails = () => {
        this.setState({
            showDetails: false
        });
    }
    
    render() {
        return (
            <div>
                <PlayersPresentation 
                    players={this.state.players}
                    handleShowDetails={this.handleShowDetails}
                    selectedPlayer={this.state.selectedPlayer}
                    showDetails={this.state.showDetails}
                    handleCloseDetails={this.handleCloseDetails}
                />
            </div>
        );
    }
}
export default Main