import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { htmlToText } from "html-to-text";

export default function CourseDetails() {
  const [details, setDetails] = useState({});
  const [ins, setIns] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/products/${params.id}`)
      .then((res) => {
        console.log(res.data); // Fixed console.log
        setDetails(res.data);
        setIns(res.data.visible_instructors?.[0] || {}); // Set instructor data
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const htmlContent = details.description || "";
  const textContent = htmlToText(htmlContent, { wordwrap: false });

  return (
    <>
      <div
        className=" "
        style={{
          backgroundColor: "#2d2f31",
          width: "100%",
          height: "90vh",
          color: "white",
          alignContent: "center",
          overflow: "hidden",
        }}
      >
        <div className="container row mx-auto justify-content-between">
          <div className="mt-3 col-lg-6 col-md-12">
            <h1>{details.title || "Title not available"}</h1>
            <h6 className="my-3">
              {details.what_you_will_learn_data?.[0] ||
                "Information not available"}
            </h6>
            <span className="my-3 me-1 text-warning fw-bold">
              Rate: {details.rating || "Rating not available"}
            </span>
            <span>({details.num_reviews || "No reviews"} rating)</span>
            <p className="my-3">
              Created by{" "}
              <span className="text-info">
                {ins.display_name || "Instructor not available"}
              </span>
            </p>
            <p>{details.description}</p>
          </div>
          <div className="w-auto col-lg-6 mx-auto col-lg-12   ">
            <div style={{ width: "100%", height: "auto" }}>
              <img
                className=" img-fluid"
                src={"http://localhost:4000/images/" + details.url}
                //   {details.`${"http://localhost:4000/images/" + movie.url}` || "default-image-url.jpg"}
                alt="Course"
              />
            </div>
            <div className="bg-white text-center pb-3">
              <h1 className="text-dark p-3">
                $ {details.price || "Price not available"}
              </h1>
              <button
                className="btn text-white fw-bold btn-lg w-75 ms-2 "
                style={{ backgroundColor: "#a435f0 ", borderRadius: "0" }}
              >
                Add To Cart
              </button>
              <button
                className="btn text-dark border border-1 border-dark fw-bold my-2 btn-lg w-75 ms-2 "
                style={{ backgroundColor: "white", borderRadius: "0" }}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
