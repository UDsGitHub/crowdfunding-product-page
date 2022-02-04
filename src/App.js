import './App.css';
import {Header, Main} from './components/index';
import logo from "./images/favicon-32x32.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <footer className="flex gap-2 items-center">
        <a href="#" className='social-link rounded-full'>
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
