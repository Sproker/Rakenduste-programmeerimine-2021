const Item = require('../models/Item')

exports.getItems = async (req, res) => {
  const items = await Item.find({})
  
  res.status(200).send(items)
}

exports.createItem = async (req, res) => {
  const newItem = {
    name: "Table",
    quality: 99,
    unused: true,
    color: "blue"
  }

  const createdItem = new Item(newItem)

  const savedItem = createdItem.save()

  res.status(200).send(`yay ${savedItem._id}`)
}

exports.updateItemAddPlus1 = async (req, res) => {
  
  const { id } = req.params

  const item2 = await Item.findOne({_id: id});

  const item = await Item.findOneAndUpdate({ _id: id} ,{ $set: { quality: item2.quality + 1}})

  console.log(item)

  res.status(200).send(`uuendatud ${item._id}`)
}

exports.updateItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findOneAndUpdate({ _id: id }, req.body)

  if (!item) res.status(404).send("No item with that id found")

  const updatedItem = await Item.findOne({ _id: id })

  res.status(200).send(`Successfully updated: \n ${updatedItem}`)
}

exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findOneAndDelete({ _id: id })

  console.log(item)

  res.status(200).send(`Successfully deleted: \n ${item}`)
}