var html = '<input type="text" id="search" placeholder="Type to search"><input type="number" id="quantity" placeholder="Number of lines" value="">' +
    '<table id="table">';
$.getJSON('data.json', function(data) {
    var style =' style="padding: 4px; border: 1px #CCC solid; width: 100px;"';
    var cnt =0;

    for (var i in data.aaData) {
        cnt ++;
        html += '<tr>';

        html += '<td' + style+'>'+data.aaData[i].name +'</td>' + '<td' + style+'>'+data.aaData[i].url+'</td>'+
        '<td' + style+'>'+data.aaData[i].name_b +'</td>'+ '<td' + style+'>'+data.aaData[i].phone +'</td>';

        html += '</tr>';

    }

    html +='</table>';
    document.write(html);
    var $rows = $('#table tr');
    $('#search').keyup(function() {
        var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

        $rows.show().filter(function() {
            var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
            return !~text.indexOf(val);
        }).hide();
    });
    $('#quantity').on('keyup', function() {
            alert(cnt);
            alert($(this).val());
    });
});