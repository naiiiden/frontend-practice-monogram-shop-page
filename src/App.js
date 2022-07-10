import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Consoles from "./Consoles";
import Banner from "./components/Banner";
import Addons from "./Addons";
import Footer from "./components/Footer";

const App = () => {

  const consoleElements = Consoles.map(console => {
    return <Product key={console.id} href={console.href} preOrder={console.preOrder} productName={console.name} price={console.price} desc={console.description} src1={console.img1} src2={console.img2}/>
  })

  const addonElements = Addons.map(addon => {
    return <Product key={addon.id} href={addon.id} preOrder={addon.preOrder} productName={addon.name} price={addon.price} src1={addon.img1} src2={addon.img2}/>
  })

  return (
    <div>
      <Header/>
      <main>
        <Hero h1Text="A CONSOLE FOR EVERY WORKFLOW" pText="Discover the perfect console for yours." href="#products"/>
        <section className="console--products" id="products">
          {consoleElements}
        </section>
        <Banner h2Text="CREATE YOUR OWN CONSOLE" pText="Add-on to make it perfect."/>
        <section className="addons--products">
          {addonElements}
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default App;