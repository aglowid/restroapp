# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user_type = UserType.create([{:name =>"Admin"}, {:name =>"Waiter"}, {:name =>"Manager"}])

user = User.create(:first_name=>"Admin", :last_name=>"Admin", :email=>"admin@restro.com", :password=>"123456789", :password_confirmation => "123456789" , :user_type_id=>1, :contact_no => "1234567890")