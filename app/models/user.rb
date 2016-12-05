class User < ActiveRecord::Base

  belongs_to :user_type

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  ## Associations ##      

  has_many :authentication_tokens

  ##instance methods##

  def display_errors
    self.errors.full_messages
  end
  
end
