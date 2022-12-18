const router = require("express").Router();
//import Vendor schema model
const VendorSchema = require("../models/vendorSchema");

//create first route to add Vendor to database
router.post("/api/createvendor", async (req, res) => {
  try {
    const newItem = new VendorSchema({
      vendorname: req.body.vendorname,
      accountno: req.body.accountno,
      b_name: req.body.b_name,
      addressline1: req.body.addressline1,
      addressline2: req.body.addressline2,
      city: req.body.city,
      country: req.body.country,
      zipCode: req.body.zipCode,
    });
    //save this item in database
    const saveItem = await newItem.save();
    res.status(200).json({ message: "Vendor added successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
});

//create second route -- get data from database
router.get("/api/vendor", async (req, res) => {
  try {
    const allVendorLists = await VendorSchema.find({});
    res.status(200).json(allVendorLists);
  } catch (err) {
    res.json({ message: err.message });
  }
});
//create second route -- get data from database
router.get("/api/vendor/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await VendorSchema.findById(id);

    res.json({
      success: true,
      user,
    });
    // const allVendorLists = await VendorSchema.find({});
    // res.status(200).json(allVendorLists);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//update item
router.put("/api/vendor/:id", async (req, res) => {
  try {
    //find the item by it's id and update it
    await VendorSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({ message: "Record updated successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
});

//Delete item from database
router.delete("/api/vendor/:id", async (req, res) => {
  try {
    //find the item by its id and delete it
    const deleteItem = await VendorSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Record Deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
});

//export router
module.exports = router;
