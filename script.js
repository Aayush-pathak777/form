(function(){
  let isauth = localStorage.getItem('token')
  if(isauth.length>0)
  {
console.log('ok')
  }
  else {
    window.location.href ="/login.html"
  }
})()

const form = document.querySelector("#form");

form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  const { username, email, mobile, address, gender, service, mode } = form;

  const obj = {
    username: username.value,
    email: email.value,
    mobile: mobile.value,
    address: address.value,
    gender: gender.value,

    service: service.value,

    mode: mode.value,

    id: new Date().getTime()

  };

  console.log(obj);

  let data = JSON.parse(localStorage.getItem("data")) || [];

  data.push(obj);

  localStorage.setItem("data", JSON.stringify(data));


  window.location.href = "../data/admin.html";
}



let logging=document.getElementById('logging_out')
logging.addEventListener('click',function(){

  console.log('chala ja')
      localStorage.setItem("token","");

      window.location.reload()



 }) 