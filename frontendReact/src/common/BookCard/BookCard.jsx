import React from "react";
import './BookCard.css';
import { Navigate, useNavigate } from "react-router-dom";

export const BookCard = ({id, image, title, price }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/book/${id}`);
      };

    return (
        <div className="card" onClick={handleClick} cursor= "pointer">
            <div className="img">
                {image ? (
                    <img src={image} alt={title} className="productPicture" />
                ) : (
                    <p>Imagen no disponible</p>
                )}
            </div>
            <div className="title">{title}</div>
            <div className="price">{price}</div>
        </div>
    );
};
