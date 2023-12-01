// let wrapper = document.getElementById('wrapper')
// let doors = []


// for(let i = 1; i <= 24; i++){
//     let backDoor = document.createElement('div')
//     backDoor.className = 'backDoor'
//     let door = document.createElement('div')
//     door.className = 'door'
//     door.innerText = `${i}.`

//     door.addEventListener('click', ()=>{
//         door.classList.toggle('doorOpen')
//     })

//     backDoor.appendChild(door)
//     doors.push(
//         {
//             "num": i,
//             "backDoor": backDoor,
//             "door": door
//         }
//     )
//     wrapper.appendChild(backDoor)
// }