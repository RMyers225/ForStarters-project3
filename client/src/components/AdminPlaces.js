/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class AdminPlaces extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        newAdminPlace: {
            Name: '',
            Address: '',
            City: '',
            State: '',
            ZipCode: '',
        },
    }

    componentDidMount() {
        this.getAllAdminPlaces()
    }


    getAllAdminPlaces = async () => {
        try {
            const res = await axios.get('/api/place')
            const newState = { ...this.state }
            newState.AdminPlaces = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all places')
            console.log(error)
        }
    }

    onChangeAdminPlace = (evt) => {
        const newState = { ...this.state }
        newState.newAdminPlace[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onDeleteAdminPlace = async (AdminPlaceId) => {
        await axios.delete(`/api/place/${AdminPlaceId}`)
        this.getAllAdminPlaces()
    }


    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('/api/place', this.state.newAdminPlace)
            this.getAllAdminPlaces()
        } catch (error) {
            console.log('Failed to create places')
            console.log(error)
        }
    }



    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                {/* <h1>{this.state.message}</h1> */}
                <h1>Date Places</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="Name"
                            value={this.state.newAdminPlace.Name}
                            onChange={this.onChangeAdminPlace} />
                    </div>

                    <div>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="Address"
                            value={this.state.newAdminPlace.Address}
                            onChange={this.onChangeAdminPlace} />
                    </div>

                    <div>
                        <label htmlFor="City">City</label>
                        <input
                            type="text"
                            name="City"
                            value={this.state.newAdminPlace.City}
                            onChange={this.onChangeAdminPlace} />
                    </div>

                    <div>
                        <label htmlFor="State">State</label>
                        <input
                            type="text"
                            name="State"
                            value={this.state.newAdminPlace.State}
                            onChange={this.onChangeAdminPlace} />
                    </div>

                    <div>
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                            type="number"
                            name="ZipCode"
                            value={this.state.newAdminPlace.ZipCode}
                            onChange={this.onChangeAdminPlace} />
                    </div>

                    <input type="submit" value="Create Place" />
                    {/* <button onClick={() => this.onDeleteAdminPlace(AdminPlace._id)}>Delete</button> */}
                </form>
            </div>
        )
    }
}

/* Step 4
* Use componentDidMount to retrieve any data to display
*   Here you can make calls to your local express server
*   or to an external API
*   setState can be run here as well
*   -REMINDER remember `setState` it is an async function
// */
// componentDidMount() {
//     axios.get('/api/events')
//         .then((res) => {
//             this.setState({ newEvent: res.data })
//         })
// }


