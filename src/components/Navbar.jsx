import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-secondary">
            <Link className="m-2 btn btn-info" to={"/"}>
                Home
            </Link>
            <Link className="m-2 btn btn-info" to={"/pokemon"}>
                Pokemon
            </Link>
        </div>
    );
};

export default Navbar;
