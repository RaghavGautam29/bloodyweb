const express = require("express")
const cors = require("cors")
const collection = require("./storage")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const {formData} = req.body
    const {name}=req.body
    const {date}=req.body
    const {addr}=req.body
    const {gen}=req.body
    const {cty}=req.body
    const {state}=req.body
    const {zip}=req.body
    const {email}=req.body
    const {contact}=req.body
    const {aadhar}=req.body
    const {issue}=req.body
    const {blood}=req.body
    const data ={
        name:name,
        date:date,
        issue:issue,
        addr:addr,
        gen:gen,
        cty:cty,
        zip:zip,
        state:state,
        contact:contact,
        email:email,
        aadhar:aadhar,
        blood:blood
    }
    await collection.insertMany([data])
})
app.get("/search", async (req, res) => {
  try {
    const { blood, city } = req.query;
    console.log('Searching for:', blood, city);
    const userData = await collection.findOne({ blood, cty: city });
    console.log('Found user data:', userData);
    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


  
app.listen(8000,()=>{
    console.log("port connected")
})