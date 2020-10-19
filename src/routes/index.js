const express = require('express');
const itemModel = require('../models/item');
const app = express();

// CREATE(all)
app.post('/item', async (req, res) => {
  const item = new itemModel(req.body);
  try {
    await item.save();
    res.send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

// READ: all items
app.get('/items', async (req, res) => {
  const items = await itemModel.find({ });

  try {
    res.send(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

// READ: items by id
app.get('/items/:id', async(req, res) => {
  const item = await itemModel.findById(req.params.id, req.body);
  
  try {
    res.send(item);
  } catch (err) {
    res.status(500).send(err);
  }
})

// UPDATE: updating each item by id
app.patch('/item/:id', async (req, res) => {
  try {
    await itemModel.findByIdAndUpdate(req.params.id, req.body);
    await itemModel.save();
    res.send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});


// DELETE: to remove an item by id we should place an id at the end of url: localhost:3000/food/<someone's id>
app.delete('/item/:id', async (req, res) => {
  try {
    const item = await itemModel.findByIdAndDelete(req.params.id);

    if (!item) res.status(404).send("No item found")
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;