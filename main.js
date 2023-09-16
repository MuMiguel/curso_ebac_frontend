$('form').on('submit', function (e) {
    e.preventDefault();
    const newTask = $('#taskInput').val();
    $('ul').append('<li>' + newTask + '<i class="fas fa-check"></i><i class="fas fa-trash"></i></li>');
    $('#taskInput').val('');

    $('ul').on('click','.fa-trash',function(){
        $(this).closest('li').fadeOut();
    });

    $('ul').on('click','.fa-check',function(){
        $(this).closest('li').toggleClass('checked');
    });
});

