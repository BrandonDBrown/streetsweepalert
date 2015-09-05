

var data =[{"type":"Feature","properties":{"title":"Lime between 1st and Broadway","description":"Wednesday 08:00:00 09:00:00 Tuesday 04:00:00 08:00:00","color": "#A4B5AB", "weight": 10, "opacity": 0.65},"geometry":{"coordinates":[[-118.183692,33.769194],[-118.183692,33.768204]],"type":"LineString"},"id":"311861fed7536e66b572cdf8c7fc6e41"},{"type":"Feature","properties":{"title":"Lime between 1st and Medio","description":"Wednesday 08:00:00 09:00:00 Tuesday 08:00:00 09:00:00","color": "#A4B5AB", "weight": 10, "opacity": 0.65},"geometry":{"coordinates":[[-118.183595,33.766866],[-118.182908,33.766866]],"type":"LineString"},"id":"562d6bf397747e8ac37f090852aca042"},{"type":"Feature","properties":{"title":"Lime between 1st and Medio","description":"Wednesday 08:00:00 09:00:00 Tuesday 08:00:00 09:00:00","color": "#A4B5AB", "weight": 10, "opacity": 0.65},"geometry":{"coordinates":[[-118.183686,33.768008],[-118.183692,33.766875]],"type":"LineString"},"id":"6215d40cfebdb08b7d586b1c99e955e9"}]


var map = L.map('map').locate({setView: true, maxZoom: 17});
     L.tileLayer('https://api.tiles.mapbox.com/v4/brandon2.n6ne1ipc/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYnJhbmRvbjIiLCJhIjoiNTdiYjRlNDkwNTg2MGFhY2E2ZTY3YTZiZGFiYmJkYjAifQ.vbf_uXqBVoe3fDCnC5zdPw', {
    maxZoom: 18
}).addTo(map);

function onLocationFound(e) {
    var radius = e.accuracy / 15;
//    L.marker(e.latlng).addTo(map);
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);


//        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',  
    
    
    var onEachFeature = function (feature, layer) {
        var zz = feature.properties.description;
        var b = zz.split(" ");
        
        layer.on('click', function() {
            
            bob.setStyle({
                color: "#A4B5AB",
                weight: 10
            });
            
            layer.setStyle({
                color: "#4C9F70",
                weight: 15
            });
            

            var myHTML = feature.properties.title;
            $('#title').val(myHTML);
            var myHTML2 = feature.properties.description;
            $('#description').val(myHTML2);
            document.getElementById('setTime1').innerHTML = "<i class='fa fa-bell-o fa-lg'></i> " + b[3].substring(0,3).toUpperCase()+ " " +b[4].slice(1, -6) + "am";
            document.getElementById('setTime2').innerHTML = "<i class='fa fa-bell-o fa-lg'></i> "+b[0].substring(0,3).toUpperCase()+ " " + b[1].slice(1, -6) + "am";
            $('.setTime').hide();
            $('.intro').hide();
            $('#setTime').addClass('animated slideInUp').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass('animated slideInUp');
            });
        })
 };


var bob = L.geoJson(data, { 
    style: function (feature) {
        return {color: feature.properties.color, weight: feature.properties.weight, opacity: feature.properties.opacity};
    },
    onEachFeature: onEachFeature
}).addTo(map);
