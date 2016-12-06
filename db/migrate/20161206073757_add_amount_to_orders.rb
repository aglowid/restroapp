class AddAmountToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :discount, :string
    add_column :orders, :paid_amount, :string
    add_column :orders, :is_paid, :boolean
  end
end
