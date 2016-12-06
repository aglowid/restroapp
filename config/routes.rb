Restroapp::Application.routes.draw do
  resources :order_items

  resources :orders

  resources :foods

  resources :food_labels

  resources :food_types

  resources :food_categories

  resources :dinning_tables

  devise_for :users
  get "home/index"
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#index'
  get "api_help/index"

  post 'get_food_price' => 'orders#get_food_price'
  get 'pay_bill' => 'orders#pay_bill'
  post 'pay_bill_update' => 'orders#pay_bill_update'


    namespace :api, :defaults => {:format => 'json'} do
    scope :module => :v1 do
      post 'sign_up' => 'users#sign_up',:as => :signup
      post 'login'  => 'users#sign_in', :as => :login
      get  'logout' => 'users#sign_out', :as => :logout
      post 'change_password'   => 'passwords#change_password'
      post 'forgot_password'   => 'passwords#forgot_password'
      post 'check_table_availability' => 'orders#check_table_availability'
      post 'place_order' => 'orders#place_order'
    end
  end
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end
  
  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
