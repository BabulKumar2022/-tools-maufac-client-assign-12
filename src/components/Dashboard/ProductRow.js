import React from "react";
import { toast } from "react-toastify";

const ProductRow = ({ product, index, refetch }) => {
  const { name, model, price, photo, email } = product;

  const handleDelete = (email) => {
    fetch(`https://hidden-fortress-58481.herokuapp.com/allProduct/:${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) toast.success("deleted successfully");
        refetch();
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={photo} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{model}</td>
      <td>{price}</td>
      <td>
        <button
          onClick={() => handleDelete(email)}
          className="btn btn-error btn-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
