import React, { useState, useContext} from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import logo from "../../images/logo-mastercraft.svg";

const Master = () => {
  const {isOpen, setIsOpen} = useContext(GlobalContext);
  const [isBookmarked, setisBookmarked] = useState(false);

  function handleBookmark(e) {
    setisBookmarked((prevState) => !prevState);
    e.currentTarget.classList.toggle('active');
  }

  return (
    <div className="main__card_item master text-center">
      <img src={logo} alt="mastercraft logo" className="logo block mx-auto" />
      <h1 className="text-3xl font-bold my-4">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="text-lg">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="mt-8 flex justify-center gap-2 md:gap-0 md:justify-between">
        <button className="backprj font-bold" onClick={() => setIsOpen(true)}>Back this project</button>
        <button className="bookmark" onClick={handleBookmark}>
          <svg
            className="bookmark_icon"
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
          <span className="font-bold hidden md:inline-block">{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
        </button>
      </div>
    </div>
  );
};

export default Master;
