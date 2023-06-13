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
		return self.session_token
	end
  
  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end 
  
  private

  def generate_unique_session_token
		loop do
			session_token = SecureRandom::urlsafe_base64(16)
			return session_token unless User.exists?(session_token: session_token)
		end
	end





end
