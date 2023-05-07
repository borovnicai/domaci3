import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import NotFound from "../components/notFound";
import "../components/styles/pokemon_single.styles.css";

const Pokemon = () => {
  const params = useParams();

  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData().then((res) => setPokemon(res));
  }, []);

  async function getData() {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + params.pokemonId
      );
      const data = await res.json();
      return data;
    } catch (err) {
      //
    } finally {
      setIsLoading(false);
    }
  }

  if (!isLoading) {
    return (
      <>
        <Navbar />
        <div className="pokemonSingle">
          <div className="poke-main-wrap">
            <h1>{pokemon.name}</h1>
            {pokemon.sprites.front_default && (
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
          </div>
          <div className="stats">
            <ul>
              <li>Weight: {pokemon.weight}</li>
              <li>Height: {pokemon.height}</li>
              {pokemon.stats.map((stat, index) => {
                return (
                  <li key={index}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                );
              })}
            </ul>
            <h2>Abilities:</h2>
            <ul>
              {pokemon.abilities.map((ab) => (
                <li>{ab.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return <NotFound />;
  }
};

export default Pokemon;
