// Import required modules and packages
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const port = process.env.PORT || 8000;

// Import the database connection function
import connectDB from "./config/db.js";

// Create an Express app instance
const app = express();

const corsOptions = {
  origin: ["*", "http://localhost:5173","http://localhost:5173","https://blood-bank-app-one.vercel.app"],
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true,
};
app.use(cors(corsOptions));

// Parse incoming JSON and url-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse cookies from the request
app.use(cookieParser());

import apiRoutes from "./routes/index.js";
app.use("/api", apiRoutes);

app.use("/", (req, res) => {
  res.json("BloodBank Server");
});

const start = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Start the server and listen on the specified port
    app.listen(port, () => console.log(`Server is listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
