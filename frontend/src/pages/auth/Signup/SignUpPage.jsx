import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import { useState } from "react"; // Import useState hook from React

import XSvg from "../../../components/svgs/X"; // Import XSvg component

import { MdOutlineMail } from "react-icons/md"; // Import icons from react-icons library
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const SignUpPage = () => {
  // Initialize form data state with useState hook
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fullName: "",
    password: "",
  });
  const queryClient = useQueryClient();

  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async ({ email, username, fullName, password }) => {
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, username, fullName, password }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to create account");
        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Account created successfully");

      {
        /* Added this line below, after recording the video. I forgot to add this while recording, sorry, thx. */
      }
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // page won't reload
    mutate(formData);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Update form data state
  };

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
            {isPending ? "Loading..." : "Sign up"}
          </button>
          {/* Submit button */}
          {isError && <p className="text-red-500">{error.message}</p>}
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
