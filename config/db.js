const { default: mongoose } = require("mongoose")

const uri = "mongodb://localhost:27017/"  //for mongodb shell
const atlasUri = "mongodb+srv://<db_username>:<db_password>@cluster1.mobxq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1" //replace with username and password 

//DB connection Method for atlas 

const DBConnection = async() => {
    try {
        await mongoose.connect(atlasUri) //mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("DB Connected Successfully")
    } catch (error) {
        console.log(e.message)
    }
}

module.exports = DBConnection;

