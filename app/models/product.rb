# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  price       :decimal(, )      not null
#  size        :decimal(, )      not null
#  category    :string           not null
#  brand       :string           not null
#  ingredients :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  how_to_use  :text
#  callouts    :text
#  other_info  :text
#  color       :string
#
class Product < ApplicationRecord
    validates :name, :description, :price, :size, :category, :brand, :ingredients, presence: true 

    has_one_attached :photo


    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review, 
        dependent: :destroy

    has_many :carts,
        foreign_key: :product_id,
        class_name: :CartItem,
        dependent: :destroy

    has_many :loves,
        foreign_key: :product_id,
        class_name: :Love,
        dependent: :destroy

    def self.search(query)
        result = where("name ILIKE :query OR description ILIKE :query OR CAST(price AS TEXT) ILIKE :query OR category ILIKE :query", query: "%#{query}%")
        puts "Searching for: #{query}"
        puts "Result: #{result.inspect}"
        result
    end
end
