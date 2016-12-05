class Api::V1::BaseController < ActionController::Base

  rescue_from ActiveRecord::RecordNotFound, :with => :bad_record
  skip_before_filter :verify_authenticity_token, :if => Proc.new { |c| c.request.format == 'application/json' }
  after_filter :set_access_control_headers

  protected

  def  remove_duplicate_devices(device_token)
      if device_token.present?
        existing_devices = UserDevice.where("device_token = ?",device_token)
        existing_devices.each do |device|
          user = device.user 
          user.current_checkin_id = 0
          device.device_type = ""
          device.device_token = "" 
          device.device_udid = "" 
          user.authentication_tokens.destroy_all
          user.save 
          device.save 
        end 
      end 
  end 

  def authentication_user_with_authentication_token
    @current_user = AuthenticationToken.find_user_from_authentication_token(params[:authentication_token])
    unless @current_user.present?
      render_json({:result=>{:messages => ["You required to register or login before continue to this action!"],:rstatus=>0, :errorcode => 401,:errorcode2=>972}}.to_json)
    end 
  end

  def render_json(json)
    callback = params[:callback]
    response = begin
      if callback
        "#{callback}(#{json});"
      else
        json
      end
    end
    render({:content_type => 'text/javascript', :text => response})
  end

  def bad_record
    render_json({:result=>{:messages => ["No records Found"],:rstatus=>0, :errorcode => 404}}.to_json)
  end

  def parameter_errors
    render_json({:result=>{:messages => ["You have supplied invalid parameter list."],:rstatus=>0, :errorcode => 404}}.to_json)
  end

  def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Request-Method'] = '*'
  end

  # to find whether record present in table
  def valid_record(class_name,record_id)
    unless class_name.constantize.exists?(record_id)
      "#{class_name} is invalid"
    end
  end
end