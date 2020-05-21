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
const QuestionModelSchema = new mongoose.Schema({
    question: String,
})
/* Step 3
 *
 * TODO: export the schema
 */
//module.exports = mongoose.model('Sample', SampleModelSchema);
const QuestionModel = mongoose.model('question', QuestionModelSchema)

function getAllQuestions() {
    return QuestionModel.find({})
}

function getQuestionById(questionId) {
    return QuestionModel.findById(questionId)
}

function create(questionData) {
    return QuestionModel.create(questionData)
}

function update(questionId, questionData) {
   return QuestionModel.findByIdAndUpdate(questionId, questionData)
}

function deleteQuestion(questionId) {
    return QuestionModel.findByIdAndDelete(questionId)
}

module.exports = {
    getAllQuestions,
    getQuestionById,
    create,
    update,
    deleteQuestion
}