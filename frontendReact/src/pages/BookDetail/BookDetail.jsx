import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookDetail = () => {
  const { id } = useParams(); // Obtener el ID del libro desde la URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        const data = await response.json();

        
        setBook(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book details:", error);
        setLoading(false);
      }
    };

    fetchBookDetail();
  }, [id]);

  if (loading) {
    return <p>Cargando detalles del libro...</p>;
  }

  if (!book) {
    return <p>No se encontraron detalles para este libro.</p>;
  }

  const { volumeInfo } = book;

  return (
    <div className="container">
      <h1>{volumeInfo.title}</h1>
      <img
        src={volumeInfo.imageLinks?.thumbnail}
        alt={volumeInfo.title}
        style={{ maxWidth: "200px" }}
      />
      <p><strong>Autor(es):</strong> {volumeInfo.authors?.join(", ")}</p>
      <p><strong>Descripción:</strong> {volumeInfo.description || "No disponible"}</p>
      <p><strong>Fecha de publicación:</strong> {volumeInfo.publishedDate}</p>
    </div>
  );
};
