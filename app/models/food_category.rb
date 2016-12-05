class FoodCategory < ActiveRecord::Base
  has_one :food
end
