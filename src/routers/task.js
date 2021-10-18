const express = require("express");
const Task = require("../models/tasksSchema");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/tasks", auth, async (req, res) => {
  try {
    //const task = new Task(req.body);
    const task = new Task({ ...req.body, owner: req.user._id });
    const result = await task.save();
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
});

// GET /tasks?completed=false
router.get("/tasks", auth, async (req, res) => {
  try {
    //below also works
    //const result = await Task.find({owner:req.user._id});

    await req.user.populate({
      path: "tasks",
      match: {
        completed: false,
      },
    });
    res.send(req.user.tasks);
  } catch (e) {
    res.status(500).send(); //network error
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  try {
    const _id = req.params.id;
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) return res.status(404).send();
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/tasks/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation)
    return res.status(400).send({ error: "Invalid updates" });
  try {
    // const _id = req.params.id;
    // const task = await Task.findByIdAndUpdate(_id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    //if there is no user to update
    // const task = await Task.findById(req.params.id);
    // updates.forEach((update) => (task[update] = req.body[update]));
    // await task.save();
    //const task = await Task.findById(req.params.id);
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).send();
    }

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    //const task = await Task.findByIdAndDelete(req.params.id);
    const task = await Task.findByIdAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status.apply(500).send();
  }
});

module.exports = router;
