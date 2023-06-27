Rails.application.routes.draw do
  get 'api/reviews'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :show, :destroy]
    resources :products, only: [:index, :show] do
      collection do
        get 'search'
        get 'brands/:brand', action: :brand, as: :brand 
      end
    end
    resources :cart_items, only: [:create, :update, :destroy, :index]
    resources :reviews, only: [:create, :update, :destroy, :index, :show]
    get 'products/cart_items', to: 'products#cart_items'
  end 
  
  get '*path', to: "static_pages#frontend_index"
  
end
