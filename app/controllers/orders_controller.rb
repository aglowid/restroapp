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


  def daily_report

    @orders = Order.where("DATE(created_at) = ?", Date.today)
    @total = Order.where("DATE(created_at) = ?", Date.today).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )


    #@total = {}
    #@orders.each do |order|
    #  if @total["no_of_person"]
    #    @total["no_of_person"] = @total["no_of_person"] + order.no_of_person
    #  else
    #    @total["no_of_person"] = order.no_of_person
    #  end
    #  if @total["bill_amount"]
    #    @total["bill_amount"] = @total["bill_amount"] + order.bill_amount.to_f
    #  else
    #    @total["bill_amount"] = order.bill_amount.to_f
    #  end
    #  if @total["discount"]
    #    @total["discount"] = @total["discount"] + order.discount.to_f
    #  else
    #    @total["discount"] = order.discount.to_f
    #  end
    #  if @total["paid_amount"]
    #    @total["paid_amount"] = @total["paid_amount"] + order.paid_amount.to_f
    #  else
    #    @total["paid_amount"] = order.paid_amount.to_f
    #  end

    #end

    p "444444444444444444444444444444"
    p @total.first.total_no_of_person
    p "444444444444444444444444444444"

    respond_with(@orders)
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
