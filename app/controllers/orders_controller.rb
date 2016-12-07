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
    respond_with(@orders)
  end


  def weekly_report
    @orders = Order.where('created_at >= ?', DateTime.now.month)
    @total = Order.where('created_at >= ?', DateTime.now.month).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    respond_with(@orders)
  end

  def monthly_report
    @orders = Order.where('created_at >= ?', DateTime.now.month)
    @total = Order.where('created_at >= ?', DateTime.now.month).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    respond_with(@orders)
  end

  def get_weekly_report

    today = Date.today # Today's date
    @days_from_this_week = (today.at_beginning_of_week..today.at_end_of_week).map
    @week =  (today.at_beginning_of_week..today.at_end_of_week).map.each { |day| day }

    if !params["dinning_table_id"].blank? && !params["user_id"].blank?
      @orders = Order.where('DATE(created_at) IN (?) && dinning_table_id = ? && user_id = ?', @week, params["dinning_table_id"], params["user_id"])
      @total = Order.where('DATE(created_at) IN (?) && dinning_table_id = ? && user_id = ?', @week, params["dinning_table_id"], params["user_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    elsif !params["dinning_table_id"].blank? && params["user_id"].blank?
      @orders = Order.where('DATE(created_at) IN (?) && dinning_table_id = ?', @week, params["dinning_table_id"])
      @total = Order.where('DATE(created_at) IN (?) && dinning_table_id = ?', @week, params["dinning_table_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    elsif params["dinning_table_id"].blank? && !params["user_id"].blank?
      @orders = Order.where('DATE(created_at) IN (?) && user_id = ?', @week, params["user_id"])
      @total = Order.where('DATE(created_at) IN (?) && user_id = ?', @week, params["user_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    else
      @orders = Order.where('DATE(created_at) IN (?)', @week)
      @total = Order.where('DATE(created_at) IN (?)', @week).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    end

    render :partial =>"orders/report_filter"
  end

  def get_daily_report
    if !params["dinning_table_id"].blank? && !params["user_id"].blank?
      @orders = Order.where('DATE(created_at) = ? && dinning_table_id = ? && user_id = ?', Date.today, params["dinning_table_id"], params["user_id"])
      @total = Order.where('DATE(created_at) = ? && dinning_table_id = ? && user_id = ?', Date.today, params["dinning_table_id"], params["user_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    elsif !params["dinning_table_id"].blank? && params["user_id"].blank?
      @orders = Order.where('DATE(created_at) = ?&& dinning_table_id = ?', Date.today, params["dinning_table_id"])
      @total = Order.where('DATE(created_at) = ?&& dinning_table_id = ?', Date.today, params["dinning_table_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    elsif params["dinning_table_id"].blank? && !params["user_id"].blank?
      @orders = Order.where('DATE(created_at) = ? && user_id = ?', Date.today, params["user_id"])
      @total = Order.where('DATE(created_at) = ? && user_id = ?', Date.today, params["user_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    else
      @orders = Order.where('DATE(created_at) = ?', Date.today)
      @total = Order.where('DATE(created_at) = ?', Date.today).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    end

    render :partial =>"orders/report_filter"
  end

  def get_monthly_report
    if !params["dinning_table_id"].blank? && !params["user_id"].blank?
      @orders = Order.where('created_at >= ? && dinning_table_id = ? && user_id = ?', DateTime.now.month, params["dinning_table_id"], params["user_id"])
      @total = Order.where('created_at >= ? && dinning_table_id = ? && user_id = ?', DateTime.now.month, params["dinning_table_id"], params["user_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    elsif !params["dinning_table_id"].blank? && params["user_id"].blank?
      @orders = Order.where('created_at >= ? && dinning_table_id = ?', DateTime.now.month, params["dinning_table_id"])
      @total = Order.where('created_at >= ? && dinning_table_id = ?', DateTime.now.month, params["dinning_table_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    elsif params["dinning_table_id"].blank? && !params["user_id"].blank?
      @orders = Order.where('created_at >= ? && user_id = ?', DateTime.now.month, params["user_id"])
      @total = Order.where('created_at >= ? && user_id = ?', DateTime.now.month, params["user_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    else
      @orders = Order.where('created_at >= ?', DateTime.now.month)
      @total = Order.where('created_at >= ?', DateTime.now.month).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
    end

    render :partial =>"orders/report_filter"
  end


  def get_monthly_report_pdf
    if params["order"]
      if !params["order"]["dinning_table_id"].blank? && !params["order"]["user_id"].blank?
        @orders = Order.where('created_at >= ? && dinning_table_id = ? && user_id = ?', DateTime.now.month, params["order"]["dinning_table_id"], params["order"]["user_id"])
        @total = Order.where('created_at >= ? && dinning_table_id = ? && user_id = ?', DateTime.now.month, params["order"]["dinning_table_id"], params["order"]["user_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
      elsif !params["order"]["dinning_table_id"].blank? && params["order"]["user_id"].blank?
        @orders = Order.where('created_at >= ? && dinning_table_id = ?', DateTime.now.month, params["order"]["dinning_table_id"])
        @total = Order.where('created_at >= ? && dinning_table_id = ?', DateTime.now.month, params["order"]["dinning_table_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
      elsif params["order"]["dinning_table_id"].blank? && !params["order"]["user_id"].blank?
        @orders = Order.where('created_at >= ? && user_id = ?', DateTime.now.month, params["order"]["user_id"])
        @total = Order.where('created_at >= ? && user_id = ?', DateTime.now.month, params["order"]["user_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
      else
        @orders = Order.where('created_at >= ?', DateTime.now.month)
        @total = Order.where('created_at >= ?', DateTime.now.month).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
      end

    else
      @orders = Order.where('created_at >= ?', DateTime.now.month)
    end

    respond_to do |format|
      format.html
      format.pdf do
        pdf = ReportPdf.new(@orders)
        send_data pdf.render, filename: 'report.pdf', type: 'application/pdf'
      end
    end
  end


  def get_weekly_report_pdf
    today = Date.today # Today's date
    @days_from_this_week = (today.at_beginning_of_week..today.at_end_of_week).map
    @week =  (today.at_beginning_of_week..today.at_end_of_week).map.each { |day| day }
    if params["order"]
      if !params["order"]["dinning_table_id"].blank? && !params["order"]["user_id"].blank?
        @orders = Order.where('DATE(created_at) IN (?) && dinning_table_id = ? && user_id = ?', @week, params["order"]["dinning_table_id"], params["order"]["user_id"])
        @total = Order.where('DATE(created_at) IN (?) && dinning_table_id = ? && user_id = ?', @week, params["order"]["dinning_table_id"], params["order"]["user_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
      elsif !params["order"]["dinning_table_id"].blank? && params["order"]["user_id"].blank?
        @orders = Order.where('DATE(created_at) IN (?) && dinning_table_id = ?', @week, params["order"]["dinning_table_id"])
        @total = Order.where('DATE(created_at) IN (?) && dinning_table_id = ?', @week, params["order"]["dinning_table_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
      elsif params["order"]["dinning_table_id"].blank? && !params["order"]["user_id"].blank?
        @orders = Order.where('DATE(created_at) IN (?) && user_id = ?', @week, params["order"]["user_id"])
        @total = Order.where('DATE(created_at) IN (?) && user_id = ?', @week, params["order"]["user_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
      else
        @orders = Order.where('DATE(created_at) IN (?)', @week)
        @total = Order.where('DATE(created_at) IN (?)', @week).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
      end
    else
      @orders = Order.where('DATE(created_at) IN (?)', @week)
    end

    respond_to do |format|
      format.html
      format.pdf do
        pdf = WeeklyReportPdf.new(@orders)
        send_data pdf.render, filename: 'report.pdf', type: 'application/pdf'
      end
    end
  end

  def get_daily_report_pdf
    if params["order"]
      if !params["order"]["dinning_table_id"].blank? && !params["order"]["user_id"].blank?
        @orders = Order.where('DATE(created_at) = ? && dinning_table_id = ? && user_id = ?', Date.today, params["order"]["dinning_table_id"], params["order"]["user_id"])
        @total = Order.where('DATE(created_at) = ? && dinning_table_id = ? && user_id = ?', Date.today, params["order"]["dinning_table_id"], params["order"]["user_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
      elsif !params["order"]["dinning_table_id"].blank? && params["order"]["user_id"].blank?
        @orders = Order.where('DATE(created_at) = ?&& dinning_table_id = ?', Date.today, params["order"]["dinning_table_id"])
        @total = Order.where('DATE(created_at) = ?&& dinning_table_id = ?', Date.today, params["order"]["dinning_table_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
      elsif params["order"]["dinning_table_id"].blank? && !params["order"]["user_id"].blank?
        @orders = Order.where('DATE(created_at) = ? && user_id = ?', Date.today, params["order"]["user_id"])
        @total = Order.where('DATE(created_at) = ? && user_id = ?', Date.today, params["order"]["user_id"]).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
      else
        @orders = Order.where('DATE(created_at) = ?', Date.today)
        @total = Order.where('DATE(created_at) = ?', Date.today).select("*,sum(no_of_person) as total_no_of_person, sum(bill_amount) as total_bill_amount, sum(discount) as total_discount, sum(paid_amount) as total_paid_amount" )
      end

    else
      @orders = Order.where('DATE(created_at) = ?', Date.today)
    end

    respond_to do |format|
      format.html
      format.pdf do
        pdf = DailyReportPdf.new(@orders)
        send_data pdf.render, filename: 'report.pdf', type: 'application/pdf'
      end
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
