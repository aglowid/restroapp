//= require pace.min
//= require jquery
//= require jquery_ujs
// require jquery.maskedinput
//= require bootstrap.min
//= require blockui.min
//= require moment.min
// require bootstrap-datetimepicker.min.js
// require datepicker
// require daterangepicker
// require anytime.min
// require picker
// require picker.date
// require picker.time
//= require uniform.min
//= require select2.min
//= require nicescroll.min
//= require drilldown
//= require interactions.min


//= require validate.min
//= require app
//= require form_validation

//= require form_select2
//= require login
//= require picker_date
//= require gritter
//= require jquery.validate-1.9.min
//= require custom_form_validation
//= require formatter.min
//= require custom_card_format
// require form_checkboxes_radios.js
// require switchery.min
$(window).load(function(){
	setTimeout(function() {
    $("#flashm").fadeTo(500, 0).slideUp(500, function(){
    $(this).remove(); 
    });
	}, 2000);
});