class Order < ActiveRecord::Base
  ## Associations ##	
  has_many :order_items

  accepts_nested_attributes_for :order_items,:allow_destroy => true
end
