 

 // alert(99);
  // When the browser is ready...
  //hi chetan
  //hi all
    
	
	
	
	
	
	
	
	  $(document).ready(function() {

      $(".text").hide();
    $("#yes").click(function () {
        $(".text").show();
    });
    $("#no").click(function () {
        $(".text").hide();
    });
  
    // Setup form validation on the #register-form element
    $("#register-form").validate({
    
        // Specify the validation rules
        rules: {
            firstname: "required",
            lastname: "required",
            gender:"required",
            voterid:"required",
            text:"required",
             //  department:{ valueNotEquals:"-1" },
            adharid:"required",
            email: {
                required: true,
                email: true,
				accept:"[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}"
            },
            password: {
                required: true,
                minlength: 5,
				maxlength: 10
				
            },

    department: {  // <-- this is the name attribute
        required: true
    },

            agree: "required"
        
        
       
        },
        
        // Specify the validation error messages
        messages: {
            text:"please enter your choice",
            firstname: "Please enter your first name",
            lastname: "Please enter your last name",
            gender:"you must select one of the radio",
             voterid:"you must tel that wether you possess voterid",
              adharid:"you must tel that wether you possess adharid",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address",
             //department: {valueNotEquals: "Please select the department"},
department:"please select the department",
            agree: "Please accept our policy"
        },
        
        submitHandler: function(form) {
			
				form.submit();
        }
    });

  });	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
  

