Rails.application.routes.draw do

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"


  get '/google2a00eed5d1f4e4fe.html', to: 'google#google'
  get '/moon', to: 'home#moon', as: "moon"
    get '/home', to: 'home#index', as: "home"
    get '/index', to: 'home#index', as: "index"
  get '/testimonials', to:'home#testimonials', as: 'testimonials'
  root 'home#moon'
end
