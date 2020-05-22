import React, { Component } from 'react'
import axios from 'axios'
import Places from './Places.js'

export default class SinglePlace extends Component {

    state = {
        onePlace: {
        Name: '',
        Address: '',
        City:'',
        State:'',
        ZipCode: 0,
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
        newState.onePlace = res.data

        this.setState(newState)
    }

    // onSubmit = async (evt) => {
    //     evt.preventDefault()
    //     try {
    //         await axios.post('/api/place', this.state.onePlace)
    //         this.getAllPlaces()
    //     } catch (error) {
    //         console.log('Failed to create place')
    //         console.log(error)
    //     }
    // }

    render() {

        return (<div>
            <div>
                <h1>Single Place</h1>
                <div>{this.state.onePlace.Name}</div>
                <div>{this.state.onePlace.Address}</div>
                <div>{this.state.onePlace.City}</div>
                <div>{this.state.onePlace.State}</div>
                <div>{this.state.onePlace.ZipCode}</div>
            </div>
           
            </div>    
        )
    }
}
