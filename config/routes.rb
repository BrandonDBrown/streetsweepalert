Rails.application.routes.draw do
#  get 'sessions/new'

  root 'pages#home'
  get '/users/:id/alarms' => 'users#alarms', as: :alarms
#  get 'signup' => 'users#new'
#  get 'login' => 'sessions#new'
#  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'
  get "/auth/:provider/callback" => "sessions#create"
  resources :users
  
end
