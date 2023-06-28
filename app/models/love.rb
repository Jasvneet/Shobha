# == Schema Information
#
# Table name: loves
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Love < ApplicationRecord
    validates :user_id, :product_id, presence: true 
    
    belongs_to :user, 
        foreign_key: :user_id,
        class_name: :user

    belongs_to :product
end
