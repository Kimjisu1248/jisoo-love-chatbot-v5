import React from "react";
import Result from "./pages/Result";
import ChatRoom from "./components/ChatRoom";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <Result />
      <ChatRoom />
    </div>
  );
}
