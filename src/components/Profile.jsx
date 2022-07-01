import { useLocation, useNavigate } from "react-router-dom"
import "../scss/Profile.scss"

function Profile() {
    const location = useLocation()
    let pokemon = location.state
    let navigate = useNavigate();
    return (
        <div className='container'>
            <button className="back-button" onClick={() => navigate(-1)}> <i class="fa-solid fa-arrow-left-long"></i></button>
            <div className="d-flex justify-content-center">
                <div className="custom-card-2">
                    <div className="d-flex justify-content-center">
                        <img src={pokemon.img} alt='profile' height={225} />
                    </div>
                    <h1 className="pokemon-name"><b>{pokemon.name}</b></h1> <br />
                    <h3><b>Height :</b> {pokemon.height}</h3>
                    <h3><b>Weight :</b> {pokemon.weight}</h3>
                    <h3><b>Type :</b> {pokemon.type[0]} {pokemon.type[1]}</h3>
                    <h3><b>Egg : </b>{pokemon.egg}</h3>
                    <h3><b>Spawn Chance :</b> {pokemon.spawn_chance}</h3>
                    <h3><b>Spawn Time :</b> {pokemon.spawn_time}</h3>
                    <h3><b>Weaknesses : </b>{pokemon.weaknesses[0]} {pokemon.weaknesses[1]} {pokemon.weaknesses[2]} {pokemon.weaknesses[3]}</h3>
                    <h3><b>Average Spawns :</b> {pokemon.avg_spawns}</h3>
                    {pokemon.next_evolution != null ? <h3><b>Next Evolution : </b>{pokemon.next_evolution[0].name} {pokemon.next_evolution[1] ? pokemon.next_evolution[1].name : null}</h3> : <div></div>}
                    {pokemon.prev_evolution != null ? <h3><b>Previous Evolution : </b>{pokemon.prev_evolution[0].name} {pokemon.prev_evolution[1] ? pokemon.prev_evolution[1].name : null}</h3> : <div></div>}
                </div>
            </div>
        </div>
    )
}

export default Profile