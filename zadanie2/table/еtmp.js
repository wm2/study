var html = '<input type="text" id="search" placeholder="Type to search"><table id="table">';
var cnt  = 0;
$.getJSON('data.json', function(data) {
    for (var i in data.aaData) {
        if(i == 5)
        break;
        html += '<tr>';

        html += '<td>'+data.aaData[i].name +'</td>' + '<td>'+data.aaData[i].url+'</td>'+
        '<td>'+data.aaData[i].name_b +'</td>'+ '<td>'+data.aaData[i].phone +'</td>';

        html += '</tr>';

    }
    if(cnt != 0) {
        html += '<td></td><td></td></tr>';
    }
    html +='</table>';
    document.write(html);
});
