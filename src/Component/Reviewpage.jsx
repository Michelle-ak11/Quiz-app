import React from "react"


export default function({randomQuestions, selectedbox, restartQuiz}){
    if (!Array.isArray(randomQuestions) || randomQuestions.length === 0) {
  return <p>No review data available</p>;
}
    return(
        <div>
            <h1>Quiz Review</h1>

            {randomQuestions.map((q, index)=> {
                const userAnswer = selectedbox[index]
                const correctAnswer = q.answer;

                return(
                    <div key={q.id}>
                        <h3>{index +1}. {q.randomQuestions}</h3>
                        <p>Your Answer: {userAnswer}</p>
                        <p>Correct Answer: {correctAnswer}</p>
                    </div>
                    
                );
            })}
            <button onClick={restartQuiz}>Back to Quiz</button>
        </div>
    );
}