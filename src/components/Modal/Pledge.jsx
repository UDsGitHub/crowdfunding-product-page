import React, { useState } from "react";

const Pledge = ({ title, desc, pledge, baseValue, left, id, clickFunc, clickParam, activeClass}) => {
  const pledgeInputActive = activeClass(clickParam);

  return (
    <div className={`modal_pledge`} onClick={() => clickFunc(clickParam)}>
      <div className={`pledge_top ${pledgeInputActive} flex gap-6`}>
        <input type="radio" name="pledge" className="pledge-radio" id={id} />
        <label htmlFor={id}>
          <div>
            <div className="flex justify-between">
              <div className="flex gap-3">
                <h3 className="font-bold">{title}</h3>
                {pledge && (
                  <h3 className="pledge_amount font-bold">{pledge}</h3>
                )}
              </div>
              {left >= 0 && (
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">{left}</h3>
                  <p>left</p>
                </div>
              )}
            </div>
            <p className="mt-4 mb-6">{desc}</p>
          </div>
        </label>
      </div>
      <div
        className={`pledge_input_sec flex flex-col items-center md:flex-row md:justify-between`}
      >
        <p>Enter your pledge</p>
        <div className="relative flex flex-col md:flex-row gap-4">
          <span className="dollar-icon">$</span>
          <input
            type="number"
            className="pledge_input"
            min={baseValue ? baseValue : 0}
            defaultValue={baseValue ? baseValue : 0}
          />
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Pledge;
