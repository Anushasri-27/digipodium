const { Schema, model } = require("../connection");

const userSchema = new Schema({
  name: String,
  model: String,
  price: String,
  stock: String,
});

module.exports = model("product", userSchema);
