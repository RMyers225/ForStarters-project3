import React from 'react'
import AdminEvents from './AdminEvents.js'
import { Link, Redirect } from 'react-router-dom'

export default class Events extends React.Component {

    state = {
        name: '',
        description: '',
        address: '',
        cityState: '',
        zipCode: Number,
        price: Number,
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/SingleEvents" />)
        }

        return (<div>
            <h1>Events</h1>

            <div>Name : {this.props.name}</div>
            <div>Description: {this.props.description}</div>
            <div>Address : {this.props.address}</div>
            <div>City/State : {this.props.cityState}</div>
            <div>Zip Code : {this.props.zipCode}</div>
            <div>Price : {this.props.price}</div>
            <div>

                <AdminPlaces AdminEvents={this.props.AdminEvents} />
            </div>
    }

        </div>)
    }
}