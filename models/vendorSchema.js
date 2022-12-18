const mongoose = require("mongoose");
const VendorSchema = new mongoose.Schema(
  {
    vendorname: {
      type: String,
      required: true,
      trim: true,
    },
    accountno: {
      type: String,
      trim: true,
      max: 17,
    },
    b_name: {
      type: String,
      trim: true,
    },
    addressline1: {
      type: String,
    },
    addressline2: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vendor", VendorSchema);
