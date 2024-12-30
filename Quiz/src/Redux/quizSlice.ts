
import { createSlice } from '@reduxjs/toolkit'

  const  initialState={
        questions: [
            {
              id: 1,
              text: "What is the capital of France?",
              options: ["Paris", "London", "Berlin", "Rome"],
              correctAnswer: "Paris",
            },
            {
              id: 2,
              text: "What is 2 + 2?",
              options: ["3", "4", "5", "6"],
              correctAnswer: "4",
            },
            {
                id: 3,
                text: "What is 23+37?",
                options: ["39", "60", "15", "56"],
                correctAnswer: "60",
            },
            {
                id: 4,
                text: "What is 2 - 2?",
                options: ["-1","-3", "0", "6"],
                correctAnswer: "0",
            },
          ],
          currentQuestionIndex: 0,
          score: 0,
          isQuizCompleted: false,
        
};


export const counterSlice = createSlice({
name: 'counter',
initialState:initialState,
reducers: {
    questionAnswer:(state,action)=>{
        const {selectedAnswer}=action.payload;
        const currentQuestion=state.questions[state.currentQuestionIndex];
        if(currentQuestion.correctAnswer===selectedAnswer)
        {state.score+=1;}
        
        if(state.currentQuestionIndex<state.questions.length-1)
        {state.currentQuestionIndex+=1;}
        else{state.isQuizCompleted=true;}
    }

  },
  

})

export const { questionAnswer } = counterSlice.actions

export default counterSlice.reducer