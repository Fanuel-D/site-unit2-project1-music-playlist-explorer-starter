// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("festivalModal");
var span = document.getElementsByClassName("close")[0];
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
         
         // window.onclick = function() {
         //    event.target.parentNode.querySelector(".modal").style.display = "none"
         // }
      }
      // else {
      //    event.target.parentElement.parentElement.querySelector(".modal").style.display = "block"
      //    event.target.parentElement.parentElement.querySelector(".close").onclick = function() {
      //       event.target.parentElement.parentElement.querySelector(".modal").style.display = "none"
      //    }
      //    // window.onclick = function() {
      //    //    event.target.parentElement.parentElement.querySelector(".modal").style.display = "none"
      //    // }
      // }
   
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
   let songs = playlist.songs;
   let temp_card = temp_card2.cloneNode(true);
   let title = temp_card.querySelector("h4")
   let image  = temp_card.querySelector("#playListImg")
   let blurb = temp_card.querySelector("p")
   blurb.innerText = `Created by ${playlist.playlist_creator}`

   let mine = temp_card.querySelector(".modal")
   mine.querySelector(".festivalName").innerText = playlist.playlist_name;
   mine.querySelector(".festivalImage").src = playlist.playlist_art;
   mine.querySelector(".festivalText").innerText = playlist.playlist_creator;
   let temp3 = mine.querySelector(".bottomPart")
   mine.querySelector("h3").innerText = songs[0].title
   mine.querySelector("h9").innerText = songs[0].artist
   mine.querySelector(".modImgBottom").src = songs[0].cover_art
   mine.querySelector("h7").innerText = songs[0].album


   for(let i = 1; i < songs.length; i++){
         let c = clone1.cloneNode(true)
         temp3.appendChild(c)   
         c.querySelector("h3").innerText = songs[i].title
         c.querySelector(".modImgBottom").src = songs[i].cover_art
         c.querySelector("h9").innerText = songs[i].artist
         c.querySelector("h7").innerText = songs[i].album
   }


   image.src = playlist.playlist_art
   title.innerText = playlist.playlist_name
   main.appendChild(temp_card)  
   temp_card.addEventListener("click", (e) => openModal(playlist,e))
    
})







