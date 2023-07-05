import {Component} from 'react';
import './Pokecard.css'

class Pokecard extends Component {
    render(){
        const {name, type, id, base_experience} = this.props;
        return(
            <div className='pokecard'>
                <h1 className='pokecard-title'>{name}</h1>
                <img className='pokecard-image' alt={name} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}></img>
                <p className='pokecard-content'>Type: {type}</p>
                <p className='pokecard-content'>Exp: {base_experience}</p>
            </div>
        )
    }
}

export default Pokecard;