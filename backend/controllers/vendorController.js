const Vendor = require('../models/Vendor');

// @desc    Get all vendors (For Admin ManageVendors page)
// @route   GET /api/vendors
const getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find({});
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Add a new vendor
// @route   POST /api/vendors
const createVendor = async (req, res) => {
  try {
    const { name, contact, category } = req.body;
    const vendor = new Vendor({ name, contact, category });
    const createdVendor = await vendor.save();
    res.status(201).json(createdVendor);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getVendors, createVendor };