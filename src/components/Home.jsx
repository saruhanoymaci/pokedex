import React, { useState } from 'react'
import Pokedex from "../pokedex.json"
import "../scss/Home.scss"
import { Link } from "react-router-dom"

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setsearchType] = useState('')
  const data = Pokedex.pokemon


  const filteringName = (array) => {
    return (
      array.filter(
        pokemon => {
          if (pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return (pokemon.name)
          }
        }
      )
    )
  }
  const filteringType = (array) => {
    return (
      array.filter(
        pokemon => {
          if (pokemon.type[0].toLowerCase().includes(searchType.toLowerCase())) {
            return (pokemon.name)
          }
        }
      )
    )
  }
  return (
    <div className='container'>
      <div className='row '>
        <div className='col-md-6 mt-3'>
          <input className="search-name" type="search" placeholder="Search name" onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className='col-md-6 mt-3'>
          <input className="search-type" type="search" placeholder="Search type" onChange={e => setsearchType(e.target.value)} />

        </div>
      </div>
      <div className='row py-4'>
        {
          ((searchTerm === "" ? filteringType(data) : filteringName(data))).map((pokemon) => {
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
                      <h4><b>{pokemon.name}</b></h4>
                      <h6>Height:{pokemon.height}</h6>
                      <h6>Weight:{pokemon.weight}</h6>
                      {pokemonType}

                    </div>
                  </div>
                  <div className='d-flex justify-content-end mb-2 mx-2'>
                    {/* sending data to profile page */}
                    <Link to="/profile" state={{
                      name: pokemon.name,
                      img: pokemon.img,
                      height: pokemon.height,
                      weight: pokemon.weight,
                      type: pokemon.type,
                      candy: pokemon.candy,
                      candy_count: pokemon.candy_count,
                      egg: pokemon.egg,
                      spawn_chance: pokemon.spawn_chance,
                      avg_spawns: pokemon.avg_spawns,
                      spawn_time: pokemon.spawn_time,
                      weaknesses: pokemon.weaknesses,
                      next_evolution: pokemon.next_evolution,
                      prev_evolution: pokemon.prev_evolution

                    }}>
                      <button className='custom-btn'>
                        More..
                      </button>
                    </Link>
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



export default Home