class FoodLabelsController < ApplicationController
  before_action :set_food_label, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @food_labels = FoodLabel.all
    respond_with(@food_labels)
  end

  def show
    respond_with(@food_label)
  end

  def new
    @food_label = FoodLabel.new
    respond_with(@food_label)
  end

  def edit
  end

  def create
    @food_label = FoodLabel.new(food_label_params)
    if @food_label.save
      redirect_to food_labels_path ,:notice => "Food label successfully created."
    else
      render :new
    end

  end

  def update
    @food_label.update(food_label_params)
    if @food_label.save
      redirect_to food_labels_path ,:notice => "Food label successfully updated."
    else
      render :new
    end
  end

  def destroy
    @food_label.destroy
    respond_with(@food_label)
  end

  private
    def set_food_label
      @food_label = FoodLabel.find(params[:id])
    end

    def food_label_params
      params.require(:food_label).permit(:name)
    end
end
