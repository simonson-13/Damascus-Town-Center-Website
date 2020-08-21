//API key: 43a08872a6fbba7458ca136e49a9ac5e
//http://api.openweathermap.org/data/2.5/weather?q=Damascus,USA&units=imperial&appid=43a08872a6fbba7458ca136e49a9ac5e

var icon = document.querySelector('.icon');
var temp = document.querySelector('.temp');
// var humidity = document.querySelector('.humidity');
var low = document.querySelector('.low');
var high = document.querySelector('.high');


fetch("http://api.openweathermap.org/data/2.5/weather?q=Damascus,us&units=imperial&appid=43a08872a6fbba7458ca136e49a9ac5e")
.then(response => response.json())
.then(data => {
  var iconVal = data.weather[0].icon;
  var tempVal = data['main']['temp'];
  // var humidityVal = data['main']['humidity'];
  var lowVal = data['main']['temp_min'];
  var highVal = data['main']['temp_max'];

  icon.innerHTML = "<img src=http://openweathermap.org/img/wn/"+ iconVal + "@2x.png width='60' height='60'>";
  console.log(icon);
  // $.('icon').attr('src', icon);
  temp.innerHTML = tempVal;
  // humidity.innerHTML = humidityVal;
  low.innerHTML = lowVal;
  high.innerHTML = highVal;
});
