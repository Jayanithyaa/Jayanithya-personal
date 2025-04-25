import React, { SetStateAction } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed bg-black bg-opacity-50 z-50 w-full h-full flex items-center justify-center top-0 left-0">
      <div className="bg-white/80 p-7 rounded-xl text-center">
        <h2 className="font-bold text-sky-400 my-2 text-xl">Message sent successfully</h2>
        <div>
          <p className="text-gray-500 text-sm">
            Thank you for contacting us.<br/> We will reply to you as soon as possible.
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 w-full mt-5 p-2 text-white rounded-lg"
          >
            Got it
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
