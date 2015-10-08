$(document).on('ready', function () {

//MAPBOX MAP GENERATION WITH GEOJSON AND STREET CLICK ACTIONS 

var data = [{"type":"Feature","properties":{"title":"E. 1st street between Orange ave. and Cherry ave.","description":"Friday 10:00:00 12:00:00 Thursday 10:00:00 12:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.17697,33.766759],[-118.168408,33.765627]],"type":"LineString"},"id":"12b65266d4d97b46114d1bb15f52ebfb"},{"type":"Feature","properties":{"title":"E. Ocean Blvd. between Atlantic ave. and Alamitos ave.","description":"Wednesday 04:00:00 08:00:00 Tuesday 04:00:00 08:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.184909,33.766331],[-118.183847,33.76618],[-118.183354,33.766278]],"type":"LineString"},"id":"141dd28fc6efa13fd0d406881f96c60b"},{"type":"Feature","properties":{"title":"Esperanza ave. between E. Ocean blvd and East Broadway","description":"Friday 10:00:00 12:00:00 Thursday 10:00:00 12:00:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.175082,33.768133],[-118.175575,33.765502]],"type":"LineString"},"id":"15fc32e29397622bbf9e3d64b54f040b"},{"type":"Feature","properties":{"title":"Atlantic ave. between E. 1st st. and E. Ocean Blvd","description":"Wednesday 04:00:00 08:00:00 Tuesday 04:00:00 08:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.185022,33.767995],[-118.185022,33.76651]],"type":"LineString"},"id":"18c7117496dd415b69e9fe2926f3dc28"},{"type":"Feature","properties":{"title":"South 5th Pl. and E. Ocean Blvd.","description":"Friday 08:00:00 10:00:00 Thursday 08:30:00 10:30:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.177823,33.765658],[-118.177925,33.765118]],"type":"LineString"},"id":"22da4d6108d42e2a53ba302d5b013859"},{"type":"Feature","properties":{"title":"Atlantic ave. between E. 1st street and E. Broadway","description":"Wednesday 04:00:00 08:00:00 Tuesday 04:00:00 08:00:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.185027,33.769185],[-118.185027,33.768177]],"type":"LineString"},"id":"29f8a91bf5fd24a374ca265093964af4"},{"type":"Feature","properties":{"title":"Lime ave between E. 1st st. and E. Broadway","description":"Wednesday 08:00:00 09:00:00 Tuesday 04:00:00 08:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.183692,33.769194],[-118.183692,33.768204]],"type":"LineString"},"id":"311861fed7536e66b572cdf8c7fc6e41"},{"type":"Feature","properties":{"title":"Atlantic ave. between E. Broadway and E. 3rd st.","description":"Wednesday 04:00:00 08:00:00 Tuesday 04:00:00 08:00:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.185038,33.770416],[-118.185027,33.769417]],"type":"LineString"},"id":"34aa6618fb22f55d410f0f3106bb0a43"},{"type":"Feature","properties":{"title":"Lime ave. between E. 3rd st. and E. 4th st.","description":"Wednesday 08:00:00 09:00:00 Tuesday 08:00:00 09:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.183708,33.771558],[-118.183697,33.770675]],"type":"LineString"},"id":"37cfba706b19035a7cda2b0746e4f8b9"},{"type":"Feature","properties":{"title":"E. 2nd street between Orange ave. and Cherry ave.","description":"Friday 10:00:00 12:00:00 Thursday 10:00:00 12:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.176809,33.76783],[-118.16814,33.766706]],"type":"LineString"},"id":"3ee0500ba72ca911b0f3f9283e8715c6"},{"type":"Feature","properties":{"title":"Gaviota ave. between E. Ocean blvd and East Broadway","description":"Friday 10:00:00 12:00:00 Thursday 10:00:00 12:00:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.171488,33.76766],[-118.171992,33.765074]],"type":"LineString"},"id":"3f7e8c27d34684f14649c8803e0e53ff"},{"type":"Feature","properties":{"title":"E. Broadway between Atlantic ave. and Lime ave.","description":"Wednesday 04:00:00 08:00:00 Tuesday 04:00:00 08:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.183804,33.769283],[-118.184888,33.769301]],"type":"LineString"},"id":"417c1bd5982fe90562275a92e9cea835"},{"type":"Feature","properties":{"title":"Cerritos ave. between E. Ocean blvd and East Broadway","description":"Wednesday 10:00:00 12:00:00 Tuesday 10:00:00 12:00:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.178654,33.768588],[-118.179159,33.76601]],"type":"LineString"},"id":"487895ff0941b1651cefa5e23923d7a9"},{"type":"Feature","properties":{"title":"Alboni Pl. between E. Ocean blvd and E. 1st street","description":"Wednesday 10:00:00 12:00:00 Tuesday 10:00:00 12:00:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.181637,33.767268],[-118.181814,33.766407]],"type":"LineString"},"id":"4be5a545bedb101ba1754da21df4454c"},{"type":"Feature","properties":{"title":"E. 2nd street between Alamitos ave. and Orange ave.","description":"Wednesday 10:00:00 12:00:00 Tuesday 10:00:00 12:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.182141,33.768543],[-118.177163,33.767874]],"type":"LineString"},"id":"52ad6c1af2cd53f073b3479cace61ad8"},{"type":"Feature","properties":{"title":"Medio st. between Lime ave and Alamitos ave.","description":"Wednesday 08:00:00 10:00:00 Tuesday 08:00:00 10:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.183595,33.766866],[-118.182908,33.766866]],"type":"LineString"},"id":"562d6bf397747e8ac37f090852aca042"},{"type":"Feature","properties":{"title":"Orange ave. between E. Ocean blvd and East Broadway","description":"Wednesday 10:00:00 12:00:00 Tuesday 10:00:00 12:00:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.176863,33.768365],[-118.177335,33.76576]],"type":"LineString"},"id":"58de8c60cbe0ca6ac8291eecc2933e49"},{"type":"Feature","properties":{"title":"Lime a between 1st and Medio","description":"Wednesday 08:00:00 09:00:00 Tuesday 08:00:00 09:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.183686,33.768008],[-118.183692,33.766875]],"type":"LineString"},"id":"6215d40cfebdb08b7d586b1c99e955e9"},{"type":"Feature","properties":{"title":"South 1st Pl. and E. Ocean Blvd.","description":"Friday 08:30:00 10:30:00 Thursday 08:30:00 10:30:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.181412,33.766086],[-118.181471,33.765698]],"type":"LineString"},"id":"66110966b9f4a964444b80197c954da4"},{"type":"Feature","properties":{"title":"E. 1st street between Alamitos ave. and Orange ave.","description":"Wednesday 10:00:00 12:00:00 Tuesday 10:00:00 12:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.182388,33.767455],[-118.177388,33.766813]],"type":"LineString"},"id":"6cfcdf1997793e89448347632c706c41"},{"type":"Feature","properties":{"title":"Hermosa ave. between E. Ocean blvd and East Broadway","description":"Friday 10:00:00 12:00:00 Thursday 10:00:00 12:00:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.169696,33.767428],[-118.1702,33.764851]],"type":"LineString"},"id":"78b886f9d04c4c81dc25147e37653338"},{"type":"Feature","properties":{"title":"Cherry ave. between E. Ocean blvd and East Broadway","description":"Friday 10:00:00 12:00:00 Thursday 10:00:00 12:00:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.167915,33.767187],[-118.168387,33.764619]],"type":"LineString"},"id":"affa0f64dd87f1a417e0fd45442568f3"},{"type":"Feature","properties":{"title":"Lime ave between E. Broadway and E. 3rd st","description":"Wednesday 08:00:00 09:00:00 Tuesday 08:00:00 09:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.183702,33.770416],[-118.183702,33.76935]],"type":"LineString"},"id":"b337678821057f08ad96e8d152df219b"},{"type":"Feature","properties":{"title":"South 3rd Pl. and E. Ocean Blvd.","description":"Friday 08:00:00 10:00:00 Thursday 08:30:00 10:30:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.179615,33.765912],[-118.179711,33.765363]],"type":"LineString"},"id":"b54091edb1d0951af6154cea9f946b47"},{"type":"Feature","properties":{"title":"E. Broadway between Lime ave. and Alamitos ave.","description":"Wednesday 04:00:00 08:00:00 Wednesday 04:00:00 08:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.183574,33.769288],[-118.18249,33.76927],[-118.182152,33.769194]],"type":"LineString"},"id":"c28b3ccd178e95437c7aec2a859daa97"},{"type":"Feature","properties":{"title":"South 4th Pl. and E. Ocean Blvd.","description":"Friday 08:00:00 10:00:00 Thursday 08:30:00 10:30:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.178719,33.765774],[-118.178826,33.765212]],"type":"LineString"},"id":"c57ae3eb7c9603a4c9c12dfc7a446d1d"},{"type":"Feature","properties":{"title":"E. 1st street between Atlantic ave. and Alamitos ave.","description":"Wednesday 04:00:00 08:00:00 Tuesday 04:00:00 08:00:00","stroke":"#A4B5AB","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.182528,33.768088],[-118.184915,33.768088]],"type":"LineString"},"id":"d1801227a50d2efd4090d7de54e4521a"},{"type":"Feature","properties":{"title":"Alamitos ave. between E. 1st st. and E. Ocean Blvd","description":"Friday 04:00:00 08:00:00 Thursday 04:00:00 08:00:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.182393,33.768057],[-118.182753,33.766938],[-118.183048,33.766461]],"type":"LineString"},"id":"d29af83109b95b8e41abedc1c5561352"},{"type":"Feature","properties":{"title":"Bonito ave. between E. Ocean blvd and East Broadway","description":"Wednesday 10:00:00 12:00:00 Tuesday 10:00:00 12:00:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.180425,33.768766],[-118.180918,33.766287]],"type":"LineString"},"id":"e279edabd18b7f1db7e1bb183534f4a5"},{"type":"Feature","properties":{"title":"South 2nd Pl. and E. Ocean Blvd.","description":"Friday 08:30:00 10:30:00 Thursday 08:30:00 10:30:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.180505,33.766023],[-118.180591,33.765537]],"type":"LineString"},"id":"e43aeb59085fd16ad57868c092860eba"},{"type":"Feature","properties":{"title":"Falcon ave. between E. Ocean blvd and East Broadway","description":"Friday 10:00:00 12:00:00 Thursday 10:00:00 12:00:00","stroke":"#a4b5ab","stroke-width":10,"stroke-opacity":0.6499999761581421},"geometry":{"coordinates":[[-118.173279,33.76791],[-118.173794,33.76527]],"type":"LineString"},"id":"f3c526a3e4f678ff400f447bf781fa5d"}]

//Initialize mapbox base layer
var map = L.map('map').locate({
    setView: true,
    maxZoom: 17
});

L.tileLayer(
    'https://api.tiles.mapbox.com/v4/brandon2.n6ne1ipc/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYnJhbmRvbjIiLCJhIjoiNTdiYjRlNDkwNTg2MGFhY2E2ZTY3YTZiZGFiYmJkYjAifQ.vbf_uXqBVoe3fDCnC5zdPw', {
        maxZoom: 18
    }).addTo(map);
            
L.control.locate({
    remainActive: true, // if true locate control remains active on click even if the user's location is in view.
    drawCircle: false,
    icon: 'fa fa-location-arrow', // class for icon, fa-location-arrow or fa-map-marker
    locateOptions: {
        maxZoom: 17
    }
}).addTo(map);
            
//        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',  

var location = [];
//Load geoJSON and the function for each street click    

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
            layer.on('click', function() {
                resetStyle.setStyle({
                    color: "#A4B5AB",
                    weight: 15
                });
                layer.setStyle({
                    color: "#4C9F70",
                    weight: 20
                });
                location = [feature.properties.description, feature.properties
                    .title]
                $('#setTime1').html("<i class='fa fa-bell-o fa-lg'></i> " +
                    b[3].substring(0, 3).toUpperCase() + " " + b[4].slice(
                        0, -6) + "am")
                $('#setTime2').html("<i class='fa fa-bell-o fa-lg'></i> " +
                    b[0].substring(0, 3).toUpperCase() + " " + b[1].slice(
                        0, -6) + "am")
                $('.setTime, .intro').hide();
                $('#setTime').addClass('animated slideInUp').show().one(
                    'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                    function() {
                        $(this).removeClass('animated slideInUp');
                    });
            })
      }
}).addTo(map);


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

        var eventz = {
            'summary': 'Move Car ' + title,
            'location': title,
            'description': title,
            'start': {
                'dateTime': y + '-' + movemonths + '-' + movedates + 'T' +
                    temp[1] + '-07:00',
                'timeZone': 'America/Los_Angeles'
            },
            'end': {
                'dateTime': y + '-' + movemonths + '-' + movedates + 'T' +
                    temp[2] + '-07:00',
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

        var nextWednesday = dateOfNext(dayOfWeekAsInteger(temp[3]));
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
                    temp[4] + '-07:00',
                'timeZone': 'America/Los_Angeles'
            },
            'end': {
                'dateTime': y + '-' + movemonths + '-' + movedates + 'T' +
                    temp[5] + '-07:00',
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

});


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