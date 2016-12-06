class OrdersController < ApplicationController
  before_action :set_order, only: [:edit, :update, :destroy]
  before_action :set_data

  respond_to :html

  def index
    @orders = Order.all
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

  private
    def set_order
      @order = Order.find(params[:id])
    end

    def set_data
      @dinning_table = DinningTable.all.map{|table| [table.table_no, table.id]}
      @users = User.all.map{|user| [user.email, user.id]}
    end  

    def order_params
      params.require(:order).permit(:dinning_table_id, :user_id, :no_of_person, :bill_amount, order_items_attributes: [:id, :food_id, :qty, :_destroy] )
    end
end
