import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import PokemonDetails from "./views/PokemonDetails";

const App = () => {
    const [pokemon, setPokemon] = useState([]);

    async function fetchPokemon() {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        const data = await res.json();
        setPokemon(data.results);
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemon" element={<Pokemon pokemon={pokemon} />} />
                    <Route path="/pokemon/:pizza_id" element={<PokemonDetails />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
