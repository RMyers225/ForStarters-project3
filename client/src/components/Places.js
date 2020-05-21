import React from 'react'
import AdminPlaces from './AdminPlaces.js'
import { Link, Redirect } from 'react-router-dom'

export default class Places extends React.Component {

    state = {
        name: '',
        address: '',
        cityState: '',
        zipCode: Number,
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/SinglePlace" />)
        }

        return (<div>
            <h1>Date Places</h1>

            <div>Name : {this.props.name}</div>
            <div>Address : {this.props.address}</div>
            <div>City/State : {this.props.cityState}</div>
            <div>Zip Code : {this.props.zipCode}</div>
            <div>

                <AdminPlaces AdminPlaces={this.props.AdminPlaces} />
            </div>
    }

</div>)
    }
}