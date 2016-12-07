class FoodCategory < ActiveRecord::Base
  ## Associations ##
  has_one :food

  ## Validations ##
  validates_presence_of :name
end
