import React from "react";
import HeroSection from "../components/home/HeroSection";

const HomeScreen = () => {
    return (
        <div className="main-page">
            <HeroSection />
            <button>Create Custom Order</button>
            <h2>Our All-Time Favs</h2>
        </div>
    );
};

export default HomeScreen;