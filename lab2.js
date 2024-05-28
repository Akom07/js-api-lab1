url = "https://rickandmortyapi.com/api/character"
const row = document.querySelector('.row')
// const Cname = document.querySelector('#cname')
async function character() {
    const res = await fetch(url)
    const data = await res.json()
    result = data.results
    console.log(data);
    result.forEach(e => {
        // console.log(element);
        const col = document.createElement('div')
        const h1 = document.createElement('h1')
        const img = document.createElement('img')
        h1.innerText = e.name
        img.src = e.image

        row.append(col)
        col.classList.add("col","border","text-center")
        col.append(h1,img)



    });
}



character()