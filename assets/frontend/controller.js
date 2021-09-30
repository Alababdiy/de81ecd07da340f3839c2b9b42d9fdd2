if (['/','','index.html','index'].includes(page)){
    function subscription(){
        $.post(
            '/email_subscription',
            $('form').serialize(),
            function (data) {
                console.log(data);
                data = response_handler(data);
                if(data.success){
                    $('#sub_form_message').html('تم الاشتراك ، شكراً ✅');
                    $('form').remove();
                }
                else{
                    $('#sub_form_message').html("فشلت العملية");
                }
            }
        )
    }
}

