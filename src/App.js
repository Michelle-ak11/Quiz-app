import "./index.css";
import WelcomeScreen from "./Component/WelcomeScreen";
import Questions, { allquestions } from "./Component/Questions";
import { useState } from "react";
import Resultpage from "./Component/Resultpage";
import Reviewpage from "./Component/Reviewpage";


export default function App(){

const[showQuiz, setShowQuiz]= useState(false); //creates a function to set and change the show quiz
const[showScore, setShowScore]=useState(false);
const[score, setScore]=useState(0);
const [quizkey, setQuizKey]=useState(0); // to reset quiz

const restartQuiz =() => {
  setQuizKey(prev => prev +1);
  setScore(0);
  setShowQuiz(true);
  setShowScore(false);
};                                                        

  return(
    
    <div>
      
      
      
     { showScore ? <Resultpage score={score} setScore={setScore} restartQuiz={restartQuiz}  />:showQuiz ? 
      <Questions showScore={() => setShowScore(true)} score={score} setScore={setScore} key={quizkey}  />: 
      <WelcomeScreen startQuiz={() => setShowQuiz(true)}/>} {/* if showquiz is true show questions, else stay on welcome page */}
    </div>
    
  );

}