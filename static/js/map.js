$.get("../../components/header.html",function(response){
  $("#nav").html(response);})



// $.getJSON("../assets/keys.json",function(response) {
//     console.log(response.maps);}
//   )

setTimeout(function(){
$("#home_link").removeClass("active");
$("#emp_link").addClass("active");
}, 5)

$("#search_location").submit(event => {
  event.preventDefault();
  var searchTerm = $("#loc_search").val();
  showMap(searchTerm);
})

$.getJSON("../assets/keys.json",mapsCall);



function showMap(searchTerm="Boston") {
  var map;
  function initMap(response) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: response.coord.lat, lng: response.coord.lon},
      zoom: 8
    });
  }
  var url = "http://api.openweathermap.org/data/2.5/weather";
  var data = {
    q: searchTerm,
    appid:
  };
  $.get(url,data,initMap);
}
