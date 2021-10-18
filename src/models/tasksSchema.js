const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// tasksSchema.pre("save", async function (next) {
//   const task = this;
//   // if (user.isModified("password"))
//   //   user.password = await bcrypt.hash(user.password, 8);
//   console.log("heloooooo");
//   next();
// });
const Task = mongoose.model("Task", tasksSchema);
module.exports = Task;
