import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Questions extends React.Component {

    state = {
        allQuestions: []
    }

    componentDidMount() {
        this.getAllQuestions()
    }



    getAllQuestions = async () => {
        try {
            const res = await axios.get('/api/question')
            const newState = { ...this.state }
            newState.allQuestions = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all questions')
            console.log(error)
        }
    }

    render() {
        const shuffled = shuffleQuestion();
        return ( 
            <div>
                <h1>Question</h1>

                
                <div>{this.state.allQuestions.question}</div>
        
            </div>
        )
    }
}