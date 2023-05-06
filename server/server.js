const port = 4000
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1> Hello World </h1>')
    }
)
app.listen(port, () => {

    console.log(`Server is running on port ${port}`)
}
)

