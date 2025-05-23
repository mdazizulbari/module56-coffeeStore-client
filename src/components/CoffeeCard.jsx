import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border">
      <figure>
        <img src={coffee.photo} alt="Movie" />
      </figure>
      <div className="flex justify-around mt-8 w-full">
        <div className="">
          <h2 className="">{coffee.name}</h2>
          <p>Price: {coffee.price}</p>
          <p>Quantity: {coffee.quantity}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <button
              onClick={() => handle(coffee._id)}
              className="btn join-item"
            >
              View
            </button>
            <button
              onClick={() => handle(coffee._id)}
              className="btn join-item"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(coffee._id)}
              className="btn join-item"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
