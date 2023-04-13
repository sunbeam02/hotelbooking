// var firstName = 'Samuel'
// var surName = 'Olaleye'

// let myname = document.getElementById('name')
// var initials = firstName.charAt(0) + surName.charAt(0)
// myname.innerText = initials

var standardRoom = document.getElementById('standard')
var executiveRoom = document.getElementById('executive')
var deluxeRoom = document.getElementById('suite')
//usserlogin 
 users =[{name:"Olaleye Samuel", email:"olaleye.s@bullseyemanpower.com", password:"class"}]
//login to dashboard

const signIn = document.getElementById('signInCon')
const dash = document.getElementById('dashboard')
const form1 = document.getElementById("form1")
const logBtn =document.getElementById("login")

 
logBtn.addEventListener('click', (e)=>{

  e.preventDefault()

  currentUser = users[0]

  // var data = new FormData(document.getElementById("formCon"))

  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
   
  if (email === currentUser.email && password === currentUser.password){
    
    console.log(JSON.stringify(currentUser))

    fullname = currentUser.name.split(' ')
    inits = fullname[0].chartAt(0) + fullname[1].chartAt(0)
    document.getElementById('initial').innerText = inits.toUpperCase()
    dashboard.classList.replace('hidden', 'block')
    signInCon.style.display = "none"
       
    
  }
})





const login=(userId)=>{
  
  // else{
  //   document.getElementById('errorOutput').innerText ="Email or Paaword not correct"
  // }
}

// standardRoom.addEventListener('click', (e)=>{
//     // returns all tasks when 
//     e.preventDefault()

//     // a function that clears the panel element
//     clearPanel()
//     // a function that displays all the tasks on the panel elements 
//     createTask(tasks)
// })

// executiveRoom.addEventListener('click', (e)=>{
//     // returns all tasks when 
//     e.preventDefault()

//     // a function that clears the panel element
//     clearPanel()
//     // a function that displays all the tasks on the panel elements 
//     createTask(tasks)
// })

// deluxeRoom.addEventListener('click', (e)=>{
//     // returns all tasks when 
//     e.preventDefault()

//     // a function that clears the panel element
//     clearPanel()
//     // a function that displays all the tasks on the panel elements 
//     createTask(tasks)
// })


// const roomGallery = document.getElementById("room-gallery");

// // Array of room image URLs
// const roomImages = [
//   "/assets/single rooms/sing5.jpg",
//   "sing6.jpg",
//   "single2.jpg",
//   "single 3.jpg"
// ];

// // Function to dynamically create room image elements
// function createRoomImageElement(src) {
//   const img = document.createElement("img");
//   img.src = src;
//   img.alt = "Room Image";
//   img.classList.add("room-image");
//   roomGallery.appendChild(img);
// }

// // Loop through the room images array and create image elements
// for (let i = 0; i < roomImages.length; i++) {
//   createRoomImageElement(roomImages[i]);
// }
