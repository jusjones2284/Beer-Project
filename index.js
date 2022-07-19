const base_url = 'https://api.punkapi.com/v2/beers'
// http://localhost:3000/Italian


document.addEventListener("DOMContentLoaded", ()=> {



fetch(base_url)
.then(response => response.json())
.then(data =>{
    console.log(data)
    const ul = document.getElementById('beer')
    console.log(ul)
    data.forEach(beers => {
        const beerNamesDescrip = `${beers.name} : 
        ${beers.description}`
        const li = document.createElement('li')
        li.innerText = beerNamesDescrip 
        ul.append(li)
        li.addEventListener('click',()=>{

        

        })
    })
    

})

})





// const URL = 'http://localhost:3000/pokemons'

// fetch(URL)
// .then(response => response.json())
// .then(data => {
//   console.log(data)
//   const ul = document.querySelector('')
//   data.forEach(pokemon =>{
//     const interpolated = `${pokemon.id} ${pokemon.name}`
//     const li = document.createElement('li')
//     li.innerText = interpolated
//     ul.append(li)

//   })
// })