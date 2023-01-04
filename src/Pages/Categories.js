import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, fetchAllProducts } from "../Redux/reducers/ProductSlice";
import { Link } from "react-router-dom";
const Categories = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    const { products, loading } = useSelector((state) => state.products);
    return (
        <>
            <h6 class="mb-0">
                <Link to={"/"}>
                    <i class="fas fa-long-arrow-alt-left me-2"></i>
                    Back to Homepage
                </Link>
            </h6>
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <h1 className="text-center">All Categories</h1>
                        {loading && <h2 className="text-center">Loading..</h2>}
                        {products &&
                            products.filter((item) => {
                                if (query === "") {
                                    return item;
                                } else if (
                                    item.title.toLowerCase().includes(query.toLowerCase())
                                ) {
                                    return item;
                                }
                            }).map((item) => {
                                return (
                                    <div class="card mx-auto my-4" style={{ width: "18rem" }}>
                                        <img
                                            class="card-img-top img-responsive"
                                            src={`${item.image}`}
                                            alt="Card image cap"
                                        />
                                        <div class="card-body">
                                            <p class="card-text">{item.category}</p>
                                            <p class="card-text">{item.price}</p>
                                            <button
                                                onClick={() => dispatch(AddToCart(item.id))}
                                                className="btn btn-info"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;