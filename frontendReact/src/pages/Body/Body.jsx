import React from "react";
import { Home } from "../Home/Home";
import { Routes, Route } from "react-router-dom";
import { BookDetail } from "../BookDetail/BookDetail";


export const Body = () => {

return(
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/book/:id" element={<BookDetail />}/>

        </Routes>
    </>
)


}