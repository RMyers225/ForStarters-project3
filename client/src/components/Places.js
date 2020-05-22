import React from 'react'
import axios from 'axios'
export default class Places extends React.Component {

    state = {
        newPlaces: {
        name: '',
        address: '',
        cityState: '',
        zipCode: Number,
    }
    }

    componentDidMount() {
        this.getAllPlaces()
    }

    getAllEvents = async () => {
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

    onChangePlace = (evt) => {
        const newState = { ...this.state }
        newState.newPlace[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onDeletePlace = async (placeId) => {
        await axios.delete(`/api/place/$placeId}`)
        this.getAllPlaces()
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

        return (
        <div>
            <h1>Date Places</h1>
            
            <form onSubmit={this.onSubmit}>
            <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.newPlace.name}
                        onChange={this.onChangePlace}/>
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={this.state.newPlace.address}
                        onChange={this.onChangePlace}/>
                </div>

                <div>
                    <label htmlFor="cityState">City/State</label>
                    <input
                        type="text"
                        name="cityState"
                        value={this.state.newPlace.cityState}
                        onChange={this.onChangePlace}/>
                </div>

                <div>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        type="text"
                        name="zipCode"
                        value={this.state.newPlace.zipCode}
                        onChange={this.onChangePlace}/>
                </div>
            </form>
           
           
    }

</div>)
    }
}