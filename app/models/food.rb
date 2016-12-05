class Food < ActiveRecord::Base
  belongs_to :food_category
  belongs_to :food_type
  belongs_to :food_label

end
