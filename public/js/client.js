$(document).ready(function(){
    $('#sign_btn').click(function(){
        const user_email = $('#user_email').val();
        const user_name = $('#user_email').val();
        const user_phone = $('#user_phone').val();
        const send_param = {user_email, user_name, user_phone};
        $.post('contact', send_param, function(returnData){
            alert(returnData.message);
        });
    });
    $('#sign').click(function(){
        let sign_html_content="<div class='col-lg-6 col-md-6 contact-left-form'>";
        sign_html_content +="<form>";
        sign_html_content +="<div class='form-group contact-forms'>";
        sign_html_content +="<label for='email'>Email:</label>";
        sign_html_content +="<input type='email' class='form-control' id='user_email' placeholder='Enter email'>";
        sign_html_content +="</div>";
        sign_html_content +="<div class='form-group'>";
        sign_html_content +="<label for='name'>Name:</label>";
        sign_html_content +="<input type='name' class='form-control' id='user_name' placeholder='Enter your name'>";
        sign_html_content +="</div>";
        sign_html_content +="<div class='form-group'>";
        sign_html_content +="<label for='phone'>Phone:</label>";
        sign_html_content +="<input type='' class='form-control' id='user_phone' placeholder='Enter your name'>";
        sign_html_content +="<input type='button' id='sign_btn' class='btn btn-block sent-butnn' value='Send'></form>";
        sign_html_content +="</div>"
        $('#footer').html(sign_html_content); 

    });

    $('#login_bt1').click(function(){
        //alert();
        const contact_email=$('#login_email').val();
        const send_param={contact_email};
        $.post('contact', send_param,function(returnData){
            alert(returnData.message);
        });
    });
    
    $('#login_btn').click(function(){
        window.open("/login.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=650,height=650");
    });

    $('#board_btn').click(function(){
        //alert();
        const board_title=$('#board_title').val();
        const board_content=$('#board_content').val();

        //alert(contact_name+":"+contact_email+":"+contact_phone+":"+contact_message);
        const send_param={board_title, board_content};
        $.post('board', send_param,function(returnData){
            alert(returnData.message);
        });
    });

    
});
