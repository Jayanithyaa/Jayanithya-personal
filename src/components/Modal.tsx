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
      <div className="bg-white p-3 rounded-lg text-center">
        <h2 className="font-bold text-green-600 my-2 text-xl">Message sent successfully</h2>
        <div>
          <p className="text-gray-500">
            Thank you for contacting us. We will reply to you as soon as possible.
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-blue-500 w-full mt-5 p-2 text-white rounded-lg"
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
