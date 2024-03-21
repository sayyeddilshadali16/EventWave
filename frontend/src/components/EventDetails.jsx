import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8084/events/${id}`);
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
      <div className="p-28 pb-20 w-full">
        <h1 className="text-[5vw] leading-[4vw] font-semibold uppercase tracking-tighter">
          Event Details
        </h1>
        <div
          key={event._id}
          className="event-container w-full flex items-center justify-center gap-20 mt-20"
        >
          <div
            className="image-container w-[50%] h-[50vh] bg-cover bg-no-repeat bg-center rounded-xl"
            style={{
              backgroundImage: `url(http://localhost:8084${event.imageurl})`,
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
    </div>
  );
};

export default EventDetails;
