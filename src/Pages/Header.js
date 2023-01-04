import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
    const { carts } = useSelector((state) => state.products);

    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setItems(data))
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={"/categories"}>
                    <a className="navbar-brand mx-3" href="#">
                        Categories
                    </a>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto"></ul>
                    <div className="div-inline my-2 my-lg-0">
                        <Link to={"/cart"}>
                            <button
                                className="btn btn-primary my-2 my-sm-0  mx-3"
                                type="submit"
                            >
                                Cart : {carts.length}
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
