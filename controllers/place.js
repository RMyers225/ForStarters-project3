const express = require('express')
const placeModel = require('../models/place.js')
const placeRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

// GET ALL ROUTE
placeRouter.get('/', async (req, res) => {
  try {
      const allPlaces = await placeModel.getAllPlaces()
      res.json(allPlaces)
  } catch (error) {
      res.status(500).json(error)
      console.log(error)
  }
})

// GET ONE
placeRouter.get('/:placeId', async (req, res) => {
  try {
      const place = await placeModel.getPlaceById(req.params.placeId)
      res.json(place)
  } catch (error) {
      res.status(500).json(error)
      console.log(error)
  }
})

// CREATE
placeRouter.post('/', async (req, res) => {
  try {
      await placeModel.create(req.body)
      res.json('ok')
  } catch (error) {
      res.status(500).json(error)
      console.log(error)
  }
})

// UPDATE
placeRouter.put('/:placeId', async (req, res) => {
  try {
      await placeModel.update(req.params.placeId, req.body)
      res.json("ok")
  } catch (error) {
      res.status(500).json(error)
      console.log(error)
  }
})

// DELETE
placeRouter.delete('/:placeId', async (req, res) => {
  try {
      await placeModel.deletePlace(req.params.placeId)
      res.json("ok")
  } catch (error) {
      res.status(500).json(error)
      console.log(error)
  }
})


module.exports = {  placeRouter
}
