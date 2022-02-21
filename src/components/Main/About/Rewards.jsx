import { useContext } from "react";
import { data } from "../../../data/data";
import { GlobalContext } from "../../../contexts/GlobalContext";

const Rewards = () => {
  const { isOpen, setIsOpen, pledgeState, setPledgeState } =
    useContext(GlobalContext);

  function toggleActivePledge(index) {
    setIsOpen(true);
    setPledgeState({
      ...pledgeState,
      activeObject: pledgeState.objects[0][index],
    });
  }

  return (
    <ul className={`grid grid-rows-${data.length - 1} gap-8`}>
      {data.map((item, index) => {
        if (index > 0) {
          return (
            <li
              key={item.id}
              className="reward p-8 flex flex-col justify-between gap-4"
              style={{ opacity: `${item.left === 0 ? ".4" : "1"}` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="pledge">{item.pledge}</p>
              </div>
              <p>{item.desc}</p>
              <div className="flex flex-col items-start gap-4 md:gap-0 md:flex-row md:justify-between md:items-center">
                <div className="flex items-center gap-2">
                  <h2>{item.left}</h2>
                  <p>left</p>
                </div>
                <button
                onClick={() => toggleActivePledge(index)}
                  className={`${
                    item.left === 0 && "bg-gray-500 pointer-events-none"
                  } w-auto`}
                >
                  {item.left === 0 ? "Out of stock" : "Select Reward"}
                </button>
              </div>
            </li>
          );
        }else{
          return(null);
        }
      })}
    </ul>
  );
};

export default Rewards;
