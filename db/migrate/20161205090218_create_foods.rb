class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.string :name
      t.text :ingredients
      t.text :description
      t.integer :food_type_id
      t.integer :food_category_id
      t.integer :food_label_id
      t.string :price

      t.timestamps
    end
  end
end
