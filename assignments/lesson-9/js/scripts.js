var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', '     &appid=d38cd92ae4bb42dbcdc2b72b5f197e7c&units=imperial', true);

weatherObject.send();
weatherObject.onload=function(){
    var weatherinfo = JSON.parse(weaterObject.responseText);
    
    console.log(weatherInfo);
}