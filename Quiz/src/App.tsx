
import QuizLayout from './components/QuizLayout';
import ScoreCard from './components/ScoreCard';

import { useSelector } from 'react-redux'
import { RootState } from './Redux/store'; 

function App() {


  const {isQuizCompleted}=useSelector((state:RootState)=>state.quiz);


    if(isQuizCompleted)
    {return <ScoreCard />}


  return (
    <>
      {isQuizCompleted?<ScoreCard/>:<QuizLayout/>}
    </>
  )
}

export default App
