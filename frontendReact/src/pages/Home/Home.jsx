import React, { useEffect, useState } from "react";
import './Home.css';
import { Container, Row, Col } from "react-bootstrap";
import { BookCard } from "../../common/BookCard/BookCard";

export const Home = () => {
    const [books, setBooks] = useState([]); // Estado para almacenar libros
    const [loading, setLoading] = useState(true); // Estado de carga

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/books/v1/volumes?q=react&maxResults=10`
                );



                const data = await response.json();

                console.log(data);
                setBooks(data.items || []); // Guardar los libros obtenidos
                setLoading(false); // Finalizar estado de carga
            } catch (error) {
                console.error("Error fetching books:", error);
                setLoading(false);
            }
        };

        fetchBooks(); // Llamar a la función de fetch al cargar el componente
    }, []);

    return (
        <div className="homeContainter">

            <Container>
                <Row className="d-flex space-between">
                {loading && <p>Cargando libros...</p>}
                
            <div className="booksContainer">
                {books.map((book) => (
                    <Col>
                        <BookCard
                            id={book.id}
                            image={book.volumeInfo.imageLinks?.thumbnail}
                            title={book.volumeInfo.title}
                            price={book.saleInfo.listPrice?.amount
                                ? `$${book.saleInfo.listPrice.amount}`
                                : "Precio no disponible"}
                        />
                    </Col>
                ))}
            </div>
                </Row>
            </Container>
            {loading && <p>Cargando libros...</p>}
            <div className="booksContainer">
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        image={book.volumeInfo.imageLinks?.thumbnail}
                        title={book.volumeInfo.title}
                        price={book.saleInfo.listPrice?.amount
                            ? `$${book.saleInfo.listPrice.amount}`
                            : "Precio no disponible"}
                    />
                ))}
            </div>
        </div>
    );
};
