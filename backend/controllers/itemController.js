const Item = require('../models/Item');

// @desc    Get all items (For the UserPortal Dropdown)
// @route   GET /api/items
const getItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a new item (For Admins adding stock)
// @route   POST /api/items
const createItem = async (req, res) => {
  try {
    const { name, category, price, available } = req.body;
    const item = new Item({ name, category, price, available });
    const createdItem = await item.save();
    res.status(201).json(createdItem);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getItems, createItem };