/**
 * Created by user on 28.04.16.
 */
$(document).ready(function () {
var total;
function show(){
    console.log("Ready");

    $('a').on("click", function () {
        //if (total >= 0)
        total = $(this).text();
        if (total > 0){
        console.log(total);
            $('li').removeClass("current").removeAttr('style');
            console.log("Класс и стили очищены");
        }
        var raiting = "Ваша оценка: ";
        raiting += $(this).text();
        console.log(raiting);
        $(this).parent().addClass("current");
        $(this).parent().css("width", "20" * $(this).text());
        $('dt').text("Ваша оценка: "+ $(this).text() +" из 5 звезд");
    });

}

    show();

});