import { data } from "../../../data/data";

const Rewards = () => {
  return (
    <ul className={`grid grid-rows-${data.length} gap-8`}>
      {data.map((item) => (
        <li
          key={item.id}
          className="reward p-8 flex flex-col gap-4"
          style={{ opacity: `${item.left === 0 ? ".4" : "1"}` }}
        >
          <div className="flex justify-between">
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="pledge">{item.pledge}</p>
          </div>
          <p>{item.desc}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h2>{item.left}</h2>
              <p>left</p>
            </div>
            <button className={`${item.left === 0 && "bg-gray-500"}`}>
              {item.left === 0 ? "Out of stock" : "Select Reward"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Rewards;
