var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Preston,us&appid=d38cd92ae4bb42dbcdc2b72b5f197e7c&units=imperial', true);

weatherRequest.send();
weatherRequest.onload=function(){
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    
    document.getElementById('pres_current').innerHTML = weatherData.weather[0].main;
    document.getElementById('pres_temp_current').innerHTML = weatherData.main.temp;
    document.getElementById('pres_humid').innerHTML = weatherData.main.humidity;
    document.getElementById('pres_precip').innerHTML = weatherData.clouds.all;
    document.getElementById('pres_wind_speed').innerHTML = weatherData.wind.speed;
    document.getElementById('pres_currentword').innerHTML = weatherData.weather[0].main;

    var iconcode = weatherData.weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('currentimage').src = icon_path;

    document.getElementById('wed_weather').innerHTML = weatherData.main.temp_max;
}