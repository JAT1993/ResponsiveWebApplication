  function formValidation(){
                               var x = document.getElementById('email').value;
                                var number = document.getElementById('number').value;
                                console.log(number);
                                var pos = x.indexOf("@");
                               var dot = x.lastIndexOf(".");
                               
                                if (pos<1 || dot<pos+2 || dot+2>=x.length) {
                                                alert("Enter correct email address");
                                                document.getElementById('email').value = "";
                                                document.getElementById('number').value = "";
                                }else if(number.length!==10){
                                                alert("Phone Number should be of 10 digits");
                                }else{
 
                                                for(var i = 0; i<number.length ; i++)
                                                {
 
                                                                if(number.charCodeAt(i)<48 || number.charCodeAt(i)>57)
                                                                {
                                                                                alert("Enter only numbers");
                                                                                return;
                                                                }             
                                                }
                                                alert("Welcome "+x);
                                   }
 
                }
