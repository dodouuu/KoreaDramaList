const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KoreaDramaListSchema = new Schema({
  name: { type: String, required: false },
  name_en: { type: String, required: false },
  year: { type: String, required: true },
  episode: { type: String, required: true },
  img: { type: String, required: false },
  labels: []
})

module.exports = mongoose.model('KoreaDramaList', KoreaDramaListSchema)
