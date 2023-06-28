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
        get 'categories/:category', action: :category, as: 'category'
        get 'cart_items'
      end
    end
    resources :cart_items, only: [:create, :update, :destroy, :index]
    resources :reviews, only: [:create, :update, :destroy, :index, :show]
    resources :loves, only: [:create, :destroy, :index]
  end 
  
  get '*path', to: "static_pages#frontend_index"
  
end
