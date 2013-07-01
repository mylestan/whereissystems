// On load, have the welcome text appear.
$(document).ready(function (){
	//For Google Maps
	var mapOptions = {
    center: new google.maps.LatLng(43.4722,-80.5472),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    title: 'University of Waterloo'
  });

  //import the data!
  // AJAX call to local file which represents database at the moment.
  $.ajax({
    'async' : true,
    'url' : './static/data.json',
    'dataType' : 'json',
    'cache' : false,
    'success' : function(data){
      console.log("AJAX successful.");
      console.log(data);

      //load it onto the map
      loadData(data);
    },
    'error' : function(error){
      console.log("Could not retrieve data. Error:");
      console.log(error);
    }
  });
});

function loadData(data){

}

// Show and hide the pop-up test
function hidePopup(){
  var popup = document.getElementById("popup");
  popup.id = "popup-hidden";
}


function showPopup(){
  var popup = document.getElementById("popup-hidden");
  popup.id = "popup";
}