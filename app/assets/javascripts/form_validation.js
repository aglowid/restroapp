/* ------------------------------------------------------------------------------
*
*  # Form validation
*
*  Specific JS code additions for form_validation.html page
*
*  Version: 1.2
*  Latest update: Dec 15, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Form components
    // ------------------------------

    // Switchery toggles
    // var elems = Array.prototype.slice.call(document.querySelectorAll('.switchery'));
    // elems.forEach(function(html) {
    //     var switchery = new Switchery(html);
    // });


    // Bootstrap switch
    //$(".switch").bootstrapSwitch();


    // Bootstrap multiselect
    // $('.multiselect').multiselect({
    //     checkboxName: 'vali'
    // });


    // Touchspin
    // $(".touchspin-postfix").TouchSpin({
    //     min: 0,
    //     max: 100,
    //     step: 0.1,
    //     decimals: 2,
    //     postfix: '%'
    // });


    // Select2 select
    $('.select').select2({
        minimumResultsForSearch: Infinity
    });


    // Styled checkboxes, radios
    $(".styled, .multiselect-container input").uniform({ radioClass: 'choice' });


    // Styled file input
    $(".file-styled").uniform({
        wrapperClass: 'bg-teal-400',
        fileButtonHtml: '<i class="icon-googleplus5"></i>'
    });



    // Setup validation
    // ------------------------------

    // Initialize
    var validator = $(".form-validate-jquery").validate({
        ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
        errorClass: 'validation-error-label',
        successClass: 'validation-valid-label',
        highlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
        },

        // Different components require proper error label placement
        errorPlacement: function(error, element) {

            // Styled checkboxes, radios, bootstrap switch
            if (element.parents('div').hasClass("checker") || element.parents('div').hasClass("choice") || element.parent().hasClass('bootstrap-switch-container') ) {
                if(element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                    error.appendTo( element.parent().parent().parent().parent() );
                }
                 else {
                    error.appendTo( element.parent().parent().parent().parent().parent() );
                }
            }

            // Unstyled checkboxes, radios
            else if (element.parents('div').hasClass('checkbox') || element.parents('div').hasClass('radio')) {
                error.appendTo( element.parent().parent().parent() );
            }

            // Input with icons and Select2
            else if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
                error.appendTo( element.parent() );
            }

            // Inline checkboxes, radios
            else if (element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                error.appendTo( element.parent().parent() );
            }

            // Input group, styled file input
            else if (element.parent().hasClass('uploader') || element.parents().hasClass('input-group')) {
                error.appendTo( element.parent().parent() );
            }

            else {
                error.insertAfter(element);
            }
        },
        // validClass: "validation-valid-label",
        // success: function(label) {
        //     label.addClass("validation-valid-label").text("Success.")
        // },
        debug: false,
        rules: {
          password: {
              minlength: 5
          },
          repeat_password: {
              equalTo: "#password"
          },
          email: {
              email: true
          },
          repeat_email: {
              equalTo: "#email"
          },
          minimum_characters: {
              minlength: 10
          },
          maximum_characters: {
              maxlength: 10
          },
          minimum_number: {
              min: 10
          },
          maximum_number: {
              max: 10
          },
          number_range: {
              range: [10, 20]
          },
          url: {
              url: true
          },
          date: {
              date: true
          },
          date_iso: {
              dateISO: true
          },
          numbers: {
              number: true
          },
          digits: {
              digits: true
          },
          card: {
              creditcard: true
          },
          basic_checkbox: {
              minlength: 2
          },
          styled_checkbox: {
              minlength: 2
          },
          switchery_group: {
              minlength: 2
          },
          switch_group: {
              minlength: 2
          },
          "user[locations_attributes][0][opening_hour]" :{
            required:true
          },
          "user[locations_attributes][0][closing_hour]" :{
            required:true
          },
          "user[first_name]": {
              required:true
          },
          "user[last_name]": {
              required:true
          },
          "user[email]":{
              required:true,
          },
          "dinning_table[table_no]":{
              required:true,
          },
          "dinning_table[max_seat]":{
              required:true,
          },          
          "user[password]":{
            required:true,
            minlength: 6
          },
          "user[password_confirmation]":{
            required:true,
            equalTo:"#user_password"
          },
          "user[user_type_id]": {
            required: true,
          },
          "admin_notification[message]": {
            required: true,
          },
          "food_category[name]": {
            required: true
          },
          "city[state_id]": {
            required: true
          },
          "city[name]": {
            required: true
          },
          "game_play_type[name]":{
            required: true
          },
          "game[name]": {
            required: true
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
          "state[name]": {
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
          "user[current_password]": {
            required: true,
            minlength: 6
          },
          "user[confirm_password]": {
            required: true,
            minlength: 6,
            equalTo:"#user_password",
          },

          "game_play[level_id]": {
            required: true,
          },
          "game_play[starts_in]": {
            required: true,
            number: true,
            min: 1,
          },
          "name_on_card":{
            required: true,
          },
          "card_number":{
            required: true,
            // digits: true,
            minlength: 16,
          },
          "card_cvv":{
            required: true,
            digits: true,
            minlength: 3,
            maxlength: 4,
          },
          "user[contact_no]": {
            required: true,
            digits: true
          },
          "reward[per_user_per_month]": {
            required: true,
            digits: true,
            minlength: 10,
            maxlength: 15,
          },
          "card": {
            required: true,
          },
          "tier": {
            required: true,
          },
        },
        messages: {
          "user[locations_attributes][0][opening_hour]" :{
            required: "Opening hour is required",
          },
          "user[locations_attributes][0][closing_hour]" :{
            required: "Closing hour is required",
          },
          "user[first_name]": {
              required: "First name is required",
          },
          "user[last_name]": {
              required: "Last name is required",
          },
          "user[email]":{
              required: "Email is required",
          },
          "dinning_table[table_no]":{
              required: "Table no is required",
          },
          "dinning_table[max_seat]":{
              required: "Maximum seat is required",
          },
          "user[password]":{
              required: "Password is required",
              minlength: "Please enter at least 6 characters"
          },
           "user[password_confirmation]":{
              required: "Confirm password is required",
              equalTo: "Please enter same password again"
          },
          "user[user_type_id]": {
            required: "Please select user type",
          },
          "food_category[name]": {
            required: "Please enter food category name",
          },
          "setting[search_mile]": {
            required: "Search mile is required",
            digits: "Search mile must be an integer",
          },
          "setting[time_zone]": {
            required: "Please select time zone",
          },
          "setting[per_minute_loyalty_points]": {
            required: "Loyalty points are required",
            number: "Loyalty points must be a number",
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
          "state[name]" :{
            required: "State Name is required",
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
          "user[current_password]": {
            required: "Current password is required",
            minlength: "Please enter atleast 6 characters"
          },
          "user[confirm_password]": {
            required: "Confirm password is required",
            minlength: "Please enter atleast 6 characters",
            equalTo: "Please enter same password again"
          },
          "user[contact_no]": {
            required: "Please enter contact number",
            digits: "Text message number must be an integer",
            minlength: "Please enter atleast 10 digits",
            maxlength: "Enter maximum 15 digits only",
          },
          // "recurring_type_id":{
          //   required: "Please select recurring type",
          // },
          // "game_play[scheduled_time]":{
          //   required: "Please select scheduled time",
          // },
          // "game_play[start_date]":{
          //   required: "Please select start date",
          // },
          // "game_play[end_date]":{
          //   required: "Please select end date",
          // },
          "game_play[category_id]": {
            required: "Please select category",
          },
          "game_play[level_id]": {
            required: "Please select level",
          },
          "game_play[starts_in]": {
            required: "Starts in is required",
            number: "Starts in must be a number",
            min: "Please enter a value greater than or equal to 1",
          },
          "name_on_card": {
            required: "Name is required"
          },
          "card_number":{
            required: "Card number is required",
          },
          "card_cvv": {
            required: "CVV number is required",
            digits: "CVV must be a number",
            minlength: "Please enter minimum 3 digits",
            maxlength: "Enter maximum 4 digits only",
          },
          "card_expiration_month": {
            required: "Please select expiration month"
          },
          "card_expiration_year": {
            required: "Please select expiration year"
          },
          "notification[frequency]":{
            required: "Please select frequency",
          },
          // "notification[send_date]":{
          //   required: "Send date is required",
          // },
          "notification[message]":{
            required:"Please enter message",
          },
          "notification[display_untill]":{
            required: "Display untill is required",
          },
          "notification[start_date]":{
            required: "Please select start date",
          },
          "notification[end_date]":{
            required: "Please select end date",
          },
          "send_time":{
            required: "Please select send time",
          },
          "offer[name]": {
            required: "Offer name is required",
          },
          "offer[start_date]":{
            required: "Please select start date",
          },
          "offer[end_date]":{
            required: "Please select end date",
          },
          "reward[name]": {
            required: "Reward name is required"
          },
          "reward[loyalty_points]": {
            required: "Loyalty points are required",
            digits: "Loyalty points must be an integer"
          },
          "reward[per_user_per_month]": {
            required: "Redeem limit is required",
            digits: "Redeem limit must be an integer"
          },
          "card": {
            required: "Please select card",
          },
          "tier": {
            required: "Please select tier",
          },
          "admin_notification[send_date]":{
            required: "Please select date and time"
          },
          "trivia_question[game_id]":{
            required: "Please select game",
          },
          "trivia_question[level_id]":{
            required: "Please select level",
          },
          "trivia_question[category_id]":{
            required: "Please select category",
          },
          "trivia_question[sub_category_id]":{
            required: "Please select sub category",
          },
          "trivia_question[question]":{
            required: "Question is required",
          },
          "trivia_question[answer1]":{
            required: "Answer1 is required",
          },
          "trivia_question[answer2]":{
            required: "Answer2 is required",
          },
          "trivia_question[answer3]":{
            required: "Answer3 is required",
          },
          "trivia_question[answer4]":{
            required: "Answer4 is required",
          },
          "trivia_question[correct_answer]":{
            required: "Correct answer is required",
          },
          agree: "Please accept our policy"
      }
    });
    $(".validation_sms").validate({
      ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
      errorClass: 'validation-error-label',
      successClass: 'validation-valid-label',
      highlight: function(element, errorClass) {
          $(element).removeClass(errorClass);
      },
      unhighlight: function(element, errorClass) {
          $(element).removeClass(errorClass);
      },

      // Different components require proper error label placement
      errorPlacement: function(error, element) {

          // Styled checkboxes, radios, bootstrap switch
          if (element.parents('div').hasClass("checker") || element.parents('div').hasClass("choice") || element.parent().hasClass('bootstrap-switch-container') ) {
              if(element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                  error.appendTo( element.parent().parent().parent().parent() );
              }
               else {
                  error.appendTo( element.parent().parent().parent().parent().parent() );
              }
          }

          // Unstyled checkboxes, radios
          else if (element.parents('div').hasClass('checkbox') || element.parents('div').hasClass('radio')) {
              error.appendTo( element.parent().parent().parent() );
          }

          // Input with icons and Select2
          else if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
              error.appendTo( element.parent() );
          }

          // Inline checkboxes, radios
          else if (element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
              error.appendTo( element.parent().parent() );
          }

          // Input group, styled file input
          else if (element.parent().hasClass('uploader') || element.parents().hasClass('input-group')) {
              error.appendTo( element.parent().parent() );
          }

          else {
              error.insertAfter(element);
          }
      },
      // validClass: "validation-valid-label",
      // success: function(label) {
      //     label.addClass("validation-valid-label").text("Success.")
      // },
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
      // "location_ids[]": {
      //   required: true,
      // },
      // "state_ids[]": {
      //   required: true,
      // },
      // "notification[send_date]": {
      //   required: true,
      // },
      
      "normal_textArea":{
        required: true,
      },
      "notification[message]": {
        required: true,
      },
      "notification[frequency]":{
        required: true,
      },
      "notification[start_date]":{
        required:true,
      },
      "notification[end_date]":{
        required:true,
      },
      "send_time":{
        required:true,
      },
    },
    messages: {
      "admin_notification[notification_type]": {
        required: "Please select notification type",
      },
      // "location_ids[]": {
      //   required: "Please select locations.",
      // },
      // "state_ids[]": {
      //   required: "Please select states",
      // },
      "admin_notification[send_date]": {
        required: "Please select date and time",
      },
      "admin_notification[message]": {
        required: "Please enter message",
      },
      // "notification[send_date]": {
      //   required: "Please select date and time",
      // },
      "notification[message]": {
        required: "Please enter message",
      },
      "notification[frequency]":{
        required: "Please select frequency",
      },
      "notification[start_date]":{
        required: "Please select start date",
      },
      "notification[end_date]":{
        required: "Please select end date",
      },
      "send_time":{
        required: "Please select send time",
      },
      "normal_textArea":{
        required: "Please enter message",
      },
    },
  });

  $(".validation_pn").validate({
    ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
    errorClass: 'validation-error-label',
    successClass: 'validation-valid-label',
    highlight: function(element, errorClass) {
        $(element).removeClass(errorClass);
    },
    unhighlight: function(element, errorClass) {
        $(element).removeClass(errorClass);
    },

    // Different components require proper error label placement
    errorPlacement: function(error, element) {

        // Styled checkboxes, radios, bootstrap switch
        if (element.parents('div').hasClass("checker") || element.parents('div').hasClass("choice") || element.parent().hasClass('bootstrap-switch-container') ) {
            if(element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                error.appendTo( element.parent().parent().parent().parent() );
            }
             else {
                error.appendTo( element.parent().parent().parent().parent().parent() );
            }
        }

        // Unstyled checkboxes, radios
        else if (element.parents('div').hasClass('checkbox') || element.parents('div').hasClass('radio')) {
            error.appendTo( element.parent().parent().parent() );
        }

        // Input with icons and Select2
        else if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
            error.appendTo( element.parent() );
        }

        // Inline checkboxes, radios
        else if (element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
            error.appendTo( element.parent().parent() );
        }

        // Input group, styled file input
        else if (element.parent().hasClass('uploader') || element.parents().hasClass('input-group')) {
            error.appendTo( element.parent().parent() );
        }

        else {
            error.insertAfter(element);
        }
    },
    // validClass: "validation-valid-label",
    // success: function(label) {
    //     label.addClass("validation-valid-label").text("Success.")
    // },
    rules: {
      "admin_notification[notification_type]": {
        required: true,
      },
      "notification[frequency]":{
        required: true,
      },
      "admin_notification[send_date]": {
        required: true,
      },
      "admin_notification[message]": {
        required: true,
      },
      // "location_ids[]": {
      //   required: true,
      // },
      // "state_ids[]": {
      //   required: true,
      // },
      "notification[start_date]":{
        required: true,
      },
      "send_time":{
        required: true,
      },
      "notification[end_date]":{
        required: true,
      },
      // "notification[send_date]": {
      //   required: true,
      // },
      "notification[message]": {
        required: true,
      },
      "notification[display_untill]":{
        required: true,
      },
      "normal_textArea":{
        required: true,
      },
      "admin_notification[display_untill]":{
        required: true,
      },
    },
    messages: {
      "admin_notification[notification_type]": {
        required: "Please select notification type",
      },
      "notification[frequency]":{
        required: "Please select frequency",
      },
      // "location_ids[]": {
      //   required: "Please select locations.",
      // },
      // "state_ids[]": {
      //   required: "Please select states",
      // },
      "admin_notification[send_date]": {
        required: "Please select date and time",
      },
      "admin_notification[message]": {
        required: "Please enter message",
      },
      "notification[start_date]":{
        required: "Please select start date",
      },
      "notification[end_date]":{
        required: "Please select end date",
      },
      "send_time":{
        required: "Please select send time",
      },
      // "notification[send_date]": {
      //   required: "Please select date and time",
      // },
      "notification[message]": {
        required: "Please enter message",
      },
      "notification[display_untill]":{
        required: "Please select date and time"
      },
      "normal_textArea":{
        required: "Please enter message",
      },
      "admin_notification[display_untill]":{
        required: "Please select date and time"
      },
    },
  });

  $(".validation_new_card").validate({
    ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
    errorClass: 'validation-error-label',
    successClass: 'validation-valid-label',
    highlight: function(element, errorClass) {
        $(element).removeClass(errorClass);
    },
    unhighlight: function(element, errorClass) {
        $(element).removeClass(errorClass);
    },

    // Different components require proper error label placement
    errorPlacement: function(error, element) {

        // Styled checkboxes, radios, bootstrap switch
        if (element.parents('div').hasClass("checker") || element.parents('div').hasClass("choice") || element.parent().hasClass('bootstrap-switch-container') ) {
            if(element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                error.appendTo( element.parent().parent().parent().parent() );
            }
             else {
                error.appendTo( element.parent().parent().parent().parent().parent() );
            }
        }

        // Unstyled checkboxes, radios
        else if (element.parents('div').hasClass('checkbox') || element.parents('div').hasClass('radio')) {
            error.appendTo( element.parent().parent().parent() );
        }

        // Input with icons and Select2
        else if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
            error.appendTo( element.parent() );
        }

        // Inline checkboxes, radios
        else if (element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
            error.appendTo( element.parent().parent() );
        }

        // Input group, styled file input
        else if (element.parent().hasClass('uploader') || element.parents().hasClass('input-group')) {
            error.appendTo( element.parent().parent() );
        }

        else {
            error.insertAfter(element);
        }
    },
    // validClass: "validation-valid-label",
    // success: function(label) {
    //     label.addClass("validation-valid-label").text("Success.")
    // },
    rules: {
      "name_on_card":{
        required: true,
      },
      "card_number":{
        required: true,
        minlength: 16,
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
    },
    messages: {
      "name_on_card": {
        required: "Name is required"
      },
      "card_number":{
        required: "Card number is required",
        minlength: "Please enter minimum 13 digits",
      },
      "card_cvv": {
        required: "CVV number is required",
        digits: "CVV must be a number",
        minlength: "Please enter minimum 3 digits",
        maxlength: "Enter maximum 4 digits only",
      },
      "card_expiration_month": {
        required: "Please select expiration month"
      },
      "card_expiration_year": {
        required: "Please select expiration year"
      },
    },
  });
  // Reset form
  $('#reset').on('click', function() {
      validator.resetForm();
  });

  // //approve location
  $(".approve_from").validate({
    ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
    errorClass: 'validation-error-label',
    successClass: 'validation-valid-label',
    highlight: function(element, errorClass) {
        $(element).removeClass(errorClass);
    },
    unhighlight: function(element, errorClass) {
        $(element).removeClass(errorClass);
    },

    // Different components require proper error label placement
    errorPlacement: function(error, element) {

        // Styled checkboxes, radios, bootstrap switch
        if (element.parents('div').hasClass("checker") || element.parents('div').hasClass("choice") || element.parent().hasClass('bootstrap-switch-container') ) {
            if(element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                error.appendTo( element.parent().parent().parent().parent() );
            }
             else {
                error.appendTo( element.parent().parent().parent().parent().parent() );
            }
        }

        // Unstyled checkboxes, radios
        else if (element.parents('div').hasClass('checkbox') || element.parents('div').hasClass('radio')) {
            error.appendTo( element.parent().parent().parent() );
        }

        // Input with icons and Select2
        else if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
            error.appendTo( element.parent() );
        }

        // Inline checkboxes, radios
        else if (element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
            error.appendTo( element.parent().parent() );
        }

        // Input group, styled file input
        else if (element.parent().hasClass('uploader') || element.parents().hasClass('input-group')) {
            error.appendTo( element.parent().parent() );
        }

        else {
            error.insertAfter(element);
        }
    },
    // validClass: "validation-valid-label",
    // success: function(label) {
    //     label.addClass("validation-valid-label").text("Success.")
    // },
    rules: {
      "email": {
        required: true,
      },
    },
    messages: {
      "email": {
        required: "Please enter email",
      },
    },
  });

});
