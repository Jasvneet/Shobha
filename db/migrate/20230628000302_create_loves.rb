class CreateLoves < ActiveRecord::Migration[7.0]
  def change
    create_table :loves do |t|
      t.integer :user_id, null: false 
      t.integer :product_id, null: false
      t.timestamps
    end
    add_index :loves, :user_id
    add_index :loves, :product_id
  end
end
