
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'; 

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer:string;
}

interface QuizState{
  questions:Question[];
  score:number;
}
const QuizMain = () => {

  const {score,questions}=useSelector<RootState,QuizState>((state)=>state.quiz);
  return (
    <div>
        <p>your score:{score} /{questions.length}</p>
    </div>
  )
}

export default QuizMain