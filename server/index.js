// server/index.js

const express = require("express");
const bodyParser = require("body-parser")

//local imports
const connectDb = require('./database.js')
const contactRoutes = require('./controller/contact_controller')

const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(bodyParser.json())
app.use('/api/contact', contactRoutes)

app.get("/index", (req, res) => {
    res.json({ message: "Hello!" });
})


connectDb()
    .then(() => {
        console.log('database connected')
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    })
    .catch(err => console.log(err))

