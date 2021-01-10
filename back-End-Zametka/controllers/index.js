const mongoose = require("mongoose");
const { Tasks } = require("../models");

exports.createTask = async (req, res) => {
  await new Tasks({ title: req.body.title, text: "" }).save((err, task) => {
    if (err) {
      return next(err);
    }
    return res.status(200).json({ status: "create task", task });
  });
};

exports.deleteTask = async (req, res) => {

  await Tasks.deleteOne({ _id: req.query.id });
  return res.status(200).json({ status: "delete task"});
};

exports.getTasks = async (req, res) => {
  let tasks = await Tasks.find({});
  return res.status(200).json(tasks);
};

exports.changeTaskTitle = async (req, res) => {
  await Tasks.updateOne({ _id: req.body.id }, { title: req.body.title });
  return res.status(200).json({ status: "update Task title" });
};

exports.changeTaskText = async (req, res) => {
  await Tasks.updateOne({ _id: req.body.id }, { text: req.body.text });
  return res.status(200).json({ status: "update Task text" });
};
