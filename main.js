let url = "https://coffee.alexflipnote.dev/random.json"
let coffee = document.querySelector(".coffee")
fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        coffee.src = data.file
    })
setInterval(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        coffee.src = data.file
    })
},3000)

// async function img (){
//     
// const image = await fetch(url)
// const data = await image.json()
// }

// img()
