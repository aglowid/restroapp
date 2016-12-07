class Api::V1::OrdersController < Api::V1::BaseController
  
  before_filter :authentication_user_with_authentication_token
  
  # check whether dinning table is available or not
  def check_table_availability
  	dinning = DinningTable.where(:is_available => true, :max_seat =>params[:no_of_person])
  	if dinning.present?
  		render_json({:result=>{:messages =>["ok"],:rstatus=>1, :errorcode =>""},:data=>{:messages =>["Yeah, Table is available."]}}.to_json)
  	else
  		render_json({:result=>{:messages =>["Sorry, Currently table is not available."],:rstatus=>0, :errorcode => 404}}.to_json)
  	end	
  end	

  # waiter will place order
  def place_order
    params[:order][:order_items_attributes] = eval(params[:order][:order_items_attributes]) if params[:order][:order_items_attributes].class == String
    @order = Order.includes(order_items: :food).new(order_params)
    @order.user_id = @current_user.id
    unless @order.save
      render_json({:result=>{:messages => @order.display_errors, :rstatus=>0, :errorcode => 404}}.to_json)
    else
      order_items = @order.order_items.joins(:food).select("*,sum(qty*foods.price) as total_amount")
      @order.bill_amount = order_items.first.total_amount  
    end
  end	

  private

  def order_params
    params.require(:order).permit(:dinning_table_id, :user_id, :no_of_person, :bill_amount, order_items_attributes: [:id, :food_id, :qty, :_destroy] )
  end

end
