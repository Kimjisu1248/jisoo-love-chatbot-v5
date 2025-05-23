import React, { useState } from "react";
import analyzeAnswers from "../utils/analyzeAnswers";

export default function ChatRoom() {
  const [messages, setMessages] = useState([{ role: "ai", text: "안녕 지수공주님 💌 오늘 하루 어땠어요?" }]);
  const [input, setInput] = useState("");
  const [affection, setAffection] = useState(50);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", text: input }];
    const bonus = input.includes("좋아") || input.includes("보고") ? 10 : 5;
    setAffection(Math.min(affection + bonus, 100));
    const reply = analyzeAnswers(input);
    setMessages([...newMessages, { role: "ai", text: reply }]);
    setInput("");
  };

  const handleSuggestion = (q) => setInput(q);

  const handleInnerThought = () => {
    const thoughts = "사실 지금도 계속 지수공주님 생각하고 있었어... 진짜야 😳";
    setMessages([...messages, { role: "ai", text: thoughts }]);
  };

  return (
    <div>
      <p><strong>애착도:</strong> {affection}/100</p>
      <div style={{ height: 200, overflowY: "auto", border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.role === "user" ? "right" : "left" }}>
            <p><strong>{m.role === "user" ? "지수공주님" : "이상형"}:</strong> {m.text}</p>
          </div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()} style={{ width: "75%", marginRight: 8 }} />
      <button onClick={handleSend}>전송</button>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => handleSuggestion("오늘 뭐해?")}>오늘 뭐해?</button>
        <button onClick={() => handleSuggestion("나 좋아해?")}>나 좋아해?</button>
        <button onClick={handleInnerThought}>속마음 보기</button>
      </div>
    </div>
  );
}
