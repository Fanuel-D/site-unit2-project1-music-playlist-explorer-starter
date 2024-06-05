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
let temp_card2 = cards.cloneNode(true)
main.removeChild(cards);


let playlists = data.playlists;
console.log(playlists)


playlists.forEach(function (playlist) {
   let temp_card = temp_card2.cloneNode(true);
   let title = temp_card.querySelector("h4")
   let image  = temp_card.querySelector("#playListImg")
   let blurb = temp_card.querySelector("p")
   blurb.innerText = `Create by ${playlist.playlist_creator}`



   image.src = playlist.playlist_art
   title.innerText = playlist.playlist_name
   main.appendChild(temp_card)
})




let bottomMod = document.querySelector(".bottomMod");
let bottomPart = document.querySelector(".bottomPart")

for(let i = 0; i < 10; i++) {
    bottomPart.appendChild(bottomMod.cloneNode(true))
}



