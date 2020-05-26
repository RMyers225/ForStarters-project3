/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'
import Img from 'react-dom'


/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class Homepage extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        questions: '',
        datePlaces: '',
        events: '',
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    componentDidMount() {
        axios.get('/api/homepage')
            .then((res) => {
                this.setState({ message: res.data })
            })
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
                <h1>For Starters</h1>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.questions}</h1>
                <h1>{this.state.datePlaces}</h1>
                <h1>{this.state.events}</h1>

                <p>Whether it's been awkward, boring, or nonexistent the dating world could use some help in the conversation department.<br></br>
<br></br>
For Starters...is a conversation starter app specifically designed to put some depth and spice back into getting to know each other. It will serve as a question bank of fun, funny, hypothetical and real life questions that are formed to allow you to see someone’s character, not rehearsed “date answer”.<br></br>
<br></br>
Users can use this as a tool to select a few go-to questions for later, or open and play as a game with your date. Whichever method you choose, you’ll be prepared.<br></br>
<br></br>
Mothers always say, “It’s not what you ask, it’s how you ask.” So tell me, what’s your starter?</p>

<Img
// style={{width: 250, height: 250}}
src='https://i.imgur.com/T2mmi6J.jpg'
alt = 'new'
/>

                <ul>
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="questions.asp">Questions</a></li>
                    <li><a href="datePlaces.asp">Date Places</a></li>
                    <li><a href="events.asp">Events</a></li>
                </ul>
            </div>
        )
    }
}
