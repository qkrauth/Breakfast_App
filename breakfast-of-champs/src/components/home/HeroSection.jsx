import React from "react";

const HeroSection = () => {
  const sectionStyle = {
    background: `Linear-gradient(190deg, rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)), url(https://www.bevi.co/wp-content/uploads/2020/12/lipton-iced-tea.jpg)`,
    backgroundSize: "cover",
  };

  return (
    <section className="hero" style={sectionStyle}>
      <h2>
        Try our New Favorite
        <br />
        <span className="big-title">Summer Nights</span>
      </h2>
      <button>Try it Today</button>
    </section>
  );
};

export default HeroSection;
