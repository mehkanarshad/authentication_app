class RegistrationsController < ApplicationController
    def create
        begin
          user = User.create!(
            email: params['user']['email'],
            password: params['user']['password'],
            password_confirmation: params['user']['password_confirmation']
          )
    
          render json: {
            status: :created,
            user: user
          }
        rescue ActiveRecord::RecordInvalid => e
          render json: {
            status: 422,
            errors: e.record.errors.full_messages
          }
        end
      end
end