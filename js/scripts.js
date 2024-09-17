document.querySelector("#search").addEventListener('submit', async (event) => {
    event.preventDefault();
    const cityName = document.querySelector('#city_name').value;
    if (!cityName) {
        return alert('Você precisa digitar o nome de uma cidade...')
    }
    const apiKey = '524f90f787192324af5d1c6f6781b333';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`;
    
    
    try {
        const dataAtual = new Date()
 
        const results = await fetch(apiUrl);
        const json = await results.json();
    
        const city = json.name
        const temp = json.main.temp
        const temp_max = json.main.temp_max
        const temp_min = json.main.temp_min
        const windSpeed = json.wind.speed
        const icon = json.weather[0].icon
        console.log(icon)
        

        document.getElementById('weather-city').textContent = city
        document.getElementById('temperatura').textContent = Math.round(temp)
        document.getElementById('w-icon').conte



        console.log(json)
 
    }
    catch (error) {
        console.error('Ocorreu um erro:',error)
    }
})
