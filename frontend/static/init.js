let wrapper = document.getElementById('wrapper')

for(let i = 1; i <= 24; i++){
    let door = document.createElement('div')
    door.className = 'door'
    door.innerText = `${i}.`
    wrapper.appendChild(door)
}