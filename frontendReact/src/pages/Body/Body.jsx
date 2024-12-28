import React from "react";
import { Home } from "../Home/Home";
import { Routes, Route } from "react-router-dom";


export const Body = () => {

return(
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </>
)


}