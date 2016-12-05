class CreateFoodLabels < ActiveRecord::Migration
  def change
    create_table :food_labels do |t|
      t.string :name

      t.timestamps
    end
  end
end
