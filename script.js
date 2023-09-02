function test(){
// retervng data
 var first = document.getElementById("firstname").value;
 var last = document.getElementById("lastname").value;
 var email = document.getElementById("email").value;
 var mees = document.getElementById("message").value;
//  storing data
 var first1 = localStorage.setItem("first",first) ;
 var last1 = localStorage.setItem("last",last) ;
 var em = localStorage.setItem("email",email) ;
 var mes = localStorage.setItem("mees",mees) ;
 //reterving store data 
 var first1 = localStorage.getItem("first",first) ;
 var last1 = localStorage.getItem("last",last) ;
 var em = localStorage.getItem("email",email) ;
 var mes = localStorage.getItem("mees",mees) ;
 alert(first1+" "+last1);

}