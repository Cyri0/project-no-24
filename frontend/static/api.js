// const BASE_URL = 'http://localhost:8000'
const BASE_URL = ''

let wrapper = document.getElementById('wrapper')

const openDoor = (d, backDoor) => {
    fetch(BASE_URL + '/api/toggledoor/' + d.id)
    .then(res => res.json())
    .then(data => {
        if(data.isOpen){
            link = data.image.replace('/frontend','')

                backDoor.style.backgroundImage = `url("${link}")`
        }
    })
}

const openImageModal = (e) => {
    
    modal = document.createElement('div')
    modal.classList.add('modal')
    document.body.appendChild(modal)
    modal.style.backgroundImage = e.target.style.backgroundImage


    modal.addEventListener('click', ()=>{
        document.body.removeChild(modal)
    })
}

const createDoor = (d, canToggle) => {
    let backDoor = document.createElement('div')
    backDoor.className = 'backDoor'

    backDoor.addEventListener('click', (e)=>{
        openImageModal(e)
    })

    let door = document.createElement('div')
    door.className = 'door'

    date = new Date(d.date)
    dateNum = date.getDate();

    door.innerText = `${dateNum}.`
    if(canToggle){
        door.addEventListener('click', ()=>{
            openDoor(d,backDoor)
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