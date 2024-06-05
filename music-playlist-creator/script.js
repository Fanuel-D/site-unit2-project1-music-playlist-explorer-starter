// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("festivalModal");
var span = document.getElementsByClassName("close")[0];

function openModal(festival) {
   document.getElementById('festivalName').innerText = festival.name;
   document.getElementById('festivalImage').src = festival.imageUrl;
   document.getElementById('festivalDates').innerText = `Dates: ${festival.dates}`;
   modal.style.display = "block";
}

span.onclick = function() {
   modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}

let main = document.querySelector("main")
let cards = document.querySelector(".playlistCards")

for(let i  = 0; i< 16; i++){
    main.appendChild(cards.cloneNode(true));
}

cards.addEventListener("mouseenter", (e)=>{
    e.target.style.transform = "translateY(5px)";
    
})


