import React, { useState } from 'react'
import Pokedex from "../pokedex.json"
import "../scss/Card.scss"

function Card() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className='container'>
            <div className='d-flex justify-content-center mt-3'>
                <input className="form-control" type="search" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className='row py-4'>
                {
                    Pokedex.pokemon.map(
                        pokemon => {
                            let pokemonType;
                            if (pokemon.type[1] == null) {
                                pokemonType = <h6>Type:{pokemon.type[0]}</h6>
                            }
                            else {
                                pokemonType = <h6>Type:{pokemon.type[0]},{pokemon.type[1]}</h6>
                            }
                            return (
                                <div className='col-lg-4 col-md-6 col-sm-12' key={pokemon.id}>
                                    <div className='custom-card '>
                                        <div className='d-flex'><img src={pokemon.img} width={90} height={90} alt={pokemon.name} />
                                            <div>
                                                <h4>{pokemon.name}</h4>
                                                <h6>Height:{pokemon.height}</h6>
                                                <h6>Weight:{pokemon.weight}</h6>
                                                {pokemonType}

                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-end mb-2 custom-button'>
                                            <button className='btn btn-secondary'>
                                                More...
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    )
                }

            </div>
        </div>
    )
}

export default Card