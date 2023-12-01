const BASE_URL = 'http://localhost:8000'
let wrapper = document.getElementById('wrapper')

const firstOpen = (d) => {
    fetch(BASE_URL + '/api/toggledoor/' + d.id)
    .then(res => {
        // location.reload();
    })
}

const createDoor = (d, canToggle) => {
    let backDoor = document.createElement('div')
    backDoor.className = 'backDoor'
    let door = document.createElement('div')
    door.className = 'door'

    date = new Date(d.date)
    dateNum = date.getDate();

    door.innerText = `${dateNum}.`
    if(canToggle){
        door.addEventListener('click', ()=>{
            if(!d.isOpen){
                firstOpen(d)
            }
            door.classList.toggle('doorOpen')
        })
    }
    backDoor.appendChild(door)
    return backDoor
}


fetch(BASE_URL + '/api/doors/')
.then(res => res.json())
.then(data => {
    const dateNow = new Date();
    data.forEach(door => {
        date = new Date(door.date)
        DOMdoor = createDoor(door, (dateNow > date))
        wrapper.appendChild(DOMdoor)
        console.log();
        if(door.isOpen){
            DOMdoor.children[0].classList.add('doorOpen')
            if(door.image != null){
                link = door.image.replace('/frontend','')

                DOMdoor.style.backgroundImage = `url("${link}")`
            }
        }
    });
})