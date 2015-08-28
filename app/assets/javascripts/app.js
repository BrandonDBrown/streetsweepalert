
      // Your Client ID can be retrieved from your project in the Google
      // Developer Console, https://console.developers.google.com
      var CLIENT_ID = '845919965723-jte5403epcbbcagjqojk8325a2jchbnk.apps.googleusercontent.com';
      var SCOPES = ["https://www.googleapis.com/auth/calendar"];

      var d = new Date();
      var n = d.getMonth() + 1;
      var y = d.getYear() + 1900;



      /**
       * Check if current user has authorized this application.
       */
      function checkAuth() {
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES,
            'immediate': true
          }, handleAuthResult);
      }

      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      function handleAuthResult(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
          authorizeDiv.style.display = 'none';
//          loadCalendarApi();
        } else {
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
          authorizeDiv.style.display = 'inline';
        }
      }

      /**
       * Initiate auth flow in response to user clicking authorize button.
       *
       * @param {Event} event Button click event.
       */
      function handleAuthClick(event) {
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          handleAuthResult);
        return false;
      }


//THIS FOLLOWING JAVASCRIPT WILL SET THE "EVENTZ" VARIABLES OPTIONS VIA LEAFLET MAP


   


      /**
       * Load Google Calendar client library. List upcoming events
       * once client library is loaded.
       */
      function loadCalendarApiR() {
        gapi.client.load('calendar', 'v3', listUpcomingEventsR);
      }

      function loadCalendarApiL() {
        gapi.client.load('calendar', 'v3', listUpcomingEventsL);
      }

      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */
      function listUpcomingEventsR() {
          var temp = document.getElementById('description').value.split(" ")
          
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
            'summary': 'Move Car for Street Sweeping',
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

          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': eventz
          });

            request.execute(function(event) {
            appendPre('Event created: ' + event.htmlLink);
            });
      };

      function listUpcomingEventsL() {
          var temp = document.getElementById('description').value.split(" ")
          
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
            'summary': 'Move Car for Street Sweeping',
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

var request = gapi.client.calendar.events.insert({
  'calendarId': 'primary',
  'resource': eventz
});

request.execute(function(event) {
  appendPre('Event created: ' + event.htmlLink);
});
        };