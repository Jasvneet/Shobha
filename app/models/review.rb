# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  product_id :integer          not null
#  rating     :integer          not null
#  title      :string           not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :user_id, :product_id, :rating, :title, :body, presence: true 

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
