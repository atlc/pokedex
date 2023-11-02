import React from "react";
import { Link } from "react-router-dom";

const Pokemon = ({ pokemon }) => {
    return (
        <div className="row justify-content-center">
            {pokemon.map((pikmin) => {
                const id = pikmin.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
                return (
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card my-2 shadow-lg">
                            <div className="bg-danger p-3 rounded-3">
                                <p>
                                    <strong className="text-white">
                                        #{id} {pikmin.name}
                                    </strong>
                                </p>
                            </div>
                            <div className="card-body">
                                <Link className="btn btn-danger m-2" to={`/pokemon/${id}`}>
                                    My page
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Pokemon;
