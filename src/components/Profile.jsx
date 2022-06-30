import { useLocation, Link } from "react-router-dom"
import "../scss/Profile.scss"

function Profile() {
    const location = useLocation()
    let pokemon = location.state
    return (
        <div className='container'>
            <Link to="/">
                <button className="back-button"> <i class="fa-solid fa-arrow-left-long"></i></button>


            </Link>
            <div className="d-flex justify-content-center">
                <div className="custom-card-2">
                    <div className="d-flex justify-content-center">
                        <img src={pokemon.img} alt='profile' height={225} />
                    </div>
                    <h1><b>{pokemon.name}</b></h1>
                    <h3>Height:{pokemon.height}</h3>
                    <h3>Weight:{pokemon.weight}</h3>
                    <h3>Type:{pokemon.type[0]} {pokemon.type[1]}</h3>
                    <h3>Egg:{pokemon.egg}</h3>
                    <h3>Spawn chance: {pokemon.spawn_chance}</h3>
                    <h3>Spawn time: {pokemon.spawn_time}</h3>
                    <h3>Weaknesses : {pokemon.weaknesses[0]} {pokemon.weaknesses[1]} {pokemon.weaknesses[2]} {pokemon.weaknesses[3]}</h3>
                    <h3>Average spawns: {pokemon.avg_spawns}</h3>
                    {pokemon.next_evolution != null ? <h3>Next Evolution : {pokemon.next_evolution[0].name} {pokemon.next_evolution[1] ? pokemon.next_evolution[1].name : null}</h3> : <div></div>}
                    {pokemon.prev_evolution != null ? <h3>Previous Evolution : {pokemon.prev_evolution[0].name} {pokemon.prev_evolution[1] ? pokemon.prev_evolution[1].name : null}</h3> : <div></div>}
                </div>
            </div>
        </div>
    )
}

export default Profile