const express = require("express");
const bookingRoomModule = require("../modules/bookingRoomModule");

const router = express.Router();

router.get("/rooms", bookingRoomModule.getRooms);
router.post("/create-room", bookingRoomModule.createRoom);
router.post("/book-room", bookingRoomModule.bookingRoom);
router.get("/get-customer-details", bookingRoomModule.getCustomerBookingDetails);

module.exports = router;