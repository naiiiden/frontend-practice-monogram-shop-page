import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";

import console_care from "./images/console_care.png";
import console_care2 from "./images/console_care2.png";
import { useState } from "react";


const App = () => {
  const [hoverImage, setHoverImage] = useState(true);

  return (
    <div>
      <Header/>
      <main>
        <Hero h1Text="A CONSOLE FOR EVERY WORKFLOW" pText="Discover the perfect console for yours."/>
        <section className="console--products">
          <Product href="https://monogramcc.com/shop/products/photo-console/" preOrder={true} productName="Mini Console" price={hoverImage ? "$149" : <button>SHOP NOW</button>} desc="Ideal for photo & video. Adaptable to any workflow." src={hoverImage ? console_care : console_care2} onMouseEnter={() => setHoverImage(!hoverImage)} onMouseLeave={() => setHoverImage(!hoverImage)}/>
          <Product href="https://monogramcc.com/shop/products/photo-console/" preOrder={true} productName="Mini Console" price={hoverImage ? "$149" : <button>SHOP NOW</button>} desc="Ideal for photo & video. Adaptable to any workflow." src={hoverImage ? console_care : console_care2} onMouseEnter={() => setHoverImage(!hoverImage)} onMouseLeave={() => setHoverImage(!hoverImage)}/>
          <Product href="https://monogramcc.com/shop/products/photo-console/" preOrder={true} productName="Mini Console" price={hoverImage ? "$149" : <button>SHOP NOW</button>} desc="Ideal for photo & video. Adaptable to any workflow." src={hoverImage ? console_care : console_care2} onMouseEnter={() => setHoverImage(!hoverImage)} onMouseLeave={() => setHoverImage(!hoverImage)}/>
          <Product href="https://monogramcc.com/shop/products/photo-console/" preOrder={true} productName="Mini Console" price={hoverImage ? "$149" : <button>SHOP NOW</button>} desc="Ideal for photo & video. Adaptable to any workflow." src={hoverImage ? console_care : console_care2} onMouseEnter={() => setHoverImage(!hoverImage)} onMouseLeave={() => setHoverImage(!hoverImage)}/>
        </section>
      </main>
    </div>
  )
}

export default App;