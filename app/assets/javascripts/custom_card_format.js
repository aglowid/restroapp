$(function() {
	$('[name="card_number"]').formatter({
        pattern: '{{9999}}-{{9999}}-{{9999}}-{{9999}}'
    });
    $('[name="card_cvv"]').formatter({
        pattern: '{{9999}}'
    });
    $('[name = "user[locations_attributes][0][location_cards_attributes][0][card_number]"]').formatter({
    	pattern: '{{9999}}-{{9999}}-{{9999}}-{{9999}}'
    });
    $('[name="user[locations_attributes][0][location_cards_attributes][0][card_cvv]"]').formatter({
    	pattern: '{{9999}}'
    });
    $('[name="user[locations_attributes][0][contact]"]').formatter({
        pattern:  '+1 {{999}} {{999}} {{9999}}'
    });
    $('[name="user[contact_num]"]').formatter({
        pattern:  '+1 {{999}} {{999}} {{9999}}'
    });
});