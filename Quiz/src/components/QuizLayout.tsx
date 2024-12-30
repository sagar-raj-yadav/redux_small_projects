import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ScoreCard from './ScoreCard';
import { questionAnswer } from '../Redux/quizSlice';
import { RootState } from '../Redux/store'; 

interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer:string;
  }

interface QuizState{
    questions:Question[];
    currentQuestionIndex:number;
    isQuizCompleted:boolean;
}

const QuizLayout:React.FC = () => {

    const dispatch = useDispatch();
    const {questions,currentQuestionIndex,isQuizCompleted}=useSelector<RootState,QuizState>((state)=>state.quiz);

    const currentQuestion=questions[currentQuestionIndex];

    if(isQuizCompleted)
    {return <ScoreCard />}

    const HandleAnswerClick=(selectedAnswer:string)=>{
        dispatch(questionAnswer({selectedAnswer}))
    }

  return (
    <>

    <p>{currentQuestion.id}</p>
    <h3>{currentQuestion.text}</h3>

    {
  currentQuestion.options.map((data:string, index:number) => {
    return (
      <div key={index}>
        <button
          style={{
            backgroundColor: "skyblue", 
            color: "red", 
            padding: "10px 20px", 
            marginTop: "10px",
            border: "none", 
            borderRadius: "8px",
            fontWeight:"bold",
            fontSize: "16px", 
            cursor: "pointer", 
          }}
          onClick={()=>HandleAnswerClick(data)}
        >
          {data}
        </button>
      </div>
    );
  })
}


    </>
  )
}

export default QuizLayout