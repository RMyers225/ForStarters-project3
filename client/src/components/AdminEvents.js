/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class AdminEvents extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        newAdminEvent: {
            EventName: '',
            Description: '',
            Address: '',
            City:'',
            State: '',
            ZipCode: 0,
            Price: 0,
        },
    }

    componentDidMount() {
        this.getAllAdminEvents()
    }


    getAllAdminEvents = async () => {
        try {
            const res = await axios.get('/api/adminEvent')
            const newState = { ...this.state }
            newState.AdminEvents = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all events')
            console.log(error)
        }
    }

    onChangeAdminEvent = (evt) => {
        const newState = { ...this.state }
        newState.newAdminEvent[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onDeleteAdminEvent = async (AdminEventId) => {
        await axios.delete(`/api/event'${AdminEventId}`)
        this.getAllAdminEvents()
    }


    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('/api/event', this.state.newAdminEvent)
            this.getAllAdminEvents()
        } catch (error) {
            console.log('Failed to create events')
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
                <h1>Events</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="EventName">Name</label>
                        <input
                            type="text"
                            name="EventName"
                            value={this.state.newAdminEvent.EventName}
                            onChange={this.onChangeAdminEvent} />
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            name="Description"
                            value={this.state.newAdminEvent.Description}
                            onChange={this.onChangeAdminEvent} />
                    </div>

                    <div>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="Address"
                            value={this.state.newAdminEvent.Address}
                            onChange={this.onChangeAdminEvent} />
                    </div>

                    <div>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="City"
                            value={this.state.newAdminEvent.City}
                            onChange={this.onChangeAdminEvent} />
                    </div>

                    <div>
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            name="State"
                            value={this.state.newAdminEvent.State}
                            onChange={this.onChangeAdminEvent} />
                    </div>
                    <div>
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                            type="number"
                            name="ZipCode"
                            value={this.state.newAdminEvent.ZipCode}
                            onChange={this.onChangeAdminEvent} />
                    </div>

                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            name="Price"
                            value={this.state.newAdminEvent.Price}
                            onChange={this.onChangeAdminEvent} />
                    </div>

                    <input type="submit" value="Create Event" />
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


