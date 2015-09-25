Rails.application.routes.draw do
  root 'pages#home'
  get '/users/:id/alarms' => 'users#alarms', as: :alarms
  delete 'logout' => 'sessions#destroy'
  get "/auth/:provider/callback" => "sessions#create"
  resources :users
end
