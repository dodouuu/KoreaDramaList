// 引用 Express
const express = require('express')

// 引用 Express 路由器
const router = express.Router()

// 引用 Schema
const KoreaDramaList = require('../../models/KoreaDramaList')

// 定義首頁路由
router.get('/', (req, res) => {
  KoreaDramaList.find({})
    .lean()
    .then(
      KoreaDramas => res.render('index', { KoreaDramas })
    )
    .catch(error => console.error(error))
})

// query string
router.get('/search', (req, res) => {
  const keywordss = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keywordss.toLowerCase()) || restaurant.category.toLowerCase().includes(keywordss.toLowerCase())
  })

  res.render('index', { restaurants: restaurants, keywords: keywordss })
})

module.exports = router