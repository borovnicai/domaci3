import { useEffect, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import PokeCard from "../components/pokemon/PokeCard";
import "../components/styles/home.styles.css";
import ScrollToTop from "../components/UI/ScrollToTop";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  const decreaseOffset = () => {
    if (offset <= 0) return;
    setOffset((offset) => offset - 20);
  };

  const increaseOffset = () => {
    setOffset((offset) => offset + 20);
  };

  useEffect(() => {
    getData().then((res) => setPokemon(res.results));
  }, [offset]);

  async function getData() {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
    );
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
      <div className="navigation">
        <button onClick={decreaseOffset}>&lt;</button>
        <button onClick={increaseOffset}>&gt;</button>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Home;
