Rails.application.routes.draw do
  resources :test_bancos
  get 'several/index'
  get 'several/show'
  get 'several/new'
  get 'several/edit'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
