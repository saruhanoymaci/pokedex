import React, { useState } from 'react'
import Pokedex from "../pokedex.json"
import "../scss/Home.scss"
import { Link } from "react-router-dom"

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setsearchType] = useState('')
  const [searchHeight, setSearchHeight] = useState(0);
  const [searchWeight, setsearchWeight] = useState(0);
  return (
    <div className='container'>
      <div className='row '>
        <div className='col-md-6 mt-3'>
          <input className="form-control" type="search" placeholder="Search name" onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className='col-md-6 mt-3'>
          <input className="form-control" type="search" placeholder="Search type" onChange={e => setsearchType(e.target.value)} />
        </div>
        <div className='col-md-6 mt-3'>
          <input className="form-control" type="number" placeholder="Search height" onChange={e => setSearchHeight(e.target.value)} />
        </div>
        <div className='col-md-6 mt-3'>
          <input className="form-control" type="number" placeholder="Search height" onChange={e => setsearchWeight(e.target.value)} />
        </div>
      </div>
      <div className='row py-4'>
        {
          Pokedex.pokemon.filter(
            pokemon => {
              if (searchTerm == "" && searchHeight == "" && searchWeight == "" && searchType == "") {
                return (pokemon.name)
              }
              else if (pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) && pokemon.weight.includes(searchWeight) && pokemon.type[0].toLowerCase().includes(searchType.toLowerCase())) {
                return (pokemon.name)
              }
            }
          ).map((pokemon) => {
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
                    <Link to="/profile">
                      <button className='btn btn-primary'>
                        More...
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}



export default Home