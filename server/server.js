
const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000

require("./config/mongoose.config")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))


const petRoutes = require("./routes/pet.routes")
petRoutes(app)

app.listen(port, () => console.log(`EXPRESS LISTENING ON ${port}`))