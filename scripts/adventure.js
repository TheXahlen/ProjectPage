let Location = "Center"
document.addEventListener('keydown', (event)=> {    
 if (event.key == "ArrowDown"){
 		console.log("Down Arrow!")
    if (Location = "Center"){
    Location = "South"
    }
    if (Location = "North"){
    Location = "Center"
    }
    
 }
  if (event.key == "ArrowUp"){
 		console.log("Up Arrow!")
    if (Location = "Center"){
    Location = "North"
    }
 }
  if (event.key == "ArrowLeft"){
 if (Location = "Center"){
    Location = "West"
    }
 }
  if (event.key == "ArrowRight"){
 		console.log("Right Arrow!")
    if (Location = "Center"){
    Location = "East"
    }
    ""
 }}
});
