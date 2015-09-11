$(document).on('page:change', function () {



//MAPBOX MAP GENERATION WITH GEOJSON AND STREET CLICK ACTIONS 

var data =[{"type":"Feature","properties":{"title":"1st between Lime and Alamitos ave.","description":"Wednesday 04:00:00 08:00:00 Tuesday 04:00:00 08:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.1836,33.768093],[-118.182495,33.768093]],"type":"LineString"},"id":"0c05d3a0d6fa997e66d084c32192ef89"},{"type":"Feature","properties":{"title":"E. 1st street between Orange ave. and Cherry ave.","description":"Friday 10:00:00 12:00:00 Thursday 10:00:00 12:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.17697,33.766759],[-118.168408,33.765627]],"type":"LineString"},"id":"12b65266d4d97b46114d1bb15f52ebfb"},{"type":"Feature","properties":{"title":"Atlantic ave. between E. 1st street and E. Ocean Blvd","description":"Wednesday 04:00:00 08:00:00 Tuesday 04:00:00 08:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.185027,33.767999],[-118.185022,33.76651]],"type":"LineString"},"id":"18c7117496dd415b69e9fe2926f3dc28"},{"type":"Feature","properties":{"title":"Lime between 1st and Broadway","description":"Wednesday 08:00:00 09:00:00 Tuesday 04:00:00 08:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.183692,33.769194],[-118.183692,33.768204]],"type":"LineString"},"id":"311861fed7536e66b572cdf8c7fc6e41"},{"type":"Feature","properties":{"title":"Lime between E. 3rd street and E. 4th street","description":"Wednesday 08:00:00 09:00:00 Tuesday 08:00:00 09:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.183708,33.771558],[-118.183697,33.770675]],"type":"LineString"},"id":"37cfba706b19035a7cda2b0746e4f8b9"},{"type":"Feature","properties":{"title":"E. 2nd street between Orange ave. and Cherry ave.","description":"Friday 10:00:00 12:00:00 Thursday 10:00:00 12:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.176809,33.76783],[-118.16814,33.766706]],"type":"LineString"},"id":"3ee0500ba72ca911b0f3f9283e8715c6"},{"type":"Feature","properties":{"title":"E. 2nd street between Alamitos ave. and Orange ave.","description":"Wednesday 10:00:00 12:00:00 Tuesday 10:00:00 12:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.182141,33.768543],[-118.177163,33.767874]],"type":"LineString"},"id":"52ad6c1af2cd53f073b3479cace61ad8"},{"type":"Feature","properties":{"title":"Lime between 1st and Medio","description":"Wednesday 08:00:00 10:00:00 Tuesday 08:00:00 10:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.183595,33.766866],[-118.182908,33.766866]],"type":"LineString"},"id":"562d6bf397747e8ac37f090852aca042"},{"type":"Feature","properties":{"title":"Lime between 1st and Medio","description":"Wednesday 08:00:00 09:00:00 Tuesday 08:00:00 09:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.183686,33.768008],[-118.183692,33.766875]],"type":"LineString"},"id":"6215d40cfebdb08b7d586b1c99e955e9"},{"type":"Feature","properties":{"title":"E. 1st street between Alamitos ave. and Orange ave.","description":"Wednesday 10:00:00 12:00:00 Tuesday 10:00:00 12:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.182388,33.767455],[-118.177388,33.766813]],"type":"LineString"},"id":"6cfcdf1997793e89448347632c706c41"},{"type":"Feature","properties":{"title":"Lime between East Broadway and E. 3rd street","description":"Wednesday 08:00:00 09:00:00 Tuesday 08:00:00 09:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.183702,33.770416],[-118.183702,33.76935]],"type":"LineString"},"id":"b337678821057f08ad96e8d152df219b"},{"type":"Feature","properties":{"title":"1st between Lime and Atlantic","description":"Wednesday 04:00:00 08:00:00 Tuesday 04:00:00 08:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.183826,33.768088],[-118.184915,33.768088]],"type":"LineString"},"id":"d1801227a50d2efd4090d7de54e4521a"}]

//Initialize mapbox base layer
var map = L.map('map').locate({setView: true, maxZoom: 17});
     L.tileLayer('https://api.tiles.mapbox.com/v4/brandon2.n6ne1ipc/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYnJhbmRvbjIiLCJhIjoiNTdiYjRlNDkwNTg2MGFhY2E2ZTY3YTZiZGFiYmJkYjAifQ.vbf_uXqBVoe3fDCnC5zdPw', {
    maxZoom: 18
}).addTo(map);

//Find current location and place circle on map to represent location
function onLocationFound(e) {
    var radius = e.accuracy / 15;
//    L.marker(e.latlng).addTo(map);
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);


//        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',  
    
//function for each street click    
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
            document.getElementById('setTime1').innerHTML = "<i class='fa fa-bell-o fa-lg'></i> " + b[3].substring(0,3).toUpperCase()+ " " +b[4].slice(0, -6) + "am";
            document.getElementById('setTime2').innerHTML = "<i class='fa fa-bell-o fa-lg'></i> "+b[0].substring(0,3).toUpperCase()+ " " + b[1].slice(0, -6) + "am";
            $('.setTime').hide();
            $('.intro').hide();
            $('#setTime').addClass('animated slideInUp').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass('animated slideInUp');
            });
        })
 };


var bob = L.geoJson(data, { 
    style: function (feature) {
        return {color: feature.properties['stroke'], weight:10, opacity: feature.properties['stroke-opacity']};
    },
    onEachFeature: onEachFeature
}).addTo(map);

    
    


});


