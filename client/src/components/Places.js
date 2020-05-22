import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Places extends React.Component {

    state = {
        allPlaces: []
    }

    componentDidMount() {
        this.getAllPlaces()
    }

    getAllPlaces = async () => {
        try {
            const res = await axios.get('/api/place')
            const newState = { ...this.state }
            newState.allPlaces = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all places')
            console.log(error)
        }
    }


    render() {
        return (
            <div>
                <h1>Date Places</h1>

                {this.state.allPlaces.map((place) => {
                    return (
                        <div key= {place._id}> 
                            <Link to={`/places/${place._id}`}>
                                <div>{place.Name}</div>
                            </Link>
                            <div>{place.Address}</div>
                            <div>{place.City}</div>
                            <div>{place.State}</div>
                            <div>{place.ZipCode}</div>
                        </div>
                    )
                })}


    

            </div>)
    }
}
