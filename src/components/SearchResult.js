import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

class SearchResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            game: {
                info: {
                    title: ""
                },
                deals: {
                    0: {
                        price: ""
                    } 
                }
            }
        }
    }

    componentDidMount(){
        this.getGame(this.props.gameID)
    }

    getGame = gameID => {
        axios.get(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`)
        .then(response => response.data)
        .then(data => {
            const game = data;
            this.setState({ game })
        })
    }
    
    render(){
        const { game } = this.state;
        const { gameID } = this.props
        return(
            <Link to={`/${gameID}`}>
                <img alt={game.info.title} src={this.props.thumb}/>
                <div>
                    <h3>{game.info.title}</h3>
                    <p>{game.deals[0].price} $</p>
                </div>
            </Link>
        )
    }
}

export default withRouter(SearchResult);