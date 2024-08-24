/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { removeFromCart } from "../../redux/actions/RemoveFromCart";
import { joinCourse } from "../../redux/actions/joinCourseAction";

export default function CartCard({ course }) {

    const dispatch = useDispatch();
    const isLoggedin = localStorage.getItem("isLoggedIn");
    console.log(isLoggedin)


    function handleRemoveCourse(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You will remove this course from the cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeFromCart(id))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your course has been removed from the cart.",
                    icon: "success"
                });
            }
        });
    }

    const handleJoinCourse = (course) => {
        dispatch(joinCourse(course))
        dispatch(removeFromCart(course.id));
        Swal.fire({
            title: "Good job!",
            text: "You Joined The Course!",
            icon: "success",
            timer: 1000
        });
    }

    return (
        <div className="mb-3 border-0 border-top pt-4 rounded-0" >
            <div className="row g-2">
                <div className="col-md-4 m-0">
                    <img src={course.image} className="img-fluid rounded-start" alt="course image" />
                </div>
                <div className="col-md-8 d-flex justify-content-between gap-4">
                    <div className="card-body p-0">
                        <h5 className="card-title mb-1">{course.title}</h5>
                        <p className="card-title text-muted">By {course.visible_instructors[0].title}</p>
                        <p className="fw-bold">{course.rating.toFixed(1)} <span className="text-muted">({course.num_reviews} ratings)</span></p>
                        <ul className="d-flex gap-3 p-0 list-unstyled">
                            <li className="text-muted">{course.content_info} |</li>
                            <li className="text-muted">{course.num_lectures} lectures |</li>
                            <li className="text-muted">{course.instructional_level}</li>
                        </ul>
                    </div>

                    <div className="links text-capitalize d-flex flex-column gap-2">
                        <a onClick={() => handleRemoveCourse(course.id)} className="text-decoration-none text-udemy">remove</a>
                        {
                            isLoggedin == "true" && <a onClick={() => handleJoinCourse(course)} className="text-decoration-none text-udemy">Join course</a>
                        }

                    </div>

                    <div className="prices text-muted d-flex flex-column">
                        <h4 className="text-udemy fw-bold">{course.price}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
