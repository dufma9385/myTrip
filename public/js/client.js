$(document).ready(function(){

    $('#search_btn').click(function(){
        const search = $('#search_val').val();
        //alert(search);
        const send_param = {search};
        $.post('/search', send_param, function(returnData){
            alert(returnData.message);
            location.reload();

            let board_search_view = `<div>${returnData}</div>`;
            $('#search_view').html(returnData.message);
        })
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
        sign_html_content +="<input type='' class='form-control' id='user_phone' placeholder='Enter your phone Number'>";
        sign_html_content +="<input type='button' id='send_btn' class='btn btn-block sent-butnn' value='Send'></form>";
        sign_html_content +="</div>"
        $('#footer').html(sign_html_content); 

    });
    $(document).on('click','#send_btn', function(){
        //alert();
        const user_email = $('#user_email').val();
        const user_name = $('#user_name').val();
        const user_phone = $('#user_phone').val();
        const send_param = {user_email, user_name, user_phone};
        $.post('/sign', send_param, function(returnData){
            alert(returnData.message);
            location.reload();
            sign_html_content.hide();
        });
    });

    $('#login_bt1').click(function(){
        //alert();
        const login_email=$('#login_email').val();
        const send_param={login_email};
        $.post('/login', send_param, function(returnData){
            alert(returnData.message);
            window.opener.parent.location.reload();
            window.close();

        });

    });
    
    $('#logout_btn').click(function(){
        $.post('logout', {}, function(resultData){
            alert(resultData.message);
            location.reload();
        })
    });

    $('#login_btn').click(function(){
        window.open("/login/login_p", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=200,width=650,height=650");
    });

    $('#board_btn').click(function(){
        //alert();
        const board_title=$('#board_title').val();
        const board_content=$('#board_content').val();
        const board_nation=$('#board_nation').val();

        //alert(contact_name+":"+contact_email+":"+contact_phone+":"+contact_message);
        const send_param={board_title, board_content, board_nation};
        $.post('board', send_param,function(returnData){
            alert(returnData.message);
            location.reload();
            board_title.val("");
            board_content.val("");
            board_nation.val("");
        });
    });

    
});
