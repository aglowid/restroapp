class Api::V1::UsersController < ApplicationController
	before_filter :authentication_user_with_authentication_token, :except => [:sign_up]

	
end
