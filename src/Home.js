import React from "react";
import Product from "./Product/Product";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home"
          className="home__image"
        />

        <div className="home__row">
          <Product
            title="PS4 1TB Slim Bundled with Spider-Man, GTaSport, Ratchet & Clank And PSN 3Month"
            image="https://rukminim1.flixcart.com/image/352/352/jyg5lzk0/gamingconsole/y/e/r/1000-playstation-pro-1tb-console-marvel-s-spiderman-game-bundle-original-imafgzhafxcsdhty.jpeg?q=70"
            rating={4}
            price={11.99}
          />
          <Product
            title="The Learn Startup"
            image="https://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
            rating={3}
            price={799}
          />
        </div>

        <div className="home__row">
          <Product
            title="Fossil Machine Analog Brown Dial Men's Watch - FS4656"
            image="https://n3.sdlcdn.com/imgs/a/l/3/Fossil-VES-FS4656-Watch-SDL499577149-1-acf45.jpg"
            rating={5}
            price={1099}
          />
          <Product
            title="Tecno Spark 6 Air (Ocean Blue, 3GB RAM, 32GB Storage)"
            image="https://i.gadgets360cdn.com/large/Tecno_spark_6_air_india_launch_small_1596103081770.jpg?downsize=278:209&output-quality=80"
            rating={2}
            price={7999}
          />
          <Product
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case"
            image="data:image/jpeg;base64,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"
            rating={4}
            price={19999}
          />
        </div>

        <div className="home__row">
          <Product
            title="Coirfit Folding Sofa Cum Bed - Perfect for Guests - Jute Fabric Washable Cover(3 Seater) - Grey | 5' X 6' Feet"
            image="https://images-na.ssl-images-amazon.com/images/I/81aXXko-Q8L._SL1500_.jpg"
            rating={3}
            price={7999}
          />

          <Product
            title="Samsung 80 cm (32 Inches) Series 4 HD Ready LED Smart TV UA32N4300AR (Black) (2018 model)"
            image="https://images-na.ssl-images-amazon.com/images/I/91FKnvV4PHL._SX425_.jpg"
            rating={4}
            price={24999}
          />
        </div>
      </div>
    </div>
  );
}
