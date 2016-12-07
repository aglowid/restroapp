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
          "order[order_items_attributes][0][food_id]": {
            required: true,
          },
          "food_category[name]": {
            required: true
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

          "user[contact_no]": {
            required: true,
            digits: true
          },
          "food_type[name]":{
            required: true,
          },
          "food_label[name]":{
            required: true,
          },
          "food[name]":{
            required: true,
          },
          "food[food_category_id]":{
            required: true,
          },
          "food[food_type_id]":{
            required: true,
          },
          "food[food_label_id]":{
            required: true,
          },
          "food[price]":{
            required: true,
          },
        },
        messages: {
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
          "order[order_items_attributes][0][food_id]": {
            required: "Please select food item",
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
          "food_type[name]":{
            required: "Please enter food type name"
          },
          "food_label[name]":{
            required: "Please enter food label name"
          },
          "food[name]":{
            required: "Please enter food name"
          },
          "food[food_category_id]":{
            required: "Please select food category"
          },
          "food[food_type_id]":{
            required: "Please select food type"
          },
          "food[food_label_id]":{
            required: "Please select food label"
          },
          "food[price]":{
            required: "Please enter food price"
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
