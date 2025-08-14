function openTab(evt, tabName) {
            
let tabContent = document.getElementsByClassName("tab-content");
for (let i = 0; i < tabContent.length; i++) {
tabContent[i].style.display = "none";
}
          
let tabButtons = document.getElementsByClassName("tab-button");
for (let i = 0; i < tabButtons.length; i++) {
tabButtons[i].classList.remove("active");
}
   
document.getElementById(tabName).style.display = "block";
               
 evt.currentTarget.classList.add("active");
}

document.addEventListener('DOMContentLoaded', function () {
document.querySelector('.tab-button.active').click();
});
