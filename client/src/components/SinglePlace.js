import React, { Component } from 'react'
import axios from 'axios'
import Places from './Places.js'

export default class SinglePlace extends Component {

    state = {
        newPlace: {
        name: '',
        address: '',
        cityState:'',
        zipCode: Number,
        }
    }

    componentDidMount() {
        this.getPlaceById()
    }

    // onChangeCreature = (evt) => {
    //     const newState = {...this.state}
    //     newState.newCreature[evt.target.name] = evt.target.value
    //     this.setState(newState)
    // }

    getPlaceById = async () => {
        const placeId = this.props.match.params.placeId
        console.log('placeId', placeId)
        const res = await axios.get(`/api/place/${placeId}`)
        const newState = {...this.state}

        this.setState(newState)
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('/api/place', this.state.newPlace)
            this.getAllPlaces()
        } catch (error) {
            console.log('Failed to create place')
            console.log(error)
        }
    }

    render() {

        return (<div>
            <div>
                <h1>Single Place</h1>
            
            </div>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.onChangePlace}
                        value={this.state.name}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="description"
                        onChange={this.onChangePlace}
                        value={this.state.address}
                        />
                </div>
                <div>
                    <label htmlFor="cityState">cityState</label>
                    <input
                        type="text"
                        name="cityState"
                        onChange={this.onChangePlace}
                        value={this.state.cityState}
                        />
                </div>
                <div>
                    <label htmlFor="zipCode">zipCode</label>
                    <input
                        type="text"
                        name="zipCode"
                        onChange={this.onChangePlace}
                        value={this.state.zipCode}
                        />
                </div>
                <input type="submit" value="Submit"/>
            </form>
            </div>    
        )
    }
}
