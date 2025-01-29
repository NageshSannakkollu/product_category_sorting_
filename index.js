const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const uri = "mongodb://localhost:27017/"  //for mongodb shell
const atlasUri = "mongodb+srv://<db_username>:<db_password>@cluster1.mobxq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1" //replace with username and password 



const port = 3022;


app.listen(port,(() => {
    console.log(`Server Running at:http://localhost:${port}/`)
}))