import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import { useState } from "react"; // Import useState hook from React

import XSvg from "../../../components/svgs/X"; // Import XSvg component

import { MdOutlineMail } from "react-icons/md"; // Import icons from react-icons library
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";

const SignUpPage = () => {
  // Initialize form data state with useState hook
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fullName: "",
    password: "",
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(formData); // Log form data to the console
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Update form data state
  };

  const isError = false; // Placeholder for error handling

  return (
    <div className="max-w-screen-xl mx-auto flex h-screen px-10">
      {/* Left side with XSvg, visible only on large screens */}
      <div className="flex-1 hidden lg:flex items-center justify-center">
        <XSvg className="lg:w-2/3 fill-white" />
      </div>
      {/* Right side with form */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <form
          className="lg:w-2/3 mx-auto md:mx-20 flex gap-4 flex-col"
          onSubmit={handleSubmit}
        >
          <XSvg className="w-24 lg:hidden fill-white" />{" "}
          {/* XSvg for mobile view */}
          <h1 className="text-4xl font-extrabold text-white">
            Join today.
          </h1>{" "}
          {/* Form heading */}
          {/* Email input */}
          <label className="input input-bordered rounded flex items-center gap-2">
            <MdOutlineMail /> {/* Email icon */}
            <input
              type="email"
              className="grow"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
            />
          </label>
          <div className="flex gap-4 flex-wrap">
            {/* Username input */}
            <label className="input input-bordered rounded flex items-center gap-2 flex-1">
              <FaUser /> {/* Username icon */}
              <input
                type="text"
                className="grow"
                placeholder="Username"
                name="username"
                onChange={handleInputChange}
                value={formData.username}
              />
            </label>

            {/* Full Name input */}
            <label className="input input-bordered rounded flex items-center gap-2 flex-1">
              <MdDriveFileRenameOutline /> {/* Full Name icon */}
              <input
                type="text"
                className="grow"
                placeholder="Full Name"
                name="fullName"
                onChange={handleInputChange}
                value={formData.fullName}
              />
            </label>
          </div>
          {/* Password input */}
          <label className="input input-bordered rounded flex items-center gap-2">
            <MdPassword /> {/* Password icon */}
            <input
              type="password"
              className="grow"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </label>
          <button className="btn rounded-full btn-primary text-white">
            Sign up
          </button>{" "}
          {/* Submit button */}
          {isError && <p className="text-red-500">Something went wrong</p>}{" "}
          {/* Error message */}
        </form>

        {/* Link to sign-in page */}
        <div className="flex flex-col lg:w-2/3 gap-2 mt-4">
          <p className="text-white text-lg">Already have an account?</p>
          <Link to="/login">
            <button className="btn rounded-full btn-primary text-white btn-outline w-full">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
