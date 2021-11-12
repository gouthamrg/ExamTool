const mongoose = require("mongoose");

const url =
  "mongodb+srv://admin:lrxIcmrdbsqF4pKx@cluster0.xhnd5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
module.exports = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log(`Error! ${err}`);
    });
};
