import React from "react";

const BookingModal = ({toolsItem, setToolsItem}) => {
    const{_id, name, model, quantity} =toolsItem;

const handleBooking = event =>{
    event.preventDefault();
    const model =event.target.model.value;
    const quantity = event.target.quantity.value;
    console.log(_id, name, model, quantity)
    setToolsItem(null)
}


  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg text-secondary text-center py-2"> Booking for: {name}</h3>
         <form onSubmit={handleBooking} className="grid grid-cols-1 gap-2 justify-items-center">
         <select name="model" class="select select-bordered w-full max-w-xs">
         {
             model.map(model=><option value={model}>{model}</option>)
         }
         </select>
         <select name="quantity" class="select select-bordered w-full max-w-xs">
         {
             quantity.map(quantity=><option value={quantity}>{quantity}</option>)
         }
         </select>
         <input type="text" name="name" placeholder="Your name" class="input input-bordered w-full max-w-xs" />
         <input type="email" name="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
         <input type="text"name="phone" placeholder="Mobile Phone" class="input input-bordered w-full max-w-xs" />
         <input type="submit" value="submit" class="btn btn-secondary w-full max-w-xs" />
         </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
