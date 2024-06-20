const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`, `http://localhost:${PORT}`)
})
