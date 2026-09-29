import { useState } from "react"
import Questions from "./Questions"


export default function({restartQuiz, score }){
   let message;
   if(score=== 0){
    message = "damnn!! try again";
   }else if(score >1 && score <=4){
    message = "You can do better!! 🎉";
   }else if(score ===5){
    message = " Awwn🎉  Average score keep trying!";
   }else if(score >=6 && score <=9){
    message ="Awwnnn Almost perfect!! 🎉 ";
   }else if(score === 10){
    message = "Na you nauuu!!!!!!!!! 🎉 ";
   }
   
   


   
   
    return(
        <div className="welcome">
            <h2>QUIZ FINISHED!</h2>
           <h1>YOU SCORED {score} / {Questions.length+9} </h1>
           <h2 className="message">{message}</h2>
          

         <div> <button className="restart" onClick={restartQuiz}> RESTART QUIZ</button> 
            
            </div>
        </div>
    )
     
   
    
}