/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../../redux/actions/RemoveFromCart";
import { loadStripe } from "@stripe/stripe-js";
import { joinCourse } from "../../redux/actions/joinCourseAction";
import Swal from "sweetalert2";
import CartCard from "./cartCard";
import { Fragment } from "react";
import { Btn } from "../../components/btn";


export function CartPage() {


    // const [products, setProducst] = useState([]);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const totalPrice = cartItems.reduce((acc, product) => {
        acc += product.price_detail.amount
        return acc;
    }, 0)




    // const handleJoinCourse = (course) => {
    //     dispatch(joinCourse(course))
    //     dispatch(removeFromCart(course.id));
    //     Swal.fire({
    //         title: "Good job!",
    //         text: "You Joined The Course!",
    //         icon: "success"
    //     });
    // }

    return (
        <div className="container mt-3">
            <h2 className="text-capitalize display-4 fw-bold mb-5">shopping Cart</h2>
            <h3 className="text-capitalize fw-bold mt-3 mb-0">{cartItems.length} Courses in Cart</h3>
            <div className="row justify-content-between align-items-start">

                <div className="col-8" >
                    {
                        cartItems.length > 0 &&
                        cartItems.map((course) =>
                            <CartCard key={course.id} course={course} />
                        )
                    }
                </div>

                {
                    cartItems.length > 0 && <div className="col-3 border-bottom pb-4">
                        <h4 className="fw-bold text-muted text-capitalize">total:</h4>
                        <h3 className="text-uppercase display-5 fw-bold">${totalPrice}</h3>
                        <Btn content={"checkout"} width={"w-100"} />
                    </div>
                }


                {
                    cartItems.length < 1 && <div className="container border shadow p-3 d-flex flex-column justify-content-center align-items-center gap-3 my-3">
                        <div>
                            <img src="../../../public/empty-shopping-cart.jpg" />
                        </div>
                        <h4>Your cart is empty. Keep shopping to find a course! </h4>
                        <Btn content={"keep shopping"} href="/" />
                    </div>
                }



            </div>
        </div >
    )

    //     return (
    //         <div className="container">
    //             <div className="row gap-3 justify-content-center align-items-center">

    //                 <h2>{totalPrice.toFixed(2)}</h2>
    //                 {
    //                     cartItems.length > 0 ?
    //                         cartItems.map((course) =>
    //                             <div key={course.id} className="card" style={{ width: "18rem" }}>
    //                                 <img src={course.image} className="card-img-top" alt="..." />
    //                                 <div className="card-body">
    //                                     <span className="badge text-bg-secondary">{course.quantity}</span>
    //                                     <h5 className="card-title">{course.title}</h5>
    //                                     <h6 className="card-title text-secondary">{course.visible_instructors.title}</h6>
    //                                     <p className="card-text">{course.price_detail.price_string}</p>
    //                                     <a className="btn btn-danger me-2" onClick={() => handleRemoveCourse(course.id)}>remove from Cart</a>
    //                                 </div>
    //                                 <a className="btn btn-success me-2" onClick={() => handleJoinCourse(course)}>Join</a>
    //                             </div >
    //                         )
    //                         : <p>No Products</p>
    //                 }


    //             </div>
    //         </div>
    //     )
}