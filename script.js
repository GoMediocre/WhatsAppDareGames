let isRandomizationAllowed = false;
let list = ["Veriyan", "Thambi", "Annan", "Machan", "Nanba", "Nanbi"];

window.onload = () => {
  isRandomizationAllowed = true;
  setTimeout(() => isRandomizationAllowed = false, 3000);
  
  setInterval(() => {
    if(isRandomizationAllowed) {
      let randomTextIndexInList = Math.floor(Math.random() * list.length);
      updateText(randomTextIndexInList);
    }
  }, 100);
}

function updateText(index) {
    let h3 = document.getElementById("randomText");
    h3.innerText = list[index];
}