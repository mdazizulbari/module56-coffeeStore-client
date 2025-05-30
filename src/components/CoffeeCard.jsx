import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const handleDelete = (_id) => {
    console.log(_id);
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
        // start deleting
        fetch(
          `https://module56-coffee-store-server-two.vercel.app/coffees/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log("after delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              // remove the coffee from state
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
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
            <Link to={`/coffee/${coffee._id}`}>
              <button className="btn join-item">View</button>
            </Link>
            <Link to={`/updateCoffee/${coffee._id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
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
