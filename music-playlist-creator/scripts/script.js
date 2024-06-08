// Pre-setup
let main = document.querySelector("main")
let bottomMod = document.querySelector(".bottomMod") 
let clone1 = bottomMod.cloneNode(true)
let cards = document.querySelector(".playlistCards")
let temp_card2 = cards.cloneNode(true)
main.removeChild(cards);

let flag = true

// JavaScript for Opening and Closing the Modal
function openModal(temp_card) {
   let modal = temp_card.querySelector(".modal");
   modal.style.display = "flex";
   modal.style.margin = "auto";

   let closeButton = temp_card.querySelector(".close");
   closeButton.onclick = function(event) {
      event.stopPropagation()
      modal.style.display = "none"
   };

}

// JS for searching feature
document.getElementById('searchInput').addEventListener('input', function(e) {
   let searchQuery = e.target.value.toLowerCase();
   let filteredPlaylists = data.playlists.filter((playlist) => 
      playlist.playlist_name.toLowerCase().includes(searchQuery)||
      playlist.playlist_creator.toLowerCase().includes(searchQuery)
   );

   displayPlaylists(filteredPlaylists);
});

// Default Page
document.addEventListener('DOMContentLoaded', function() {
   displayPlaylists(data.playlists);
});

// script for displaying playlist
function displayPlaylists(playlists){
   main.innerHTML = '';
   cardAdd()
   playlists.forEach(function (playlist) {
      let songs = playlist.songs;
      let songs2;
   
      let temp_card = temp_card2.cloneNode(true);
      let title = temp_card.querySelector("h4")
      let image  = temp_card.querySelector("#playListImg")
      let blurb = temp_card.querySelector("p")
      blurb.innerText = `Created by ${playlist.playlist_creator}`
      let modal = temp_card.querySelector(".modal")
      let edit  = temp_card.querySelector(".edit")
   
   
        
      edit.addEventListener("click", (e) => {
         e.stopPropagation()
         editFunc(modal,temp_card, playlist)
      })
   
   
   
      modal.querySelector(".bottomMod").classList.add("song-0")
      modal.querySelector(".playlistName").innerText = playlist.playlist_name;
      modal.querySelector(".playlistImage").src = playlist.playlist_art;
      modal.querySelector(".creatorNameModal").innerText = playlist.playlist_creator;
      let temp3 = modal.querySelector(".bottomPart")
   
      modal.querySelector("h3").innerText = songs[0].title
      modal.querySelector("h9").innerText = songs[0].artist
      modal.querySelector(".modImgBottom").src = songs[0].cover_art
      modal.querySelector("h7").innerText = songs[0].album
      modal.querySelector(".time").innerText = songs[0].duration
   
   
   
      for(let i = 1; i < songs.length; i++){
         let c = clone1.cloneNode(true)
         temp3.appendChild(c)   
         c.classList.add(`song-${i}`)
         c.querySelector("h3").innerText = songs[i].title
         c.querySelector(".modImgBottom").src = songs[i].cover_art
         c.querySelector("h9").innerText = songs[i].artist
         c.querySelector("h7").innerText = songs[i].album
         c.querySelector(".time").innerText = songs[i].duration
      }
   
   
      let like = temp_card.querySelector(".like")
   
      
      like.addEventListener("click",(e)=>{
         e.stopPropagation()
         playlist.likeCount +=1 
         temp_card.querySelector(".counter").innerText = playlist.likeCount
         
         
      })
   
      like.addEventListener("mouseenter",()=>{
         like.style.color = "red";
         like.addEventListener("mouseleave",()=>{
            like.style.color = "black";
         })
      })
   
     
      modal.querySelector("button").addEventListener("click",() => shuffle(songs,modal,playlist))
   
   
      image.src = playlist.playlist_art
      title.innerText = playlist.playlist_name
      let deleteButton = temp_card.querySelector(".delete")
   
      deleteButton.addEventListener("click", (e) => {
         e.stopPropagation()
         temp_card.remove()
         
         flag = false
      })
   
      if (flag == true){
         main.appendChild(temp_card)
      }
      
      temp_card.addEventListener("click", () => openModal(temp_card))
      
    
      
      
   })
}



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
      c.classList.add(`song-${i}`)  
      c.querySelector("h3").innerText = songs2[i].title
      c.querySelector(".modImgBottom").src = songs2[i].cover_art
      c.querySelector("h9").innerText = songs2[i].artist
      c.querySelector("h7").innerText = songs2[i].album
      c.querySelector(".time").innerText = songs2[i].duration
   }
}


 function editFunc (mine,temp_card,playlist) {
   let editMenu = document.querySelector(".editMenu");
   editMenu.innerHTML = `
       <label for="name"> Name </label>
       <input type="text" id="name" name="name" placeholder="${temp_card.querySelector("h4").innerText}" >
       
       <label for="creater"> Your name:</label>
       <input type="text" name="creater" id="creater" placeholder="${temp_card.querySelector(".songDescription").innerText}" >
       
       <button class="save">Save</button>
   `;
   for(let i = 0; i < playlist.songs.length; i++){
      editMenu.innerHTML += ` <label for="name"> Name of Song </label>
      <input type="text" class="song-${i}" name="name" placeholder="${playlist.songs[i].title}" >
      <input type="text" class="song-${i}" name="name" placeholder="${playlist.songs[i].title}" >

      `
   }


   
   editMenu.style.display = "flex";
   // Add event listener for the save button here
   let saveButton = editMenu.querySelector(".save");
   saveButton.addEventListener("click", () => {
      let name = document.querySelector("#name").value;
      let blurb = document.querySelector("#creater").value;
      temp_card.querySelector("h4").innerText = name;
      temp_card.querySelector(".songDescription").innerText=  blurb
      

      for(let i = 0; i < playlist.songs.length; i++) {
         let temp = editMenu.querySelector(`.song-${i}`)
         // console.log(temp)
         console.log(mine)
         console.log(mine.querySelector(`.song-${i}`))
         mine.querySelector(`.song-${i}`).innerText = temp.value
         console.log(mine)

      }
      editMenu.style.display = "none";
   });
   return mine
}


function cardAdd(){
   let addCard = document.createElement("div")
   addCard.classList.add = "newCardGenerator"
   addCard.style.width = "230px"
   addCard.style.height = "330px"
   addCard.style.border = "solid"
   addCard.style.borderWidth = "0"
   addCard.style.borderRadius = "10px"
   addCard.style.margin = "20px"
   addCard.style.backgroundColor = "white"
   addCard.style.marginTop = "75px"
   main.appendChild(addCard)


   addCard.addEventListener("click",()=>{
      let editMenu = document.querySelector(".editMenu");
      
      editMenu.innerHTML = `
         <label for="name"> Name </label>
         <input type="text" id="name" name="name" placeholder="" >
         
         <label for="creater"> Your name:</label>
         <input type="text" name="creater" id="creater" placeholder="" >
         
         <button class="save">Save</button>
      `;

      let temp_card = temp_card2.cloneNode(true);
      let title = temp_card.querySelector("h4")
      let image  = temp_card.querySelector("#playListImg")
      let blurb = temp_card.querySelector("p")
      
      title.innerText = editMenu.querySelector("#name").value
      blurb.innerText = editMenu.querySelector("#creater").value
      


      editMenu.style.display = "flex";
      main.appendChild(temp_card)
      let saveButton = editMenu.querySelector(".save");
      saveButton.addEventListener("click", () => {
         title.innerText = editMenu.querySelector("#name").value
         blurb.innerText = editMenu.querySelector("#creater").value
         

         // for(let i = 0; i < playlist.songs.length; i++) {
         //    let temp = editMenu.querySelector(`.song-${i}`)
         //    console.log(temp.value)
         //    mine.querySelector(`.song-${i}`).innerText = temp.value
         //    console.log(mine)

         // }
         editMenu.style.display = "none";
      });
      temp_card.addEventListener("click", () => openModal(temp_card))

   })

}
   

