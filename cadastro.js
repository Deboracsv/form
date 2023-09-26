

let email = document.getElementById('email');
let form = document.querySelector('form');
let textForm = document.getElementById('textForm');
let textEmail = document.getElementById('textEmail');




email.addEventListener("keyup", ()=>{
   if(validaEmail(email.value)!== true){
      textEmail.textContent = "O formato do E-MAIL deve ser Ex: texto@abc.com"
   }
   else {
      textEmail.textContent = " "
   }
   
})

alert("Obrigado por Participar")

function validaEmail(email) {
   let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2, 4})$/;
   return emailPattern.test(email);
}


