import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AdminEvents from './AdminEvents'

export default class Events extends React.Component {

    state = {
        allEvents: [],
        editEvent: true,
        eventList: [
            {
                EventName: String,
                Address: String,
                City: String,
                State: String,
                ZipCode: Number,
                Description: String,
                Price: Number
            }
        ]
    }

    componentDidMount() {
        this.getAllEvents()

    }

    toggleEditEvent = () => {
        const editEvent = !this.state;
        this.setState({ editEvent: editEvent });
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

    addNewEventToEventList = (newEvent) => {
        const eventList = [...this.state.eventList];
        eventList.push(newEvent);
        this.setState({ eventList });
    };


    onDeleteEvent = async (eventId) => {
        await axios.delete(`/api/event/${eventId}`)
        this.getAllEvents()
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
                            <button onClick={() => this.onDeleteEvent(event._id)}>Delete Event</button>

                              <br></br>  
                        
                        </div>
                    )
                })}


            </div>)
    }
}