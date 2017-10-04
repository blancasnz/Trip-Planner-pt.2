const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1IjoibGF5bGFzaCIsImEiOiJjajhjMzY0b2owNXQzMzNvazN3N2ZlMzEwIn0.Pw1uAx5ZotK0bxG4-6vfDA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", [-74.009, 40.705]);
marker.addTo(map);


fetch('/api/attractions')
   .then(result => result.json())
   .then(function(result) {
    //console.log(result[0][0].name)
    result[0].forEach(function(hotel) {
      var element = document.createElement("option")
      element.append(hotel.name)
      document.getElementById("hotels-choices").append(element)
      // var hotelButton = document.getElementById("hotels-add")
      // hotelButton.on('click', function() {
      //   console.log("testing")
      // })
      document.getElementById("hotels-add").addEventListener("click", function() {
        if (element.selected === true) {
          var itineraryItem = document.createElement("li")
          itineraryItem.append(element.value)
          document.getElementById("hotels-list").append(itineraryItem)
        }
      })
    })
    result[1].forEach(function(restaurant) {
      var element = document.createElement("option")
      element.append(restaurant.name)
      document.getElementById("restaurants-choices").append(element)
    })
    result[2].forEach(function(activity) {
      var element = document.createElement("option")
      element.append(activity.name)
      document.getElementById("activities-choices").append(element)
    })
   })




// fetch('/api/attractions')
//   .then(function(result) {
//     console.log(result)
//     // result[0].forEach(function(hotel) {
//     //   console.log(hotel)
//     //   // var element = document.createElement("option")
//     //   // element.append(hotel.name)
//     //   // document.getElementById("hotels-choices").append(element)
//     // })
//   })



// function replacer(idName) {

// }




// var option = document.getElementsByTagName("option");
// option.append(
//   fetch('/api/attractions')
//   .then(result => result.json()))
// document.getElementById("hotels-choices").append(option)
