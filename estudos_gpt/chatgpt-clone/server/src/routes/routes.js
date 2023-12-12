const express = require("express")
const promptController = require("../controllers/prompt-controloler")
const routes = express.Router()

routes.post('api/prompt', promptController.sendText)

module.exports = routes 

