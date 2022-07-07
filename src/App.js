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
          {/* <Product href="https://monogramcc.com/shop/products/mini-console/" preOrder={true} productName="Mini Console" price={hoverImage ? "$149" : <button>SHOP NOW</button>} desc="Ideal for everyday shortcuts. Adaptable to any workflow." src={hoverImage ? mini_console : mini_console2} onMouseEnter={(e) => setHoverImage(!hoverImage)} onMouseLeave={() => setHoverImage(!hoverImage)}/>
          <Product href="https://monogramcc.com/shop/products/audio-console/" preOrder={true} productName="Audio Console" price={hoverImage ? "$399" : <button>SHOP NOW</button>} desc="Ideal for music & audio. Adaptable to any workflow." src={hoverImage ? audio_console : audio_console2} onMouseEnter={() => setHoverImage(!hoverImage)} onMouseLeave={() => setHoverImage(!hoverImage)}/>
          <Product href="https://monogramcc.com/shop/products/photo-console/" preOrder={true} productName="Photo Console" price={hoverImage ? "$499" : <button>SHOP NOW</button>} desc="Ideal for photo & video. Adaptable to any workflow." src={hoverImage ? photo_console : photo_console2} onMouseEnter={() => setHoverImage(!hoverImage)} onMouseLeave={() => setHoverImage(!hoverImage)}/>
          <Product href="https://monogramcc.com/shop/products/video-console/" preOrder={true} productName="Video Console" price={hoverImage ? "$799" : <button>SHOP NOW</button>} desc="Ideal for Virtual Production & Film. Adaptable to any workflow." src={hoverImage ? video_console : video_console2} onMouseEnter={() => setHoverImage(!hoverImage)} onMouseLeave={() => setHoverImage(!hoverImage)}/> */}
        </section>
      </main>
    </div>
  )
}

export default App;