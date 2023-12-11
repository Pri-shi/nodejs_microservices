const mongoose = require("mongoose");
const { DB_URL } = require("../config");
const DB_URL_LOCAL = 'mongodb://nosql-db/msytt_product';
module.exports = async () => {
  try {
    await mongoose.connect(DB_URL_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Db Connected");
  } catch (error) {
    console.log("Error ============");
    console.log(error);
  }
};
