$(document).ready(function(){
    $('#login_btn').click(function(){
        window.open("/login.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=650,height=650");
    });
        // //alert();
        // const contact_name = $('#contact_name').val();
        // const contact_email = $('#contact_email').val();
        // const contact_phone = $('#contact_phone').val();
        // const contact_message = $('#contact_message').val();

        // //alert(contact_name+":"+contact_email+":"+contact_phone+":"+contact_message);
        // const send_param = {contact_name, contact_email, contact_phone, contact_message};
        // $.post('contact_info', send_param,function(returnData){
        //     alert(returnData.message);
        // });
    
    // });

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

    $('#login_bt1').click(function(){
        //alert();
        const contact_email=$('#login_email').val();
        const send_param={contact_email};
        $.post('contact', send_param,function(returnData){
            alert(returnData.message);
        });
    });

    $('#sign').click(function(){
        let sign_html_content="<div class='col-lg-6 col-md-6 contact-left-form'>";
        sign_html_content +="<form>";
        sign_html_content +="<div class='form-group'>";
        sign_html_content +="<label for='email'>Email:</label>";
        sign_html_content +="<input type='email' class='form-control' id='email' placeholder='Enter email'>";
        sign_html_content +="</div>";
        sign_html_content +="<div class='form-group'>";
        sign_html_content +="<label for='name'>Name:</label>";
        sign_html_content +="<input type='name' class='form-group contact-forms' id='user_name' placeholder='Enter your name'>";
        sign_html_content +="</div>";
        sign_html_content +="<div class='form-group'>";
        sign_html_content +="<label for='phone'>Phone:</label>";
        sign_html_content +="<input type='' class='form-control' id='user_name' placeholder='Enter your name'>";
        sign_html_content +="</div>";
        sign_html_content +="<div class='checkbox'>";
        sign_html_content +="<label><input type='checkbox'> Remember me</label>";
        sign_html_content +="</div>";
        sign_html_content +="<input type='button' id='login_b' value='login'></form>";
        sign_html_content +="</div>"

        // let sign_html_content="<div class="container py-md-5">";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";
        // sign_html_content +="";



        $('#footer').html(sign_html_content);

    });
});
