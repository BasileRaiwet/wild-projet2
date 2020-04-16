import React, { Component } from 'react';
import axios from 'axios';

class SearchResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            game: {
                info: {
                    title: ""
                },
                deals: {
                    0 :{
                        price: ""
                    } 
                }
            }
        }
    }

    componentDidMount(){
        this.getGame(this.props.gameID)
    }

    getGame = gameID =>{
        axios.get(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`)
        .then(response => response.data)
        .then(data => {
            const game = data;
            this.setState({ game })
        })
    }
    
    render(){
        return(
            <li>
                <img src={this.props.img}/>
                <div>
                    <h3>{this.state.game.info.title}</h3>
                    <p>{this.state.game.deals[0].price} $</p>
                </div>
            </li>
        )
    }
}

export default SearchResult;