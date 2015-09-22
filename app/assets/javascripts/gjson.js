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
            
            resetStyle.setStyle({
                color: "#A4B5AB",
                weight: 15
            });
            
            layer.setStyle({
                color: "#4C9F70",
                weight: 20
            });
            
            var location =[feature.properties.description, feature.properties.title]

            $('#title').val(location[1]);
            $('#description').val(location[0]);
            
            $('#setTime1').html("<i class='fa fa-bell-o fa-lg'></i> " + b[3].substring(0,3).toUpperCase()+ " " +b[4].slice(0, -6) + "am")
            $('#setTime2').html("<i class='fa fa-bell-o fa-lg'></i> "+b[0].substring(0,3).toUpperCase()+ " " + b[1].slice(0, -6) + "am")
            $('.setTime, .intro').hide();
            $('#setTime').addClass('animated slideInUp').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass('animated slideInUp');
            });
        })
 };

var resetStyle = L.geoJson(data, { 
    style: function (feature) {
        return {color: feature.properties['stroke'], weight:15, opacity: feature.properties['stroke-opacity']};
    },
    onEachFeature: onEachFeature
}).addTo(map);
  
    
});

//BEGINNING OF BUTTON JAVASCRIPT

var d = new Date();
var y = d.getYear() + 1900;
var calevent = 0;
var eventzId;

function loadCalendarApi() {
        gapi.client.load('calendar', 'v3', listUpcomingEvents);
      }

      function listUpcomingEvents() {
         var requester = gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'q': "Move Car"
        });

        requester.execute(function(resp) {
          var events = resp.items;
          if (events.length > 0) {
              eventzId = events[0].id;
              calevent = 1;
          } else {
              calevent = 0;
          }
        });
      }
//THESE FUNCTION HELP TO SET THE CORRECT DATE FOR THE NEXT TIME YOU NEED TO MOVE YOUR CAR
function dayOfWeekAsInteger(day) {
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(day);
}

function addDays(myDate,days) {
    return new Date(myDate.getTime() + days*24*60*60*1000);
}

function subtractDays(myDate,days) {
    return new Date(myDate.getTime() - days*24*60*60*1000);
}

function dateOfNext(weekdayNumber) {
    var today = new Date();

    var lastSunday = subtractDays(today, today.getDay());

    var daysToAdd = weekdayNumber;
    if (weekdayNumber <= today.getDay()) {
        daysToAdd = daysToAdd + 7;
    }

    return addDays(lastSunday, daysToAdd);
}

/**
       * Load Google Calendar client library. List upcoming events
       * once client library is loaded.
       */
      function loadCalendarApiR() {
        gapi.client.load('calendar', 'v3', rightBtn);
      }

      function loadCalendarApiL() {
        gapi.client.load('calendar', 'v3', leftBtn);
      }

      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */
     function rightBtn() {

          $('#setTime').hide();
          $('.setTime').addClass('animated slideInUp').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass('animated slideInUp');
            });
         
          var temp = document.getElementById('description').value.split(" ")
          var nextWednesday = dateOfNext(dayOfWeekAsInteger(temp[0]));
          var movedate = nextWednesday.getDate();
          var movemonth = nextWednesday.getMonth() + 1;
          if(movedate < 10) {
              var movedates = '0' + movedate;
          } else {
              var movedates = movedate;
          }
          if(movemonth < 10) {
              var movemonths = '0' + movemonth;
          } else {
              var movemonths = movemonth;
          }
          

          var eventz = {
            'summary': 'Move Car ' + document.getElementById('title').value ,
            'location': document.getElementById('title').value,
            'description': document.getElementById('title').value,
            'start': {
                'dateTime': y + '-' + movemonths + '-' + movedates + 'T' + temp[1] +'-07:00',
                'timeZone': 'America/Los_Angeles'
            },
            'end': {
                'dateTime': y + '-' + movemonths + '-' + movedates + 'T' + temp[2] +'-07:00',
                'timeZone': 'America/Los_Angeles'
            },
            'recurrence': [
                'RRULE:FREQ=DAILY;COUNT=1'
            ],
            'reminders': {
                'useDefault': false,
                'overrides': [
                    {'method': 'popup', 'minutes': 60},
                    {'method': 'popup', 'minutes': 10}
                ]
            }
          };
         
      if (calevent == 1) {
        var requestzy = gapi.client.calendar.events.delete({
          'calendarId': 'primary',
          'eventId': eventzId
        });
        requestzy.execute();
          
        var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': eventz
          });
        request.execute();
          
      } else {
          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': eventz
          });
            request.execute();
      };
    };

      function leftBtn() {
          $('#setTime').hide();
          $('.setTime').addClass('animated slideInUp').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('animated slideInUp');
            });
          
          var temp = document.getElementById('description').value.split(" ")
          var nextWednesday = dateOfNext(dayOfWeekAsInteger(temp[3]));
          var movedate = nextWednesday.getDate();
          var movemonth = nextWednesday.getMonth() + 1;
          if(movedate < 10) {
              var movedates = '0' + movedate;
          } else {
              var movedates = movedate;
          }
          if(movemonth < 10) {
              var movemonths = '0' + movemonth;
          } else {
              var movemonths = movemonth;
          }
          
          var eventz = {
            'summary': 'Move Car ' + document.getElementById('title').value,
            'location': document.getElementById('title').value,
            'description': document.getElementById('title').value,
            'start': {
                'dateTime': y + '-' + movemonths + '-' +movedates+'T' + temp[4] +'-07:00',
                'timeZone': 'America/Los_Angeles'
            },
            'end': {
                'dateTime': y + '-' + movemonths + '-' +movedates+'T' + temp[5] +'-07:00',
                'timeZone': 'America/Los_Angeles'
            },
            'recurrence': [
                'RRULE:FREQ=DAILY;COUNT=1'
            ],
            'reminders': {
                'useDefault': false,
                'overrides': [
                    {'method': 'popup', 'minutes': 60},
                    {'method': 'popup', 'minutes': 10}
                ]
            }
          };

      if (calevent == 1) {
        var requestzy = gapi.client.calendar.events.delete({
          'calendarId': 'primary',
          'eventId': eventzId
        });
        requestzy.execute();
          
        var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': eventz
          });
        request.execute();
          
      } else {
            var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': eventz
          });
            request.execute();
      };
          
        };