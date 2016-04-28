/**
 * Created by user on 25.04.16.
 */
$(document).ready(function() {
    $('.tour').on('mouseenter', function() {
        $(this).addClass('highlight');
        $(this).find('.photos').show();
    });
    $('.tour').on('mouseleave', function() {
        $(this).addClass('highlight');
        $(this).toggleClass('highlight');
    });
    // add a new event handler
});

