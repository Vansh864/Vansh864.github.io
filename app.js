const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const ans = document.querySelector(".ans");
const emoji = document.querySelector(".emoji");

no.addEventListener("click", () => {
    ans.innerText = "Wrong Choice";
    emoji.innerText = "😭";
});

yes.addEventListener("click", () => {
    ans.innerText = "Hehe! Correct.";
    emoji.innerText = "😚";
});