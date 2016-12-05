class ChangeColumnName < ActiveRecord::Migration
  def change
  	rename_column :users, :user_types_id, :user_type_id
  	rename_column :authentication_tokens, :users_id, :user_id
  end
end
