/**
 * Created by user on 28.04.16.
 */
$(document).ready(function () {
    console.log("Ready");

    $('a').click(function () {
        console.log("Вы поставили рейтинг = " + $(this).text());
        alert("Вы поставили рейтинг = " + $(this).text());
    });

});