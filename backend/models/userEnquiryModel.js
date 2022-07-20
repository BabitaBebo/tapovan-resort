const mongoose = require("mongoose");

const userEnquiryschema = new mongoose.Schema({
  userName: {
    type: String,
    // required: [true, "Please enter your Name"]
  },
  email: {
    type: String,
    // required: [true, "Please enter your Email Id"],
  },
  mobile: {
    type: String,
    required: [true, "Please enter your Mobile Number"],
  },

  checkin: {
    type: Date,
    required: true,
  },
  checkout: {
    type: Date,
    required: true,
  },
  howManyPeopleTravel: {
    type: Number,
    required: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserEnquiry", userEnquiryschema);
