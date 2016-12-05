class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :dinning_table_id
      t.integer :user_id
      t.integer :no_of_person
      t.string :bill_amount

      t.timestamps
    end
  end
end
