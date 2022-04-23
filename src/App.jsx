import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Products from "./components/products/Products";


const App = () => {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Products/>
    </div>
  );
}

export default App;
