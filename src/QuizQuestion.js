import React, { Component } from 'react'

class QuizQuestion extends Component {
    render() {
        return (
            <main>
        <section>
          <p>{this.props.quiz_question[0].instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
                        <li>{this.props.quiz_question[0].answer_options}</li>
          </ul>
        </section>
      </main>
        )
    }
}

export default QuizQuestion;