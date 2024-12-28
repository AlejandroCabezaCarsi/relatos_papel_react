import React from "react";
import './BookCard.css';

export const BookCard = ({ image, title, price }) => {
    return (
        <div className="card">
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
