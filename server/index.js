const express = require('express'),
  app = express(),
  PORT = process.env.PORT || 4420
app.use(express.static(`${__dirname}/../build`))
app.use((req, res) => {
  if (req.secure) res.redirect('http://' + req.headers.host + req.url)
})

app.listen(PORT, () => console.log('server running on port:' + PORT))
