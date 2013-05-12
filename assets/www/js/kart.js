var posisjon = null;

var load = function() {
	getLokasjon();
}

var getLokasjon = function() {
    var suc = function(p) {
        //alert(p.coords.latitude + " " + p.coords.longitude);
    	posisjon = p;
    	navigator.notification.alert(posisjon.coords.latitude + " " + posisjon.coords.longitude, visKart, "Min lokasjon", "OK");
    };
    var locFail = function() {
    };
    navigator.geolocation.getCurrentPosition(suc, locFail);
};

var visKart = function() {
	var myLocation = new google.maps.LatLng(posisjon.coords.latitude, posisjon.coords.longitude);

    map = new google.maps.Map(document.getElementById('kart_div'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: myLocation,
        zoom: 17
    }); 

    var marker = new google.maps.Marker({
        position: myLocation,
        map: map,
        title: "Du er her!"
    });
    
    marker.setMap(map);
}