/**
 * 


function initialize() {
    var myLatlng = new google.maps.LatLng(36,-78.9);
    var myOptions = {
      zoom: 10,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    //document.write(myLatlng)
    var geocoder = new geocoder.geocode();
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    
    
    //showAddress("618 S Lasalle St, Durham, NC, 27705")
  	}
*/

function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(36,-78.9);
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  }

  function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map, 
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }