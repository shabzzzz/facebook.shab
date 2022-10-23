


$(document).ready(function(){
    $.validator.addMethod("passwordRule",
    function(value,element){
        return /^[A-Za-z0-9\d=!-@._*]+$/.test(value);
    })
    $('#formvalid').validate({
        
        rules:{
            first:{
                required:true,
                minlength:3,
                maxlength:15
            },
            sur:{
                required:true,
                minlength:3,
                maxlength:15

            },
            mobnumb:{
                required:true,
                email:true,
                
                
                
            },
          password:{
                required:true,
                minlength:4,
                passwordRule:true
               
               
               

            },
            passwords:{
               required:true,
               minlength:4,
               equalTo:'[name="password"]'
            },
            day:{
                required:true
            },
            months:{
                required:true
            },
            years:{
                required:true
            }
            
        },
        messages:{
          first:{
            required:"Must enter",
            minlength:"neet atleast 3 charecters"
          },
          passwords:{
             minlength:"Enter minimum charecter",
             equalTo:"Enter the same password"
          }

        },
       

        
        
    })
    
    
})

