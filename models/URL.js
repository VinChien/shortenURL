// 載入 mongoose
const mongoose = require('mongoose');
// Mongoose 提供了一個 mongoose.Schema 模組
const Schema = mongoose.Schema;
// 可以用 new Schema() 的方式來建構一個新的 Schema
const urlSchema = new Schema({
  shortURL: { type: String, required: true },
  originalURL: { type: String, required: true },
});
// 透過 module.exports 輸出
module.exports = mongoose.model('URL', urlSchema);
