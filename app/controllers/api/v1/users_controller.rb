class Api::V1::UsersController < Api::V1::BaseController
	before_filter :authentication_user_with_authentication_token, :except => [:sign_up, :sign_in]

  # user sign up 
	def sign_up
		@user = User.new(user_create_params)
		if @user.save
      @authentication_token = @user.authentication_tokens.create(:auth_token => AuthenticationToken.generate_unique_token).auth_token
    else
      render_json({:result=>{:messages => @user.display_errors, :rstatus=>0, :errorcode => 404}}.to_json)
    end
	end	
	
	# user sign in
	def sign_in
		@user = User.authenticate_user_with_auth(params[:email], params[:password])
		if @user.present?
			@user.update_attributes(user_update_params)
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

  # user sign out
	def sign_out
    @token = AuthenticationToken.current_authentication_token_for_user(@current_user.id,params[:authentication_token]).first
    if @token.present?
      @token.destroy
      render_json({:result=>{:messages =>["ok"],:rstatus=>1, :errorcode =>""},:data=>{:messages =>["Logout Successfully!"]}}.to_json)
    else
      render_json({:errors => ["No user found with authentication_token = #{params[:authentication_token]}"]}.to_json)
    end		
	end	

  private
  def user_create_params
    params.require(:user).permit(:email, :password, :password_confirmation, :user_type_id, :first_name, :last_name, :gender, :contact_no, :device_type, :device_token)
  end

  def user_update_params
  	params.permit(:device_token,:device_type)
  end

end
