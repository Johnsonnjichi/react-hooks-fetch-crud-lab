import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";
// import { fetch } from "whatwg-fetch";

function QuestionList() {
  const [questions, setQuestions] = useState([])
  const [onDelete, setOnDelete] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(data => setQuestions(data))
    
  }, [])
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question)=> (
          <QuestionItem
           key={question.id} 
           question={question}
           onDelete={onDelete}
          />
        ))}

        {/* display QuestionItem components here after fetching */}
        </ul>
    </section>
  );
}

export default QuestionList;
