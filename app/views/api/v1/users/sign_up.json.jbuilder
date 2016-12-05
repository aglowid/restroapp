json.result do
  json.messages "ok"
  json.rstatus  "1"
  json.errorcode ""
end
json.data do
  json.user_id      @user.id
  json.email        @user.email
  json.first_name   @user.first_name
  json.last_name    @user.last_name
  json.contact_no   @user.contact_no
  json.gender       @user.gender
  json.user_type    @user.user_type.name if @user.user_type.present?
  json.device_type  @user.device_type 
  json.device_token @user.device_token
  json.auth_token   @authentication_token
end


