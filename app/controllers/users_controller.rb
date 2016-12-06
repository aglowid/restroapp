class UsersController < ApplicationController

	def change_password
	  @user = User.find(current_user)
	end

	def update
		if params[:user][:current_password].present? && params[:user][:password].present?
  		if @user.update_with_password(change_password_params)
  			redirect_to super_admin_user_path ,:notice => "password successfully updated."
			else
  			redirect_to change_password_super_admin_users_path , :notice => "Current password doesn't match."
			end	
		end		
	end	

end
