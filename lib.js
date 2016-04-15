/**
 * Created by user on 15.04.16.
 */
var white = "#FFFFFF";		// Черный цвет
var black = "#000000";		// Белый цвет
//var n = 8;					// Количество рядов и ячеек в ряду
var color = white;			// Текущий цвет

n = prompt("Введите размер поля N x N","");

// Отрисовка таблицы
document.write("<table>");
// Цикл рядов
for (var tr = 1; tr <= n; tr++)
{
    document.write("<tr>");
    // Цикл ячеек
    for (var td = 1; td <= n; td++)
    {
        if (tr == 1 || td == 1)
            document.write("<td bgcolor='red'>");
        else
            document.write('<td bgcolor="'+color+'">')
        document.write("&nbsp;")
        document.write("</td>")
        //document.write("<td style=\"background-color:" + color + "\">&nbsp;</td>");
        // Смена текущего цвета
        if (td == n)
            if ((n % 2) == 0)
                continue;
        color = (color == black) ? white : black;
    }
    // Конец ряда
    document.write("</tr>");
}
// Конец таблицы
document.write("</table>");