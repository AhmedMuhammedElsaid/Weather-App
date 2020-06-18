import React from 'react'
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
    return (
        <div className="spinner d-flex align-items-center">
            <h1>Loading...</h1> <br/>
           <Spinner animation='border'/>
        </div>
    )
}
