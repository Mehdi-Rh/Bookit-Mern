const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    roomId: {
      type: Number,
      required: true,
      unique: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sqft: {
      type: Date,
      required: false,
    },
    capacity: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: true,
    },
    amenities: {
      type: String,
      required: false,
    },
    availability: {
      type: String,
      required: true,
    },
    price_per_hour: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
