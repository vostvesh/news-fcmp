const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  },
  imageUrl: {
    type: String,
    require: true
  }
});

module.exports = NewsItem = mongoose.model('news', NewsSchema);
