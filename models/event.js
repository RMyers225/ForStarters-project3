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
const EventModelSchema = new mongoose.Schema({
    EventName: String,
    Address: String,
    City: String,
    State: String,
    ZipCode: Number,
    Description: String,
    Price: Number,
})
/* Step 3
 *
 * TODO: export the schema
 */
//module.exports = mongoose.model('Sample', SampleModelSchema);
const EventModel = mongoose.model('Event', EventModelSchema)

function getAllEvents() {
    return EventModel.find({})
}

function getEventById(eventId) {
    return EventModel.findById(eventId)
}

function create(eventData) {
    return EventModel.create(eventData)
}

function update(eventId, eventData) {
    return EventModel.findByIdAndUpdate(eventId, eventData)
}

function deleteEvent(eventId) {
    return EventModel.findByIdAndDelete(eventId)
}

module.exports = {
    getAllEvents,
    getEventById,
    create,
    update,
    deleteEvent
}