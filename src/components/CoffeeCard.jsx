import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, price, photo } = coffee;

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
      if (result.isConfirmed) {
        //Delete each coffee card
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              // delete the coffee from the state
              const remainingCoffee = coffees.filter((cof) => cof._id != _id);
              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };
  return (
    <div className="w-10/12 mx-auto">
      <div className="card card-side bg-base-100 shadow-sm border-2">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-around w-full mt-8  mb-5">
          <div className="space-y-3">
            <h2 className="">{name}</h2>
            <p>Price : {price}</p>
            <p>Quantity : {quantity}</p>
          </div>

          <div className="card-actions justify-end ">
            <div className="join join-vertical space-y-2">
              <Link to={`coffee/${_id}`}>
                {" "}
                <button className="btn join-item">View</button>
              </Link>
              <Link to={`updatecoffee/${_id}`}>
                {" "}
                <button className="btn join-item">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
