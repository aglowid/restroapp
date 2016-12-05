class Api::V1::UsersController < Api::V1::BaseController
	before_filter :authentication_user_with_authentication_token, :except => [:sign_up]

	def sign_up
		@user = User.new(user_create_params)
		if @user.save
      @authentication_token = @user.authentication_tokens.create(:auth_token => AuthenticationToken.generate_unique_token).auth_token
    else
      render_json({:result=>{:messages => @user.display_errors, :rstatus=>0, :errorcode => 404}}.to_json)
    end
	end	
	

  private
  def user_create_params
    params.require(:user).permit(:email, :password, :password_confirmation, :user_type_id, :first_name, :last_name, :gender, :contact_no, :device_type, :device_token)
  end

end
