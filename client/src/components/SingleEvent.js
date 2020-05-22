import React, { Component } from 'react'
import axios from 'axios'
// import Events from './Events.js'

export default class SingleEvent extends Component {

    state = {
        oneEvent: {

        }
    }

    componentDidMount() {
        this.getEventById()
    }

    // onChangeCreature = (evt) => {
    //     const newState = {...this.state}
    //     newState.newCreature[evt.target.name] = evt.target.value
    //     this.setState(newState)
    // }

    getEventById = async () => {
        const eventId = this.props.match.params.eventId
        console.log('eventId', eventId)
        const res = await axios.get(`/api/event/${eventId}`)
        const newState = { ...this.state }
        newState.oneEvent = res.data
        console.log(res)
        this.setState(newState)
    }

    // onSubmit = async (evt) => {
    //     evt.preventDefault()
    //     try {
    //         await axios.post('/api/event', this.state.newEvent)
    //         this.getAllEvents()
    //     } catch (error) {
    //         console.log('Failed to create event')
    //         console.log(error)
    //     }
    // }

    render() {

        return (<div>
            <div>
                <h1>Single Event</h1>
                <div>{this.state.oneEvent.EventName}</div>
                <div>{this.state.oneEvent.Description}</div>
                <div>{this.state.oneEvent.Address}</div>
                <div>{this.state.oneEvent.City}</div>
                <div>{this.state.oneEvent.State}</div>
                <div>{this.state.oneEvent.ZipCode}</div>
            </div>

        </div>
        )
    }
}
