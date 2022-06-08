
// click a restaurant => show that restaurant detail
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant }) // first restaurant used in show.handlebars, second restaurant used in app.js
})