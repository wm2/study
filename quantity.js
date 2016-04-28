$(document).ready(function() {
    $('#nights').on('keyup', function() {
        $('#nights-count').text($(this).val());
        var quantity = +$(this).val();
        var price = +$(this).closest('.tour').data('daily-price');
        $('#total').text(price * quantity);
    });
});
/**
 * Created by user on 25.04.16.
 */
