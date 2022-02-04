import { useState } from "react";

const Stats = () => {
  const [amountBacked, setAmountBacked] = useState(89914);
  const [totalBackers, setTotalBackers] = useState(5007);
  const [daysLeft, setDaysLeft] = useState(56);
  let backedAmount = amountBacked.toLocaleString();
  let backersTotal = totalBackers.toLocaleString();

  // Calculate progressbar width based on amount backed
  function getProgressWidth() {
    let newWidth = Math.ceil((amountBacked / 100000) * 100) + "%";
    return newWidth;
  }

  return (
    <div className="main__card_item stats">
      <ul className="grid grid-cols-3">
        <li>
          <h2>${backedAmount}</h2>
          <p>of $100,000 backed</p>
        </li>
        <li>
          <h2>{backersTotal}</h2>
          <p>total backers</p>
        </li>
        <li>
          <h2>{daysLeft}</h2>
          <p>days left</p>
        </li>
      </ul>
      <div className="progressBarTrack">
        <span
          className="progressBar"
          style={{ width: getProgressWidth() }}
        ></span>
      </div>
    </div>
  );
};

export default Stats;
