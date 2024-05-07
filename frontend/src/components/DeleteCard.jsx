import React, { useState } from "react";
import { motion } from "framer-motion";

const Cards = ({ data, onDelete }) => {
  const [selected, setSelected] = useState(null);

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

  const Modal = ({ selected, setSelected }) => {
    if (!selected) {
      return <div></div>;
    }

    return (
      <div
        onClick={() => setSelected(null)}
        className="fixed inset-0 bg-transparent backdrop-blur-sm z-50 cursor-pointer overflow-y-scroll"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-[700px] mx-auto my-8 px-8 cursor-default"
        >
          <motion.div layoutId={`card-${selected.id}`}>
            <img
              className="rounded-2xl"
              src={`http://localhost:8084${selected.imageurl}`}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-white p-4 rounded-2xl mt-2"
          >
            <h3 className="text-2xl font-bold mb-2 uppercase tracking-tighter">
              {selected.title} - {selected.category}
            </h3>

            <p>{selected.description}</p>
            <div className="flex items-center gap-6">
              <p className="my-4 border-[1px] border-zinc-400 font-light rounded-full py-1 px-3">
                Rs.{selected.price}.00
              </p>
              <p className="my-4 border-[1px] border-zinc-400 font-light rounded-full py-1 px-3">
                {selected.date} at {formattedTime(selected.time)}
              </p>
            </div>

            <button
              onClick={() => onDelete(selected._id)}
              className="tracking-tighter flex gap-3 items-center px-5 py-1 bg-red-800 rounded-full text-white uppercase"
            >
              Delete Event
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </motion.div>
        </div>
      </div>
    );
  };

  const Card = ({ setSelected, item }) => {
    return (
      <div className="inline-block w-full mb-4">
        <motion.img
          whileHover={{
            scale: 1.025,
            transition: {
              duration: 0.2,
            },
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => {
            setSelected(item);
          }}
          layoutId={`card-${item._id}`}
          src={`http://localhost:8084${item.imageurl}`}
          className="w-full bg-base-100 image-full cursor-pointer rounded-xl"
        />
        <div className="text-center bg-gray-300 p-2 rounded-xl mt-2">
          <div className="badge border-none mr-1 mb-1">
            <p>
              <span className="uppercase font-bold">{item.title}</span> -{" "}
              {item.category}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const List = ({ setSelected, data }) => {
    return (
      <div className="p-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((item) => (
            <Card key={item._id} setSelected={setSelected} item={item} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <List setSelected={setSelected} data={data} />
      <Modal selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Cards;
