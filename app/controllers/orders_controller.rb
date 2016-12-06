class OrdersController < ApplicationController
  before_action :set_order, only: [:edit, :update, :destroy]
  before_action :set_data

  skip_before_action :verify_authenticity_token, only: [:get_food_price]

  respond_to :html

  def index
    @orders = Order.where(:is_paid=>false)
    respond_with(@orders)
  end

  def show
    @order = Order.includes(order_items: :food).find(params[:id])
    respond_with(@order)
  end

  def new
    @order = Order.new
    @order.order_items.build 
    respond_with(@order)
  end

  def edit
  end

  def create
    @order = Order.new(order_params)
    @order.save

    dinning_table = DinningTable.find(@order.dinning_table_id) rescue nil
    if !dinning_table.blank? && @order.is_paid == false
      dinning_table.update_attributes(:is_available=> false)
    end

    respond_with(@order)
  end

  def update
    @order.update(order_params)
    respond_with(@order)
  end

  def destroy
    @order.destroy
    respond_with(@order)
  end

  def get_food_price
    @price = 0
    if params["food_id"]
      @price = Food.find(params["food_id"]).price rescue nil
    end
    render :json=>@price
  end

  def pay_bill
    @order = Order.includes(order_items: :food).find(params[:order_id])

    dinning_table = DinningTable.find(@order.dinning_table_id) rescue nil
    dinning_table.update_attributes(:is_available=> true)

    respond_with(@order)
  end

  def pay_bill_update

    if !params["paid_amount"].blank?
      order = Order.find(params["order_id"]) rescue nil
      if !order.blank?
        order.update_attributes(:discount=>params["discount"], :paid_amount =>params["paid_amount"], :is_paid=>true)
        redirect_to orders_path
      end
    else
      redirect_to :back
    end
  end

  private
    def set_order
      @order = Order.find(params[:id])
    end

    def set_data
      @dinning_table = DinningTable.where(:is_available=>true).map{|table| [table.table_no, table.id]}
      @users = User.all.map{|user| [user.email, user.id]}
    end  

    def order_params
      params.require(:order).permit(:dinning_table_id, :user_id, :no_of_person, :bill_amount, :discount, :paid_amount, :is_paid ,order_items_attributes: [:id, :food_id, :qty, :_destroy] )
    end
end
