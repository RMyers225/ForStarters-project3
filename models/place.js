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
const PlaceModel = new mongoose.Schema({
    Name: String,
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
const PlaceModel = mongoose.model('Place', PlaceSchema)

function getAllPlace() {
    return PlaceModel.find({})
}

function getPlaceById(placeId) {
    return PlaceModel.findbyId(placeId)
}

function create(placeData) {
    return PlaceModel.create(placeData)
}

function update(placeId, placeData) {
    PlaceModel.findbyIdAndUpdate(placeId, placeData)
}

function deletePlace(placeId) {
    return PlaceModel.findByIdAndDelete(placeId)
}

module.exports = {
    getAllPlace,
    getPlaceById,
    create,
    update,
    deletePlace
}