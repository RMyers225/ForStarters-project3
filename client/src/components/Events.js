import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Events extends React.Component {

    state = {
        allEvents: []
    }

    componentDidMount() {
        this.getAllEvents()
    }

    getAllEvents = async () => {
        try {
            const res = await axios.get('/api/event')
            const newState = { ...this.state }
            newState.allEvents = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all events')
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                <h1>Events</h1>

                {this.state.allEvents.map((event) => {
                    return (
                        <div>
                            <Link to={`/events/${event._id}`}>
                                <div>{event.EventName}</div>
                            </Link><div>{event.Description}</div>
                            
                            <div>{event.Address}</div>
                            <div>{event.City}</div>
                            <div>{event.State}</div>
                            <div>{event.ZipCode}</div>
                            <div>{event.Price}</div>
                            <button onClick={() => this.onDeleteEvent(event._id)}>Delete</button>
                        </div>
                    )
                })}


            </div>)
    }
}