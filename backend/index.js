const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
const port = 8084;
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: [""],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

var db = mongoose.connection;
db.once("open", () => {
  console.log("Database Started");
});

const User = mongoose.model("User", {
  username: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "Username not found" });
    }

    const passwordMatch = bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign(
      { username: user.username },
      "Abcdefghijklmnopqrstuvwxyz0123456789"
    );
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const dataSchema = new mongoose.Schema({
  title: String,
  category: String,
  location: String,
  date: String,
  time: String,
  price: String,
  free: Boolean,
  url: String,
  description: String,
  imageurl: String,
});

const dataModel = mongoose.model("details", dataSchema);

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.filename + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.get("/events", async (req, res) => {
  try {
    const data = await dataModel.find();
    res.json(data).status(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/events/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await dataModel.findById(id);
    res.json(data).status(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/events", upload.single("image"), async (req, res) => {
  const {
    title,
    category,
    location,
    date,
    time,
    price,
    free,
    url,
    description,
  } = req.body;

  const image = req.file;
  try {
    const newItem = new dataModel({
      title,
      category,
      location,
      date,
      time,
      price,
      free,
      url,
      description,
      imageurl: image ? `/uploads/${image.filename}` : "",
    });

    await newItem.save();
    res.json(newItem).status(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/events/:id", upload.single("image"), async (req, res) => {
  const {
    title,
    category,
    location,
    date,
    time,
    price,
    free,
    url,
    description,
  } = req.body;
  const { id } = req.params;
  const image = req.file ? `/uploads/${req.file.filename}` : undefined;

  try {
    const data = await dataModel.findById(id);
    if (!data) {
      return res.json({ message: "data does not found" }).status(404);
    }

    data.title = title;
    data.category = category;
    data.location = location;
    data.date = date;
    data.time = time;
    data.price = price;
    data.free = free;
    data.url = url;
    data.description = description;

    if (image) {
      data.imageurl = image;
    }

    await data.save();
    res.json(data).status(201);
  } catch (error) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

app.delete("/events/:id", async (req, res) => {
  try {
    const item = await dataModel.findById(req.params.id);
    if (!item) {
      res.status(404).json({ message: "Data does not exist" });
    }
    await item.deleteOne({ _id: req.params.id });
    res.json({ message: "Data deleted" });
  } catch (error) {
    console.log(err);
    res.status(500).send("server error");
  }
});

app.listen(port, () => {
  console.log("server started");
});
