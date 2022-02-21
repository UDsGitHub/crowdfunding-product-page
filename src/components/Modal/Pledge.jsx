import React from "react";

const Pledge = ({
  title,
  desc,
  pledge,
  baseValue,
  left,
  id,
  clickFunc,
  clickParam,
  activeClass,
}) => {
  const pledgeInputActive = activeClass(clickParam);

  return (
    <div
      className={`modal_pledge ${pledgeInputActive} ${
        left === 0 ? "opacity-50 pointer-events-none" : "opacity-100"
      }`}
      onClick={() => clickFunc(clickParam)}
    >
      <div className={`pledge_top ${pledgeInputActive} flex gap-6`}>
        <input type="radio" name="pledge" className="pledge-radio" id={id} />
        <label htmlFor={id}>
          <div>
            <div className="flex justify-between">
              <div className="flex flex-col md:flex-row gap-3">
                <h3 className="font-bold">{title}</h3>
                {pledge && (
                  <h3 className="pledge_amount font-bold">{pledge}</h3>
                )}
              </div>
            </div>
            <p className="my-4">{desc}</p>
            {left !== null && (
              <div className="pledges_left flex items-center gap-2 mb-6">
                <h3 className="font-bold">{left}</h3>
                <p>left</p>
              </div>
            )}
          </div>
        </label>
      </div>
      <div
        className={`pledge_input_sec flex flex-col gap-4 items-center md:flex-row md:justify-between`}
      >
        <p>Enter your pledge</p>
        <div className="relative flex gap-4">
          <label
            htmlFor="pledge_input"
            className="pledge_input px-6 flex items-center w-28 gap-2"
          >
            <span className="dollar-icon">$</span>
            <input
              className="w-full font-bold"
              type="number"
              id="pledge_input"
              min={baseValue ? baseValue : 0}
              defaultValue={baseValue ? baseValue : 0}
            />
          </label>
          <button className="w-28 py-2.5 flex items-center justify-center">
            <p className="text-white">Continue</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pledge;
