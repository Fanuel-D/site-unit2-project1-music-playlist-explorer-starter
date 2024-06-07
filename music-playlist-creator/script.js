// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("festivalModal");
var span = document.getElementsByClassName("close")[0];
let bottomMod = document.querySelector(".bottomMod") 
let clone1 = bottomMod.cloneNode(true)

function openModal(festival,event) {

   let songs = festival.songs;
   if (event.target.id == "playListImg"){
      let modal1 = event.target.parentNode.querySelector(".modal")
      
      event.target.parentNode.querySelector(".modal").style.display = "block"
      event.target.parentNode.querySelector(".close").onclick = function() {
         event.target.parentNode.querySelector(".modal").style.display = "none"
      }
      
   }

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



playlists.forEach(function (playlist) {
   let songs = playlist.songs;
   let songs2;

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
   mine.querySelector(".time").innerText = songs[0].duration


   for(let i = 1; i < songs.length; i++){
      let c = clone1.cloneNode(true)
      temp3.appendChild(c)   
      c.querySelector("h3").innerText = songs[i].title
      c.querySelector(".modImgBottom").src = songs[i].cover_art
      c.querySelector("h9").innerText = songs[i].artist
      c.querySelector("h7").innerText = songs[i].album
      c.querySelector(".time").innerText = songs[i].duration
   }


   let like = temp_card.querySelector(".like")

   
   like.addEventListener("click",()=>{
      playlist.likeCount +=1 
      temp_card.querySelector(".counter").innerText = playlist.likeCount
   })

   like.addEventListener("mouseenter",()=>{
      like.style.color = "red";
      like.addEventListener("mouseleave",()=>{
         like.style.color = "black";
      })
   })

  
   mine.querySelector("button").addEventListener("click",() => shuffle(songs,mine,playlist))


   image.src = playlist.playlist_art
   title.innerText = playlist.playlist_name
   main.appendChild(temp_card)  
   temp_card.addEventListener("click", (e) => openModal(playlist,e))
   
    
})


function shuffle (songs,mine,playlist) {
   mine.querySelector(".bottomPart").innerHTML = ""
   for (let i = songs.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [songs[i], songs[j]] = [songs[j], songs[i]];
   }
   let songs2 = playlist.songs
   let temp4 = mine.querySelector(".bottomPart")

   for(let i = 0; i < songs2.length; i++){
      let c = clone1.cloneNode(true)

      temp4.appendChild(c)   
      c.querySelector("h3").innerText = songs2[i].title
      c.querySelector(".modImgBottom").src = songs2[i].cover_art
      c.querySelector("h9").innerText = songs2[i].artist
      c.querySelector("h7").innerText = songs2[i].album
      c.querySelector(".time").innerText = songs2[i].duration
   }
 }






