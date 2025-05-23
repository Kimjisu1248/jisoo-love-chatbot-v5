import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../utils/questions";
import calculateMBTI from "../utils/calculateMBTI";

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (value) => {
    const newAnswers = [...answers, value];
    if (current + 1 < questions.length) {
      setAnswers(newAnswers);
      setCurrent(current + 1);
    } else {
      const mbti = calculateMBTI(newAnswers);
      localStorage.setItem("mbti", mbti);
      navigate("/result");
    }
  };

  return (
    <div>
      <h2>{questions[current].question}</h2>
      {questions[current].options.map((opt, i) => (
        <button key={i} onClick={() => handleSelect(opt.type)}>
          {opt.text}
        </button>
      ))}
    </div>
  );
}
