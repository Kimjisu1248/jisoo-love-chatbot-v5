import React from "react";
import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import ChatRoom from "./components/ChatRoom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      <Route path="/chat" element={<ChatRoom />} />
    </Routes>
  );
}
