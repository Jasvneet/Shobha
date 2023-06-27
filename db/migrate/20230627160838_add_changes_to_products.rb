class AddChangesToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :how_to_use, :text
    add_column :products, :callouts, :text
    add_column :products, :other_info, :text
    add_column :products, :color, :string
  end
end
