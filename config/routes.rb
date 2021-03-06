Restroapp::Application.routes.draw do
  resources :order_items

  resources :orders

  resources :foods

  resources :food_labels

  resources :food_types

  resources :food_categories

  resources :dinning_tables

  devise_for :users, controllers: { sessions: 'users/sessions', :registrations => "users/registrations",:passwords => "users/passwords" }
  get "home/index"
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'orders#index'
  get "api_help/index"

  post 'get_food_price' => 'orders#get_food_price'
  get 'pay_bill' => 'orders#pay_bill'

  post 'pay_bill_update' => 'orders#pay_bill_update'

  get 'daily_report' => 'orders#daily_report'
  get 'weekly_report' => 'orders#weekly_report'
  get 'monthly_report' => 'orders#monthly_report'
  post 'get_weekly_report' => 'orders#get_weekly_report'
  post 'get_daily_report' => 'orders#get_daily_report'
  post 'get_monthly_report' => 'orders#get_monthly_report'

  get 'get_monthly_report_pdf' => 'orders#get_monthly_report_pdf'
  get 'get_weekly_report_pdf' => 'orders#get_weekly_report_pdf'
  get 'get_daily_report_pdf' => 'orders#get_daily_report_pdf'

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

  resources :users do
    collection {
      get :change_password
      post :user_create
      patch :update_user
    }
  end

end
