import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

function shuffleQuestion(array) {
    let i = array.length - 1;
    for (; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1));    
        const temp = array[i]; 
             array[i] = array[j];   
         array[j] = temp
              }
       return array;
        } 



export default 
class Questions extends React.Component {

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
        const shuffled = shuffleQuestion(this.state.allQuestions);
        return (
            <div>
                <h1>Question</h1>

                {shuffled.map((question) => {
                    return (<div key={question._id}>
                        <div>{question.question}</div>


                    </div>
                    )
                })}
                    
            </div>

        )
    }
}