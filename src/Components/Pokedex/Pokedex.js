import { Component } from "react";
import Pokecard from "../Pokecard/Pokecard";
import './Pokedex.css';

class Pokedex extends Component{
    render(){
        const firstHand = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178}
          ]
        const secondHand = [
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
        return(
            <div className="pokedex">
                <h1>Pokedex</h1>
                <div>
                    {
                        firstHand.map(hand=>{
                            return <Pokecard 
                                name={hand.name} 
                                id={('000'+ hand.id).slice(-3)} 
                                type={hand.type}
                                base_experience={hand.base_experience}
                            />
                        })
                    }
                    
                </div>
                <br/>
                <div>
                    {
                        secondHand.map(hand=>{
                            return <Pokecard 
                                name={hand.name} 
                                id={('000'+ hand.id).slice(-3)} 
                                type={hand.type}
                                base_experience={hand.base_experience}
                            />
                        })
                    }
                    
                </div>
                <br/>
            </div>
        )
    }
}

export default Pokedex;

