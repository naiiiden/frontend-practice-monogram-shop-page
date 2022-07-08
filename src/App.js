import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Consoles from "./Consoles";

const App = () => {

  const consoleElements = Consoles.map(console => {
    return <Product key={console.id} href={console.href} preOrder={console.preOrder} productName={console.name} price={console.price} desc={console.description} src1={console.img1} src2={console.img2}/>
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