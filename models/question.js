/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * Import mongoose connection
 *
 */
const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */
//const SampleModelSchema = new mongoose.Schema({
//  name: String
//})
const QuestionModel = new mongoose.Schema({
    question: String,
})
/* Step 3
 *
 * TODO: export the schema
 */
//module.exports = mongoose.model('Sample', SampleModelSchema);
const QuestionModel = mongoose.model('question', QuestionSchema)

function getAllQuestion() {
    return QuestionModel.find({})
}

function getQuestionById(quesionId) {
    return QuestionModel.findbyId(quesionId)
}

function create(questionData) {
    return QuestionModel.create(questionData)
}

function update(quesionId, questionData) {
    QuestionModel.findbyIdAndUpdate(questionId, questionData)
}

function deleteQuestion(quesionId) {
    return QuestionModel.findByIdAndDelete(quesionId)
}

module.exports = {
    getAllQuestion,
    getQuestionById,
    create,
    update,
    deleteQuestion
}