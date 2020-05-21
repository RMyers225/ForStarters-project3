const express = require('express')
const eventModel = require('../models/event.js')

const eventRouter = express.Router()

// GET ALL ROUTE
eventRouter.get('/', async (req, res) => {
  try {
    const allEvents = await eventModel.getAllEvents()
    res.json(allEvents)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
})

// GET ONE
eventRouter.get('/:eventId', async (req, res) => {
  try {
    const event = await eventModel.getEventById(req.params.eventId)
    res.json(event)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
})

// CREATE
eventRouter.post('/', async (req, res) => {
  try {
    await eventModel.create(req.body)
    res.json('ok')
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
})

// UPDATE
eventRouter.put('/:eventId', async (req, res) => {
  try {
    await eventModel.update(req.params.eventId, req.body)
    res.json("ok")
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
})

// DELETE
eventRouter.delete('/:eventId', async (req, res) => {
  try {
    await eventModel.deleteEvent(req.params.eventId)
    res.json("ok")
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
})

module.exports = {
  eventRouter
}
