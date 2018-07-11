$.get("../../components/header.html",function(response){
  $("#nav").html(response);})

$("#weather-info").css("display", "none");


$("#search_weather").submit(event => {
  event.preventDefault();
  var searchTerm = $("#city_search").val();
  var url = "http://api.openweathermap.org/data/2.5/weather";
  var data = {
    q: searchTerm,
    appid: ""
  };
  function showWeather(response) {
    // console.log(response);
    var high = (response.main.temp_max - 273.15).toFixed(0) + "&deg";
    var low = (response.main.temp_min - 273.15).toFixed(0) + "&deg";
    var forecast = response.weather[0].main;
    var description = response.weather[0].description;
    $("#high").html(high);
    $("#low").html(low);
    $("#forecast").text(forecast);
    $("#description").text(description)

    $("#weather-info").css("display", "block");
  }
  $.get(url,data,showWeather);
})
