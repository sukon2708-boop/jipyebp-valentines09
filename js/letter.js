const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const hintText = document.getElementById("hintText");

const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const letterText = document.getElementById("letterText");

let opening = false;
let letterOpened = false;

const MESSAGE = `
Glad alla hjärtans dag, Booboo 🐰 Tack för att du kom in i mitt liv och blev mitt leende, mitt stöd och min trygghet varje dag. Sedan jag har dig har mitt vanliga liv blivit så mycket mer speciellt. Bara att få prata med dig, skratta med dig eller göra tokiga saker tillsammans gör mig så lycklig. Tack för att du håller min hand under de bra dagarna och aldrig släpper den under de dåliga. Jag lovar att älska dig, ta hand om dig och alltid stå vid din sida länge, länge. Jag älskar dig så mycket, Booboo 🐰💗
`;

// 📨 คลิกที่ซองจดหมาย
openLetter.addEventListener("click", () => {

  // ถ้าเปิดแล้ว → คลิกเพื่ออ่านจดหมาย
  if (letterOpened) {
    openModal();
    return;
  }

  if (opening) return;
  opening = true;

  // ซ่อนคำแนะนำ
  hintText.style.display = "none";

  // ปรับปุ่ม
  readBtn.textContent = "กำลังเปิดจดหมาย...";

  // letter2
  openLetter.classList.remove("letter-closed");
  openLetter.src = "assets/letter2.png";

  // ไป letter3
  setTimeout(() => {
    openLetter.src = "assets/letter3.png";
    letterOpened = true;
    opening = false;

    readBtn.textContent = "อ่านจดหมาย";
  }, 600);
});

// ปุ่มอ่านจดหมาย
readBtn.addEventListener("click", () => {
  if (!letterOpened) return;
  openModal();
});

// เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ปิด modal
closeModalBtn.addEventListener("click", () => {
  modalBackdrop.style.display = "none";
});

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) {
    modalBackdrop.style.display = "none";
  }
});
