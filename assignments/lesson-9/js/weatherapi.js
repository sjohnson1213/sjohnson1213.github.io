var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=d38cd92ae4bb42dbcdc2b72b5f197e7c&units=imperial', true);

weatherRequest.send();
weatherRequest.onload=function(){
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
}