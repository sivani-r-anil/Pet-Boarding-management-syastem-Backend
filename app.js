const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://sivani_r_anil:siva123@ac-0k7dbum-shard-00-00.ojotgu3.mongodb.net:27017,ac-0k7dbum-shard-00-01.ojotgu3.mongodb.net:27017,ac-0k7dbum-shard-00-02.ojotgu3.mongodb.net:27017/petdb?ssl=true&replicaSet=atlas-gxc29u-shard-0&authSource=admin&appName=Cluster0").then(
    () => {
        console.log("MongoDb connected")
    }
).catch(
    (error) => {
        console.log("error")
    }
)



const pet =mongoose.model("Pets", new mongoose.Schema(
    {
        id:String,
        name:String,
        petType:String,
        breed:String,
        age:String,
        weight:String,
        vaccinationStatus:String,
        ownerName:String,
        phone:String,
        email:String,
        checkinDate:String,
        checkoutDate:String,
        kennelNo:String
    }
))


app.post("/add-pet",async (req,res) =>{
    await pet.create(req.body)
    res.json({"status":"success"})
})






app.listen(3000, () => {
    console.log("Server started")
})