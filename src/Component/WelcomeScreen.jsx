export default function({startQuiz}){
    return(
        <div className="welcome">
            <h1>General quiz questions!</h1>
            <h2>Test your knowledge</h2>
            <h3>Answer questions 1-10 under 60 seconds</h3>

            <div>
            
         <button id="start-btn" onClick={startQuiz} >START</button> 
         
         </div>
        
         </div>
    );
}
