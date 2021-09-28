class AuthenticationController < ApplicationController

  def login
    @user = User.find_by(username: params[:username])

    if @user

      if @user.authenticate(params[:password])
        render json: 'Password match!'
      else 
        render json: 'Login failed.'
      end

    else 
      render json: 'Nope.'
    end

  end

end
