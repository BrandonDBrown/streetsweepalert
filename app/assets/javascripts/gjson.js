$(document).on('ready', function () {

//MAPBOX MAP GENERATION WITH GEOJSON AND STREET CLICK ACTIONS 

var mainMap = L.tileLayer(
    'https://api.tiles.mapbox.com/v4/brandon2.n6ne1ipc/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYnJhbmRvbjIiLCJhIjoiNTdiYjRlNDkwNTg2MGFhY2E2ZTY3YTZiZGFiYmJkYjAifQ.vbf_uXqBVoe3fDCnC5zdPw')
            
var controls = L.control.locate({
    remainActive: true, // if true locate control remains active on click even if the user's location is in view.
    drawCircle: false,
    icon: 'fa fa-location-arrow' // class for icon, fa-location-arrow or fa-map-marker
})
            
//        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',  

var location = [];
//Load geoJSON and the function for each street click    

$.getJSON('/data1.geojson', function(data) {
    var resetStyle = L.geoJson(data, {
        style: function(feature) {
            return {
                color: feature.properties['stroke'],
                weight: 15,
                opacity: feature.properties['stroke-opacity']
            };
        },
        onEachFeature: 
            function(feature, layer) {
                var b = feature.properties.description.split(" ");
                layer.on('click', function(e) {
                    resetStyle.setStyle({
                        color: "#A4B5AB",
                        weight: 15
                    });
                    layer.setStyle({
                        color: "#4C9F70",
                        weight: 20
                    });
                    layer.bringToFront();
                    location = [feature.properties.description, feature.properties.title]
                    
                    $('#setTime1').html("<i class='fa fa-bell-o fa-lg'></i> " +
                        b[4].substring(0, 3).toUpperCase() + " " + ((parseInt(b[5].slice(
                            0, -6))+11) % 12 +1) + b[6])
                    $('#setTime2').html("<i class='fa fa-bell-o fa-lg'></i> " +
                        b[0].substring(0, 3).toUpperCase() + " " + ((parseInt(b[1].slice(
                            0, -6))+11) % 12 +1) + b[2])
                    $('.setTime, .intro').hide();
                    $('#setTime').addClass('animated slideInUp').show().one(
                        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                        function() {
                            $(this).removeClass('animated slideInUp');
                        });
                })
          }
    })


    //Initialize mapbox base layer
    var map = L.map('map',{ zoomControl:false }).locate({
        setView: true,
        maxZoom: 17,
    });
    mainMap.addTo(map);
    controls.addTo(map);
    resetStyle.addTo(map);    
});
    
    /* Load Google Calendar client library. For the set calendar event buttons */
    $('#setTime2').click(function() {
        gapi.client.load('calendar', 'v3', rightBtn);
    });
    $('#setTime1').click(function() {
        gapi.client.load('calendar', 'v3', leftBtn);
    });
    
    //RIGHT BUTTON/THE LATER DATE
    function rightBtn() {
        $('#setTime').hide();
        $('.setTime').addClass('animated slideInUp').show().one(
            'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function() {
                $(this).removeClass('animated slideInUp');
            });

        var temp = location[0].split(" ")

        var nextWednesday = dateOfNext(dayOfWeekAsInteger(temp[0]));
        var movedate = nextWednesday.getDate();
        var movemonth = nextWednesday.getMonth() + 1;
        var movedates = ((movedate < 10) ? '0' + movedate : movedate);
        var movemonths = ((movemonth < 10) ? '0' + movemonth : movemonth);

        var title = location[1];
        
//2015-05-28T09:00:00-07:00 due to google calendar api and daylight savings time i am temporarily changing 07:00 to 08:00.  Will need to find a fix for this in the future.
        
        var eventz = {
            'summary': 'Move Car ' + title,
            'location': title,
            'description': title,
            'start': {
                'dateTime': y + '-' + movemonths + '-' + movedates + 'T' +
                    temp[1] + '-08:00',
                'timeZone': 'America/Los_Angeles'
            },
            'end': {
                'dateTime': y + '-' + movemonths + '-' + movedates + 'T' +
                    temp[3] + '-08:00',
                'timeZone': 'America/Los_Angeles'
            },
            'recurrence': ['RRULE:FREQ=DAILY;COUNT=1'],
            'reminders': {
                'useDefault': false,
                'overrides': [{
                    'method': 'popup',
                    'minutes': 60
                }, {
                    'method': 'popup',
                    'minutes': 10
                }]
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

    //LEFT BUTTON/THE EARLIER DATE
    function leftBtn() {
        $('#setTime').hide();
        $('.setTime').addClass('animated slideInUp').show().one(
            'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function() {
                $(this).removeClass('animated slideInUp');
            });
        var temp = location[0].split(" ")

        var nextWednesday = dateOfNext(dayOfWeekAsInteger(temp[4]));
        var movedate = nextWednesday.getDate();
        var movemonth = nextWednesday.getMonth() + 1;
        var movedates = ((movedate < 10) ? '0' + movedate : movedate);
        var movemonths = ((movemonth < 10) ? '0' + movemonth : movemonth);

        var title = location[1];
        var eventz = {
            'summary': 'Move Car ' + title,
            'location': title,
            'description': title,
            'start': {
                'dateTime': y + '-' + movemonths + '-' + movedates + 'T' +
                    temp[5] + '-08:00',
                'timeZone': 'America/Los_Angeles'
            },
            'end': {
                'dateTime': y + '-' + movemonths + '-' + movedates + 'T' +
                    temp[7] + '-08:00',
                'timeZone': 'America/Los_Angeles'
            },
            'recurrence': ['RRULE:FREQ=DAILY;COUNT=1'],
            'reminders': {
                'useDefault': false,
                'overrides': [{
                    'method': 'popup',
                    'minutes': 60
                }, {
                    'method': 'popup',
                    'minutes': 10
                }]
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
}); //end of document ready


//BEGINNING OF SET EVENT BUTTONS JAVASCRIPT

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
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(day);
}

function addDays(myDate, days) {
    return new Date(myDate.getTime() + days * 24 * 60 * 60 * 1000);
}

function subtractDays(myDate, days) {
    return new Date(myDate.getTime() - days * 24 * 60 * 60 * 1000);
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

