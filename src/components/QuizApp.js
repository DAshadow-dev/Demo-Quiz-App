import React,{ Component } from 'react';
import Question from './Question';
import Score from './Score';

class QuizApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id : 1,
                    question : 'What is capital of France?',
                    options : ['Paris', 'London', 'Berlin', 'Madrid'],
                    answer: 'Paris'
                },
                {
                    id : 2,
                    question : 'What is capital of India?',
                    options : ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'],
                    answer: 'Delhi'
                },
                {
                    id : 3,
                    question : 'What is the largest planet in our solar system?',
                    options : ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
                    answer: 'Jupiter'
                }
            ],
            currentQuestion : 0,
            score : 0,
            endQuiz : false
        }
    }

    handleAnswerSelected = (selectedAnwer) =>{
        const {questions, currentQuestion, score} = this.state;
        const correctAnswer = questions[currentQuestion].answer;
        //If right answer is selected, score plus 1
        if (selectedAnwer === correctAnswer){
            this.setState({
                score : score + 1
            })
        }
        // Handle end quiz
        if (currentQuestion < questions.length - 1) {
            this.setState({
                currentQuestion : currentQuestion + 1
            })
        }
        else {
            this.setState({
                endQuiz : true
            })
        }
    }
     //Handle reset quiz
    resetQuiz = () => {
        this.setState({
            currentQuestion : 0,
            score : 0,
            endQuiz : false
        })
    }

    render(){
        const {questions,currentQuestion,score,endQuiz} = this.state;
        return (
            <div className='quizApp'>
                {
                    endQuiz ? (
                        <Score
                            score={score}
                            onReset={this.resetQuiz}
                        >
                        </Score>
                    ):
                    (
                        <Question
                            question={questions[currentQuestion]}
                            onSelected={this.handleAnswerSelected}
                        >
                        </Question>
                    )
                }
            </div>
        )
    }
}

export default QuizApp;