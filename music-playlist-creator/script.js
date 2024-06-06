// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("festivalModal");
var span = document.getElementsByClassName("close")[0];
let count = 0;
let bottomMod = document.querySelector(".bottomMod") 
let clone1 = bottomMod.cloneNode(true)

function openModal(festival,event) {

   // document.getElementById('festivalDates').innerText = `Dates: ${festival.dates}`;

      let songs = festival.songs;
      if (event.target.id == "playListImg"){
         let modal1 = event.target.parentNode.querySelector(".modal")
         
         event.target.parentNode.querySelector(".modal").style.display = "block"
         event.target.parentNode.querySelector(".close").onclick = function() {
            event.target.parentNode.querySelector(".modal").style.display = "none"
         }
         modal1.querySelector(".festivalName").innerText = festival.playlist_name;
         modal1.querySelector(".festivalImage").src = festival.playlist_art;
         modal1.querySelector(".festivalText").innerText = festival.playlist_creator;
         let temp3 = modal1.querySelector(".bottomPart")
         modal1.querySelector("h3").innerText = songs[0].title
         if (count == 0){
            for(let i = 1; i < songs.length; i++){
               let c = clone1.cloneNode(true)
               temp3.appendChild(c)
               
               c.querySelector("h3").innerText = songs[i].title
   
            }
         }
         
         
         // window.onclick = function() {
         //    event.target.parentNode.querySelector(".modal").style.display = "none"
         // }
      }else {
         event.target.parentElement.parentElement.querySelector(".modal").style.display = "block"
         event.target.parentElement.parentElement.querySelector(".close").onclick = function() {
            event.target.parentElement.parentElement.querySelector(".modal").style.display = "none"
         }
         // window.onclick = function() {
         //    event.target.parentElement.parentElement.querySelector(".modal").style.display = "none"
         // }
      }
   
   
   count+=1
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
// console.log(playlists)


playlists.forEach(function (playlist) {
   let temp_card = temp_card2.cloneNode(true);
   let title = temp_card.querySelector("h4")
   let image  = temp_card.querySelector("#playListImg")
   let blurb = temp_card.querySelector("p")
   blurb.innerText = `Created by ${playlist.playlist_creator}`



   image.src = playlist.playlist_art
   title.innerText = playlist.playlist_name
   temp_card.addEventListener("click", (e) => openModal(playlist,e))
   main.appendChild(temp_card)   
})







// for(let i = 0; i < 10; i++) {
//     bottomPart.appendChild(bottomMod.cloneNode(true))
// }



