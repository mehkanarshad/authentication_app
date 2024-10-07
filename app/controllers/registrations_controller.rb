class RegistrationsController < ApplicationController
    def create
        user = User.create!(
            email: params['user']['email'],
            password: params['user']['password'],
            password_confirmation: params['user']['password_confirmation']
        )
    end

    if user 
        render json:{
            status: :created,
            user: user
        }
    else
        render json:{
            status: 401
        }
    end

end