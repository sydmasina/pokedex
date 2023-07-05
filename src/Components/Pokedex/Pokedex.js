import { Component } from "react";
import Pokecard from "../Pokecard/Pokecard";
import './Pokedex.css';

class Pokedex extends Component{
    render(){
        const firstHand = this.props.firstHand
        const secondHand = this.props.secondHand
        const exp1 = this.props.exp1
        const exp2 = this.props.exp2
        return(
            <div className="pokedex">
                <h1>Pokedex</h1>
                <div>
                    <h3 className={exp1 > exp2 ? "pokedex-winner" : "pokedex-loser"}>
                        {exp1 > exp2 ? "You are a winner!" : "You lost :("}
                    </h3>
                    <p>Total Exp: {exp2}</p>
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
                    <h3 className={exp2 > exp1 ? "pokedex-winner" : "pokedex-loser"}>
                        {exp2 > exp1 ? "You are a winner!" : "You lost :("}
                    </h3>
                    <p>Total Exp: {exp2}</p>
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

