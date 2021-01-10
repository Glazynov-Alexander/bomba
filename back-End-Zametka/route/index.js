let express = require('express').Router()

let rout = express
let taskController = require('../controllers')
let {middleware} = require('../middleware')
rout.post('/create',middleware, taskController.createTask )
rout.get('/get/tasks',taskController.getTasks)
rout.put('/title',taskController.changeTaskTitle)
rout.put('/text',taskController.changeTaskText)
rout.delete('/delete',taskController.deleteTask)

module.exports = rout