import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteCard from "./DeleteCard";
import { motion } from "framer-motion";

const Profile = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://event-wave.vercel.app/events");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`https://event-wave.vercel.app/events/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="p-28 pb-12 px-20 w-full flex items-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "9vw" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
          className="mr-2 w-[6vw] h-[4.5vw] mb-2 bg-[url('https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat rounded-md"
        ></motion.div>
        <h1 className="text-[5vw] leading-[4vw] font-semibold uppercase tracking-tighter">
          My Profile
        </h1>
      </div>
      <p className="mb-12 ml-28 text-gray-700">Events posted:</p>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="event-container w-full flex flex-wrap items-center justify-center p-24 pt-0">
          <DeleteCard onDelete={deleteEvent} data={data} />
        </div>
      )}
    </div>
  );
};

export default Profile;
