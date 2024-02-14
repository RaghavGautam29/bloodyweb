const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/makku")
.then(() => {
  console.log("connected");
})
.catch((error) => {
  console.log("failed", error);
});

const newSchema = new mongoose.Schema({
  issue:{
    type:String
  },
  name:{
    type:String
  },
  date:{
    type: String
  },
  blood:{
    type:String
  },
  addr:{
    type:String
  },
  gen:{
    type:String
  },
  cty:{
    type:String
  },
  state:{
    type:String
  },
  zip:{
    type:String
  },
  contact:{
    type:Number
  },
  email:{
    type:String
  },
  aadhar:{
    type:Number
  }
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
