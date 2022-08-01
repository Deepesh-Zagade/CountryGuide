let countryinp = document.getElementById('countryinp')
let searchbtn = document.getElementById('searchbtn')
let contents = document.getElementById('result')

searchbtn.addEventListener('click', () => {
    let country =  countryinp.value
    let url = `https://restcountries.com/v3.1/name/${country}?fullText=true`
    //Calling API
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        let obj =data[0]
        console.log(obj)
        console.log(obj.capital[0])
        console.log(obj.flags.svg)
        console.log(obj.name.common)
        console.log(obj.continents[0])
        console.log(Object.keys(obj.currencies)[0])
        console.log(obj.currencies[Object.keys(obj.currencies)].name)
        console.log(Object.values(obj.languages).toString())
        contents.innerHTML = `<img src ="${obj.flags.svg}" class = "flagimg" ></img>
        <h2 class = "countryname" >${obj.name.common}</h2>
        <div class= "wrapper">
            <div class= "datawrapper">
                <h4>Capital:</h4>
                <span>${obj.capital[0]}</span>
            </div>
        </div>
        <div class= "wrapper">
            <div class= "datawrapper">
                <h4>Continent:</h4>
                <span>${obj.continents[0]}</span>
            </div>
        </div>
        <div class= "wrapper">
            <div class= "datawrapper">
                <h4>Population:</h4>
                <span>${obj.population}</span>
            </div>
        </div>
        <div class= "wrapper">
            <div class= "datawrapper">
                <h4>Currency:</h4>
                <span>${obj.currencies[Object.keys(obj.currencies)].name} - ${Object.keys(obj.currencies)[0]}</span>
            </div>
        </div>
        <div class= "wrapper">
            <div class= "datawrapper">
                <h4>Currency:</h4>
                <span>${Object.values(obj.languages).toString()}</span>
            </div>
        </div>

        `
        
    })
    

})