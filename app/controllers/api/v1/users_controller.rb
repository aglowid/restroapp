class Api::V1::UsersController < Api::V1::BaseController
	before_filter :authentication_user_with_authentication_token, :except => [:sign_up, :sign_in]

	def sign_up
		@user = User.new(user_create_params)
		if @user.save
      @authentication_token = @user.authentication_tokens.create(:auth_token => AuthenticationToken.generate_unique_token).auth_token
    else
      render_json({:result=>{:messages => @user.display_errors, :rstatus=>0, :errorcode => 404}}.to_json)
    end
	end	
	
	def sign_in
		@user = User.authenticate_user_with_auth(params[:email], params[:password])
		if @user.present?
			@user.update_attributes(:device_type => params[:device_type], :device_token => params[:device_token])
			token = AuthenticationToken.where(:user_id => @user.id)
			if token.present?
	        token.destroy_all
	      end
	    @authentication_token = @user.authentication_tokens.create(:auth_token => AuthenticationToken.generate_unique_token).auth_token
	    render :file => "api/v1/users/sign_up"
    else
      render_json({:result=>{:messages => [User.invalid_credentials],:rstatus=>0, :errorcode => 404}}.to_json)
    end  
	end	

  private
  def user_create_params
    params.require(:user).permit(:email, :password, :password_confirmation, :user_type_id, :first_name, :last_name, :gender, :contact_no, :device_type, :device_token)
  end

end
