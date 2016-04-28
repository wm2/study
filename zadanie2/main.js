var filters = [];
function apply_filter(table,col,text)
{
    filters[col] = text;

    $(table).find('tr').each(function(i){
        $(this).data('passed', true);
    });

    for(index in filters)
    {
        if(filters[index] !== 'any')
        {
            $(table).find('tr td:nth-child('+index+')').each(function(i){
                if($(this).text().indexOf(filters[index]) > -1 && $(this).parent().data('passed'))
                {
                    $(this).parent().data('passed', true);
                }
                else
                {
                    $(this).parent().data('passed', false);
                }
            });
        }
    }

    $(table).find('tr').each(function(i){
        if(!$(this).data('passed'))
        {
            $(this).hide();
        }
        else
        {
            $(this).show();
        }
    });
}