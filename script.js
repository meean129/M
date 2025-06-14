const surpriseBtn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const typingText = document.getElementById("typingText");

const text = `
ขอบคุณที่เข้ามาเป็นส่วนหนึ่งของกันและกันในทุกวันนะโอปอ
แม้จะเพิ่งผ่านไปเพียง 3 เดือน แต่ทุกช่วงเวลาที่อยู่กับเธอมันมีความหมายมาก
ขอบคุณที่เป็นความสบายใจของมีนเสมอ
รักนะ ไม่ว่าเวลาจะผ่านไปแค่ไหน ก็อยากมีกันแบบนี้ไปนานๆ 💖
`;

surpriseBtn.addEventListener("click", () => {
  surpriseBtn.style.display = "none";
  message.classList.remove("hidden");
  typeText(text);
});

function typeText(str) {
  let i = 0;
  function type() {
    if (i < str.length) {
      typingText.innerHTML += str.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}
