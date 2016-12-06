class Order < ActiveRecord::Base
  ## Associations ##	
  has_many :order_items
  belongs_to :dinning_table
  belongs_to :user
  accepts_nested_attributes_for :order_items,:allow_destroy => true
end
