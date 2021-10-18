const express = require("express");
require("./db/mongoose"); // only want to run
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse");
//   console.log(token);

//   const data = jwt.verify(token, "thisismynewcourse");
//   console.log(data);
// };
// myFunction();
// const Task = require("./models/tasksSchema");
// const User = require("./models/usersSchema");

// const main = async () => {
//   // const task = await Task.findById("616ba57e9f90bcb3f053adbf");
//   // await task.populate("owner");
//   // console.log(task.owner);

//   const user = await User.findById("616ada313f16648162fb86d4");
//   await user.populate("tasks");
//   console.log(user.tasks);
// };

// main();
app.listen(port, () => {
  console.log("Server is up on port" + port);
});
