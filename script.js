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

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passError = document.querySelector("#passError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");
const ageError = document.querySelector("#ageError");
const countryError = document.querySelector("#countryError");
const genderError = document.querySelector("#genderError");
const aboutError = document.querySelector("#aboutError");
const termsError = document.querySelector("#termsError");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = {
    name: validateName(),
    email: validateEmail(),
    password: validatePassword(),
    confirmPassword: validateConfirmPassword(),
    age: validateAge(),
    country: validateCountry(),
    gender: validateGender(),
    about: validateAbout(),
    terms: validateTerms(),
  };

  showError(nameError, errors.name);
  showError(emailError, errors.email);
  showError(passError, errors.password);
  showError(confirmPasswordError, errors.confirmPassword);
  showError(ageError, errors.age);
  showError(countryError, errors.country);
  showError(genderError, errors.gender);
  showError(aboutError, errors.about);
  showError(termsError, errors.terms);

  const isValid = // false -> не валидная
    !errors.name && // false
    !errors.email && // true
    !errors.password && // true
    !errors.confirmPassword && // true
    !errors.age && // true
    !errors.country && // true
    !errors.gender && // true
    !errors.about && // true
    !errors.terms; // true

  if (!isValid) {
    return;
  }

  const selectedGender = document.querySelector('input[name="gender"]:checked');

  const userData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passInput.value,
    age: Number(ageInput.value),
    country: countryInput.value,
    gender: selectedGender.value,
    about: aboutInput.value,
    terms: termsInput.checked,
  };

  //console.log(`User: ${userData}`); // -> string
  console.log("User: ", userData);
  alert("Спасибо за регистрацию!");

  registrationForm.reset();
});

registrationForm.addEventListener("reset", function (event) {
  registrationForm.reset();
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

  if (message) {
    element.classList.add("error-visible");
  } else {
    element.classList.remove("error-visible");
  }
}

// ------- AUTHTORIZATION FORM ----------------------------------
const authForm = document.querySelector("#authForm");

const emailAuthInput = document.querySelector("#emailAuth");
const passAuthInput = document.querySelector("#passAuth");
const togglePasswordAuth = document.querySelector("#togglePasswordAuth");

const authError = document.querySelector("#authError");

const user = {
  email: "kimannais1711@gmail.com",
  password: "123456789",
};

togglePasswordAuth.addEventListener("click", function () {
  const isPassword = passAuthInput.type === "password";
  passAuthInput.type = isPassword ? "text" : "password";
  togglePasswordAuth.textContent = isPassword
    ? "Скрыть пароль"
    : "Показать пароль";
});

authForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const authErrorMessage = validateAuth();
  showError(authError, authErrorMessage);

  if (authErrorMessage) {
    return;
  }

  const formData = new FormData(authForm);
  const userAuthData = Object.fromEntries(formData.entries());

  console.log("User auth: ", userAuthData);
  alert("Успешная авторизация!");

  authForm.reset();
});

function validateAuth() {
  const emailValue = emailAuthInput.value.trim();
  const passValue = passAuthInput.value;

  if (emailValue === "" || passValue === "") {
    return "Пожалуйста заполните поля!";
  } else if (emailValue !== user.email || passValue !== user.password) {
    return "Неверные email или пароль";
  }
  return "";
}

// ------- SEARCH BLOCK ----------------------------------
const products = [
  {
    id: 1,
    title: "Cыр", // сыр
    desc: "Вкусный сыр",
    price: 1200,
  },
  {
    id: 2,
    title: "Булочка",
    desc: "Вкусная булочка",
    price: 500,
  },
  {
    id: 3,
    title: "Молоко",
    desc: "Вкусное молоко",
    price: 800,
  },
  {
    id: 4,
    title: "Яйца",
    desc: "30 штук",
    price: 1000,
  },
  {
    id: 5,
    title: "Колбаса",
    desc: "Вкусная колбаса",
    price: 2000,
  },
  {
    id: 6,
    title: "Яблоки",
    desc: "Вкусные яблоки",
    price: 1500,
  },
  {
    id: 7,
    title: "Рис",
    desc: "Вкусный рис",
    price: 900,
  },
];

const searchInput = document.querySelector("#searchInput");
const productsBlock = document.querySelector("#products");

function displayProducts(itemsToDisplay) {
  if (itemsToDisplay.length === 0) {
    productsBlock.innerHTML =
      '<div class="no-res">По вашему запросу ничего не найдено...</div>';
    return;
  }

  productsBlock.innerHTML = itemsToDisplay
    .map(
      (product) => `
      <div class="product-item">
          <h3 class="product-item__title">${product.title}</h3>
          <p class="product-item__desc">${product.desc}</p>
          <div class="product-item__price">${product.price} ₸</div>
      </div>
    `,
    )
    .join("");
}

searchInput.addEventListener("input", function (event) {
  const query = event.target.value.toLowerCase().trim(); //  Сыр => сыр

  const filteredData = products.filter((product) => {
    const titleMatch = product.title.toLowerCase().includes(query);
    const descMatch = product.desc.toLowerCase().includes(query);
    return titleMatch || descMatch;
  });

  displayProducts(filteredData);
});

const newProduct = {
  id: 8,
  title: "Мука",
  desc: "Первый сорт",
  price: 1100,
};

// Добавить в конце массива
products.push(newProduct);

// Добавить в самое начало массива
products.unshift(newProduct);
displayProducts(products);

// Мини админка
// поля ввода для добавления продукта в исходный массив
// id
// title
// desc
// price
// кнопка сохранения и очистки
// при сохранении отображается модальное окошко
//           в котором написано сообщение об успехе
// добавить кол-во продукта
