$('#form-email').on('input', function() {
    var input=$(this);
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var is_email=re.test(input.val());
    if(is_email){input.removeClass("alert-error").addClass("valid");}
    else{input.addClass("alert-error").removeClass("valid");}
    
});
$('#form-name').on('input', function() {
    var input=$(this);
    var re = /[a-zA-Z]/;
    var is_word=re.test(input.val());
    if(is_word  && input.val().length>2 ){input.removeClass("alert-error").addClass("valid");}
    else{input.addClass("alert-error").removeClass("valid");}
});
$('#form-message').on('input', function() {
    var input=$(this);
    
    if(input.val().length>2 ){input.removeClass("alert-error").addClass("valid");}
    else{input.addClass("alert-error").removeClass("valid");}
});
$("#comment").submit(function(e){
    form_data=$(this).serializeArray();
    var error_free=true;
    for (input in form_data){
        var element=$("#form-"+form_data[input]['name']);
        
        valid=element.hasClass("valid");
        
        if (!valid){error_free=false;}
        
    }
    if (!error_free){
        e.preventDefault();
    }
    
});


