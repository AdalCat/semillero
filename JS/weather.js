const apikey = '8d01f55a543040d894b174007240506';

function getWeather(){
    var city = document.getElementById('city').value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`)
    .then(response =>{
        if(!response.ok){
        throw new Error('esta ciudad no existe como tlaxcala');
    }
    return response.json();
})
.then(data => {
    if(data && data.current && data.location){
        document.getElementById('weather').innerHTML = 
        `<h2>${data.location.name}, ${data.location.country}</h2>` +
        `<p>La temperatura es: ${data.current.temp_c}°C</p>` +
        `<p>La condicion del dia es: ${data.current.condition.text}</p>` +
        `<p>Fecha y Hora: ${data.current.last_updated}</p>`
        console.log(data)
    }
})
.catch(error => {
    alert(error);
    console.error(error);
})
}