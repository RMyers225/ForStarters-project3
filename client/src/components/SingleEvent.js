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

    getEventById = async () => {
        const eventId = this.props.match.params.eventId
        console.log('eventId', eventId)
        const res = await axios.get(`/api/event/${eventId}`)
        const newState = { ...this.state }
        newState.oneEvent = res.data
        console.log(res)
        this.setState(newState)
    }

    onChangeSingleEventName = (evt) => {

       const eventName = evt.target.value
       const newState = {...this.state}
       newState.oneEvent.EventName = eventName
       this.setState(newState)

    }

    onChangeSingleDescription = (evt) => {

        const Description = evt.target.value
        const newState = {...this.state}
        newState.oneEvent.Description = Description
        this.setState(newState)
 
     }

     onChangeSingleAddress = (evt) => {

        const Address = evt.target.value
        const newState = {...this.state}
        newState.oneEvent.Address = Address
        this.setState(newState)
 
     }
    
     onChangeSingleCity = (evt) => {

        const City = evt.target.value
        const newState = {...this.state}
        newState.oneEvent.City = City
        this.setState(newState)
 
     }

     onChangeSingleState = (evt) => {

        const State = evt.target.value
        const newState = {...this.state}
        newState.oneEvent.State = State
        this.setState(newState)
 
     }
     onChangeSingleZipCode = (evt) => {

        const ZipCode = evt.target.value
        const newState = {...this.state}
        newState.oneEvent.ZipCode = ZipCode
        this.setState(newState)
 
     }

     onChangeSinglePrice = (evt) => {

        const Price = evt.target.value
        const newState = {...this.state}
        newState.oneEvent.Price = Price
        this.setState(newState)
 
     }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.put(`/api/event/${this.state.oneEvent._id}`, this.state.oneEvent)
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
                <div>{this.state.oneEvent.EventName}</div>
                <div>{this.state.oneEvent.Description}</div>
                <div>{this.state.oneEvent.Address}</div>
                <div>{this.state.oneEvent.City}</div>
                <div>{this.state.oneEvent.State}</div>
                <div>{this.state.oneEvent.ZipCode}</div>


                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="EventName">Name</label>
                        <input
                            type="text"
                            name="EventName"
                            value={this.state.oneEvent.EventName}
                            onChange={this.onChangeSingleEventName}
                        />
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            name="Description"
                            value={this.state.oneEvent.Description}
                        onChange={this.onChangeSingleDescription} 
                        />
                    </div>

                    <div>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="Address"
                            value={this.state.oneEvent.Address}
                        onChange={this.onChangeSingleAddress}
                        />
                    </div>

                    <div>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="City"
                            value={this.state.oneEvent.City}
                        onChange={this.onChangeSingleCity} 
                        />
                    </div>

                    <div>
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            name="State"
                            value={this.state.oneEvent.State}
                        onChange={this.onChangeSingleState}
                        />
                    </div>
                    <div>
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                            type="number"
                            name="ZipCode"
                            value={this.state.oneEvent.ZipCode}
                        onChange={this.onChangeSingleZipCode} 
                        />
                    </div>

                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            name="Price"
                            value={this.state.oneEvent.Price}
                        onChange={this.onChangeSinglePrice}
                        />
                    </div>

                    <input type="submit" value="Update Event" />
                </form>
            </div>

        </div>
        )
    }
}
