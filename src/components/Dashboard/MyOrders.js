import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(
        `https://hidden-fortress-58481.herokuapp.com/booking?buyer=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl">My total order's: {orders.length}</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Tools name</th>
              <th>Model</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {orders.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{a.buyerName}</td>
                <td>{a.toolsItem}</td>
                <td>{a.model}</td>
                <td>
                  {" "}
                  <button className="btn btn-error btn-xs"> Payment</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
