class UsersController < ApplicationController

	def change_password
	  @user = User.find(current_user)
	end

	def update
		if params[:user][:current_password].present? && params[:user][:password].present?
  		if current_user.update_with_password(change_password_params)
  			redirect_to change_password_users_path ,:notice => "password successfully updated."
			else
  			redirect_to change_password_users_path , :notice => "Current password doesn't match."
			end	
		else
			redirect_to change_password_users_path , :notice => "Current password required."
		end		
	end	

	def new

	end	

  # list all users (managers and waiters)
	def index
		user_type = UserType.find_by(:name => "Admin")
		@users = User.includes(:user_type).where.not(:user_type_id => user_type.id )
	end	

	protected 

	def change_password_params
	  params.require(:user).permit(:current_password,:password)
	end

end
