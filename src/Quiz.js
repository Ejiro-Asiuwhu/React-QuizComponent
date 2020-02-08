import React, { Component } from 'react';

let quizData = require('./quize_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state ={
            quiz_position: 1
        }
    
    }

    render() {
        return (
            <div>
                <div className="QuizQuestion">
                    {quizData.map(qData => (<p>qData.instruction_text</p>)) }
                </div>
            </div>
        )
    }
}


export default Quiz;