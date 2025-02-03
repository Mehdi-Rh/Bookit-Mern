const express = require("express");
const router = express.Router();

const {
  createRoom,
  getRoom,
  getRooms,
  deleteRoom,
  updateRoom,
} = require("../controllers/roomsController");

// const requireAuth = require("../middleware/requireAuth");

// router.use(requireAuth);

// Get all rooms
router.get("/", getRooms);

// Get a specific room
router.get("/:id", getRoom);

// POST a new room
router.post("/", createRoom);

// Delete a room
router.delete("/:id", deleteRoom);

// Update a room
router.patch("/:id", updateRoom);

module.exports = router;
