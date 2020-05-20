const express = require('express')
const questionModel = require('../models/question.js')
const questionRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

// GET ALL ROUTE
questionRouter.get('/', async (req, res) => {
    try {
        const allQuesions = await questionModel.getAllQuestions()
        res.json(allQuestions)
    } catch (error) {
        res.statusCode(500).json(error)
        console.log(error)
    }
})

// GET ONE
questionRouter.get('/:questionId', async (req, res) => {
    try {
        const question = await questionModel.getQuestionById(req.params.questionId)
        res.json(book)
    } catch (error) {
        res.statusCode(500).json(error)
        console.log(error)
    }
})

// CREATE
questionRouter.post('/', async (req, res) => {
    try {
        await questionModel.create(req.body)
        res.json('ok')
    } catch (error) {
        res.statusCode(500).json(error)
        console.log(error)
    }
})

// UPDATE
questionRouter.put('/:questionId', async (req, res) => {
    try {
        await questionModel.update(req.params.questionId, req.body)
        res.json("ok")
    } catch (error) {
        res.statusCode(500).json(error)
        console.log(error)
    }
})

// DELETE
questionRouter.delete('/:questionId', async (req, res) => {
    try {
        await questionModel.deleteQuestion(req.params.questionId)
        res.json("ok")
    } catch (error) {
        res.statusCode(500).json(error)
        console.log(error)
    }
})



/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = { questionRouter
}
