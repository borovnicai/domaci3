import './PokeCard.styles.css'
import { Link } from "react-router-dom";

const PokeCard = (props) => {

  const pokemonArray = props.pokemon.url.split("/")
  const pokemonSprite = pokemonArray.slice(pokemonArray.length - 2)[0]

  return (
    <Link className="pokecard" to={`/pokemon/` + props.pokemon.name}>
      <h2>{props.pokemon.name}</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonSprite}.png`} />
    </Link>
  )
}

export default PokeCard