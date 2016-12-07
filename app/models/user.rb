class User < ActiveRecord::Base

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  ## Associations ##      
  has_many :authentication_tokens
  belongs_to :user_type
  has_many :order

  ## Validations ##
  validates_presence_of :first_name, :user_type_id
  validates :contact_no,   :presence => {:message => 'Invalid contact no'},
                     :numericality => true,
                     :length => { :minimum => 10, :maximum => 15 }

  ## Constants ##
  GENDER = [["Male","Male"],["Female","Female"]]
  
  ##instance methods##
  def display_errors
    self.errors.full_messages
  end
  
  ## Class Methods ##
  def self.authenticate_user_with_auth(email, password)
    return nil unless email.present? or password.present?
    u = User.find_by_email(email)
    (u.present? && u.valid_password?(password))? u : nil
  end

  def self.invalid_credentials
    "Username or Password is not valid"
  end 

  def full_name
    "#{first_name} #{last_name}"
  end  
end
