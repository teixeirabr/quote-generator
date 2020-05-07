const express = require('express'),
  app = express(),
  PORT = 4420
app.use(express.static(`${__dirname}/../build`))
app.listen(PORT, () => console.log('server running on port:' + PORT))
