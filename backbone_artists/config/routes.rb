Rails.application.routes.draw do
  resources :artists, only: [:index, :update, :create]
  root to: 'artists#index'

end
