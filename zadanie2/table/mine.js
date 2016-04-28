$(document).ready(function () {
    $.getJSON('data.json', function (data) {
        var html = '';
        var style = ' style="padding: 4px; border: 1px #CCC solid; width: 100px;"';
        var next = data.sEcho;
        printTable();
        changeTable();


        function printTable() {

            html += '<input type="text" id="search" placeholder="Type to search">';

            html += '<select id="quantity">';
            for (var i in data.aLengthMenu) {
                html += '<option>' + data.aLengthMenu[i] + '</option>';
            }
            html += '</select>';


            html += '<table id="table">';
            var cnt = 0;

            for (var i in data.aaData) {
                cnt++;
                if (i < data.sEcho) {

                    html += '<tr>';

                    html += '<td' + style + '>' + data.aaData[i].name + '</td>' + '<td' + style + '>' + data.aaData[i].url + '</td>' +
                    '<td' + style + '>' + data.aaData[i].name_b + '</td>' + '<td' + style + '>' + data.aaData[i].phone + '</td>';

                    html += '</tr>';
                } else {

                }

            }
            //alert(cnt);
            html += '</table><button id="prev">Назад</button><button id="next">Вперед</button>';

            document.write(html);
            search();
            html = '';
        }


        function changeTable() {
            $("#quantity").change(function () {
                alert(data.sEcho);
                alert($(this).val());
var change;
                change = $(this).val() - data.sEcho + data.iTotalDisplayRecords;
                alert(change);
                for (var j  in data.aaData) {
                    if ((j >= data.sEcho) && (j < change)) {
                        $('tbody').each(function (i, el) {
                            $(el).append('<tr>' + '<td' + style + '>' + data.aaData[j].name + '</td>' +
                            '<td' + style + '>' + data.aaData[j].url + '</td>' +
                            '<td' + style + '>' + data.aaData[j].name_b + '</td>' +
                            '<td' + style + '>' + data.aaData[j].phone + '</td>' + '</tr>');
                        });
                    }
                    //if ((j <= data.iTotalDisplayRecords)) {
                    //    alert(j);
                    //    $('table').find('tr').eq($(this).val()).remove();
                    //}

                }
                data.sEcho = parseInt($(this).val());
                search();
                next = data.sEcho;
                //alert(data.sEcho);
            });
        }


        function search() {
            var $rows = $('#table tr');
            $('#search').keyup(function () {
                var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

                $rows.show().filter(function () {
                    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                    return !~text.indexOf(val);
                }).hide();
            });
        }

        $('#next').click(function () {
            alert(data.sEcho);
            alert(data.iTotalRecords);
            var prev = next;
            next = parseInt(next + data.sEcho);

            if (data.iTotalRecords <= next)
                next = data.iTotalRecords;
            alert(next);
            for (var j in data.aaData) {
                if (j <= prev) {
//alert(j);
                    $('table').find('tr').eq($(this).val()).remove();
                }
                //alert(next);
                if ((j < next) && (j >= data.sEcho)) {
                    $('tbody').each(function (i, el) {
                        $(el).append('<tr>' + '<td' + style + '>' + data.aaData[j].name + '</td>' +
                        '<td' + style + '>' + data.aaData[j].url + '</td>' +
                        '<td' + style + '>' + data.aaData[j].name_b + '</td>' +
                        '<td' + style + '>' + data.aaData[j].phone + '</td>' + '</tr>');
                    });
                }
            }
            search();
           data.sEcho = prev;
            data.iTotalDisplayRecords = next;
        });
        //$("#quantity").change(function () {
        //    alert(this).val();
        //});
        $('#prev').click(function () {
            alert('Вы нажали на элемент "next"');
        });


    });
});