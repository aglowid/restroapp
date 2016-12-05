class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :device_type, :string
    add_column :users, :device_token, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :contact_no, :string
    add_column :users, :gender, :string
    add_reference :users, :user_types, index: true
  end
end
