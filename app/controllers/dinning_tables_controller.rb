class DinningTablesController < ApplicationController
  before_action :set_dinning_table, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @dinning_tables = DinningTable.all
    respond_with(@dinning_tables)
  end

  def show
    respond_with(@dinning_table)
  end

  def new
    @dinning_table = DinningTable.new
    respond_with(@dinning_table)
  end

  def edit
  end

  def create
    @dinning_table = DinningTable.new(dinning_table_params)
    if @dinning_table.save
      redirect_to dinning_tables_path ,:notice => "Dinning Table successfully created."
    else
      render :new
    end  
    #respond_with(@dinning_table)
  end

  def update
    if @dinning_table.update(dinning_table_params)
      redirect_to dinning_tables_path ,:notice => "Dinning Table successfully updated."
    else
      render :edit
    end 
    #respond_with(@dinning_table)
  end

  def destroy
    @dinning_table.destroy
    respond_with(@dinning_table)
  end

  private
    def set_dinning_table
      @dinning_table = DinningTable.find(params[:id])
    end

    def dinning_table_params
      params.require(:dinning_table).permit(:table_no, :max_seat, :is_available)
    end
end
