// import mongoose from "mongoose";
const mongoose = require("mongoose");


const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connect to MongoDB");
    } catch (error) {
        console.log("Connect to MongoDB failed");
    }
};

// export default connectMongoDB;
module.exports = connectMongoDB;
