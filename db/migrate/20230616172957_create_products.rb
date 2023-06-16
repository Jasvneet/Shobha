class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false 
      t.text :description, null: false 
      t.decimal :price, null: false
      t.decimal :size, null: false 
      t.string :category, null: false
      t.string :brand, null: false 
      t.text :ingredients, null: false 


      t.timestamps
    end
  end
end
