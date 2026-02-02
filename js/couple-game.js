const questions = [
  {
    q: "เกมส์ที่ทำให้เราได้เจอกัน",
    c: ["1. R.E.P.O", "2. SCUM", "3. Monster hunter wilds"],
    correct: 1,
    
  },
  {
    q: "เพลงแรกที่เปิดให้เค้าฟัง",
    c: ["1. หากว่าฉันได้ครอบครอง", "2. Daylight ", "3. ติดเธอซะก่อน"],
    correct: 0,
   
  },
  {
    q: "ทริปในฝันของเราสองคน",
    c: ["1. เที่ยวญี่ปุ่น", "2. เที่ยวยุโรป", "3. ไปไหนก็ได้ แค่ไปด้วยกัน"],
    correct: 2,
   
  },
  {
    q: "คำพูดที่เค้าชอบพูดบ่อยๆ",
    c: ["1. นั่นแน่ มีพิรุธอีกแล้วนะ", "2. ไม่ต้อง! บู๋นั่นแหละ", "3. บู๋ๆ ไปไหนนน "],
    correct: 2,
   
  },
  {
    q: "ถ้าเถียงกันใครจะชนะ",
    c: ["1.เค้า", "2.กลับไปอ่านข้อ 1", "3.กลับไปอ่านข้อ 2 อีกที"],
    correct: 2,
   
  }
];

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 3) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
