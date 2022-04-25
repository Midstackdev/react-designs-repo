import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Products from "./components/products/Products";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "#fff", color: darkMode && "white" }}>
      <Toggle/>
      <Intro/>
      <About/>
      <Products/>
      <Contact/>
    </div>
  );
}

export default App;
