// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// const connect = async () => {
//   return mongoose.connect(process.env.DB_URL);
// };

// module.exports = connect;


const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
const dotenv = require("dotenv")
dotenv.config();
const connection = () => {
  mongoose.connect("mongodb+srv://chanchal:chsv1609@cluster0.muj7zwv.mongodb.net/blogApp").then((data) => {
    console.log(`connected with mongo server`);
  }).catch((err) => {
    console.log(err);
  })
}

module.exports = {
  connection
}