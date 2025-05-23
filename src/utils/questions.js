const questions = [
  { question: "친구와 놀 때 나는?", options: [
    { text: "에너지를 얻는다", type: "E" },
    { text: "에너지를 소모한다", type: "I" },
    { text: "상황에 따라 다르다", type: "X" },
    { text: "혼자 있을 때가 편하다", type: "I" }
  ]},
  { question: "계획 세우는 걸 좋아해?", options: [
    { text: "계획적이다", type: "J" },
    { text: "즉흥적이다", type: "P" },
    { text: "즉흥이 재밌다", type: "P" },
    { text: "세우고도 잘 안 지킨다", type: "P" }
  ]},
  { question: "문제 해결 방식은?", options: [
    { text: "감정적으로 접근한다", type: "F" },
    { text: "논리적으로 분석한다", type: "T" },
    { text: "직감적으로 판단한다", type: "N" },
    { text: "사실 기반으로 따진다", type: "S" }
  ]},
  { question: "새로운 사람을 만날 때?", options: [
    { text: "먼저 말을 건다", type: "E" },
    { text: "상대가 다가오길 기다린다", type: "I" },
    { text: "상황에 따라 달라진다", type: "X" },
    { text: "눈치만 본다", type: "I" }
  ]},
  { question: "선물 고를 때?", options: [
    { text: "감성적인 선물", type: "F" },
    { text: "실용적인 선물", type: "T" },
    { text: "내가 쓰고 싶은 걸 고른다", type: "P" },
    { text: "리스트에서 고른다", type: "J" }
  ]},
  { question: "모임 끝나고 나는?", options: [
    { text: "신나고 기분 좋다", type: "E" },
    { text: "기운이 빠진다", type: "I" },
    { text: "조용한 시간이 필요하다", type: "I" },
    { text: "다음 모임 생각을 한다", type: "E" }
  ]},
  { question: "대화를 할 때 나는?", options: [
    { text: "먼저 질문을 던진다", type: "E" },
    { text: "경청 위주다", type: "I" },
    { text: "말을 많이 한다", type: "E" },
    { text: "상대방을 잘 관찰한다", type: "S" }
  ]},
  { question: "일정 관리 스타일은?", options: [
    { text: "캘린더로 꼼꼼히 관리", type: "J" },
    { text: "생각날 때 한다", type: "P" },
    { text: "마감 직전 몰아서", type: "P" },
    { text: "하루 전에는 반드시 체크", type: "J" }
  ]},
  { question: "감정 표현은?", options: [
    { text: "바로 말한다", type: "F" },
    { text: "참았다가 푼다", type: "I" },
    { text: "글로 푼다", type: "N" },
    { text: "내색 안 한다", type: "T" }
  ]},
  { question: "갈등이 생기면?", options: [
    { text: "대화로 푼다", type: "F" },
    { text: "상대 입장을 고려한다", type: "F" },
    { text: "객관적으로 해결한다", type: "T" },
    { text: "조용히 거리를 둔다", type: "I" }
  ]},
  { question: "휴일 계획은?", options: [
    { text: "계획 세워서 알차게", type: "J" },
    { text: "그날 기분 따라", type: "P" },
    { text: "누워서 쉰다", type: "I" },
    { text: "친구 만나 놀기", type: "E" }
  ]},
  { question: "영화 고를 때 나는?", options: [
    { text: "리뷰를 먼저 확인", type: "S" },
    { text: "느낌 가는 대로", type: "N" },
    { text: "흥행 순위 기준", type: "T" },
    { text: "배우를 보고 고름", type: "F" }
  ]},
  { question: "감정 변화는?", options: [
    { text: "크고 다양하다", type: "F" },
    { text: "거의 티 안 남", type: "T" },
    { text: "기분 따라 말투가 바뀜", type: "P" },
    { text: "자주 우울해진다", type: "I" }
  ]},
  { question: "전화보다 더 편한 건?", options: [
    { text: "문자나 채팅", type: "I" },
    { text: "전화가 더 좋다", type: "E" },
    { text: "영상 통화", type: "E" },
    { text: "아무것도 싫다", type: "I" }
  ]},
  { question: "할 일 리스트는?", options: [
    { text: "반드시 작성", type: "J" },
    { text: "작성은 하는데 잊어버림", type: "P" },
    { text: "안 쓴다", type: "P" },
    { text: "마감 하루 전 정리", type: "J" }
  ]},
  { question: "친구가 힘들어할 때 나는?", options: [
    { text: "공감하며 위로", type: "F" },
    { text: "해결책 제시", type: "T" },
    { text: "같이 울어줌", type: "F" },
    { text: "도움을 줄 사람 연결", type: "J" }
  ]},
  { question: "여행 스타일은?", options: [
    { text: "계획 짜서 움직임", type: "J" },
    { text: "일단 떠나서 생각", type: "P" },
    { text: "그때그때 결정", type: "P" },
    { text: "정해진 코스로 이동", type: "J" }
  ]},
  { question: "나를 표현할 단어는?", options: [
    { text: "감성", type: "F" },
    { text: "현실", type: "T" },
    { text: "열정", type: "E" },
    { text: "내향", type: "I" }
  ]},
  { question: "새로운 도전을?", options: [
    { text: "무조건 해본다", type: "N" },
    { text: "조심스럽게 접근", type: "S" },
    { text: "안정이 우선", type: "S" },
    { text: "변화가 재미있다", type: "N" }
  ]},
  { question: "사랑에 빠지면?", options: [
    { text: "감정이 앞선다", type: "F" },
    { text: "신중히 생각한다", type: "T" },
    { text: "확신이 없으면 시작 안 함", type: "J" },
    { text: "일단 표현한다", type: "E" }
  ]}
];

export default questions;

