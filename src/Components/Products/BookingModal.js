import moment from "moment";
import React, { useContext } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "../../Contexts/AuthProvider";

const BookingModal = ({ product, setProduct }) => {
  const { company, model, sell_price, picture } = product;
  let date = moment().format("MM-DD-YY");
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const price = form.price.value;

    const booking = {
      bookingDate: date,
      product: company,
      model,
      picture,
      name,
      location,
      email,
      phone,
      price,
    };

    console.log(booking);
    fetch(`${process.env.REACT_APP_URL}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setProduct(null);
          toast.success("Your Booking has been confirmed");
          // refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-around">
            <h3 className="text-lg font-bold">
              {company} <span className="text-orange-400">{model}</span>
            </h3>
            <span className="text-lg font-bold">
              <img src={picture} alt="" />
            </span>
          </div>
          <div></div>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              value={date}
              className="input w-full input-bordered "
            />
            <input
              type="text"
              name="price"
              disabled
              defaultValue={sell_price}
              className="input w-full input-bordered "
            />

            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Please Write a meeting location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
