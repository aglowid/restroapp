class CreateAuthenticationTokens < ActiveRecord::Migration
  def change
    create_table :authentication_tokens do |t|
      t.references :users, index: true
      t.string :auth_token

      t.timestamps
    end
  end
end
