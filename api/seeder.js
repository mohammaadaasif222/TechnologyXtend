import Entry from "./model.js";
import  {entries}  from "./data.js";
import Course from './courseModel.js'
import {courseData} from './courses.js'
import mongoose from "mongoose";
import {connectDatabase} from "./connectDB.js";

async function seedData() {
  try {
    connectDatabase()
    // await Entry.deleteMany({});
    await Course.deleteMany({});
    console.log("Deleted all entries");
    // await Entry.create(entries);
    await Course.create(courseData);
    console.log("Created all entries successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    mongoose.disconnect(); // Disconnect Mongoose connection after seeding
  }
}
seedData();
