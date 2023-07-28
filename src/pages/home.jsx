import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const images = [
    "/images/burgers.jpeg",
    "/images/fried catfish.jpeg",
    "/images/fried chicken.jpg",
    "/images/oxtail.jpeg",
    "/images/salmon.jpeg",
    "/images/sandwich.webp",
    "/images/tacos.jpeg",
    // Add more image URLs as needed
];

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className="home page">
            <div className="slideshow-container">
                <div className={`slide active`}>
                    <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                </div>
            </div>
            <div>
                <button className="homeBtn" onClick={goToPrevSlide}>Previous</button> 
                <button className="homeBtn" onClick={goToNextSlide}>Next</button>
            </div>
            <h1>Welcome to GOOD EATING</h1>
            <Link className="homeBtn" to="/catalog" type="submit">
                View GOOD EATING
            </Link>
        </div>
    );
}

export default Home;