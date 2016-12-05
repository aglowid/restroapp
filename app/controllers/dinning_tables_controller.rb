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
    @dinning_table.save
    respond_with(@dinning_table)
  end

  def update
    @dinning_table.update(dinning_table_params)
    respond_with(@dinning_table)
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
