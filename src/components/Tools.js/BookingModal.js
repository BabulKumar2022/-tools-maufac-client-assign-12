import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ toolsItem, setToolsItem, refetch }) => {
  const { _id, name, model, price } = toolsItem;
  const [user, loading, error] = useAuthState(auth);

  const handleBooking = (event) => {
    event.preventDefault();
    console.log(_id, name, model);

    //get information from modal
    const booking = {
      toolsItemId: _id,
      toolsItem: name,
      model: model,
      email: user.email,
      buyerName: user.displayName,
      phone: event.target.phone.value,
    };
    // modal data send to server
    fetch("https://hidden-fortress-58481.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast(`Your  booking for ${name} completed successfully`);
        }
        refetch();
        setToolsItem(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary text-center py-2">
            {" "}
            Booking for: {name}
          </h3>
          <h4 className="font-bold text-lg text-purple-500 text-center py-2">
            {" "}
            Model No: {model}
          </h4>
          <h4 className="font-bold text-lg text-purple-500 text-center py-2">
            Price:$ {price}
          </h4>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-2 justify-items-center"
          >
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Mobile Phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
