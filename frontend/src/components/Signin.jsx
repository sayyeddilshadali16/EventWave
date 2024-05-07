import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignForm = () => {
  const [showCard, setShowCard] = useState(false);
  const handleSignupClick = () => {
    setShowCard(true);
  };
  const handleLoginClick = () => {
    setShowCard(false);
  };
  return (
    <div className="w-full h-[90vh]">
      {showCard ? (
        <LoginCard onLoginClick={handleLoginClick} />
      ) : (
        <SignupCard onSigninClick={handleSignupClick} />
      )}
    </div>
  );
};

const SignupCard = ({ onSigninClick }) => {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!username.match(emailPattern)) {
      setError("Please enter a valid email");
      return;
    } else if (!password.match(passPattern)) {
      setError(
        "Password must be at least 8 characters with numbers, symbols, lowercase, and uppercase letters"
      );
      return;
    }

    try {
      const res = await axios.post("http://localhost:8084/signup", {
        username,
        password,
      });

      if (res.status === 201) {
        history("/createevent");
      }
    } catch (error) {
      console.error("Error creating user:", error.response.data.error);
      setError("Error creating user");
    }
  };
  return (
    <div>
      <div className="p-28 px-20 pb-20 flex items-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "9vw" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
          className="mr-2 w-[6vw] h-[4.5vw] mb-2 bg-[url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat rounded-md"
        ></motion.div>
        <h1 className="text-[5vw] leading-[4vw] font-semibold uppercase tracking-tighter">
          Create account
        </h1>
      </div>
      <div className="signin-form px-28 text-xl leading-10">
        <form action="" onSubmit={handleSignup}>
          <label htmlFor="name">
            Hey! You can create an account by entering your full name
            <input
              type="text"
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Enter your name"
            />
          </label>
          <label htmlFor="email">
            , email is must to creat an account
            <input
              type="email"
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Enter your email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            , don't forget your password
            <input
              type="password"
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Create password"
              onChange={(e) => setPassword(e.target.value)}
            />
            .
          </label>
          {error && (
            <p className="message" style={{ color: "red" }}>
              {error}
            </p>
          )}
          <div className="mt-10 flex items-center justify-end gap-10">
            <p onClick={onSigninClick}>Already have an account?</p>
            <button
              type="submit"
              className="tracking-tighter flex gap-3 items-center px-5 bg-zinc-500 rounded-full text-white uppercase"
            >
              you're done
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const LoginCard = () => {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!username.match(emailPattern)) {
      setError("Please enter a valid email");
      return;
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8084/signup", {
        username,
        password,
      });

      if (res.status === 201) {
        history("/createevent");
        console.log(res.data);
      } else {
        // Handle different responses here
        if (res.status === 401) {
          setError("Invalid username or password");
          // Generate an alert box for password mismatch
          alert("Password does not match");
        } else if (res.status === 500) {
          alert("Internal Server Error");
        }
      }
    } catch (error) {
      console.error("Error signing in:", error.response.data.error);
      setError("Error signing in");
    }
  };
  return (
    <div>
      <div className="p-28 pb-20 px-20 flex items-center">
      <motion.div
          initial={{ width: 0 }}
          animate={{ width: "9vw" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
          className="mr-2 w-[6vw] h-[4.5vw] mb-2 bg-[url('https://images.unsplash.com/photo-1544502062-f82887f03d1c?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat rounded-md"
        ></motion.div>
        <h1 className="text-[5vw] leading-[4vw] font-semibold uppercase tracking-tighter">
          Login to your account
        </h1>
      </div>
      <div className="signin-form px-28 text-xl leading-10">
        <form action="" onSubmit={handleSignin}>
          <label htmlFor="email">
            Hey! want to login to your account, provide us your registered email
            <input
              type="email"
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Enter your email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            , also hit your password
            <input
              type="password"
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            .
          </label>
          {error && (
            <p className="message" style={{ color: "red" }}>
              {error}
            </p>
          )}
          <div className="mt-10 flex items-center justify-end">
            <button
              type="submit"
              className="tracking-tighter flex gap-3 items-center px-5 bg-zinc-500 rounded-full text-white uppercase"
            >
              Get into your account
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignForm;
