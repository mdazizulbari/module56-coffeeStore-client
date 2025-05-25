import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );
    // const email = formData.get("email");
    // const password = formData.get("password");
    // create user in firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        console.log(email, password, userProfile);
        // save profile info in db
        fetch("https://module56-coffee-store-server-two.vercel.app/users/", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account is created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          {/* name */}
          <input name="name" type="text" className="input" placeholder="Name" />
          <input
            name="phone"
            type="text"
            className="input"
            placeholder="Phone Number"
          />
          {/* photo */}
          <input
            name="photo"
            type="text"
            className="input"
            placeholder="Photo URL"
          />
          {/* address */}
          <input
            name="address"
            type="text"
            className="input"
            placeholder="Address"
          />
          {/* email */}
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />
          {/* pass */}
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
