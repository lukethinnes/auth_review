class UsersController < ApplicationController

  def index
    begin
      authorization_header = request.headers["Authorization"]
      token = authorization_header.split(' ')[1]
      secret = Rails.application.secrets.secret_key_base
      decoded_token = JWT.decode(token, secret)
      @users = User.all
      render json: @users
    rescue
      render json: 'Invalid.'
    end
  end

  def create
    @user = User.create(user_params)
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
