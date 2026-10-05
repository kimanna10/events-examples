// ------- COUNTER ----------------------------------
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");
const counterElement = document.querySelector("#count");

let count = 0;

minusBtn.addEventListener("click", function () {
  if (count > 0) {
    count--; //  count = count - 1
    counterElement.textContent = count;
  }
});

plusBtn.addEventListener("click", function () {
  count++; //  count = count + 1
  counterElement.textContent = count;
});

// ------- PASSWORD ----------------------------------
const password = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword"); // элемент

// togglePassword.addEventListener("click", function () {
//   if (password.type === "password") {
//     password.type = "text"; // показывает пароль
//     togglePassword.textContent = "Скрыть пароль";
//   } else {
//     password.type = "password";
//     togglePassword.textContent = "Показать пароль";
//   }
// });

// решение с тернарным оператором
// условие ? значение1 : значение2
togglePassword.addEventListener("click", function () {
  const isPassword = password.type === "password";
  password.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Скрыть пароль" : "Показать пароль";
});

// ------- MODAL ----------------------------------
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");
const modal = document.querySelector("#modal");

openModal.addEventListener("click", function () {
  modal.classList.add("opened");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("opened");
});

// ------- REGISTRATION FORM ----------------------------------
const registrationForm = document.querySelector("#registrationForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#pass");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const ageInput = document.querySelector("#age");
const countryInput = document.querySelector("#country");
const genderInput = document.querySelector("input[name='gender']");
const aboutInput = document.querySelector("#about");
const termsInput = document.querySelector("#terms");

registrationForm.addEventListener("submit", function (event) {
  console.log();
});

function validateName() {
  const value = nameInput.value.trim(); // " Anna " -> "Anna"
  if (value === "") {
    return "Пожалуйста заполните имя!";
  }
  if (value.length < 2) {
    return "Имя должно содержать минимум 2 символа!";
  }
  return "";
}

function validateEmail() {
  const value = emailInput.value.trim();
  if (value === "") {
    return "Пожалуйста заполните email!";
  }
  return "";
}

function validatePassword() {
  const value = passInput.value;
  if (value === "") {
    return "Пожалуйста заполните пароль!";
  }
  if (value.length < 8) {
    return "Пароль должен содержать минимум 8 символов!";
  }
  return "";
}

function validateConfirmPassword() {
  const value = confirmPasswordInput.value;
  if (value === "") {
    return "Пожалуйста подтвердите пароль!";
  }
  if (value !== passInput.value) {
    return "Пароли не совпадают!";
  }
  return "";
}

function validateAge() {
  const value = Number(ageInput.value);
  if (!ageInput.value) {
    return "Пожалуйста заполните возраст!";
  }
  if (value < 14) {
    return "Минимальный возраст 14!";
  }
  if (value > 100) {
    return "Максимальный возраст 100!";
  }
  return "";
}

function validateCountry() {
  const value = countryInput.value;
  if (value === "") {
    return "Пожалуйста выберите страну!";
  }
  return "";
}

function validateGender() {
  const checkedGender = document.querySelector("input[name='gender']:checked");
  if (!checkedGender) {
    return "Пожалуйста выберите пол!";
  }
  return "";
}

function validateAbout() {
  const value = aboutInput.value.trim();
  if (value.length < 10) {
    return "Пожалуйста расскажите о себе больше!";
  }
  return "";
}

function validateTerms() {
  if (!termsInput.checked) {
    return "Нужно согласие на обработку данных!";
  }
  return "";
}

function showError(element, message) {
  element.textContent = message;
  element.classList.add("error-visible");
}

function clearError(element, message) {
  element.textContent = "";
  element.classList.remove("error-visible");
}
