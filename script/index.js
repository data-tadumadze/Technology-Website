let loginUsername = document.getElementById("loginUsername");
let loginPassword = document.getElementById("loginPassword");
let errorMessage = document.getElementById("errorMessage");
let signupEmail = document.getElementById("signupEmail");
let signupUsername = document.getElementById("signupUsername");
let signupPassword = document.getElementById("signupPassword");
let signupConfirmPassword = document.getElementById("signupConfirmPassword");
let signupCheckbox = document.getElementById("signupCheckbox");
let signupErrorMessage = document.getElementById("signupErrorMessage");

let users = [];

function openNavigation() {
  let respNavbar = document.getElementById("responsiveNavbar");
  show(respNavbar);
  respNavbar.style.animation = "slide-left 0.2s ease-in forwards";
}

function closeNavigation() {
  let respNavbar = document.getElementById("responsiveNavbar");
  hide(respNavbar);
}

function openLoginModal() {
  let loginModal = document.getElementById("loginModal");
  show(loginModal);
  loginModal.style.animation = "slide-down 0.3s ease-in forwards";
}
function closeLoginModal() {
  let loginModal = document.getElementById("loginModal");
  hide(loginModal);
  hide(errorMessage);
  loginUsername.value = "";
  loginPassword.value = "";
}
function openSignupModal() {
  let signupModal = document.getElementById("signupModal");
  show(signupModal);
  hide(errorMessage);
  loginUsername.value = "";
  loginPassword.value = "";
}
function closeSignupModal() {
  let signupModal = document.getElementById("signupModal");
  hide(signupModal);
  hide(signupErrorMessage);
  signupEmail.value = "";
  signupUsername.value = "";
  signupPassword.value = "";
  signupConfirmPassword.value = "";
  signupCheckbox.checked = false;
}

function show(el) {
  el.classList.remove("none");
  el.classList.add("block");
}

function hide(el) {
  el.classList.remove("block");
  el.classList.add("none");
}

function login() {
  let count = 0;
  function checkPassowrd() {
    let passwordArr = loginPassword.value.split("");
    for (i = 0; i < passwordArr.length; i++) {
      if (passwordArr[i] === passwordArr[i].toUpperCase()) {
        count++;
      }
    }
  }
  checkPassowrd();
  let bullean = users.some(
    (el) =>
      loginUsername.value == el.Username && loginPassword.value == el.Password
  );
  if (!loginUsername.value) {
    errorMessage.style.color = "red";
    show(errorMessage);
    errorMessage.innerHTML = "Please enter Username";
  } else if (loginPassword.value.length < 8) {
    errorMessage.style.color = "red";
    show(errorMessage);
    errorMessage.innerHTML = "Password must include min. 8 symbols";
  } else if (count < 2) {
    errorMessage.style.color = "red";
    show(errorMessage);
    errorMessage.innerHTML = "Password must include min. 2 uppercase symbols";
  } else if (!bullean) {
    errorMessage.style.color = "red";
    show(errorMessage);
    errorMessage.innerHTML = "Incorrect Username or Password";
  } else {
    show(errorMessage);
    errorMessage.style.color = "green";
    errorMessage.innerHTML = `Welcome ${loginUsername.value}`;
    let loginButton = document.getElementById("loginButton");
    let Username = document.getElementById("Username");
    hide(loginButton);
    show(Username);
    Username.innerHTML = loginUsername.value;
    let responsiveLoginButton = document.getElementById(
      "responsiveLoginButton"
    );
    hide(responsiveLoginButton);
    let responsiveUsername = document.getElementById("responsiveUsername");
    show(responsiveUsername);
    responsiveUsername.innerHTML = loginUsername.value;
    loginUsername.value = "";
    loginPassword.value = "";
  }
}

function signup() {
  let specialSymbolCount = 0;
  let uppercaseCount = 0;
  function checkPassowrd() {
    let passwordArr = signupPassword.value.split("");
    for (i = 0; i < passwordArr.length; i++) {
      if (passwordArr[i] === passwordArr[i].toUpperCase()) {
        uppercaseCount++;
      }
      if (
        passwordArr[i] === "!" ||
        passwordArr[i] === "@" ||
        passwordArr[i] === "#" ||
        passwordArr[i] === "$" ||
        passwordArr[i] === "5" ||
        passwordArr[i] === "^" ||
        passwordArr[i] === "&"
      ) {
        specialSymbolCount++;
      }
    }
  }
  checkPassowrd();

  if (!signupEmail.value) {
    signupErrorMessage.style.color = "red";
    show(signupErrorMessage);
    signupErrorMessage.innerHTML = "Please enter your Email";
  } else if (
    !signupEmail.value.includes("@") ||
    !signupEmail.value.includes(".")
  ) {
    signupErrorMessage.style.color = "red";
    show(signupErrorMessage);
    signupErrorMessage.innerHTML = "Please enter valid Email";
  } else if (signupUsername.value.length < 3) {
    signupErrorMessage.style.color = "red";
    show(signupErrorMessage);
    signupErrorMessage.innerHTML = "Username must include min. 3 symbols";
  } else if (signupPassword.value.length < 8) {
    signupErrorMessage.style.color = "red";
    show(signupErrorMessage);
    signupErrorMessage.innerHTML = "Password must include min. 8 symbols";
  } else if (uppercaseCount < 2) {
    signupErrorMessage.style.color = "red";
    show(signupErrorMessage);
    signupErrorMessage.innerHTML =
      "Password must include min. 2 Uppercase symbols";
  } else if (specialSymbolCount < 1) {
    signupErrorMessage.style.color = "red";
    show(signupErrorMessage);
    signupErrorMessage.innerHTML =
      "Password must include Special symbol (!@#$%^&)";
  } else if (signupPassword.value !== signupConfirmPassword.value) {
    signupErrorMessage.style.color = "red";
    show(signupErrorMessage);
    signupErrorMessage.innerHTML = "Passwords don't match";
  } else if (!signupCheckbox.checked) {
    signupErrorMessage.style.color = "red";
    show(signupErrorMessage);
    signupErrorMessage.innerHTML = "Please confirm Terms and Conditions";
  } else {
    users.push({
      Email: signupEmail.value,
      Username: signupUsername.value,
      Password: signupPassword.value,
    });
    signupErrorMessage.style.color = "green";
    show(signupErrorMessage);
    signupErrorMessage.innerHTML = "Registered Successfully ";
    signupEmail.value = "";
    signupUsername.value = "";
    signupPassword.value = "";
    signupConfirmPassword.value = "";
    signupCheckbox.checked = false;
  }
}

function openQuestionsModal() {
  let question1 = document.getElementById("question1");
  let question2 = document.getElementById("question2");
  let question3 = document.getElementById("question3");
  let question4 = document.getElementById("question4");
  let question5 = document.getElementById("question5");
  let modalQuestion = document.getElementById("modalQuestion");
  let modalAnswer = document.getElementById("modalAnswer");
  let questionsModal = document.getElementById("questionsModal");
  show(questionsModal);
  window.addEventListener("click", (event) => {
    if (event.target === question1) {
      modalQuestion.innerHTML = "How soon will my order ship?";
      modalAnswer.innerHTML = "Shipping order takes 1-2 weeks";
    }
    if (event.target === question2) {
      modalQuestion.innerHTML = "Is there any warranty exclusions?";
      modalAnswer.innerHTML = "Yes of course, we have a warranty";
    }
    if (event.target === question3) {
      modalQuestion.innerHTML =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit?";
      modalAnswer.innerHTML = "Lorem ipsum dolor";
    }
    if (event.target === question4) {
      modalQuestion.innerHTML = "Will I be charged for a replacement item?";
      modalAnswer.innerHTML = "No, you'll be not charged";
    }
    if (event.target === question5) {
      modalQuestion.innerHTML = "How can I track my orders & payment?";
      modalAnswer.innerHTML = "You can track it from our website";
    }
  });
}

function closeQuestionsModal() {
  let questionsModal = document.getElementById("questionsModal");
  hide(questionsModal);
}

window.addEventListener("click", (event) => {
  if (event.target === questionsModal) {
    let questionsModal = document.getElementById("questionsModal");
    hide(questionsModal);
  }
});

function getEvent1Info() {
  let event1Month = document.getElementById("event1Month");
  let event1Date = document.getElementById("event1Date");
  let event1Title = document.getElementById("event1Title");
  let event1Descrptn = document.getElementById("event1Descrptn");
  fetch("http://localhost:3000/event1-date", { method: "get" })
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
      event1Month.innerHTML = jsonData[0].month;
      event1Date.innerHTML = jsonData[0].date;
    });
  fetch("http://localhost:3000/event1-descrptn", { method: "get" })
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
      event1Title.innerHTML = jsonData[0].title;
      event1Descrptn.innerHTML = jsonData[0].description;
    });
}

function getEvent2Info() {
  let event2Month = document.getElementById("event2Month");
  let event2Date = document.getElementById("event2Date");
  let event2Title = document.getElementById("event2Title");
  let event2Descrptn = document.getElementById("event2Descrptn");
  fetch("http://localhost:3000/event2-date", { method: "get" })
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
      event2Month.innerHTML = jsonData[0].month;
      event2Date.innerHTML = jsonData[0].date;
    });
  fetch("http://localhost:3000/event2-descrptn", { method: "get" })
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
      event2Title.innerHTML = jsonData[0].title;
      event2Descrptn.innerHTML = jsonData[0].description;
    });
}

function getEvent3Info() {
  let event3Month = document.getElementById("event3Month");
  let event3Date = document.getElementById("event3Date");
  let event3Title = document.getElementById("event3Title");
  let event3Descrptn = document.getElementById("event3Descrptn");
  fetch("http://localhost:3000/event3-date", { method: "get" })
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
      event3Month.innerHTML = jsonData[0].month;
      event3Date.innerHTML = jsonData[0].date;
    });
  fetch("http://localhost:3000/event3-descrptn", { method: "get" })
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
      event3Title.innerHTML = jsonData[0].title;
      event3Descrptn.innerHTML = jsonData[0].description;
    });
}
