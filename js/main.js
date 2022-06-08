let nameInput1 = document.querySelector("#nameInput"),
    emailRgister = document.querySelector("#emailInput"),
    emailLOgin = document.querySelector("#emailInput2"),
    passwordRegister = document.querySelector(".password"),
    passwordLogin = document.querySelector(".passwordLogin"),
    registerBtn = document.querySelector(".registerBtn"),
    showHide = document.querySelector(".showHide"),
    loginBtn = document.querySelector(".loginBtn");
// console.log(loginBtn);

// lma udos ala register
registerBtn.addEventListener("click", function () {
  if(nameInput1.value=="" && emailRgister.value=="" && passwordRegister.value=="")
  {
    alert("please enter your infomation");
  }
  else{
    register();
    clear();
    $(".content-register").css("display", "none");
    $(".content-login").css("display", "flex");   
  }
 
});
$("form .message-login").click(() => {
  $(".content-login").css("display", "none");
  $(".content-register").css("display", "flex");
});
let info=[];
function register() {
  let registerContent = {
    name: nameInput1.value,
    email: emailRgister.value,
    password: passwordRegister.value,
  };
  info.push(registerContent);
  // console.log(info[0].)
  localStorage.setItem("userInfo", JSON.stringify(info));
}
// login lma udos ala login
loginBtn.addEventListener("click", () => {
  for (let i = 0; i < info.length; i++) {
    if (info[i].email == emailLOgin.value && passwordLogin.value==info[i].password) {
      alert("hello");
    } else {
      alert("email or password wrong");
    }
    
  }  
});
showHide.addEventListener("click", function () {
 
    if (passwordLogin.getAttribute("type") == "password" ||passwordRegister.getAttribute("type") == "password") {
      passwordLogin.setAttribute("type", "text");
      passwordRegister.setAttribute("type", "text");
      showHide.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      passwordLogin.setAttribute("type", "password");
      passwordRegister.setAttribute("type", "password");
      showHide.classList.replace("fa-eye", "fa-eye-slash");
    }
  
});
function clear() {
  nameInput1.value = "";
  emailRgister.value = "";
  passwordRegister.value="";
}
$("form .message-register").click(() => {
  $(".content-register").css("display", "none");
  $(".content-login").css("display", "flex");
});

