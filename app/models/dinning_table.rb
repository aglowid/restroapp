class DinningTable < ActiveRecord::Base
	## Association ##
	has_many :orders
end
