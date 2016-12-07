class DinningTable < ActiveRecord::Base
	## Association ##
	has_many :orders

	## Validations
	validates_presence_of :table_no , :max_seat
end
