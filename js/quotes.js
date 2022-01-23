const quotes = [
  {
    quote:
      "배는 항구에 정박해 있을 때 가장 안전하다. 그러나 그것이 배의 존재 이유는 아니다.",
    author: "요한 볼프강 폰 괴테",
  },
  {
    quote: "아무것도 변하지 않아도 내가 변하면 모든 것이 변한다.",
    author: "오노레 드 발자크",
  },
  {
    quote:
      "그대가 모든 것을 버려도 좋다고 생각되는 사람은 결코 그대가 모든 것을 버리지 않도록 최선을 다할 것이다.",
    author: "시몬 드 보부아르",
  },
  {
    quote:
      "사랑은 들장미, 우정은 호랑가시나무. 들장미 꽃이 필 때는 호랑가시나무 꽃은 색이 바래버린다. 하지만 어느 쪽이 항상 피어 있을까?",
    author: "에밀리 브론테",
  },
  {
    quote: "사막이 아름다운 것은 어딘가에 샘을 숨기고 있기 때문이다.",
    author: "앙투안 드 생택쥐페리",
  },
  {
    quote: "인간에게 말이 주어진 이유는 생각을 숨기기 위해서다.",
    author: "스탕달",
  },
  {
    quote:
      "서두를 필요는 없다. 반짝일 필요도 없다. 자기 자신 외에는 아무도 될 필요가 없다.",
    author: "버지니아 울프",
  },
  {
    quote: "창의성의 가장 큰 적은 자기 의심이다.",
    author: "실비아 플라스",
  },
  {
    quote:
      "누군가를 미워하고 있다면 그 사람의 모습 속에 보이는 자신의 일부분인 것을 미워하는 것이다. 나의 일부가 아닌 것은 거슬리지 않는다.",
    author: "헤르만 헤세",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
