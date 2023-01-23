const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5f260fd5e4msh8c2b3004dd00db2p139b40jsncf5572249756",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city)=>{
	cityName.innerHTML = city;
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    // cloud_pct.innerHTML = response.cloud_pct;
	//display temperature at desired elements in the document
    let temp = document.getElementsByClassName("temp");
	for(let obj of temp){
		obj.innerHTML = response.temp;
	}
	//display emojis based on the temperature
	if(response.temp>=34){
		emotion.innerHTML = "🥵";
		sun.innerHTML = "☀️🌤️🌥️🌦️☁️🌩️⛈️☃️"
	}else if(response.temp>=28 && response.temp<34){
		emotion.innerHTML = "😎";
		sun.innerHTML = "🔆"
	}else if(response.temp>=20 && response.temp<28){
		emotion.innerHTML = "🫠";
		sun.innerHTML = "🌤️"
	}else if(response.temp>=15 && response.temp<20){
		emotion.innerHTML = "🥱";
		sun.innerHTML = "🌥️"
	}else if(response.temp>=10 && response.temp<15){
		emotion.innerHTML = "😬";
		sun.innerHTML = "☁️"
	}else{
		emotion.innerHTML = "🥶";
		sun.innerHTML = "☃️"
	}
	//displaying speed at desired elements in the document
	let speed = document.getElementsByClassName("speed");
	for(let obj of speed){
		obj.innerHTML = response.wind_speed;
	}

	wind.innerHTML = "🍃";
	time.innerHTML = "⏳";
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_degrees.innerHTML = response.wind_degrees;

	let unix1 = response.sunrise;
	let unix2 = response.sunset;
	let date_sunrise = new Date(unix1*1000);
	let date_sunset = new Date(unix2*1000);
    sunrise.innerHTML =  date_sunrise.toLocaleTimeString("default");
    sunset.innerHTML = date_sunset.toLocaleTimeString("default");
  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value);
})
about.addEventListener("click",()=>{
	document.getElementById("main").innerHTML = "<h5 class='text-light text-center mt-5'> &#169; Designed and developed by devesh lingayat. </h5>";
})
getWeather("Mumbai");