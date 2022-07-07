import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";

import Consoles from "./Consoles";

// import mini_console from "./images/mini_console.png";
// import mini_console2 from "./images/mini_console2.png";
// import audio_console from "./images/audio_console.png";
// import audio_console2 from "./images/console_traveler2.png";
// import photo_console from "./images/photo_console.png";
// import photo_console2 from "./images/photo_console2.png";
// import video_console from "./images/video_console.png";
// import video_console2 from "./images/video_console2.png";


import { useState } from "react";


const App = () => {
  const [hoverImage, setHoverImage] = useState(true);

  const consoleElements = Consoles.map(console => {
    return <Product key={console.id} href={console.href} preOrder={console.preOrder} productName={console.name} price={hoverImage ? console.price : <button>SHOP NOW</button>} desc={console.description} src={hoverImage ? console.img1 : console.img2} onMouseEnter={() => setHoverImage(!hoverImage)} onMouseLeave={() => setHoverImage(!hoverImage)}/>
  })

  return (
    <div>
      <Header/>
      <main>
        <Hero h1Text="A CONSOLE FOR EVERY WORKFLOW" pText="Discover the perfect console for yours."/>
        <section className="console--products">
          {consoleElements}
        </section>
      </main>
    </div>
  )
}

export default App;