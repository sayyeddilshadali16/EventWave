import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateEvent from "./components/CreateEvent";
import Profile from "./components/Profile";
import EventDetails from "./components/EventDetails";
import BookTicket from "./components/BookTicket";
import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import SignForm from "./components/Signin";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-[#f1f1f1]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/createevent" element={<CreateEvent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignForm />} />
          <Route path="/eventdetails/:id" element={<EventDetails />} />
          <Route path="/bookticket" element={<BookTicket />} />
        </Routes>
        <div className="bg-[#f1f1f1]">
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
