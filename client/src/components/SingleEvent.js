import React, { Component } from 'react'
import axios from 'axios'
import Events from './Events.js'

export default class SingleEvent extends Component {

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
        const newState = {...this.state}

        this.setState(newState)
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

        return (<div>
            <div>
                <h1>Single Event</h1>
            
            </div>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.onChangeEvent}
                        value={this.state.name}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        onChange={this.onChangeEvent}
                        value={this.state.description}
                        />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        onChange={this.onChangeEvent}
                        value={this.state.address}
                        />
                </div>
                <div>
                    <label htmlFor="cityState">City/State</label>
                    <input
                        type="text"
                        name="cityState"
                        onChange={this.onChangeEvent}
                        value={this.state.cityState}
                        />
                </div><div>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        type="text"
                        name="zipCode"
                        onChange={this.onChangeEvent}
                        value={this.state.zipCode}
                        />
                </div>
                <input type="submit" value="Submit"/>
            </form>
            </div>    
        )
    }
}
