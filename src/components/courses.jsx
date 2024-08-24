/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/AddToCartAction";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { addToWishlist } from "../redux/actions/addToWishList";
import Swal from "sweetalert2";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { removeFromWishlist } from "../redux/actions/removeFromWishlistAction";

export default function Courses() {

    const [products, setProducst] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/products").then((res) => {
            setProducst(res.data);
        })
    }, [])


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart.cartItems);
    const joinedCourses = useSelector((state) => state.joined.mylearning);
    const wishCourses = useSelector((state) => state.wishlist.wishItems)

    function handleCart(product) {

        dispatch(addToCart(product));
        Swal.fire({
            title: "Course Added To The Cart!",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#6610F2",
            cancelButtonColor: "#0B5ED7",
            cancelButtonText: "Continue Shopping",
            confirmButtonText: "Go To Cart"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/cart');
            }
        });
    }

    function handleWishList(product) {
        dispatch(addToWishlist(product));
    }

    // const isInWish = (id) => {
    //     const isFound = wishCourses.find((course) => course.id == id);
    // }

    // /////////////////////////////////////


    return (
        <div className="container my-2">
            <div className="row gap-3 justify-content-center align-items-center">
                {products.map((prod) =>
                    <div key={prod.id} className="card" style={{ width: "18rem" }}>
                        <img src={"http://localhost:4000/images/" + prod.url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{prod.title}</h5>
                            {/* <h6 className="card-title text-secondary">{prod.visible_instructors.title}</h6> */}
                            {/*  <p className="card-text">{prod.rice_string}</p> */}
                            <div>

                                {
                                    cartItems.find((item) => item.id == prod.id) ?
                                        <Link to="/cart" className="btn btn-success me-2">
                                            Go to Cart
                                        </Link> :
                                        joinedCourses.find((item) => item.id == prod.id) ?
                                            <Link to="/learning" className="btn text-white btn-udemy me-2">
                                                Go to My Learning
                                            </Link> :
                                            <Fragment>
                                                <button className="btn btn-primary me-2" onClick={() => handleCart(prod)}>
                                                    Add to Cart
                                                </button>

                                                {
                                                    wishCourses.find((course) => course.id == prod.id) ? <button style={{ width: "50px", height: "50px", backgroundColor: "transparent" }} className="d-flex justify-content-center align-items-center rounded-circle" onClick={() => dispatch(removeFromWishlist(prod.id))}>
                                                        <FaHeart className="fs-3" />
                                                    </button> : <button style={{ width: "50px", height: "50px", backgroundColor: "transparent" }} className="d-flex justify-content-center align-items-center rounded-circle" onClick={() => handleWishList(prod)}>
                                                        <FaRegHeart className="fs-3" />
                                                    </button>
                                                }
                                            </Fragment>
                                }

                            </div>
                        </div>
                    </div >

                )}
            </div>
            );
}