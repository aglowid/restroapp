class CreateDinningTables < ActiveRecord::Migration
  def change
    create_table :dinning_tables do |t|
      t.integer :table_no
      t.integer :max_seat
      t.boolean :is_available

      t.timestamps
    end
  end
end
