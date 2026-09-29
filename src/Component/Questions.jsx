import React, { useEffect, useState } from "react";
import { SlOptions } from "react-icons/sl";
import Resultpage from "./Resultpage";

export default function Questions({  showScore, score, setScore, setShowScore, setShowQuiz}){
  const[current ,setCurrent] = useState(0); 
  const[selectedbox, setSelectedbox]= useState({});
  const[timer, setTimer]= useState(60);
  const[quizEnded, setQuizEnded] = useState(false);
  const[randomQuestions, setRandomQuestions]=useState([]);

     const allquestions = [
  {
    id:1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    id:2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    id:3,
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    id:4,
    question: "Which gas do plants breathe in?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: "Carbon dioxide"
  },

  {
    id:5,
  question: " What is 5 + 7?",
  options: ["10", "11", "12", "13"],
  answer: "12",
 },
 
 {
  id:6,
  question: " What is 10 + 9?",
  options: ["17", "18", "19", "20"],
  answer: "19",
 } ,
  {
    id:7,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "George Orwell"],
    answer: "William Shakespeare"
  },
  {
    id:8,
    question: "Which of these is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    answer: "2"
  },

  {
  id:9,
  question: " What is 7 + 7?",
  options: ["12", "13", "14", "16"],
  answer: "14",
 },
  {
    id:10,
    question: "What is H₂O commonly known as?",
    options: ["Salt", "Sugar", "Water", "Hydrogen"],
    answer: "Water"
  },
  {
    id:11,
    question: "What is the largest animal in the world?",
    options: ["Elephant", "Giraffe", "Blue whale", "Shark"],
    answer: "Blue whale"
  },
  {
    id:12,
    question: "Which country invented pizza?",
    options: ["Greece", "Italy", "France", "Mexico"],
    answer: "Italy"
  },
  {
    id:13,
    question: "Which device is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Telescope", "Microscope"],
    answer: "Thermometer"
  },
  {
    id:14,
  question: " What is 20 + 10?",
  options: ["25", "30", "35", "40"],
  answer: "30",
},

 {
  id:15,
  question: " What is 15 + 5?",
  options: ["18", "19", "20", "21"],
  answer: "20",
 },

 {
  id: 16,
  question: "What is 6 + 4?",
  options: ["8", "9", "10", "11"],
  answer: "10",
 },

 {
  id: 17,
  question: "What is 9 + 5?",
  options: ["12", "13", "14", "15"],
  answer: "14",
 },

 {
  id: 18,
  question: "Which planet is closest to the Sun?",
  options: ["Earth", "Venus", "Mercury", "Mars"],
  answer: "Mercury",
 },

 {
  id: 19,
  question: "How many days are there in a week?",
  options: ["5", "6", "7", "8"],
  answer: "7",
 },

 {
  id: 20,
  question: "What is the capital of Ghana?",
  options: ["Lagos", "Abuja", "Accra", "Kumasi"],
  answer: "Accra",
 },

 {
  id: 21,
  question: "Which animal is known as the fastest land animal?",
  options: ["Lion", "Cheetah", "Horse", "Leopard"],
  answer: "Cheetah",
 },

 {
  id: 22,
  question: "What color do you get when you mix red and white?",
  options: ["Pink", "Purple", "Orange", "Brown"],
  answer: "Pink",
 },

 {
  id: 23,
  question: "How many hours are there in a day?",
  options: ["12", "18", "24", "36"],
  answer: "24",
 },

 {
  id: 24,
  question: "Which continent is Nigeria located in?",
  options: ["Asia", "Europe", "Africa", "Australia"],
  answer: "Africa",
 },

 {
  id: 25,
  question: "What part of the body helps you see?",
  options: ["Ear", "Eye", "Nose", "Hand"],
  answer: "Eye",
 },

 {
  id: 26,
  question: "Which instrument is used to measure temperature?",
  options: ["Barometer", "Thermometer", "Speedometer", "Hygrometer"],
  answer: "Thermometer",
 },

 {
  id: 27,
  question: "Which month comes after September?",
  options: ["August", "October", "November", "December"],
  answer: "October",
 },

 {
  id: 28,
  question: "What is the largest land animal?",
  options: ["Elephant", "Giraffe", "Lion", "Rhino"],
  answer: "Elephant",
 },

 {
  id: 29,
  question: "Which shape has three sides?",
  options: ["Square", "Circle", "Triangle", "Rectangle"],
  answer: "Triangle",
 },

 {
  id: 30,
  question: "What do plants need to make their food?",
  options: ["Moonlight", "Sunlight", "Electricity", "Fire"],
  answer: "Sunlight",
 }
];


// TIMER
useEffect(()=>{
  if(timer === 0){
   setQuizEnded(true);
   showScore(true);
   return;
  }

  const interval = setInterval(()=>{ 
  setTimer(prev => prev -1);  // takes the prev value subtracts 1 and adds it to the new val
  },1000);                    // runs every 1000 milisec
  return()=> clearInterval(interval); // before the timer runs again clear old interval
}, [timer]) ;              // dependency array, runs again when timer changes


const restartQuiz =() =>{
  setCurrent(0);
  setScore(0);
  setShowScore(false);
  setTimer(60);
  setShowQuiz(true);
};


 // shuffling questions
  function shuffleArray(array){
    const shuffled=[...array];
    for(let i= shuffled.length -1; i>0; i--){
      const j = Math.floor(Math.random()* (i +1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    } return shuffled;

  };

  useEffect(()=>{
    const shuffled = shuffleArray(allquestions);
    setRandomQuestions(shuffled.slice(0, 10));
  }, []);// run once



const currentQuestion = randomQuestions[current];
if(!currentQuestion) return <Resultpage/> 

 
if(quizEnded){  // condition, if its alr 90 sec, show result page
  return <Resultpage/>;
};


// BUTTONS
const next = ()=>{
 if (selectedbox[current] === randomQuestions[current].answer) {
    setScore(prev => prev + 1);
  }


  if (current === randomQuestions.length - 1) {
    setShowScore(true); // just toggle boolean, don't pass JSX
  } else {
    // 3️ Move to next question
    setCurrent(prev => prev + 1);
  }

  
 
};


const previous= ()=>{
  if(current >0 ){
    setCurrent(current -1);
  }
};






return(
  <div>
  
    <h3>  QUIZ STARTED!!</h3>
     <div className="question-box">
      <div className="timer"
       style={{"--progress": `${(timer / 60) *100}%`}}>  {/* Style that makes the timmer tick*/}
       <h4>{timer}s</h4>

      </div>


     <h3>{current+1} {currentQuestion.question} </h3>  {/*gets the current question from the array and numbers them starting from 1 */}

     {currentQuestion.options.map((option, index) =>(
     
     <label   className="options" key={index} >
         
      <input
       type="radio" 
       name="answer"
       value={option} 
       checked={selectedbox[current] === option}
       onChange={() => setSelectedbox(prev => ({...prev, [current]: option})    )}/> 
       {option}   {/* makes the option text visible*/}
       
    </label>
 
    ))};

   
   <button onClick={previous} className="btn" > PREVIOUS</button>

   {current < randomQuestions.length - 1 && (
  <button id="next" className=" btn"onClick={next}>Next</button>)}

   {current === randomQuestions.length-1 &&(




   // when it gets to q10 submit should pull up
    <button onClick={showScore} id="next" className="btn">SUBMIT</button>)}
    {/* if (selectedbox[current] === randomQuestions[current].answer) {
    setScore(prev => prev + 1)
  }; */}
    

    </div>
  </div>
)
}
