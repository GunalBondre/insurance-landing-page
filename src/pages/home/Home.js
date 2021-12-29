import React from "react";
import Banner from "../../components/banner/Banner";
import Hero from "../../components/hero/Hero";
import Different from "../../components/we are different/Different";
import "./home.scss";
const Home = () => {
  return (
    <div>
      <Hero />
      <section className="section-1">
        <Different />
      </section>
      <section className="section-2">
        <Banner />
      </section>
    </div>
  );
};

export default Home;
