

var d = new Date();
var y = d.getYear() + 1900;

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
            'summary': 'Move Car ' + document.getElementById('title').value,
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
           
            });
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

          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': eventz
          });

          request.execute(function(event) {
           
          });
          
        };


 function loadCalendarApi() {
        gapi.client.load('calendar', 'v3', listUpcomingEvents);
      }

      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */

      function listUpcomingEvents() {
         var request = gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'q': "Move Car"
        });

        request.execute(function(resp) {
          var events = resp.items;
          appendPre('Upcoming events:');

          if (events.length > 0) {
            for (i = 0; i < events.length; i++) {
              var event = events[i];
              var when = event.start.dateTime;
              if (!when) {
                when = event.start.date;
              }
              appendPre(event.summary +event.id+ ' (' + when + ')')
            }
          } else {
            appendPre('No upcoming events found.');
          }

        });
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('output');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

     function deletez() {
         
        var requestzy = gapi.client.calendar.events.delete({
          'calendarId': 'primary',
          'eventId': '6ia0pd9g75gvmemjjlslijam9c_20150909T150000Z'
        });

        requestzy.execute(function(resp) {
        })
     };


