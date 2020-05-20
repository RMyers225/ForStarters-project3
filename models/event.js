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
const EventModel = new mongoose.Schema({
    EventName: String,
    Address: String,
    City: String,
    State: String,
    ZipCode: Number,
})
/* Step 3
 *
 * TODO: export the schema
 */
//module.exports = mongoose.model('Sample', SampleModelSchema);
const EventModel = mongoose.model('Event', EventSchema)

function getAllEvent() {
    return EventModel.find({})
}

function getEventById(eventId) {
    return EventModel.findbyId(eventId)
}

function create(eventData) {
    return EventModel.create(eventData)
}

function update(eventId, eventData) {
    EventModel.findbyIdAndUpdate(eventId, eventData)
}

function deleteEvent(eventId) {
    return EventModel.findByIdAndDelete(eventId)
}

module.exports = {
    getAllEvent,
    getPlaceByEvent,
    create,
    update,
    deleteEvent
}