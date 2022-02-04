import { Master, Stats, About } from "./index";
import "./Main.css";

const Main = () => {
  return (
    <main className="flex justify-center">
      <div className="main__card">
        <Master className="main__card_items"/>
        <Stats  className="main__card_items"/>
        <About  className="main__card_items"/>
      </div>
    </main>
  );
};

export default Main;
