const mongoose = require("mongoose");
const validator = require("validator");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/myfirst");
}
main().catch((err) => console.log(err));
