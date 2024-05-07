import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import {motion} from "framer-motion";

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://eventwave-sayyeddilshadali.onrender.com/events/${id}`);
        setEvent(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  const formattedTime = (time) => {
    const [hour, minute] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    const formattedHour = date.getHours() % 12 || 12;
    const formattedMinute =
      (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    const period = date.getHours() < 12 ? "AM" : "PM";
    return `${formattedHour}:${formattedMinute} ${period}`;
  };

  return (
    <div className="w-full min-h-screen">
      <div className="pt-28 px-20  w-full flex items-center">
      <motion.div
          initial={{ width: 0 }}
          animate={{ width: "9vw" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
          className="mr-2 w-[6vw] h-[4.5vw] mb-2 bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat rounded-md"
        ></motion.div>
        <h1 className="text-[5vw] leading-[4vw] font-semibold uppercase tracking-tighter">
          Event Details
        </h1>
        </div>
        <div
          key={event._id}
          className="event-container w-full flex items-center justify-center gap-20 p-28"
        >
          <div
            className="image-container w-[50%] h-[50vh] bg-cover bg-no-repeat bg-center rounded-xl"
            style={{
              backgroundImage: `url(https://eventwave-sayyeddilshadali.onrender.com${event.imageurl})`,
            }}
          ></div>
          <div className="detail-container w-[50%] min-h-[50vh]">
            <h1 className="font-bold text-4xl">{event.title}</h1>
            <h1>
              <span className="font-semibold">Category</span> - {event.category}
            </h1>
            <h1>
              <span className="font-semibold">Price</span> - {event.price}
            </h1>
            <h1>
              <span className="font-semibold">Location</span> - {event.location}
            </h1>
            <h1>
              <span className="font-semibold">Date & Time</span> - {event.date}{" "}
              at {formattedTime(event.time)}
            </h1>
            <h1>
              <span className="font-semibold">Description</span> -{" "}
              {event.description}
            </h1>
            <h1>
              <span className="font-semibold">Link</span> - {event.link}
            </h1>
            <div className="mt-10 flex items-center justify-end">
              <Link to="/bookticket">
                <button className="tracking-tighter flex gap-3 items-center px-5 py-2 bg-zinc-500 rounded-full text-white uppercase">
                  Get Ticket
                  <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default EventDetails;
