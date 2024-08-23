import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar() {


    const cartItemsLenght = useSelector((state) => state.cart.cartItems.length);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="../../public/logo-udemy.png" />
                </Link>
                <form className="d-flex w-50" role="search">
                    <input className="form-control me-2 p-3 border rounded-5" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100 d-flex justify-content-around">

                        <li className="nav-item">
                            <Link className="nav-link text-capitalize fw-medium text-muted active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-capitalize fw-medium text-muted" aria-current="page" to="/">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-capitalize fw-medium text-muted" to="/learning/joined">my learning</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-capitalize fw-medium text-muted" to="/learning/wishlist">
                                <FaRegHeart className="fs-3" />
                            </Link>
                        </li>
                        <li className="nav-item position-relative">
                            <Link className="nav-link text-capitalize fw-medium text-muted" to="/cart">
                                <span style={{ width: "20px", height: "20px" }} className="position-absolute bg-udemy rounded-circle end-0 top-0 text-white d-flex justify-content-center align-items-center p-2">{cartItemsLenght}</span>
                                <IoCartOutline className="fs-3" />
                            </Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>

    )
}