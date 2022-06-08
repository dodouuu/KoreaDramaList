// 引用 Schema
const KoreaDramaList = require('../../models/KoreaDramaList')

const dramaList = require('../../drama.json').dramas

const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('start dramasSeeder')
  KoreaDramaList.create(dramaList)
    .then(() => {
      console.log('dramasSeeder create successfully!')
      db.close()
    })
    .catch(err => console.log(err))
})