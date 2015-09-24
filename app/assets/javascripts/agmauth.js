// Your Client ID can be retrieved from your project in the Google
      // Developer Console, https://console.developers.google.com
      var CLIENT_ID = '845919965723-jte5403epcbbcagjqojk8325a2jchbnk.apps.googleusercontent.com';
      var SCOPES = ["https://www.googleapis.com/auth/calendar"];
      
      /**
       * Check if current user has authorized this application.
       */
      function checkAuth() {
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES,
            'immediate': true
          }, loadCalendarApi);
      }


//SHOWS ADD TO HOMESCREEN BANNER AND REMOVES AFTER ADD TO HOMESCREEN
$(document).ready(function() {
    if ('standalone' in navigator && !navigator.standalone && (/iphone|ipod|ipad/gi).test(navigator.platform) && (/Safari/i).test(navigator.appVersion)) {
    $('.banner').show()
}
});
   