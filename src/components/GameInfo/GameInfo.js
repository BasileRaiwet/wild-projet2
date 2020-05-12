import React, { Component } from 'react';
import Image from './Image';
import PriceList from './PricesList/PriceList';
import RatingNotes from './RatingNotes';
import './GameInfo.css'

class GameInfo extends Component {
   render() {
      const { deals, thumb } = this.props.location.state.game
      const { title } = this.props.location.state.game.info
      const { addFav } = this.props
      const {dealID, price} = deals[0]
      const { gameID } = this.props.match.params


    return(
        
            <div className="game-main"> 
                <Image imgurl={thumb} title={title} />
                <div className="game-main-deals">
                    <button className='fav-btn' onClick={() => addFav(gameID, title, price)}>Follow this game</button>
                    <RatingNotes dealID={dealID} />
                    <PriceList deals={deals} /> 
                </div>
             </div>
        );
    }
}

export default GameInfo