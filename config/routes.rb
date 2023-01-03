Rails.application.routes.draw do  
  # Defines the root path route ("/")
  root 'root#index'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
      get 'greetings' => 'greetings#index'
    end
  end
end
