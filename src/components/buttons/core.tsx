import { useState } from "react";
import AddressForm from "../AddressForm/addressForm";

export default function CoreDiveBtn({ name }: { name: string }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = (data: boolean) => {
    setShowModal(data);
  };
  return (
    <div>
      <button
        className="btn btn-neutral w-full"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        {name}
      </button>
      {/*For Address*/}
      <div>
        {showModal && (
          <div
            className="fixed bg-black/80 min-h-screen z-10 w-full flex justify-center items-center top-0 left-0 "
            onClick={() => setShowModal(false)}
          >
            <AddressForm handleClose={handleClose} />
          </div>
        )}
      </div>
    </div>
  );
}
