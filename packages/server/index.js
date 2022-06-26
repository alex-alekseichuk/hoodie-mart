const cors = require('cors');
const express = require('express')
const app = express()
app.use(cors());

const items_ = [
  {id: '01', title: 'Offensive', category: 'Hoodie', price: 45},
  {id: '02', title: 'Customer 4352', category: 'Hoodie', price: 45},
  {id: '03', title: 'Offensive', category: 'Crewneck', price: 40},
  {id: '04', title: 'Customer 4352', category: 'Crewneck', price: 40},
  {id: '05', title: "I'll forgive you", category: 'Crewneck', price: 45},
  {id: '06', title: 'Play on player', category: "Woman's tee", price: 20},
]

app.get('/items', (req, res) => {
  let sortField = req.query.sort
  if (!['title', 'price'].includes(sortField)) {
    sortField = 'title'
  }
  let isSortDesc = req.query.order === 'desc'
  const items = [...items_]
  items.sort((a, b) => {
    if (a[sortField] < b[sortField]) return isSortDesc ? 1 : -1
    if (a[sortField] > b[sortField]) return isSortDesc ? -1 : 1
    return 0
  })
  res.json({items})
})

app.listen(3001)

