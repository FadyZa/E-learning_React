import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Alert from "@mui/material/Alert";
// card

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import "./card.css";
//

export default function ({ img, title, url, price }) {
  return (
    <>
      <Card
        color="dark"
        className="product-Card"
        sx={{
          // Width: 345,
          Width: "370px",
          overflow: "visible",
          height: "300px",
          backgroundColor: "#fff",
          color: "#333",
          position: "relative",
          boxShadow:
            " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
        }}
      >
        <span
          style={{ right: "-10px", top: "-10px", zIndex: "11" }}
          className=" bg-warning text-dark p-1   rounded border border-1 border-secondary rounded fw-bold position-absolute "
        >
          ${price}
        </span>

        <Link to={url} className="text-decoration-none">
          <CardMedia sx={{ height: 140 }} image={img} title="green iguana" />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h9" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
