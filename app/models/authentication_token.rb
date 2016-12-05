class AuthenticationToken < ActiveRecord::Base
  belongs_to :users
end
