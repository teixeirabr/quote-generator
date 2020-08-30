const express = require('express'),
  app = express(),
  quoteController = require('./controllers/quoteController'),
  PORT = process.env.PORT || 9000

app.use(express.static(`${__dirname}/../build`))
app.get('/api/quote', quoteController.getQuote)
app.listen(PORT, () => console.log('server running on port:' + PORT))
