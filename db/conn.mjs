// db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const db = mongoose.connection;

export default db;

// import { MongoClient } from "mongodb";
// import dotenv from 'dotenv';
// dotenv.config();

// const uri = process.env.MONGO_URI;
// const client = new MongoClient(process.env.ATLAS_URI);

// let conn;
// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }

// let db = conn.db("sample_training");

// export default db;
