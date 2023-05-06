const port = 4000
const express = require('express')
const app = express()
const path = require("path");


app.listen(port, () => {

    console.log(`Server is running on port ${port}`)
}
)
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/static/index.html"));
  });
  