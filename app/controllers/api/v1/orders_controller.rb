class Api::V1::OrdersController < Api::V1::BaseController
  
  before_filter :authentication_user_with_authentication_token
  
  def check_table_availability
  	dinning = DinningTable.where(:is_available => true, :max_seat =>params[:no_of_person])
  	if dinning.present?
  		render_json({:result=>{:messages =>["ok"],:rstatus=>1, :errorcode =>""},:data=>{:messages =>["Yeah, Table is available."]}}.to_json)
  	else
  		render_json({:result=>{:messages =>["Sorry, Currently table is not available."],:rstatus=>0, :errorcode => 404}}.to_json)
  	end	
  end	

  def place_order

  end	

end
