import React, {useState, useContext} from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import "./Modal.css";
import closeBtn from "../../images/icon-close-modal.svg";
import Pledge from "./Pledge";

const Modal = () => {
  const { isOpen, setIsOpen, pledgeState, setPledgeState } =
    useContext(GlobalContext);

  function toggleActivePledge(index){
    setPledgeState({...pledgeState, activeObject: pledgeState.objects[0][index]})
  }

  function toggleActivePledgeInput(index){
    if (pledgeState.objects[0][index] === pledgeState.activeObject){
      return 'active';
    }else{
      return 'inactive';
    }
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div className={`modal ${isOpen ? "active" : "inactive"}`}>
      <img
        src={closeBtn}
        alt="modal close button"
        className="close-modal"
        onClick={closeModal}
      />
      <h2 className="text-2xl mb-4">Back this project</h2>
      <p className="mb-4">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <div className={`flex flex-col gap-8`}>
        {pledgeState.objects[0].map((item, index) => (
          <Pledge
            key={item.id}
            title={item.title}
            desc={item.desc}
            left={item.left}
            pledge={item.pledge}
            baseValue={item.baseVal}
            id={item.id}
            clickFunc={toggleActivePledge}
            clickParam={index}
            activeClass={toggleActivePledgeInput}
          />
        ))}
      </div>
    </div>
  );
};

export default Modal;
