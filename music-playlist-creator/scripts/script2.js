let playlists = data.playlists;
let clone = document.querySelector(".bottomMod").cloneNode(true)
document.querySelector(".songList").removeChild(document.querySelector(".bottomMod"))

let selected = playlists[Math.floor(Math.random()*playlists.length)]

let playImg = document.querySelector(".image")

playImg.addEventListener("click",()=>{
    
})
playImg.src = selected.playlist_art
let title = document.querySelector("h4")
let blurb = document.querySelector("p")
blurb.innerText = `Created by ${selected.playlist_creator}`
title.innerText = selected.playlist_name

let songList = document.querySelector(".songList")
let songs = selected.songs

for(let i = 0; i < songs.length; i++) {
    let copy1 = clone.cloneNode(true)


    copy1.querySelector("h3").innerText = songs[i].title
    copy1.querySelector(".modImgBottom").src = songs[i].cover_art
    copy1.querySelector("h9").innerText = songs[i].artist
    copy1.querySelector("h7").innerText = songs[i].album
    copy1.querySelector(".time").innerText = songs[i].duration

    songList.appendChild(copy1)

}
