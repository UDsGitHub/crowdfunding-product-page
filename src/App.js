import { useContext } from "react";
import { Header, Main, Modal } from "./components/index";
import { GlobalContext } from "./contexts/GlobalContext";
import "./App.css";
import logo from "./images/favicon-32x32.png";

function App() {
  const { isOpen } = useContext(GlobalContext);

  return (
      <div className="App">
        <Header />
        <Main />
        <Modal />
        <div className={`overlay ${isOpen ? "active" : "inactive"}`}></div>
        <footer className="flex gap-2 items-center">
          <a href="#" className="social-link rounded-full">
            <img src={logo} alt="front-end mentor logo" />
          </a>
          <a href="#" className="social-link my-link flex items-center">
            Udochukwu Amaefule
          </a>
        </footer>
      </div>
  );
}

export default App;
