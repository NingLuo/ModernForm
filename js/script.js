$(document).ready(function() {

    $("#acount-creation").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: "Please enter your name",
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email"
            },
            password: {
                required: "Please provie a password",
                minlength: "Your password must be at least 5 characters long"
            }
        },
        errorClass: "invalid",
        
        submitHandler: function() {
            $("#step1").removeClass("selected");
            $("#step2").addClass("selected");
            
            $("#form-step-1").addClass("hide");
            $("#form-step-2").removeClass("hide");
        }
    });
    
    $("#step2-previous").click(function() {
        $("#step2").removeClass("selected");
        $("#step1").addClass("selected");
        
        $("#form-step-2").addClass("hide");
        $("#form-step-1").removeClass("hide");
    });
    
    $("#acount-creation-details").validate({
        rules: {
            zip: {
                number: true,
                minlength: 5
            }          
        },
        messages: {
            zip: {
                number: "Please enter a valid zip code",
                minlength: "Your zip code must be at least 5 numbers long"
            }
        },
        errorClass: "invalid",
        
        submitHandler: function() {
            $("#step2").removeClass("selected");
            $("#step3").addClass("selected");
            
            $("#form-step-2").addClass("hide");
            $("#form-step-3").removeClass("hide");
        }
    });
    
    $("#step3-previous").click(function() {
        $("#step3").removeClass("selected");
        $("#step2").addClass("selected");
        
        $("#form-step-3").addClass("hide");
        $("#form-step-2").removeClass("hide");
    });
    
    $("#acount-creation-confirm").validate({
        ignore: [],
        rules: {
            terms: "required"          
        },
        messages: {
            terms: "Please accept our terms"
        },
        errorClass: "invalid",
        errorPlacement: function(error, element) {
            error.appendTo('#terms-label');
        },
        
        submitHandler: function() {
            alert("Account Create Success")
        }
    });
});