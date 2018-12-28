Rails.application.routes.draw do
  resources :fruits, only: [:index, :create, :destroy, :update]

  root to: 'home#index'
end
