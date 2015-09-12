#config/initalizers/omniauth.rb
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '845919965723-jte5403epcbbcagjqojk8325a2jchbnk.apps.googleusercontent.com', 'nBpNihevD0YVhkrL6j5tqEDc', {
  scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar',  
    redirect_uri: 'https://still-castle-6480.herokuapp.com/auth/google_oauth2/callback'
    }
end














#access_type: 'offline',



#redirect_uri:'http://localhost:3000/auth/google_oauth2/callback'