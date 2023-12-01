const BASE_URL = 'http://localhost:8000'

fetch(BASE_URL + '/api/doors/')
.then(res => res.json())
.then(data => {
    console.log(data);
})