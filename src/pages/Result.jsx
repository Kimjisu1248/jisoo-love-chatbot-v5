import React from "react";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const mbti = localStorage.getItem("mbti") || "ENFP";
  const navigate = useNavigate();
  return (
    <div>
      <h2>당신의 MBTI는 {mbti}</h2>
      <img src={`/images/${mbti}.png`} alt={mbti} width={100} />
      <p>이상형 캐릭터와 대화해보세요 💖</p>
      <button onClick={() => navigate("/chat")}>AI 이상형 만나러 가기</button>
    </div>
  );
}
