/**
 * Created by user on 15.04.16.
 */
var white = "#FFFFFF";		// ������ ����
var black = "#000000";		// ����� ����
//var n = 8;					// ���������� ����� � ����� � ����
var color = white;			// ������� ����

n = prompt("������� ������ ���� N x N","");

// ��������� �������
document.write("<table>");
// ���� �����
for (var tr = 1; tr <= n; tr++)
{
    document.write("<tr>");
    // ���� �����
    for (var td = 1; td <= n; td++)
    {
        if (tr == 1 || td == 1)
            document.write("<td bgcolor='red'>");
        else
            document.write('<td bgcolor="'+color+'">')
        document.write("&nbsp;")
        document.write("</td>")
        //document.write("<td style=\"background-color:" + color + "\">&nbsp;</td>");
        // ����� �������� �����
        if (td == n)
            if ((n % 2) == 0)
                continue;
        color = (color == black) ? white : black;
    }
    // ����� ����
    document.write("</tr>");
}
// ����� �������
document.write("</table>");