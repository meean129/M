const surpriseBtn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const typingText = document.getElementById("typingText");

const text = `
ขอบคุณที่เข้ามาเป็นส่วนที่ดีที่สุดของเค้านะ
ถึงจะแค่ 3 เดือนแต่เค้ามีความสุขมากที่มีเธออยู่
ขอบคุณจริงๆ อยากอยู่กับเธอไปจนแก่เลย ฮ่าฮ่า 
ขออยู่จนเรียกหล่าวโผได้อิอิ มีแหวนที่นิ้วนางด้วยดีมั้ย🥸
รักเธอนะ โอปอ💖
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
