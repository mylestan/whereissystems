// On load, have the welcome text appear.
$(document).ready(function (){
	//For Google Maps
	var mapOptions = {
          center: new google.maps.LatLng(43.4722,-80.5472),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);

        var marker = new google.maps.Marker({
          position: google.maps.LatLng(43.472858,-80.53993),
          map: map
        });
});