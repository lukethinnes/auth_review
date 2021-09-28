class ApplicationController < ActionController::API

  def authenticate
    begin
      authorization_header = request.headers['Authorization']
      token = authorization_header.split(' ')
      secret = Rails.application.secrets.secret_key_base
      decoded_token = JWT.decode(token, secret)
    rescue
      render json: { message: 'Login failed.' }
    end
  end

end
