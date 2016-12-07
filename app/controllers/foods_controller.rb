class FoodsController < ApplicationController
  before_action :set_food, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @foods = Food.all
    respond_with(@foods)
  end

  def show
    respond_with(@food)
  end

  def new
    @food = Food.new
    @food_category = FoodCategory.all.map{|f_category| [f_category.name, f_category.id]}
    @food_type = FoodType.all.map{|f_type| [f_type.name, f_type.id]}
    @food_label = FoodLabel.all.map{|f_label| [f_label.name, f_label.id]}

    respond_with(@food)
  end

  def edit
    @food_category = FoodCategory.all.map{|f_category| [f_category.name, f_category.id]}
    @food_type = FoodType.all.map{|f_type| [f_type.name, f_type.id]}
    @food_label = FoodLabel.all.map{|f_label| [f_label.name, f_label.id]}
  end

  def create
    @food = Food.new(food_params)

    if @food.save
      redirect_to foods_path ,:notice => "Food successfully create."
    else
      render :new
    end
  end

  def update
    @food.update(food_params)
    if @food.save
      redirect_to foods_path ,:notice => "Food successfully updated."
    else
      render :new
    end
  end

  def destroy
    @food.destroy
    redirect_to foods_path ,:notice => "Food successfully deleted."
    #respond_with(@food)
  end

  private
    def set_food
      @food = Food.find(params[:id])
    end

    def food_params
      params.require(:food).permit(:name, :ingredients, :description, :food_type_id, :food_category_id, :food_label_id, :price)
    end
end
