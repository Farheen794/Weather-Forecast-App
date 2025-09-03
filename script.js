async function getWeather(city) {
    const apiKey = "0f4a1abd79385d696fa88001e599d826"; // replace with your actual key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    

    try {
        const response = await fetch(url);
        if (!response.ok) {            
            throw new Error(`Error: ${response.status}`);
        }
        invalid.innerHTML=""
        const data = await response.json();
        city_name.innerHTML=city
        description.innerHTML=data.weather[0]?.main || "N/A";
        humidity.innerHTML=data.main?.humidity ?? "N/A";
        sealevel.innerHTML=data.main?.sea_level ?? "N/A";
        temp.innerHTML=data.main?.temp ?? "N/A";
        wind_speed.innerHTML=data.wind?.speed ?? "N/A";
        wind_gust.innerHTML=data.wind?.gust ?? "N/A";
        wind_degree.innerHTML=data.wind?.deg ?? "N/A";
        min_temp.innerHTML=data.main?.temp_min ?? "N/A";
        max_temp.innerHTML=data.main?.temp_max ?? "N/A";
        Feels_like.innerHTML=data.main?.feels_like ?? "N/A";
        visibility.innerHTML=data?.visibility ?? "N/A";
        pressure.innerHTML=data.main?.pressure ?? "N/A";
        console.log(data);
    } catch (error) {
        invalid.innerHTML="<h2>Invalid City, Please Enter Valid City Name</h2>"
        console.error(error);
    }
}
async function updateCityWeather(city, tempId, humidityId, feelsId) {
    const apiKey = "0f4a1abd79385d696fa88001e599d826"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();

        document.getElementById(tempId).innerHTML = data.main.temp;
        document.getElementById(humidityId).innerHTML = data.main.humidity;
        document.getElementById(feelsId).innerHTML = data.main.feels_like;

    } catch (error) {
        console.error(error);
    }
}

getWeather("Delhi")

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
})
Bangalore.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather("Bangalore");
})
Kolkata.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather("Kolkata");
})
Pune.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather("Pune");
})
updateCityWeather("Shanghai", "shanghai_temp", "shanghai_humidity", "shanghai_feels");
updateCityWeather("New York", "newyork_temp", "newyork_humidity", "newyork_feels");
updateCityWeather("Pune", "pune_temp", "pune_humidity", "pune_feels");
updateCityWeather("Bhopal", "bhopal_temp", "bhopal_humidity", "bhopal_feels");




//0f4a1abd79385d696fa88001e599d826
//https://api.openweathermap.org/data/2.5/weather?q=Bhopal&appid=0f4a1abd79385d696fa88001e599d826&units=metric