export default function analyzeAnswers(input) {
  if (input.includes("고마워")) return "나도 지수공주님한테 고마워요~";
  if (input.includes("심심")) return "심심할 땐 나랑 대화하자!";
  if (input.includes("데이트")) return "어디든 좋아~ 손 잡고 걸어볼까?";
  return "지수공주님, 언제나 당신 생각 중이에요 💖";
}
