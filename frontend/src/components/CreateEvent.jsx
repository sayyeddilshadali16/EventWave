import React, { useState } from "react";
import axios from "axios";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [free, setFree] = useState(true);
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("location", location);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("price", price);
    formData.append("free", String(free));
    formData.append("url", url);
    formData.append("description", description);
    formData.append("image", imageUrl);
    console.log("FormData:", formData);

    try {
      const response = await axios.post("http://localhost:8084/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
      setTitle("");
      setCategory("");
      setLocation("");
      setDate("");
      setTime("");
      setPrice("");
      setFree(true);
      setUrl("");
      setDescription("");
      setImageUrl("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="p-28 pb-20">
        <h1 className="text-[5vw] leading-[4vw] font-semibold uppercase tracking-tighter">
          Create event
        </h1>
        <p className="mt-20 text-gray-700">Fill the form below:</p>
      </div>
      <div className="form px-28 text-xl leading-10">
        <form action="">
          <label htmlFor="title">
            Hey! Event title is{" "}
            <input
              type="text"
              name="title"
              value={title}
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Enter the event title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
          <label htmlFor="category">
            and the category{" "}
            <input
              type="text"
              name="category"
              value={category}
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Enter event category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </label>
          <label htmlFor="location">
            , event will be held at{" "}
            <input
              type="text"
              name="location"
              value={location}
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Enter event location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </label>
          <label htmlFor="date">
            , by the date{" "}
            <input
              type="date"
              name="date"
              value={date}
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Select date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </label>
          <label htmlFor="time">
            &nbsp; on time{" "}
            <input
              type="time"
              name="time"
              value={time}
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Select time"
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
          </label>
          <label htmlFor="price">
            . Tickets will be for{" "}
            <input
              type="text"
              name="price"
              value={price}
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="$ Enter the price for ticket"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>
          <label htmlFor="free">
            only, if not then it's free{" "}
            <input
              type="checkbox"
              name="free"
              value={free}
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center mr-2"
              onChange={(e) => {
                setFree(e.target.value);
              }}
            />
          </label>
          <label htmlFor="image">
            (make sure to hit the checkbox). Put the event banner{" "}
            <input
              type="file"
              name="image"
              accept="image/*"
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              onChange={(e) => {
                setImageUrl(e.target.files[0]);
              }}
            />
          </label>
          <label htmlFor="url">
            , provide a link to visit and obtain more information about the
            event{" "}
            <input
              type="text"
              name="url"
              value={url}
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="🔗 Enter the link"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </label>
          <label htmlFor="description">
            . The event is about{" "}
            <textarea
              name="description"
              cols="70"
              rows="1"
              value={description}
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Enter event description here"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </label>
          <div className="mt-10 flex items-center justify-end">
            <button
              onClick={handleUpload}
              className="tracking-tighter flex gap-3 items-center px-5 bg-zinc-500 rounded-full text-white uppercase"
            >
              Post Event
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
