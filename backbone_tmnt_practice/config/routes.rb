Rails.application.routes.draw do
  resources :turtles, only: [:index]
  root to: 'turtles#index'


end
