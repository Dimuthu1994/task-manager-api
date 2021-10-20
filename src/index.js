const express = require("express");
require("./db/mongoose"); // only want to run
const app = express();
const port = process.env.PORT;
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port" + port);
});
