import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

// function shuffleQuestion(array) {
//     let i = array.length - 1;
//     for (; i > 0; i--) { 
//         const j = Math.floor(Math.random() * (i + 1));    
//         const temp = array[i]; 
//              array[i] = array[j];   
//          array[j] = temp
//               }
//       const newState = { ...this.state };
//       newState.allQuestions= array
//       console.log(newState.allQuestions)
//         } 



export default 
class Question extends React.Component {
    
    state = {
        allQuestions: []
    }          
    
componentDidMount() {
            this.getAllQuestions()
        
        
fleQuestion = (array) => {
            let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp
        } 
    constnewState = { ...this.state };
        newState.allQuestions = array
        newState.singleQuestion = array[0].question
        console.log(newState.singleQuestion)
        console.log(newState.allQuestions)
        this.setState(newState)
        
    
    getAllQuestions = async () => {
        try {
            const res = await axios.get('/api/question')
        const newState = { ...this.state }
        newState.allQuestions = res.data
            this.setState(newState)
            this.shuffleQuestion(this.state.allQuestions)
            tch (error) {
            ole.log('Failed to get all questions')
        console.log(error)
            
            
        
    oChangeQuestion = async (questionId) => {
    await axios.get(`/api/question/${this.state.allQuestions._id}`, this.state.allQuestions)
        this.getAllQuestin()
}

render() {
    
 return (
    < div >
               <h1>Question</h1>
       <div>
        {this.state.singleQuestion}
            iv>                     
                
            


                
            </div >     

        
    }
}