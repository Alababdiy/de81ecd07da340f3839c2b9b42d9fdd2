if (['/', '', 'index.html', 'index'].includes(page)) {
    function subscription() {
        $.post(
            url('/email_subscription'),
            $('form').serialize(),
            function (data) {
                console.log(data);
                data = response_handler(data);
                if (data.success) {
                    $('#sub_form_message').html('تم الاشتراك ، شكراً ✅');
                    $('form').remove();
                } else {
                    $('#sub_form_message').html("فشلت العملية");
                }
            }
        )
    }


} else if (['join.html', 'join'].includes(page)) {
    console.log('24');
    changeInputType(document.getElementsByName('license_file')[0] , 'file');
    changeInputType(document.getElementsByName('identity_card')[0] , 'file');
    $('input[type=text],input[type=email],input[type=tel]').keyup(function (e) {
        console.log('executed');
        if (this.value !== "")
            $(`label[for='${this.id}']`).slideDown(50);
        else
            $(`label[for='${this.id}']`).slideUp(50);
    });
}


