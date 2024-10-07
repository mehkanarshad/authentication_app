Rails.application.routes.draw do
  resources :sessions ,only: [:create]
  resources :registrations ,only: [:create]
  delete :logout ,to: "sessions#logout"
  get :logged_in,to: "sessions#logged_in"
  get "up" => "rails/health#show", as: :rails_health_check
end
