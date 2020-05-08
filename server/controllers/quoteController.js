const quotes = require('../data/quotes.json')

module.exports = {
  getQuote: (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    return res.status(200).send(quotes[randomIndex])
  },
}
