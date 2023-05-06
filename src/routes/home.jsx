import { useEffect, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import PokeCard from "../components/pokemon/PokeCard";
import "../components/styles/home.styles.css";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getData().then((res) => setPokemon(res.results));
  });

  async function getData() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20`);
    const data = await res.json();
    return data;
  }

  return (
    <div>
      <Navbar />
      <h1>
        Pick your <span>Pokemon</span>
      </h1>
      <Container>
        {pokemon.map((p, index) => (
          <PokeCard key={index} pokemon={p} />
        ))}
      </Container>
    </div>
  );
};

export default Home;
