class UsersController < ApplicationController
	before_action :set_data, only: [:new, :user_create, :edit,:update_user]
  before_action :set_user, only: [:edit, :update_user, :destroy]

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

  # user new form
	def new
    @user = User.new
	end	

  # create new user
	def user_create
		@user = User.new(user_params)
		if @user.save
			redirect_to users_path ,:notice => "user successfully created."
		else
		  render :new 
      #flash[:error] = @user.display_errors
		end	
	end	

  # list all users (managers and waiters)
	def index
		user_type = UserType.find_by(:name => "Admin")
		@users = User.includes(:user_type).where.not(:user_type_id => user_type.id )
	end	

	def edit
	end	
  
  def destroy
		if @user.destroy
			redirect_to users_path , notice: "User successfully deleted."
		else
			flash[:error] = "User not deleted."
			redirect_to users_path
		end
  end	

	def update_user
		if @user.update(user_params)
			redirect_to users_path ,:notice => "user successfully updated."
		else
		  render :new 
      #flash[:error] = @user.display_errors
		end	
	end	

	protected 

	def change_password_params
	  params.require(:user).permit(:current_password,:password)
	end

	def user_params
		params.require(:user).permit(:id,:email,:first_name,:last_name,:password,:password_confirmation,:contact_no, :gender, :user_type_id)
	end	

	def set_data
		@user_type = UserType.where.not(:name => "Admin").pluck(:name,:id)
	end	

  def set_user
  	@user = User.find(params[:id])
  end	

end
