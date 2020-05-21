/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class AdminQuestions extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        newAdminQuestion: {
            question: '',
        },
    }

    componentDidMount() {
        this.getAllAdminQuestions()
    }
    
    
    getAllAdminQuestions = async () => {
        try {
            const res = await axios.get('/api/adminQuestion')
            const newState = { ...this.state }
            newState.adminQuestions = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all questions')
            console.log(error)
        }
    }
    
    onChangeAdminQuestion = (evt) => {
        const newState = {...this.state}
        newState.newAdminQuestion[evt.target.name] = evt.target.value
        this.setState(newState)
    }
    
    onDeleteAdminQuestion = async (adminQuestionId) => {
        await axios.delete(`/api/adminQuestion/${adminQuestionId}`)
        this.getAllAdminQuestions()
    }
    
    
    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('/api/adminQuestion', this.state.newAdminQuestion)
            this.getAllAdminQuestions()
        } catch (error) {
            console.log('Failed to create questions')
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
                <h1>Questions</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="question">Question</label>
                        <input
                            type="text"
                            question="question"
                            value={this.state.newAdminQuestion.question}
                            onChange={this.onChangeAdminQuestion} />
                    </div>
    
                    <input type="submit" value="Create Question"/>
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


