import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
    const { pizza_id } = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + pizza_id)
            .then((res) => res.json())
            .then((data) => setPokemon(data));
    }, [pizza_id]);

    if (!pokemon) {
        return <h1 className="text-danger text-center">Loading...</h1>;
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
                <div className="card shadow-lg">
                    <div className="bg-danger p-3 rounded-3 text-center">{pokemon.name}</div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card-body">
                                <p>{pokemon.weight / 10} kg</p>
                                <p>{pokemon.height / 10} m</p>
                                <p>Moves:</p>
                                <ul>
                                    {pokemon.moves.map((moveObj) => (
                                        <li>{moveObj.move.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <img
                                // style={{ width: "15vw", height: "auto" }}
                                className="card-img-bottom"
                                src={pokemon.sprites.front_default}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;



