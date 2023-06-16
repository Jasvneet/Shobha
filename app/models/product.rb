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
#
class Product < ApplicationRecord
    validates :name, :description, :price, :size, :category, :brand, :ingredients, presence: true 
    
end
