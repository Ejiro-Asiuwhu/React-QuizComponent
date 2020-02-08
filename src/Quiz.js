import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion'


let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state ={
            quiz_position: 1
        }
    
    }

    render() {
        console.log(quizData.quiz_questions);
        return (
           <QuizQuestion quiz_question={quizData.quiz_questions} />
        )
    }
}


export default Quiz;