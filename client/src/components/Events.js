import React from 'react'

import { Link, Redirect, NavLink } from 'react-router-dom'
import Axios from 'axios'

export default class Events extends React.Component {

    state = {
        newEvent: {
            name: '',
            description: '',
            address: '',
            cityState: '',
            zipCode: 0,
            price: 0
        }
    }

    componentDidMount() {
        this.getAllEvents()
    }

    getAllEvents = async () => {
        try {
            const res = await Axios.get('/api/event')
            const newState = { ...this.state }
            newState.allEvents = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all event')
            console.log(error)
        }
    }

    onChangeEvent = (evt) => {
        const newState = { ...this.state }
        newState.newEvent[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onDeleteEvent = async (eventId) => {
        await axios.delete(`/api/event/${eventId}`)
        this.getAllEvents()
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('/api/event', this.state.newEvent)
            this.getAllEvents()
        } catch (error) {
            console.log('Failed to create event')
            console.log(error)
        }
    }



    render() {
        return (
            <div>
                <h1>Events</h1>

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.newEvent.name}
                            onChange={this.onChangeEvent}/>
                    </div>

                    <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        value={this.state.newEvent.description}
                        onChange={this.onChangeEvent}/>
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={this.state.newEvent.address}
                        onChange={this.onChangeEvent}/>
                </div>

                <div>
                    <label htmlFor="cityState">City/State</label>
                    <input
                        type="text"
                        name="cityState"
                        value={this.state.newEvent.cityState}
                        onChange={this.onChangeEvent}/>
                </div>

                <div>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        type="number"
                        name="zipCode"
                        value={this.state.newEvent.zipCode}
                        onChange={this.onChangeEvent}/>
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={this.state.newEvent.zipCode}
                        onChange={this.onChangeEvent}/>
                </div>
                </form>
            
                {this.state.allEvents.map((event) =>{
                    return(
                        <div>
                            <Link to={`/event/${event._id}`}>
                                <div>{event.name}</div>
                            </Link>
                            <div>{event.description}</div>
                            <div>{event.address}</div>
                            <div>{event.cityState}</div>
                            <div>{event.zipCode}</div>  
                            <div>{event.price}</div>     
                            <button onClick={() => this.onDeleteCreature(creature._id)}>Delete</button>                     
                            </div>
                    )
                })}
    }

            </div>)
    }
}