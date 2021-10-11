const { isValidObjectId } = require('mongoose')
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

  res.status(200).send("yay")
}

exports.updateItem = async (req, res) => {

  const {id} = req.params;

  const item = await Item.findOneAndUpdate({ _id: id }, req.body)

  const updatedItem = await Item.findOne({ _id: id })

  res.status(200).send("Uuendan")
  
}

exports.deleteItem = async (req, res) => {

  const { id } = req.params;

  const item = await Item.findOneAndDelete({ _id: id })

  res.status(200).send("Kustutan")
}