const mongoose = require("mongoose");
const validator = require("validator");

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}
main().catch((err) => console.log(err));
