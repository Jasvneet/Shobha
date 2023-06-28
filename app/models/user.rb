# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  firstname       :string           not null
#  lastname        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password
  validates :firstname, :lastname, presence: true
  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  has_secure_password

  has_many :reviews,
    foreign_key: :user_id,
    class_name: :Review, 
    dependent: :destroy

  has_many :cart_items,
    foreign_key: :user_id,
    class_name: :CartItem,
    dependent: :destroy

  has_many :products,
    through: :cart_items,
    source: :product,
    dependent: :destroy

  has_many :loves,
    foreign_key: :user_id,
    class_name: :Love,
    dependent: :destroy

  before_validation :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email )
    
    if user && user.authenticate(password)
      return user
    end 
    nil 
   
  end  

  def reset_session_token!
		self.session_token = generate_unique_session_token
		self.save!
		self.session_token
	end
  

  private

  def generate_unique_session_token
		loop do
			session_token = SecureRandom.urlsafe_base64(16)
			return session_token unless User.exists?(session_token: session_token)
		end
   
	end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end 
  





end
