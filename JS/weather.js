const apikey = "8d01f55a543040d894b174007240506";

function getWeather() {
  var city = document.getElementById("city").value;
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("esta ciudad no existe como tlaxcala");
      }
      return response.json();
    })
    .then((data) => {
      if (data && data.current && data.location) {
        document.getElementById("weather").innerHTML =
          `<h2>${data.location.name}, ${data.location.country} <img src = "${data.current.condition.icon}"></img> </h2>` +
          `<p> Estado: ${data.location.region}</p>` +
          `<p>Fecha y Hora: ${data.current.last_updated}</p>` +
          `<p>La temperatura es: ${data.current.temp_c}°C</p>` +
          `<p>Sensacion real de: ${data.current.feelslike_c}°C</p>` +
          `<p>La velocidad del viento: ${data.current.wind_kph} km</p>` +
          `<p>La humedad es: ${data.current.humidity}%</p>` +
          `<p>Probabilidad de lluvia: ${data.current.precip_in}%</p>` +
          `<p>La condicion del dia es: ${data.current.condition.text}</p>` +
          `<p> Nivel de rayos UV: ${data.current.uv}</p>` +
          `<p>Si tu casa esta a menos de ${data.current.vis_km}km si puedes ver tu casa </p>`;
        /* `<img src = "${data.current.condition.icon}"></img>`  */
        console.log(data);
      }
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
}
