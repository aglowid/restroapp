$(document).ready(function() {
	$("#validation").validate({
		rules: {
			"live_trivia_general_game_setting[cheat_3_unlock_time]":{
				required: true
			},
			"live_trivia_general_game_setting[cheat_2_unlock_time]":{
				required: true
			},
			"live_trivia_general_game_setting[cheat_1_unlock_time]":{
				required: true
			},
			"live_trivia_general_game_setting[question_per_round]":{
				required: true
			},
			"live_trivia_general_game_setting[result_interval_time]":{
				required: true
			},
			"live_trivia_general_game_setting[points]":{
				required: true
			},
			"live_trivia_general_game_setting[rounds]":{
				required: true
			},
			"live_trivia_general_game_setting[que_read_time]":{
				required: true
			},
			"live_trivia_general_game_setting[total_question_time]":{
				required: true
			},
			"user[dob]":{
				required: true
			},
			"game_play_type[name]":{
				required: true
			},
			"city[state_id]": {
				required: true
			},
			"city[name]": {
				required: true
			},
			"state[name]": {
				required: true
			},
			"reward[name]": {
				required: true
			},
			"reward[loyalty_points]": {
				required: true,
				digits: true
			},
			"reward[per_user_per_month]": {
				required: true,
				digits: true
			},
			"user[current_password]": {
				required: true,
				minlength: 6
			},
			"user[password]": {
				required: true,
				minlength: 6
			},
			"user[confirm_password]": {
				required: true,
				minlength: 6
			},
			"user[password_confirmation]": {
				required: true,
				minlength: 6
			},
			"user[first_name]": {
				required: true
			},
			"user[last_name]": {
				required: true
			},
			"user[email]": {
				required: true,
				email: true
			},
			"user[locations_attributes][0][name]": {
				required: true
			},
			"user[locations_attributes][0][contact_person_name]": {
				required: true
			},
			"user[locations_attributes][0][contact]": {
				required: true,
				digits: true
			},
			"user[locations_attributes][0][best_time_to_call]": {
				required: true
			},
			"user[locations_attributes][0][address]": {
				required: true
			},
			"user[locations_attributes][0][state_id]": {
				required: true
			},
			"user[locations_attributes][0][city_id]": {
				required: true
			},
			"user[locations_attributes][0][zipcode]": {
				required: true
			},
			"user[locations_attributes][0][location_cards_attributes][0][card_number]": {
				required: true,
			},
			"user[locations_attributes][0][location_cards_attributes][0][name_on_card]": {
				required: true
			},
			"user[locations_attributes][0][location_cards_attributes][0][card_cvv]": {
				required: true,
				digits: true,
				minlength: 3,
				maxlength: 4,
			},
			"user[locations_attributes][0][location_cards_attributes][0][card_expiration_month]": {
				required: true
			},
			"user[locations_attributes][0][location_cards_attributes][0][card_expiration_year]": {
				required: true
			},
			"user[locations_attributes][0][location_category_id]": {
				required: true
			},
			"category[name]": {
				required: true
			},
			"game[name]": {
				required: true
			},
			"tier[name]": {
				required: true
			},
			"tier[charge]": {
				required: true,
				number: true
			},
			"tier[number_of_pn]": {
				required: true,
				digits: true
			},
			"tier[text_message]": {
				required: true,
				digits: true,
			},
			"tier[email]": {
				required: true,
				digits: true
			},
			"social_media_point[social_media_name]": {
				required: true,
			},
			"social_media_point[check_in_credits]": {
				required: true,
				number: true,
			},
			"social_media_point[loyalty_points]": {
				required: true,
				number: true,
			},
			"setting[search_mile]": {
				required: true,
				digits: true,
			},
			"setting[time_zone]": {
				required: true,
			},
			"setting[per_minute_loyalty_points]": {
				required: true,
				number: true,
			},
			"game_play[name]": {
				required: true,
			},
			"game_play[additional_loyalty_points]":{
					required: true,
			},
			"game_play[game_id]": {
				required: true,
			},
			"game_play[game_play_type_id]": {
				required: true,
			},
			"game_play[category_id]": {
				required: true,
			},
			"game_play[level_id]": {
				required: true,
			},
	
			"game_play[starts_in]": {
				required: true,
				number: true,
			},
			"notification[notification_type]": {
				required: true,
			},
			"notification[send_date]": {
				required: true,
			},
			"notification[message]": {
				required: true,
			},
			"general_game_setting[game_id]": {
				required: true,
			},
			"general_game_setting[total_question_time]": {
				required: true,
				number: true,
			},
			"general_game_setting[points]": {
				required: true,
				digits: true,
			},
			"general_game_setting[que_read_time]": {
				required: true,
				number: true,
			},
			"general_game_setting[round_interval_time]": {
				required: true,
				number: true,
			},
			"general_game_setting[result_interval_time]": {
				required: true,
				number: true,
			},
			"general_game_setting[question_per_round]": {
				required: true,
				digits: true,
			},
			"general_game_setting[cheat_1_unlock_time]": {
				required: true,
				number: true,
			},
			"general_game_setting[cheat_2_unlock_time]": {
				required: true,
				number: true,
			},
			"general_game_setting[cheat_3_unlock_time]": {
				required: true,
				number: true,
			},
			"offer[name]": {
				required: true,
			},
			"card": {
				required: true,
			},
			"tier": {
				required: true,
			},
			"level_id": {
				required: true,
			},
			"category_id": {
				required: true,
			},
			"game_id": {
				required: true,
			},
			"trivia_question[question]": {
				required: true,
			},
			"trivia_question[answer1]": {
				required: true,
			},
			"trivia_question[answer2]": {
				required: true,
			},
			"trivia_question[answer3]": {
				required: true,
			},
			"trivia_question[answer4]": {
				required: true,
			},
			"admin_notification[notification_type]": {
				required: true,
			},
			"admin_notification[send_date]": {
				required: true,
			},
			"admin_notification[message]": {
				required: true,
			},
			"location_ids[]": {
				required: true,
			},
			"state_ids[]": {
				required: true,
			},
			"name_on_card":{
				required: true,
			},
			"card_number":{
				required: true,
			 	minlength: 13,
			 	digits: true
			},
			"card_cvv":{
				required: true,
				digits: true,
				minlength: 3,
				maxlength: 4,
			},
			"card_expiration_month":{
				required: true,
			},
			"card_expiration_year":{
				required: true,
			},
			"game_play[sub_category_id]":{
				required: true,
			},
		},
		messages: {
			"reward[name]": {
				required: "Reward name is required"
			},
			"reward[loyalty_points]": {
				required: "Loyalty points is required",
				digits: "Loyalty points must be an integer"
			},
			"reward[per_user_per_month]": {
				required: "Redeem limit is required",
				digits: "Redeem limit must be an integer"
			},
			"user[current_password]": {
				required: "Current password is required",
				minlength: "Minimum 6 characters are required"
			},
			"user[password]": {
				required: "Password is required",
				minlength: "Minimum 6 characters are required"
			},
			"user[confirm_password]": {
				required: "Confirm password is required",
				minlength: "Minimum 6 characters are required"
			},
			"user[password_confirmation]": {
				required: "Please repeat your password",
				minlength: "Minimum 6 characters are required"
			},
			"user[first_name]": {
				required: "First name is required"
			},
			"user[last_name]": {
				required: "Last name is required"
			},
			"user[email]": {
				required: "Email is required",
				email: "Email is invalid"
			},
			"user[locations_attributes][0][name]": {
				required: "Business name is required"
			},
			"user[locations_attributes][0][contact_person_name]": {
				required: "Contact person name is required"
			},
			"user[locations_attributes][0][contact]": {
				required: "Contact number is required",
				digits: "Contact number must be an integer"
			},
			"user[locations_attributes][0][best_time_to_call]": {
				required: "Please select time"
			},
			"user[locations_attributes][0][address]": {
				required: "Address is required"
			},
			"user[locations_attributes][0][state_id]": {
				required: "State is required"
			},
			"user[locations_attributes][0][city_id]": {
				required: "City is required"
			},
			"user[locations_attributes][0][zipcode]": {
				required: "Zipcode is required"
			},
			"user[locations_attributes][0][location_cards_attributes][0][card_number]": {
				required: "Card number is required",
			},
			"user[locations_attributes][0][location_cards_attributes][0][name_on_card]": {
				required: "Name is required"
			},
			"user[locations_attributes][0][location_cards_attributes][0][card_cvv]": {
				required: "CVV number is required",
				digits: "CVV must be a number",
				minlength: "Please enter minimum 3 digits",
				maxlength: "Please enter maximum 4 digits",
			},
			"user[locations_attributes][0][location_cards_attributes][0][card_expiration_month]": {
				required: "Expiry month is required"
			},
			"user[locations_attributes][0][location_cards_attributes][0][card_expiration_year]": {
				required: "Expiry year is required"
			},
			"user[locations_attributes][0][location_category_id]": {
				required: "Business category is required"
			},
			"category[name]": {
				required: "Category name is required"
			},
			"game[name]": {
				required: "Game name is required"
			},
			"tier[name]": {
				required: "Tier name is required"
			},
			"tier[charge]": {
				required: "Tier charge is required",
				number: "Tier charge must be a number"
			},
			"tier[number_of_pn]": {
				required: "Push notification number is required",
				digits: "Push notification number must be an integer"
			},
			"tier[text_message]": {
				required: "Text message number is required",
				digits: "Text message number must be an integer"
			},
			"tier[email]": {
				required: "Number of email is required",
				digits: "Number of email must be an integer"
			},
			"social_media_point[social_media_name]": {
				required: "Social media name is required",
			},
			"social_media_point[check_in_credits]": {
				required: "Check in credits are required",
				number: "Check in credits must be a number",
			},
			"social_media_point[loyalty_points]": {
				required: "Loyalty points are required",
				number: "Loyalty points must be a number",
			},
			"setting[search_mile]": {
				required: "This field is required",
				digits: "Search mile must be an integer",
			},
			"setting[time_zone]": {
				required: "Please select time zone",
			},
			"setting[per_minute_loyalty_points]": {
				required: "Loyalty points are required",
				number: "Loyalty points must be a number",
			},
			"game_play[name]": {
				required: "Name is required",
			},
			"game_play[additional_loyalty_points]":{
				required: "ASDSD",
			}
			,
			"game_play[game_id]": {
				required: "Please select game",
			},
			"game_play[game_play_type_id]": {
				required: "Please select game type",
			},
			"game_play[category_id]": {
				required: "Please select category",
			},
			"game_play[level_id]": {
				required: "Please select level",
			},
			"game_play[starts_in]": {
				required: "Starts in is required",
				number: "Starts in must be a number",
			},
			"notification[notification_type]": {
				required: "Please select notification type",
			},
			"notification[send_date]": {
				required: "Please select date and time",
			},
			"notification[message]": {
				required: "Message is required",
			},
			"general_game_setting[game_id]": {
				required: "Please select game",
			},
			"general_game_setting[total_question_time]": {
				required: "Total question time is required",
				number: "Total question time must be a number",
			},
			"general_game_setting[points]": {
				required: "Points are required",
				digits: "Points must be an integer",
			},
			"general_game_setting[que_read_time]": {
				required: "Question read time is required",
				number: "Question read time must be a number",
			},
			"general_game_setting[round_interval_time]": {
				required: "Round interval time is required",
				number: "Round interval time must ba a number",
			},
			"general_game_setting[result_interval_time]": {
				required: "Result interval time is required",
				number: "Result interval time must be a number",
			},
			"general_game_setting[question_per_round]": {
				required: "Question per round is required",
				digits: "Question per round must be an integer",
			},
			"general_game_setting[cheat_1_unlock_time]": {
				required: "Cheat 1 unlock time is required",
				number: "Cheat 1 unlock time must be a number",
			},
			"general_game_setting[cheat_2_unlock_time]": {
				required: "Cheat 2 unlock time is required",
				number: "Cheat 2 unlock time must be a number",
			},
			"general_game_setting[cheat_3_unlock_time]": {
				required: "Cheat 3 unlock time is required",
				number: "Cheat 3 unlock time must be a number",
			},
			"offer[name]": {
				required: "Offer name is required",
			},
			"card": {
				required: "Please select card",
			},
			"tier": {
				required: "Please select tier",
			},
			"level_id": {
				required: "Please select level",
			},
			"category_id": {
				required: "Please select category",
			},
			"game_id": {
				required: "Please select game",
			},
			"trivia_question[question]": {
				required: "Question is required",
			},
			"trivia_question[answer1]": {
				required: "Answer 1 is required",
			},
			"trivia_question[answer2]": {
				required: "Answer 2 is required",
			},
			"trivia_question[answer3]": {
				required: "Answer 3 is required",
			},
			"trivia_question[answer4]": {
				required: "Answer 4 is required",
			},
			"state[name]" :{
				required: "State Name is required",
			},
			"city[name]":{
				required: "City Name is required",
			},
			"city[state_id]": {
				required: "Please Select State.",
			},
			"game_play_type[name]":{
				required: "Please enter name.",
			},
			"user[dob]":{
				required: "Please enter date of birth.",
			},
			"admin_notification[notification_type]": {
				required: "Please select notification type.",
			},
			"location_ids[]": {
				required: "Please select locations.",
			},
			"state_ids[]": {
				required: "Please select states.",
			},
			"admin_notification[send_date]": {
				required: "Please enter date and time.",
			},
			"admin_notification[message]": {
				required: "Please enter message.",
			},
			"card_number":{
				required: "Card number is required",
				digits: "CVV must be a number",
				minlength: "Enter valid card number"
			},
			"card_cvv":{
				required: "CVV number is required",
				digits: "CVV must be a number",
				minlength: "Please enter minimum 3 digits",
				maxlength: "Please enter maximum 4 digits",
			},
			"card_expiration_month":{
				required: "Expiry month is required"
			},
			"card_expiration_year":{
				required: "Expiry year is required"
			},
			"game_play[sub_category_id]":{
				required: "Please select category",
			},
			"live_trivia_general_game_setting[total_question_time]":{
				required: "Total question time is required",
			},
			"live_trivia_general_game_setting[que_read_time]":{
				required: "Question read time is required"
			},
			"live_trivia_general_game_setting[rounds]":{
				required: "Number of rounds are required"
			},
			"live_trivia_general_game_setting[points]":{
				required: "Game points are required"
			},
			"live_trivia_general_game_setting[result_interval_time]":{
				required: "Result interval time required"
			},
			"live_trivia_general_game_setting[question_per_round]":{
				required: "Question per round is required"
			},
			"live_trivia_general_game_setting[cheat_1_unlock_time]":{
				required: "Cheat 1 unlock time is required"
			},
			"live_trivia_general_game_setting[cheat_2_unlock_time]":{
				required: "Cheat 2 unlock time is required"
			},
			"live_trivia_general_game_setting[cheat_3_unlock_time]":{
				required: "Cheat 3 unlock time is required"
			},
		},
	});
	$("#validation_sms").validate({
		rules: {
			"admin_notification[notification_type]": {
				required: true,
			},
			"admin_notification[send_date]": {
				required: true,
			},
			"admin_notification[message]": {
				required: true,
			},
			"location_ids[]": {
				required: true,
			},
			"state_ids[]": {
				required: true,
			},
			"notification[send_date]": {
				required: true,
			},
			"notification[message]": {
				required: true,
			},
		},
		messages: {
			"admin_notification[notification_type]": {
				required: "Please select notification type.",
			},
			"location_ids[]": {
				required: "Please select locations.",
			},
			"state_ids[]": {
				required: "Please select states.",
			},
			"admin_notification[send_date]": {
				required: "Please enter date and time.",
			},
			"admin_notification[message]": {
				required: "Please enter message.",
			},
			"notification[send_date]": {
				required: "Please select date and time",
			},
			"notification[message]": {
				required: "Message is required",
			},
		},
	});
	$("#validation_pn").validate({
		rules: {
			"admin_notification[notification_type]": {
				required: true,
			},
			"admin_notification[send_date]": {
				required: true,
			},
			"admin_notification[message]": {
				required: true,
			},
			"location_ids[]": {
				required: true,
			},
			"state_ids[]": {
				required: true,
			},
			"notification[send_date]": {
				required: true,
			},
			"notification[message]": {
				required: true,
			},
		},
		messages: {
			"admin_notification[notification_type]": {
				required: "Please select notification type.",
			},
			"location_ids[]": {
				required: "Please select locations.",
			},
			"state_ids[]": {
				required: "Please select states.",
			},
			"admin_notification[send_date]": {
				required: "Please enter date and time.",
			},
			"admin_notification[message]": {
				required: "Please enter message.",
			},
			"notification[send_date]": {
				required: "Please select date and time",
			},
			"notification[message]": {
				required: "Message is required",
			},
		},
	});
});